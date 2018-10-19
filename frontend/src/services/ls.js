import localStore from 'local-storage'

export default {
    get: (key, defaultVal = null) => localStore(key) || defaultVal,
    set: (key, val) => localStore(key, val),
    remove: key => localStore.remove(key)
}
