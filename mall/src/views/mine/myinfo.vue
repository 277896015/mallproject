<template>
    <div>
            <mt-header title="个人信息">
                    <router-link to="/" slot="left">
                      <mt-button icon="back" @click.prevent="back()">返回</mt-button>
                    </router-link>
                    <mt-button icon="more" slot="right"></mt-button>
                  </mt-header>
                  
                  
                  <mt-field label="用户名"  v-model="result.username"  placeholder="必填" style="border:solid 1px gray"></mt-field>
                  <mt-field label="密码"  v-model="result.password"  type="password" placeholder="留空则不修改" style="border:solid 1px gray"></mt-field>
                  <mt-field label="邮箱"  v-model="result.email" placeholder="必填" style="border:solid 1px gray"></mt-field>
                  
                 
                <div>
                  头像:<br>
                  <img :src="'/api' + this.result.touxiang" class="img" alt="">
                  
                </div>
                <span>可更换头像(不换则保留头像)</span><span><input type="file" ref="image" class="file"></span>



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

                this.$axios.post('/api/myinfo', {
                        userid: this.$store.state.userid
                    })
                    .then(res => {
                        if (res.data.status == 200) {


                            this.result = res.data.results;
                            this.result.password = "";



                        } else {
                            alert("请重新登录");
                            this.$router.push('/index/home');
                        }


                    })

            },
            update() {
                if (this.result.username == "") {
                    alert("用户名不能为空")
                } else if (this.result.email == "") {
                    alert("邮箱不能为空")
                } else {

                    if (this.$refs.image.files[0] == undefined) {
                        //如果不更新图片
                        var data = new FormData();
                        data.append("userid", this.$store.state.userid);
                        data.append("username", this.result.username);
                        data.append("password", this.result.password);
                        data.append("email", this.result.email);
                        this.$axios.post('/api/myinfo/picnoupdate', data)
                            .then(res => {

                                if (res.data.status == 200) {
                                    console.log(res.data);
                                    this.$router.go(-1);
                                } else {
                                    alert(res.data.message)

                                }
                            })
                    } else { //更新图片
                        console.log("修改头像了");
                        console.log(this.$store.state.userid);
                        var data = new FormData(); //模仿图片提交的形式
                        data.append("userid", this.$store.state.userid);
                        data.append("username", this.result.username);
                        data.append("password", this.result.password);
                        data.append("email", this.result.email);
                        data.append("pic", this.$refs.image.files[0]);




                        this.$axios.post('/api/myinfo/update', data)
                            .then(res => {

                                if (res.data.status == 200) {
                                    console.log(res.data);
                                    this.$router.go(-1);
                                } else {
                                    alert(res.data.message)

                                }
                            })
                    }
                }
                // if (this.result.username == "" && this.$refs.image.files[0] == undefined) {
                //     alert("用户名未修改")

                //     console.log("未修改头像");
                //     console.log(this.$store.state.userid);
                //     var datas = new FormData(); //模仿图片提交的形式
                //     datas.append("userid", this.$store.state.userid);
                //     datas.append("email", this.result.email);
                //     datas.append("pic", this.result.touxiang);
                //     this.$axios.post('/api/myinfo/picnoupdate', datas)
                //         .then(res => {

                //             if (res.data.status == 200) {
                //                 console.log(res.data);
                //                 this.$router.go(-1);


                //             }




                //         })


                // } else if (this.result.password == "" && this.$refs.image.files[0] == undefined) {
                //     alert("密码未修改")
                //     console.log("未修改头像");
                //     console.log(this.$store.state.userid);
                //     var datas = new FormData(); //模仿图片提交的形式
                //     datas.append("userid", this.$store.state.userid);
                //     datas.append("username", this.result.username);

                //     datas.append("email", this.result.email);
                //     datas.append("pic", this.result.touxiang);
                //     this.$axios.post('/api/myinfo/picnoupdate', datas)
                //         .then(res => {

                //             if (res.data.status == 200) {
                //                 console.log(res.data);
                //                 this.$router.go(-1);


                //             }




                //         })

                // }  else if (this.$refs.image.files[0] == undefined) {
                //     console.log("未修改头像");
                //     console.log(this.$store.state.userid);
                //     var datas = new FormData(); //模仿图片提交的形式
                //     datas.append("userid", this.$store.state.userid);
                //     datas.append("username", this.result.username);
                //     datas.append("password", this.result.password);
                //     datas.append("email", this.result.email);
                //     datas.append("pic", this.result.touxiang);
                //     this.$axios.post('/api/myinfo/picnoupdate', datas)
                //         .then(res => {

                //             if (res.data.status == 200) {
                //                 console.log(res.data);
                //                 this.$router.go(-1);


                //             }




                //         })

                // }


            },

            back() {
                this.$router.go(-1)
            }

        }

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