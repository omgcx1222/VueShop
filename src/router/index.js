import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const ShopCart = () => import('views/shopcart/ShopCart')
const My = () => import('views/my/My')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },{
    path: '/home',
    component: Home
  },{
    path: '/category',
    component: Category
  },{
    path: '/shopcart',
    component: ShopCart
  },{
    path: '/my',
    component: My
  }
]


// 解决 this.$router.replace(this.path) 重复点击报错问题
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router