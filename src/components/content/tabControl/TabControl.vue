<template>
  <div class="tab-control" :style="width">
    <div v-for="(item, index) in title" 
      :key="item" 
      class="tab-control-item" 
      :class="{'active': current == index}" 
      @click="clickTabControl(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabControl',
    props: {
      title: {
        type: Array,
        default() {
          return []
        }
      },
      width: {
        type: String,
        default: '100%'
      }
    },
    data() {
      return {
        current: 0
      }
    },
    methods: {
      clickTabControl(index) {
        this.current = index
        this.$emit('clickTabControl', index)
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 30px;
    line-height: 30px;
  }
  .tab-control-item {
    flex: 1;
    background-color: #fff;
  }
  .tab-control-item span {
    padding: 3px;
  }
  .active {
    color: var(--color-high-text);
  }
  .active span {
    border-bottom: 2px solid var(--color-tint);
  }
</style>