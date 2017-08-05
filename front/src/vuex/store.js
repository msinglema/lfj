import Vue from 'vue'
import Vuex from 'vuex'
import resource from 'vue-resource'
import actions from './actions.js'
import mutations from './mutations.js'

Vue.use(Vuex)
Vue.use(resource)

const state = {
    list:[],
    total: 0,
    renderList: [],  
    param:{
        query:'',
        pi:0,
        ps:60,
        filter: '1',
        oby:1,        
        loading : false 
    }
}

const getters = {

}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})