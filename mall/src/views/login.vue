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
        
<br>
        <button @click.prevent="goforget()"  class="goforget">忘记密码？点击找回</button>
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
                                alert(res.data.message);
                            }


                        })
                }

            },
            gotoregister() {
                this.$router.push('register');
            },
            goforget() {
                this.$router.push('forget');
            },





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
        text-align: center;
    }
    
    .username {
        border: 1px solid black;
    }
    
    .password {
        border: 1px solid black;
    }
    
    .goforget {
        margin-top: 2vh;
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
    
    form input {
        margin-top: 2vh;
    }
    
    form {
        font-size: 150%;
    }
</style>