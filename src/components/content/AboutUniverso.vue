<template>
  <div class="col-sm-12 col-md-12 col-lg-4">
    <section class="about-small">
      <h2>About Universo</h2>
      <!-- <img src="../assets/loginbackgroup.jpg" alt=""> -->
      <p>
        <span>Welcome o Universo.</span> Premium HTML Template for schools,
        universieties and other educational institutes. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Donec laoreet semper tincidunt.
        Interdum et malesuada fames ac ante ipsum primis in faucibus.
      </p>
      <a href="#" class="more">
        Read More
        <awesome :icon="['fas', 'arrow-circle-right']" class="i"/>
      </a>
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

/* about-small */
.about-small img {
  width: 100%;
  margin-bottom: 15px;
}

.about-small p {
  font-size: 12px;
  line-height: 20px;
  color: #767676;
  font-weight: 400;
  margin-bottom: 55px;
}

.about-small p span {
  font-weight: 700;
}
/* end about-small */

/* Responsive */
@media (min-width: 768px) and (max-width: 991px) {
  .about-small {
    margin-bottom: 15px;
  }
  
  .about-small p {
    margin-bottom: 20px;
  }
  
}
@media (max-width: 767px) {
  .about-small {
    margin-bottom: 0px;
  }

  .about-small p {
    margin-bottom: 5px;
  }
}
/* end Responsive */
</style>