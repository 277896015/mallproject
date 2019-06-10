<template>
<div>
    <div class="carts">
        <section> 
            <div class="product" v-for='(shop,index) in shop_list'>
                <div class="wrs" >
<div class="productimg"></div>
<div>商品{{shop.id}}</div>
<div>价格{{shop.price}}</div>
数量{{shop.num || ''}}
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
    export default {
        name: 'cart',
        data() {
            return {
                shop_list: [{
                    id: 1,
                    name: '鱼香肉丝',
                    price: 12
                }, {
                    id: 2,
                    name: '宫保鸡丁',
                    price: 14
                }, {
                    id: 3,
                    name: '土豆丝',
                    price: 10
                }, {
                    id: 4,
                    name: '米饭',
                    price: 2
                }]
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