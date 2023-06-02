import { createRouter, createWebHistory } from 'vue-router';
import PaginaInicial from '../views/PaginaInicial.vue';
import FeedSugestoes from '../views/FeedSugestoes.vue';

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
    
  ]
});

export default router;
