<template>
  <view class="content">
    <u-swiper :list="list3" indicator indicatorMode="line" circular></u-swiper>
    <view class="tips"> 欢迎您！ </view>
  </view>
</template>

<script>
import { loginApi } from "@/components/api/api.js";

export default {
  components: {},
  computed: {
    disabled() {
      return false;
    },
  },
  data() {
    return {
      list: [],
      list3: [
        "https://cdn.uviewui.com/uview/swiper/swiper3.png",
        "https://cdn.uviewui.com/uview/swiper/swiper2.png",
        "https://cdn.uviewui.com/uview/swiper/swiper1.png",
      ],
      indexList: [{ title: 1, content: "4444444444" }, {}], //{}, {}
    };
  },
  async onShow() {},
  methods: {
    detail(item) {
      uni.setStorageSync("myName", item);
      uni.navigateTo({
        url: `/pages/detail/index`,
      });
    },
  },
};
</script>

<style  scoped>
.content_box {
  padding: 30rpx;
}
.item {
  display: flex;
  padding: 20rpx;
  font-size: 26rpx;
  border-bottom: 1rpx solid #e4e7ed;
}

.title-wrap {
  width: 100%;
}

.checkbox {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.wrap {
  padding: 12px;
}

.demo-layout {
  height: 25px;
  border-radius: 4px;
}

.bg-purple {
  background: #ced7e1;
}

.bg-purple-light {
  background: #e5e9f2;
}

.bg-purple-dark {
  background: #99a9bf;
}

text {
  font-size: 24rpx;
}

.tips {
  font-size: 32rpx;
  text-align: center;
  margin: 60rpx;
  letter-spacing: 10rpx;
}
</style>