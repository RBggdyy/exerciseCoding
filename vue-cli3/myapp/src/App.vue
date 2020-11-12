<template>
  <div>
    hellow vue
    <input type="text" ref="mytext">
    <button @click="handleAdd()">按钮</button>
    <ul>
      <li v-for="data in dataList" :key="data">{{data}}</li>
    </ul>
    <nav-bar></nav-bar>
    <side-bar></side-bar>
  </div>
</template>

<script>
// commonJS  module.exports
import navBar from './components/navBar'
import sideBar from './components/sideBar'

// es6d 导出
export default {
  setup () {
    return {

    }
  }
  // name: 'App',
  // data () {
  //   return {
  //     dataList: []
  //   }
  // },
  // components: {
  //   navBar,
  //   sideBar
  // },
  // methods: {
  //   handleAdd () {
  //     // console.log('aaaa', this.$refs.mytext.value)
  //     this.dataList.push(this.$refs.mytext.value)
  //   }
  // }
}
</script>

<style lang="scss" scoped>
  ul{
    li{
      background:yellow;
    }
  }

</style>
