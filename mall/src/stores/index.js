//引入
import Vuex from 'vuex'
import Vue from 'vue';
//加载
Vue.use(Vuex);
//创建一个储存状态的实例
const store = new Vuex.Store({
    state: { //储存共用全局的变量
        token: localStorage.getItem('token') || "",
        userid: localStorage.getItem('userid') || "",
        cartlist: []

    },
    mutations: { //提交修改数据的事件
        saveToken(state, token) {
            state.token = token;
            //持久性的保存数据 localstorge
            localStorage.setItem("token", token)
        },
        saveUserid(state, userid) {
            state.userid = userid;
            //持久性的保存数据 localstorge
            localStorage.setItem("userid", userid)
        },
        delToken(state) {
            state.token = '';
            localStorage.removeItem("token"); //删除token
        },
        delUserid(state) {
            state.userid = '';
            localStorage.removeItem("userid"); //删除userid
        },
        addToCart(state, item) {
            var id = item._id;
            //遍历cartlist数组，find方法找出cartlist中的商品id是否与item的_id相等，相等的话，返回值让变量items接收
            let items = state.cartlist.find(element => element._id == id)
                //如果没有找到这项数据items，那么就添加到cartlist数组中
            if (items == undefined) {
                state.cartlist.push(item)
            } else {
                items.num++;
            }
        },
        additem(state, shop) {
            var id = shop._id;
            let items = state.cartlist.find(element => element._id == id)
                //如果没有找到这项数据items，那么就添加到cartlist数组中
            if (items == undefined) {
                console.log(items);
            } else {
                items.num++;
            }
        },
        descitem(state, shop) {
            var id = shop._id;
            let items = state.cartlist.find(element => element._id == id)
            if (items == undefined) {
                console.log(items);
            } else {
                items.num--;
                if (items.num == 0) {
                    let xiabiao = state.cartlist.findIndex(element => element._id == id)
                    state.cartlist.splice(xiabiao, 1)
                }

            }
        },
        deleteitem(state, shop) {
            var id = shop._id;
            let xiabiao = state.cartlist.findIndex(element => element._id == id)

            if (xiabiao == -1) {
                console.log(xiabiao);
            } else {
                console.log(xiabiao);
                state.cartlist.splice(xiabiao, 1)
            }
        },
        cleancart(state) {
            state.cartlist.splice(0, state.cartlist.length);
        },

    },


})

//暴露实例
export default store;