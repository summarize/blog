<template>
  <div id="app-box">
    <a-config-provider :locale="language">
      <router-view />
    </a-config-provider>
  </div>
</template>

<script>
import cn from 'ant-design-vue/lib/locale-provider/zh_CN'
// import en from 'ant-design-vue/lib/locale-provider/en_US'

export default {
  name: 'App',
  data () {
    return {}
  },
  computed: {
    language () {
      return cn
    }
  }
}
</script>

<style>
html, body, #app-box {
  width: 100%;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
