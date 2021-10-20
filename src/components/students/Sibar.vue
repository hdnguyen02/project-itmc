<template>
  <div id="sibar">
    <h1><img src="http://www.themestarz.net/html/universo/assets/img/logo.png" alt=""></h1>
    <h4><awesome icon="award" />   Trang tổng quan</h4>
    <ul><h6>Quản lý</h6>
      <li><a ><span><awesome icon="sitemap" /></span><p>Phòng ban</p></a></li>
      <li @click="show = !show">
        <a ><span><awesome icon="user-friends" /></span><p>Nhân sự</p></a>
        <ul v-show="show">
          <li><a >Danh sách sinh viên</a></li>
          <li><a >Xếp hạng/Đánh giá</a></li>
        </ul>
      </li>
      <li><a ><span><awesome icon="calendar-check" /></span><p>Chấm công</p></a></li>
      <li><a ><span><awesome icon="bell" /></span><p>Thông báo</p></a></li>
      <li><a ><span><awesome icon="graduation-cap" /></span><p>Đào tạo</p></a></li>
      <li><a ><span><awesome icon="handshake" /></span><p>Tuyển dụng</p></a></li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      show: true,
    }
  }
}
</script>

<style scoped>

  #sibar {
    background-color:rgba(47, 86, 200, 1);
    cursor: pointer;
    position: fixed;
    top: 0;
    bottom: 0;
    max-width: 16.67%;
    left: 0;
    padding:30px 30px;
    margin: 0;
  }


  #sibar h1 img {
    width: 100%;
  }
  #sibar h4 {
    padding: 10px 0px;
    color: white;
  }
  #sibar ul {
    padding: 0px;
  }
  #sibar > ul > li {
    list-style: none;
    line-height: 60px;
  }
  
  
  #sibar ul li > ul li {
    list-style: none;
  }
  #sibar ul li a {
    text-decoration: none;
    color: white;
    font-size: 16px;
  }
  #sibar ul li a span {
    display: inline-block;
    width: 30px;
    margin-right: 20px;
  }
  #sibar ul li a p{
    display: inline-block;
  }
  #sibar ul h6 {
    text-transform: uppercase;
    font-weight: 400;
    color: white;
    opacity: 0.5;
  }



</style>