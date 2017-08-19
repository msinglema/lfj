import Vue from 'vue'
import Vuex from 'vuex'
import resource from 'vue-resource'

import portal from './modules/portal.js'
import search from './modules/search.js'
import discover from './modules/discover.js'

Vue.use(Vuex)
Vue.use(resource)

const state = {
    list:[],
    total: 0,
    renderList: [], 
    loading : false
}

const actions ={
    setLoadingAction({commit,state,dispatch},value){
        commit({type:'setLoading',value})
    },
    appendListAction({commit,state,dispatch}){
        commit({
            type : 'appendList'
        })    
    },
    resetAction({commit,state,dispatch}){
        commit({
            type : 'reset'
        }) 
    }
}

const mutations={
    setLoading(state,payload){
        state.loading = payload.value
    },
    getSearchList(state,payload){
        state.total = payload.dwTotal
        state.list = [...state.list,...payload.vData]  

        let len = state.renderList.length
        let list = state.list.slice(len,len+10)
        state.renderList = [...state.renderList,...list]

        console.log('------------->',state)
    },
    appendList(state,payload){
        let len = state.renderList.length
        let list = state.list.slice(len,len+10)
        state.renderList = [...state.renderList,...list]
    },
    reset(state,payload){
        state.total = 0
        state.list = []
        state.loading = false
        state.renderList = []
    }
}


export default new Vuex.Store({
    state,
    mutations,
    actions,
    modules:{
        portal,
       search,
       discover
    }
})