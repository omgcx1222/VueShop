import Vue from 'vue'
export default {
  // 不同商品列表添加
  ADD_CART(state, goodsInfo) {
    state.cartList.push(goodsInfo)
  },
  // 相同商品数量增加
  ADD_COUNT(state, obj) {
    state.cartList[obj.index].count += obj.count
  },
  // 通过购物车输入框改变数量
  CHANGE_COUNT(state, obj) {
    state.cartList[obj.index].count = obj.count
  },
  // 修改已选规格
  CHANGE_INFO(state, goodsInfo) {
    Vue.set(state.cartList, goodsInfo.index, goodsInfo)
    // state.cartList[goodsInfo.index] = goodsInfo
  },
  // 删除商品
  SPLICE_CART(state, index) {
    state.cartList.splice(index, 1)
  },
  // 点击购物车商品
  IS_CHECK(state, index) {
    state.cartList[index].isCheck = !state.cartList[index].isCheck
  },
  // 购物车商品全选
  ALL_CHECK(state, allCheck) {
    state.cartList.forEach(item =>{
      item.isCheck = allCheck
    })
  }
}