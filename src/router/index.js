import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import store from '@/store'

const routes = [
  {
    path: '/',
    component: HomePage,
    meta: {
      layout: 'main',
      auth: true,
    },
  },
  {
    path: '/create',
    component: () => import('@/views/CreatePage.vue'),
    meta: {
      layout: 'main',
      auth: true,
    },
  },
  {
    path: '/faq',
    component: () => import('@/views/FaqPage.vue'),
    meta: {
      layout: 'main',
      auth: true,
    },
  },
  {
    path: '/auth',
    component: () => import('@/views/AuthPage.vue'),
    meta: {
      layout: 'auth',
      auth: false,
    },
  },
  {
    path: '/signup',
    component: () => import('@/views/SignupPage.vue'),
    meta: {
      layout: 'auth',
      auth: false,
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
})

router.beforeEach((to, from, next) => {
  const reqAuth = to.meta.auth

  if (reqAuth && store.getters['auth/isAuthenticated']) {
    next()
  } else if (reqAuth && !store.getters['auth/isAuthenticated']) {
    next('/auth?message=auth')
  } else {
    next()
  }
})

export default router
