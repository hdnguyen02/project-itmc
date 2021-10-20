<template>
      <div class="row" id="manage">
        <div id="sibar-manage" class="col-2">
          <sibar-manage/>
        </div>
        <div id="view-manage" class="col-10">
          <header-manage id="header-manage"/>
          <router-view id="view"/>
          <footer-manage id="footer-manage"/>
        </div>
      </div>
</template>
<script>
import SibarManage from '../components/students/Sibar.vue'
import HeaderManage from '../components/students/HeaderManage.vue'
import FooterManage from '../components/students/FooterManage.vue'
export default {
    components: {
       SibarManage,HeaderManage,FooterManage
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

#footer-manage {
  display: flex;
  justify-content: center;
  align-items: center;
  position:absolute;
  right: 0;
  height: 65px;
  border-top: 0.5px solid rgba(0, 0, 0, 0.2);
  width: 100%;
  background-color: #ffff;
  font-size: 14px;




}

 
 #view {
   margin-top: 65px;
 }



</style>