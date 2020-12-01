import Vue from 'vue'// 1引入vue
import Router from 'vue-router' // 2引入下载的路由
import Film from '@/views/Film'
import Nowplaying from '@/views/Film/Nowplaying'
import Comingsoon from '@/views/Film/Comingsoon'
import Detail from '@/views/Detail'
import Cinema from '@/views/Cinema'
import Center from '@/views/Center'
import Login from '@/views/Login'

Vue.use(Router)// 3注册路由插件 Vue.use() 使用插件的一个方法
// const auth = {
//   isLogin () {
//     return false
//   }
// }
// es6的导出方式 也可以如下
// const router = new Router({})
// export default router
// export default new Router({
const router = new Router({
  mode: 'history', // 缺点 强制刷新会像真路由一样发起请求，返回404 所以后端一定要配置好
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
        },
        {
          path: '',
          redirect: '/film/nowplaying'
        }
      ]
    },
    {
      path: '/cinema',
      component: Cinema
    },
    {
      path: '/center',
      // alias: '/my',
      component: Center
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/detail/:myid', // detail/aa 动态路由
      name: 'detailA',
      component: Detail
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
// 全局守卫  将来任何一个路径走到这里来，都会问，我能不能过去 （相当于任何路由都会被拦下来，问一遍）
// 路由前置守卫
// router.beforeEach((to, from, next) => {
//   // ...
//   // console.log(to, 'to')// 到哪去
//   // console.log(from, 'from')// 从哪来
//   if (to.path === '/center') {
//     // console.log('盘查')
//     if (auth.isLogin()) {
//       // if (此时已经登录) {
//       next()
//     } else {
//       next('/login')
//     }
//   } else {
//     next() // 一个回调函数
//   }
// })

export default router
