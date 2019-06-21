module.exports = {
    path: 'myinfo',
    name: "myinfo",
    component: () =>
        import ('@/views/mine/myinfo.vue'),
    meta: {
        auth: true
    },

}