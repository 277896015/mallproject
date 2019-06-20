<template>
   <div>
      <div class="wr">
            <p>B2C在线商城</p>
            <form action="">
                <input type="text" ref="searchs">
               <a v-on:click="tijiao"><i class="iconfont icon-xiazai17"></i></a> 
            </form>
            
            <i class="iconfont icon-xiaoxitongzhi"></i>
      </div>
         
      
  <div class="wrapper">

      
    <section >
         <div class="lunbo">
                <mt-swipe :auto="4000">
                        <mt-swipe-item><img src="@/assets/images/lunbo1.jpg" alt="" class="lunboimg"></mt-swipe-item>
                        <mt-swipe-item><img src="@/assets/images/lunbo2.jpg" alt="" class="lunboimg"></mt-swipe-item>
                        <mt-swipe-item><img src="@/assets/images/lunbo3.jpg" alt="" class="lunboimg"></mt-swipe-item>
                      </mt-swipe>
            </div>
            <div class="fenlei">
                  <div class="wrflex">
                        <div  class="sort1" >
                            手机
                           </div>
                           <div class="sort2" >
                             耳机
                              </div>
                              <div class="sort3"  >
                                配件
                                 </div>
                                 <div  class="sort4">
                                       生活
                                        </div>
                  </div>
                </div>
               
        <div class="product" v-for="(item,index) in results">
<div class="wrs">
    <div class="productimg"><img :src="'/api'+item.pic" alt=""></div>
    <div>{{item.title}}</div>
    <div>{{item._id}}</div>
    <div>价格{{item.price}}</div>
    运费{{item.fee}}
    <br>
    分类{{item.sorts}}
    <td>
        <div @click='addToCart(item)' class="btn">加入购物车</div>
        <div @click='buy(shop)' class="btn">立即购买</div>
        
    </td>
</div>
           

        </div>



    </section>
     
        
      
    
   
   
  </div>
</div>
</template>
<script>
    import {

        mapActions
    } from 'vuex'
    export default {
        name: "home",
        created() {
            this.init();

        },

        data() {
            return {
                results: "",
                msg: "vuex购物车"
            };
        },
        computed: {

        },
        methods: {
            ...mapActions(['addToCart']),

            init() {
                this.$axios.get('/api/add/list').then(res => {
                    console.log(res.data)
                    this.results = res.data.results;
                })

            },
            tijiao: function() {
                alert(this.$refs.searchs.value);

            },
            buy: function(shop) {
                console.log(shop);
            }



        },

    };
</script>
<style scoped>
    -webkit-scrollbar {
        width: 1px;
        height: 0px;
    }
    
    .lunboimg {
        width: 100%;
        height: 100%;
    }
    
    .btn {
        border-radius: 15px;
        background-color: aqua;
    }
    
    .product {
        width: 100vw;
        height: 15vh;
        border-bottom: 1px solid gray;
    }
    
    .productimg {
        height: 10vh;
        width: 20vw;
    }
    
    .productimg img {
        height: 10vh;
        width: 20vw;
    }
    
    .icons {
        height: 5vh;
        width: 2vw;
        display: block;
    }
    
    .wr {
        display: flex;
        justify-content: space-between;
        /* space-between：两端对齐，项目之间的间隔都相等。 */
    }
    
    .wrflex {
        display: flex;
        justify-content: space-around;
        align-items: center;
        /* space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。*/
    }
    
    .wrs {
        width: 100vw;
        display: flex;
    }
    
    section {
        flex: 1;
        overflow: auto;
    }
    
    .lunbo {
        width: 100vw;
        height: 35vh;
    }
    
    .fenlei {
        width: 100vw;
        margin-top: 2vh;
        margin-bottom: 2vh;
    }
    
    input {
        border: 1px solid gray;
        border-radius: 15px;
        padding: 0;
    }
    
    .sort1 {
        text-align: center;
        padding-top: 4vh;
        width: 20vw;
        height: 8vh;
        border: 1px solid gray;
        border-radius: 15px;
    }
    
    .sort2 {
        text-align: center;
        padding-top: 4vh;
        width: 20vw;
        height: 8vh;
        border: 1px solid gray;
        border-radius: 15px;
    }
    
    .sort3 {
        text-align: center;
        padding-top: 4vh;
        width: 20vw;
        height: 8vh;
        border: 1px solid gray;
        border-radius: 15px;
    }
    
    .sort4 {
        text-align: center;
        padding-top: 4vh;
        width: 20vw;
        height: 8vh;
        border: 1px solid gray;
        border-radius: 15px;
    }
</style>