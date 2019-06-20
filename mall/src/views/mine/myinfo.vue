<template>
    <div>
            <mt-header title="个人信息">
                    <router-link to="/" slot="left">
                      <mt-button icon="back" @click.prevent="back()">返回</mt-button>
                    </router-link>
                    <mt-button icon="more" slot="right"></mt-button>
                  </mt-header>
                  
                  
                  <mt-field label="用户名"  v-model="result.username" style="border:solid 1px gray"></mt-field>
                  <mt-field label="密码"  v-model="result.password" style="border:solid 1px gray"></mt-field>
                  <mt-field label="邮箱"  v-model="result.email" style="border:solid 1px gray"></mt-field>
                  
                 
                <div>
                  头像:<br>
                  <img :src="'/api' + this.result.touxiang" class="img" alt="">
                  
                </div>
                <span>更换头像</span><span><input type="file" ref="image" class="file"></span>



                <div>

                

<mt-button type="primary" size="normal" @click.prevent="update()">确认</mt-button>
<mt-button type="danger" size="normal" @click.prevent="back()">取消</mt-button>
</div>
                  
              
      
    </div>
  </template>
<script>
    export default {
        name: "myinfo",
        data() {
            return {
                result: {}

            };
        },
        computed: {

        },

        mounted() {
            this.nashuju();

        },
        methods: {
            nashuju() {
                console.log(this.$store.state.userid)
                this.$axios.post('/api/myinfo', {
                        userid: this.$store.state.userid
                    })
                    .then(res => {
                        if (res.data.status == 200) {


                            this.result = res.data.results
                            console.log(this.result);


                        } else {
                            alert("请重新登录");
                            this.$router.push('/index/home');
                        }


                    })

            },
            update() {
                if (this.$refs.image.files[0] == undefined) {
                    alert("未修改头像")
                } else {
                    var data = new FormData(); //模仿图片提交的形式
                    data.append("userid", this.result.userid);
                    data.append("username", this.result.username);
                    data.append("password", this.result.password);
                    data.append("email", this.result.email);

                    data.append("pic", this.$refs.image.files[0]);



                    this.$axios.post('/api/myinfo/update', {
                            data: this.data
                        })
                        .then(res => {

                            if (res.data.status == 200) {
                                alert("修改成功");


                            } else {
                                console.log("修改失败，请重试");

                            }




                        })
                }

            },

            back() {
                this.$router.go(-1)
            }

        },
        // beforeRouteEnter(to, from, next) {
        //     console.log("组件进入守卫");
        //     next()
        //         // ...
        // }

        // beforeRouteUpdate(to, from, next) {
        //     this.find(userid);
        //     console.log("组件更新守卫");
        //     next()

        // },
        // beforeRouteLeave(to, from, next) {
        //     // ...
        //     console.log("组件离开守卫");
        //     next();
        // }
    };
</script>
<style scoped>
    .img {
        width: 20vw;
        height: 10vh;
    }
    
    .username {
        border: solid 1px blue;
    }
    
    .mint-button {
        margin: 15vw;
    }
</style>