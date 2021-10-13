<template>
      <div id="manage" class="row" >
        <div id="sibarcus" class="col-2" >
            <sibar/>
        </div>
        <div class="col-10" id="view">
          <router-view />
        </div>
      </div>
</template>
<script>
import Sibar from '../components/students/Sibar.vue'
export default {
    components: {
      Sibar,
    },
    data () {
      return {
      
      }
    },
    
  }

   
</script>

<style>

#manage {
  margin: 0;
  padding: 0;
  box-sizing: content-box;
  position: relative;
}

#sibarcus {
  background-color:rgba(47, 86, 200, 1);
  cursor: pointer;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
}


#view {
  position: absolute;
  right: 0;
  z-index: -2;
  padding: 15px 15px;
}


</style>