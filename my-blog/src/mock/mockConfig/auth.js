// import Mock from 'mockjs'
import { authInfo } from '../datas/authData'

export default {
  'post|/auth/login': option => {
    console.log(option)
    return {
      status: 'success',
      code: 200,
      data: {
        'userInfo': authInfo.userInfo
      }
    }
  }
}
