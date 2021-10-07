<template>
    <div class="logo">
        <h1></h1>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/* màn hình nhỏ */
@media (min-width:0px) and (max-width: 575.98px) {
    .logo h1 {
        margin: 0px;
        height: 39px;
        width: 80px;
        background-color: white;
        background-color: white;
        background-image: url(http://www.themestarz.net/html/universo/assets/img/logo.png);
        background-size: contain;
        background-repeat: no-repeat;
    }
    
}
/* mành hinh md tro lên */
@media (min-width: 576px) {
    .logo {
        display: inline-block;
        width: 15%;
    }
    .logo h1 {
        display: block;
        width: 100%;
        height: 80px;
        margin: 0px;
        background-color: white;
        background-image: url(http://www.themestarz.net/html/universo/assets/img/logo.png);
        background-size: contain;
        background-repeat: no-repeat;
    }
    
    
}
</style>