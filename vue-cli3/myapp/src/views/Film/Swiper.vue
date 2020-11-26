<template>
    <div class="swiper-container">
        <div class="swiper-wrapper filmswiper">
            <!-- <div class="swiper-slide" v-for="data in dataList">{{data}}</div> -->
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>

        <!-- 如果需要滚动条 -->
        <div class="swiper-scrollbar"></div>
    </div>
</template>
<script>
// import Swiper from 'swiper'
export default {
  mounted () {
    //     new Swiper('.filmswiper', {
    //       // direction: 'vertical'
    //       loop: true,
    //       // 如果需要分页器
    //       pagination: {
    //         el: '.swiper-pagination'
    //       },

    //       autoplay: {
    //         delay: 2500,
    //         disableOnInteraction: false
    //       },
    //       navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev'
    //       }
    //     })
  }
}
</script>
