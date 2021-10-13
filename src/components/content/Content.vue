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
import News from "./News.vue";
import Events from "./Events.vue";
import AboutUniverso from "./AboutUniverso.vue";
import AcademicLife from "./AcademicLife.vue";
import CampusLife from "./CampusLife.vue";
import Newsletter from "./Newsletter.vue";
import Professors from "./Professors.vue";
import Gallery from "./Gallery.vue";
import Partners from "./Partners.vue";
import Donation from "./Donation.vue";

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
</style>