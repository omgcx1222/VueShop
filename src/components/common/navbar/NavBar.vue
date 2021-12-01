<template>
  <div class="navbar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: 'NavBar'
  }
</script>

<style scoped>
  .navbar{
    width: 100%;
    height: 35px;
    line-height: 35px;
    display: flex;
    text-align: center;
    box-shadow: -1px 0px 3px rgba(100, 100, 100, 0.2);
  }
  .navbar .left, .navbar .right{
    width: 12%;
  }
  .navbar .center{
    flex: 1;
  }
</style>