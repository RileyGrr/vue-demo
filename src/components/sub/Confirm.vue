<template>
  <div id="confirm">
    <span>Confirm</span>
    <button @click="getButtonClick">{{ text || "确认" }}</button>
  </div>
</template>

<script>
import Confirm from '../sub/Confirm'

export default {
  name: 'first',
  props: ['text'], //父组件传给子组件的值
  data(){
    return {
      msg: '哈哈哈哈哈'
    }
  },
  methods: {
    getButtonClick(){
      console.log(this.msg)
      this.$emit('message', this.msg) // 子组件通过$emit向父组件传值
    }
  }
}
</script>

<style lang="scss" scoped>
#confirm {
//   background: red;
  height: 40px;
  width: 60px;
}
</style>
