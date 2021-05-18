import { createStore } from 'vuex'
import auth from './modules/auth'

const store = createStore({
  modules: {
    ...auth
  },
  strict: false
})

export default store
