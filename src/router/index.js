import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Index from '../components/Index.vue'
import Table from '../components/Table.vue'
import PaginaInicial from '../views/PaginaInicial.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/table',
      name: 'table',
      component: Table
    },
    {
      path: '/PaginaInicial',
      name: 'PaginaInicial',
      component: PaginaInicial
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
