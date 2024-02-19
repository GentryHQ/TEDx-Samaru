import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Speakers from '../views/SpeakersView.vue';
import Sponsors from '../views/SponsorsView.vue';
import Register from '../views/RegisterView.vue';
import NotFound from "../views/NotFound.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/speakers',
      name: 'speakers',
      component: Speakers
    },
    {
      path: '/sponsors',
      name: 'sponsors',
      component: Sponsors
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    // catchall 404
    {
      path: '/:pathMatch(.*)',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

export default router
