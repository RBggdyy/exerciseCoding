<template>
    <div>
       nowplaying
       <ul>
           <li v-for="data in datalist" :key="data" @click="handleChnagePage(data)">{{data}}</li>
       </ul>
    </div>
</template>
<script>
export default {
  data () {
    return {
      datalist: ['111111', '222222', '333333']
    }
  },
  methods: {
    handleChnagePage (id) {
      console.log(id)
      //   1.编程式导航
      this.$router.push({
        path: `/detail/${id}`
      })
    }
  }
}
</script>
<!-- 动态路由 编程式导航
 要实现的功能：
    点击:列表实现跳转
-->
