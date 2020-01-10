import myComponent from './src/myComponent.vue'

// 安装组件
const install = (Vue) => {
  Vue.component(myComponent.name, myComponent)
}

myComponent.install = install

// 供直接html引用vuejs使用
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default myComponent
