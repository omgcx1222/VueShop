<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: 'Toast',
    data() {
      return {
        message: '默认文字',
        isShow: false,
      }
    },
    methods: {
      show(message='默认文字', duration=1500) {
        this.message = message,
        this.isShow = true
        setTimeout(() => {
          this.isShow = false
          this.message = '默认文字'
        }, duration);
      }
    }
  }
</script>

<style scoped>
  .toast {
    background-color: rgba(0, 0, 0, .75);
    border-radius: 10px;
    /* text-align: center;
    line-height: 30px; */
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    padding: 20px 20px;
    z-index: 1000;
  }
</style>