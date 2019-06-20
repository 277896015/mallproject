import Vue from 'vue'
import Router from 'vue-router'
//路由模块
import homeRouter from './home'
import cartRouter from './cart'
import mineRouter from './mine'
//子路由
import myinfoRouter from './myinfo'


Vue.use(Router)
const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: "/register",
            name: "register",
            component: () =>
                import ("@/views/register")
        },

        {
            path: "/login",
            name: "login",
            component: () =>
                import ("@/views/login")
        },
        {
            path: '/',
            redirect: "/index/home"
        }, {
            path: '/index',
            name: 'index',
            component: () =>
                import ('@/views/index'),
            children: [

                //home movie mine  子路由
                homeRouter,
                cartRouter,
                mineRouter,
                myinfoRouter
            ]
        },
        {
            path: "/page1",
            name: "page1",
            component: () =>
                import ("@/views/page1"),
            children: [{
                path: 'detail/:id',
                name: "detail",
                props: true,
                component: () =>
                    import ('@/views/detail')
            }],

        }, {
            path: "/page2",
            name: "page2",
            meta: {
                auth: true
            },

            component: () =>
                import ("@/views/page2")
        }, {
            path: "/page3",
            name: "page3",
            meta: {
                auth: true
            },

            component: () =>
                import ("@/views/page3")
        }
    ]
})


//全局前置守卫
router.beforeEach((to, from, next) => {
    console.log("全局前置守卫")
    if (to.meta.auth) { //我自己设置的 meta:auth: true
        //需要登录权限
        if (localStorage.getItem('token')) { //你已经登录
            next();
        } else { //你没有登录，重定向去登录，登录完了之后，在重定向到需要权限的页面
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                }
            })
        }
    } else {
        //不需要登录权限
        next();
    }
})




export default router;