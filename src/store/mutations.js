import {VIEW_LOADING} from './types'

let mutations = {
    [VIEW_LOADING]:(state,payload)=> state.bLoading=payload
}

export default mutations;