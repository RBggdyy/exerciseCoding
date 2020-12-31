import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  // 全局的状态管理到state 中
  state: {
    // 自定义的共享状态
    isTabberFlag: true,
    comingList: [] // 1
  },

  getters: {
    comingListGetter (state) {
      return state.comingList.filter((item, index) => index < 3)
    }
  },

  mutations: {
    Hidetabbar (state, data) {
      state.isTabberFlag = data
    },
    Showtabbar (state, data) {
      state.isTabberFlag = data
    },
    comingListMutation (state, data) {
      state.comingList = data
    }
  },
  actions: {
    // 这里的store 是vuex 中自动给的参数
    getComingListAction (store) {
      axios({
        url: 'https://m.maizuo.com/gateway?cityId=610100&pageNum=1&pageSize=10&type=2&k=7295255',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16093067942139314620203009"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        store.commit('comingListMutation', res.data.data.films)
      }).catch(err => {
        console.log(err)
      })
    }
  }
})
