<template>
   <div>
      <div class="wr">
            <p>B2C在线商城</p>
            <input type="text">
            <i class="iconfont icon-xiaoxitongzhi"></i>
      </div>
         
  
  <div class="wrap">

      
    <section>
         <div class="lunbo">
              轮播图
            </div>
            <div class="fenlei">
                  <div class="wr">
                        <div style="color: honeydew">
                            分类 1
                           </div>
                           <div style="color: hotpink">
                              分类   2
                              </div>
                              <div style="color: yellow" >
                                分类    3
                                 </div>
                                 <div style="color: wheat">
                                       分类    4
                                        </div>
                  </div>
                </div>
        <div v-for="item in 100">
           商品{{item}}
        </div>



    </section>
     
        
      
    
   
   
  </div>
</div>
</template>
<script>
    export default {
        name: "home",

        data() {
            return {

            };
        },


        created() {

        },
        methods: {

        },
        mounted() {

        }
    };
</script>
<style scoped>
    .icons {
        height: 5vh;
        width: 2vw;
        display: block;
    }
    
    .wrap {
        width: 100vw;
        height: 87vh;
        display: flex;
        flex-direction: column;
    }
    
    .wr {
        display: flex;
        justify-content: space-around;
    }
    
    section {
        flex: 1;
        overflow: auto;
    }
    
    .lunbo {
        width: 100vw;
        height: 20vh;
        background: red;
    }
    
    .fenlei {
        width: 100vw;
        height: 10vh;
        background: greenyellow;
    }
    
    input {
        border: 1px solid gray;
        border-radius: 15px;
    }
</style>