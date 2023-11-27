import {createRouter,createWebHistory} from 'vue-router'
import HomePage from '../pages/HomePage.vue'

const routes=[{
    path:'/',
    name:'HomePage',
    component:HomePage
}]

const router = createRouter({
    history: createWebHistory('/localhost:8080/'),
    routes
  });

export default router;