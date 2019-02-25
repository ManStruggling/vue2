import axios from 'axios';
import store from '../store';
import * as types from '../store/types'

axios.interceptors.request.use(function(config){//success
    store.dispatch(types.VIEW_LOADING,true)
    return config;
},function(error){//error

    return Promise.reject(error);
})

axios.interceptors.response.use(function(response){//success
    store.dispatch(types.VIEW_LOADING,false)
    return response;
},function(error){//error
    return Promise.reject(error);
})

export default {
    install(Vue){
        Vue.prototype.$http = axios;
        window.axios = axios;
    }
}