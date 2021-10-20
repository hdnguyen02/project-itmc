<template>
    <div id="searchStudent">
        <div id="show">
        <span>Show</span>
        <span>{{showStudents.length}}</span>
        <button class="btn btn-outline-danger btn-step" @click="giamshow">-</button>
        <button class="btn btn-outline-success btn-step" @click="tangshow">+</button>
        </div>
        <div class="search">
        <input id="searchStd" placeholder="Tìm kiếm" type="text">
        </div>
    </div>
</template>

<script>
export default {
    props:['showStudents','tangshow','giamshow'],
   
}
</script>

<style scoped >

#searchStudent {
    display: flex;
    justify-content: space-between;
    padding: 10px 0px;
    background-color: #F5F5F5;
    align-items: center;
}

#searchStd {
    border-radius: 4px;
    border: 1px solid #DCDCDC;
}


#selectShowStudents {
    width: 60px;
    height: 35px;
}

.btn-step {
    width: 30px;
    height: 30px;
    display: inline-block;
    text-align: center;
    line-height: 30px;
    padding: 0;
}

#show > span {
    margin: 4px;
    padding: 4px;
}

#show > button {
    margin:4px;
}



</style>