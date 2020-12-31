<template>
    <div>
       nowplaying
       <ul>
            <li v-for="data in datalist" :key="data.filmId" @click="handleChnagePage(data.filmId)">
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
      // console.log(id)
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
<!--所有的异步需要在action 中====》mutation 中======》store
 1.判断store中有没有 nowpalying 的数据
 没有 ajax(action==>mutation ==> state)
 2.有数据，直接就从store 取数据 渲染页面

vuex :
1.状态管理，实现非父子通信
2.数据快照 缓存数据到store 中 减少重复的请求
3.方便调试，实现时光旅行

同步的话commit 到mutation 中就可以直接修改数据了。
如果需要异步请求数据的话需用action做后端数据的缓存
缓存就是缓存到内存中，只要不刷新浏览器，
如果刷新浏览器的话浏览器会先把内存释放掉，然后再来加载数据。那么，数据就会丢失。
同步：直接commit 到mutations 中就可修改
异步：
-->
