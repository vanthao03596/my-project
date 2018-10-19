import NProgress from 'nprogress'
import Cookies from 'js-cookie'
import auth from '@/api/auth'
const state = {
    user: null,
    token: Cookies.get('token') || null
}

const getters = {
    user: state => state.user,
    token: state => state.token,
    check: state => state.user !== null
}

const mutations = {
    SAVE_TOKEN(state, { token }) {
        state.token = token
        Cookies.set('token', token)
    },
    SET_USER(state, user) {
        state.user = user
    },
    SET_USER_FAIL(state) {
        state.token = null
        Cookies.remove('token')
    },
    LOGOUT(state) {
        state.user = null
        state.token = null
        Cookies.remove('token')
    }
}

const actions = {
    login({ commit }, { email, password }) {
        NProgress.start()
        return new Promise((resolve, reject) => {
            auth.login(email, password)
                .then(token => {
                    resolve(token)
                    commit('SAVE_TOKEN', token)
                })
                .catch(error => {
                    reject(error)
                })
        })
    },
    saveToken({ commit }, token) {
        commit('SAVE_TOKEN', { token })
    },
    fetchUser({ commit }) {
        return new Promise((resolve, reject) => {
            auth.fetchUser()
                .then(({ data }) => {
                    resolve(data)
                    commit('SET_USER', data)
                })
                .catch(error => {
                    reject(error)
                    commit('SET_USER_FAIL')
                })
        })
    },
    logout({ commit }) {
        return new Promise((resolve, reject) => {
            auth.logout()
                .then(() => {
                    resolve()
                    commit('LOGOUT')
                })
                .catch(error => {
                    reject(error)
                })
        })
    }
}

export default {
    state,
    getters,
    mutations,
    actions,
    namespaced: true
}
