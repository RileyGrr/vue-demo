
import Vue from 'vue'
import Vuex from 'vuex'
 
Vue.use(Vuex)
 
const state = {
  text: '引用vuex',
  pjtnews: 0,
  count: 1
}
 
const mutations = {
  add(state) {
    state.count += 12;
  },
  reduce(state) {
    state.count -= 1;
  },
  increase(state) {
    state.count ++
  }
}

// 调用上面mutations里的方法
const actions ={
    addAction(context){
        context.commit('add',10)
    },
    reduceAction({commit}){
        commit('reduce')
    }
}

const getters = {
    count:function(state){
        return state.count +=100;
    }
}

const moduleA={
    state,mutations,getters,actions
}


// 用export default 封装代码，让外部可以引用
export default new Vuex.Store({
  state,
  mutations,
  getters,
  modules: {a:moduleA}
})