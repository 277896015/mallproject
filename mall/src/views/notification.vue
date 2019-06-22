<template>
  <div>
      <div class="wr">

      
      <mt-header  fixed title="消息通知" >
          <router-link to="/" slot="left">
            <mt-button icon="back" @click.prevent="back()">返回</mt-button>
          </router-link>
          
        </mt-header>
    </div>
    <div class="wrapper">
        <section>
        <div class="product" v-for="(item,index) in results" >
           <ul>
            <mt-badge size="small"type="warning">{{index+1}}</mt-badge>
               <li>
                标题:{{item.biaoti}}
               </li>
               <li>
                内容:{{item.content}}
               </li>
               <li>
                状态:{{item.read}}
               </li>
               <mt-button size="small" type="primary" @click.prevent="know(item)">了解</mt-button>
           </ul>
                
                
                
                <!-- <td>
                    <div @click='addToCart(item)' class="btn">加入购物车</div><br>
                    <div @click='buy(shop)' class="btn">立即购买</div>
                    
                </td> -->
                
            
                    
            
                    </div>
                </section>
</div>

</div>
</template>
<script>
    export default {
        name: "notification",

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
                this.$axios.get('/api/notification').then(res => {
                    if (res.data.status == 200) {
                        this.results = res.data.results;
                    } else {
                        alert(res.data.message);
                        this.$router.go(-1);
                    }


                })

            },
            know(item) {
                this.$axios.get('/api/notification/know?id=' + item._id).then(res => {
                    if (res.data.status == 200) {
                        alert(res.data.message);
                        this.getitem();
                    } else {
                        alert(res.data.message);

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
        height: 20vh;
        border-bottom: 1px solid gray;
        font-size: 70%;
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
</style>