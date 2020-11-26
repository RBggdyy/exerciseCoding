<template>
    <div>
       detail
       传递来的数据是： {{ $route.params.myid }}
    </div>
</template>
<script>
export default {
  mounted () {
    console.log(this.$route, '要id获取详情信息')
    console.log(this.$route.params.myid, '要id获取详情信息')
  }
}
</script>
<!-- 跳转后怎么知道展示那个页面的信息--->
