import axios from '../../plugins/axios'

export const authLogin = (params) => {
  return axios.post('auth/login', params)
}
