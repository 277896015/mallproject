<template>
  <div>
      <div class="wr">

            
      <mt-header  fixed title="订单列表" >
          <router-link to="/" slot="left">
            <mt-button icon="back" @click.prevent="back()">返回</mt-button>
          </router-link>
          <mt-button  slot="right"></mt-button>
        </mt-header>
        
    </div>
    <div class="wrapper">
        <section>
                <div class="product" v-for='(shop,index) in result'>
                        
         
        {{index+1}}
         
        商品数量:{{shop.shangpin.length}}
         总价:{{shop.totalMoney}}
         收货人:{{shop.shouhuodizhi.shrname}}
         收货地址:{{shop.shouhuodizhi.dizhi}}
         
        <br><br>
         <div><button @click.prevent="shanchu(shop)">删除</button></div>
</div>

 </section>

                
</div>

</div>
</template>
<script>
    export default {

        name: "orderlist",

        data() {
            return {
                id: this.$store.state.userid,
                result: "",
                totalMoney: 0,
                dingdandizhi: {},
                selectedd: ""
            }
        },
        mounted() {
            this.getitem();
        },
        methods: {
            getitem() {
                if (this.$store.state.userid == "") {
                    alert("未登录请先登录")
                    this.$router.push('/login');
                } else {
                    this.$axios.get('/api/orderpage?id=' + this.id).then(res => {
                        if (res.data.status == 200) {
                            this.result = res.data.results;
                        } else {
                            alert(res.data.message);

                        }


                    })
                }


            },
            shanchu(shop) {
                this.$axios.get('/api/orderpage/deleted/?id=' + shop._id).then(res => {
                    if (res.data.status == 200) {
                        alert(res.data.message);
                        this.getitem();
                    } else {
                        alert(res.data.message);
                        this.getitem();

                    }


                })

            },
            back() {
                this.$router.go(-1);
            },



        }

    };
</script>
<style scoped>
    .product {
        width: 100vw;
        height: 8vh;
        font-size: 70%;
    }
    
    .wr {
        height: 7vh;
        display: flex;
        justify-content: space-between;
        /* space-between：两端对齐，项目之间的间隔都相等。 */
    }
    
    li {
        margin-top: 1vh;
    }
    
    .mint-button {
        margin-top: 2vh;
    }
    
    .mint-button--primary {
        color: #fff;
        background-color: forestgreen;
    }
    
    ul {
        margin-top: 1vh;
        text-align: center;
    }
    
    .flex {
        display: flex;
        justify-content: space-around;
    }
</style>