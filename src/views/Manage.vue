<template>
    <div id="manage" >
      <div id="sibarcus" >
          đây là thanh sibar
      </div>
      <div>
        <router-view/>
      </div>
      <div>

      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

#manage {
  display: flex;
}

#sibarcus {
  width:400px;
  height:1000px;
  background-color:greenyellow;
}

</style>