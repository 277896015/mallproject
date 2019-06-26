<template>
    <div class="flexcolumn">
        <div @click.prevent="myinfo()"><i class="iconfont icon-yonghu" ></i>个人信息</div>
        <div @click.privent="collectlist()"><i class="iconfont icon-shoucang"></i>我的收藏</div>
        <div @click.privent="orderlist()"> <i class="iconfont icon-order_icon"></i>我的订单</div>
       
        <div @click.prevent="myaddress()"><i class="iconfont icon-unie65c"></i>收货地址</div>
        <div @click.prevent="tuichu()">退出</div>
        
    </div>
</template>
<script>
    export default {
        name: 'mine',
        data() {
            return {
                userid: this.$store.state.userid
            }
        },
        mounted() {
            this.jiaoyan()
        },
        methods: {
            jiaoyan() {
                if (this.$store.state.userid == "") {
                    alert("未登录请先登录")
                    this.$router.push('/login');

                }
            },
            myinfo() {
                this.$router.push('/index/myinfo');

            },
            myaddress() {
                this.$router.push('/index/addresslist');

            },
            collectlist() {
                this.$router.push('/index/collect/list');

            },
            orderlist() {
                this.$router.push('/index/orderlist');

            },
            tuichu() {
                this.$store.commit("delToken");
                this.$store.commit("delUserid");
                this.$store.commit("cleancart");
                this.$router.push('/index/home');
            }
        },
    }
</script>
<style scoped>
    .flexcolumn {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    
    .flexcolumn div {
        text-align: center;
        padding-top: 4vh;
        border: 1px solid rgb(221, 214, 214);
        width: 100vw;
        height: 10vh;
        font-size: 5vh;
    }
    
    .iconfont {
        font-size: 5vh;
    }
</style>