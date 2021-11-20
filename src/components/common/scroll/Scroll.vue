<template>
  <div ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from '@better-scroll/core'
  import ObserveDOM from '@better-scroll/observe-dom'
  import Pullup from '@better-scroll/pull-up'
  
  BScroll.use(ObserveDOM)
  BScroll.use(Pullup)

  export default {
    name: 'Scroll',
    props: {
      probeType: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        scroll: null,
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        // better-scroll对象创建时图片未完全加载出来，这个属性改为true即可解决（或在updated生命周期创建better-scroll对象也能解决）
        observeDOM: true,
        click: true,
        probeType: this.probeType,
        pullUpLoad: true
      })
      
      // 监听滚动
      this.scroll.on('scroll', (position) =>{
        this.$emit('scrollY', position)
      })

      // 监听上拉加载
      this.scroll.on('pullingUp', () =>{
        this.$emit('pullingUp')
      })
      // this.$bus.$on('imageLoad', () =>{
      //   this.scroll.refresh()
      // })
    },
    methods: {
      // 滚动到哪个位置
      scrollTo(x, y, time=300) {
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
      // 结束上一个上拉加载行为
      finishPullUp() {
        this.scroll && this.scroll.finishPullUp()
      },
      // 滚动高度重计算
      refresh() {
        // console.log("----");
        this.scroll.refresh()
      }
    }
  }
</script>

<style scoped>
  
</style>