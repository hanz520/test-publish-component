<template>
  <div id="app">
    显示最简单的文字
    <myComponent msg="文字来自App" />
  </div>
</template>

<script>
import myComponent from './myComponent.vue'
export default {
  name: 'app',
  components: {
    myComponent,
  },
  data () {
    return {
    }
  }
}
</script>