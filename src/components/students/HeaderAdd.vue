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
    <router-link :to="{name:'Add'}" class="btn-add" >Thêm sinh viên</router-link>
    </div>
</template>

<script>
export default {
  data () {
    return {
      dropdown1:false,   // dropdown 1
      dropdown2:false,   // dropdown 2
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
  font-weight: 800;
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
  background-color:rgba(47, 86, 200, 0.8);
}


.btn-add {
  border: none;
  background-color: green;
  color: white;
  min-width: 150px;
  height: 35px;
  display: inline-block;
  line-height: 35px;
  text-align: center;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
}

.btn-add:hover {
  opacity: 0.8;
}


</style>