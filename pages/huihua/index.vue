<template>
  <view class="content">
    <view>
      <view class="topLine" :style="{ height: topHight + 'rpx' }"></view>
      <u-navbar :fixed="false" bgColor="#fff" title="绘画" :titleStyle="{ fontSize: '36rpx', color: '#42464A' }"
        :safeAreaInsetTop="false">
        <view class="u-nav-slot" slot="left">
        </view>
        <view class="u-nav-slot" slot="right">
          <view @click="toHhList()"><text>我的绘画</text></view>
        </view>
      </u-navbar>

      <!-- 提示 -->
      <view class="errorBox flex flexCen">
        <view>
          <text>当前剩余免费次（{{ description }}）</text>
        </view>
        <view class="flex flexCen" @click="toVip()">
          <text style="margin-right: 20rpx;">去升级</text>
          <u-icon name="arrow-right" color="#F52F3E" size="14"></u-icon>
        </view>
      </view>
    </view>

    <!-- 输入框 -->
    <view class="inputBox flex flexCen">
      <view class="inputStyle">
        <u--textarea style="background: #F7F7F7;height:240rpx" v-model="value1" border="none"
          placeholder="请输入图片画面描述，例如：一只在天空飞行"></u--textarea>
        <text class="clearBtn" @click="clearTxtareaFn">清空</text>
      </view>
    </view>
    <!-- 图片大小 -->
    <view class="labelTit">
      <text>图片大小</text>
    </view>
    <view class="scrollBox">
      <u-scroll-list :indicator="false">
        <view class="scroll-list" style="">
          <view class="item" @click="listActive = index" :class="listActive == index ? 'active' : ''"
            v-for="(item, index) in list" :key="index">
            <view class="box flexCenter">
              <view :style="{ width: item.w + 'rpx', height: item.h + 'rpx' }"></view>
            </view>
            <text class="txt">{{ item.valueType }}</text>
          </view>
        </view>
      </u-scroll-list>
    </view>

    <!-- 选择风格 -->
    <view class="labelTit">
      <text>选择风格</text>
    </view>
    <view class="scrollBox">
      <u-scroll-list :indicator="false">
        <view class="scroll-list" style="">
          <view class="item2" @click="listActive2 = index" :class="listActive2 == index ? 'active' : ''"
            v-for="(item, index) in list2" :key="index">
            <view class="imgBox flexCenter">
              <u--image :showLoading="true" :src="item.src" width="116rpx" height="116rpx"></u--image>
            </view>
            <text class="txt">{{ item.label }}</text>
          </view>
        </view>
      </u-scroll-list>
    </view>

    <!-- 立即生成按钮 -->
    <view class="btnBox">
      <u-button type="success" size="normal" class="custom-style" @click="submit">
        <text>立即生成</text>
      </u-button>
    </view>

    <u-toast ref="uToast"></u-toast>
  </view>
</template>

<script>
/**
 * 绘画
*/
import { loginApi } from "@/components/api/api.js";
import topMixin from "@/utils/topMixin.js"

export default {
  components: {},
  mixins: [topMixin],
  data() {
    return {
      description: '2',
      // 
      value1: '',//输入框的值
      list: [{
        w: 50,
        h: 50,
        valueType: '1:1',
      }, {
        w: 38,
        h: 50,
        valueType: '3:4',
      }, {
        w: 28,
        h: 50,
        valueType: '9:16',
      }, {
        w: 50,
        h: 38,
        valueType: '4:3',
      }, {
        w: 50,
        h: 28,
        valueType: '16:9',
      }],
      listActive: 0,

      list2: [{
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
      listActive2: 0
    };
  },
  async onShow() {
    let app = uni.getSystemInfoSync()

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
    // to 绘画记录
    toHhList() {
      uni.navigateTo({
        url: '/pages/huihua/hhlist'
      })
    },
    // 清空
    clearTxtareaFn() {
      this.value1 = '';
    },
    // 生成绘画
    submit() {
      console.log('提交');
      this.$refs.uToast.show({
        type: 'loading',
        title: '正在绘画',
        message: "正在绘画",
        iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/loading.png',
        complete() {
          uni.navigateTo({
            url: '/pages/huihua/detail'
          })
        }
      })
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
  background-color: #fff;
}



.inputBox {
  // height: 88rpx;
  padding: 14rpx 30rpx;
  background: #fff;
  width: 100vw;

  .inputStyle {
    background: #F7F7F7;
    // padding: 20rpx;
    width: 100%;
    border-radius: 4rpx;
    position: relative;

    text {
      font-size: 26rpx;
    }
  }

  .clearBtn {
    width: 52rpx;
    height: 37rpx;
    font-weight: 400;
    font-size: 26rpx;
    color: rgba(51, 51, 51, 0.85);
    line-height: 37rpx;
    position: absolute;
    right: 16rpx;
    bottom: 8rpx;
  }
}

.labelTit {
  padding: 30rpx;

  text {
    font-weight: 500;
    font-size: 32rpx;
    color: #42464A;
    line-height: 45rpx;
    text-align: left;
    font-style: normal;
  }
}

// ---------------------------------------
// 图片大小
.scrollBox {
  padding: 0 30rpx;
  // border: 1px solid red;
}

.scroll-list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  // border: 1px solid red;

  .item {
    // border: 1px solid red;
    box-sizing: border-box;
    height: 116rpx;
    width: 116rpx;
    border-radius: 4rpx;
    border: 1rpx solid #F3F3F3;
    margin-right: 20rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .item:last-child,
  .item2:last-child {
    margin-right: 0;
  }

  .item.active {
    background: rgba(12, 183, 140, 0.06);
    border: 2rpx solid #0CB78C;

    .txt {
      color: #0CB78C;
    }

    .box view {
      background: rgba(12, 183, 140, 0.06);
      border: 2rpx solid #0CB78C;
    }
  }

  .box {
    height: 74rpx;

    view {
      height: 50rpx;
      width: 50rpx;
      background: #E3E3E3;
      border-radius: 4rpx;
    }
  }

  .txt {
    font-weight: 400;
    font-size: 28rpx;
    color: #42464A;
    line-height: 34rpx;
    text-align: center;
  }
}

// 选择风格
.item2 {
  box-sizing: border-box;
  margin-right: 20rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 2rpx solid #fff;

  .imgBox {
    height: 116rpx;
    width: 116rpx;
    border-radius: 4rpx;
  }

  .txt {
    font-weight: 400;
    font-size: 32rpx;
    color: #42464A;
    line-height: 45rpx;
    margin-top: 10rpx;
  }
}

.item2.active {
  border: 2rpx solid #0CB78C;

  .txt {
    color: #0CB78C;
  }
}

// 立即生成
.btnBox {
  padding: 12rpx 30rpx;
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
}

.custom-style {
  background: #0CB78C;
  height: 88rpx;
  border: none;
}
</style>