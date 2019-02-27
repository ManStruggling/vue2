import {VIEW_LOADING,CAR_NUM,VIEW_NAV,ADD_NUM,CAR_LIST,SET_NUM} from './types'

let mutations = {
    [VIEW_LOADING]:(state,payload)=> state.bLoading=payload,
    [CAR_NUM]:(state,payload)=> state.carNum=payload,
    [VIEW_NAV]:(state,payload)=> state.bNav=payload,
    [ADD_NUM]:(state,payload)=> state.carNum=parseInt(state.carNum)+parseInt(payload),
    [CAR_LIST]:(state,payload)=> state.carList=payload,
    [SET_NUM]:(state,payload)=> state.carNum=payload
}

export default mutations;