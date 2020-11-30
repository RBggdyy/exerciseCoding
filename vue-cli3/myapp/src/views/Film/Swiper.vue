<template>
   <div class="swiper-container filmswiper">
        <div class="swiper-wrapper">
            <slot></slot>
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
import Swiper, { Pagination, Navigation, Autoplay } from 'swiper' // js 模块
import 'swiper/swiper-bundle.css' // css 模块
Swiper.use([Pagination, Navigation, Autoplay])

export default {
  mounted () {
    // eslint-disable-next-line no-unused-vars
    // eslint-disable-next-line no-unused-vars
    let swiper = new Swiper('.filmswiper', {
      // direction: 'vertical',
      loop: true,
      centeredSlides: true,
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
        clickable: true // 允许分页点击跳转
      },

      autoplay: {
        delay: 2000,
        disableOnInteraction: false
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })
  }
}
</script>
<style scoped>
 .swiper-container {
      width: 100%;
      height: 200px;
      margin: auto;
  }
</style>
