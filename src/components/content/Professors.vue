<template>
  <div class="col-sm-12 col-md-4">
    <section class="our-professors">
      <h2>Our Professors</h2>
      <div class="professors">
        <div class="professor-img">
          <img src="../../assets/img/professor/professor1.jpg" alt="" />
        </div>
        <div class="professor-info">
          <h3>Prof. Mathew Davis</h3>
          <div class="divider"></div>
          <p>Applied Science and Engineering</p>
          <a href="#">Show Profile</a>
        </div>
      </div>
      <div class="professors">
        <div class="professor-img">
          <img src="../../assets/img/professor/professor2.jpg" alt="" />
        </div>
        <div class="professor-info">
          <h3>Prof. Jane Stairway</h3>
          <div class="divider"></div>
          <p>Applied Science and Engineering</p>
          <a href="#">Show Profile</a>
        </div>
      </div>
      <a href="#" class="more">
        All Professors
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

/* our-professors */
.our-professors .professors {
  display: flex;
  padding-top: 8px;
  padding-bottom: 4px;
  padding-left: 8px;
  border: 2px solid #f5f5f5;
  margin-bottom: 10px;
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
.our-professors .professors:nth-child(3) {
  margin-bottom: 35px;
}

.our-professors .professors .professor-info {
  margin-left: 10px;
}

.our-professors .professors .professor-info h3 {
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  color: #024283;
  margin: 0;
}

.our-professors .professors .professor-info .divider {
  background-color: #c5c5c5;
  height: 1px;
  width: 30px;
  margin: 10px 0;
}

.our-professors .professors .professor-info p {
  font-size: 12px;
  line-height: 17px;
  font-weight: 400;
  color: #767676;
  margin: 0;
}

.our-professors .professors .professor-info a {
  font-size: 11px;
  line-height: 16px;
  font-weight: 400;
  color: #252525;
}
/* end our-professors */

/* Responsive */
@media (min-width: 768px) and (max-width: 991px) {
  
}

@media (max-width: 767px) {
  .our-professors {
    margin-bottom: 25px;
  }

  .our-professors .professors:nth-child(3) {
    margin-bottom: 5px;
}
}
/* end Responsive */
</style>