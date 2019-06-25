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
        选择收货地址:　<select  v-on:change="indexSelect($event)">
            
            　　　　<option v-for="item in this.result" :value="item">{{item.shrname}}{{item.dizhi}}</option>
            
            　　</select>
            
            </div>

    <div class="wrapper">
        <section>
                <div class="product" v-for='(shop,index) in $store.state.cartlist'>
                        
         
                {{index+1}}
         {{shop.title}}
        数量:{{shop.num}}
         运费:{{shop.fee}}
         单价:{{shop.price}}
        
         
</div>
<div>确定</div>
 </section>

                
</div>

</div>
</template>
<script>
    export default {

        name: "orderpage",

        data() {
            return {
                id: this.$store.state.userid,
                results: "",
                result: "",
                totalMoney: 0,
                dingdandizhi: ""



            }
        },
        mounted() {
            this.zongjia();
            this.getitem();




        },
        methods: {
            getitem() {
                this.$axios.get('/api/address?id=' + this.id).then(res => {
                    if (res.data.status == 200) {
                        this.result = res.data.results;
                    } else {
                        alert(res.data.message);

                    }


                })

            },
            indexSelect(event) {

                　　

                this.dingdandizhi = event.target.value;
                console.log(this.dingdandizhi.phone);

            },


            back() {
                this.$router.go(-1);
            },
            zongjia() {

                this.$store.state.cartlist.forEach((item, index) => { //遍历商品，如果选中就进行加个计算，然后累加

                    this.totalMoney += (item.price * item.num) + item.fee; //累加的

                });
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