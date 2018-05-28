import ApiProvider from './ApiProvider'

const installer = {

    install(Vue) {
        let authProvider = new ApiProvider();

        Object.defineProperty(Vue.prototype, '$gitApi', {
            get() {
                return authProvider
            }
        })

    }
}

export default installer
