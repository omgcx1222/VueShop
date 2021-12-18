<template>
  <div class="select" v-if="Object.keys(skuInfo).length">
    <div class="back" @click="back"></div>

    <div class="content" ref="content">
      <div class="header">
        <img :src="currentInfo.img || skuInfo.skus[0].img" class="img">
        <div class="current-select">
          <div class="close">
            <span class="iconfont icon-guanbi" @click="back"></span>
          </div>
          <div>
            <div class="price">{{currentInfo.currency || '￥'}}<span>{{currentInfo.nowprice / 100 || 0}}</span></div>
            <div>
              <span style="color: #8c8c8c;">已选 </span>
              <span v-for="(item, index) in propsList" :key="index" v-show="item.name">{{item.name}}，</span>
              <span>{{count}}个</span>
            </div>
          </div>
        </div>
      </div>

      <scroll class="scroll">
        <div class="body">
          <div class="props-item" v-for="(item, styleIndex) in skuInfo.props" :key="item.label">
            <div class="props-label">{{item.label}}</div>
            <div>
              <span class="props-list"
                v-for="(list, index) in item.list" 
                :key="list.styleId"
                :class="{'active': propsList[styleIndex].currentIndex === index}"
                @click="listClick(list, styleIndex, index)"
                >
                {{list.name}}
              </span>
            </div>
          </div>
          <div class="count">
            <div>数量</div>
            <count @handleCount="handleCount"></count>
          </div>
        </div>
      </scroll>
      
      <div class="btn-ok">
        <div @click="isOk">确认</div>
      </div>
    </div>
  </div>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll.vue'
  import Count from 'components/content/count/Count.vue'
  
  export default {
    name: 'DetaiSelect',
    components: {
      Scroll,
      Count
    },
    props: {
      skuInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        propsList: [], // 当前选中的规格
        currentInfo: {}, // 当前选中的商品的信息
        count: 1, // 数量
        
      }
    },
    methods: {
      // 监听子组件数量的修改
      handleCount(val) {
        this.count = val
      },
      // 弹框弹回
      back() {
        this.$emit('back')
      },
      // 选择规格
      listClick(list, styleIndex, index) {
        // console.log(list, styleIndex, index);
        if(this.propsList[styleIndex].name != list.name) {
          this.propsList[styleIndex].currentIndex = index
          this.propsList[styleIndex].name = list.name
        }else {
          this.propsList[styleIndex].currentIndex = ''
          this.propsList[styleIndex].name = ''
          this.currentInfo = {}
        }
        
        for(let s in this.skuInfo.skus) {
          let arr = []
          let arr2 = []
          for(let i in this.propsList) {
            arr.push(this.skuInfo.skus[s][this.propsList[i].type])
            arr2.push(this.propsList[i].name)
          }
          // console.log(arr,arr2);
          if(arr.toString() === arr2.toString()) this.currentInfo = this.skuInfo.skus[s]
        }
      },
      // 点击确认
      isOk() {
        if(this.currentInfo.xdSkuId) {
          const goodsInfo = {
            img: this.currentInfo.img,
            title: this.skuInfo.title,
            nowprice: this.currentInfo.nowprice,
            xdSkuId: this.currentInfo.xdSkuId,
            count: this.count * 1,  // 数量
            style: this.propsList  // 选中的规格
          }
          this.$store.dispatch('cartOk', goodsInfo)
          this.back()
        }
        
      }
      
    },
    watch: {
      // for(let i in this.skuInfo.props) {
      //   const obj = {
      //     type: this.skuInfo.props[i].list[0].type,
      //     lable: this.skuInfo.props[i].label,
      //     currentIndex: '',  // 选中的每个规格的第几个
      //     name: ''  // 规格名字
      //   }
      //   this.propsList.push(obj)
      // }
      skuInfo(newval) {
        for(let i in newval.props) {
          const obj = {
            type: newval.props[i].list[0].type,
            lable: newval.props[i].label,
            currentIndex: '',
            name: ''
          }
          this.propsList.push(obj)
        }
      }
    }
  }
</script>

<style scoped>
  .select {
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 1000;
    top: 100vh;
    color: black;
    font-size: 13px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .back {
    /* height: 120px; */
    opacity: 0.6;
    background-color: black;
    flex: 1;
  }
  .content {
    width: 100%;
    background-color: #fff;
    /* border-radius: 12px 12px 0 0; */
  }
  .header {
    /* height: 100px; */
    display: flex;
  }
  .header .img {
    width: 100px;
    height: 100px;
    border-radius: 6px;
    margin: 20px 10px;
  }
  .current-select {
    flex: 1;
    margin: 20px 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .close {
    text-align: right;
  }
  .close span {
    font-size: 16px;
    color: #bfbfbf;
    margin-right: 10px;
  }
  .price {
    margin-bottom: 10px;
    color: #f2270c;
  }
  .price span{
    font-size: 24px;
  }
  .scroll {
    height: 300px;
    overflow: hidden;
    padding: 0 20px;
  }
  .props-item {
    margin: 10px 0;
  }
  .props-label {
    margin: 10px 0;
  }
  .props-list {
    display: inline-block;
    line-height: 30px;
    padding: 0 18px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    background-color: #f2f2f2;
    border-radius: 15px;
    margin: 0 10px 10px 0;
  }
  .active {
    border: 1px solid #f2270c;
    background: #fcedeb;
    color: #f2270c;
    box-sizing: border-box;
  }
  .count {
    display: flex;
    justify-content: space-between;
  }
  .btn-ok {
    padding: 10px;
  }
  .btn-ok div {
    line-height: 40px;
    background-color: #f2140c;
    border-radius: 21px;
    color: #fff;
    text-align: center;
  }
</style>