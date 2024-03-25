<template>
  <view class="container content">
    <view class="userBg">
      <view class="topLine" :style="{height:topHight+'rpx'}"></view>
      <u-navbar title="个人中心" :safeAreaInsetTop="false" :autoBack="false" :fixed="false" bgColor="transparent"
        :titleStyle="{ fontSize: '36rpx', color: '#42464A' }">
        <view class="u-nav-slot" slot="left">
        </view>
      </u-navbar>

      <view class="userBox">
        <view class="flexStart">
          <view style="margin-right: 40rpx;">
            <u--image src="https://cdn.uviewui.com/uview/album/1.jpg" width="160rpx" height="160rpx"
              shape="circle"></u--image>
          </view>
          <view>
            <view class="flexStart">
              <text class="userName">用户昵称</text>
              <u--image :src="myVipPng" width="66rpx" height="36rpx"></u--image>
            </view>
            <text class="userId">id：96116541132165</text>
          </view>
        </view>
      </view>
    </view>


    <view class="flexCenter w100">
      <u--image :src="my2vipPng" width="680rpx" height="126rpx"></u--image>
    </view>

    <view class="cardBox">
      <u-cell-group :border="false">
        <u-cell v-for="(v, i) in meunList" :key="i" :url="v.url" :title="v.label" :border="false" size="large"
          isLink></u-cell>
      </u-cell-group>
    </view>
  </view>
</template>

<script>
/**
 * 我的 || 个人中心
*/
import { loginApi } from "@/components/api/api.js";
import myVipPng from "@/static/img/myVip.png"; //
import my2vipPng from "@/static/img/my2vip.png"; //
import topMixin from "@/utils/topMixin.js"


export default {
  mixins: [topMixin],
  data() {
    return {
      meunList: [
        { url: '/pages/msg/index', label: '隐私协议' },
        { url: 'pages/msg/index', label: '用户协议' },
        { url: 'pages/msg/index', label: '意见反馈' },
        { url: 'pages/msg/index', label: '注销账号' },
        { url: 'pages/msg/index', label: '退出登录' },
      ],

      myVipPng: myVipPng,
      my2vipPng: my2vipPng,
    };
  },
  async onShow() {
    this.getList();
  },
  methods: {
    getList() {
      let a = uni.getStorageSync("myName");
    },
    toVip() {
      console.log('去升级')
    },
    sendFn() {
      console.log('发送')
    },


  },
};
</script>

<style  lang="scss" scoped>
.content {
  box-sizing: border-box;
  // background-color: #F1F5FB;
  height: calc(100vh);
  overflow: scroll;
  // opacity: 0.9;
  // height: 50vh;
}

.userBg {
  background: radial-gradient(52% 101% at 16% 6%, rgba(255, 97, 40, 0.12) 0%, rgba(255, 255, 255, 0) 100%);

}

.userBox {
  padding: 37rpx 46rpx;

  .userName {
    font-weight: 500;
    font-size: 42rpx;
    color: #42464A;
    line-height: 59rpx;
    text-align: left;
    font-style: normal;
    margin-right: 14rpx;
  }

  .userId {
    font-weight: 500;
    font-size: 28rpx;
    color: #42464A;
    line-height: 40rpx;
    text-align: left;
    font-style: normal;
  }
}

.cardBox {
  background: #fff;
  margin: 46rpx 30rpx;
  border-radius: 16rpx;
  padding: 10rpx 0;
  // box-shadow:2rpx 2rpx 2rpx #000;

}
</style>