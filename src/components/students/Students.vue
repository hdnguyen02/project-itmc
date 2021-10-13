<template>

    <!-- <header-add class="margin" />
    <hr />
    <search-students class="margin" />
    <hr />

    <div id="students">
      <table>
        <tr>
          <td class="titleTable" v-for="(conf, index) in config" :key="index">
            {{ conf.name }}
          </td>
        </tr>
        <tr id="std" v-for="(student, index) in listRender" :key="index">
          <td>
            <span>{{ student.maSV }}</span>
          </td>
          <td>
            <span>Hình ảnh</span>
          </td>
          <td>
            <span>{{ student.fullName }}</span>
          </td>
          <td>
            <span>{{ student.gender }}</span>
          </td>
          <td>
            <span>{{ student.postion }}</span>
          </td>
          <td>
            <span>{{ student.condistion }}</span>
          </td>
          <td>
            <router-link
              class="btn-table backgroundBlue"
              :to="{ name: 'Student', params: { id: student.id } }"
              >Xem</router-link
            >
          </td>
          <td>
            <router-link
              class="btn-table backgroundGreen"
              :to="{ name: 'Edit', params: { id: student.id } }"
              >Sữa</router-link
            >
          </td>
          <td>
            <button
              @click="modalDelete(student.id)"
              class="btn-table backgroundRed"
            >
              Xóa
            </button>
          </td>
        </tr>
      </table>
    </div>
    <div id="paginations" class="margin">
      <p>Show in 1 to {{ showStudents }} to {{ students.length }}</p>
      <div>
        <span @click="previousStep" class="stepBtn">Previous</span>
        <span
          :class="{ backgroundBlue: true }"
          @click="pageChange(index + 1)"
          class="btnpage"
          v-for="(item, index) in new Array(this.page)"
          :key="index"
          >{{ index + 1 }}</span
        >
        <span @click="nextStep" class="stepBtn">Next</span>
      </div>
    </div>
   
    <div id="removeStd">
      <div id="modalRes">
        <p>Bạn có chắc chắc muốn xóa sinh viên này!</p>
        <div>
          <button
            @click="deleteOke"
            style="background-color: rgb(231, 74, 59)"
            class="btn-delete"
          >
            Xóa
          </button>
          <button
            @click="deleteCancel"
            style="background-color: rgba(47, 86, 200, 0.9)"
            class="btn-delete"
          >
            Hủy
          </button>
        </div>
      </div>
    </div> -->
  

    <div class="container-fluid" id="students" >

      <div id="content" >
        <header-add  />
        <search-students/>
      <div  id="table">
            <div class="row no-gutters title">  
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
                  <router-link class="btn-custom btn-manage" style="background-color: rgba(47, 86, 200, 1)" :to="{ name: 'Student', params: { id: student.id } }" >Xem</router-link>
                </div>
                <div class="col-1 border-left border-right ">
                  <router-link class="btn-custom btn-manage" style="background-color: rgba(75,0,130,0.9)" :to="{ name: 'Edit', params: { id: student.id } }" >Sữa</router-link>
                </div>
                <div class="col-1 border-left border-right ">
                  <button @click="confirm(student.id)" class="btn-custom btn-manage" style="background-color: rgb(231, 74, 59)">Xóa</button>
                </div>
            </div> 
      </div>
   
  <!-- pagination -->
  <div id="pagination">
      <p>Show in 1 to {{ showStudents.doDai }} to {{ lengthArrStudents }}</p>
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

    <!-- modal -->
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
           <button class="cancelDelete">Hủy</button>
           <button class="deleteOke">Oke</button>
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
        doDai:8
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
    students() {
      this.page = this.students.length / this.showStudents.doDai; // tính xem có bao nhiêu page.
      this.listRender = this.students.slice(0, this.showStudents.doDai);
      if (this.students.length % this.showStudents.doDai != 0) {
        this.page = Math.trunc(this.page) + 1;
      }
    },
    curentPage(newVal,oldVal) { 
      document.getElementById(oldVal).classList.remove('clickPage');
      document.getElementById(newVal).classList.add('clickPage');
      this.listRender = this.students.slice(
        (newVal - 1) * this.showStudents.doDai,
        (newVal - 1) * this.showStudents.doDai + this.showStudents.doDai
      );
    },
  },
  methods: {
    async delete(url = '') {
      const repos = await fetch(url, {
          method:'DELETE',
          headers: {'Content-Type': 'application/json'},
        }
      )
      return repos.json();
      
    },
    confirm(id) {
   
      var x = 'http://localhost:3000/students/' + id;
      fetch (x,{
        method:'DELETE',
         headers: {'Content-Type': 'application/json'},
      }
      )
      this.students.forEach (
        function (student,index,arr) {
          // so sanhs 
          if (student.id == id ) {
            arr.splice(index,1);
          }
        }
      )



    },
    pageChange(numberClick) {  // khi người dùng nhấn click ta sẽ reder lại cái mãng kia.
      this.curentPage = numberClick;
      this.listRender = this.students.slice(
        (numberClick - 1) * this.showStudents.doDai,
        (numberClick - 1) * this.showStudents.doDai + this.showStudents.doDai
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
  padding: 0;
  margin: 0;
  box-sizing: content-box;
  font-family: "Roboto", sans-serif;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}


#students .title {
  font-weight: 900;
  opacity: 0.8;
}


.row-custom:nth-child(even) {
  background-color: #E6E6FA;
}

.clickPage {
  background-color: rgba(47, 86, 200, 1);
  color: white;
  font-weight: 900;
}



#table {
  min-height: 500px;
  max-height: 1000px;
}

#table div div {
  min-height: 50px;
  max-height: 70px;
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

.btn-manage {
  font-size: 14px;
  font-weight: 600;
}

.btn-click {
  font-size: 12px;
  font-weight: 800;
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
  font-weight: 700;
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
  padding: 16px;
  font-size: 18px;
  opacity: 0.8;
  font-weight: 700;
}


</style>

