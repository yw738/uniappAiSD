<template>
    <view class="content">
        <view>
            <view class="topLine" :style="{ height: topHight + 'rpx' }"></view>
            <u-navbar :fixed="false" bgColor="#fff" title="图片详情" :titleStyle="{ fontSize: '36rpx', color: '#42464A' }"
                :safeAreaInsetTop="false" @leftClick="leftClick">
                <view class="u-nav-slot" slot="right">
                    <u-icon name="trash" @click="del" color="#5F6268" size="22"></u-icon>
                </view>
            </u-navbar>
        </view>
        <!-- 图片 -->
        <view class="imgBox">
            <scroll-view :style="{ height: `calc(100vh - 232rpx - ${topHight}rpx)` }" scroll-y="true">
                <u--image :showLoading="true" :src="'https://cdn.uviewui.com/uview/album/1.jpg'" width="690rpx"
                    height="1380rpx"></u--image>
            </scroll-view>
        </view>

        <!-- 按钮 -->
        <view class="btnBox flexStart">
            <u-button shape="circle" size="normal" @click="saveToAlbum">
                <text>保存到相册</text>
            </u-button>
            <u-button type="success" shape="circle" size="normal" class="customStyle2" @click="initImg">
                <text>重新生成</text>
            </u-button>
            <u-button type="success" shape="circle" size="normal" class="customStyle3" @click="shareImg">
                <u-icon :name="sharePng" size="18"></u-icon>
                <text style="margin-left:6rpx">分享</text>
            </u-button>
        </view>

        <u-toast ref="uToast"></u-toast>
    </view>
</template>
  
<script>
/**
 * 绘画 详情
*/
import { loginApi } from "@/components/api/api.js";
import topMixin from "@/utils/topMixin.js"
import sharePng from "@/static/img/share.png"; //
import permision from "@/js_sdk/wa-permission/permission.js"

export default {
    components: {},
    mixins: [topMixin],
    data() {
        return {
            sharePng: sharePng,
        };
    },
    async onShow() {
        this.getList();
    },
    computed: {

    },
    methods: {
        // vue的method里编写如下代码
        async requestAndroidPermission(permisionID) {
            var result = await permision.requestAndroidPermission(permisionID)
            var strStatus
            if (result == 1) {
                strStatus = "已获得授权"
            } else if (result == 0) {
                strStatus = "未获得授权"
            } else {
                strStatus = "被永久拒绝权限"
            }
            // uni.showModal({
            //     content: permisionID + strStatus,
            //     showCancel: false
            // });
            return result
        },
        getList() {
            let a = uni.getStorageSync("myName");
        },
        // 删除图片
        del() {
            this.$refs.uToast.show({
                type: 'success',
                message: "删除成功",
            })
            console.log('del')
            this.leftClick();
        },
        leftClick() {
            uni.navigateBack();
        },
        initImg() {
            console.log('提交');
            this.$refs.uToast.show({
                type: 'loading',
                title: '正在绘画',
                message: "正在绘画",
                iconUrl: 'https://cdn.uviewui.com/uview/demo/toast/loading.png',
                complete() {
                    uni.navigateBack();
                }
            })
        },

        // 保存图片 先授权 ok
        async saveToAlbum() {
            // 授权
            try {
                // 相册授权
                let res = await this.requestAndroidPermission('android.permission.WRITE_EXTERNAL_STORAGE');
                if (res == 1) {
                    this.saveImage();
                } else {
                    uni.hideLoading()
                    uni.showModal({
                        title: '授权失败',
                        content: '请前往设置页手动授权该权限',
                        showCancel: false,
                        confirmText: '去设置',
                        success: res => {
                            if (res.confirm) {
                                // 用户点击确定，跳转到设置页
                                uni.openSetting({
                                    success: () => {
                                        uni.hideLoading()// 设置页打开成功后的操作
                                    }
                                });
                            }
                        }
                    });
                }
            } catch (err) {
                this.$refs.uToast.show({
                    type: 'error',
                    message: "授权失败",
                })
            }
        },
        saveImage() {
            let url = 'https://cdn.uviewui.com/uview/album/1.jpg';
            uni.downloadFile({
                url: url,
                success: (res) => {
                    console.log(res)
                    // if (res.statusCode === 200) {
                    uni.saveImageToPhotosAlbum({
                        filePath: res.tempFilePath,
                        success: () => {
                            this.$refs.uToast.show({
                                type: 'success',
                                message: "保存成功",
                            })
                        },
                        fail: () => {
                            this.$refs.uToast.show({
                                type: 'error',
                                message: "保存失败",
                            })
                        }
                    });
                },
                fail: () => {
                    this.$refs.uToast.show({
                        type: 'error',
                        message: "下载失败",
                    })
                }
            });
        },
        // 分享图片
        shareImg() {

        }
    },
};
</script>
  
<style  lang="scss" scoped>
.content {
    box-sizing: border-box;
    background-color: #fff;
}

.imgBox {
    padding: 0 30rpx;
}

// 立即生成
.btnBox {
    padding: 28rpx 30rpx;
    background-color: #fff;
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    justify-content: space-between;
}

.customStyle2 {
    background: #0CB78C;
    height: 88rpx;
    border: none;
    margin: 0 16rpx;

    text {
        font-size: 32rpx;
        color: #FFFFFF;
        line-height: 45rpx;
        letter-spacing: 2rpx;
    }
}

.customStyle3 {
    background: #FFFFFF;
    border: 1rpx solid rgba(0, 0, 0, 0.15);

    text {
        font-size: 32rpx;
        color: #0CB78C;
        line-height: 45rpx;
        letter-spacing: 2rpx;
    }
}
</style>