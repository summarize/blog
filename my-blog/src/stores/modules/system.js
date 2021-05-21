const state = {
  locale: localStorage.getItem('locale') || 'zh-CN'
}

const mutations = {
  SET_LOCALE: (state, locale) => {
    state.locale = locale
    localStorage.setItem('locale', locale)
  }
}

const actions = {
  setLocale: (context, locale) => {
    context.commit('SET_LOCALE', locale)
  }
  /* setLocale ({ commit }, locale) { // { commit } context变量结构赋值中的commit 等同于context.commit
    commit('SET_LOCALE', locale)
  }, */
}

const getters = {
  getLocale: state => state.locale
}

export default {
  state,
  mutations,
  actions,
  getters
}