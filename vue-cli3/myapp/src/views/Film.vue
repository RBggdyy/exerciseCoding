<template>
    <div>
      <swiper></swiper>
      <div>film-header</div>
      <router-view></router-view>
    </div>
</template>
<script>
import swiper from './Film/Swiper'
export default {
  components: {
    swiper
  }
}
</script>
