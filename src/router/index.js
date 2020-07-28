import Vue from 'vue'
import VueRouter from 'vue-router'

const About = () => import(/* webpackChunkName: "common" */ "@/views/About.vue");
const Contacts = () => import(/* webpackChunkName: "common" */ "@/views/Contacts.vue");
const Projects = () => import(/* webpackChunkName: "common" */ "@/views/Projects.vue");
const Skills = () => import(/* webpackChunkName: "common" */ "@/views/Skills.vue");
const Education = () => import(/* webpackChunkName: "common" */ "@/views/Education.vue");
const Experience = () => import(/* webpackChunkName: "common" */ "@/views/Experience.vue");

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'About',
    component: About
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills
  },
  {
    path: '/education',
    name: 'Education',
    component: Education
  },
  {
    path: '/experience',
    name: 'Experience',
    component: Experience
  }
]

const router = new VueRouter({
  routes
})

export default router
