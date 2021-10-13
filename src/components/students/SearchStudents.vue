<template>
    <div id="searchStudent">
        <div>
        <span>Show </span>
        <b-select  value="8" id="selectShowStudents" >
            <option value="8">8</option>
        </b-select>
        </div>
        <div class="search">
        <input id="searchStd" placeholder="Tìm kiếm" type="text">
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
       
        }
    }
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

input::placeholder {
  font-size: 14px;
  font-weight: 900;
  padding: 0px 10px;
}

</style>