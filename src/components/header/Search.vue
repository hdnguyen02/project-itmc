<template>
<div class="search">
    <div class="container">
        <div class="row justify-content-end">
                <div class="search-main">
                    <ul class="list-unstyled d-none d-lg-flex">
                        <li><a href="#">Prospective Students</a></li>
                        <li><a href="#">Current Students</a></li>
                        <li><a href="#">Faculty &amp; Staff</a></li>
                        <li><a href="#">Alumni</a></li>
                    </ul>
                    <div class="d-none d-sm-flex" id="search" @mouseover="aniput ='150'" @mouseleave="aniput='0'">
                        <input v-bind:style="{width: aniput + 'px',transition: drop,}" placeholder="search">
                        <button><i class="fa fa-search"></i></button>
                    </div>
                </div>
        </div>
        <Phone id="phone" />
    </div>
</div>
</template>

<script>
import Phone from './Phone.vue';
export default {
    components: {
        Phone,
    },
    data() {
        return {
            aniput : '0',
            drop: 'width 0.5s',
        }
    }
}
</script>

<style scoped>
.search {
    height: 40px;
    line-height: 40px;
    position: relative;
    background-color: rgba(0, 0, 0, 0.2);
}
.search-main {
    display: inline-flex;
    justify-content: flex-end;
    z-index: 100;
}
.list-unstyled {
    display: inline-flex;
    justify-content: flex-end;
    margin: 0px;
    z-index: 100;
}
.list-unstyled li {
    margin: 0px 5px;
}
.list-unstyled li a{
    text-decoration: none;
    color: white;
}
.list-unstyled li a:hover {
    color: #ea6645;
}
#search {
    display: inline-flex;
}
#search input,button {
    height: 40px;
    line-height: 40px;
}
#search button {
    width: 40px;
    border: 0px;
    background-color: #ea6645;
    margin-right: 15px;
    color: white;
    z-index: 10;
}
#search input {
    border-radius: 5px 0px 0px 5px;
    margin-right: -8px;
    padding: 0px;
    border: 0px;
    margin-left: 10px;
}
#phone {
    position: absolute;
    top: 12.5px;
    z-index: 1000;
}
</style>