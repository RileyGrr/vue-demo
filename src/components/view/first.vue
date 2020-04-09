<template>
  <div id="first" v-loading="loading">
    <span>fIRST哈哈哈</span>
    <el-button>Button</el-button>
    <el-button type="primary">主要按钮</el-button>
    <p>{{ msg }}</p>
    <div class="a">
      <confirm text="注册" @message="getMessage"></confirm>
    </div>
    
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
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
      loading: false
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
body {
  margin: 0;
}
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
