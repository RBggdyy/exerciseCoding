<template>
    <div>
      <!-- 解决 swiper 初始化过早的问题 -->
      <swiper :key='loopList.length' ref="myswiper">
        <div class='swiper-slide slide' v-for='data in loopList' :key="data.id">
          <img :src="data.img | filterImg"/>
        </div>
      </swiper>
      <filmHeader :class="isfixed ? 'fixed' :''"></filmHeader>
      <router-view></router-view>
    </div>
</template>
<script>
import swiper from '@/views/Film/Swiper'
import filmHeader from '@/views/Film/FilmHeader'
import axios from 'axios'
export default {
  components: {
    swiper,
    filmHeader
  },
  data () {
    return {
      loopList: [],
      isfixed: false
    }
  },
  filters: {
    filterImg: (data) => {
      return data.replace('w.h', '400.160')
    }
  },
  mounted () {
    axios.get('/ajax/movieOnInfoList?token=&optimus_uuid=AF8606A024BC11EB8755BB32EBDD94CEA8B54616607E46D3ABE5B7DACE81644D&optimus_risk_level=71&optimus_code=10')
      .then(res => {
        // console.log(res.data, '00000')
        this.loopList = res.data.movieList
      }).catch(err => {
        console.log(err)
      })

    // 监听滚动事件全局的（任何页面都会触发这个方法）
    window.onscroll = this.handleScroll
  },
  // 不影响其他组件要离开的时候解绑
  beforeDestroy () {
    window.onscroll = null
  },

  methods: {
    handleScroll () {
      /* 吸顶效果逻辑:当滚动条滚动一定的距离例如（轮播图）的时候写个加一个class  滚回来删除那个class
        ** 如果滚动距离大于等于轮播的高度 fixed  小于 unfixed
          1.滚动距离怎么获取(document.documentElement.scrollTop)  *操作原生*
          2.轮播图高度怎么动态获取(this.$refs.myswiper.$el.offsetHeight)
                * 原生做法 给dom 起个id 获取到dom  隐藏实力 不能让人家知道你会原生
                * vue中用ref 挂在到普通节点拿到的是原生DOM  挂在到组件上拿到的是对象
        ** 怎么给组件动态的增加class   数组  三目  对象
      */
      // console.log(document.documentElement.scrollTop, this.$refs.myswiper.$el.offsetHeight)
      if ((document.documentElement.scrollTop || document.documentElement.scrollTop) >= this.$refs.myswiper.$el.offsetHeight) {
        // console.log('fixed')
        this.isfixed = true
      } else {
        // console.log('unfixed')
        this.isfixed = false
      }
    }
  }
}
</script>
<style lang="scss">
 .slide {
  text-align: center;
  height: 200px;
  line-height: 200px;
  background: #364d79;
  overflow: hidden;
  color:#fff;
}
</style>
<!--吸顶效果逻辑
当滚动条滚动一定的距离例如（轮播图）的时候写个加一个class  滚回来删除那个class
-->
