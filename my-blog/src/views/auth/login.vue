<template>
  <div class="login-card">
    <a-form :form="form">
      <div class="login-child">
        <div class="login-tit">{{ isTourist ? $t('auth.touristUsername') : $t('auth.username') }}：</div>
        <a-input :placeholder="isTourist ? $t('auth.touristUsername') : $t('auth.username')" v-model="form.username" />
      </div>
      <div class="login-child" v-if="!isTourist">
        <div class="login-tit">{{ $t('auth.password') }}：</div>
        <a-input :placeholder="$t('auth.password')" v-model="form.password" />
      </div>
      <div class="login-sels clear">
        <div class="fl">
          <a-checkbox @change="changeIdentity">
            {{ $t('auth.tourist') }}
          </a-checkbox>
        </div>
        <div class="fr">
          <LangSelect></LangSelect>
        </div>
      </div>
      <a-button type="primary" @click="enterBlog">{{ $t('auth.enter') }}</a-button>
    </a-form>
  </div>
</template>

<script>
import LangSelect from '@/components/langSelect'
import { authLogin } from '@/api/auth/index'

export default {
  components: { LangSelect },
  data () {
    return {
      form: this.$form.createFrom(this, { name: 'loginForm' }),
      username: '',
      password: '',
      isTourist: false
    }
  },
  methods: {
    enterBlog () {
      let params = {}
      params.username = this.username
      if (!this.isTourist) {
        params.password = this.password
      }
      console.log(params, this.username)
      authLogin(params).then(res => {
        console.log(res)
      })
    },
    changeIdentity (e) {
      this.isTourist = e.target.checked
      console.log(this.isTourist)
    }
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
