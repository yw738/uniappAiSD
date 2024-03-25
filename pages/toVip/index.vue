<template>
  <view class="content">
    <view class="userBg">
      <view class="topLine" :style="{ height: topHight + 'rpx' }"></view>
      <u-navbar :fixed="false" bgColor="transparent" title="开通会员" :titleStyle="{ fontSize: '36rpx', color: '#42464A' }"
        :safeAreaInsetTop="false" @leftClick="leftClick">
      </u-navbar>
    </view>
    <view class="topTips"><text>高级会员升级解锁全部权限和功能</text></view>

    <view class="imgBox">
      <view style="margin-bottom:10rpx"><u--image :src="vip1Png" width="690rpx" height="136rpx" /></view>
      <view class="flexStart">
        <u--image style="margin-right:10rpx" :src="vip2Png" width="340rpx" height="136rpx" />
        <u--image :src="vip3Png" width="340rpx" height="136rpx" />
      </view>
    </view>

    <!-- 选择风格 -->
    <view class="labelTit" style="padding:0rpx 30rpx">
      <text>会员套餐</text>
    </view>

    <view class="vipListBox">
      <!--  -->
      <scroll-view :style="{ height: `calc(100vh - 724rpx - ${topHight}rpx)` }" scroll-y="true" class="msgBox">
        <view class="item flexBetween" @click="listActive = i" :class="listActive == i ? 'active' : ''"
          v-for="(v, i) in list" :key="i">
          <view class="flexStart">
            <view class="img"><u-icon :name="vipPng" size="24"></u-icon></view>
            <view class="txt">永久会员</view>
          </view>
          <view class="flexStart">
            <view class="money1">¥38</view>
            <view class="money2">¥68</view>
            <view v-if="listActive == i" class="quanActive flexCenter"><u-icon name="checkbox-mark" color="#fff"
                size="16"></u-icon></view>
            <view v-else class="quan"></view>

          </view>
        </view>
      </scroll-view>
    </view>


    <!-- 立即生成按钮 -->
    <view class="btnBox" :style="{ bottom: bottomHight + 'rpx' }">
      <view><text class="tips">开通会员代表接受用户协议，会员自动续费，可随时取消</text></view>
      <u-button type="success" size="normal" class="custom-style" @click="submit">
        <text>立即开通</text>
      </u-button>
    </view>

    <u-toast ref="uToast"></u-toast>
    <!-- <view class="bottomLine" :style="{ height: bottomHight + 'rpx' }"></view> -->
  </view>
</template>

<script>
/**
 * 开通vip
*/
import { loginApi } from "@/components/api/api.js";
import topMixin from "@/utils/topMixin.js"
import vipPng from "@/static/img/vip.png"; //
import vip1Png from "@/static/img/vip1.png"; //
import vip2Png from "@/static/img/vip2.png"; //
import vip3Png from "@/static/img/vip3.png"; //

export default {
  computed: {
    vipPng: () => vipPng,
    vip1Png: () => vip1Png,
    vip2Png: () => vip2Png,
    vip3Png: () => vip3Png,
  },
  mixins: [topMixin],
  data() {
    return {
      list: [{
        src: 'https://cdn.uviewui.com/uview/album/1.jpg',
        label: '卡通',
      }, {
        src: 'https://cdn.uviewui.com/uview/album/1.jpg',
        label: '卡通2',
      }, {
        src: 'https://cdn.uviewui.com/uview/album/1.jpg',
        label: '卡通3',
      }, {
        src: 'https://cdn.uviewui.com/uview/album/1.jpg',
        label: '卡通4',
      }],
      listActive: 0
    };
  },
  async onShow() {
    let app = uni.getSystemInfoSync()

    this.getList();
  },
  methods: {
    leftClick() {
      uni.navigateBack();
    },
    getList() {
      let a = uni.getStorageSync("myName");
      this.obj = a || {};
    },
    // 开通
    submit() {
      // this.$refs.uToast.show({
      //   type: 'loading',
      //   title: '正在开通',
      //   message: "正在开通",
      //   iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/loading.png',
      //   complete() {

      //   }
      // })
      this.$refs.uToast.show({
        type: 'success',
        message: "开通成功",
      })
      // uni.navigateTo({
      //   url: '/pages/huihua/detail'
      // })

    },

  },
};
</script>

<style  lang="scss" scoped>
.userBg {
  background: radial-gradient(52% 101% at 16% 6%, rgba(255, 97, 40, 0.12) 0%, rgba(255, 255, 255, 0) 100%);
}

.text {
  font-size: 24rpx;
  padding: 30rpx;
}

.content {
  box-sizing: border-box;
  // background-color: #fff;
  height: 100vh;
  background: #F1F5FB;
}

// ---------------------------------------
.topTips {
  padding: 16rpx 30rpx;

  text {
    font-weight: 500;
    font-size: 32rpx;
    color: #42464A;
    line-height: 45rpx;
    text-align: left;
    font-style: normal;
  }
}

.imgBox {
  padding: 0 30rpx 60rpx;
}

// 会员套餐
.vipListBox {
  padding: 24rpx 30rpx 0;

  .item {
    width: 690rpx;
    height: 110rpx;
    background: #FFFFFF;
    border-radius: 12rpx;
    border: 1rpx solid #DEDEDE;
    padding: 0 20rpx 0 30rpx;
    margin-bottom: 20rpx;
    box-sizing: border-box;
  }

  .item.active {
    border: 4rpx solid #0CB78C;
  }

  .txt {
    font-weight: 400;
    font-size: 32rpx;
    color: rgba(0, 0, 0, 0.85);
    line-height: 45rpx;
    margin-left: 24rpx;
  }

  .money1 {
    font-weight: 600;
    font-size: 36rpx;
    color: rgba(0, 0, 0, 0.85);
    line-height: 50rpx;
  }

  .money2 {
    font-weight: 400;
    font-size: 28rpx;
    color: rgba(176, 176, 176, 0.85);
    line-height: 40rpx;
    margin: 0 14rpx;
    text-decoration: line-through;
  }

  .quan {
    width: 40rpx;
    height: 40rpx;
    box-sizing: border-box;
    border: 2rpx solid #D9D9D9;
    border-radius: 50%;
  }

  .quanActive {
    width: 40rpx;
    height: 40rpx;
    background: #0CB78C;
    border-radius: 50%;
  }
}


// 立即生成
.btnBox {
  padding: 0 30rpx;
  // border: 1px solid red;
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;

  text {
    font-size: 32rpx;
    color: #FFFFFF;
    line-height: 45rpx;
    letter-spacing: 2rpx;
  }

  .tips {
    font-weight: 400;
    font-size: 24rpx;
    color: rgba(0, 0, 0, 0.85);
    line-height: 33rpx;
    text-align: right;
    font-style: normal;
  }
}

.custom-style {
  background: #0CB78C;
  height: 88rpx;
  border: none;
  margin: 12rpx 0;
}
</style>