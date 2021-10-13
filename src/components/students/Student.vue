<template>
  <div id="student">
    <h5>Sinh viên: {{ student.fullName }}</h5>
    <span>Mã sinh viên: {{ student.maSV }}</span>
    <div>
      <!-- nghành học chức vụ -->
      <div class="formgroup">
        <div>
          <label for="nganhhoc">nghành học</label>
          <input
            disabled="disabled"
            v-model="student.nghanhHoc"
            class="inputadd"
            id="nganhhoc"
            type="text"
          />
        </div>
        <div>
          <label for="postion">Chức vụ</label>
          <input
            disabled="disabled"
            v-model="student.postion"
            class="inputadd"
            id="postion"
            type="text"
          />
        </div>
      </div>
      <!-- họ tên mã số sinh viên  -->
      <div class="formgroup">
        <div>
          <label for="fullName">Họ tên</label>
          <input
            disabled="disabled"
            v-model="student.fullName"
            class="inputadd"
            id="fullName"
            type="text"
          />
        </div>
        <div>
          <label for="maSV">Mã số sinh viên</label>
          <input
            disabled="disabled"
            v-model="student.maSV"
            class="inputadd"
            id="maSV"
            type="text"
          />
        </div>
      </div>
      <!-- Ngày sinh địa chỉ hiện tại -->
      <div class="formgroup">
        <div>
          <label for="date">Ngày sinh</label>
          <input
            disabled="disabled"
            v-model="student.date"
            class="inputadd"
            id="date"
            type="text"
          />
        </div>
        <div>
          <label for="adress">Địa chỉ hiện tại</label>
          <input
            disabled="disabled"
            v-model="student.adress"
            class="inputadd"
            id="adress"
            type="text"
          />
        </div>
      </div>
      <!-- giới tính số điện thoại -->
      <div class="formgroup">
        <div>
          <label for="gender">Giới tính</label>
          <input
            disabled="disabled"
            v-model="student.gender"
            class="inputadd"
            id="gender"
            type="text"
          />
        </div>
        <div>
          <label for="phone">Số điện thoại</label>
          <input
            disabled="disabled"
            v-model="student.phone"
            class="inputadd"
            id="phone"
            type="text"
          />
        </div>
      </div>
      <!-- quên quán email -->
      <div class="formgroup">
        <div>
          <label for="quequan">Quê quán</label>
          <input
            disabled="disabled"
            v-model="student.nativePlace"
            class="inputadd"
            id="quequan"
            type="text"
          />
        </div>
        <div>
          <label for="score">Điểm số</label>
          <input
            disabled="disabled"
            v-model="student.score"
            class="inputadd"
            id="score"
            type="text"
          />
        </div>
      </div>
      <!-- email  -->

      <div id="formMail">
        <label for="email">Email</label>
        <input
          disabled="disabled"
          v-model="student.email"
          class="inputadd"
          id="email"
          type="text"
        />
      </div>
    </div>
    <div class="btn-gr">
      <button @click="nextEdit">Sữa thông tin</button>
      <button @click="previous">trở về</button>
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
      student: {}, // chứa sinh viên của ta.
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

*:focus {
  outline: none;
}

#student {
  font-family: "Roboto", sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: content-box;
}

#student h5 {
  font-size: 28px;
  opacity: 0.6;
  font-weight: 900;
}

.inputadd {
  border-radius: 8px;
  border: none;
  padding: 0px 8px;
  min-width: 500px;
  height: 35px;
  background-color: rgb(234, 236, 244);
}

.formgroup {
  display: flex;
  justify-content: space-between;
  padding: 8px 0px;
}

.formgroup label {
  display: block;
  padding: 10px 0px;
  opacity: 0.8;
  font-weight: 900;
}

#formMail {
  display: flex;
  flex-direction: column;
}

#formMail input {
  max-width: 500px;
}

.btn-gr {
  margin-top: 30px;
}

.btn-gr button {
  display: inline-block;
  color: white;
  height: 35px;
  width: 90px;
  border: none;
  line-height: 35px;
  border-radius: 4px;
  margin-right: 8px;
}

.btn-gr button:nth-child(1) {
  background-color: rgb(28, 200, 138);
}

.btn-gr button:nth-child(2) {
  background-color: rgb(231, 74, 59);
}
</style>