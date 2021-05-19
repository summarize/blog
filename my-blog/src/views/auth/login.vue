<template>
  <div class="login-card">
    <div class="login-child">
      <div class="login-tit">{{ $t('auth.username') }}：</div>
      <a-input :placeholder="$t('auth.username')" v-model="username" />
    </div>
    <div class="login-child">
      <div class="login-tit">{{ $t('auth.password') }}：</div>
      <a-input :placeholder="$t('auth.password')" v-model="password" />
    </div>
    <div class="login-sels clear">
      <div class="fl"></div>
      <div class="fr"></div>
    </div>
    <a-button type="primary" @click="enterBlog()">进入</a-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    enterBlog () {}
  }
}
</script>

<style lang="less" scoped>
.login-card {
  text-align: left;
  .login-tit {
    margin-bottom: 10px;
  }
  .login-child {
    margin-bottom: 20px;
  }
  .login-sels {
    margin-bottom: 30px;
  }
}
</style>
