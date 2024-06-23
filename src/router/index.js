import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Speakers from '../views/SpeakersView.vue';
import Sponsors from '../views/SponsorsView.vue';
import About from '../views/AboutView.vue';
import Register from '../views/RegisterView.vue';
import Contact from '../views/ContactView.vue';
import NotFound from "../views/NotFound.vue";
import Subscribed from "../views/SubscribedView.vue";
import GetTicket from "../views/GetTicketView.vue";

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
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/subscribed',
      name: 'subscribed',
      component: Subscribed
    },
    {
      path: '/get-a-ticket',
      name: 'getTicket',
      component: GetTicket
    },
    // catchall 404
    {
      path: '/:pathMatch(.*)',
      name: 'NotFound',
      component: NotFound
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // return desired position
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ el: to.hash, behavior: 'smooth' });
        }, 300); // delay to ensure the page/components are fully loaded
      });
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
})

export default router
