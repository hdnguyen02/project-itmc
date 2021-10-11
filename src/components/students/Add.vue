<template>
  <div id="addStdudent" >
      <h4>Thêm sinh viên</h4>
      <!-- nghành học và chức vụ của sinh viên -->
      <div class="formgroup" >
        <div>
          <label for="phongban">Nghành học:</label>
          <input v-model="createstd.nghanhHoc" id="phongban" class="inputadd" type="text">
        </div>
        <div>
          <label for="conditon">Chức vụ:</label>
          <input v-model="createstd.postion" id="conditon" class="inputadd" type="text">
        </div>
      </div>
      <!-- thêm hình ảnh -->
      <div class="imageStd" >
        <span>Ảnh</span>
        <button>Chọn tệp</button>
        <span>Không có tệp nào được chọn</span>
      </div>
      <!-- họ tên mã số sinh viên -->
      <div class="formgroup">
          <div>
            <label for="name">Họ tên:</label>  
            <input v-model="createstd.fullName" class="inputadd" id="name" type="text">
          </div>
          <div>
            <label for="maSV">mã sinh viên:</label>
            <input v-model="createstd.maSV" class="inputadd" id="maSV" type="text">
          </div>
      </div>
      <!-- Năm sinh địa chỉ -->
      <div class="formgroup">
          <div>
            <label for="date">Năm sinh:</label>
            <input v-model="createstd.date" class="inputadd" id="date" placeholder="dd/mm/yyyy" type="text">
          </div>
          <div>
            <label for="adress">Địa chỉ hiện tại</label>
            <input v-model="createstd.adress" class="inputadd" id="adress" type="text">
          </div>
      </div>
      <!-- giới tính số điện thoại -->
      <div class="formgroup">
          <div>
            <label for="gender">Giới tính</label>
            <input v-model="createstd.gender" class="inputadd" id="gender" type="text">
          </div>
          <div>
            <label for="phone">Số điện thoại</label>
            <input v-model="createstd.phone" class="inputadd" id="phone" type="text">
          </div>
      </div>
      <!-- quê quán email -->
      <div class="formgroup">
          <div>
            <label for="quequan">Quê quán</label>
            <input v-model="createstd.nativePlace" class="inputadd" id="gender" type="text">
          </div>
          <div>
            <label for="email">Email</label>
            <input v-model="createstd.email" class="inputadd" id="phone" type="text">
          </div>
      </div> 
      <!-- tình trạng và điểm của sinh viên -->
      <div class="formgroup" >
        <div>
            <label for="condistion">Tình trạng</label>
            <input v-model="createstd.condistion" class="inputadd" id="gender" type="text">
          </div>
          <div>
            <label for="score">Email</label>
            <input v-model="createstd.score" class="inputadd" id="score" type="text">
          </div>
      </div>

      <div class="btnStdAdd" >
          <button style="background-color: rgb(28, 200, 138)" @click="addStudent" >Thêm</button>
          <button style="background-color: rgb(175, 175, 175)"  @click="resetAdd" >làm mới</button>
          <button style="background-color: rgb(231, 74, 59)" @click="previous" >trở về</button>


      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      createstd:{
        maSV:"",  
        image:"hình ãnh", 
        fullName:"", 
        gender:"",   
        phone:"",    
        date:"",           
        adress:"",           
        postion:"",            
        nativePlace:"",         
        email:"",                
        condistion:"",  
        score:"",   
        nghanhHoc:"", 
      }
    }
  },
  methods:{
    // 
    addStudent () {
     
      const linkStudents = "http://localhost:3000/sudents";
      var options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(this.createstd)
      }
      fetch(linkStudents,options)
      this.resetAdd();
    },
    resetAdd () {
      // cho tất cả reset về trạng thái ban đầu. 
      this.createstd = {
        maSV:"",  
        image:"hình ãnh", 
        fullName:"", 
        gender:"",   
        phone:"",    
        date:"",           
        adress:"",           
        postion:"",            
        nativePlace:"",         
        email:"",                
        condistion:"",  
        score:"",   
        nghanhHoc:"", 
      }
    },
    previous () {
      // quay về trang home 
      this.$router.go(-1); 
    }
    
  }
}
</script>

<style scoped >
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
* {
  padding: 0;
  margin: 0;
  box-sizing: content-box;
  font-family: 'Roboto', sans-serif;
}

*:focus {
    outline: none;
}

#addStdudent {
  padding:20px;
  overflow: hidden;
}
#addStdudent h4 {
  font-size: 28px;
  opacity: 0.6;
  font-weight: 900;

}

.inputadd {
  outline: none;
  border-radius: 8px;
  border:1px solid rgba(0, 0, 0, 0.4);
  padding:0px 8px;
}

.formgroup {
  display: flex;
  justify-content: space-between;
  padding:8px 0px;
}

.formgroup input {
  min-width: 500px;
  height: 35px;

}
.formgroup label {
  display: block;
  padding: 10px 0px;
  opacity: 0.8;
  font-weight: 900;
}

.imageStd {
  padding:8px;
}

.imageStd button {
  margin: 0px 4px;
  border: none;
  border-radius: 4px;
  color: black;
  font-size: 16px;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.2);
  width: 78px;
  font-weight: 900px;
}

.btnStdAdd button {
  display: inline;
  color: white;
  height: 35px;
  width: 90px;
  border: none;
  line-height: 35px;
  border-radius: 16px;
  margin-right: 4px;


}




</style>