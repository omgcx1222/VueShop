<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="back">
        <div class="iconfont icon-31fanhui1"></div>
      </div>
      <div slot="center" class="title">
        <div v-for="(item, index) in titles" 
          :key="item" 
          class="title-item" 
          :class="{active: currentIndex === index}"
          @click="itemClick(index)"
          >
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  export default {
    name: 'DetailNavBar',
    components: {
      NavBar
    },
    props: {
      current: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        titles: ['商品', '评价', '详情', '推荐'],
        currentIndex: 0,
      }
    },
    methods: {
      back() {
        this.$router.back()
      },
      itemClick(index) {
        this.currentIndex = index
        this.$emit('clickNavBar', index)
      }
    },
    watch: {
      current(n) {
        this.currentIndex = n
      }
    }
  }
</script>

<style scoped>
  .back {
    font-size: 20px;
  }
  .title {
    display: flex;
    font-size: 13px;
  }
  .title-item {
    flex-grow: 1;
  }
  .active {
    color: var(--color-high-text);
  }
</style>