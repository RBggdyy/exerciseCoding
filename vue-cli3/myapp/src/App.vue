<template>
  <div>
    <!-- hellow vue -->
    <!-- 路由容器 -->
    <!-- <tabbar  v-if="flag"></tabbar> -->
    <section>
        <router-view></router-view>
    </section>
    <tabbar  v-if="$store.state.isTabberFlag"></tabbar>
    <!-- <tabbar  v-if="isShow"></tabbar> -->
    <!-- <input type="text" ref="mytext">
    <button @click="handleAdd()">按钮</button>
    <ul>
      <li v-for="data in dataList" :key="data">{{data}}</li>
    </ul>
    <nav-bar>
      <button @click="isShow=!isShow">插槽按钮</button>
    </nav-bar>
    <side-bar v-if="isShow"></side-bar> -->
  </div>
</template>

<script>
// commonJS  module.exports
// import navBar from './components/navBar'
// import sideBar from './components/sideBar'
import tabbar from './components/Tabbar'
import axios from 'axios'
import { mapState } from 'vuex'// es6写法
// import bus from '@/bus'
// es6d 导出
export default {
  name: 'App',
  data () {
    return {
      dataList: [],
      // isShow: false,
      flag: true
    }
  },
  components: {
    // navBar,
    // sideBar,
    tabbar
  },
  // 使用state 的另外写法
  // computed: {
  //   isShow () {
  //     return this.$store.state.isTabberFlag
  //   }
  // },
  // vuex 的另外一种导出的方法
  // computed: mapState(['isTabberFlag']),
  computed: {
    ...mapState(['isTabberFlag'])
  },
  // beforeMount () {
  //   bus.$on('maizuo', (data) => {
  //     console.log('被通知maizuo从这里开始订阅消息了', data)
  //     this.flag = data
  //   })
  // },
  mounted () {
    axios.get('/ajax/movieOnInfoList?token=&optimus_uuid=AF8606A024BC11EB8755BB32EBDD94CEA8B54616607E46D3ABE5B7DACE81644D&optimus_risk_level=71&optimus_code=10')
      .then(res => {
        // console.log(res)
      }).catch(err => {
        console.log(err)
      })
  },
  methods: {
    handleAdd () {
      // console.log('aaaa', this.$refs.mytext.value)
      this.dataList.push(this.$refs.mytext.value)
    }
  }
}
</script>

<style lang="scss" >
// 当前样式只影响自己，别人的样式也别影响我  加scoped
html{
  height: 100%;
}
// ==================
body{
    line-height:1.4;
    color:#333;
    font-family:arial;
    font-size: 12px;
    background:white;
}
input,textarea,select{
    font-size:12px;
    font-size:100%;
    font-family:arial;
    font-family:inherit;
}
body,h1,h2,h3,h4,h5,h6,p,ul,ol,form{
    margin:0;
}
h4,h5,h6{
    font-size:1em;
}
ul,ol{
    padding-left:0;
    list-style-type:none;
}
/*image with no-border*/
a img{border:0;}
img{border:0;}
section {
  padding-bottom: 10px;
}
</style>
<!--
npm run lint  webpack里面的命令 自动修复代码
npm run build 打包命令，给后端就OK了
-->
