
// button组件
<template>
  <button class="qui-btn" @click="btnClickEvent">
    <slot name="icon"></slot>
    <span>{{ msg }}</span>
  </button>
</template>
 
<script>
  export default {
    name:"button",
    // props是专门用来暴露组件的属性接口的
    props: {     
      msg: {
        default: '下载'
      }
    },
    methods:{
      btnClickEvent(){
        this.$emit('btnClickEvent');//关键代码父组件触发自定义事件
        console.log(this.msg)
      }
    }
  }
</script>
<style  lang="scss" scoped>
  /* @import './css/reset.import.css';
  @import './css/qui-btn.import.css'; */
</style>