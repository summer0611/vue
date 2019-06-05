
new Vue({
    el: "#root",
    data: {
        num : 0,
        a : 0,
        b : 0
    },
    methods: {
        methodClick: function () {
            console.log("methodClick")
            return this.a++;
        }
    },
    computed: {
        computedClick: function () {
            console.log("computedClick")
            return this.b++;
        }
    }
});