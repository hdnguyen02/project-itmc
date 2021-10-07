<template>
    <div class="homepage">
        <div class="container">
            <div class="row justify-content-end">
                <!-- slide -->
                <div class="col-12 col-sm-6 slider">
                    <slide />
                </div>
                <!-- banner -->
                <div class="col-12 col-sm-6 banner">
                    <div class="formdk col-md-12" style="min-height: 263px;">
                                <h3>Join the comunity of modern thinking students</h3>
                                <form id="dangky">
                                    <div class="row">
                                        <div class="col-12 col-md-6" style="min-height: 50px;">
                                            <div class="input-group">
                                                <input placeholder="Full Name" type="text" required="">
                                            </div>
                                        </div><!-- /.col-md-6 -->
                                        <div class="col-12 col-md-6" style="min-height: 50px;">
                                            <div class="input-group">
                                                <input placeholder="Email" type="email" required="">
                                            </div>
                                        </div><!-- /.col-md-6 -->
                                    </div><!-- /.row -->
                                    <div class="row">
                                        <div class="col-md-6" style="min-height: 50px;">
                                            <div class="input-group">
                                                <select name="" id="">
                                                    <option value="">Study Level</option>
                                                    <option value="">Beginner</option>
                                                    <option value="">Advanced</option>
                                                    <option value="">Intermediate</option>
                                                    <option value="">Professional</option>
                                                </select>
                                            </div><!-- /.form-group -->
                                        </div><!-- /.col-md-6 -->
                                        <div class="col-md-6" style="min-height: 50px;">
                                            <div class="input-group">
                                                <select name="" id="">
                                                    <option value="">Courses</option>
                                                    <option value="">Art and Design</option>
                                                    <option value="">Marketing</option>
                                                    <option value="">Marketing</option>
                                                </select>
                                            </div><!-- /.form-group -->
                                        </div><!-- /.col-md-6 -->
                                    </div><!-- /.row -->
                                    <button type="submit" id="slider-submit">Submit</button>
                                    <div id="form-status"></div>
                                </form>
                            </div>
                </div>
            </div>
        </div>
        <div class="city d-none d-md-block"></div>
    </div>

</template>

<script>
import slide from './slide.vue';
export default {
    components: {
        slide,
    }
}
</script>

<style scoped>
/* màn hình nhỏ */
@media (min-width:0px) and (max-width: 575.98px) {
    .homepage {
        background-color: #011c38;
    }
    .slider {
        display: flex;
        width: 100%;
        margin-top: 10px;
    }
    .slider img {
        position: relative;
        width: 100%;
    }
    .slider .view ul {
        position: absolute;
        bottom: 0px;
        right: 40px;
    }
    .slider .view ul li {
        padding: 5px;
    }
    .slider .view ul  li a {
        display: block;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        border: 1px solid white;
    }
    
    /* banner */
    .banner {
        margin-top: 20px;
        display: block;
        width: 50%;
        color: white;
    }
    .banner .formdk {
        padding: 0px;
    }
    .banner .formdk div input {
        width: 100%;
        height: 40px;
    }
    .banner .formdk div select {
        width: 100%;
        height: 40px;
    }
    .banner .formdk #slider-submit {
        display: block;
        border: 1px solid #ea6645;
        border-radius: 5px;
        background-color: transparent;
        color: #ea6645;
        margin-left: auto;
        margin-right: 0px;
    }
    .banner .formdk #slider-submit:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
}

/* fix */
@media (min-width: 576px) and (max-width:767.33px){
    .banner h3 {
        font-size: 15px;
    }
}
/* mành hinh md tro lên */
@media (min-width: 576px) {
    .homepage {
        background-color: #011c38;
        position: relative;
    }
    .slider {
        z-index: 10;
        display: block;
        margin-top: 20px;
        width: 50%;
        height: 200px;
    }
    .slider img {
        width: 100%;
        height: 300px;
    }
    
    /* banner */
    .banner {
        margin-top: 20px;
        display: block;
        width: 50%;
        color: white;
    }
    .banner h3 {
        margin-bottom: 25px;
    }
    .banner .formdk {
        padding: 0px;
    }
    .banner .formdk div input {
        width: 100%;
        height: 40px;
    }
    .banner .formdk div select {
        width: 100%;
        height: 40px;
    }
    .banner .formdk #slider-submit {
        display: block;
        border: 1px solid #ea6645;
        border-radius: 5px;
        background-color: transparent;
        color: #ea6645;
        margin-left: auto;
        margin-right: 0px;
        margin-top: 10px;
        padding: 5px 10px;
    }
    .banner .formdk #slider-submit:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
}
</style>