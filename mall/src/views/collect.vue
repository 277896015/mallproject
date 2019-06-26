<template>
        <div>
            <div class="wr">
      
            
            <mt-header  fixed title="收藏列表" >
                <router-link to="/" slot="left">
                  <mt-button icon="back" @click.prevent="back()">返回</mt-button>
                </router-link>
                
              </mt-header>
          </div>
          <div class="wrapper">
              <section>
              <div class="product" v-for="(item,index) in results" >
                  <div class="wrs">
                      <div class="productimg" ><img :src="'/api'+item.pic" alt=""></div>
                      <div>名称:{{item.title}}</div>
                     
                      <div>价格{{item.price}}</div>
                      运费{{item.fee}}
                      <br>
                      分类{{item.sorts}}
                      <!-- <td>
                          <div @click='addToCart(item)' class="btn">加入购物车</div><br>
                          <div @click='buy(shop)' class="btn">立即购买</div>
                          
                      </td> -->
                      
                  </div>
                  <div  @click.prevent="quxiao(item)" class="btn">取消收藏</div>
                          
                  
                          </div>
                      </section>
      </div>
      
      </div>
      </template>
<script>
    export default {
        name: "collect",

        data() {
            return {
                results: "",


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


                    this.$axios.get('/api/collect?id=' + this.$store.state.userid).then(res => {
                        if (res.data.status == 200) {
                            this.results = res.data.results;
                        } else {
                            alert(res.data.message);

                        }


                    })
                }

            },
            quxiao(item) {
                this.$axios.get('/api/collect/quxiao?id=' + item._id).then(res => {
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
            }


        }

    };
</script>
<style scoped>
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
    
    .wrs {
        width: 100vw;
        display: flex;
    }
    
    .wr {
        height: 7vh;
        display: flex;
        justify-content: space-between;
        /* space-between：两端对齐，项目之间的间隔都相等。 */
    }
</style>