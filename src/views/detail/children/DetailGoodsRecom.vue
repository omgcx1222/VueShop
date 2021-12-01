<template>
  <div>
    <div class="see-see">看了又看</div>
    <div class="recom">
      <waterfall :goods="recomGoods"></waterfall>
    </div>
  </div>
</template>

<script>
  import Waterfall from 'components/content/waterfall/Waterfall.vue'
  export default {
    name: 'DetailGoodsRecom',
    components: {
      Waterfall,
    },
    props: {
      recomGoods: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .see-see {
    width: 100%;
    text-align: center;
    line-height: 20px;
    font-size: 13px;
    color: rgb(255, 115, 115);
  }
  .recom {
    margin-top: 10px;
    background-color: #f7f7f7;
  }
</style>