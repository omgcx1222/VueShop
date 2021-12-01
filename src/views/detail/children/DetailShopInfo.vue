<template>
  <div class="shopInfo">
    <div class="baseInfo">
      <img :src="shopInfo.shopLogo" class="logo">
      <span>{{shopInfo.name}}</span>
    </div>
    <div class="importantInfo">
      <div class="sales">
        <div>
          <p>{{shopInfo.cSells | exceed}}</p>
          <p>总销量</p>
        </div>
        <div style="border-right: 1px solid rgba(0, 0, 0, 0.1);">
          <p>{{shopInfo.cGoods}}</p>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="score">
        <table class="table">
          <tr v-for="item in shopInfo.score" :key="item.name">
            <td>{{item.name}}</td>
            <td class="item-score" :style="item.isBetter ? 'color: red;' : ''">{{item.score}}</td>
            <td :class="item.isBetter ? 'isBetter' : 'noBetter'">{{item.isBetter ? '高' : '低'}}</td>
          </tr>
        </table>
      </div>
    </div>
    <div style="margin: 10px 0 20px">
      <div class="goSeeSee">进店逛逛</div>
    </div>
  </div>
</template>

<script>
  import {exceed} from 'common/utils.js'
  export default {
    name: 'DetailShopInfo',
    props: {
      shopInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      exceed(number) {
        return exceed(number)
      }
    }
  }
</script>

<style scoped>
  .shopInfo {
    margin: 0 5px;
    border-top: 3px solid rgba(204, 204, 204, 0.39);
    /* border-bottom: 3px solid rgba(204, 204, 204, 0.39); */
  }
  .baseInfo {
    padding: 20px 10px 0;
    display: flex;
    align-items: center;
    font-size: 13px;
  }
  .logo {
    width: 35px;
    height: 35px;
    margin-right: 10px;
  }
  .importantInfo {
    display: flex;
    font-size: 12px;
    height: 80px;
  }
  .sales {
    flex: 1;
    display: flex;
    align-items: center;
    text-align: center;
  }
  .sales>div{
    flex: 1;
  }
  .score {
    flex: 1;
    display: flex;
    align-items: center;
  }
  .table {
    margin-left: 20px;
    border-collapse: separate; 
    border-spacing: 0px 5px;
  }
  
  .item-score {
    padding: 0 10px;
    text-align: center;
  }
  .isBetter {
    color: #fff;
    background-color: var(--color-high-text);
  }
  .noBetter {
    color: #fff;
    background-color: green;
  }
  .goSeeSee {
    width: 130px;
    line-height: 25px;
    text-align: center;
    border-radius: 5px;
    font-size: 13px;
    margin: 0 auto;
    background-color: rgb(236, 236, 236);
  }
</style>