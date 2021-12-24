import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'

// 1.导入插件
import VueLazyload from 'vue-lazyload'
// 1.导入自定义插件
import toast from 'components/common/toast'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

// 2.使用自定义插件
Vue.use(toast)
Vue.use(VueLazyload, {
  loading: require('./assets/img/common/lazy.png')
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')