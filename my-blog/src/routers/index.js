// import Vue from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import authRoute from './router/auth'

// Vue.use(VueRouter)

const routerConfig = {
  history: createWebHistory(process.env.BASE_URL), 
  routes: [
    ...authRoute
  ]
}

const router = createRouter(routerConfig)

export default router
