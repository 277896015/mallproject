<template>
  <div class="content">
      <div class="title">
            <h2>注册页面</h2>
      </div>
    

      <div class="biaodan">

      
    <form>
        <div>
                
                <input type="text" v-model="formData.username" required="true" placeholder="输入账号" class="username">
        </div><br>

        <div>
                
                <input type="password" v-model="formData.password" required="true" placeholder="输入密码" class="password" autocomplete >
        </div><br>
        <div>
                
                <input type="text" v-model="formData.registercode" required="true" placeholder="输入注册码(找回密码用)" class="password" autocomplete >
        </div><br>
        <div>
                
      
        </div><br>

       

        <div>
                
                <span>上传头像：</span><input type="file" ref="image" class="file">
                
        </div><br>
        
      <button @click.prevent="send()" class="button">注册</button>
    </form>
    <button @click.prevent="back()" class="button1">返回登录</button>

</div>



  </div>
</template>
<script>
    //querystring 先安装
    //import qs from 'qs'
    export default {
        name: "register",
        data() {
            return {
                formData: {
                    username: "",
                    password: "",
                    email: "",
                    registercode: ""
                }
            };
        },
        methods: {
            send() {


                var regUsername = /^[a-zA-Z0-9_]{3,16}$/;


                if (this.formData.username == "") {
                    alert("用户名不能为空");

                } else if ((regUsername.test(this.formData.username)) == false) {
                    alert("用户名需要是3至16位英文")

                } else if (this.formData.password == "") {
                    alert("密码不能为空");

                } else if (this.formData.registercode == "") {
                    alert("注册码不能为空");

                } else if (this.$refs.image.files[0] == undefined) {
                    alert("必须上传头像");
                } else {
                    var data = new FormData(); //模仿图片提交的形式
                    data.append("username", this.formData.username);
                    data.append("password", this.formData.password);
                    data.append("registercode", this.formData.registercode);
                    data.append("email", this.formData.email);
                    //图片的数据怎么拿
                    // console.log(this.$refs.image)
                    // console.dir(this.$refs.image)
                    data.append("pic", this.$refs.image.files[0]);


                    this.$axios.post('/api/register', data)
                        .then(res => {

                            if (res.data.status == 200) {
                                alert("注册成功");
                                this.$router.push('/login');

                            } else if (res.data.status == 600) {
                                alert(res.data.message);


                            } else {
                                alert("注册失败，请重新注册");
                            }




                        })
                }



            },
            back() {
                this.$router.push('/login');
            }



        }
    };
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
    }
    
    .button1 {
        background-color: green;
        /* Green */
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
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