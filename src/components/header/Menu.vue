<template>
  <nav class="menulist">
      <div class="menu-item">Home</div>
      <div class="menu-item">About</div>
      <div class="menu-item">Fanpage</div>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
.menulist {
    height: 80px;
    display: flex;
    color: white;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
}
.menu-item {
    margin: 0px 10px;
}
</style>