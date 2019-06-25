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

            //遍历cartlist数组，find方法找出点击的id和cartlist中的id是相等的情况下，这项数据让变量items接收
            let items = state.cartlist.find(item => item._id == id)
                //如果没有找到这项数据items，那么就添加到cartlist数组中
            if (items == undefined) {
                state.cartlist.push(item)
            } else {
                items.num++;
            }
        },
        additem(state, shop) {
            var id = shop._id;
            let items = state.cartlist.find(shop => shop._id == id)
                //如果没有找到这项数据items，那么就添加到cartlist数组中
            if (items == undefined) {
                console.log(items);
            } else {
                items.num++;
            }
        },
        descitem(state, shop) {
            var id = shop._id;
            let items = state.cartlist.find(shop => shop._id == id)
                //如果没有找到这项数据items，那么就添加到cartlist数组中
            if (items == undefined) {
                console.log(items);
            } else {
                items.num--;
                if (items.num == 0) {
                    let xiaobiao = state.cartlist.findIndex(shop => shop._id == id)
                    state.cartlist.splice(xiaobiao, 1)
                }

            }
        },
        deleteitem(state, shop) {
            var id = shop._id;
            let xiaobiao = state.cartlist.findIndex(shop => shop._id == id)
                //如果没有找到这项数据items，那么就添加到cartlist数组中
            if (xiaobiao == -1) {
                console.log(xiaobiao);
            } else {
                console.log(xiaobiao);
                state.cartlist.splice(xiaobiao, 1)
            }
        },

    },


})

//暴露实例
export default store;