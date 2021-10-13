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

.btn-custom {
  text-decoration: none;
  border: none;
  border-radius: 8px;
  display: flex;
  font-size: 16px;
  color: white;
  font-weight: 400;
  min-width: 65px;
  max-width: 50px;
  max-height: 30px;
  min-height: 27px;
  justify-content: center;
  align-items: center;
}

.btn-custom:hover {
  text-decoration: none;
  opacity: 0.8;
  color: white;
}

.background-red {
  background-color: rgb(231, 74, 59) !important;
  color: white;
}

*:focus {
    outline: none;
}



</style>
