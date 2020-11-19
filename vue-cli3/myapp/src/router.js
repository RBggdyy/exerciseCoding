import Vue from 'vue'// 1引入vue
import Router from 'vue-router' // 2引入下载的路由
import Film from '@/views/Film'
import Nowplaying from '@/views/Film/Nowplaying'
import Comingsoon from '@/views/Film/Comingsoon'
import Cinema from '@/views/Cinema'
import Center from '@/views/Center'

Vue.use(Router)// 3注册路由插件 Vue.use() 使用插件的一个方法

// es6的导出方式 也可以如下
// const router = new Router({})
// export default router
export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,

  // routes 将来你想有多少路径来对应这个组件  就在这个数组里写好对应关系
  routes: [
    {
      path: '/film',
      component: Film,
      children: [
        // 写法1
        // {
        //   path: '/film/nowplaying',
        //   component: Nowplaying
        // },
        // {
        //   path: '/film/comingsoon',
        //   component: Comingsoon
        // }
        // 写法2
        {
          path: 'nowplaying',
          component: Nowplaying
        },
        {
          path: 'comingsoon',
          component: Comingsoon
        }
      ]
    },
    {
      path: '/cinema',
      component: Cinema
    },
    {
      path: '/center',
      component: Center
    },
    {
      path: '*',
      redirect: '/film'
    }
    // 前面路径都不符合的话重定向
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
