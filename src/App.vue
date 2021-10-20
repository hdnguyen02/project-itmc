<template>
  <div id="app">
      <router-view/>
  </div>
</template>


<style>

body {
    -webkit-font-smoothing: antialiased;
    background-color: #fff;
    color: #252525;
    font-family: 'Montserrat', 'Arial', sans-serif;
    font-size: 12px;
    height: 100%;
    overflow-x: hidden;
}


.min-width-60px {
  min-width: 60px;
  max-width: 180px;
}


.title {
  padding-left: 15px;
  padding-top: 15px;
  margin: 0;
  opacity: 0.6;


}


input::placeholder {
  font-size: 16px;
  opacity: 0.8;
  font-weight: 500;
  padding:0px 15px;
}




.radius-0px {
  margin: 0 !important;
  border-radius: 0 !important;
}



*:focus {
    outline: none;
}



</style>
