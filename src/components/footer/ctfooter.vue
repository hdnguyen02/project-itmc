<template>
  <div class="ctfooter">
      <div class="container">
          <div class="row">
              <div class="logo col-12 col-md-3"><logo /></div>
              <div class="col-12 col-md-3"><contact /></div>
              <div class="col-12 col-md-3"><important /></div>
              <div class="col-12 col-md-3"><about /></div>
          </div>
      </div>
  </div>
</template>

<script>
import logo from './ctfooter/Login1.vue';
import contact from './ctfooter/contact.vue';
import important from './ctfooter/important.vue';
import about from './ctfooter/about.vue';
export default {
    components: {
         logo,
        contact,
        important,
        about
    }
}
</script>

<style>
    .ctfooter {
        display: block;
        background-color: rgb(4, 40, 74);
        background-image: url(../../assets/background-city.png);
        background-size: cover;
        width: 100%;
        padding: 40px 0px;
    }
    .ctfooter .logo {
        display: flex;
        align-items: center;
    }
    .ctfooter h4 {
        color: #fff;
        display: inline-block;
        font-size: 24px;
        margin-bottom: 35px;
        margin-top: 10px;
        position: relative;
    }
    .ctfooter h4::after {
        opacity: 0.2;
        background-color: #fff;
        bottom: -15px;
        content: "";
        height: 2px;
        left: 0;
        width: 30px;
        position: absolute;
        z-index: 0;
    }
</style>