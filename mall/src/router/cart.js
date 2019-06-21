module.exports = {
    path: 'cart',
    name: "cart",
    component: () =>
        import ('@/views/cart'),
    meta: {
        auth: true
    }
}