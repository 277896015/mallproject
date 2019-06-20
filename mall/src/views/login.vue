<template>
    <div class="content">
            <div class="title">
                    <h2>登录页面</h2>
              </div>

    
    <div class="biaodan">

        
        <form>
            账号：<input type="text" v-model="formData.username" placeholder="输入账号" class="username"><br>
            密码：<input type="password" v-model="formData.password" placeholder="输入密码" class="password" autocomplete><br>
            <button @click.prevent="send()" class="button">登陆</button>

        </form>
        <button @click.prevent="gotoregister()" class="button">去注册</button>

        
    </div>


</div>

</template>
<script>
    export default {
        name: "login",
        data() {
            return {
                formData: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {

            send() {

                if (this.formData.username == "") {
                    alert("用户名不能为空");
                } else if (this.formData.password == "") {
                    alert("密码不能为空");

                } else {
                    this.$axios.post('/api/login', this.formData)
                        .then(res => {
                            if (res.data.status == 200) {
                                this.$store.commit("saveToken", res.data.token);
                                this.$store.commit("saveUserid", res.data.userid);


                                alert("登录成功");

                                // console.log(this.$route.query)
                                if (this.$route.query.redirect) {
                                    this.$router.push(this.$route.query.redirect);
                                }
                                this.$router.push('/index/home');


                            } else {
                                alert("登录失败，请重新登录");
                            }


                        })
                }

                // this.$axios.post('/api/login', this.formData)
                //     .then(res => {
                //         console.log(res.data)
                //             //保存token
                //         this.$store.commit("saveToken", res.data.token);
                //         this.$router.push('/index/home');
                //         // console.log(this.$route.query)
                //         if (this.$route.query.redirect) {
                //             this.$router.push(this.$route.query.redirect);
                //         }
                //     })
            },
            gotoregister() {
                this.$router.push('register');
            }





        }
    }
</script>
<style scoped>
    .title {
        padding-top: 10vw;
        width: 99vw;
        height: 10vh;
        border: 2px solid black;
    }
    
    h2 {
        text-align: center;
    }
    
    .content {
        margin: 0 auto;
    }
    
    .biaodan {
        padding: 10vw;
    }
    
    .username {
        border: 1px solid black;
    }
    
    .password {
        border: 1px solid black;
    }
    
    .email {
        border: 1px solid black;
    }
    
    .file {
        color: greenyellow;
    }
    
    .button {
        background-color: skyblue;
        /* Green */
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 3vw;
        margin-top: 2vh;
    }
</style>