<script>
export default {
  data() {
    return {};
  },

  globalData: {
    userInfo: null,
    encryptedData: null,
    iv: null,
  },
  onLaunch: function () { },
  methods: {},
};
</script>

<style lang="scss">
/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
@import "@/uni_modules/uview-ui/index.scss";
</style>

<style lang="scss">
/**app.css**/

.container {
  box-sizing: border-box;
  background-color: #F1F5FB;
  /* font-family: PingFangSC-Light, helvetica, "Heiti SC"; */
}

view,
image,
text,
navigator {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

view,
text {
  font-family: PingFangSC-Light, helvetica, "Heiti SC";
  font-size: 29rpx;
  color: #333;
}

/*隐藏滚动条*/
::-webkit-scrollbar {
  width: 0;
  height: 0;
  color: transparent;
}

/*  */

.home_box {
  background: #fff;
}

.head {
  /* height: 30rpx; */
  /* line-height: 30rpx; */
  padding: 20rpx;
}

.head .tit {
  font-size: 30rpx;
  color: #121212;
  letter-spacing: 2rpx;
  font-weight: bold;
}

.home_box .more span {
  margin-right: 06rpx;
  font-size: 14rpx;
}

.flex {
  display: flex;
}

.w100 {
  width: 100%;
}

.flexCen {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.flexCenter {
  display: flex;
  justify-content: center;
  align-items: center;
}

.flexStart {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.flexR {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
}

.flexL {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.textOverflow {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.index_border {
  background: #f8f8f9;
  border-top: 01rpx solid #f4f4f4;
  border-bottom: 01rpx solid #f4f4f4;
  height: 20rpx;
}

.list_box a {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 05rpx;
}

/* -------------------------------------------- */
// 顶部安全距离
.topLine {
  box-sizing: border-box;
  /* border: 1px solid red; */
}

// 提示 剩余免费次数 
.errorBox {
  height: 72rpx;
  background: #FFF2F5;
  padding: 0 32rpx;

}

.errorBox text {
  color: #F52F3E;
  font-size: 28rpx;
  line-height: 40rpx;
}
</style>
