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
import Notfound404 from '../views/Notfound404.vue'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',      
    name: 'Home',
    component: Home
  },
  {
    path: '/login',   
    name: 'Login',
    component: Login
  },
  {
    path:'/manage',   
    name:'Manage',
    component: Manage,
    beforeEnter:(to,from,next) => {
      if (store.state.ower == false) {

        next("/login");
      } else {
        next();
      }
    },

    children: [
      {
        path:'', 
        name:'Students',    
        component:Students
      },
      {
        path:'/manage/student/:id', 
        name:'Student',
        component:Student
      },
      {
        path:'/manage/edit/:id',   
        name:'Edit',
        component:Edit
      },
      {
        path:'/manage/add',   
        name:'Add',
        component:Add
      }
    ]
  },
  {
    path:"/:catchAll(.*)",
    name:"Notfound",
    component:Notfound404
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
