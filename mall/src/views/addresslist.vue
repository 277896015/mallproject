<template>
  <div>
      <div class="wr">

      
      <mt-header  fixed title="收货地址" >
          <router-link to="/" slot="left">
            <mt-button icon="back" @click.prevent="back()">返回</mt-button>
          </router-link>
          <mt-button  @click.prevent="addaddress()"  slot="right">新增</mt-button>
        </mt-header>
        
    </div>
    
    <div class="wrapper">
        <section>
        <div class="product" v-for="(item,index) in results" >
           <ul>
            <mt-badge size="small"type="warning">{{index+1}}</mt-badge>
               <li>
                收货人:{{item.shrname}}
               </li>
               <li>
                电话:{{item.phone}}
               </li>
               <li>
                地址:{{item.dizhi}}
               </li>
               
           </ul>
           <div class="flex">
                <button @click.prevent="updateaddress(item)">编辑</button>
                <button @click.prevent="deleted(item)">删除</button>
           </div>
           
         </div>
                </section>
</div>

</div>
</template>
<script>
    export default {
        name: "addresslist",

        data() {
            return {
                id: this.$store.state.userid,
                results: "",


            }
        },
        mounted() {

            this.getitem();

        },
        methods: {

            getitem() {
                this.$axios.get('/api/address?id=' + this.id).then(res => {
                    if (res.data.status == 200) {
                        this.results = res.data.results;
                    } else {
                        alert(res.data.message);

                    }


                })

            },
            addaddress() {
                this.$router.push('/index/newaddress');


            },
            deleted(item) {
                this.$axios.get('/api/address/deleted/?id=' + item._id).then(res => {
                    if (res.data.status == 200) {
                        alert(res.data.message);
                        this.getitem();
                    } else {
                        alert(res.data.message);
                        this.getitem();

                    }


                })

            },
            updateaddress(item) {
                this.$router.push('/index/updateaddress/' + item._id);
                // this.$axios.get('/api/address/updateaddress/?id=' + item._id).then(res => {
                //     if (res.data.status == 200) {
                //         alert(res.data.message);
                //         this.getitem();
                //     } else {
                //         alert(res.data.message);

                //     }


                // })

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
    
    .flex {
        display: flex;
        justify-content: space-around;
    }
</style>