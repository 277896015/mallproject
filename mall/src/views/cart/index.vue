<template>
<div>
    <div class="carts">
            <mt-header fixed title="购物车">
                    <router-link to="/" slot="left">
                      <mt-button icon="back" @click.prevent="back()">返回</mt-button>
                    </router-link>
                    <mt-button  slot="right" @click.prevent="goorder()">去结算</mt-button>
                  </mt-header>
                  <div class="kbc">111 </div>
        <section> 
            <div class="product" v-for='(shop,index) in $store.state.cartlist'>
                <div class="wrs" >
<div class="productimg">
        <img :src="'/api'+shop.pic" alt="">
</div>
<div>{{shop.title}}</div>
<div>价格{{shop.price}}</div>
邮费{{shop.fee || ''}}
<br>
数量{{shop.num || ''}}
 <td>   
        <span @click.prevent='additem(shop)' class="btnadd">+</span>
        <span @click.prevent='descitem(shop)' class="btndesc">-</span>
        <span @click.prevent='deleteitem(shop)' class="btn">删除</span>
 </td>
                </div>                 
            </div>
        </section>
    </div>
</div>
</template>
<script>
    export default {
        name: 'cart',
        computed: {

        },
        methods: {
            additem(shop) {
                this.$store.commit("additem", shop);
            },
            descitem(shop) {
                this.$store.commit("descitem", shop);
            },
            deleteitem(shop) {
                this.$store.commit("deleteitem", shop);
            },
            goorder() {
                this.$router.push('/index/orderpage');
            },
            back() {
                this.$router.push('/index/home');

            }
        },
        data() {
            return {
                msg: '已添加的商品'

            };
        },
    }
</script>
<style scoped>
    .kbc {
        width: 100vw;
        height: 6vh;
        display: block;
    }
    
    .btnadd {
        display: inline-block;
        width: 10vw;
        text-align: center;
        border: 2px solid skyblue;
        background: skyblue;
        border-radius: 15px;
    }
    
    .btndesc {
        text-align: center;
        display: inline-block;
        width: 10vw;
        border: 2px solid yellow;
        background: yellow;
        border-radius: 15px;
    }
    
    .btn {
        text-align: center;
        display: inline-block;
        width: 10vw;
        border: 2px solid red;
        background: red;
        border-radius: 15px;
    }
    
    .productimg img {
        height: 10vh;
        width: 20vw;
    }
    
    .carts {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        /* column：主轴为垂直方向，起点在上沿。行布局 */
    }
    
    .wrs {
        display: flex;
        height: 10vh;
        justify-content: space-around;
    }
</style>