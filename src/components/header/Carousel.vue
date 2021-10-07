<template>
    <div class="carousel"  @keydown="checkSlide($event)" tabindex="0">
        <slot></slot>
        <div class="scoll">
            <button @click.prevent="next" class="btn btn-next">▶</button>
            <button @click.prevent="prev" class="btn btn-prev">◀</button>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            index : 0,
            slides : [],
            slideDirection: '',
        }
    },
    computed: {
        slidesLength() {
            return this.slides.length;
        }
    },
    mounted(){
        this.slides = this.$children;
        this.slides.map( (slide,index) => {
            slide.index = index;
        });
    },
    methods: {
        next(){
            this.index++;
            if(this.index >= this.slidesLength){
                this.index = 0;
            }
            this.slideDirection = 'slide-right';
        },
        prev(){
            this.index--;
            if(this.index < 0){
                this.index = this.slidesLength - 1;
            }
             this.slideDirection = 'slide-left';
        },
        checkSlide(event){
            if(event.keyCode === 39){
                this.next();
            }else if (event.keyCode === 37){
                this.prev();
            }else {
                return;
            }
        },
    }
}
</script>
<style>
    .carousel {
        position: relative;
    }
    .scoll {
        display: block;
        width: 65px;
        height: 40px;
        position: absolute;
        bottom: 15px;
        right: 10px;
    }
    .scoll button {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>