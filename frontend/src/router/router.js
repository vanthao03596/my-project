import Vue from 'vue'
import Router from 'vue-router'

import Layout from '../views/layout/Layout'
Vue.use(Router)

export const constantRouterMap = [
    {
        path: '/login',
        component: () => import('@/views/login/Login.vue'),
        hidden: true
    },
    // { path: '/404', component: () => import('@/views/404'), hidden: true },
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        name: 'Dashboard',
        hidden: true,
        children: [
            {
                path: 'dashboard',
                component: () => import('@/views/dashboard/index')
            },
            {
                path: '/about',
                name: 'about',
                component: () => import('@/views/About.vue')
            }
        ]
    },
    {
        path: '/form',
        component: Layout,
        children: [
            {
                path: 'index',
                name: 'Form',
                component: () => import('@/views/form/index'),
                meta: { title: 'Form', icon: 'form' }
            }
        ]
    }
]
const router = new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    base: process.env.BASE_URL,
    routes: constantRouterMap
})
export default router
