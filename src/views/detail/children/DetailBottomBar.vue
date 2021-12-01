<template>
  <div class="bottom-bar">
    <div class="icon">
      <div>
        <span class="iconfont icon-dianpu"></span>
        <div>店铺</div>
      </div>
      <div>
        <span class="iconfont icon-kefu"></span>
        <div>客服</div>
      </div>
      <div>
        <span class="iconfont icon-shoucang"></span>
        <div>收藏</div>
      </div>
    </div>
    <div class="text">
      <div class="add" @click="addCart">加入购物车</div>
      <div class="now">立即购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailBottomBar',
    methods: {
      addCart() {
        this.$emit('addCart')
      }
    }
  }
</script>

<style scoped>
  .bottom-bar {
    width: 100%;
    height: 49px;
    background-color: white;
    position: relative;
    z-index: 1000;
    display: flex;
  }
  .icon {
    width: 50%;
    display: flex;
  }
  .icon>div {
    flex: 1;
    height: 49px;
    text-align: center;
    font-size: 13px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .icon .iconfont {
    font-size: 25px;
  }
  .text {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .text>div {
    /* flex: 1; */
    width: 45%;
    color: white;
    font-size: 12px;
    text-align: center;
    line-height: 38px;
    border-radius: 21px;
    height: 38px;
  }
  .add {
    background-color: #f2140c;
  }
  .now {
    background-color: #ffba0d;
  }
</style>