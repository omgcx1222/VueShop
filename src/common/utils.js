// 防抖
export function debounce(fn,delay){
  let timer = null 
  return function() { 
    if(timer){ // 借助闭包（这里调用了timer）保存timer
      clearTimeout(timer) 
    }
    // timer = setTimeout(fn, delay)  直接写法可以不加apply
    timer = setTimeout(() =>{
      fn.apply() // 加入apply改变指向
    }, delay)
  }
}