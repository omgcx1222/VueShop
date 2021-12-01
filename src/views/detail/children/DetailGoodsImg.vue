<template>
  <div class="goods-img">
    <div class="desc">
      <div class="top"><div></div></div>
      <div class="title">{{goodsImg.desc}}</div>
      <div class="bottom"><div></div></div>
    </div>
    <div v-for="item in goodsImg.detailImage" :key="item.key">
      <div class="img-key">{{item.key}}</div>
      <div v-for="img in item.list" :key="img">
        <img :src="img" class="img" @load="goodsImgLoad">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailGoodsImg',
    props: {
      goodsImg: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        timer: null
      }
    },
    methods: {
      goodsImgLoad() {
        // console.log('aaaa');
        if(this.timer) clearTimeout(this.timer)
        this.timer = setTimeout(() =>{
          this.$emit('goodsImgLoad')
        }, 200)
      }
    }
  }
</script>

<style scoped>
  .goods-img {
    margin-bottom: 20px;
  }
  .desc {
    margin: 10px;
    font-size: 13px;
  }
  .title {
    margin: 5px 0;
  }
  .top>div, .bottom>div {
    border-bottom: 1px solid #ccc;
    width: 70px;
    display: inline-block;
  }
  .bottom {
    display: flex;
    flex-direction: row-reverse;
  }
  .top::before, .bottom::before {
    content: '';
    display: inline-block;
    width: 5px;
    height: 5px;
    background-color: black;
  }
  .img-key {
    padding: 10px;
    font-size: 14px;
    color: black;
  }
  .img {
    width: 100%;
    vertical-align : bottom;
  }
</style>