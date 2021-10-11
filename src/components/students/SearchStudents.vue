<template>

    <div id="selections">
            <div>
                <span>Show</span>
                  <select  class="selectCustom" >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option selected value="8">8</option>
                </select>
                <span>Etries</span>

            </div>
            <div>
                <span>Search: </span>
                <input type="text">  
            </div>
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

#selections {
    display: flex;
    justify-content: space-between;
}

#selections div:nth-child(2) span {
    margin-right: 10px;
}

#selections div:nth-child(2) input {
    outline:none;
    border-radius: 4px;
    border:  rgba(167, 167, 170,0.6) 1px solid;
}

.selectCustom {
  margin-left: 10px;
  margin-right: 10px;
}

</style>