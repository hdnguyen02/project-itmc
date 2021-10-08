<template>
    <div id="manage" >
      <div id="sibar" >

      </div>
      <div id="students">
        
        <div>
          <a href="#">Hồ Đức Nguyên</a>
          <router-link to="/manage/1" >Xem</router-link>
         
          <router-link >sữa</router-link>   
        </div>
        <div>
          <a href="#">Hồ Đức Nguyên</a>
          <router-link>Xem</router-link>
          <router-link >sữa</router-link>   
        </div>
        <div>
          <a href="#">Hồ Đức Nguyên</a>
          <router-link>Xem</router-link>
          <router-link >sữa</router-link>   
        </div>
        <div>
          <a href="#">Hồ Đức Nguyên</a>
          <router-link>Xem</router-link>
          <router-link >sữa</router-link>   
        </div>
       
      </div>
       <router-view name="danhsach" ></router-view>
    </div>
    
</template>

<script>
export default {
  methods:{
   
  }
}
</script>

<style scoped>

#manage {
  display: flex;
}

#sibar {
  width: 200px;
  height: 700px;
  background-color: red;
}

</style>