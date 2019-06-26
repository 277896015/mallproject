<template>
  <div>
      <div class="wr">

            
      <mt-header  fixed title="确认订单" >
          <router-link to="/" slot="left">
            <mt-button icon="back" @click.prevent="back()">返回</mt-button>
          </router-link>
          <mt-button  slot="right"></mt-button>
        </mt-header>
        
    </div>
 
    <div> 总价格:{{totalMoney}}</div>
    <div >
        选择收货地址:　<select v-model="selectedd">
            
            　　　　<option v-for="item in this.result" :value="item">{{item.shrname}}{{item.dizhi}}</option>
            
            　　</select>
            
            </div>

    <div class="wrapper">
        <section>
                <div class="product" v-for='(shop,index) in results'>
                        
         
             
         {{shop.title}}
        数量:{{shop.num}}
         运费:{{shop.fee}}
         单价:{{shop.price}}
        
         
</div>
<div><button @click.prevent="queding()">确定</button></div>
 </section>

                
</div>

</div>
</template>
<script>
    export default {

        name: "buynowpage",
        props: ["id"],
        data() {
            return {
                userid: this.$store.state.userid,
                results: "",
                result: "",
                totalMoney: 0,
                selectedd: ""
            }
        },
        mounted() {
            this.jiaoyan();
            this.getproduct();
            this.getaddress();
        },
        methods: {
            jiaoyan() {
                if (this.$store.state.userid == "") {
                    alert("未登录请先登录")
                    this.$router.push('/login');
                }
            },
            getaddress() {
                this.$axios.get('/api/address?id=' + this.$store.state.userid).then(res => {
                    if (res.data.status == 200) {
                        this.result = res.data.results;
                    } else {
                        alert(res.data.message);
                        this.$router.push('/index/addresslist');


                    }


                })

            },
            getproduct() {
                this.$axios.get('/api/itemdetail/buy?id=' + this.$route.params.id)
                    .then(res => {
                        if (res.data.status == 200) {


                            this.results = res.data.results;
                            this.totalMoney = this.results[0].price + this.results[0].fee;

                        } else {
                            console.log(res.data.message)
                                //this.$router.push('/index/home');
                        }
                    })

            },

            queding() {
                if (this.selectedd == "") {
                    alert("请选择收货地址")
                } else {
                    var obj = {
                        xiadanrenid: this.$store.state.userid,
                        shangpin: this.results,
                        shouhuodizhi: this.selectedd,
                        totalMoney: this.totalMoney
                    }

                    this.$axios.post('/api/orderpage', obj)
                        .then(res => {
                            if (res.data.status == 200) {
                                alert(res.data.message);

                                this.$router.push('/index/home');

                            } else {
                                alert(res.data.message);
                            }


                        })
                }

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
        height: 3vh;
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