<template>
    <div>
        <header-add class="margin" />
        <hr>
        <search-students class="margin" />
        <hr>

        <!-- table students -->
        <div id="students" >
            <table>
                <tr>
                    <td class="titleTable" v-for="(conf,index) in config" :key="index" >{{conf.name}}</td>   
                </tr>
                <tr id="std" v-for="(student,index) in listRender" :key="index" >
                    <td >
                    <span>{{student.maSV}}</span>
                    </td>
                    <td>
                        <span>Ảnh</span>
                    </td>
                    <td>
                        <span>{{student.fullName}}</span>
                    </td>
                    <td>
                        <span>{{student.geder}}</span>
                    </td>
                    <td>
                        <span>{{student.postion}}</span>
                    </td>
                    <td>
                        <span>{{student.condistion}}</span>
                    </td>
                    <td>
                        <router-link  class="btn-table backgroundBlue" :to="{name:'Student',params:{id:student.maSV}}" >Xem</router-link>
                    </td>
                     <td>
                        <router-link class="btn-table  backgroundGreen" :to="{name:'Edit',params:{id:student.maSV}}"  >Sữa</router-link>
                    </td>
                     <td>
                        <button class="btn-table backgroundRed" >Xóa</button>
                    </td>
                </tr>
            </table>
        </div>
        <div id="paginations" class="margin" >
            <p>Show in 1 to {{showStudents}} to {{students.length}}</p>
            <div>
                <span @click="step" class="stepBtn" >Previous</span>
                <span @click="pageChange(index+1)" class="btnpage" v-for="(item,index) in new Array(this.page)" :key="index" >{{index+1}}</span>
                <span @click="step" class="stepBtn">Next</span>
            </div>
        </div>
    </div>
</template>

<script>

import HeaderAdd from './HeaderAdd.vue';
import SearchStudents from './SearchStudents.vue';


export default {

    components:{
        HeaderAdd,
        SearchStudents
    },
    
    data(){
        return {
            config:[],
            title:"http://localhost:3000/congig",
            studentsJson:"http://localhost:3000/sudents",
            students:[],
            page:undefined, // số page sẽ hiển thị ( tùy theo showStudents )
            showStudents :8,   // muốn hiển thị bao nhiêu sinh viên cùng lúc show
            curentPage:1,   // vị trí hiện tại của page ta đang đứng
            listRender:[]   // Array dùng để render
            
   
        }
    },
    mounted () {
        this.loader(); // gọi data.
         
    },
    watch:{
        students(){  // khi đã nhận được dữ liệu từ Json Server
            this.page = this.students.length / this.showStudents; 
            this.listRender = this.students.slice(0,this.showStudents); 
            if (this.students.length%this.showStudents != 0) { // nếu như có chia dư thì ta làm tròng số đó sau đo cộng cho 1
                this.page = Math.trunc(this.page) + 1;
            }    
        },
    },
    methods:{
        pageChange (data) {
            this.curentPage = data;
            this.listRender = this.students.slice((data-1)*this.showStudents,(data-1)*this.showStudents+this.showStudents);
        },
        loader() {
            fetch (this.title)
                    .then (repos => repos.json())
                    .then (data => this.config = data);
        fetch(this.studentsJson)
                    .then (repos => repos.json())
                    .then (data =>this.students = data)
        },
        step () {
            // func sử lý chức năng tiến lùi 
            // khi người dùng nhấn vào nút tiến => cho page hiện tại tăng lên 
            console.log("hello word");
        }
    }
}
 
</script>

<style scoped>



@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');


* {
    padding: 0;
    margin: 0;
    box-sizing: content-box;
    font-family: 'Roboto', sans-serif;
}

#students {
    height: 520px;
}

#students table {
    width: 99%;
    border: rgba(167, 167, 170,0.05) 1px solid;
}

#students table td {
    border: rgba(167, 167, 170,0.1) 1px solid;
}

.titleTable {
    height: 60px;
    text-align: center;
    line-height: 60px;
    font-size: 18px;
    font-weight: 800;
    background-color: rgb(244, 245, 249);
}



#std:nth-child(odd) {
    background-color: rgb(244, 245, 249);
}

#std td {
    padding: 12px 0px;
    text-align: center;
}

/* style btn - table  */

#students .btn-table {
    width: 54px;
    height: 32px;
    display: inline-block;
    text-decoration: none;
    border: none;
    border-radius: 4px;
    line-height: 32px;
    text-align: center;

}

#paginations {
    display: flex;
    justify-content: space-between;
}





.btnpage {
    display: inline-block;
    height: 30px;
    width: 40px;
    color: rgb(78, 115, 223);
    border: rgba(167, 167, 170,0.5) 1px solid;
    line-height: 30px;
    text-align: center;


}

.stepBtn {
    width: 70px;
    height: 30px;
    display: inline-block;
    line-height: 30px;
    text-align: center;
    border: rgba(167, 167, 170,0.5) 1px solid;
}

.backgroundBlue {
    background-color: rgba(47, 86, 200,0.9);
    color: white;
}


.backgroundGreen {
    background-color: rgb(54, 185, 204);
    color: white;
}

.backgroundRed {
    background-color: rgb(231, 74, 59);
    color: white;
}

.margin {
    margin-left: 10px;
    margin-right: 21px;
    padding: 15px 0px;
}

</style>

