// 防抖
export function debounce(fn, delay){
  let timer = null
  return function() { 
    if(timer !== null){ // 借助闭包（这里调用了timer）保存timer
      console.log("t");
      clearTimeout(timer) 
    }
    // timer = setTimeout(fn, delay)  直接写法可以不加apply
    timer = setTimeout(() =>{
      fn // 加入apply改变指向
    }, delay)
  }
}

// 五位数万后缀
export function exceed(number=0) {
  let n = number
  if(n.toString().length > 4) {
    // 小数点后一位四舍五入
    n = (n / 10000).toFixed(1) + '万'
  }
  return n
}

// 时间戳转换
export function formatDate(time) {
  let date = new Date(time * 1000)
  let y = date.getFullYear()
  let m = date.getMonth() + 1
  let h = date.getDate()
  return y + '-' + (m < 10 ? '0' + m : m) + '-' + (h < 10 ? '0' + h : h)
}

