<template>
      <div class="row" id="manage">
        <div id="sibar-manage" class="col-2">
          <sibar-manage/>
        </div>
        <div id="view-manage" class="col-10">
          <header-manage id="header-manage"/>
          <router-view id="view"/>

        </div>
      </div>
</template>
<script>
import SibarManage from '../components/students/Sibar.vue'
import HeaderManage from '../components/students/HeaderManage.vue'
export default {
    components: {
       SibarManage,HeaderManage
    },
   
    
    
  }

   
</script>

<style scoped>

#manage {
  padding:0;
  margin:0;
  box-sizing: content-box;
}
#header-manage {
  
  position: fixed;
  right: 0;
  top: 0;
  right:0;
  width: 83.3%;
  background-color: #ffff;
  z-index: 1;
  height: 65px;
  display:flex;
  justify-content: end;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
  align-items: center;
  padding:0px 30px;
}

#view-manage {
  padding:0;
  margin:0;
  box-sizing: content-box;
  
}



 
 #view {
   margin-top: 65px;
 }



</style>