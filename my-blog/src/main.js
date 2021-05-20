import { createApp } from 'vue'
import App from './App.vue'
import router from './routers/index'
import store from './stores/index'
import i18n from './lang/index'
import { Button, Input, Select, Checkbox, Dropdown, Menu, Form, Spin, ConfigProvider } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import '@/assets/iconfont/iconfont.css'
import '@/assets/css/public.less'

// 全局引用 ant-design-vue
// Vue.use(Antd)

/* window.Bus = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app') */

Window.Bus = createApp(App).component(Button.name, Button).component(Button.Group.name, Button.Group).component(Input.name, Input).component(Select.name, Select).component(Checkbox.name, Checkbox).component(Dropdown.name, Dropdown).component(Menu.name, Menu).component(Menu.Item.name, Menu.Item).component(Menu.SubMenu.name, Menu.SubMenu).component(Menu.ItemGroup.name, Menu.ItemGroup).component(Form.name, Form).component(Spin.name, Spin).component(ConfigProvider.name, ConfigProvider).use(store).use(router).use(i18n).mount('#app')
