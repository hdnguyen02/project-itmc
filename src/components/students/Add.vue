<template>
  <div class="container-fluid" id="add">
    <h3>Thêm sinh viên</h3>
    <!-- chức vụ ngành học -->
    <!-- bắc đầu coppy -->

    <div class="row form-group">
      <div class="col-sm-12 col-md-6">
        <span>Chức vụ</span>
        <b-select v-model="newStudent.position" class="select-add">
          <option value="Sinh viên">Sinh viên</option>
          <option value="Giảng viên">Giảng viên</option>
          <option value="Trợ giảng">Trợ giảng</option>
        </b-select>
      </div>
      <div class="col-sm-12 col-md-6">
        <span>Nghành học</span>
        <b-select v-model="newStudent.nghanhHoc" class="select-add">
          <option value="Công nghệ thông tin">Công nghệ thông tin</option>
          <option value="marketting">marketting</option>
          <option value="Điện tử viễn thông">Điện tử viễn thông</option>
          <option value="Tự động hóa">Tự động hóa</option>
          <option value="An toàn thông tin">An toàn thông tin</option>
        </b-select>
      </div>
    </div>
    <!-- hình ảnh  -->
    <div class="row form-group">
      <div class="col-sm-12 col-md-6">
        <label id="lable-avatar" style="margin-right: 5px" for="avatar"
          >image</label
        >
        <input
          type="file"
          id="avatar"
          name="avatar"
          accept="image/png, image/jpeg"
        />
      </div>
    </div>
    <!-- Họ tên mã nhân viên -->
    <div class="row form-group">
      <div class="col-sm-12 col-md-6">
        <label for="fullName">Họ tên</label>
        <input
          v-model="newStudent.fullName"
          id="fullName"
          type="text"
          placeholder="Họ tên"
        />
      </div>
      <div class="col-sm-12 col-md-6">
        <label for="maSV">Mã sinh viên</label>
        <input
          v-model="newStudent.maSV"
          id="maSV"
          type="text"
          placeholder="Mã sinh viên"
        />
      </div>
    </div>
    <!-- năm sinh địa chỉ -->
    <div class="row form-group">
      <div class="col-sm-12 col-md-6">
        <label for="date">Năm sinh</label>
        <input
          v-model="newStudent.date"
          id="date"
          type="date"
          placeholder="Năm sinh"
        />
      </div>
      <div class="col-sm-12 col-md-6">
        <label for="adress">Địa chỉ hiện tại</label>

        <input
          v-model="newStudent.adress"
          id="adress"
          type="text"
          placeholder="địa chỉ"
        />
      </div>
    </div>
    <!-- giới tính số điện thoại -->
    <div class="row form-group">
      <div class="col-sm-12 col-md-6">
        <label for="phone">Số điện thoại</label>
        <input
          v-model="newStudent.phone"
          id="phone"
          type="number"
          placeholder="Số điện thoại"
        />
      </div>
      <div class="col-sm-12 col-md-6">
        <span>Giới tính</span>
        <b-select v-model="newStudent.gender" class="select-add">
          <option value="Nam">Nam</option>
          <option value="Nữ">Nữ</option>
        </b-select>
      </div>
    </div>
    <!-- quê quán email -->
    <div class="row form-group">
      <div class="col-sm-12 col-md-6">
        <label for="nativePlace">Quê quán</label>
        <input v-model="newStudent.nativePlace" id="nativePlace" type="text" />
      </div>
      <div class="col-sm-12 col-md-6">
        <label for="email">Email</label>
        <input
          v-model="newStudent.email"
          id="email"
          placeholder="Email"
          type="email"
        />
      </div>
    </div>
    <!-- điểm số tình trạng -->
    <div class="row form-group">
      <div class="col-sm-12 col-md-6">
        <label for="score">Điểm</label>
        <input
          v-model="newStudent.score"
          type="number"
          id="score"
          placeholder="Điểm"
        />
      </div>
      <div class="col-sm-12 col-md-6">
        <span>Tình trạng</span>
        <b-select v-model="newStudent.condistion" class="select-add" value="TT">
          <option value="Đang học">Đang học</option>
          <option value="Đang dạy">Đang dạy</option>
          <option value="Tốt nghiệp">Tốt nghiệp</option>
        </b-select>
      </div>

      <!-- dừng coppy -->

    </div>
    <div class="row form-group">
      <div class="col-12" id="group-btn">
        <button @click="previous" class="button-add background-red">Trở về</button>
        <button @click="resetStudent" class="button-add">Làm mới</button>
        <button id="btn-login" @click.prevent="checkStudent" class="button-add">
          Thêm
        </button>
      </div>
    </div>
    <div class="modal-error">
      <div class="content-box">
        <div>
          <p>Nhập thiếu trường!</p>
        </div>
        <div>
          <button @click="previousError" class="button-add">Xác nhận</button>
        </div>
      </div>
    </div>
    <!-- xác nhận sinh viên -->
    <div id="modal-confirm">
      <div class="content-box">
        <div>
          <p>Xác nhận thêm sinh viên</p>
        </div>
        <div class="btn-double">
          <button @click="cancel" class="button-add background-red">Hủy</button>
          <button @click="addStudent" class="button-add">Thêm sinh viên</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.validate();
  },
  data() {
    return {
      newStudent: {
        maSV: "",
        image: "Hình ảnh",
        fullName: "",
        gender: "Nam",
        phone: "",
        date: "",
        adress: "",
        position: "Sinh viên",
        email: "",
        condistion: "Đang học",
        score: "",
        nghanhHoc: "Công nghệ thông tin",
        nativePlace: "",
      },
      listValidate: [
        "maSV",
        "fullName",
        "phone",
        "date",
        "adress",
        "email",
        "score",
        "nativePlace",
      ],
    };
  },
  methods: {
    checkStudent: function () {
      var check = true;
      for (const property in this.newStudent) {
        if (this.newStudent[property] === "") {
          document.getElementById(property)?.classList.add("error");
          check = false; 
        }
      }
      if (check === false) {
        document.querySelector(".modal-error").style.display = "flex";
      } else {
        document.getElementById("modal-confirm").style.display = "flex";
      }
    },
    previous: function () {
      this.$router.go(-1);
    },
    previousError: function () {
      document.querySelector(".modal-error").style.display = "none";
    },
    validate: function () {
      this.listValidate.forEach(function (inputNode) {
        document
          .getElementById(inputNode)
          .addEventListener("click", function () {
            document.getElementById(inputNode).classList.remove("error");
          });
      });
    },
    addStudent: function () {
      const linkStudents = "http://localhost:3000/students";
      var options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.newStudent),
      };
      fetch(linkStudents, options)
          this.resetStudent();
          this.cancel();
    },
    cancel: function () {
      document.getElementById("modal-confirm").style.display = "none";
    },
    resetStudent: function () {
      this.listValidate.forEach (
        function (inputNode) {
          document.getElementById(inputNode).classList.remove('error');
        }
      )

      this.newStudent = {
        maSV: "",
        image: "Hình ảnh",
        fullName: "",
        gender: "Nam",
        phone: "",
        date: "",
        adress: "",
        position: "Sinh viên",
        email: "",
        condistion: "Đang học",
        score: "",
        nghanhHoc: "Công nghệ thông tin",
        nativePlace: "",
      };
    },
  },
};
</script>


<style scoped >
.error {
  border: 1px solid red !important;
}

#add {
  margin: 0;
  box-sizing: content-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 0;
}

#add h3 {
  margin: 0;
  padding-top: 10px;
  padding-left: 15px;
  font-size: 28px;
  font-weight: 400;
  opacity: 0.8;
}

.form-group {
  padding: 16px 0px;
  margin: 0;
}

.form-group:nth-child(3) {
  padding: 0px;
  margin: 0;
}

.form-group > div > span {
  display: block;
  padding: 5px 4px;
  font-size: 16px;
  opacity: 0.8;
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

#avatar {
  border: none;
  border-radius: 4px;
  font-size: 16px;
  opacity: 0.8;
  padding: 0;
  min-width: 160px;
  display: inline;
}

.select-add {
  width: 100%;
  cursor: pointer;
}

input::placeholder {
  font-size: 14px;
  font-weight: 500;
  padding: 0px 14px;
  opacity: 0.8;
}

.button-add {
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

#group-btn {
  padding: 16px 15px;
}

#group-btn button:hover {
  opacity: 0.7;
  cursor: pointer;
}

#lable-avatar {
  display: inline-block;
  padding: 0;
}

/* modal box */

.modal-error {
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
  justify-content: center;
  align-items: center;
}

.content-box {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: white;
  width: 500px;
  height: 170px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.content-box > div > p {
  margin: 0;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  opacity: 0.8;
  height: 120px;
  line-height: 120px;
}

.content-box > div > button {
  width: 100%;
  height: 50px;
  line-height: 50px;
}

.content-box > div > button:hover {
  opacity: 0.8;
}
.btn-double {
  display: flex;
}

.btn-double > button {
  margin: 0;
  border-radius: 0;
}

/* xác nhận thêm sinh viên */
#modal-confirm {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
}
</style>