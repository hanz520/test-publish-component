<template>
  <div id="app">
    显示最简单的文字
    <myComponent msg="文字来自App" />
  </div>
</template>

<script>
// import myComponent from './myComponent.vue'
// 修改路径为构建过的组件
import myComponent from '../dist/testPublishComponent.min.js'
import Vue from 'vue'
Vue.use(myComponent)

export default {
  name: 'app',
  // components: {
  //   myComponent,
  // },
  data () {
    return {
    }
  }
}
</script>