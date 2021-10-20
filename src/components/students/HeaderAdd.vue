<template>
  <div id="headerAdd">
    <div id="containerDropdown" >
    <div class="dropdown">
        <button @click="dropdown1=!dropdown1" class="btn-dropdown" >
          <span style="margin-right:10px" >Phòng ban</span>
          <span><awesome icon="caret-square-down" /></span></button>
        <ul v-show="dropdown1">
          <li>xã hội</li>
          <li>Giáo vụ</li>
          <li>Sinh viên</li>        
        </ul>
    </div>
    <div class="dropdown">
        <button @click="dropdown2=!dropdown2" class="btn-dropdown" >
          <span style="margin-right:10px" >Chức vụ</span>
          <span><awesome icon="caret-square-down" /></span></button>
        <ul v-show="dropdown2">
          <li>Giáo viên</li>
          <li>Sinh viên</li>  
          <li>Trợ giảng</li>     
        </ul>
    </div>
  </div>
    <router-link :to="{name:'Add'}" class="btn btn-success" >Thêm sinh viên</router-link>
    </div>
</template>

<script>
export default {
  data () {
    return {
      dropdown1:false,   
      dropdown2:false,  
    }
  },

};
</script>

<style scoped >

#headerAdd {
 
  padding: 10px 0px;
   display: flex;
  justify-content: space-between;
  background-color: #F5FFFA;

  
}

#containerDropdown {
   display: flex;
}

.dropdown {
  min-width: 150px;
  max-width: 160px;
 position: relative;
 margin-right: 20px;;

 
}

.dropdown ul {

 position: absolute;
 bottom:-100;
 background-color:white;
 left: 0;
 right: 0;
 z-index: 2;
}


.btn-dropdown {
  width: 100%;
  color: white;
  font-weight: 400;
  font-size: 16px;
  border: none;
  background-color: rgba(0, 0, 0, 0.6);
  min-height: 35px;
  border-radius: 2px;

}

ul {
  padding: 0px 0px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

ul li {
  list-style: none;
  padding: 10px 5px;
  text-align: center;
  color: black;
  font-size: 18px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

ul li:hover {
  background-color:#808080;
  color: white;
  font-size: 20px;
}



</style>