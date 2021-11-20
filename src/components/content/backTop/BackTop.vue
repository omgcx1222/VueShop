<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
  export default {
    name: 'BackTop'
  }
</script>

<style scoped>
  .back-top {
    position: absolute;
    z-index: 999;
    right: 5px;
    bottom: 49px;
  }
  .back-top img {
    width: 40px;
    height: 40px;
  }
</style>