import Vue from 'vue'

const state = {
    recommend2:[],  //推荐小组
    recommend3:[],  //推荐话题
    recommParam:{
        BizType : 1,
        Actid : 0,
        ItemType : 0,
        pi:1,
        ps:6
    },
    topicParam:{   //话题参数
        pi:1,
        ps:30,
        ctype: '0',
        oby:1      
    }
}

const actions = {
    getRecommendAction({commit,state,dispatch},biz){
        dispatch('setBizTypeAction',biz)

        Vue.http.get('/bizType',{
            params : state.recommParam 
        }).then((response) => {
            response.body = JSON.parse(response.body) 
            if(response.body.Ret == 0){
                commit({
                    type : 'getRecommend',
                    data : response.body,
                    biz
                })
            }
        }).catch(function(msg) {
            console.log('------->net error')
        })
    },
    getTopicListAction({commit,state,dispatch,rootState}){
        if(rootState.loading) return

        dispatch('setLoadingAction',true,{root:true})

        Vue.http.get('/topicList',{
            params : state.topicParam 
        }).then((response) => {

            dispatch('setLoadingAction',false,{root:true})
            response.body = JSON.parse(response.body) 

            if(response.body.Ret == 0){
                commit({type:'setPi',pi : response.body.dwPi})
                commit('getSearchList',response.body,{root:true})
            }

        }).catch(function(msg) {
            dispatch('setLoadingAction',false,{root:true})
            console.log('------->net error')
        })
    },
    changeTopicTypeAction({commit,state,dispatch},ctype){
        commit({
            type : 'changeTopicType',
            ctype
        }) 
    },
    setBizTypeAction({commit,state,dispatch},biz){
        commit({
            type : 'setBizType',
            biz
        })   
    },
    resetParamAction({commit,state,dispatch}){
        commit({
            type : 'resetParam'
        }) 
    }
}

const mutations = {
    changeTopicType(state,payload){
        state.topicParam.ctype = payload.ctype
        state.topicParam.pi = 1
    },
    setPi(state,payload){
        state.topicParam.pi = payload.pi*1 + 1
    },
    setBizType(state,payload){
        state.recommParam.BizType = payload.biz
    },
    getRecommend(state,payload){
        state['recommend'+ payload.biz] = payload.data.vData
    },
    resetParam(state,payload){
        state.topicParam.pi = 1
        state.topicParam.ctype = '0'
        state.topicParam.oby = 1
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}