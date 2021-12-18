<template>
  <div class="shop-cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车（{{cartLength}}）</div>
    </nav-bar>

    <div class="scroll" v-if="$store.state.cartList.length">
      <shop-cart-list v-for="(item, index) in $store.state.cartList" :key="item.xdSkuId" :goods="item" :index="index">
      </shop-cart-list>
    </div>

    <div v-else>
      <div>购物车为空</div>
    </div>

    <shop-cart-bottom-bar v-show="$store.state.cartList.length"></shop-cart-bottom-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  import ShopCartList from './children/ShopCartList.vue'
  import ShopCartBottomBar from './children/ShopCartBottomBar.vue'

  import { mapGetters } from 'vuex'
  
  export default {
    name: 'Home',
    components: {
      NavBar,
      ShopCartList,
      ShopCartBottomBar
    },
    computed: {
      ...mapGetters(['cartLength'])
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
    height: calc(100vh - 84px - 50px);
    font-size: 13px;
    overflow: scroll;
    background-color: #f7f7f7;
  }
  
</style>