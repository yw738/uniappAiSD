// 1. 创建mixin.js并导出混入对象
export default {
    data() {
        return {
            topHight: '0'
        }
    },
    async onShow() {
        let app = uni.getSystemInfoSync()
        this.topHight = app.statusBarHeight;
    },
    beforeCreate() {},
    created() {},
    beforeMount() {},
    mounted() {},
    methods: {},

}

//   // Vue组件使用
//   <script>
//   // 2. 引入mixin.js
//   import mixin from '../mixin'
//   export default {
//     // 3. 使用混入对象
//     mixins: [mixin],
//     mounted() {
//       console.log(this.str);
//     }
//   };
//   </script>