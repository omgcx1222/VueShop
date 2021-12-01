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
        scroll: null
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        // better-scroll对象创建时图片未完全加载出来，这个属性改为true即可解决（或在updated生命周期创建better-scroll对象也能解决）
        observeDOM: true,
        click: true,
        // 1. probeType 为 0，在任何时候都不派发 scroll 事件，
        // 2. probeType 为 1，仅仅当手指按在滚动区域上，每隔 momentumLimitTime 毫秒派发一次 scroll 事件，
        // 3. probeType 为 2，仅仅当手指按在滚动区域上，一直派发 scroll 事件，
        // 4. probeType 为 3，任何时候都派发 scroll 事件，包括调用 scrollTo 或者触发 momentum 滚动动画
        probeType: this.probeType,
        pullUpLoad: true,
        bounce: {
          top: false,
          right: false,
          bottom: true,
          left: false,
        },  // 回弹
      })
      // 监听滚动的位置
      if (this.probeType === 2 || this.probeType === 3) {
        this.scroll.on("scroll", (positon) => {
          this.$emit("scrollY", positon);
        });
      }

      // 监听滚动结束
      this.scroll.on('scrollEnd', (position) => {
        this.$emit('scrollEnd', position)
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
        this.scroll && this.scroll.refresh()
      },
      // // 禁用滚动
      // disable() {
      //   this.scroll && this.scroll.disable()
      // },
      // // 开启滚动
      // enable() {
      //   this.scroll && this.scroll.enable()
      // }
    }
  }
</script>

<style scoped>
</style>