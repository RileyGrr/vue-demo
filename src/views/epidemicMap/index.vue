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
        <p class="time">
          <span class="time_left">截止至北京时间2020-04-24 15:30</span>
          <span class="time_right"><van-icon name="question-o" class="question_icon"/>数据说明</span>
        </p>
        <ul class="root_abroad">
          <li>
            <div class="root_one">教上日<span style="color: #ff382a">+78927</span></div>
            <div class="root_two">18097557</div>
            <div class="root_three">现存确诊</div>
          </li>
          <li>
            <div class="root_one">教上日<span style="color: #ac2330">+78927</span></div>
            <div class="root_two" style="color: #ac2330">18097557</div>
            <div class="root_three">现存确诊</div>
          </li>
          <li>
            <div class="root_one">教上日<span style="color: #32b6a3">+78927</span></div>
            <div class="root_two" style="color: #32b6a3">18097557</div>
            <div class="root_three">现存确诊</div>
          </li>
          <li>
            <div class="root_one">教上日<span style="color: #5e7090">+166</span></div>
            <div class="root_two" style="color: #5e7090">18097557</div>
            <div class="root_three">现存确诊</div>
          </li>
        </ul>
        <h3>全球疫情图</h3>
        <div class='chart' id='chart'></div>
      </div>
       <div v-if="val.id === '03'" class="content_2">
        <h3>海外动态</h3>
      </div>
    </van-tab>
  </van-tabs>
  </div>
</template>

<script>
import echarts from 'echarts'
import { Button, Tab, Tabs, Icon } from 'vant';
export default {
  name: 'epidemicMap',
  components:{
    [Button.name]: Button,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Icon.name]: Icon
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
    height: 400px;
    // background: bisque;/

    h3 {
      text-align: left;
      padding-left: 20px;
      position: relative;
      font-size: 18px;
    }

    h3::after {
      border-bottom: none;
      content: " ";
      position: absolute;
      bottom: 3px;
      right: 0;
      -webkit-transform-origin: 0 100%;
      transform-origin: 0 100%;
      left: 9px;
      width: 5px;
      height: 16px;
      background: #3083fa;
    }

    .time {
      padding: 0px 10px 16px 10px;
      color: #666;
      .time_left {
        display: inline-block;
        float: left;
      }

      .time_right {
        display: inline-block;
        float: right;
      }

      .question_icon {
        padding: 0 4px;
      }
    }
  }

  .root_abroad {
    clear: both;
    margin-top: 10px;
    margin-left: 3%;
    width: 94%;
    margin-top: 10px;
    height: 80px;
    padding-top: 16px;
    border: 1px solid #ebebeb;
    -webkit-box-shadow: 0 4px 18px 2px rgba(186,185,185,.3);
    box-shadow: 0 4px 18px 2px rgba(186,185,185,.3);
    border-radius: 9px;
    li {
      width: 25%;
      float: left;

      ::before {
        content: "";
        position: absolute;
        left: -5px;
        top: 255%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        width: 1px;
        height: 39px;
        background: -webkit-gradient(linear,left bottom,left top,from(#ededed),color-stop(52%,#e4e3e3),to(#fff));
        background: linear-gradient(0deg,#ededed,#e4e3e3 52%,#fff);
      }

      .root_one {
        transform: scale(.9);
        font-size: 9px;
        font-family: Source Han Sans CN;
        font-weight: 500;
        color: #666;

        // span {
        //   color: #ff382a;
        // }
      }

      .root_two {
        height: 32px;
        line-height: 37px;
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: 800;
      }

      .root_three {
        font-size: 12px;
        font-family: PingFang SC;
        font-weight: 700;
      }
    }
  }
</style>
