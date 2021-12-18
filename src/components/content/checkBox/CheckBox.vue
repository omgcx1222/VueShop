<template>
  <div class="check-box">
    <img src="@/assets/img/common/selected.png" alt="" v-show="isCheck">
  </div>
</template>

<script>
  export default {
    name: 'CheckBox',
    props: {
      index: {
        tyep: Number,
        default: 0
      },
      isCheck: {
        type: Boolean,
        default: true
      }
    }
  }
</script>

<style scoped>
  .check-box {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid #bbb;
  }
  .check-box img {
    width: 200%;
    height: 200%;
    transform: translate(-25%, -25%);
  }
</style>