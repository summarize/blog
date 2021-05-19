import { createRouter, createWebHistory } from 'vue-router'
import Cookies from 'js-cookie'
import authRoute from './router/auth'

const routerConfig = {
  history: createWebHistory(process.env.BASE_URL), 
  routes: [
    ...authRoute
  ]
}

const router = createRouter(routerConfig)

// 注册一个全局前置守卫
router.beforeEach((to, from, next) => {
  // console.log(to, from, next, Cookies.get('username') !== undefined)
  // 简单判断一下是否登录
  if (Cookies.get('username') !== undefined) {
    next()
  } else if (to.path === '/auth/login') {
    // 判断一下是不是进入登录页，否则会进入死循环
    next()
  } else {
    next({ path: '/auth/login', query: { noRedirect: true } })
  }
})

export default router
