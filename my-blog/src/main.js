import { createApp } from 'vue'
import App from './App.vue'
import router from './routers/index'
import store from './stores/index'
// import Antd from 'ant-design-vue'

// 全局引用 ant-design-vue
// Vue.use(Antd)

/* window.Bus = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app') */

createApp(App).use(store).use(router).mount('#app')
