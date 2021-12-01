<template>
  <div class="rate-container">
    <div class="title">
      <div>用户评价（{{rate.cRate}}）</div>
      <div>更多</div>
    </div>
    <div class="rate" v-if="rate.list">
      <div v-for="item in rate.list" :key="item.rateId" class="rate-item">
        <div class="user">
          <img :src="item.user.avatar" alt="">
          <div>{{item.user.uname}}</div>
        </div>
        <div class="content">{{item.content}}</div>
        <div class="created">{{item.created | date}} {{item.style}}</div>
        <div class="images" v-if="item.images">
          <img v-for="i in item.images.slice(0, 5)" :key="i" :src="i" alt="">
        </div>
      </div>
    </div>
    <div v-else class="noRate">
      暂无评价
    </div>
  </div>
</template>

<script>
  import {formatDate} from 'common/utils.js'
  export default {
    name: 'DetailRate',
    props: {
      rate: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      date(created) {
        return formatDate(created)
      }
    }
  }
</script>

<style scoped>
  .rate-container {
    border-top: 3px solid rgba(204, 204, 204, 0.39);
  }
  .title {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(204, 204, 204, 0.445);
    font-size: 13px;
  }
  .title>div {
    margin: 10px;
  }
  .rate {
    padding: 10px;
  }
  .user {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: black;
  }
  .user img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .content {
    font-size: 13px;
    padding: 10px 0;
  }
  .created {
    font-size: 13px;
  }
  .images {
    display: inline-block;
    height: 50px;
    overflow: hidden;
  }
  .images img {
    width: 50px;
    height: 50px;
    vertical-align: bottom;
    margin-right: 5px;
  }
  .noRate {
    padding: 5px;
    text-align: center;
    font-size: 13px;
  }
</style>