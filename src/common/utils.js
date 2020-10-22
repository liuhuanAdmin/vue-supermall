//公用的工具类
// /*防抖函数,z要执行的方法，等待的时间*/
export function debounce(func,delay) {
  let times  = null
  return function (...args) {
    if (times) clearTimeout(times)
    times = setTimeout(()=>{
      func.apply(this,args)
    },delay)
  }
}
