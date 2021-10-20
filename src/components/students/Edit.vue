<template>
  <div class="container-fluid" id="edit">
    <h3 class="title">Sữa thông tin sinh viên</h3>
    <!-- chức vụ nghành học -->
    <div class="row form-group">
      <div class="col-12 col-md-6">
        <p>Chức vụ</p>
        <b-select class="select-add" v-model="student.position">
          <option value="Sinh viên">Sinh viên</option>
          <option value="Giảng viên">Giảng viên</option>
          <option value="trợ giảng">trợ giảng</option>
        </b-select>
      </div>
      <div class="col-12 col-md-6">
        <p>Nghành học</p>
        <b-select class="select-add" v-model="student.nghanhHoc">
          <option value="công nghệ thông tin">Công nghệ thông tin</option>
          <option value="marketting">marketting</option>
          <option value="Điện tử viễn thông">Điện tử viễn thông</option>
          <option value="Tự động hóa">Tự động hóa</option>
          <option value="An toàn thông tin">An toàn thông tin</option>
        </b-select>
      </div>
    </div>
    <!-- họ tên mã sinh viên -->
    <div class="row form-group">
      <div class="col-12 col-md-6">
        <label for="fullName">Họ tên</label>
        <input id="fullName" v-model="student.fullName" type="text" />
      </div>
      <div class="col-12 col-md-6">
        <label for="maSV">Mã sinh viên</label>
        <input id="maSV" v-model="student.maSV" type="text" />
      </div>
    </div>

    <!-- quê quán email -->
    <div class="row form-group">
      <div class="col-12 col-md-6">
        <label for="nativePlace">Quên quán</label>
        <input id="nativePlace" v-model="student.nativePlace" type="text" />
      </div>
      <div class="col-12 col-md-6">
        <label for="email">email</label>
        <input id="email" v-model="student.email" type="text" />
      </div>
    </div>
    <!-- ngày sinh địa chỉ -->
    <div class="row form-group">
      <div class="col-12 col-md-6">
        <label for="date">Ngày sinh</label>
        <input id="date" v-model="student.date" type="text" />
      </div>
      <div class="col-12 col-md-6">
        <label for="adress">địa chỉ</label>
        <input id="adress" v-model="student.adress" type="text" />
      </div>
    </div>
    <!-- điểm số tình trạng -->
    <div class="row form-group">
      <div class="col-12 col-md-6">
        <p>Giới tính</p>
        <b-select class="select-add" v-model="student.gender" value="TT">
          <option value="Nam">Nam</option>
          <option value="Nữ">Nữ</option>
        </b-select>
      </div>

      <div class="col-12 col-md-6">
        <p>Tình trạng</p>
        <b-select class="select-add" v-model="student.condistion">
          <option value="Đang học">Đang học</option>
          <option value="Đang dạy">Đang dạy</option>
          <option value="Tốt nghiệp">Tốt nghiệp</option>
        </b-select>
      </div>
    </div>

    <!-- điểm số -->

    <div class="row form-group">
      <div class="col-12">
        <label for="score">Điểm số</label>
        <input id="score" v-model="student.score" type="text"/>
      </div>
    </div>

    <!-- button  -->
    <div class="group-btn">
      <button @click="previous" class="btn btn-secondary">Trở về</button>
      <button @click="reset" class="btn btn-warning">Làm mới</button>
      <button @click="confirm" class="btn btn-success">Lưu</button>
    </div>

    <!-- modal box  -->
    <div class="modal-edit">
      <div class="modal-content">
        <div class="header-modal">
          <p>Thông tin chỉnh sữa</p>
        </div>
        <div class="body-modal">
          <span>Họ tên: {{ student.fullName }}</span>
          <span>Mã Sinh viên: {{ student.maSV }}</span>

          <span>Giới tính: {{ student.gender }}</span>

          <span>ngày sinh: {{ student.date }}</span>

          <span>Email: {{ student.email }}</span>

          <span>Số điện thoại: {{ student.phone }}</span>

          <span>Địa chỉ: {{ student.adress }}</span>

          <span>Nghành học: {{ student.nghanhHoc }}</span>

          <span>Quên quán: {{ student.nativePlace }}</span>

          <span>Chức vụ: {{ student.position }}</span>
          <span>Điểm số: {{ student.score }}</span>
        </div>
        <div class="footer">
          <button @click="cancel" class="btn btn-secondary btn-sm radius-0px">Hủy</button>
          <button @click="editstudent" class="btn btn-success btn-sm radius-0px">Oke</button>
        </div>
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
      students: [],
      student: {},
      idStudent: this.$route.params.id, // id sinh viên
    };
  },
  methods: {
    reset() {
      this.student = {}
    },
    confirm() {
      // xác nhận xem người dùng có muốn chĩnh sữa
      document.querySelector(".modal-edit").style.display = "flex";
    },
    loader: function () {
      fetch("http://localhost:3000/students")
        .then((repos) => repos.json())
        .then((data) => (this.students = data));
    },
    cancel() {
      document.querySelector(".modal-edit").style.display = "none";
    },
    editstudent() {
      const url = "http://localhost:3000/students/" + this.idStudent;
      console.log(url);
      const options = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.student),
      };
      fetch(url, options);

      document.querySelector(".modal-edit").style.display = "none";
    },
    previous() {
      this.$router.go(-1);
    },
  },
  watch: {
    students: function (list) {
      this.student = list.find((std) => std.id == this.idStudent);
    },
  },
};
</script>

<style scoped>
#edit {
  padding: 0;
  margin: 0;
  box-sizing: content-box;
  font-family: "Roboto", sans-serif;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}




.form-group {
  padding: 16px 0px;
  margin: 0;
}

.form-group > div > input {
  border-radius: 4px;
  width: 100%;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  height: 38px;
  padding: 8px;
}

.select-add {
  width: 100%;
  cursor: pointer;
}

.btn-edit {
  display: inline-block;
  padding: 0px 4px;
  border: none;
  min-width: 90px;
  height: 35px;
  line-height: 35px;
  margin-right: 16px;
  border-radius: 4px;
  background-color: green;
  color: white;
  font-size: 18px;
  font-weight: 400;
}

.btn-edit:hover {
  opacity: 0.8;
}

.group-btn {
  padding: 12px 15px;
  padding-bottom: 28px;
}

.modal-edit {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: none;
  justify-content: center;
  align-items: center;
}

.header-modal p {
  margin: 0;
  height: 56px;
  font-size: 24px;
  text-align: center;
  line-height: 56px;
  opacity: 0.8;
  background-color: #9370db;
  color: white;
}

.modal-content {
  width: 370px;
  height: 460px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.body-modal {
  display: flex;
  flex-direction: column;
}

.body-modal span {
  padding: 5px 25px;
}





.footer {
  display: flex;
}

.footer button {
  width: 100%;
  height: 100%;
  padding: 16px 0px;
  border: none;

  font-size: 18px;
  font-weight: 500;
}

.group-btn button {
  margin-right: 15px;
}

</style>