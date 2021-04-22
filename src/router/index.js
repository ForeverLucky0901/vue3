import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [{
            path: "/",
            redirect: "/home"
        },
        {
            path: "/rule",
            component: () =>
                import ("../views/rule.vue")
        },
        {
            path: "/home",
            component: () =>
                import ("../views/home.vue")
        },
    ]
})

export default router