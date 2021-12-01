<template>
  <div class="tips" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: 'Tips',
    props: {
      message: {
        type: String,
        default: ''
      },
      isShow: {
        type: Boolean,
        default() {
          return false
        }
      }
    }
  }
</script>

<style scoped>
  .tips {
    background-color: rgba(0, 0, 0, .75);
    border-radius: 10px;
    text-align: center;
    line-height: 30px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    padding: 20px 20px;
    z-index: 1000;
  }
</style>