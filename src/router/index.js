import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import SideBar from '../views/SideBar.vue'
import Register from '../views/Register.vue'
import Contact from '../views/Contact.vue'
import Dashboard from '../views/Dashboard.vue'
import JobCategories from '../views/JobCategories.vue'
import JobsInCateory from '../views/JobsInCateory.vue'
import Profile from '../views/Profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/sideBar',
    name: 'sideBar',
    component: SideBar
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/jobsincategory',
    name: 'jobsincategory',
    component: JobsInCateory
  },
  {
    path: '/jobcategories',
    name: 'jobcategories',
    component: JobCategories
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // component: About
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
