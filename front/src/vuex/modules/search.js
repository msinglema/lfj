import Vue from 'vue'

const state = {
    param:{
        query:'',
        pi:1,
        ps:30,
        btype: '0',
        oby:1      
    } 
}

const actions = {
    getSearchListAction({commit,state,dispatch,rootState}){
        if(rootState.loading) return
        dispatch('setLoadingAction', true, {root:true})

        Vue.http.get('http://www.liangfangji.com/search/search',{
              params : state.param 
        }).then((response) => {
            dispatch('setLoadingAction', false, {root:true})

            if(response.body.dwRet == 0){
                commit({type:'setPi',pi : response.body.dwPi})
                commit('getSearchList',response.body,{root:true})
            }

        }).catch(function(msg) {
            dispatch('setLoadingAction', false, {root:true})
            console.log('------->net error')
        })
    },
    changeTypeAction({commit,state,dispatch},btype){
        commit({
            type : 'changeType',
            btype
        }) 
    },
    resetPiAction({commit,state,dispatch}){
        commit({
            type : 'resetPi'
        }) 
    },
    setPiAction({commit,state,dispatch},pi){
        commit({
            type : 'setPi',
            pi
        }) 
    },
    resetParamAction({commit,state,dispatch}){
        commit({
            type : 'resetParam'
        }) 
    }
}

const mutations = {
    changeType(state,payload){
        state.param.btype = payload.btype
    },
    setPi(state,payload){
        state.param.pi = payload.pi*1 + 1
    },
    resetPi(state,payload){
        state.param.pi = 1
    },
    resetParam(state,payload){
        state.param.query = ''
        state.param.pi = 1
        state.param.btype = '0'
        state.param.oby = 1
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}