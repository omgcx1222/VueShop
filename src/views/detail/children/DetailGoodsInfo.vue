<template>
  <div class="goodsInfo">
    <div class="title">{{goodsInfo.title}}</div>
    <div class="price">
      <span class="newPrice">{{goodsInfo.price}}</span>
      <s class="ordPrice">{{goodsInfo.oldPrice}}</s>
      <span v-if="goodsInfo.discountDesc" class="desc">{{goodsInfo.discountDesc}}</span>
    </div>
    <div class="other">
      <div>{{goodsInfo.columns[0]}}</div>
      <div>{{goodsInfo.columns[1]}}</div>
      <!-- <div>{{goodsInfo.services[3].name}}</div> -->
    </div>
    <div class="service">
      <div v-for="item in goodsInfo.services" :key="item.name">
        <img :src="item.icon" v-if="item.icon">
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailGoodsInfo',
    props: {
      goodsInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .goodsInfo {
    padding: 5px 5px 0;
  }
  .title {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;  /* 对齐方式，横向对齐 */
    -webkit-line-clamp: 2;  /* 盒子溢出行数 */
    font-size: 14px;
    color: black;
  }
  .price {
    margin: 10px 0;
  }
  .newPrice {
    font-size: 20px;
    color: var(--color-high-text);
  }
  .ordPrice {
    font-size: 13px;
    padding: 0 10px;
  }
  .desc {
    font-size: 8px;
    background-color: var(--color-high-text);
    align-self: center;
    border-radius: 3px;
    color: #fff;
    position: relative;
    top: -5px;
  }
  .other {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    color: #838383;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
  }
  .service {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 10px 0;
    color: black;
  }
  .service img {
    width: 10px;
    height: 10px;
  }
  .service span {
    font-size: 10px;
  }
</style>