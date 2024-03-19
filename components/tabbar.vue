<template>
  <view>
    <u-tabbar
      v-if="isAdmin"
      :midButton="false"
      v-model="current"
      :list="teaList"
      :mid-button="true"
    />
    <u-tabbar
      v-if="!isAdmin"
      :midButton="false"
      v-model="current"
      :list="studentList"
      :mid-button="true"
    />
  </view>
</template>

<script>
    // :bg-color="bgColor"
    import {
        loginApi
    } from "@/components/api/api.js";

    export default {
        data() {
            return {
                bgColor: "#e6effb",
                teaList: [{
                    iconPath: "man-add",
                    selectedIconPath: "man-add-fill",
                    text: "毕业生管理",
                    customIcon: false,
                    midButton: false,
                    pagePath: "/pages/employment/index",
                }, {
                    iconPath: "checkmark-circle",
                    selectedIconPath: "checkmark-circle-fill",
                    text: "招聘信息",
                    customIcon: false,
                    pagePath: "/pages/recruitInfo/index",
                }, {
                    iconPath: "file-text",
                    selectedIconPath: "file-text-fill",
                    text: "专业管理",
                    customIcon: false,
                    pagePath: "/pages/subject/index",
                }, {
                    iconPath: "calendar",
                    selectedIconPath: "calendar-fill",
                    text: "班级管理",
                    customIcon: false,
                    pagePath: "/pages/sysClass/index",
                }, ],
                current: 0,
                studentList: [{
                        iconPath: "account",
                        selectedIconPath: "account-fill",
                        text: "个人信息",
                        customIcon: false,
                        pagePath: "/pages/studentInfo/index",
                    },

                    {
                        iconPath: "checkmark-circle",
                        selectedIconPath: "checkmark-circle-fill",
                        text: "招聘信息",
                        customIcon: false,
                        pagePath: "/pages/recruitInfo/index",
                    },
                ],
            };
        },
        onLoad() {
            loginApi.demo().then((res) => {});
        },
        computed: {
            isAdmin() {
                return getApp().globalData.userObj.userType === "admin";
            },
        },
        methods: {
            change(index) {
                this.current = index;
            },
        },
    };
</script>

<style lang="scss">
    .box {
        height: 250rpx;
        background: red;
    }
    
     ::v-deep .u-tabbar__content__circle__border {
        display: none !important;
    }
</style>