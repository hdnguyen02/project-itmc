<template>
  <div id="login">
    <div id="form">
      <h3>Welcome</h3>
      <span><img src="../assets/avatar-01.jpg" alt="" /></span>
      <div id="contentinputtext">
        <input
          v-model="user.email"
          class="input"
          placeholder="Username"
          type="text"
        />
      </div>
      <div>
        <input
          v-model="user.password"
          id="contentinputpass"
          class="input"
          placeholder="Password"
          type="password"
        />
      </div>
      <a @click.prevent="login" class="btn btn-success btn-login">Login</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      if (this.user.email == "admin" && this.user.password == "password") {
        this.$store.commit("setOwer", true);
        this.$router.push("/manage"); //
      } else {
        alert("mật khẩu không chính xác");
      }
    },
  },
};
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap");

#login {
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
  box-sizing: content-box;
  font-family: "Roboto", sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  min-height: 500px;
  max-height: 800px;
}

#form {
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  width: 400px;
  overflow: hidden;
}

#form h3 {
  padding-bottom: 75px;
  text-align: center;
  font-weight: 900;
  font-size: 40px;
}

#form img {
  border-radius: 50%;
  width: 100px;
}

#form span {
  text-align: center;
}

.input {
  width: 100%;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  height: 52px;
  padding-left: 10px;
}

#contentinputtext {
  margin-top: 85px;
  margin-bottom: 35px;
}

#contentinputpass {
  margin-bottom: 50px;
}






#form ul li:nth-child(1) {
  padding-bottom: 15px;
}

.btn-home {
  border: none;
  background-color: rgb(87, 184, 70);
  color: white;
  width: 130px;
  height: 35px;
  display: inline-block;
  line-height: 35px;
  text-align: center;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  border-radius: 44px;
  font-weight: 900;
}


</style>

