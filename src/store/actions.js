import * as types from './types';

let actions = {
    [types.VIEW_LOADING]:({commit,state},payload)=>commit(types.VIEW_LOADING,payload),
    [types.CAR_NUM]:({commit,state},payload)=>commit(types.CAR_NUM,payload),
    [types.VIEW_NAV]:({commit,state},payload)=>commit(types.VIEW_NAV,payload),
    [types.ADD_NUM]:({commit,state},payload)=>commit(types.ADD_NUM,payload),
    [types.CAR_LIST]:({commit,state},payload)=>commit(types.CAR_LIST,payload),
    [types.SET_NUM]:({commit,state},payload)=>commit(types.SET_NUM,payload)
}

export default actions;