import Vue from 'vue'/* es6模块导入方式 commonJS var Vue = require("vue") */
import App from './App.vue' // var app = require("./App.vue")相对路径
import router from './router'
// import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  // store,
  render: h => h(App) // 渲染出这个组件
}).$mount('#app')
