<template>
  <div class="recommend">
    <div v-for="item in recommend" :key="item.title" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeRecommend',
    props: {
      recommend: {
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommend {
    width: 100%;
    display: flex;
    /* justify-content: space-around; */
    text-align: center;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
    font-size: 14px;
  }
  .recommend-item {
    flex: 1;
    /* flex-direction: column; */
  }
  .recommend img {
    width: 70px;
    height: 70px;
  }
</style>