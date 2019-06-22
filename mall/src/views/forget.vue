<template>
    <div class="content">
            <div class="title">
                    <h2>找回密码页面</h2>
              </div>

    
    <div class="biaodan">

        
        <form>
            账号：<input type="text" v-model="formData.username" placeholder="输入账号" class="username"><br>
            注册码：<input type="text" v-model="formData.registercode" placeholder="注册时填的注册码" class="password" autocomplete><br>
            新密码：<input type="password" v-model="formData.password" placeholder="输入新密码" class="password" autocomplete><br>
            <button @click.prevent="send()" class="button">点击找回</button>

        </form>
        <button @click.prevent="back()" class="button1">返回登陆</button>
       
        

        
    </div>
    <br>
</div>

</template>
<script>
    export default {
        name: "forget",
        data() {
            return {
                formData: {
                    username: "",
                    password: "",
                    registercode: ""
                }
            }
        },
        methods: {

            send() {

                if (this.formData.username == "") {
                    alert("用户名不能为空");
                } else if (this.formData.password == "") {
                    alert("密码不能为空");

                } else if (this.formData.registercode == "") {
                    alert("注册码不能为空");

                } else {
                    this.$axios.post('/api/forget', this.formData)
                        .then(res => {
                            if (res.data.status == 200) {
                                alert(res.data.message);
                                this.$router.push('/login');
                            } else {
                                alert(res.data.message);
                            }


                        })
                }

            },
            back() {
                this.$router.go(-1);
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
    
    .button1 {
        background-color: goldenrod;
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