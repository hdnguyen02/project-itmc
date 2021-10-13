<template>
  <div>
    <header-add class="margin" />
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
              :to="{ name: 'Edit', params: { id: student.maSV } }"
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
    <!-- modal delete -->
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
      title: "http://localhost:3000/congig",
      studentsJson: "http://localhost:3000/students",
      students: [],
      page: undefined, // số page sẽ hiển thị ( tùy theo showStudents )
      showStudents: 8, // muốn hiển thị bao nhiêu sinh viên cùng lúc show
      curentPage: 1, // vị trí hiện tại của page ta đang đứng
      listRender: [],
      idDelete: undefined,
    };
  },
  mounted() {
    this.loader();
  },
  watch: {
    students() {
      this.page = this.students.length / this.showStudents;
      this.listRender = this.students.slice(0, this.showStudents);
      if (this.students.length % this.showStudents != 0) {
        this.page = Math.trunc(this.page) + 1;
      }
    },
    curentPage(newVal) {
      this.listRender = this.students.slice(
        (newVal - 1) * this.showStudents,
        (newVal - 1) * this.showStudents + this.showStudents
      );
    },
  },
  methods: {
    pageChange(data) {
      this.curentPage = data;
      this.listRender = this.students.slice(
        (data - 1) * this.showStudents,
        (data - 1) * this.showStudents + this.showStudents
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
      fetch(url, options); // báo lỗi 4 5 => 1 sinh viên này.
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


#students {
  height: 520px;
  padding: 0;
  margin: 0;
  box-sizing: content-box;
  font-family: "Roboto", sans-serif;
}

#students table {
  width: 99%;
  border: rgba(167, 167, 170, 0.05) 1px solid;
}

#students table td {
  border: rgba(167, 167, 170, 0.1) 1px solid;
}

.titleTable {
  height: 60px;
  text-align: center;
  line-height: 60px;
  font-size: 18px;
  font-weight: 800;
  background-color: rgb(244, 245, 249);
}

#std:nth-child(odd) {
  background-color: rgb(244, 245, 249);
}

#std td {
  padding: 12px 0px;
  text-align: center;
}

/* style btn - table  */

#students .btn-table {
  width: 54px;
  height: 32px;
  display: inline-block;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  line-height: 32px;
  text-align: center;
}

#paginations {
  display: flex;
  justify-content: space-between;
}

.btnpage {
  display: inline-block;
  height: 30px;
  width: 40px;
  color: rgb(78, 115, 223);
  border: rgba(167, 167, 170, 0.5) 1px solid;
  line-height: 30px;
  text-align: center;
}

.stepBtn {
  width: 70px;
  height: 30px;
  display: inline-block;
  line-height: 30px;
  text-align: center;
  border: rgba(167, 167, 170, 0.5) 1px solid;
}

.backgroundBlue {
  background-color: rgba(47, 86, 200, 0.9);
  color: white;
}

.backgroundGreen {
  background-color: rgb(54, 185, 204);
  color: white;
}

.backgroundRed {
  background-color: rgb(231, 74, 59);
  color: white;
}

.imgStd {
  height: 54px;
  display: inline-block;
}

.imgStd img {
  max-width: 100%;
}

/* style modal box */

#removeStd {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
  display: none;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
}

#modalRes {
  min-width: 450px;
  height: 240px;
  background: white;
}

#modalRes p {
  padding: 65px 15px;
  text-align: center;
  font-size: 20px;
}

#modalRes div {
  display: flex;
}

.btn-delete {
  border: none;
  display: inline-block;
  height: 80px;
  flex-grow: 1;
  font-size: 24px;
  color: white;
}

.btn-delete:hover {
  opacity: 0.8;
}


.margin {
    margin: 8px 0px;
}

</style>

