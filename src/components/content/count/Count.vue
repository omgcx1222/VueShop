<template>
  <div class="compute">
    <div class="jian" @click="reduce">-</div>
    <input class="num" type="number" id="" v-model="count" @blur="handle" v-if="$route.path != '/shopcart'">
    <input class="num" type="number" id="" :value="changeCount" v-else ref="inp" @blur="handle">
    <div class="jia" @click="add">+</div>
  </div>
</template>

<script>
  export default {
    name: 'Count',
    data() {
      return {
        count: 1  // 数量
      }
    },
    props: {
      index: {  // 购物车中的第几个商品
        type: Number
      }
    },
    methods: {
      reduce() {
        if(this.$route.path === '/shopcart') {
          this.count = this.$store.state.cartList[this.index].count
        }
        if(this.count > 1) {
          this.count --
        }else {
          this.$toast.show('该商品1件起售')
        }
      },
      add() {
        if(this.$route.path === '/shopcart') {
          this.count = this.$store.state.cartList[this.index].count
        }
        this.count ++
      },
      handle() {
        if(this.$route.path === '/shopcart') {
          let num = this.$refs.inp.value.replace(/\b(0+)/gi,"") // 去掉前面的0
          if(num >= 1) {
            this.count = this.$refs.inp.value
          }else {
            this.$refs.inp.value = this.count  // 值还原
            this.$toast.show('该商品1件起售')
          }
        }else {
          if(this.count < 1) this.count = 1
        }
      },
    },
    computed: {
      changeCount() {
        return this.$store.state.cartList[this.index].count
      }
    },
    watch: {
      count(newval) {
        if(this.$route.path === '/shopcart') {
          const obj = {
            count: newval,
            index: this.index
          }
          this.$store.dispatch('changeCount', obj)
        }else {
          this.$emit('handleCount', newval)
        }
      }
    },
    // activated() {
    //   console.log("activated");
    //   if(this.$route.path === '/shopcart') this.count = this.$store.state.cartList[this.index].count
    // },
    // created() {
    //   console.log("created");
    //   if(this.$route.path === '/shopcart') this.count = this.$store.state.cartList[this.index].count
    // },
    // updated() {
    //   console.log("updated");
    //   if(this.$route.path === '/shopcart') this.count = this.$store.state.cartList[this.index].count
    // }
  }
</script>

<style scoped>
  .compute {
    display: flex;
    width: 80px;
    font-size: 20px;
    text-align: center;
    line-height: 20px;
  }
  .jia, .jian {
    width: 25px;
  }
  .num {
    width: 30px;
    color: #333;
    background: #f2f2f2;
    font-size: 15px;
    text-align: center;
    border: none;
  }
</style>