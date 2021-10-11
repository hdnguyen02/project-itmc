<template>
    <div>
        <!-- HeaderAdd ( chứa thanh thêm sinh viên ) -->
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
        <!-- Show and Search  -->
        <div id="selections">
            <div>
                <span>Show</span>  
            </div>
            <div>
                <span>Search</span>
                <input type="text">
            </div>
        </div>

        <!-- table students -->
        <div id="table" >
            <table>
                <tr>
                    <td class="titletd" v-for="(obj,index) in config" :key="index" >{{obj.name}}</td>   
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
                        <button>Xem</button>
                    </td>
                     <td>
                        <button>Sữa</button>
                    </td>
                     <td>
                        <button>Xóa</button>
                    </td>
                </tr>

            </table>
        </div>
        <div id="page">
            <span class="next" >Previus</span>
            <span @click="pageChange(index+1)" class="btnpage" v-for="(item,index) in new Array(this.page)" :key="index" >{{index+1}}</span>
            <span class="next">Next</span>

        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            config:[],
            title:"http://localhost:3000/congig",
            studentsJson:"http://localhost:3000/sudents",
            students:[],
            page:undefined, // số page sẽ hiển thị ( tùy theo showStudents )
            showStudents :5,   // muốn hiển thị bao nhiêu sinh viên cùng lúc show
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
        }
    }
}
 
</script>

<style scoped>

* {
    padding: 0;
    margin: 0;
    box-sizing: content-box;
}

#headerStd {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
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


.dropdowns .open {
    display: block;
}

#selections {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
}

#selections div:nth-child(2) span {
    margin-right: 10px;
}

#selections div:nth-child(2) input {
    outline:none;
}

#table {
    margin: 10px;
}

#table table {
    width: 100%;
    border: rgba(167, 167, 170,0.5) 1px solid;

}

#table table td {
    border: rgba(167, 167, 170,0.5) 1px solid;
}

.titletd {
    height: 60px;
    text-align: center;

}

.titletd:nth-child(4) {
    width: 60px;
}

.titletd:nth-child(6) {
    width: 60px;

}

.titletd:nth-child(7),.titletd:nth-child(8),.titletd:nth-child(9),.titletd:nth-child(1)  {
    width: 70px;
}

#std:nth-child(even) {
    background-color: rgb(244, 245, 249);
}

#std td {
    padding: 15px 0px;
    text-align: center;
}

#page {
    display: flex;
    justify-content: end;
    margin-right: 10px;
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

.next {
    width: 70px;
    height: 30px;
    display: inline-block;
    line-height: 30px;
    text-align: center;
    border: rgba(167, 167, 170,0.5) 1px solid;
}



</style>

