<template>
    <div>
       nowplaying
       <ul>
            <li v-for="data in datalist" :key="data.filmId" @click="handleChnagePage(data)">
              <img :src="data.poster">
              <h3> {{data.name}}</h3>
              <p>观众评分：{{data.grade}}</p>
              <!-- <p>主演：{{data.actors}}</p> 数据格式化 -->
              <p>主演：{{data.actors | actorfilter}}</p>
            </li>
       </ul>
    </div>
</template>
<script>
import axios from 'axios'
import Vue from 'vue'
Vue.filter('actorfilter', function (arr) {
  let newList = arr.map(item => item.name)
  return newList.join(' ')
})
export default {
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=1300440',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1606119006573549932707841"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      // console.log(res.data, '00000')
      this.datalist = res.data.data.films
    })
  },
  methods: {
    handleChnagePage (id) {
      console.log(id)
      //   1.编程式导航 通过路径跳转
      // this.$router.push({
      //   path: `/detail/${id}`
      // })
      // 2.命名路由
      this.$router.push({
        name: 'detailA',
        params: { myid: id }
      })
    }
  }
}
</script>
<!-- 动态路由 编程式导航
 要实现的功能：
    点击:列表实现跳转
-->
<style lang="scss" scoped>
  ul{
    margin-bottom: 50px;
    li{
      padding: 10px;
      overflow: hidden;//清除浮动
      img{
        float:left;
        width: 100px;
      }
    }
  }
</style>
