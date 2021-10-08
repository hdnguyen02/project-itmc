<template>
  <div class="col-sm-12 col-md-6 col-lg-4">
    <section class="news-small">
      <h2>News</h2>
      <ul class="news-list">
        <li class="news-item">
          <div class="date">
            <awesome :icon="['fas', 'file-alt']" class="i"/>
            <p>08-24-2014</p>
          </div>
          <a href="#"
            >U-M School of Public Health, Detroit partners aim to improve air
            quality in the city</a
          >
        </li>
        <li class="news-item">
          <div class="date">
            <awesome :icon="['fas', 'file-alt']" class="i" />
            <p>08-24-2014</p>
          </div>
          <a href="#"
            >At 50, Center for the Education of Women celebrates a wider
            mission</a
          >
        </li>
        <li class="news-item">
          <div class="date">
            <awesome :icon="['fas', 'file-alt']" class="i"/>
            <p>08-24-2014</p>
          </div>
          <a href="#">Three U-Michigan scientists receive Sloan fellowships</a>
        </li>
      </ul>
      <a href="#" class="more">
        All News
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

/* news-small */
.news-small .news-item {
  list-style: none;
  margin-bottom: 15px;
  padding-bottom: 12px;
}

.news-small .news-item:nth-child(1),
.news-small .news-item:nth-child(2) {
  border-bottom: 1px solid #e5e5e5;
}

.news-small .news-item:nth-child(3) {
  margin-bottom: 50px;
}

.news-small .news-item a {
  display: block;
  text-decoration: none;
  font-size: 12px;
  line-height: 17px;
  font-weight: 400;
  color: #024283;
  padding-left: 14px;
}

/* end news-small */

/* Responsive */
@media (min-width: 768px) and (max-width: 991px) {
  .news-small .news-item:nth-child(3) {
    margin-bottom: 0px;
  }
}

@media (max-width: 767px) {
  .news-small {
    margin-bottom: 30px;
  }
  .news-small .news-item:nth-child(3) {
    margin-bottom: -20px;
  }
}
/* end Responsive */
</style>