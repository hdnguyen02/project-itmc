<template>
    <div class="test container">
        <carousel>
            <carousel-slide v-for="slide in slides" :key="slide" class="carousel-slider">
                <img :src="slide" :alt="slide">
            </carousel-slide>
        </carousel>
    </div>    
</template>

<script>
import Carousel from './Carousel.vue';
import CarouselSlide from './CarouselSlide.vue';
export default {
    data(){
        return {
            slides: [
                'https://scontent-hkg4-1.xx.fbcdn.net/v/t1.6435-9/152714604_472840837402957_5425425553586587173_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8631f5&_nc_ohc=tPz4TjKAGuoAX8xkVcA&_nc_ht=scontent-hkg4-1.xx&oh=9d916d854b41ff49601d7ec2b8979028&oe=61801AC2',
                'http://www.themestarz.net/html/universo/assets/img/slide-1.jpg',
                'http://www.themestarz.net/html/universo/assets/img/slide-2.jpg',
                'http://www.themestarz.net/html/universo/assets/img/slide-3.jpg',
            ]
        }
    },
    components : {
        Carousel : Carousel,
        CarouselSlide : CarouselSlide,
    }
}
</script>

<style>
    .test {
        display:flex;
        justify-content: center;
    }
    .carousel {
        position:relative;
        overflow: hidden;
        width:100%;
        height:300px;
        z-index:10;
    }
    .btn {
        position:absolute;
        border: transparent;
        padding: 0px;
        background-color: rgba(0, 0, 0, 0.2);
        width: 30px;
        height: 30px;
        z-index:2;
    }
    .btn:hover {
        cursor: pointer;
    }
    .btn:focus{
        outline:none;
    }
    .btn-next {
        top:50%;
        right:0;
    }
    .btn-prev {
        top:50%;
        left:0;
    }
    .carousel-slider {
        position:absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
    }
    .carousel-slider img {
        width:100%;
        height:100%;
    }
</style>