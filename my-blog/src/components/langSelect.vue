<template>
  <div>
    <a-dropdown :trigger="['click']">
      <a class="ant-dropdown-link" @click="e => e.preventDefault()">
        {{ $t('auth.langaugeSelect') }} <i class="iconfont icon-arrow-down"></i>
      </a>
      <template #overlay>
        <a-menu @click="changeLang" :selectedKeys="[lang]">
          <a-menu-item key="1">
            中文
          </a-menu-item>
          <a-menu-item key="2">
            English
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      lang: '1'
    }
  },
  computed: {
    ...mapGetters(['getLocale'])
  },
  mounted () {
    // console.log(this.$store.state, this.getLocale)
    this.lang = this.getLocale === 'en' ? '2' : '1'
  },
  methods: {
    ...mapActions(['setLocale']),
    changeLang (e) {
      let locale = e.key === '1' ? 'zh-CN' : 'en'
      this.lang = e.key.toString()
      this.setLocale(locale)
      this.$i18n.locale = locale
    }
  }
}
</script>
