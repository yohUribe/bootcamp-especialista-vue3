import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue";

import {isAuthenticated} from "@/utils/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('@/views/LoginView.vue')
      },
      {
        path: '/register',
        name: 'register',
        component: () => import('@/views/RegisterView.vue')
      },
      {
        path: '/hero/:id',
        name: 'heroes-detail',
        component: () => import('@/views/HeroesDetailView.vue')
      }
  ]
})

router.beforeEach((to, from, next) => {
    if(to.name === 'login' && isAuthenticated()) {
        return next({name: 'home'})
    } else if (to.name === 'register' && isAuthenticated()){
        return next({name: 'home'})
    }else if (to.name === 'home' && !isAuthenticated()){
        return next({name: 'login'})
    }else {
        return next()
    }
})

export default router
