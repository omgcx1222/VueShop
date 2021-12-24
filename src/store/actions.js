export default {
  // 规格选择点击确定
  cartOk(context, goodsInfo) {
    return new Promise((resolve) =>{
      const ordVal = context.state.cartList.find((item, index) => {
        if(item.xdSkuId === goodsInfo.xdSkuId) { // 相同商品
          // 相同商品的索引值和数量
          const obj = {
            index,
            count: goodsInfo.count
          }
          // 根据index是否存在来判断 购物车页面 点击还是 商品详情 点击
          if(goodsInfo.index === undefined) {
            context.commit('ADD_COUNT', obj)  // 相同商品的数量叠加
            resolve('加入购物车成功')
          }else {  
            context.commit('CHANGE_INFO', goodsInfo) // 修改已选规格
            obj.index = goodsInfo.index
            obj.count = item.count
            context.commit('ADD_COUNT', obj)  // 相同商品的数量叠加
            obj.index = index
            context.commit('SPLICE_CART', obj.index)  // 删除相同的另一个商品（最后删除，如果先删除，商品对应的index会有所改变）
            // resolve('修改规格成功')
          }
          
          return item
        }
      })
      if(ordVal === undefined) {  // 不是相同商品
        if(goodsInfo.index === undefined) { // 根据index是否存在来判断 购物车页面 点击还是 商品详情 点击
          context.commit('ADD_CART', goodsInfo)
          resolve('加入购物车成功')
        }else {
          context.commit('CHANGE_INFO', goodsInfo) // 修改规格
        }
      }
    })
  },
  // 购物车输入框修改数量
  changeCount(context, obj) {
    context.commit('CHANGE_COUNT', obj)
  },
  // 购物车加减号修改数量
  changeCount2(context, obj) {
    context.commit('ADD_COUNT', obj)
  }
}