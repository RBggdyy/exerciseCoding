import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 全局的状态管理到state 中
  state: {
    // 自定义的共享状态
    isTabberFlag: true
  },
  mutations: {
    Hidetabbar (state, data) {
      state.isTabberFlag = data
    },
    Showtabbar (state, data) {
      state.isTabberFlag = data
    }
  },
  actions: {

  }
})
