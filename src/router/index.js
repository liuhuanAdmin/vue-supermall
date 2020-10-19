import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = ()=>import('@/views/home/home')
const Category = ()=>import('@/views/category/category')
const Shopping = ()=>import('@/views/shopping/shopping')
const Profile = ()=>import('@/views/profile/profile')
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/shopping',
    component: Shopping
  },
  {
    path: '/profile',
    component: Profile
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
