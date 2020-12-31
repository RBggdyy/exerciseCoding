<template>
    <div>
       comingsoon
       <ul>
            <!-- <li v-for="data in this.$store.state.comingList" :key="data.filmId"> -->
            <li v-for="data in $store.getters.comingListGetter" :key="data.filmId">
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
export default {
  data () {
    return {

    }
  },
  mounted () {
    /*
        if(store中的list.length==0) {
            发ajaX请求
        }
        else {
            使用缓存数据
        }
        */
    if (this.$store.state.comingList.length === 0) {
      this.$store.dispatch('getComingListAction')
    } else {
      console.log('使用缓存数据')
    }
  }
}
</script>
<style lang="scss" scoped>
  ul{
    margin-bottom: 50px;
    li{
      padding: 10px;
      overflow: hidden;//清除浮动
      img{
        float:left;
        width: 100px;
        margin-right: 15px;
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

缓存就是缓存到内存中，只要不刷新浏览器，
如果刷新浏览器的话浏览器会先把内存释放掉，然后再来加载数据。那么，数据就会丢失。
同步：直接commit 到mutations 中就可修改
异步：用action做后端数据的缓存
1.现在state中定义一个变量用来做状态管理
2.取这个变量this.$store.state.xxxx
3.通过 this.$store.dispatch('getComingListAction')将异步请求dispatch 到action中
4.到state.js 的actions 中进行异步请求
actions: {
    getComingListAction () {
      axios({
        url: '',
        headers: {

        }
      }).then(res => {
        console.log(res, 'sbskdhjs')
      }).catch(err => {
        console.log(err)
      })
    }
  }
  5.将接口的数据提交到mutation中
  6.在mutation 中将提交来的值赋值给 store 中的变量（状态）
-->
