import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cartList: [],  // 购物车列表
  },
  mutations: {
    // 不同商品列表添加
    addCart(state, goodsInfo) {
      state.cartList.push(goodsInfo)
    },
    // 相同商品数量增加
    addCount(state, obj) {
      state.cartList[obj.index].count += obj.count
    },
    // 改变数量
    changeCount(state, obj) {
      state.cartList[obj.index].count = obj.count
    }
  },
  actions: {
    // 点击加入购物车
    cartOk(context, goodsInfo) {
      const ordVal = context.state.cartList.find((item, index) => {
        if(item.xdSkuId === goodsInfo.xdSkuId) {
          const obj = {
            index,
            count: goodsInfo.count
          }
          context.commit('addCount', obj)
          return item
        }
      })
      if(ordVal === undefined) {
        context.commit('addCart', goodsInfo)
      }
    },
    // 购物车修改数量
    changeCount(context, obj) {
      context.commit('changeCount', obj)
    }
  }
})

export default store