<template>
   <div>
      <div class="wr">
            <p>B2C在线商城</p>
            <form action="">
                <input type="text" v-model="searchs" placeholder="名称、分类、描述" >
               <a @click.prevent="search()"><i class="iconfont icon-xiazai17"></i></a> 
            </form>
            
            <i class="iconfont icon-xiaoxitongzhi" @click="tongzhi()"></i>
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
                        <div  class="sort1" @click.prevent="sortdetail('手机')">
                            手机
                           </div>
                           <div class="sort2" @click.prevent="sortdetail('耳机')">
                             耳机
                              </div>
                              <div class="sort3"  @click.prevent="sortdetail('配件')">
                                配件
                                 </div>
                                 <div  class="sort4" @click.prevent="sortdetail('生活')">
                                       生活
                                        </div>
                  </div>
                </div>
               
        <div class="product" v-for="(item,index) in results" >
<div class="wrs">
    <div class="productimg" @click.prevent="itemdetail(item)"><img :src="'/api'+item.pic" alt=""></div>
    <div>{{item.title}}</div>
   
    <div>价格{{item.price}}</div>
    运费{{item.fee}}
    <br>
    分类{{item.sorts}}
    <td>
        <button @click='addToCart(item)' class="btn">加入购物车</button><br>
        <button @click='buy(item)' class="btn">立即购买</button>
        
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
        created() {
            this.init();

        },

        data() {
            return {
                results: "",
                msg: "vuex购物车",
                searchs: ""
            };
        },
        computed: {

        },
        methods: {
            addToCart(item) {
                this.$store.commit("addToCart", item);
            },

            init() {
                this.$axios.get('/api/itemdetail/list').then(res => {
                    console.log(res.data)
                    this.results = res.data.results;
                })

            },
            search() {
                if (this.searchs == "") {
                    alert("请先输入内容再搜索");
                } else {
                    this.$router.push('/index/search/' + this.searchs);
                }
            },
            tongzhi() {


                this.$router.push('/index/notification/list');

            },
            buy(item) {
                this.$router.push('/index/buynowpage/' + item._id);
            },
            itemdetail(item) {

                this.$router.push('/index/itemdetail/' + item._id);


            },
            sortdetail(name) {

                this.$router.push('/index/sort/' + name);


            },



        }
    }
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
        font-size: 70%
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