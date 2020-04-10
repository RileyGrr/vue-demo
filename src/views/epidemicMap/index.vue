<template>
  <div id="epidemic_map">
    <!-- <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button> -->
  <van-tabs v-model="active"
    scrollspy sticky
    background="#3778f2"
    title-inactive-color="white"
    title-active-color="white">
    <van-tab v-for="val in activeName" :title="val.title" :key="val.id">
      <div v-if="val.id === '02'" class="content_2">
        <h3>国外疫情数据</h3>
      </div>
    </van-tab>
  </van-tabs>
  </div>
</template>

<script>
import { Button, Tab, Tabs } from 'vant';
export default {
  name: 'epidemicMap',
  components:{
    [Button.name]: Button,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs
  },
  data(){
    return {
      active: 0,
      activeName: [
        { 
          id: '01',
          title: '入境政策',
          content: '入境政策'
        },
        {
          id: '02',
          title: '海外疫情',
          content: '海外疫情'
        },
        {
          id: '03',
          title: '海外动态',
          content: '海外动态'
        },
        {
          id: '04',
          title: '留学资讯',
          content: '留学咨讯'
        }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
  .content_2 {
    // h3 {
    //   position:relative;
    //   left: 20px;
    // }
    // h3:after{
    //   content:"";
    //   width: 5px;
    //   height: 2px;
    //   background: blue;
    //   position: absolute;
    //   margin: 0px 10px;
    //   left: -19px;
    // }
  }
</style>
