import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import router from './router'
import store from "./stores"

import '@/requests/http'
import '@/assets/css/reset.css'
import '@/assets/css/border.css'
import "@/assets/css/common.css"

//引入
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);

//移动端fast快速点击响应
import FastClick from 'fastclick'
FastClick.attach(document.body);

Vue.prototype.$axios = axios
Vue.config.productionTip = false
import { Search } from 'mint-ui';

Vue.component(Search.name, Search);
new Vue({
    //注入到根实例中
    store,
    router,
    render: h => h(App),
}).$mount('#app')