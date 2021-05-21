import { createStore } from 'vuex'
import auth from './modules/auth'
import system from './modules/system'

const store = createStore({
  modules: {
    auth,
    system
  },
  strict: false
})

export default store
