<template>
    <view class="content">
        <view>
            <view class="topLine" :style="{ height: topHight + 'rpx' }"></view>
            <u-navbar :fixed="false" bgColor="#fff" title="绘画记录" :titleStyle="{ fontSize: '36rpx', color: '#42464A' }"
                :safeAreaInsetTop="false" @leftClick="leftClick">
                <view class="u-nav-slot" slot="right">
                    <u-icon name="trash" @click="showModal" color="#5F6268" size="22"></u-icon>
                </view>
            </u-navbar>
        </view>
        <!-- 列表 -->
        <scroll-view class="listBox" :style="{ height: `calc(100vh - 88rpx - ${topHight}rpx)` }" scroll-y="true">
            <!-- <view class="item" v-for="(v, i) in list" :key="i" @click="toDetail(v)"> -->
            <view class="item" v-for="(v, i) in 20" :key="i" @click="toDetail(v)">
                <view class="textOverflow"><text class="tit ">图片描述：一只当狗的皇帝，带着皇一只当狗的皇帝，带着皇冠，周围</text></view>
                <view><text class="time">创建时间：2023-12-12</text></view>
            </view>
        </scroll-view>

        <u-toast ref="uToast"></u-toast>

        <!-- 清除 -->
        <u-modal :show="show" @confirm="confirm" title="清除提醒" :content="content" ref="uModal" showCancelButton
            @cancel="() => show = false" :asyncClose="true"></u-modal>
    </view>
</template>
  
<script>
/**
 * 绘画记录
*/
import { loginApi } from "@/components/api/api.js";
import topMixin from "@/utils/topMixin.js"
import sharePng from "@/static/img/share.png"; //

export default {
    components: {},
    mixins: [topMixin],
    data() {
        return {
            sharePng: sharePng,

            list: [{ time: '', txt: '' }, {}],

            // 清除
            show: false,
            content: '绘画记录清除后无法恢复，请确认是否清除？',
        };
    },
    async onShow() {

        this.getList();
    },
    computed: {

    },
    methods: {
        leftClick() {
            uni.navigateBack();
        },
        getList() {
            let a = uni.getStorageSync("myName");
        },

        // 去详情
        toDetail() {
            uni.navigateTo({
                url: '/pages/huihua/detail'
            })
        },

        // 全部删除
        showModal() {
            this.show = true;
        },
        confirm() {
            this.show = false;
            this.$refs.uToast.show({
                type: 'success',
                message: "清除成功",
            })
        },

    },
};
</script>
  
<style  lang="scss" scoped>
.content {
    box-sizing: border-box;
    background-color: #fff;
}

.listBox {
    padding: 18rpx 30rpx;
    box-sizing: border-box;
}

.item {
    width: 690rpx;
    height: 134rpx;
    background: #F7F7F7;
    border-radius: 4rpx;
    padding: 20rpx;
    margin-bottom: 18rpx;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-content: flex-start;

    .tit {
        font-weight: 500;
        font-size: 28rpx;
        color: #343434;
        line-height: 40rpx;
        text-align: left;
        font-style: normal;
    }

    .time {
        font-weight: 400;
        font-size: 24rpx;
        color: #939393;
        line-height: 33rpx;
        text-align: left;
        font-style: normal;
    }


}
</style>