new Vue({
    el: "#root",
    data: {
        name: "",
        showName: "初始化加载的时候，通过 v-model 标签赋值"
    },
    methods:{
        loginName:function () {
            this.name = this.$refs.name.value;
        }
    }
});