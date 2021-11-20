<template>
  <div class="waterfall">
    <div class="waterfall-item" v-for="(item, index) in goods" :key="index">
      <img :src="item.show.img" alt="" @load="imgLoad">
      <p class="title">{{item.title}}</p>
      <div class="price-cfav">
        <span class="price">￥{{item.price}}</span>
        <span class="iconfont icon-shoucang cfav">{{item.cfav}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Waterfall',
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      },
      column: {
        type: Number,
        default: 2
      }
    },
    methods: {
      // 监听图片加载完成
      imgLoad() {
        this.$bus.$emit('imageLoad')
      }
    }
  }
</script>

<style scoped>
  .waterfall {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
  }
  .waterfall-item {
    width: 49%;
    margin: 0 0 10px 0;
    background-color: white;
    border-radius: 5px;
  }
  .waterfall-item img{
    border-radius: 5px 5px 0 0;
    width: 100%;
  }
  .waterfall-item .title {
    font-size: 13px;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;  /* 对齐方式，横向对齐 */
    -webkit-line-clamp: 2;  /* 盒子溢出行数 */
    margin: 5px 0;
    padding: 0 4px;
  }
  .waterfall-item .price-cfav {
    margin: 5px 0;
    padding: 0 4px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .waterfall-item .price {
    color: var(--color-high-text);
  }
  .waterfall-item .cfav {
    font-size: 13px;
  }
</style>