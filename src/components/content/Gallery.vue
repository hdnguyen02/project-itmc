<template>
  <div class="col-sm-12 col-md-8">
    <section class="gallery">
      <h2>Gallery</h2>
      <ul class="gallery-list">
        <li class="gallery-item">
          <a href="#">
            <awesome :icon="['fas', 'eye']" class="i"/>
            <img src="../../assets/img/gallery/1.jpg" alt="" />
          </a>
        </li>
        <li class="gallery-item">
          <a href="#">
            <awesome :icon="['fas', 'eye']" class="i"/>
            <img src="../../assets/img/gallery/2.jpg" alt="" />
          </a>
        </li>
        <li class="gallery-item">
          <a href="#">
            <awesome :icon="['fas', 'eye']" class="i"/>
            <img src="../../assets/img/gallery/3.jpg" alt="" />
          </a>
        </li>
        <li class="gallery-item">
          <a href="#">
            <awesome :icon="['fas', 'eye']" class="i"/>
            <img src="../../assets/img/gallery/4.jpg" alt="" />
          </a>
        </li>
        <li class="gallery-item">
          <a href="#">
            <awesome :icon="['fas', 'eye']" class="i"/>
            <img src="../../assets/img/gallery/5.jpg" alt="" />
          </a>
        </li>
        <li class="gallery-item">
          <a href="#">
            <awesome :icon="['fas', 'eye']" class="i"/>
            <img src="../../assets/img/gallery/6.jpg" alt="" />
          </a>
        </li>
        <li class="gallery-item">
          <a href="#">
            <awesome :icon="['fas', 'eye']" class="i"/>
            <img src="../../assets/img/gallery/7.jpg" alt="" />
          </a>
        </li>
        <li class="gallery-item">
          <a href="#">
            <awesome :icon="['fas', 'eye']" class="i"/>
            <img src="../../assets/img/gallery/8.jpg" alt="" />
          </a>
        </li>
        <li class="gallery-item">
          <a href="#">
            <awesome :icon="['fas', 'eye']" class="i"/>
            <img src="../../assets/img/gallery/9.jpg" alt="" />
          </a>
        </li>
        <li class="gallery-item">
          <a href="#">
            <awesome :icon="['fas', 'eye']" class="i"/>
            <img src="../../assets/img/gallery/10.jpg" alt="" />
          </a>
        </li>
        <li class="gallery-item">
          <a href="#">
            <awesome :icon="['fas', 'eye']" class="i"/>
            <img src="../../assets/img/gallery/11.jpg" alt="" />
          </a>
        </li>
        <li class="gallery-item">
          <a href="#">
            <awesome :icon="['fas', 'eye']" class="i"/>
            <img src="../../assets/img/gallery/12.jpg" alt="" />
          </a>
        </li>
        <li class="gallery-item">
          <a href="#">
            <awesome :icon="['fas', 'eye']" class="i"/>
            <img src="../../assets/img/gallery/13.jpg" alt="" />
          </a>
        </li>
        <li class="gallery-item">
          <a href="#">
            <awesome :icon="['fas', 'eye']" class="i"/>
            <img src="../../assets/img/gallery/14.jpg" alt="" />
          </a>
        </li>
      </ul>
      <a href="#" class="more">
        Go to Gallery
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

/* gallery */
.gallery .gallery-list {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
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
.i {
  color: white;
}
.gallery .gallery-item {
  list-style: none;
  margin: 0 4px 5px 0;
  position: relative;
  overflow: hidden;
}

.gallery .gallery-item a {
  display: block;
}

.gallery .gallery-item:hover a .i {
  display: block;
  color: white;
}

.gallery .gallery-item:hover a img {
  transform: scale(1.1);
}

.gallery .gallery-item a .i {
    padding: 5px;
    font-size: 15px;
    color: #000;
    position: absolute;
    top: calc((100% - 25px) / 2);
    left: calc((100% - 28px) / 2);
    z-index: 1;
    display: none;
    border: 1px solid rgba(0, 0, 0, 0.7);
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.7);
    width: 30px;
    height: 30px;
}

.gallery .gallery-item a img {
  height: 100px;
  width: 100px;
}

/* end gallery */

/* Responsive */
@media (min-width: 768px) and (max-width: 991px) {
  
}

@media (max-width: 767px) {
  .gallery .gallery-list {
    margin-bottom: 10px;
  }
}
/* end Responsive */
</style>