// home 组件相关网络请求
import {request} from "./request";

// 请求home页面数据
export function getHomeMultidata() {
  return request('/home/multidata')
}

// 请求home页面商品数据
export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}