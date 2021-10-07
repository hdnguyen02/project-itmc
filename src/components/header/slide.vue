<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="3000"
      controls
      indicators
      background="#ababab"
      img-width="100%"
      img-height="100%"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <b-carousel-slide
        img-src="https://scontent-hkg4-1.xx.fbcdn.net/v/t1.6435-9/152714604_472840837402957_5425425553586587173_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8631f5&_nc_ohc=tPz4TjKAGuoAX8xkVcA&_nc_ht=scontent-hkg4-1.xx&oh=9d916d854b41ff49601d7ec2b8979028&oe=61801AC2"
      ></b-carousel-slide>

      <b-carousel-slide img-src="http://www.themestarz.net/html/universo/assets/img/slide-1.jpg">
      </b-carousel-slide>
      <b-carousel-slide img-src="http://www.themestarz.net/html/universo/assets/img/slide-2.jpg">
      </b-carousel-slide>
      <b-carousel-slide img-src="http://www.themestarz.net/html/universo/assets/img/slide-3.jpg">
      </b-carousel-slide>

      
    </b-carousel>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
  }
</script>
<style>

</style>