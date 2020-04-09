<template>
  <div id="first">
    <span>second</span>
    <p>{{ msg }}</p>
    <div class="a">
      <confirm text="注册" @message="getMessage"></confirm>
    </div>
    <loading v-if="hide"></loading>
    <router-link to="/first">去第一个页面</router-link>
  </div>
</template>

<script>
import confirm from '../sub/Confirm'

export default {
  name: 'first',
  components: {
    confirm
  },
  data(){
    return {
      msg: '122131',
      hide: false // loading控件显示隐藏控制
    }
  },
  methods: {
    getMessage(val){
      console.log(val)
    }
  }
}
</script>

<style lang="scss" scoped>
#first {
  // background: green;
  height: 40px;
  width: 60px;
}
.a  {
  width: 100PX;
  height: 200px;
  // background: burlywood;
  // float: right;
}
</style>
