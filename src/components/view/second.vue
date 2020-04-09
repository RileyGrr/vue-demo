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
import store from '@/store/store'
import { apiAddress } from '@/request/api';// 导入我们的api接口

export default {
  name: 'first',
  store,
  components: {
    confirm
  },
  data(){
    return {
      msg: store.state.count,
      hide: false, // loading控件显示隐藏控制
    }
  },
  created () {
    this.onLoad();
  },
  methods: {
    getMessage(val){
      console.log(val)
    },
    // 获取数据
  onLoad() {
    // 调用api接口，并且提供了两个参数
    apiAddress({
        type: 0,
        sort: 1
    }).then(res => {
        // 获取数据成功后的其他操作
      console.log(RES)
    })
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
