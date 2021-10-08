<template>
  <div class="col-sm-12 col-md-3">
    <section class="donation">
      <h2>Make a Donation</h2>
      <a href="#" class="btn-group">
        <h3>Support the University of Universo!</h3>
        <div class="arrow">
          <awesome :icon="['fas', 'chevron-right']" class="i"/>
        </div>
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

/* donation */
.donation .btn-group {
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  height: 70px;
  background-color: #012951;
  padding: 20px;
}

.donation .btn-group h3 {
  font-size: 14px;
  line-height: 15px;
  font-weight: 500;
  color: #fff;
  margin: 0;
}

.donation .btn-group .arrow {
  display: flex;
  min-width: 30px;
  height: 30px;
  background-color: #ea6645;
}

.donation .btn-group .arrow .i {
  font-size: 10px;
  color: #ffff;
  margin: auto;
}
/* end donation */

@media (min-width: 768px) and (max-width: 991px) {
  .donation .btn-group h3 {
    font-size: 10px;
    line-height:12px
  }
}
</style>