<template>
  <div>
    <a-dropdown :trigger="['click']">
      <a class="ant-dropdown-link" @click="e => e.preventDefault()">
        {{ $t('auth.langaugeSelect') }} <i class="iconfont icon-arrow-down"></i>
      </a>
      <template v-slot:overlay>
        <a-menu @click="changeLang">
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
export default {
  data () {
    return {}
  },
  methods: {
    changeLang () {}
  }
}
</script>
