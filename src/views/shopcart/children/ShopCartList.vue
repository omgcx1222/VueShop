<template>
  <div class="goods-item">
    <!-- input 和 img 添加 div 实现等高 -->
    <div class="input"><input type="checkbox" name="" id=""></div>
    <div><img :src="goods.img" alt=""></div>
    <div class="content">
      <div class="title">{{goods.title}}</div>
      <div class="guige">
        <span v-for="(style, s) in goods.style" :key="style.name">
          {{style.name}}
          <!-- 逗号 -->
          {{s === goods.style.length - 1 ? '' : '，'}}
        </span>
        <span class="iconfont icon-xiala xiala"></span>
      </div>
      <count :index="index" :cartCount="$store.state.cartList[index].count"></count>
      <div>{{goods.count}}</div>
    </div>
  </div>
</template>

<script>
  import Count from 'components/content/count/Count.vue'
  export default {
    name: 'ShopCartList',
    components: {
      Count,
    },
    props: {
      goods: {
        type: Object,
        default() {
          return {}
        }
      },
      index: {
        type: Number,
      }
    }
  }
</script>

<style scoped>
  .goods-item {
    padding: 0.6rem;
    border-radius: 0.6rem;
    border: 1px solid #dbdbdb;
    color: #262626;
    margin: 0.6rem;
    display: flex;
    /* align-items: center; */
  }
  .goods-item .input {
    align-self: center;
  }
  .goods-item .input input {
    transform: scale(1.2, 1.2);
  }
  .goods-item img{
    width: 80px;
    border-radius: 0.6rem;
    margin: 0 10px;
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    /* 让下面的子元素保持自己的宽度 */
    align-items: flex-start;
  }
  .title {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;  /* 对齐方式，横向对齐 */
    -webkit-line-clamp: 2;  /* 盒子溢出行数 */
    margin: 5px 0;
  }
  .guige {
    background: #f2f2f2;
    padding: 0 0.3rem;
    /* height: 0.8rem; */
    line-height: .8rem;
    font-size: .5rem;
    color: #262626;
    margin: 0.3rem 0 0;
    border-radius: 0.4rem;
  }
  .icon-xiala {
    font-size: .5rem;
  }
</style>