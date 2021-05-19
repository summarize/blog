<template>
  <div class="login-layout">
    <div class="login-box">
      <div class="login-tit">{{ $t('auth.loginTit') }}</div>
      <router-view></router-view> 
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.login-layout {
  width: 100%;
  height: 100%;
  background: url('../../assets/images/login-bg.jpg') no-repeat center center/cover;
  display: flex;
  align-items:center;
  justify-content:center;
}
.login-box {
  width: 600px;
  padding: 30px 20px;
  background: #fff;
  border-radius: 8px;
}
.login-tit {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 30px;
}
</style>
