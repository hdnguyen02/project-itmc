<template>
  <div class="col-sm-12 col-md-6 col-lg-4">
    <section class="academic-life">
      <h2>Academic Life & Research</h2>
      <ul class="academic-life-list">
        <li class="academic-life-item"><a href="#">Programs and Areas</a></li>
        <li class="academic-life-item"><a href="#">Research</a></li>
        <li class="academic-life-item">
          <a href="#">Graduate & Postdoctoral Programs</a>
        </li>
        <li class="academic-life-item"><a href="#">Continuing Studies</a></li>
        <li class="academic-life-item">
          <a href="#">International Activities</a>
        </li>
        <li class="academic-life-item">
          <a href="#">Course Calendars & Listings</a>
        </li>
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

/* academic-life */
.academic-life .academic-life-item {
  list-style: none;
  margin-bottom: 10px;
}

.academic-life .academic-life-item a {
  text-decoration: none;
  font-size: 12px;
  line-height: 17px;
  font-weight: 400;
  color: #024283;
  position: relative;
  left: 0;
  transition: left linear 0.3s;
}

.academic-life .academic-life-item a:hover {
  left: 5px;
}
/* end academic-life */

/* Responsive */
@media (min-width: 768px) and (max-width: 991px) {
  .academic-life .academic-life-list {
    margin-bottom: 40px;
  }
}

@media (max-width: 767px) {
  
}
/* end Responsive */
</style>