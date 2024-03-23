<template>
  <view class="container content">
    <u-navbar :fixed="false" bgColor="transparent" title="会话" :titleStyle="{ fontSize: '36rpx', color: '#42464A' }"
      :safeAreaInsetTop="false">
      <view class="u-nav-slot" slot="left">
        <u-icon :name="vipPng" size="24"></u-icon>
      </view>
      <view class="u-nav-slot" slot="right">
        <view class="flex flexCen">
          <u-icon style="margin-right:48rpx" @click="showAdModal()" :name="mfPng" size="24"></u-icon>
          <u-icon :name="clearPng" @click="showModal()" size="24"></u-icon>
        </view>
      </view>
    </u-navbar>

    <view class="errorBox flex flexCen">
      <view>
        <text>当前剩余免费次（{{ description }}）</text>
      </view>
      <view class="flex flexCen" @click="toVip()">
        <text style="margin-right: 20rpx;">去升级</text>
        <u-icon name="arrow-right" color="#F52F3E" size="14"></u-icon>
      </view>
    </view>


    <scroll-view :scroll-top="scrollTop" scroll-y="true" class="msgBox">
      <view class="item">
        <view class="flexL">
          <view class="left">
            <u--image class="msgTopimg" :showLoading="true" :src="msgTopPng" width="195rpx" height="77rpx"></u--image>
            <text class="txt">H i～欢迎使用AI助手，请问有什么可以？</text>
          </view>
          <view class="time"> <text>09月01日 16:29</text>
          </view>
        </view>
      </view>
      <!-- 内容 -->
      <view class="item" v-for="(v, i) in msgList" :key="i">
        <view class="flexL" v-if="i % 2">
          <view class="left">
            <text class="txt">你好啊，请问有什么问题需要我解答的吗？</text>
          </view>
          <view class="time"> <text>09月01日 16:29</text>
          </view>
        </view>
        <view class="flexR" v-else>
          <view class="right">
            <text
              class="txt">哈喽，小222222你好啊，请问有什么问题需要我解答的吗？222222222哈喽，小22222222你好啊，请问有什么问题需要我解答的吗你好啊，请问有什么问题需要我解答的吗？</text>
          </view>
          <view class="time"> <text>09月01日 16:29</text>
          </view>
        </view>
      </view>

    </scroll-view>

    <!-- 输入 -->
    <view class="inputBox flex flexCen">
      <view class="inputStyle">
        <u--input placeholder="请输入内容" border="none" clearable></u--input>
      </view>
      <u-icon @click="sendFn()" :name="sendPng" size="18" style="margin-left:23rpx"></u-icon>
    </view>


    <!-- 清除 -->
    <u-modal :show="show" @confirm="confirm" title="清除提醒" :content="content" ref="uModal" showCancelButton
      @cancel="() => show = false" :asyncClose="true"></u-modal>

    <!-- 看广告 -->
    <u-modal @confirm="adConfirm" confirmText="换一个广告" cancelText="确定退出" showCancelButton @cancel="() => adShow = false"
      :title="adTitle" :show="adShow" width="630rpx" closeOnClickOverlay>
      <view>
        <view class="adBox"></view>
        <view class="adBtn">
          <u-button type="primary" @click="adConfirm" shape="circle" class="btnStyle" size="normal">
            <text>继续观看</text>
          </u-button>
        </view>
      </view>
    </u-modal>
  </view>
</template>

<script>
/**
 * 对话 || 消息
*/
import { loginApi } from "@/components/api/api.js";
import vipPng from "@/static/img/vip.png"; //
import clearPng from "@/static/img/claer.png"; //
import mfPng from "@/static/img/mf.png"; //
import sendPng from "@/static/img/send.png"; //
import msgTopPng from "@/static/img/msg_top.png"; //

export default {
  components: {},
  data() {
    return {
      // 图片
      mfPng: mfPng,
      clearPng: clearPng,
      vipPng: vipPng,
      sendPng: sendPng,
      msgTopPng: msgTopPng,

      description: '2',

      scrollTop: 0,

      msgList: [
        {}, {}, {}, {}, {}, {}
      ],
      // 清除
      show: false,
      content: '对话记录清除后无法恢复，请确认 是否清除？',

      // 广告
      adShow: false,
      adTitle: ''
    };
  },
  async onShow() {
    this.getList();
  },
  computed: {

  },
  methods: {
    getList() {
      let a = uni.getStorageSync("myName");
      this.obj = a || {};
    },
    toVip() {
      console.log('去升级')
    },
    sendFn() {
      console.log('发送')
    },

    showModal() {
      this.show = true;
    },
    confirm() {
      setTimeout(() => {
        // 3秒后自动关闭
        this.show = false;
      }, 1000)
    },

    showAdModal() {
      this.adShow = true;
      // let timeS = 30;
      let timeS = 5;
      let timer;
      if (timeS > 0) {
        this.adTitle = `再看${timeS}秒可领取免费次数`;
        timer = setInterval(() => {
          timeS = timeS - 1;
          this.adTitle = `再看${timeS}秒可领取免费次数`;
          if (timeS <= 0) clearInterval(timer);
        }, 1000)
      }
    },
    adConfirm() {

    },
  },
};
</script>

<style  lang="scss" scoped>
.text {
  font-size: 24rpx;
  padding: 30rpx;
}

.tit {
  font-size: 48rpx;
  text-align: center;
  margin-bottom: 40rpx;
}

.content {
  box-sizing: border-box;
  background-color: #F1F5FB;
  height: calc(100vh - 106rpx);
  overflow: scroll;
}

.errorBox {
  height: 72rpx;
  background: #FFF2F5;
  padding: 0 32rpx;

  text {
    color: #F52F3E;
    font-size: 28rpx;
    line-height: 40rpx;
  }
}

.msgBox {
  // border: 1px solid red;
  box-sizing: border-box;
  height: calc(100vh - 256rpx - 84rpx);
  padding: 30rpx 24rpx;

  .msgTopimg {
    margin-bottom: 20rpx;
  }


  .left {
    max-width: 556rpx;
    width: auto;
    height: auto;
    background: #FFFFFF;
    border-radius: 20rpx 20rpx 20rpx 0rpx;
    padding: 15rpx 20rpx;
    box-sizing: border-box;
  }

  .txt {
    font-size: 28rpx;
    line-height: 40rpx;
    color: #3B3B3B;
    width: 100%;
  }

  .time {
    text {
      font-weight: 400;
      font-size: 24rpx;
      color: #9D9FA3;
      line-height: 33rpx;
    }

    margin-top: 10rpx;
  }

  .item {
    margin-bottom: 40rpx;
    // border: 1px solid red;
  }


  .right {
    max-width: 556rpx;
    width: auto;
    height: auto;
    background: #07B67A;
    border-radius: 20rpx 20rpx 0rpx 20rpx;
    padding: 15rpx 20rpx;
    box-sizing: border-box;

    .txt {
      color: #fff;
    }
  }
}

.inputBox {
  height: 88rpx;
  padding: 14rpx 24rpx;
  background: #fff;
  position: fixed;
  bottom: 100rpx;
  left: 0;
  width: 100vw;

}

.inputStyle {
  background: #F4F4F4;
  padding: 10rpx 20rpx;
  width: 100%;
  border-radius: 10rpx;
}

// 广告
.adBox {
  height: 288rpx;
  width: 630rpx;
  border: 1px solid red;
}

.adBtn {
  padding: 28rpx 48rpx 0;

  text {
    color: #fff;
    font-size: 32rpx;
    font-size: 32rpx;
    line-height: 48rpx;
  }

  .btnStyle {
    background: #2C68FF;
    height: 88rpx;
  }
}

// ---------------------------------------
</style>