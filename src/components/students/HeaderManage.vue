<template>
  <div id="user-custom">
    <div id="user">
      <span>Hồ Đức Nguyên</span>
    </div>
    <div id="dropdown-user">
      <button @click="logOut" class="btn btn-info">
        Đăng xuất
      </button>
      
    </div>
      
  </div>
</template>

<script>
export default {
  methods:{
    logOut () {
      // đăng xuất đưa về trang chủ
      this.$router.push("/");
    }
  }
}
</script>

<style scoped>

#user span {
  font-size: 18px;
  opacity: 0.8;
  display: inline-block;
  padding: 0px 30px;
}





.icon-user {
  font-size: 24px;
}




</style>