<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="icon-img"></slot></div>
    <div v-else><slot name="active-icon-img"></slot></div>
    <div class="text" :style="isActive ? 'color:' + avtiveColor : ''"><slot name="text"></slot></div>
  </div>
</template>

<script>

export default {
  name: 'TabBarItem',
  props: {
    path: String,
    avtiveColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return{
      // isActive: false
    }
  },
  methods:{
    itemClick(){
      this.$router.replace(this.path)
    }
  },
  computed: {
    isActive() {
      return this.$route.path === this.path
    }
  }
}
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    height: 49px;
    text-align: center;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-top: 3px;
  }
  .tab-bar-item .text{
    font-size: 15px;
  }
</style>