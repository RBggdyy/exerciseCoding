<template>
  <div>
    <!-- hellow vue -->
    <!-- 路由容器 -->
    <tabbar></tabbar>
    <router-view></router-view>
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
// es6d 导出
export default {
  name: 'App',
  data () {
    return {
      dataList: [],
      isShow: false
    }
  },
  components: {
    // navBar,
    // sideBar,
    tabbar
  },
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
// // 当前样式只影响自己，别人的样式也别影响我  加scoped
//   ul{
//     li{
//       background:yellow;
//     }
//   }
*{
  margin:0;
  padding:0;
}
html{
  height: 100%;
}
li{
  list-style: none;
}
</style>
<!--
npm run lint  webpack里面的命令 自动修复代码
npm run build 打包命令，给后端就OK了
-->
