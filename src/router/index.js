import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/home/Home.vue';
import Login from '../components/login/Login.vue'
import Manage from '../components/students/Manage.vue' 


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
  
  }
  





];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
