import { request } from './request'

export function goodsDetailRequest(iid) {
  return request({
    url: '/detail',
    params: {
      iid,
    }
  })
}

// 请求推荐商品数据
export function getRecomGoodsRequest(page) {
  return request({
    url: '/recommend',
    params: {
      page,
    }
  })
}

export class goodsInfo {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    // this.desc = itemInfo.desc
    this.oldPrice = itemInfo.oldPrice
    this.price = itemInfo.price
    this.discountDesc = itemInfo.discountDesc
    this.columns = columns
    this.services = services
  }
}

export class shopInfo {
  constructor(shopInfo) {
    this.shopLogo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.cSells = shopInfo.cSells
    this.cGoods = shopInfo.cGoods
    this.score = shopInfo.score
  }
}

export class goodsImg {
  constructor(detailInfo) {
    this.desc = detailInfo.desc
    this.detailImage = detailInfo.detailImage
  }
}

export class goodsParams {
  constructor(itemParams) {
    this.info = itemParams.info
    this.rule = itemParams.rule
  }
}


