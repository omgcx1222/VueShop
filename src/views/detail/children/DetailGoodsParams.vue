<template>
  <div class="goods-params">
    <div class="rule">
      <table class="table">
        <tr v-for="(rule, index) in goodsParams.rule.tables[0]" :key="index">
          <td v-for="(rule2, index2) in rule" :key="index2">{{rule2}}</td>
        </tr>
      </table>
    </div>
    <div class="info">
      <table class="table">
        <tr v-for="item in goodsParams.info.set" :key="item.key">
          <td>{{item.key}}</td>
          <td style="color: var(--color-high-text)">{{item.value}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailGoodsParams',
    props: {
      goodsParams: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .goods-params {
    border-top: 3px solid rgba(204, 204, 204, 0.39);
    width: 80%;
    margin: 0 10%;
  }
  .rule {
    margin-top: 20px;
  }
  .table {
    width: 100%;
    text-align: center;
    font-size: 13px;
    /* border-collapse:separate; border-spacing:0px 10px; */
  }
  .table tr {
    height: 40px;
    border-bottom: 1px solid rgba(231, 231, 231, 0.541);
  }
  .rule .table tr td:first-child {
    text-align: left;
    width: 50px;
  }
  .rule .table tr:last-child {
    border-bottom: 1px solid #ccc;
  }
  .info {
    margin-bottom: 20px;
  }
  .info .table tr td {
    text-align: left;
    width: 25px;
  }
</style>