import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import(/* webpackChunkName: "common" */ "@/views/Home.vue");
const About = () => import(/* webpackChunkName: "common" */ "@/views/About.vue");
const Contacts = () => import(/* webpackChunkName: "common" */ "@/views/Contacts.vue");

Vue.use(VueRouter)

  const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'About',
    component: About
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  }
]

const router = new VueRouter({
  routes
})

export default router
