<template>
  <div>
      <mt-header title="商品信息">
          <router-link to="/" slot="left">
            <mt-button icon="back" @click.prevent="back()">返回</mt-button>
          </router-link>
          <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
  <div>商品名字：{{results.title}}</div>
   
  <div>价格:{{results.price}}</div>
  <div>
      运费:{{results.fee}}
  </div>
  
  <div>
      分类:{{results.sorts}}
  </div>
  <div>
      描述:{{results.description}}
  </div>
  <div>
      商品图片:
  </div>
  <br>
  <div>
    
      <img :src="'/api' + this.results.pic" class="img" alt="">
  </div>




</div>
</template>
<script>
    export default {
        name: "itemdetail",
        props: ["id"],
        data() {
            return {
                results: ""



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
                this.$axios.get('http://localhost:4000/itemdetail?id=' + this.$route.params.id)
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
            back() {
                this.$router.go(-1)
            }


        }

    };
</script>
<style scoped>
    .img {
        width: 100vw;
        height: 100vw;
    }
</style>