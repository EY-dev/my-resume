import Vue from 'vue'
import VueRouter from 'vue-router'

const About = () => import(/* webpackChunkName: "common" */ "@/views/About.vue");
const Contacts = () => import(/* webpackChunkName: "common" */ "@/views/Contacts.vue");
const Projects = () => import(/* webpackChunkName: "common" */ "@/views/Projects.vue");
const Skills = () => import(/* webpackChunkName: "common" */ "@/views/Skills.vue");
const Education = () => import(/* webpackChunkName: "common" */ "@/views/Education.vue");
const Experience = () => import(/* webpackChunkName: "common" */ "@/views/Experience.vue");
const EmailMe = () => import(/* webpackChunkName: "common" */ "@/views/EmailMe.vue");
const ContactMe = () => import(/* webpackChunkName: "common" */ "@/views/ContactMe.vue");
const ElegantCRM = () => import(/* webpackChunkName: "common" */ "@/views/ProjectElegantPage.vue");
const PetProject = () => import(/* webpackChunkName: "common" */ "@/views/ProjectAlgorithmsPage.vue");
const ResumeProject = () => import(/* webpackChunkName: "common" */ "@/views/ProjectResumePage.vue");
const ArtPortfolio = () => import(/* webpackChunkName: "common" */ "@/views/ArtPortfolio.vue");

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
    },
    {
      path: '/email-me',
      name: 'Email Me',
      component: EmailMe
    },
    {
        path: '/contact-me',
        name: 'Contact Me',
        component: ContactMe
    },
    {
        path: '/elegant-crm',
        name: 'Elegant project',
        component: ElegantCRM
    },
    {
        path: '/demo-of-algorithms',
        name: 'Pet project',
        component: PetProject
    },
    {
        path: '/resume',
        name: 'Resume project',
        component: ResumeProject
    },
    {
        path: '/art-portfolio',
        name: 'Art portfolio',
        component: ArtPortfolio
    }
]

const router = new VueRouter({
  routes
})

export default router
