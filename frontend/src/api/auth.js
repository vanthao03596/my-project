import http from '@/services/http'

export default {
    login(email, password) {
        return new Promise((resolve, reject) => {
            http.post(
                'api/login',
                { email, password },
                ({ data }) => {
                    resolve(data)
                },
                error => reject(error)
            )
        })
    },
    fetchUser() {
        return new Promise((resolve, reject) => {
            http.get(
                'api/user',
                response => {
                    resolve(response)
                },
                error => {
                    reject(error)
                }
            )
        })
    },
    logout() {
        return new Promise((resolve, reject) => {
            http.post(
                'api/logout',
                {},
                () => {
                    resolve()
                },
                error => {
                    reject(error)
                }
            )
        })
    }
}
