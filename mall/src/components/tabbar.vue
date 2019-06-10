<template>
  <ul class="footer">
    <li @click="change(0,'home')" :class="{active:currentIndex==0}">
      <i class="iconfont icon-tubiao15"></i>
      <p>首页</p>
    </li>
    <li @click="change(1,'cart')" :class="{active:currentIndex==1}">
      <i class="iconfont icon-gouwuche"></i>
      <p>购物车</p>
    </li>
    <li @click="change(2,'mine')" :class="{active:currentIndex==2}">
      <i class="iconfont icon-yonghu"></i>
      <p>我的</p>
    </li>
  </ul>
</template>
<script>
    export default {
        name: "tabbar",
        data() {
            return {
                currentIndex: 0
            }
        },
        methods: {
            change(num, name) {
                this.currentIndex = num;
                this.$router.push({
                    name
                })
            }
        }
    };
</script>
<style scoped>
    .footer {
        background-color: whitesmoke;
        padding: 5px;
        display: flex;
        justify-content: space-around;
        /* space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。 */
    }
    
    li {
        text-align: center;
    }
    
    p {
        margin-top: 5px;
        margin-bottom: 5px;
    }
    
    li.active {
        color: blue;
    }
</style>