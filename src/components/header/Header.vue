<template>
    <div class="header">
        <search />
        <ctheader />
        <logo />
        <homepage />
    </div>

</template>

<script>

import ctheader from './cthearder.vue';
import logo from './Logo2.vue';
import homepage from './homepage.vue';
import Search from './Search.vue';

export default {
    components: {
        ctheader,
        logo,
        homepage,
        Search,
       
    }
}
</script>

<style scoped>
/* màn hình nhỏ */
@media (min-width:0px) and (max-width: 575.98px) {
    .header {
        background-image: url(../../assets/background-city.png);
        /* height: 80px; */
        background-color: rgb(4, 40, 74);
    }
    .ctheader {
        position: relative;
    }
    .logo {
        position: absolute;
        top: 41px;
    }
}
/* mành hinh md tro lên */
@media (min-width: 576px) {
    .header {
        background-image: url(../../assets/background-city.png);
        /* height: 120px; */
        background-color: rgb(4, 40, 74);
    }
    .ctheader {
        position: relative;
    }
    .logo {
        position: absolute;
        top: 40px;
    }
}
</style>