<template>
  <div class="ctheader">
      <div class="container">
        <!-- màn hình nhỏ -->
        <div v-show="onmenu" class="mark"></div>
        <div @click="onmenu = !onmenu" class="ctmenu">
            <span class="idrop"></span>
            <span class="idrop"></span>
            <span class="idrop"></span>
        </div>
        <ul v-show="onmenu" class="hdrop">
            <li id="chdrop" @mouseover="aHome='block'"  @mouseleave="aHome = 'none'"><a href="">Home</a>
                <ul id="chlist" v-bind:style="{height: auto,display: aHome}">
                    <li><a href="">Homepage Education</a></li>
                    <li><a href="">Homepage Courses</a></li>
                    <li><a href="">Homepage Events</a></li>
                </ul>
            </li>
            <li id="chdrop" @mouseover="aCourses='block'"  @mouseleave="aCourses = 'none'"><a href="">Courses</a>
                <ul id="chlist" v-bind:style="{height: auto,display: aCourses}">
                    <li><a href="">Course Landing Page</a></li>
                    <li><a href="">Course Listing</a></li>
                    <li><a href="">Course Listing with Images</a></li>
                    <li><a href="">Course Detail v1</a></li>
                    <li><a href="">Course Detail v2</a></li>
                    <li><a href="">Course Detail v3</a></li>
                </ul>
            </li>
            <li id="chdrop" @mouseover="aEvents='block'"  @mouseleave="aEvents = 'none'"><a href="">Events</a>
                <ul id="chlist" v-bind:style="{height: auto,display: aEvents}">
                    <li><a href="">Events Listing with images</a></li>
                    <li><a href="">Events Listing</a></li>
                    <li><a href="">Events Grid</a></li>
                    <li><a href="">Event Detail</a></li>
                    <li><a href="">Events Calendar</a></li>
                </ul>
            </li>
            <li>
                <a href="about-us.html">About Us</a>
            </li>
            <li id="chdrop" @mouseover="aBlog='block'"  @mouseleave="aBlog = 'none'"><a href="">Blog</a>
                <ul id="chlist" v-bind:style="{height: auto,display: aBlog}">
                    <li><a href="">Blog listing</a></li>
                    <li><a href="">Blog Detail</a></li>
                </ul>
            </li>
            <li id="chdrop" @mouseover="apages='block'"  @mouseleave="apages = 'none'"><a href="">Pages</a>
                <ul id="chlist" v-bind:style="{height: auto,display: apages}">
                    <li><a href="">Fullwidth</a></li>
                    <li><a href="">Left Sidebar</a></li>
                    <li><a href="">Right Sidebar</a></li>
                    <li><a href="">Microsite</a></li>
                    <li><a href="">My Account</a></li>
                    <li><a href="">Members</a></li>
                    <li><a href="">Member Detail</a></li>
                    <li><a href="">Register & Sign In</a></li>
                    <li><a href="">Shortcodes</a></li>
                </ul>
            </li>
            <li>
                <a href="contact-us.html">Contact Us</a>
            </li>
        </ul>
        <router-link id="mhsm" :to="{name: 'Login'}">Login</router-link>
        <!-- màn hình nhỏ end -->

        <!-- màn hình md trở lên -->
        <ul class="hdrop1">
            <li id="chdrop" @mouseover="aHome='block'"  @mouseleave="aHome = 'none'"><a href="">Home</a>
                <ul id="chlist" v-bind:style="{height: auto,display: aHome}">
                    <li><a href="">Homepage Education</a></li>
                    <li><a href="">Homepage Courses</a></li>
                    <li><a href="">Homepage Events</a></li>
                </ul>
            </li>
            <li id="chdrop" @mouseover="aCourses='block'"  @mouseleave="aCourses = 'none'"><a href="">Courses</a>
                <ul id="chlist" v-bind:style="{height: auto,display: aCourses}">
                    <li><a href="">Course Landing Page</a></li>
                    <li><a href="">Course Listing</a></li>
                    <li><a href="">Course Listing with Images</a></li>
                    <li><a href="">Course Detail v1</a></li>
                    <li><a href="">Course Detail v2</a></li>
                    <li><a href="">Course Detail v3</a></li>
                </ul>
            </li>
            <li id="chdrop" @mouseover="aEvents='block'"  @mouseleave="aEvents = 'none'"><a href="">Events</a>
                <ul id="chlist" v-bind:style="{height: auto,display: aEvents}">
                    <li><a href="">Events Listing with images</a></li>
                    <li><a href="">Events Listing</a></li>
                    <li><a href="">Events Grid</a></li>
                    <li><a href="">Event Detail</a></li>
                    <li><a href="">Events Calendar</a></li>
                </ul>
            </li>
            <li>
                <a href="">About Us</a>
            </li>
            <li id="chdrop" @mouseover="aBlog='block'"  @mouseleave="aBlog = 'none'"><a href="">Blog</a>
                <ul id="chlist" v-bind:style="{height: auto,display: aBlog}">
                    <li><a href="">Blog listing</a></li>
                    <li><a href="">Blog Detail</a></li>
                </ul>
            </li>
            <li id="chdrop" @mouseover="apages='block'"  @mouseleave="apages = 'none'"><a href="">Pages</a>
                <ul id="chlist" v-bind:style="{height: auto,display: apages}">
                    <li><a href="">Fullwidth</a></li>
                    <li><a href="">Left Sidebar</a></li>
                    <li><a href="">Right Sidebar</a></li>
                    <li><a href="">Microsite</a></li>
                    <li><a href="">My Account</a></li>
                    <li><a href="">Members</a></li>
                    <li><a href="">Member Detail</a></li>
                    <li><a href="">Register & Sign In</a></li>
                    <li><a href="">Shortcodes</a></li>
                </ul>
            </li>
            <li>
                <a href="">Contact Us</a>
            </li>
            <router-link class="mhmd" :to="{name: 'Login'}">Login</router-link>
        </ul>
        <!-- màn hình to end -->

      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            onmenu : false,
            aHome : 'none',
            aCourses : 'none',
            aEvents : 'none',
            aBlog : 'none',
            apages : 'none',
        }
    }
}
</script>

<style scoped>
.hdrop a {
    text-decoration: none;
}

/* màn hình nhỏ */
@media (min-width:0px) and (max-width: 575.98px) {
    .ctheader {
        border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
    .container {
        padding: 0px;
        position: relative;
        display: block;
    }
    
    .ctmenu {
        width: 20px;
        margin-left: auto; 
        margin-right: 10px;
        margin-top: 14px;
        margin-bottom: 15px;
        }
    .idrop {
        display: block;
        background-color: white;
        width: 20px;
        height: 2px;
        border-radius: 1px;
        margin: 2px 0px;
    }
    .mark {    
        background-image: url(../../assets/background-city.png);
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 100%;
        background-color: rgba(4, 40, 74, 1);
    }
    #mhsm {
        font-size: 10px;
        padding: 2px;
        border: 0px;
        color: rgba(0, 0, 0, 0.5);
        width: 30px;
        height: 30px;
        line-height: 25px;
        border: 1px solid transparent;
        border-radius: 50%;
        background-image: url(../../assets/user.png);
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        top: -10px;
        right: 40px;    
    }
    .hdrop {
        margin: 0px;
        padding: 0px;
    }
    .hdrop li {
        border-left: 10px solid transparent;
        padding: 0px;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        width: 100%;
    }
    .hdrop a {
        color: white;
    }
    .hdrop a:hover {
        color: salmon;
    }
    .hdrop1 {
        display: none;
    }
    #chlist {
        padding: 0px;
        transition: height 2s;
    }
    #chlist > li {
        padding: 0px;
    }
}
/* mành hinh md tro lên */
@media (min-width: 576px) and (max-width:767.33px) {
    * {
        font-size: 10px;
    }
}
@media (min-width: 576px) {
    li {
        list-style: none;
    }
    .ctheader {
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        height: 80px;
    }
    .ctmenu {
        display: none;
    }
    .mark {
        display: none;
    }
    .hdrop {
        display: none;
    }
    #mhsm {
        display: none;
    }
    .hdrop1 {
        display: flex;
        margin: 0px;
        justify-content: flex-end;
        height: 80px;
        line-height: 80px;
    }
    .hdrop1 > li {
        padding: 0px 10px;
        position: relative;
    }
    
    .hdrop1 > li a:hover {
        color: salmon;
    }
    .hdrop1 > li a {
        color: white;
        text-decoration: none;
    }
    .hdrop1 > .mhmd {
        border: 0px;
        display: flex;
        margin-top: 15px;
        height: 50px;
        align-items: center;
        justify-content: center;
        line-height: 50px;
        color: rgba(0, 0, 0, 0.5);
        border-radius: 50%;
        background-image: url(../../assets/user.png);
        background-size: cover;
        background-repeat: no-repeat;
        width: 50px;
        font-size: 15px;
    }
    .hdrop1 > li > ul {
        position: absolute;
        left: -100%;
        top: 60px;
        z-index: 100;
    }
    .hdrop1 > li > ul > li {
        background-color: #011c38;
        display: block;
        width: 200px;
        line-height: 30px;
        border-top: 1px solid rgba(255, 255, 255, 0.2);
    }
    .hdrop1 > li > ul > li a {
        display: block;
        width: 100%;
        padding-left: 10px;
        font-size: 15px;
    }
    .hdrop1 > li > ul > li a:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
}

</style>