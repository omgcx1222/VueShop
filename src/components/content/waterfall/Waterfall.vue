<template>
  <div class="waterfall">
    <div class="waterfall-item" v-for="(item, index) in goods" :key="index" @click="itemClick(item)">
      <img v-lazy="item.image || item.show.img" alt="" @load="imgLoad">
      <p class="title">{{item.title}}</p>
      <div class="price-cfav">
        <span class="price">￥{{item.discountPrice || item.price}}</span>
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
      }
    },
    data() {
      return {
        timer: null,  // 节流
      }
    },
    methods: {
      showImg(goods) {
        // if(goods.show) return goods.show.img
        // if(goods.image) return goods.image

        // 先后顺序问题：当一个对象的属性为undefined时，去读取这个属性的属性不会报undefined而是会报错
        // goods.image 在前面时不存在报undefined，而 goods.show.img 在前面时不存在则会报错
        return goods.image || goods.show.img
      },
      // 监听图片加载完成
      imgLoad() {
        // 防抖
        if(this.timer) clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.$bus.$emit('imageLoad')
        }, 200);
      },

      itemClick(goods) {
        let id = goods.item_id || goods.iid
        if(this.$route.path == '/home') {
          this.$router.push('/detail/' + id)
        }else {
          // this.$bus.$emit('detailId', id)
          alert('没有接口')
        }
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