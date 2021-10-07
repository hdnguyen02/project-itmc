import Vue from 'vue'
import VueRouter from 'vue-router'

// view

import Home from '../views/Home.vue'
import Manage from '../views/Manage.vue'
import Login from '../views/Login.vue'

// component
import Students from '../components/students/Students.vue'
import Student from '../components/students/Student.vue'
import Edit from '../components/students/Edit.vue'
import Add from '../components/students/Add.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',        // trang chủ
    name: 'Home',
    component: Home
  },
  {
    path: '/login',   // đăng nhập
    name: 'Login',
    component: Login
  },
  {
    path:'/manage',   // quản lý
    name:'Manage',
    component: Manage,
    children: [
      {
        path:'',
        name:'Students',    // danh sách sinh viên
        component:Students
      },
      {
        path:'/manage/student/:id',  // xem sinh viên 
        name:'Student',
        component:Student
      },
      {
        path:'/manage/edit/:id',   // chĩnh sữa sinh viên
        name:'Edit',
        component:Edit
      },
      {
        path:'/manage/add',   // thêm sinh viên
        name:'Add',
        component:Add
      }
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
