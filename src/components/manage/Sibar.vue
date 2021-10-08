<template>
  <div id="sibar">
    <h1><img src="http://www.themestarz.net/html/universo/assets/img/logo.png" alt=""></h1>
    <h4><awesome icon="award" />   Trang tổng quan</h4>
    <ul><h6>Quản lý</h6>
      <li><a href="#"><span><awesome icon="sitemap" /></span><p>Phòng ban</p></a></li>
      <li>
        <a href="#"><span><awesome icon="user-friends" /></span><p>Nhân sự</p></a>
        <ul>
          <li><a href="">Danh sách sinh viên</a></li>
          <li><a href="">Xếp hạng/Đánh giá</a></li>
        </ul>
      </li>
      <li><a href="#"><span><awesome icon="calendar-check" /></span><p>Chấm công</p></a></li>
      <li><a href="#"><span><awesome icon="bell" /></span><p>Thông báo</p></a></li>
      <li><a href="#"><span><awesome icon="graduation-cap" /></span><p>Đào tạo</p></a></li>
      <li><a href="#"><span><awesome icon="handshake" /></span><p>Tuyển dụng</p></a></li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  #sibar h1 img {
    width: 100%;
  }
  #sibar h4 {
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    padding: 10px 0px;
    color: white;
  }
  #sibar ul {
    padding: 0px;
  }
  #sibar ul li {
    list-style: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    line-height: 60px;
  }
  #sibar ul li > ul {
    display: none;
  }
  #sibar ul li:hover > ul {
    display: block;
  }
  #sibar ul li a {
    text-decoration: none;
    color: white;
    font-size: 20px;
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
    font-weight: 800;
    color: white;
    opacity: 0.5;
  }
</style>