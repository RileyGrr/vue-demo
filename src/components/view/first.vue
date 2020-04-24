<template>
  <div id="first" v-loading="loading">
    <toggle1></toggle1>
    <toggle2></toggle2>
    <!-- 引用vuex -->
    <div @click="add()">添加</div>
    <div>
      <h3>{{$store.state.a.count}}</h3>
      <h3>{{$store.state.count}}Mutations</h3> 
      <button @click="$store.commit('add')">+</button>
      <button @click="$store.commit('reduce')">-</button>
    </div>
    <!-- <div>
      <h3>{{$store.state.count}}actions </h3> 
      <button @click="$store.commit('addAction')">+</button>
      <button @click="$store.commit('reduceAction')">-</button>
    </div> -->
    <span>fIRST哈哈哈</span>
    <el-button>Button</el-button>
    <el-button type="primary">主要按钮</el-button>
    <p>{{ msg }}</p>
    <div class="a">
      <confirm text="注册" @message="getMessage"></confirm>
    </div>
    <qiu-Btn msg="确定呀" @btnClickEvent="dosth">
      <img slot="icon" class="ico" src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png" />
    </qiu-Btn>
    <qui-Nav>
      
    </qui-Nav>

    
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
// {{$store.state.count}}
import confirm from '../sub/Confirm'
import quiBtn from '../qiuButton.vue' /*引用*/
import quiNav from '../quiNav.vue'
import store from '@/store/store'
import toggle1 from '../toggle1.vue'
import toggle2 from '../toggle2.vue'

import { mapState,mapMutations,mapGetters,mapActions  } from 'vuex';

export default {
  name: 'first',
  components: {
    confirm,
    'qiu-Btn': quiBtn, // BUTTON按钮设置别名
    'qui-Nav': quiNav, // 导航组件
    'toggle1': toggle1,
    'toggle2': toggle2
  },
  data(){
    return {
      msg: '122131',
      loading: false
    }
  },
  store,
  computed:{
    ...mapState(["count"]),
    count(){
      return this.$store.state.count;
    }
  },
  methods: {  
    ...mapMutations(['add','reduce']),
    // ...mapActions(['addAction','reduceAction']),
  //绑定事件的关键代码
  // methods属性中可以写任何的自定义函数，写完之后绑定的方式也很简单，
  // 在button上写关键字v-on:click，把对应的事件写上就可以了，
    getMessage(val){
      console.log(val)
    },
    dosth(){
      console.log('你点击了button按钮')
    },
    add(){
      this.$store.commit('increase')
    }
  },
  created(){
     this.$store.dispatch('addAction');
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
.ico {
  width: 30px;
  height: 20px;
}
</style>
