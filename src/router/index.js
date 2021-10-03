import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/home/Home.vue';
import Login from '../components/Login.vue'
import Manage from '../components/students/Manage.vue' 
import Student from '../components/students/Student.vue' // xem
import Update from '../components/students/Update.vue' // xữa
import Create from '../components/students/Create.vue' // thêm




Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path:'/login',
    name:'Login',
    component:Login
  },
  {
    path:'/manage', 
    name:'Manage',
    component:Manage,
    children:[
      {
        path:'/:mssv',
        name:'Student',
        component:Student
      },
      {
        path:'/Update/:mssv',
        name:'Update',
        component:Update
      },
      {
        path:'/add',
        name:'add',
        component:Create
      }
    ]
  
  }
  





];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
