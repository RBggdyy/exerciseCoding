<template>
<!-- v-if="filminfo 解决初次渲染的时候 赋值的报错 -->
    <div v-if="filminfo" style="background:#f2f2f2;height:100%;width:100%;margin-bottom:40px;">
       <!--1//// detail
       传递来的数据是： {{ $route.params.myid }}
       传递来的数据是1： {{myid}} -->
        <div style="background:#fff;">
            <div :class="isfixed ? 'show-film-header film-header' : 'film-header'" @click="()=>this.$router.go(-1)">
              <div class="goBack">
                <i class="iconfont icon-back"></i>
              </div>
              <div class="title" v-if="isfixed" >
                <div class="goBack1" @click="()=>this.$router.go(-1)">
                  <i class="iconfont icon-back"></i>
                </div>
                {{filminfo.name}}
              </div>
              <span class="after"></span>
            </div>
            <div class="filminfo">
               <img :src="filminfo.poster" alt="" >
            </div>
            <div style="padding:20px;">
              <div class="title">
                <div class="title-content">
                  <span>{{filminfo.name}}</span>
                  <span>{{filminfo.filmType.name}}</span>
                </div>
                <span>{{filminfo.grade}}分</span>
              </div>
              <p class="detail">{{filminfo.category}}</p>
              <p class="detail">{{filminfo.nation}}|{{filminfo.runtime}}分钟</p>
              <div class="detail hidde grey-text " v-if="isFold">{{filminfo.synopsis}}</div>
              <div class="detail grey-text film-synopsis" v-else style='height:114px;'>{{filminfo.synopsis}}</div>
              <i :class="isFold ? 'iconfont icon-moreunfold' : 'iconfont icon-less'" @click="handlefold"></i>
            </div>
        </div>
        <div class="actor-detail">
            <span class="actor-detail-span">演职人员</span>
            <swiper perview="4" class="actorswiper" myclassname="actorswiper">
              <div v-for="data in filminfo.actors" :key="data.name" class='swiper-slide' >
                <img :src="data.avatarAddress" alt="" class="row-scroll-img" >
                <p class="actors-name">{{data.name}}</p>
                <p class="actors-name actorName">{{data.role}}</p>
              </div>
            </swiper>
            <!-- ====================== -->
            <!-- <input type="text" v-focus> -->
            <!-- <div class="row-scroll">
                <ul class="row-scroll-items">
                  <li v-for="data in filminfo.actors" :key="data" class="row-scroll-li">
                    <img :src="data.avatarAddress" alt="" class="row-scroll-img">
                    <p class="actors-name">{{data.name}}</p>
                    <p class="actors-name actorName">{{data.role}}</p>
                  </li>
                </ul>
            </div> -->
            <!-- ====================== -->
        </div>
        <div class="actor-detail">
          <div class="actor-detail-title">
            <span class="actor-detail-span">剧照</span>
            <span>全部(5)<i class="iconfont icon-more"></i></span>
          </div>
          <swiper  perview="2"  class="photoswiper" myclassname="photoswiper">
            <div v-for="(data,index) in filminfo.photos" :key="index" class='swiper-slide' >
              <img :src="data" alt="" class="row-scroll-jzimg" >
            </div>
          </swiper>
       </div>
    </div>
</template>
<script>
import axios from 'axios'
import swiper from '@/views/Detail/DatailSwiper'
// import bus from '@/bus'
export default {
  props: ['myid'],
  components: {
    swiper
  },
  data () {
    return {
      filminfo: null,
      isFold: true,
      isfixed: false
    }
  },
  // directives: {
  //   focus: {
  //     inserted: function (el) {
  //       el.focus()
  //     }
  //   }
  // },
  beforeMount () {
    // this.$store.state.isTabberFlag = false // 这种写法不规范
    this.$store.commit('Hidetabbar', false) // 第一个参数的就是mutation的名字

    // 刷新了以后这个功能不起作用，原因是这里先走了，先订阅了，所有刷新后功能失效
    // console.log('hidetabbar', '发消息了')
    // bus.$emit('maizuo', false)
  },
  mounted () {
    // this.$refs.inputs.$el.focus()
    window.onscroll = this.handleScroll
    // console.log(this.$refs, 'this.$refs')
    // 1.console.log(this.$route, '要id获取详情信息')
    // console.log(this.$route.params.myid, '要id获取详情信息', '或者', this.myid)
    axios({
      url: `https://m.maizuo.com/gateway?filmId=${this.$route.params.myid}&k=5307148`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1606119006573549932707841","bc":"610100"}',
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(res => {
      // console.log(res.data.data.film, '444444')
      this.filminfo = res.data.data.film
    }).catch(err => {
      console.log(err)
    })
  },

  beforeDestroy () {
    window.onscroll = null
    // console.log('showTabbar')
    // bus.$emit('maizuo', true)
    // this.$store.state.isTabberFlag = true
    this.$store.commit('Showtabbar', true) // 第一个参数的就是mutation的名字!
  },

  methods: {
    handlefold () {
      this.isFold = !this.isFold
    },
    handleScroll () {
      /* 吸顶效果逻辑:当滚动条滚动一定的距离例如（轮播图）的时候写个加一个class  滚回来删除那个class
        ** 如果滚动距离大于等于轮播的高度 fixed  小于 unfixed
          1.滚动距离怎么获取(document.documentElement.scrollTop)  *操作原生*
          2.轮播图高度怎么动态获取(this.$refs.myswiper.$el.offsetHeight)
                * 原生做法 给dom 起个id 获取到dom  隐藏实力 不能让人家知道你会原生
                * vue中用ref 挂在到普通节点拿到的是原生DOM  挂在到组件上拿到的是对象
        ** 怎么给组件动态的增加class   数组  三目  对象
      */
      // console.log(document.documentElement.scrollTop)
      if ((document.documentElement.scrollTop || document.documentElement.scrollTop) >= 44) {
        // console.log('fixed')
        this.isfixed = true
      } else {
        // console.log('unfixed')
        this.isfixed = false
      }
    }
  }
}
/*
需要解决非父子之间的通信 可以用事件总线先订阅 在接收【适用通讯少】
vuex 适用 【通讯多】

*/
</script>
<!-- 跳转后怎么知道展示那个页面的信息--->
<style lang="scss" scoped>
.filminfo{
  height: 56vw;
  overflow: hidden;
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
  }
}
.title{
  display: flex;
  justify-content: space-between;
  align-items: center;
  .title-content{
    display: flex;
    align-items: center;
  }
  .title-content > span:nth-child(2) {
    font-size: 9px;
    color: #fff;
    background-color: #d2d6dc;
    height: 14px;
    line-height: 14px;
    padding: 0 2px;
    border-radius: 2px;
    display: inline-block;
  }
  .title-content > span:nth-child(1) {
    color: #191a1b;
    font-size: 18px;
    height: 24px;
    line-height: 24px;
    margin-right: 7px;
    vertical-align: middle;
  }
}
.title > span {
  font-style:italic;
  font-size: 18px;
  text-align: right;
  color: #ffb232;
}
.detail{
  font-size: 13px;
  color: #797d82;
  margin-top: 4px;
}
.hidde{
  height: 39px!important;
  overflow: hidden;
  // margin-top: 12px !important;
  text-align: left;
}
.actor-detail{
  background: #fff;
  margin-top: 12px;
  // height: 140px;
  width: 100%;
}
.icon-moreunfold,.icon-less{
  // width: 100%;
  // display: flex;
  // align-items: center;
  // justify-content: center;
  // margin-top: 4px;
    text-align: center;
    display: block;
    height: auto;
    width: 20px;
    margin: auto;
    line-height: normal;
}
.grey-text{
  transition: height .5s ease;
  margin-top: 12px !important;
}
.actor-detail-span {
  display: inline-block;
  height: 22.5px;
  line-height: 22px;
  font-size: 16px;
  text-align: left;
  color: #191a1b;
  margin: 10px 20px;
}
 .row-scroll-img{
    width:100%;
    display: block;
  }
  .actors-name{
    display: block;
    text-align: center;
    padding-top: 10px;
    font-size: 12px;
    color: #191a1b;
    width: 85px;
    height: 18px;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
 .actorName {
    padding-top: 0px!important;
  }

  // 剧照
  .actor-detail-title{
    display:flex;
    justify-content: space-between;
    align-items: center;
    // padding:0 20px;
  }
  .actor-detail-title span:nth-child(2) {
    padding-right: 20px;
    display: flex;
    align-items: center;
  }
  .row-scroll-jzimg{
    width: 94%;
    // height: 100px;
    display: block;
    overflow: hidden;
  }
  .film-header{
    position: fixed;
    display: flex;
    align-items: center;
    background-color: hsla(0,0%,100%,0);
    transition: all .3s ease;
    width: 100vw;
    height: 44px;
    z-index: 1;
    .goBack{
        font-size: 30px;
        position: absolute;
        top: 5px;
        left: 15px;
        color: #fff;
      }
      .icon-back {
          width: 30px;
          line-height: 44px;
      }
    .title {
      font-size: 17px;
      line-height: 44px;
      width: 100vw;
      text-align: center;
      display: flex;
      justify-content: center;
    }
  }
  .show-film-header{
    transition: all .3s ease;
    background-color: #fff;
    color: #191a1b;
    width: 100vw;
    height: 44px;
    z-index: 1;
    position: fixed;
    border-bottom:1px solid gray;
  }
  .goBack1{
    font-size: 30px;
    position: absolute;
    left: 15px;
    color: gray;
  }
  .icon-back {
      width: 30px;
      line-height: 44px;
  }
</style>
