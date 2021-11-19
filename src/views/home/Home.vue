<template>
  <div id="home">
    <!-- 头部导航 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>

    <scroll class="wrapper" :probeType="3" @scrollY="scrollY" ref="scroll">
      <!-- 轮播图 -->
      <swiper v-if="banner.length">
        <swiper-item v-for="item in banner" :key="item.image">
          <a :href="item.link">
            <img :src="item.image" alt="">
          </a>
        </swiper-item>
      </swiper>
      <!-- 推荐列表 -->
      <home-recommend :recommend="recommend" class="recommend"></home-recommend>
      <!-- 本周流行 -->
      <home-popular></home-popular>
      <!-- 选项卡 -->
      <tab-control :title="['流行', '新款', '精选']" @clickTabControl="getGoodsType"></tab-control>
      <!-- 选项卡内容展示区 -->
      <Waterfall :goods="goods[goodsType].list" class="goods"></Waterfall>
    </scroll>

    <back-top v-show="backTopShow" @click.native="backTop"></back-top>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import { Swiper, SwiperItem } from 'components/common/swiper'
  import HomeRecommend from './children/HomeRecommend'
  import HomePopular from './children/HomePopular'
  import TabControl from 'components/content/tabControl/TabControl'
  import Waterfall from 'components/content/waterfall/Waterfall'
  import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/content/backTop/BackTop'

  import { getHomeMultidata, getHomeGoods } from 'network/home'

  export default {
    name: 'Home',
    components: {
      NavBar,
      Swiper,
      SwiperItem,
      HomeRecommend,
      HomePopular,
      TabControl,
      Waterfall,
      Scroll,
      BackTop
    },
    data(){
      return {
        banner: [],  // 轮播图图片
        recommend: [],  // 推荐列表
        goods: {  // 商品数据
          'pop': { page: 0, list: [] },
          'new': { page: 0, list: [] },
          'sell': { page: 0, list: [] }
        },
        goodsType: 'pop', // 默认显示的商品类型
        backTopShow: false  // 返回顶部按钮是否显示
      }
    },
    methods: {
      /*      网络请求相关     */
      getHomeGoods(type) {
        // const p = 1
        const p = this.goods[type].page + 1
        // 调用网络请求方法
        getHomeGoods(type, p).then(
          res =>{
            // console.log(res);
            this.goods[type].list.push(...res.data.list)
            this.goods[type].page += 1
          }
        )
      },
      
      /*      事件监听相关     */
      // 子组件点击选项卡获取当前显示的商品
      getGoodsType(index) {
        switch(index) {
          case 0: this.goodsType = 'pop'
            break
          case 1: this.goodsType = 'new'
            break
          case 2: this.goodsType = 'sell'
            break
        }
      },
      // 返回顶部按钮是否显示
      scrollY(position) {
        this.backTopShow = position.y < -1000
      },
      // 点击返回顶部
      backTop() {
        this.$refs.scroll.scrollTo(0, 0)
      }

    },
    created() {
      // 请求home页面数据
      getHomeMultidata().then(
        res =>{
          // console.log(res.data);
          this.banner = res.data.banner.list
          this.recommend = res.data.recommend.list
        }
      ),
      
      // 请求home页面 选项卡 下的商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    }
  }
</script>

<style scoped>
  #home {
    position: relative;
  }
  .nav-bar{
    background-color: var(--color-tint);
    color: #fff;
    position: sticky;
    top: 0;
    z-index: 999;
  }
  .recommend {
    background-color: #fff;
  }
  .goods {
    padding: 5px;
  }
  .wrapper {
    height: calc(100vh - 84px);
    overflow: hidden;
    background-color: #f7f7f7;
  }
</style>