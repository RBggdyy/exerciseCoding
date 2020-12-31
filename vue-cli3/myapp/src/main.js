import Vue from 'vue'/* es6模块导入方式 commonJS var Vue = require("vue") */
import App from './App.vue' // var app = require("./App.vue")相对路径
import router from './router'
import store from './store'
import AllA from './module/moduleA'
import { A1 as MyA1 } from './module/moduleB'
Vue.config.productionTip = false

console.log(AllA, 'dddddf')
console.log(MyA1, 'MyA1')
new Vue({
  router,
  store,
  render: h => h(App) // 渲染出这个组件
}).$mount('#app')
