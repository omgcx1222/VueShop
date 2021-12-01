<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="center">购物车</div>
    </nav-bar>
    <scroll class="scroll" ref="scroll">
      <shop-cart-list  v-for="(item, index) in $store.state.cartList" :key="item.xdSkuId" :goods="item" :index="index">
        
      </shop-cart-list>
    </scroll>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  import Scroll from 'components/common/scroll/Scroll.vue'
  import ShopCartList from './children/ShopCartList.vue'
  
  export default {
    name: 'Home',
    components: {
      NavBar,
      Scroll,
      ShopCartList,
    },
    activated() {
      this.$refs.scroll.refresh()
    },
    methods: {

    }
  }
</script>

<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
  .scroll {
    height: calc(100vh - 84px);
    font-size: 13px;
    overflow: hidden;
  }
  
</style>