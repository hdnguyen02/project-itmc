<template>
  <div class="col-sm-12 col-md-9">
    <section class="partners">
      <h2>Partners & Donors</h2>
      <div class="partners-list">
        <a href="#"><img src="../../assets/img/partner/1.png" alt="" /></a>
        <a href="#"><img src="../../assets/img/partner/2.png" alt="" /></a>
        <a href="#"><img src="../../assets/img/partner/3.png" alt="" /></a>
        <a href="#"><img src="../../assets/img/partner/4.png" alt="" /></a>
        <a href="#"><img src="../../assets/img/partner/5.png" alt="" /></a>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h2 {
  font-size: 24px;
  line-height: 26px;
  font-weight: 500;
  color: #252525;
  margin: 0 0 35px 0;
  position: relative;
}

h2::after {
  background-color: #c5c5c5;
  content: "";
  height: 2px;
  width: 30px;
  position: absolute;
  left: 0;
  bottom: -15px;
}

/* partners */
.partners .partners-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.partners .partners-list a {
  display: block;
  padding: 10px;
}
/* end partners */

/* Responsive */
@media (min-width: 768px) and (max-width: 991px) {
  
}

@media (max-width: 767px) {
  .partners {
    margin-bottom: 25px;
  }
}
/* end Responsive */
</style>