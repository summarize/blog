import Vue from 'vue'
import App from './App.vue'
import Router from './routers/index'
import Store from './stores/index'
import Antd from 'ant-design-vue'

// 全局引用 ant-design-vue
Vue.use(Antd)

window.Bus = new Vue({
  Router,
  Store,
  render: h => h(App)
}).$mount('#app')
