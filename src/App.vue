<template>
  <div id="app">
    <use-tab-bar></use-tab-bar>
  </div>
</template>

<script>
import UseTabBar from 'components/content/useTabBar/UseTabBar'
export default {
  name: 'App',
  components: {
    UseTabBar
  }
}
</script>

<style>
  @import '~assets/css/base.css';
  @import '~assets/iconfont/iconfont.css';
</style>
