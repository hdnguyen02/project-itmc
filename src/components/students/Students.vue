<template>
    <div id="students" class="container-fluid">
      <div id="content" >
        <header-add  />
        <search-students :showStudents="showStudents" :tangshow="tangshow" :giamshow="giamshow" />
      <div  id="table">
            <div class="row no-gutters">  
                <div class="col-1 border">Mã số SV
                <span style="margin-left:10px"><awesome icon="sort" /></span>
                </div>
                <div class="col-1 border">Ảnh</div>
                <div class="col-2 border">Họ tên
                <span style="margin-left:10px"><awesome icon="sort" /></span>
                </div>
                <div class="col-1 border">Giới tính</div>
                <div class="col-2 border">email</div>
                <div class="col-2 border">nghành học</div>
                <div class="col-1 border">Xem</div>
                <div class="col-1 border">Sữa</div>
                <div class="col-1 border">Xóa</div>
            </div> 
            <div class="row no-gutters border-top border-bottom row-custom" v-for="(student,index) in listRender" :key="index">
                <div class="col-1 border-left border-right  ">{{student.maSV }}</div>
                <div class="col-1 border-left border-right ">{{student.image }}</div>
                <div class="col-2 border-left border-right ">{{student.fullName }}</div>
                <div class="col-1 border-left border-right ">{{student.gender }}</div>
                <div class="col-2 border-left border-right ">{{student.email }}</div>
                <div class="col-2 border-left border-right ">{{student.nghanhHoc}}</div>
                <div class="col-1 border-left border-right ">
                  <!-- Xem chĩnh sữa xóa -->
                  <router-link class="btn btn-info min-width-60px" :to="{ name: 'Student', params: { id: student.id } }" >Xem</router-link>
                </div>
                <div class="col-1 border-left border-right ">
                  <router-link class="btn btn-primary min-width-60px"  :to="{ name: 'Edit', params: { id: student.id } }" >Sữa</router-link>
                </div>
                <div class="col-1 border-left border-right ">
                  <button @click="confirm(student.id,student.fullName,student.maSV,students)" class="btn btn-danger min-width-60px">Xóa</button>
                </div>
            </div> 
      </div>
                                
  <!-- pagination -->
  <div id="pagination">
      <p>Show in 1 to {{ showStudents.length }} to {{ lengthArrStudents }}</p>
      <div>
        <span @click="previousStep">
          <awesome icon="angle-double-left"/>
        </span>
        <span class="btn-click" :id="index+1" @click="pageChange(index + 1)" v-for="(item, index) in new Array(this.page)" :key="index">
        {{ index + 1 }}
        </span>
        <span @click="nextStep" class="stepBtn">
          <awesome icon="angle-double-right"/>
        </span>
      </div>
    </div>

    <!-- modal delete-->
    <div class="modal-delete">
      <div class="content-delete">
         <div class="header-delete">
            <p>Bạn có muốn xóa sinh viên này!</p>
         </div>
         <div class="body-delete">
           <div>
           <span>Họ tên: </span>
            <span class="name-delete"></span>
           </div>
           <div>
           <span>Mã số sinh viên: </span>
           <span class="maSV-delete"></span>
           </div>
         </div>
         <div class="footer-delete">
           <button class="btn btn-secondary cancelDelete radius-0px">Hủy</button>
           <button class="btn btn-danger deleteOke radius-0px">Oke</button>
         </div>
      </div>
    </div>
  
  </div>
  </div>
</template>

<script>
import HeaderAdd from "./HeaderAdd.vue";
import SearchStudents from "./SearchStudents.vue";

export default {
  components: {
    HeaderAdd,
    SearchStudents,
  },
  data() {
    return {
      config: [],
      title: "http://localhost:3000/config",
      studentsJson: "http://localhost:3000/students",
      students: [],
      page: undefined, 
      showStudents: {
        length:8
      }, 
      curentPage: 1, 
      listRender: [],
      idDelete: undefined,
     
    };
  },
  computed:{
    lengthArrStudents:function () {
      return this.students.length; 
    }
  },
  mounted() {
    this.loader();
      document.getElementById("1").classList.add('clickPage'); 
  },
  watch: {
    showStudents:{
      deep:true,
      handler (newShow) {
        this.curentPage = 1;
        console.log(`${(parseInt(newShow.length, 10)+1)*50}px`);
          const tableNode = document.getElementById('table');
          tableNode.style.minHeight = `${(parseInt(newShow.length, 10)+1)*50}px`;
            tableNode.style.maxHeight = `${(parseInt(newShow.length, 10)+1)*100}px`;
            this.page = this.students.length /  newShow.length; 
            this.listRender = this.students.slice(0,  newShow.length);
            if (this.students.length % newShow.length != 0) {
              this.page = Math.trunc(this.page) + 1;
            }
        
     
    }
    } ,
    students() {
      this.page = this.students.length / this.showStudents.length; 
      this.listRender = this.students.slice(0, this.showStudents.length);
      if (this.students.length % this.showStudents.length != 0) {
        this.page = Math.trunc(this.page) + 1;
      }
    },
    curentPage(newVal,oldVal) {  // góa trị vừa thay đổi song 
      document.getElementById(oldVal).classList.remove('clickPage');
      document.getElementById(newVal).classList.add('clickPage');
      this.listRender = this.students.slice(
        (newVal - 1) * this.showStudents.length,
        (newVal - 1) * this.showStudents.length + this.showStudents.length
      );
    },
  },
  methods: {
    tangshow() {
       if (this.showStudents.length != this.students.length ) {
      this.showStudents.length++;
      }
    },
    giamshow() {
     
      if (this.showStudents.length > 8) {
        this.showStudents.length--;
      }
    },
    confirm(id,name,ms,arrStudent) {
      document.querySelector('.modal-delete').style.display='flex';
      document.querySelector('.cancelDelete').addEventListener ('click', function () {
      document.querySelector('.modal-delete').style.display='none';         
        }
      )
      document.querySelector('.name-delete').innerText=name;
      document.querySelector('.maSV-delete').innerText=ms;
      document.querySelector('.deleteOke').addEventListener('click',
          function () {
            var url = 'http://localhost:3000/students/' + id;
      fetch (url,{
        method:'DELETE',
         headers: {'Content-Type': 'application/json'},
      }
      )
      arrStudent.forEach (
        function (student,index,arr) {
          if (student.id == id ) {
            arr.splice(index,1);
          }
        }
      )
      document.querySelector('.modal-delete').style.display='none';
          }
        )
 
    },
    pageChange(numberClick) { 
      this.curentPage = numberClick;
      this.listRender = this.students.slice(
        (numberClick - 1) * this.showStudents.length,
        (numberClick - 1) * this.showStudents.length + this.showStudents.length
      );
    },
    loader() {
      fetch(this.title)
        .then((repos) => repos.json())
        .then((data) => (this.config = data));
      fetch(this.studentsJson)
        .then((repos) => repos.json())
        .then((data) => (this.students = data));
    },
    nextStep() {
      if (this.curentPage != this.page) {
        this.curentPage++;
      }
    },
    previousStep() {
      if (this.curentPage != 1) {
        this.curentPage--;
      }
    },
    modalDelete(id) {
      document.querySelector("#removeStd").style.display = "flex";
      this.idDelete = id;
    },
    deleteOke() {
      var url = "http://localhost:3000/students/" + this.idDelete;
      const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      };
      fetch(url, options); 
      this.deleteCancel();
      this.loader();
    },
    deleteCancel() {
      document.querySelector("#removeStd").style.display = "none";
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");


#content {
  padding: 0px 15px;
}

#students {
  padding: 15px;
  margin: 0;
  box-sizing: content-box;
  font-family: "Roboto", sans-serif;
}


.row-custom:nth-child(even) {
  background-color: #E6E6FA;
}

.clickPage {
  background-color: rgba(47, 86, 200, 1);
  color: white;
  font-weight: 500;
}



#table {
  min-height: 470px;
  max-height: 1000px;
}

#table div div {
  min-height: 50px;
  max-height: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#pagination {
  display: flex;
  justify-content: space-between;
  padding: 10px 0px;

}

#pagination div span {
  width: 30px;
  height: 35px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: inline-block;
  line-height: 35px;
  text-align: center;
  cursor: pointer;
  font-size: 16px;
}




.modal-delete {
  display: none;
  position:absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
}

.content-delete {
  display: flex;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 400px;
  height: 200px;
  flex-direction: column;
  justify-content: space-between;


}

.header-delete p {
  height: 54px;
  line-height: 54px;
  font-size: 18px;
  color: white;
  background-color: green;
  text-align: center;
  font-weight: 500;
  margin: 0;
}

.footer-delete {
  display: flex;
}

.footer-delete button {
  	width:100%;
    height: 100%;
    padding: 12px 0px;
    border: none;
    
}

.body-delete > div {
  padding: 0px 16px;
  font-size: 18px;
  opacity: 0.8;
  font-weight: 400;
}


</style>

