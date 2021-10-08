<template>
  <div id="content">
    <div class="block">
      <div class="container">
        <div class="row">
          <News />
          <Events />
          <AboutUniverso />
        </div>
      </div>
    </div>
    <div class="block">
      <div class="container">
        <div class="row">
          <AcademicLife />
          <CampusLife />
          <Newsletter />
        </div>
      </div>
    </div>
    <div class="block">
      <div class="container">
        <div class="row">
          <Professors />
          <Gallery />
        </div>
      </div>
    </div>
    <div class="block">
      <div class="container">
        <div class="row">
          <Partners />
          <Donation />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import News from "./content/News.vue";
import Events from "./content/Events.vue";
import AboutUniverso from "./content/AboutUniverso.vue";
import AcademicLife from "./content/AcademicLife.vue";
import CampusLife from "./content/CampusLife.vue";
import Newsletter from "./content/Newsletter.vue";
import Professors from "./content/Professors.vue";
import Gallery from "./content/Gallery.vue";
import Partners from "./content/Partners.vue";
import Donation from "./content/Donation.vue";

export default {
  components: {
    News,
    Events,
    AboutUniverso,
    AcademicLife,
    CampusLife,
    Newsletter,
    Professors,
    Gallery,
    Partners,
    Donation
  },
};
</script>

<style scoped >
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap");
#content {
  margin-top: 60px;
}

.block {
  padding: 10px 0 40px 0;
}

.date {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.date p {
  font-size: 12px;
  line-height: 17px;
  font-weight: 400;
  color: #c5c5c5;
  margin: 0;
}

.date .i {
  font-size: 10px;
  color: #e5e5e5;
  margin-right: 5px;
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

</style>