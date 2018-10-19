import Vue from 'vue'
import Router from 'vue-router'

import Layout from '../views/layout/Layout'
Vue.use(Router)

const router = new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: Layout,
            redirect: '/dashboard',
            name: 'Dashboard',
            hidden: true,
            children: [
                {
                    path: 'dashboard',
                    component: () => import('@/views/Home')
                }
            ]
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('@/views/About.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/login/Login.vue')
        }
    ]
})
export default router
