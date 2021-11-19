<template>
  <div>
    <router-view></router-view>
    <tab-bar class="tab-bar">
      <tab-bar-item path="/home" avtiveColor="#d4237a">
        <img slot="icon-img" src="~assets/img/tabbar/home.svg" alt="">
        <img slot="active-icon-img" src="~assets/img/tabbar/active-home.svg" alt="">
        <div slot="text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" avtiveColor="#d4237a">
        <img slot="icon-img" src="~assets/img/tabbar/category.svg" alt="">
        <img slot="active-icon-img" src="~assets/img/tabbar/active-category.svg" alt="">
        <div slot="text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcart" avtiveColor="#d4237a">
        <img slot="icon-img" src="~assets/img/tabbar/shopcart.svg" alt="">
        <img slot="active-icon-img" src="~assets/img/tabbar/avtive-shopcart.svg" alt="">
        <div slot="text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/my" avtiveColor="#d4237a">
        <img slot="icon-img" src="~assets/img/tabbar/my.svg" alt="">
        <img slot="active-icon-img" src="~assets/img/tabbar/active-my.svg" alt="">
        <div slot="text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'

  export default {
    name: 'UseTabBar',
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>
  .tab-bar {
    z-index: 999;
  }
</style>
