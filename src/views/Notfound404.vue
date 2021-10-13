<template>
  <div id="notfound">
    <div>
      <router-link class="btn404" to="/">back to home</router-link>
      <a @click="previous" class="btn404">Previous</a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    previous() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped >
#notfound {
  width: 100%;
  min-height: 750px;
  background-image: url(../assets/template_03.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  display: flex;
  justify-content: center;
}

#notfound .btn404 {
  border: none;
  background-color: green;
  color: white;
  width: 130px;
  height: 35px;
  display: inline-block;
  line-height: 35px;
  text-align: center;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  margin-top: 500px;
}

#notfound .btn404:hover {
  opacity: 0.8;
}

#notfound div {
  display: flex;
  width: 300px;
  justify-content: space-between;
}
</style>