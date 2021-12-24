import Toast from './Toast'
const obj = {}

obj.install = function(Vue) {
  // 1.创建组件构造器
  const toastConstructor = Vue.extend(Toast)

  // 2.创建组件对象
  const toast = new toastConstructor()

  // 3.挂载组件对象到div元素上
  toast.$mount(document.createElement('div'))
  // console.log(toast.$el);

  // 4.在页面body添加该组件
  document.body.appendChild(toast.$el)

  // 在Vue原型添加创建出来的组件对象 (组件使用的时候可以通过 this.$toast.show() 使用toast里面的方法)
  Vue.prototype.$toast = toast
}

export default obj