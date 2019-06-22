<template>
    <div class="content">
            

    
    <div class="biaodan">

        
        <form>
               
            收货人姓名：<input type="text" v-model="formData.shrname" placeholder="输入姓名" class="username"><br>
            电话：<input type="text" v-model="formData.phone" placeholder="输入电话" class="password" ><br>
            地址：<input type="text" v-model="formData.dizhi" placeholder="输入地址" class="password"><br>
            <button @click.prevent="send()" class="button">确定</button>

        </form>
        <button @click.prevent="back()" class="button1">取消</button>
        
<br>

    </div>
    

</div>

</template>
<script>
    export default {
        name: "newaddress",
        data() {
            return {
                formData: {

                    shrid: this.$store.state.userid,
                    shrname: "",
                    phone: "",
                    dizhi: ""
                }
            }
        },
        methods: {

            send() {

                if (this.formData.shrname == "") {
                    alert("姓名不能为空");
                } else if (this.formData.phone == "") {
                    alert("电话不能为空");

                } else if (this.formData.dizhi == "") {
                    alert("地址不能为空");

                } else {
                    console.log(this.formData.shrid)
                    this.$axios.post('/api/address', this.formData)
                        .then(res => {
                            if (res.data.status == 200) {
                                alert(res.data.message);
                                this.$router.go(-1);
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
    
    .button1 {
        background-color: red;
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