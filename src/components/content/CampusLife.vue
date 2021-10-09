<template>
  <div class="col-sm-12 col-md-6 col-lg-4">
    <section class="campus-life">
      <h2>Campus Life</h2>
      <ul class="campus-life-list">
        <li class="campus-life-item"><a href="#">Athletics & Recreation</a></li>
        <li class="campus-life-item">
          <a href="#">Clubs & Extra-curricular Activities</a>
        </li>
        <li class="campus-life-item"><a href="#">Health & Wellness</a></li>
        <li class="campus-life-item"><a href="#">Housing & Residence</a></li>
        <li class="campus-life-item"><a href="#">Arts & Culture</a></li>
        <li class="campus-life-item"><a href="#">Student IT Services</a></li>
      </ul>
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

/* campus-life */
.campus-life .campus-life-item {
  list-style: none;
  margin-bottom: 10px;
}

.campus-life .campus-life-item a {
  text-decoration: none;
  font-size: 12px;
  line-height: 17px;
  font-weight: 400;
  color: #024283;
  position: relative;
  left: 0;
  transition: left linear 0.3s;
}

.campus-life .campus-life-item a:hover {
  left: 5px;
}
/* endcampus-life */

/* Responsive */
@media (min-width: 768px) and (max-width: 991px) {
  
}

@media (max-width: 767px) {
  
}
/* end Responsive */
</style>