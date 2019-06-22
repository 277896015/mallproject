<template>
  <div>
      <mt-header :title="results.title">
          <router-link to="/" slot="left">
            <mt-button icon="back" @click.prevent="back()">返回</mt-button>
          </router-link>
          
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
  <br>
  <button @click.prevent="addcollect()">添加到收藏</button>




</div>
</template>
<script>
    export default {
        name: "itemdetail",
        props: ["id"],
        data() {
            return {
                results: "",
                userid: this.$store.state.userid



            }
        },
        mounted() {

            this.getitem();
            this.con();


        },
        methods: {
            con() {
                console.log("第一种方法商品id：" + this.id)

                console.log("第2种方法商品id：" + this.$route.params.id)

                console.log("第一种用户 id ：" + this.$store.state.userid)
                console.log("第二种用户 id ：" + this.userid)


            },
            addcollect() {

                var obj = {
                    ...this.results,
                    scrid: this.$store.state.userid,
                    productid: this.id

                }
                delete obj._id;
                delete obj.__v;
                console.log(obj);
                this.$axios.post('/api/collect/add/', obj)
                    .then(res => {
                        if (res.data.status == 200) {
                            alert(res.data.message);

                        } else {
                            alert(res.data.message);
                        }


                    })

            },
            getitem() {
                this.$axios.get('http://localhost:4000/itemdetail?id=' + this.$route.params.id)
                    .then(res => {
                        if (res.data.status == 200) {

                            console.log(res.data.status)
                            this.results = res.data.results
                            console.log(this.results);



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