<template>
    <div class="content">
            

    
    <div class="biaodan">

        
        <form>
               
            收货人姓名：<input type="text" v-model="results.shrname" placeholder="必填" class="username"><br>
            电话：<input type="text" v-model="results.phone" placeholder="必填" class="password" ><br>
            地址：<input type="text" v-model="results.dizhi" placeholder="必填" class="password"><br>
            <button @click.prevent="send()" class="button">确定</button>

        </form>
        <button @click.prevent="back()" class="button1">取消</button>
        
<br>

    </div>
    

</div>

</template>
<script>
    export default {
        name: "updateaddress",
        props: ["id"],
        data() {
            return {
                results: {}
            }
        },
        mounted() {
            this.con()
            this.getitem();

        },
        methods: {

            send() {

                if (this.results.shrname == "") {
                    alert("姓名不能为空");
                } else if (this.results.phone == "") {
                    alert("电话不能为空");

                } else if (this.results.dizhi == "") {
                    alert("地址不能为空");

                } else {
                    console.log(this.results._id)
                    this.$axios.post('/api/address/update/', this.results)
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
            getitem() {
                this.$axios.get('/api/address/updatelist/?id=' + this.id).then(res => {
                    if (res.data.status == 200) {
                        this.results = res.data.results;
                    } else {
                        alert(res.data.message);

                    }


                })

            },

            back() {
                this.$router.go(-1);
            },
            con() {

                console.log("第一种方法 this.id:" + this.id)

                console.log("第2种方法this.$route.params.id:" + this.$route.params.id)

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