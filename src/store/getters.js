export default {
  cartLength(state) {
    return state.cartList.length
  },
  // isAll(state) {
  //   state.cartList.forEach(item =>{
  //     if(item.isCheck === false) return false
  //   })
  //   return true
  // }
}