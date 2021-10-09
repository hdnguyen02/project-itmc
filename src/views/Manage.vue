<template>
    <div class="container">
      <div id="manage" class="row" >
        <div id="sibarcus" class="col-3" >
            <sibar />
        </div>
        <div class="view col-9">
          <router-view/>
        </div>
      </div>
    </div>
</template>

<script>
import Sibar from '../components/manage/Sibar.vue'
export default {
    components: {
      Sibar,
    }
}
</script>

<style>

#sibarcus {
  background-color:rgba(45, 83, 198, 0.8);
}
.view {
  background-color: red;
}

</style>