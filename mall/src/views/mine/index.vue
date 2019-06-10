<template>
    <div class="flexcolumn">
        <div><i class="iconfont icon-yonghu"></i>个人信息</div>
        <div><i class="iconfont icon-shoucang"></i>我的收藏</div>
        <div> <i class="iconfont icon-order_icon"></i>我的订单</div>
        <div><i class="iconfont icon-hongbao"></i> 红 包 </div>
        <div><i class="iconfont icon-unie65c"></i>收货地址</div>
        
    </div>
</template>
<script>
    export default {
        name: 'mine'
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