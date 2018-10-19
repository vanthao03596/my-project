import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import app from './modules/app'
import user from './modules/user'
import getters from './getters'
Vue.use(Vuex)

export default new Vuex.Store({
    getters,
    state: {},
    mutations: {},
    actions: {},
    modules: {
        auth,
        app,
        user
    }
})
