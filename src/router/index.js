import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import First from '@/components/view/first'
import Second from '@/components/view/second'
import EpidemicMap from '@/views/epidemicMap/index' // 疫情地图页

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/epidemicMap',
      name: 'EpidemicMap',
      component: EpidemicMap
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/First',
      name: 'First',
      component: First
    },{
      path: '/second',
      name: 'Second',
      component: Second
    }
  ]
})
