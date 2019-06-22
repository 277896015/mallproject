<template>
  <div>
      <div class="wr">

      
      <mt-header  fixed :title="id+'分类'" >
          <router-link to="/" slot="left">
            <mt-button icon="back" @click.prevent="back()">返回</mt-button>
          </router-link>
          
        </mt-header>
    </div>
    <div class="wrapper">
        <section>
        <div class="product" v-for="(item,index) in results" >
            <div class="wrs">
                <div class="productimg" @click.prevent="itemdetail(item)"><img :src="'/api'+item.pic" alt=""></div>
                <div>{{item.title}}</div>
               
                <div>价格{{item.price}}</div>
                运费{{item.fee}}
                <br>
                分类{{item.sorts}}
                <td>
                    <div @click='addToCart(item)' class="btn">加入购物车</div><br>
                    <div @click='buy(shop)' class="btn">立即购买</div>
                    
                </td>
                
            </div>
                    
            
                    </div>
                </section>
</div>

</div>
</template>
<script>
    export default {
        name: "sortdetail",
        props: ["id"],
        data() {
            return {
                results: "",


            }
        },
        mounted() {
            this.con();
            this.getitem();

        },
        methods: {
            con() {
                console.log("第一种方法")
                console.log(this.id)
                console.log("第2种方法")
                console.log(this.$route.params.id)

            },
            getitem() {
                this.$axios.get('http://localhost:4000/sortdetail?id=' + this.$route.params.id)
                    .then(res => {
                        if (res.data.status == 200) {

                            console.log(res.data.status)
                            this.results = res.data.results



                        } else {
                            console.log(res)
                                //this.$router.push('/index/home');
                        }


                    })

            },
            itemdetail(item) {

                this.$router.push('/index/' + item._id);


            },
            back() {
                this.$router.go(-1)
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