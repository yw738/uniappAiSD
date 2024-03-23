<template>
  <view class="login">
    <view class="content">
      <!-- 表单 -->
      <view class="logo_box">
        <view class="bg">
          <u--image class="img" :showLoading="true" :src="src" width="317rpx" height="214rpx"></u--image>
        </view>
      </view>
      <view class="btnBox">
        <u-button type="success" size="normal" class="custom-style" @click="submit">
          <text>一键快捷登录</text>
        </u-button>
      </view>
    </view>
  </view>
</template>
<script>
/**
 * 登录
*/
import { loginApi } from "@/components/api/api.js";
import logoPng from "@/static/img/login.png"; //button
export default {
  data() {
    return {
      //logo图片 base64
      phoneData: "", //用户/电话
      passData: "", //密码
      form: {
        password: "",
        username: "",
      },
      isRotate: false, //是否加载旋转
      isFocus: true, // 是否聚焦
      show: false,

      src: logoPng
    };
  },

  onShow() {
    // 账号
    Object.assign(this.form, {
      password: "123456",
      username: "user",
    });
  },
  methods: {
    submit() {
      return
      if (!this.form.username.length) {
        uni.showToast({
          icon: "none",
          position: "bottom",
          title: "用户名不能为空",
        });
        return;
      }
      if (!this.form.password.length) {
        uni.showToast({
          icon: "none",
          position: "bottom",
          title: "密码不正确",
        });
        return;
      }

      loginApi
        .login({
          username: this.form.username,
          password: this.form.password,
        })
        .then((res) => {
          if (res.data) {
            uni.switchTab({
              url: "/pages/employment/index",
            });
          }

          return;
        });
    }
  },
};
</script>

<style lang="scss" scoped>
.login {
  background: #F1F5FB;
  height: 100vh;
  color: #fff;
  overflow: hidden;
}

.custom-style {
  background: #0CB78C;
  height: 88rpx;
}

.login .btnBox {
  padding: 0 30rpx;

  text {
    color: #fff !important;
    font-size: 44rpx;
    line-height: 44rpx;
    letter-spacing: 2rpx;
  }
}

.logo_box {
  // border: 1px solid red;
  // padding: 260rpx 230rpx 164rpx;
  padding: 260rpx 0 164rpx;
  display: flex;
  justify-content: center;
  align-items: center;

  .bg {
    height: 290rpx;
    width: 290rpx;
    background: #EEEEEE;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

  }

  .img {
    position: relative;
    left: -44rpx;
    // padding-right: 44rpx;
  }
}
</style>