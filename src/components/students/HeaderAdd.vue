<template>
    <div id="headerStd">
            <div id="childlef" >
                <div class="btndropdown" id="btn1" >Phòng ban
                    <awesome :icon="['fas','caret-down']" />
                    <ul class="dropdowns" >
                        <li class="childrop" >
                            Cộng tác sinh viên
                        </li>
                        <li class="childrop" >
                            Giáo vụ
                        </li>
                        <li class="childrop" >
                            Hiệu trưởng
                        </li>
                    </ul>
                </div>
                <div class="btndropdown" id="btn2" >Chức vụ
                    <awesome :icon="['fas','caret-down']" />
                    <ul  class="dropdowns">
                        <li class="childrop" >
                            Lớp trưởng
                        </li>
                        <li class="childrop" >
                            sinh viên
                        </li>
                        <li class="childrop" >
                            giáo viên
                        </li>
                    </ul>
                </div>
            </div>
            
            <router-link :to="{name:'Add'}" id="addStd" >Thêm nhân viên</router-link>
        </div>
</template>

<script>
export default {

}
</script>

<style scoped >

* {
    padding: 0;
    margin: 0;
    box-sizing: content-box;
}

  #headerStd {
    display: flex;
    justify-content: space-between;
}   

#childlef div {
    border: none;
    border-radius: 4px;
    color: white;
    background-color: rgb(167, 167, 170);
    width: 140px;
    height: 35px;
    text-align: center;
    margin-right: 15px;
    display: inline-block;
    line-height: 35px;
    position: relative;
    cursor: pointer;
    

}

#addStd {
    background-color: green;
    border: none;
    border-radius: 4px;
    color: white;
    width: 140px;
    height: 35px;
    text-align: center;
    line-height: 35px;
    text-decoration: none;
}

.dropdowns {
    position: absolute;
    background-color: rgb(167, 167, 170);
    top: 35;
    width: 140px;
    color: white;
    cursor: pointer;
    display: none;  
}

#childlef div:hover .dropdowns {
    display: block;
}

.childrop {
    list-style: none;
    text-align: center;
    border-bottom: 1px solid white;
    border-radius: 4px;
}

.childrop:nth-child(1) {
    border-top: 1px solid white;
}
</style>