<template>
  <div>显示传进来的文字{{msg}}</div>
</template>

<script>
export default {
  name: 'myComponent',
  props: {
    msg: {
      type: String,
      default: '默认值'
    }
  }

}
</script>
