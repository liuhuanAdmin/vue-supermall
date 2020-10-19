import {request} from "@/network/request";
/*请求轮播图*/
export function getHomeMultidata(){
  return request({
    url: '/home/multidata'
  })
}
/*请求下拉商品*/
export function getHomeGoodsData(type,page){
  return request({
    url: '/home/data',
    params:{
      type,
      page
    }
  })
}
