import {request} from './request'

export function requestsGoodsProps(iid) {
  return request({
    url: 'detail/',
    params: {
      iid
    }
  })
}