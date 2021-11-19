import Swiper from './Swiper'
import SwiperItem from './SwiperItem'

/**
 * 用前必看：
 *  1 用法：（<swiper-item></swiper-item> 标签里的为轮播内容）
      <swiper>
        <swiper-item v-for="item in imgList" :key="item">
          <a href="#">
            <img :src="item" alt="">
          </a>
        </swiper-item>
      </swiper>
    2 请务必在<swiper></swiper> 标签内使用v-if属性，在发送网络请求获取到数据后再渲染该组件。
      不这样造成的后果就是网络请求未获取到数据时 swiper组件 就进行渲染，导致轮播图片个数更新失败
 */

export {
  Swiper,
  SwiperItem
}