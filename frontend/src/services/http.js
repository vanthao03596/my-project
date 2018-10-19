import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import router from '@/router/router'
import store from '@/store'
export default {
    request: (method, url, data, successCb = null, errorCb = null) => {
        axios
            .request({ url, data, method: method.toLowerCase() })
            .then(successCb)
            .catch(errorCb)
    },

    get(url, successCb = null, errorCb = null) {
        return this.request('get', url, {}, successCb, errorCb)
    },

    post(url, data, successCb = null, errorCb = null) {
        return this.request('post', url, data, successCb, errorCb)
    },

    put(url, data, successCb = null, errorCb = null) {
        return this.request('put', url, data, successCb, errorCb)
    },

    delete(url, data = {}, successCb = null, errorCb = null) {
        return this.request('delete', url, data, successCb, errorCb)
    },

    init: () => {
        // axios.defaults.baseURL =

        // Intercept the request to make sure the token is injected into the header.
        axios.interceptors.request.use(config => {
            const token = store.getters['auth/token']
            if (token) {
                config.headers.common['Authorization'] = `Bearer ${token}`
            }
            return config
        })

        // Intercept the response and…
        axios.interceptors.response.use(
            response => {
                NProgress.done()

                // …get the token from the header or response data if exists, and save it.
                const token =
                    response.headers['Authorization'] || response.data['token']
                token && store.getters['auth/token']

                return response
            },
            error => {
                NProgress.done()
                // Also, if we receive a Bad Request / Unauthorized error
                if (
                    error.response.status === 400 ||
                    error.response.status === 401
                ) {
                    // and we're not trying to login
                    store.commit('auth/logout')
                    router.push({ name: 'login' })
                }

                return Promise.reject(error)
            }
        )
    }
}
