import { createRouter, createWebHistory } from 'vue-router';
import PaginaInicial from '../views/PaginaInicial.vue';
import FeedSugestoes from '../views/FeedSugestoes.vue';
import Login from '../components/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: PaginaInicial
    },
    {
      path: '/feed',
      name: 'feed',
      component: FeedSugestoes
    },
    {
      path: '/login',
      name:'login',
      component: Login
    }
    
  ]
});

export default router;
