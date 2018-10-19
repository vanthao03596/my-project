import Cookies from 'js-cookie'

import Vue from 'vue'

import App from '@/App.vue'

import router from '@/router/router'

import store from '@/store'

import 'normalize.css/normalize.css'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/icons'
import '@/styles/index.scss'
import http from '@/services/http'
import '@/router'
import i18n from './lang'

Vue.config.productionTip = false

Vue.use(Element, {
    size: Cookies.get('size') || 'medium', // set element-ui default size
    i18n: (key, value) => i18n.t(key, value)
})

new Vue({
    router,
    store,
    render: h => h(App),
    i18n,
    created() {
        http.init()
    }
}).$mount('#app')
