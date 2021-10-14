<template>
  <div class="col-sm-12 col-md-12 col-lg-4">
    <section class="about-small">
      <h2>About Universo</h2>
      <img src="../../assets/img/students.jpg" alt="" />
      <p>
        <span>Welcome o Universo.</span> Premium HTML Template for schools,
        universieties and other educational institutes. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Donec laoreet semper tincidunt.
        Interdum et malesuada fames ac ante ipsum primis in faucibus.
      </p>
      <a href="#" class="more">
        Read More
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

.more {
  display: block;
  text-decoration: none;
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  color: #252525;
}

.more:hover {
  text-decoration: none;
  color: #024283;
}

.more .i {
  color: #ea6645;
  position: relative;
  bottom: -2px;
}

/* about-small */
.about-small img {
  width: 100%;
  margin-bottom: 15px;
}
.more::after {
    text-shadow: none;
    -webkit-font-smoothing: antialiased;
    font-family: 'fontawesome';
    speak: none;
    font-weight: normal;
    font-variant: normal;
    line-height: 1;
    text-transform: none;
    transition: 0.4s;
    color: #ea6645;
    content: "\f18e";
    display: inline-block;
    font-size: 16px;
    margin-left: 5px;
    position: relative;
    top: 2px;
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