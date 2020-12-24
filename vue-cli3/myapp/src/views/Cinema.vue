<template>
    <div class="cinema" :style="mystyle">
        <ul >
            <li class="cinemaLi" v-for='item in adressData' :key='item.cinemaId'>
                <div class="cinemaLiDiv">
                    <p>{{item.name}}</p>
                    <span>{{item.address}}</span>
                </div>
                <div class="cinema-info-rt">
                    <p>
                        <span>￥</span>
                        <span>{{item.lowPrice/100}}</span>
                        <span>起</span>
                    </p>
                    <p>距离未知</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios'
import BetterScroll from 'better-scroll'
export default {
  data () {
    return {
      adressData: [],
      mystyle: {
        height: '0px'
      }
    }
  },
  mounted () {
    console.log(document.documentElement.clientHeight, 'sdsdkj')
    this.mystyle.height = document.documentElement.clientHeight - 54 + 'px'
    axios({
      url: `https://m.maizuo.com/gateway?cityId=610100&ticketFlag=1&k=1066140`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16081010252247178428874754","bc":"610900"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res => {
      this.adressData = res.data.data.cinemas
      this.$nextTick(() => {
        // eslint-disable-next-line no-unused-vars
        var myscroll = new BetterScroll('.cinema',
          {
            scrollbar: {
              fade: true,
              interactive: false // 1.8.0 新增
            }
          })
      })
    }).catch(err => {
      console.log(err)
    })
  }
}
/* 在这里手机端数据多的，话会导致反应慢卡，添加滑动的动画效果，惯性滚动，下载batter-scroll库
*/
</script>
<style lang="scss" scoped>
    .cinema{
       width: 100%;
       height: 500px; //设置高度
       overflow:hidden; //溢出隐藏
       position: relative; //修正滚动条位置
        .cinemaLi{
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            border-bottom: 1px solid #ededed;
            padding: 15px;
            .cinemaLiDiv{
                width: 80%;
                text-align: left;
                padding-right: 15px;
            }
            .cinemaLiDiv p:nth-child(1){
                color: #191a1b;
                font-size: 15px;
                max-width: 80%;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .cinemaLiDiv span{
                color: #797d82;
                font-size: 12px;
                margin-top: 5px;
                max-width: 80%;
                display: block;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .cinema-info-rt {
                // width: 70px;
                width: 20%;
                text-align: center;
                margin-right: -5px;
            }
            .cinema-info-rt p:nth-child(1){
                font-size: 15px;
                color: #ff5f16;
                height: 0!important;
                display: inline-table!important;
            }
            .cinema-info-rt p:nth-child(1) span:nth-child(2){
               margin:0 3px;
            }
            .cinema-info-rt p:nth-child(2){
                display: block;
                font-size: 11px;
                color: #797d82;
                margin-top: 5px;
            }
        }
    }
</style>
