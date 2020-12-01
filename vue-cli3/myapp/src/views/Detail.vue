<template>
<!-- v-if="filminfo 解决初次渲染的时候 赋值的报错 -->
    <div v-if="filminfo" style="background:#f2f2f2;height:100%;width:100%;margin-bottom:60px;">
       <!--1//// detail
       传递来的数据是： {{ $route.params.myid }}
       传递来的数据是1： {{myid}} -->
        <div style="background:#fff;padding:20px;">
            <img :src="filminfo.poster" alt="" class="filminfo">
              <div class="title">
                <div class="title-content">
                  <span>{{filminfo.name}}</span>
                  <span>{{filminfo.filmType.name}}</span>
                </div>
                <span>{{filminfo.grade}}分</span>
              </div>
            <p class="detail">{{filminfo.category}}</p>
            <p class="detail">{{filminfo.nation}}|{{filminfo.runtime}}分钟</p>
            <div class="detail hidde grey-text" v-if="isFold">{{filminfo.synopsis}}</div>
            <div class="detail grey-text" v-else>{{filminfo.synopsis}}</div>
            <i :class="isFold ? 'iconfont icon-moreunfold' : 'iconfont icon-less'" @click="handlefold"></i>
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
          <swiper  perview="3"  class="photoswiper" myclassname="photoswiper">
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
export default {
  props: ['myid'],
  components: {
    swiper
  },
  data () {
    return {
      filminfo: null,
      isFold: true
    }
  },
  // directives: {
  //   focus: {
  //     inserted: function (el) {
  //       el.focus()
  //     }
  //   }
  // },

  mounted () {
    // this.$refs.inputs.$el.focus()
    console.log(this.$refs, 'this.$refs')
    // 1.console.log(this.$route, '要id获取详情信息')
    console.log(this.$route.params.myid, '要id获取详情信息', '或者', this.myid)
    axios({
      url: `https://m.maizuo.com/gateway?filmId=${this.$route.params.myid}&k=5307148`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1606119006573549932707841","bc":"610100"}',
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(res => {
      console.log(res.data.data.film, '444444')
      this.filminfo = res.data.data.film
    }).catch(err => {
      console.log(err)
    })
  },

  methods: {
    handlefold () {
      this.isFold = !this.isFold
    }
  }
}
</script>
<!-- 跳转后怎么知道展示那个页面的信息--->
<style lang="scss" scoped>
.filminfo{
  // width: 100%;
  height: 140px;
  overflow: hidden;
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
  height: 39px !important;
  overflow: hidden;
  margin-top: 12px !important;
  text-align: left;
}
.actor-detail{
  background: #fff;
  margin-top: 12px;
  // height: 140px;
  width: 100%;
}
.icon-moreunfold,.icon-less{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4px;
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

// .row-scroll{
//   // height: 140px;
//   margin: 10px 20px;
//   overflow-x: auto;
//   overflow-y: hidden;
//   background-color: #fff;
//   .row-scroll-items{
//     display: flex;
//     align-items: center;
//     justify-content: flex-start;
//     width: 100%;
//     list-style: none;
//     .row-scroll-img{
//       width:100px;
//       height: 100px;
//       display: block;
//     }
//     .row-scroll-li{
//        margin: 0 10px;
//     }
//     .actors-name{
//       display: block;
//       text-align: center;
//       padding-top: 10px;
//       font-size: 12px;
//       color: #191a1b;
//       width: 85px;
//       height: 18px;
//       overflow: hidden;
//       -o-text-overflow: ellipsis;
//       text-overflow: ellipsis;
//       white-space: nowrap;
//     }
//     .row-scroll-li>.actorName {
//        padding-top: 0px!important;
//     }
//   }
// }
 .row-scroll-img{
    // width:100%;
    height: 100px;
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
  }
  // .lazy-img{
    // width: 150px;
    // height: 63px;
    // background: rgb(249, 249, 249);
    // opacity: 1;
    // display: block;
    // overflow: hidden;
  // }
  // .row-scroll-jzimg{
  //   width: 150px;
  //   // height: 100px;
  //   display: block;
  //   overflow: hidden;
  // }
</style>
