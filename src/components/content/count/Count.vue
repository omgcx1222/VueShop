<template>
  <div class="compute">
    <div class="jian" @click="reduce">-</div>
    <input class="num" type="text" id="" v-model="count" @blur="handle">
    <div class="jia" @click="add">+</div>
  </div>
</template>

<script>
  export default {
    name: 'Count',
    data() {
      return {
        count: 1  // 数量
      }
    },
    props: {
      index: {  // 购物车中的第几个商品
        type: Number
      },
      cartCount: {  // 购物车每个商品对应的显示数量
        type: Number
      }
    },
    methods: {
      reduce() {
        if(this.count > 1) this.count --
      },
      add() {
        this.count ++
      },
      handle() {
        if(this.count < 1) this.count = 1
      }
    },
    watch: {
      count(newval) {
        this.$emit('handleCount', newval)
        if(this.$route.path === '/shopcart') {
          const obj = {
            count: newval,
            index: this.index
          }
          this.$store.dispatch('changeCount', obj)
        }
      }
    },
    activated() {
      if(this.$route.path === '/shopcart') this.count = this.cartCount
    }
  }
</script>

<style scoped>
  .compute {
    display: flex;
    width: 80px;
    font-size: 20px;
    text-align: center;
    line-height: 20px;
  }
  .jia, .jian {
    width: 25px;
  }
  .num {
    width: 30px;
    color: #333;
    background: #f2f2f2;
    font-size: 15px;
    text-align: center;
    border: none;
  }
</style>