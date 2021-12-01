<template>
    <div id="hqq-swiper">
      <div class="swiper" ref="swiper" :style="swiperStyle" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
        <slot></slot>
      </div>
      <ul class="indicator" v-if="indicatorShow && swiperIndex > 1">
        <li v-for="(item, index) in swiperIndex" :key="item" :style="indicatorStyle(index)"></li>
      </ul>
    </div>
</template>

<script>
	export default {
		name: "Swiper",
    props: {
      // 轮播间隔
      interval: {
        type: Number,
        default: 2500
      },
      // 滑动的动画时长
      duration: {
        type: Number,
        default: 250
      },
      // 是否显示面板指示点
      indicatorShow: {
        type: Boolean,
        default: true
      },
      // 指示点颜色
      indicatorColor: {
        type: String,
        default: '#fff'
      },
      // 当前选中的指示点颜色
      indicatorActiveColor: {
        type: String,
        default: 'red'
      },
      // 滑动倍率
      moveRatio: {
        type: Number,
        default: 0.25
      }
    },
    data() {
      return {
        swiperStyle: '',  // 轮播样式
        swiperIndex: 0,   // 图片个数
        swiperWidth: 0,   // 宽度
        currentIndex: 0,  // 当前显示的索引
        timer: null,    // 定时器
        swiperTranslateX: 0,  // swiper当前移动的位置
        startX: 0,    // 点击时的X坐标
        moveWidth: 0,  // 手指滑动距离
      }
    },
    methods: {
      // 初始化
      initialization() {
        // let swiper = document.querySelector('.swiper')
        let swiper = this.$refs.swiper
        let swiperItem = swiper.getElementsByClassName('swiperItem')
        // console.log(swiperItem[0], swiperItem.length);
        
        this.swiperIndex = swiperItem.length
        this.swiperWidth = swiper.offsetWidth
        // 如果图片个数不少于一张，初始化
        if(this.swiperIndex > 1){
          let first = swiperItem[0].cloneNode(true)
          let last = swiperItem[swiperItem.length - 1].cloneNode(true)
          swiper.insertBefore(last, swiperItem[0])
          swiper.appendChild(first)
          this.currentIndex = 1
          // swiper 初始位置
          this.swiperTranslateX = -this.currentIndex * this.swiperWidth
          this.setTransform(this.swiperTranslateX, 0)

          // 开启定时器自动轮播下一张
          this.timer = setInterval(() =>{
            this.goNext()
          }, this.interval)
        }
      },

      // 指示点的样式
      indicatorStyle(index) {
        if(index == this.currentIndex - 1) {
          return 'background-color:' + this.indicatorActiveColor
        }
        return 'background-color:' + this.indicatorColor
      },

      // swiper 的位置(滑动距离，滑动动画时间)
      setTransform(w, duration) {
        this.swiperStyle = `transform: translateX(${w}px); transition: transform ${duration}ms`
      },

      // 下一张
      goNext() {
        // 更新当前显示的索引 和 swiper位置
        this.currentIndex ++
        this.swiperTranslateX -= this.swiperWidth
        this.setTransform(this.swiperTranslateX, this.duration)
        
        // 判断当前显示的是否为最后一张
        if(this.currentIndex == this.swiperIndex + 1){
          this.currentIndex = 1
          this.swiperTranslateX = -this.swiperWidth * this.currentIndex
          setTimeout(() =>{
            this.setTransform(this.swiperTranslateX, 0)
          }, this.duration)
        }
      },

      // 上一张
      goPre() {
        // 更新当前显示的索引 和 swiper位置
        this.currentIndex --
        this.swiperTranslateX += this.swiperWidth
        this.setTransform(this.swiperTranslateX, this.duration)

        // 判断当前显示的是否为第一张
        if(this.currentIndex == 0) {
          this.currentIndex = this.swiperIndex
          this.swiperTranslateX = -this.swiperWidth * this.currentIndex
          setTimeout(() =>{
            this.setTransform(this.swiperTranslateX, 0)
          }, this.duration)
        }
      },

      // 点击
      touchstart(event) {
        if(this.swiperIndex <= 1) return
        this.moveWidth = 0
        this.startX = event.changedTouches[0].clientX
        clearInterval(this.timer)
      },
      // 滑动
      touchmove(event) {
        if(this.swiperIndex <= 1) return
        this.moveWidth = this.startX - event.changedTouches[0].clientX
        this.setTransform(this.swiperTranslateX - this.moveWidth, 0)
      },
      // 抬起
      touchend() {
        if(this.swiperIndex <= 1) return
        // 判断滑动的幅度，滑动幅度不够则恢复原位
        if(Math.abs(this.moveWidth) > this.swiperWidth * this.moveRatio) {
          if(this.moveWidth > 0) {    // 左滑
            this.goNext()
          }else {   // 右滑
            this.goPre()
          }
        }else if(this.moveWidth != 0){
          this.setTransform(this.swiperTranslateX, this.duration)
        }

        // 开启定时器自动轮播下一张
        this.timer = setInterval(() =>{
          this.goNext()
        }, this.interval)
      }
    },
    mounted() {
      // 初始化
      this.initialization()
    }
	}
</script>

<style scoped>
  #hqq-swiper {
    width: 100%;
    overflow: hidden;
    position: relative;
  }
  .swiper {
    width: 100%;
    display: flex;
    height: 200px;
  }

  .indicator {
    width: 100%;
    display: flex;
    justify-content: center;
    list-style: none;
    position: absolute;
    z-index: 10;
    bottom: 10px;
  }
  .indicator li {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    /* background-color: #fff; */
    margin: 0 5px;
  }
</style>