<template>
<div>
    <div class="carts">
        <section> 
            <div class="product" v-for='(shop,index) in $store.state.cartlist'>
                <div class="wrs" >
<div class="productimg">
        <img :src="'/api'+shop.pic" alt="">
</div>
<div>{{shop.title}}</div>
<div>价格{{shop.price}}</div>
邮费{{shop.fee || ''}}
 <td>   
        <span @click='add_db(shop)' class="btnadd">+</span>
        <span @click='desc_db(shop)' class="btndesc">-</span>
        <span @click='delete_db(shop)' class="btn">删除</span>
 </td>
                </div>                 
            </div>
        </section>
    </div>
</div>
</template>
<script>
    import {


        mapActions
    } from "vuex"
    export default {
        name: 'cart',
        computed: {


        },
        data() {
            return {
                msg: '已添加的商品'

            };
        },
    }
</script>
<style scoped>
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
        height: 80vh;
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