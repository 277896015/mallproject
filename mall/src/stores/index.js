//引入
import Vuex from 'vuex'
import Vue from 'vue';
//加载
Vue.use(Vuex);
//创建一个储存状态的实例
const store = new Vuex.Store({
    state: { //储存共用全局的变量
        token: localStorage.getItem('token') || "",
        cartlist: [],
    },
    mutations: { //提交修改数据的事件
        saveToken(state, token) {
            state.token = token;
            //持久性的保存数据 localstorge
            localStorage.setItem("token", token)
        },
        add(state, n) {
            // console.log(state,{id})
            //遍历added数组，find方法找出点击的id和added中的id是相等的情况下，这项数据让变量items接收
            // let items = state.added.find(n => n.id == id)
            //如果么有找到这项数据items，那么就添加到added数组中
            //if (!items) {
            state.cartlist.push(n)
                // } else {
                //如果added数组中已经存在添加的数据了，那么就让数量加加
                // items.num++
                // }
        },

    },
    actions: {
        // 添加到购物车
        addToCart({ commit }, n) {
            //触发add事件
            commit('add',
                n
            )
        }
    },
    //输出购物车列表

})

//暴露实例
export default store;