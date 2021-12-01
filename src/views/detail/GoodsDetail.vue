<template>
  <div>
    <detail-nav-bar @clickNavBar="clickNavBar" :current="current"></detail-nav-bar>
    <scroll class="scroll" ref="scroll" @scrollEnd="scrollEnd">
      <!-- 轮播图 -->
      <swiper v-if="topImages.length" class="swiper">
        <swiper-item v-for="item in topImages" :key="item">
          <img :src="item" alt="">
        </swiper-item>
      </swiper>
      <!-- 商品基本信息 -->
      <detail-goods-info :goodsInfo="goodsInfo" v-if="Object.keys(goodsInfo).length"></detail-goods-info>
      <!-- 店铺信息 -->
      <detail-shop-info :shopInfo="shopInfo"></detail-shop-info>
      <!-- 商品评价 -->
      <detail-rate :rate="rate" ref="rate"></detail-rate>
      <!-- 图片展示 -->
      <detail-goods-img :goodsImg="goodsImg" ref="goodsImg" @goodsImgLoad="goodsImgLoad"></detail-goods-img>
      <!-- 商品参数 -->
      <detail-goods-params :goodsParams="goodsParams" v-if="Object.keys(goodsParams).length"></detail-goods-params>
      <!-- 商品推荐 -->
      <detail-goods-recom :recomGoods="recomGoods.list" ref="recom"></detail-goods-recom>
    </scroll>

    <detail-bottom-bar @addCart="addCart"></detail-bottom-bar>
    <cart-select :skuInfo="skuInfo" :style="positionTop" @back="back"></cart-select>
    <tips :message="message" :isShow="isShow"></tips>
  </div>
</template>

<script>
  import { goodsDetailRequest, goodsInfo, shopInfo, goodsImg, goodsParams, getRecomGoodsRequest } from 'network/detail.js'

  import Scroll from 'components/common/scroll/Scroll'
  import { Swiper, SwiperItem } from 'components/common/swiper/index'
  import Tips from 'components/common/tips/Tips.vue'
  import CartSelect from 'components/content/cartSelect/CartSelect.vue'

  import DetailNavBar from './children/DetailNavBar'
  import DetailGoodsInfo from './children/DetailGoodsInfo'
  import DetailShopInfo from './children/DetailShopInfo'
  import DetailGoodsImg from './children/DetailGoodsImg'
  import DetailGoodsParams from './children/DetailGoodsParams.vue'
  import DetailRate from './children/DetailRate.vue'
  import DetailGoodsRecom from './children/DetailGoodsRecom.vue'
  import DetailBottomBar from './children/DetailBottomBar.vue'

  export default {
    name: 'GoodsDetail',
    components: {
      Scroll,
      DetailNavBar,
      Swiper,
      SwiperItem,
      DetailGoodsInfo,
      DetailShopInfo,
      DetailGoodsImg,
      DetailGoodsParams,
      DetailRate,
      DetailGoodsRecom,
      DetailBottomBar,
      Tips,
      CartSelect,
    },
    data() {
      return {
        iid: '',
        topImages: [],  // 轮播图图片
        goodsInfo: {},  // 商品基本信息
        shopInfo: {},  // 店铺信息
        goodsImg: {},  // 商品图片信息
        goodsParams: {}, // 商品参数
        rate: {},  // 商品评论
        recomGoods: {  // 推荐商品
          page: 0,
          list: []
        },
        scrollY: [],  // 距离顶部位置
        current: 0,  // 当前导航显示的index
        skuInfo: {}, // 商品所有规格信息
        positionTop: '', // 弹框位置
        isShow: false,
        message: '',
      }
    },
    created() {
      this.iid = this.$route.params.iid
      this.getGoodsDetail(this.iid)
      this.getRecomGoods(this.recomGoods.page)
    },
    methods: {
      getGoodsDetail(iid) {
        goodsDetailRequest(iid).then(
          res =>{
            const data = res.result
            // 获取轮播图信息
            this.topImages = data.itemInfo.topImages

            // 获取商品基本信息
            this.goodsInfo = new goodsInfo(data.itemInfo, data.columns, data.shopInfo.services)

            // 获取店铺信息
            this.shopInfo = new shopInfo(data.shopInfo)

            // 获取商品图片信息
            this.goodsImg = new goodsImg(data.detailInfo)

            // 获取商品参数
            this.goodsParams = new goodsParams(data.itemParams)

            // 获取商品评论
            this.rate = data.rate

            // 获取商品规格
            this.skuInfo = data.skuInfo
          }
        )
      },
      // 请求商品推荐数据
      getRecomGoods(page) {
        let p = page + 1
        getRecomGoodsRequest(p).then(
          res =>{
            this.recomGoods.list = res.data.list
            this.recomGoods.page = p
            // console.log(this.recomGoods);
          }
        )
      },
      clickNavBar(index) {
        // console.log(this.scrollY);
        this.$refs.scroll.scrollTo(0, -this.scrollY[index], 500)
      },
      // 监听滚动结束
      scrollEnd(opsition) {
        if(opsition.y > -this.scrollY[1]) {
          this.current = 0
        }else if(-this.scrollY[2] < opsition.y && opsition.y <= -this.scrollY[1]) {
          this.current = 1
        }else if(-this.scrollY[3] < opsition.y && opsition.y <= -this.scrollY[2]) {
          this.current = 2
        }else {
          this.current = 3
        }
        // console.log(opsition.y);
      },
      // 弹出弹框
      addCart() {
        this.positionTop = 'top: 0; transition: top .2s cubic-bezier(0, 0, 0.25, 1);'
      },
      // 收回弹框
      back(ok) {
        this.positionTop = 'top: 100vh; transition: top .05s'
        if(ok) {  // 有ok代表点击确认收回弹框，没有则表示点击关闭收回弹框
          this.isShow = true
          this.message = '加入购物车成功'
          setTimeout(()=> {
            this.isShow = false
          }, 2000)
        }
        
      },
      // 监听推荐图片加载完成
      goodsImgLoad() {
        this.refreshData()
      },
      // 图片加载完成刷新数据
      refreshData() {
        this.$refs.scroll.refresh()
        this.scrollY = []
        this.scrollY.push(0)
        this.scrollY.push(this.$refs.rate.$el.offsetTop - 35)
        this.scrollY.push(this.$refs.goodsImg.$el.offsetTop -35)
        this.scrollY.push(this.$refs.recom.$el.offsetTop -35)
        // console.log(this.scrollY)
      }
    },
    mounted() {
      // 监听轮播图图片加载完成
      this.$bus.$on('imageLoad', () =>{
        this.refreshData()
      })
    },
    beforeDestroy() {
      this.$bus.$off('imageLoad')
    }
  }
</script>

<style scoped>
  .scroll {
    height: calc(100vh - 84px);
    overflow: hidden;
  }
  .swiper {
    height: 250px;
  }
</style>