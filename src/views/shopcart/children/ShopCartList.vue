<template>
  <div class="goods-item">
    <!-- 按钮选中 -->
    <check-box class="check" :index="index" @click.native="clickBox" :isCheck="$store.state.cartList[index].isCheck"></check-box>
    <!-- 图片 -->
    <div><img :src="goods.img" alt=""></div>
    <!-- 商品信息展示 -->
    <div class="content">
      <div class="title">{{goods.title}}</div>
      <div class="guige" @click="goodsSelect">
        <span v-for="(style, s) in goods.style" :key="style.name">
          {{style.name}}
          <!-- 逗号 -->
          {{s === goods.style.length - 1 ? '' : '，'}}
        </span>
        <span class="iconfont icon-xiala"></span>
      </div>
      <div class="price-count">
        <div class="price">{{price}}</div>
        <count :index="index"></count>
      </div>
      <div class="delete" @click="clickDelete">删除</div>
    </div>
    <!-- 弹出的规格修改框 -->
    <goods-select :style="positionTop" :skuInfo="skuInfo" :index="index" :iid="this.goods.iid" @back="back"></goods-select>
  </div>
</template>

<script>
  import {goodsDetailRequest} from 'network/detail'

  import Count from 'components/content/count/Count.vue'
  import GoodsSelect from 'components/content/goodsSelect/GoodsSelect.vue'
  import CheckBox from 'components/content/checkBox/CheckBox.vue'
  export default {
    name: 'ShopCartList',
    components: {
      Count,
      GoodsSelect,
      CheckBox
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
    },
    data() {
      return {
        positionTop: '', // 弹框位置
        skuInfo: {},
      }
    },
    computed: {
      price() {
        return '￥' + (this.goods.nowprice / 100).toFixed(2)
      }
    },
    methods: {
      // 请求最新的规格数据
      getSkuInfo(iid) {
        goodsDetailRequest(iid).then(
          res =>{
            this.skuInfo = res.result.skuInfo
          }
        )
      },
      // 弹出规格选择框
      goodsSelect() {
        this.getSkuInfo(this.goods.iid)
        this.positionTop = 'top: 0; transition: top .2s cubic-bezier(0, 0, 0.25, 1);'
      },
      // 收回规格选择框
      back() {
        this.positionTop = 'top: 100vh; transition: top .05s'
      },
      // 点击选中/不选中
      clickBox() {
        this.$store.commit('IS_CHECK', this.index)
      },
      // 点击删除
      clickDelete() {
        this.$store.commit('SPLICE_CART', this.index)
      }
    },

  }
</script>

<style scoped>
  .goods-item {
    padding: 0.6rem;
    border-radius: 0.6rem;
    border: 1px solid #dbdbdb;
    background-color: #fff;
    color: #262626;
    margin: 0.6rem;
    display: flex;
    /* align-items: center; */
  }
  .goods-item .check {
    align-self: center;
  }
  .goods-item img{
    width: 80px;
    height: 100px;
    border-radius: 0.6rem;
    margin: 0 8px;
  }
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    /* 让下面的子元素保持自己的宽度 */
    align-items: flex-start;
    font-size: 12px;
  }
  .title {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;  /* 对齐方式，横向对齐 */
    -webkit-line-clamp: 2;  /* 盒子溢出行数 */
  }
  .guige {
    background: #f2f2f2;
    padding: 0 0.3rem;
    /* height: 0.8rem; */
    line-height: .8rem;
    font-size: .5rem;
    color: #262626;
    margin: 0.3rem 0;
    border-radius: 0.4rem;
  }
  .icon-xiala {
    font-size: .5rem;
  }
  .price-count {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }
  .price-count .price {
    color: #f2270c;
  }
  .delete {
    align-self: flex-end;
    margin: 5px 5px 0 0;
  }
</style>