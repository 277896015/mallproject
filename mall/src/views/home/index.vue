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
               
        <div class="product" v-for='(shop,index) in shop_list'>
<div class="wrs">
    <div class="productimg"></div>
    <div>商品{{shop.id}}</div>
    <div>价格{{shop.price}}</div>
    数量{{shop.num || ''}}
    <td>
        <div @click='add_db(shop)' class="btn">加入购物车</div>
        
    </td>
</div>
           

        </div>



    </section>
     
        
      
    
   
   
  </div>
</div>
</template>
<script>
    export default {
        name: "home",

        data() {
            return {
                shop_list: [{
                    id: 1,
                    name: '鱼香肉丝',
                    price: 12
                }, {
                    id: 2,
                    name: '宫保鸡丁',
                    price: 14
                }, {
                    id: 3,
                    name: '土豆丝',
                    price: 10
                }, {
                    id: 4,
                    name: '米饭',
                    price: 2
                }]
            };
        },
        methods: {
            tijiao: function() {
                alert(this.$refs.searchs.value);

            },
            add_db: function(message) {
                console.log(message);
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
        height: 12vh;
        border-bottom: 1px solid gray;
    }
    
    .productimg {
        height: 10vh;
        width: 15vh;
        background: rebeccapurple;
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