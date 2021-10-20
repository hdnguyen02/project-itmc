<template>
  <div id="student" class="container-fluid">
    <div class="content" >


    
    <h3 class="title">Sinh viên: {{ student.fullName }}</h3>
    <span class="title">Mã sinh viên: {{ student.maSV }}</span>
    <!-- Nghành học chức vụ -->
    <div class="row form-group">
        <div class="col-12 col-md-6">
          <label for="position">Chức vụ</label>
          <input  id="position" v-model="student.position" disabled="true" type="text">
        </div>
         <div class="col-12 col-md-6">
           <label for="nghanHoc">Nghành học</label>
           <input id="nghanHoc" v-model="student.nghanhHoc" disabled="true" type="text">
        </div>  
    </div>
    <!-- họ tên tình trạng -->
    <div class="row form-group">
        <div class="col-12 col-md-6">
          <label for="fullName">Họ tên</label>
          <input  id="fullName" v-model="student.fullName" disabled="true" type="text">
        </div>
         <div class="col-12 col-md-6">
           <label for="condistion">Tình trạng</label>
           <input id="condistion" v-model="student.condistion" disabled="true" type="text">
        </div>  
    </div>
    <!-- Năm sinh địa chỉ  -->
    <div class="row form-group">
        <div class="col-12 col-md-6">
          <label for="date">Năm sinh</label>
          <input  id="date" v-model="student.date" disabled="true" type="text">
        </div>
         <div class="col-12 col-md-6">
           <label for="adress">Tình trạng</label>
           <input id="adress" v-model="student.adress" disabled="true" type="text">
        </div>  
    </div>
    <!-- email số điện thoại -->
    <div class="row form-group">
        <div class="col-12 col-md-6">
          <label for="email">email</label>
          <input  id="email" v-model="student.email" disabled="true" type="text">
        </div>
         <div class="col-12 col-md-6">
           <label for="phone">Số điện thoại</label>
           <input id="phone" v-model="student.phone" disabled="true" type="text">
        </div>  
    </div>
    <!-- điểm số giới tính  -->
      <div class="row form-group">
        <div class="col-12 col-md-6">
          <label for="gender">Giới tính</label>
          <input  id="gender" v-model="student.gender" disabled="true" type="text">
        </div>
         <div class="col-12 col-md-6">
           <label for="score">Điểm số</label>
           <input id="score" v-model="student.score" disabled="true" type="text">
        </div> 
    </div>
    <!-- Mã sinh viên que quán -->
     <div class="row form-group">
        <div class="col-12 col-md-6">
          <label for="maSV">Mã sinh viên</label>
          <input  id="maSV" v-model="student.maSV" disabled="true" type="text">
        </div>
         <div class="col-12 col-md-6">
           <label for="nativePlace">Quê quán</label>
           <input id="nativePlace" v-model="student.nativePlace" disabled="true" type="text">
        </div> 
    </div>
    <div class="btn-gr">
      <button class="btn btn-secondary" @click="previous">trở về</button>
      <button class="btn btn-primary" @click="nextEdit">Sữa thông tin</button>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.loader();
  },
  data() {
    return {
      student: {}, 
      students: [],
    };
  },
  watch: {
    students(newData) {
      const idFind = this.$route.params.id;
      this.student = newData.find((std) => std.id == idFind);
    },
  },
  methods: {
    loader() {
      fetch("http://localhost:3000/students")
        .then((repos) => repos.json())
        .then((data) => (this.students = data));
    },
    previous() {
      this.$router.go(-1);
    },
    nextEdit() {
      this.$router.push({ name: "Edit" });
    },
  },
};
</script>

<style scoped >
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");

.content {
  padding: 10px 10px;
}

#student {
  font-family: "Roboto", sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: content-box;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}



.btn-gr {
  padding: 16px 15px;
}

.btn-gr > button {
  margin-right: 16px;
}

.form-group {
  padding: 16px 0px;
  margin: 0;
}

.form-group > div > label {
  display: block;
  padding: 5px 4px;
  margin: 0;
  font-size: 16px;
  opacity: 0.8;
}

.form-group > div > input {
  border-radius: 4px;
  width: 100%;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  height: 38px;
  padding: 8px;
}
</style>