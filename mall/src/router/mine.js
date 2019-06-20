module.exports = {
    path: 'mine',
    name: "mine",
    //标记需要登录权限
    meta: {
        auth: true
    },
    component: () =>
        import ('@/views/mine')
}