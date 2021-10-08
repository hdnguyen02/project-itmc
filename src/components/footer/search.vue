<template>
    <div class="fsearch">
        <div class="container">
            <div class="row justify-content-between">
                <div class="follow col-12 col-sm-6">
                    <h6>Follow us:</h6>
                    <ul>
                        <li><a href=""><i class="fa fa-twitter"></i></a></li>
                        <li><a href=""><i class="fa fa-facebook"></i></a></li>
                        <li><a href=""><i class="fa fa-pinterest"></i></a></li>
                        <li><a href=""><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
                <div class="search col-sm-6 d-none d-sm-flex">
                    <input type="text" placeholder="Search">
                    <button><i class="fa fa-search"></i></button>
                </div> 
        </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

    .li {
        list-style: none;
    }
    a {
        text-decoration: none;
        color: red;
    }
    .fsearch {
        margin-top: 30px;
        padding: 30px 0px;
        background-color: whitesmoke;
    }
    .fsearch > div {
        height: 40px;
        line-height: 40px;
    }
    .fsearch > div > div {
        height: 40px;
        line-height: 40px;
    }
    .follow {
        line-height: 40px;
        padding-right: 0px;
    }
    .follow h6 {
        display: inline-block;
        margin: 0px;
        margin-right: 5px;
    }
    .follow ul,ul li {
        display: inline-block;
        margin: 0px;
    }
    .follow ul li a {
        margin: 0px 10px;
    }
    .follow ul li a i {
        color: #252525;
        opacity: 0.5;
    }
    .follow ul li a:hover i {
        opacity: 1;
    }
    .search {
        display: flex;
        justify-content: flex-end;
    }
    .search input {
        height: 40px;
    }
    .search button {
        width: 50px;
        height: 40px;
        margin-left: 5px;
        background-color: #ea6645;
        border: 0px;
        color: white;
    }

</style>