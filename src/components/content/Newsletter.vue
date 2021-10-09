<template>
  <div class="col-sm-12 col-md-12 col-lg-4">
    <section class="newsletter">
      <h2>Newsletter</h2>
      <div class="input-group">
        <input type="text" placeholder="Your e-mail" />
        <a href="#" class="arrow">
          <awesome :icon="['fas', 'chevron-right']" class="i"/>
        </a>
      </div>
      <p>
        Ut tincidunt, quam in tincidunt vestibulum, turpis ipsum porttitor nisi,
        et fermentum augue lit eu neque. In at tempor dolor, sit amet dictum
        lacus. Praesent porta orci eget laoreet ultrices.
      </p>
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

/* newsletter */
.newsletter .input-group {
  display: flex;
  justify-content: space-between;
  height: 84px;
  border: 2px solid #f5f5f5;
  padding: 20px;
  margin-bottom: 20px;
}

.newsletter .input-group input {
  max-width: 250px;
  width: 75%;
  height:100%;
  font-size: 12px;
  line-height: 17px;
  color: #555;
  background-color: #f5f5f5;
  border: 2px solid #c5c5c5;
  padding-left: 10px;
  outline: none;
}

.newsletter .input-group input:hover {
  border-color: #a6a6a6;
}

.newsletter .input-group .arrow {
  display: flex;
  text-decoration: none;
  max-width: 40px;
  width: 25%;
  height:100%;
  background-color: #ea6645;
}

.newsletter .input-group .arrow:hover {
  background-color: #e7532e;
}

.newsletter .input-group .arrow .i {
  font-size: 10px;
  color: #fff;
  margin: auto;
}

.newsletter p {
  font-size: 12px;
  line-height: 20px;
  font-weight: 400;
  color: #767676;
}
/* end newsletter */

/* Responsive */
@media (min-width: 768px) and (max-width: 991px) {
  .newsletter .input-group input {
    max-width: 90%;
  }
  .newsletter .input-group .arrow {
    max-width: 10%;
  }
}

@media (max-width: 767px) {
  .newsletter {
    margin-bottom: 0px;
  }
  .newsletter .input-group input {
    max-width: 90%;
  }
  .newsletter .input-group .arrow {
    max-width: 10%;
  }
}
/* end Responsive */
</style>