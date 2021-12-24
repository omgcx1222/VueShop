<template>
  <div class="bottom-bar">
    <div class="check-all">
      <check-box @click.native="clickAll" :isCheck="isCheck"></check-box>
      <div class="text">全选</div>
    </div>
    <div>总计：<span class="price">{{allPrice}}</span></div>
    <div class="calculate" :style="opacity">去结算({{checkCount()}}件)</div>
  </div>
</template>

<script>
  import CheckBox from 'components/content/checkBox/CheckBox.vue'

  export default {
    name: 'ShopCartBottomBar',
    components: {
      CheckBox
    },
    data() {
      return {
        opacity: 'opacity: 1',
      }
    },
    methods: {
      checkCount() {
        let num = this.$store.state.cartList.filter(item =>{
          return item.isCheck
        }).length
        if(num === 0) {
          this.opacity = 'opacity: .3'
        }else {
          this.opacity = 'opacity: 1'
        }
        return num
      },
      clickAll() {
        this.$store.commit('ALL_CHECK', !this.isCheck)
      }
    },
    computed: {
      allPrice() {
        return '￥' + this.$store.state.cartList.filter(item =>{
          return item.isCheck
        }).reduce((pre, item) =>{
          return pre + item.nowprice * item.count / 100
        }, 0).toFixed(2)
      },
      isCheck() {
        // let bool = this.$store.state.cartList.find(item => item.isCheck == false)
        // if(bool) { // 存在未选中的商品
        //   return false
        // }else { // 商品全选
        //   return true
        // }
        return !this.$store.state.cartList.find(item => !item.isCheck)
      }
    }
  }
</script>

<style scoped>
  .bottom-bar {
    height: 50px;
    display: flex;
    align-items: center;
    font-size: 12px;
    padding: 0 20px;
    justify-content: space-between;
    background: #fff;
    color: #333;
  }
  .check-all {
    display: flex;
  }
  .check-all .text {
    margin-left: 5px;
  }
  .price {
    font-weight: 700;
    color: #000;
  }
  .calculate {
    width: 100px;
    color: white;
    text-align: center;
    line-height: 38px;
    border-radius: 21px;
    background-color: #f2140c;
  }
</style>