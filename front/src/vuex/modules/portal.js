import Vue from 'vue'
import * as types from '../mutation-types'

// initial state
const state = {
  features: [],
  discovers: {},
  loading:{
  	feature: false
  }
}

// getters
const getters = {
  isFeatureLoading: state => state.loading.feature,
  features: state => state.features,
  discovers : state => state.discovers
}

// actions
const actions = {
	getFeatureData (){
		return new Promise( (resolve, reject) => {
			setTimeout( ()=> {
				const data = [
					{src: 'http://www.liangfangji.com/mockcdn/image/banner-1.jpg', alt:'1'},
					{src: 'http://www.liangfangji.com/mockcdn/image/banner-2.jpg', alt:'2'},
					{src: 'http://www.liangfangji.com/mockcdn/image/banner-3.jpg', alt:'3'}
				]
				resolve(data)
			}, 1000)
		})
	},
	getFeatures ({ dispatch, commit }) {
		dispatch('getFeatureData').then((data)=>{
			commit( types.RECEIVE_FEATURES,  data )
		},(err)=>{
			console.error('error: ', JSON.stringify(err))
		})
	},
	getDiscovers({ commit }){
		Vue.http.get('http://www.liangfangji.com/discover/show').then((response) => {
			console.log('~~~~ response.body: ', response.body )
			if(response.body.dwRet == 0){
				commit( types.RECEIVE_DISCOVERS,  response.body )
				return;
			}
		}).catch(function(msg) {
			console.log('------->net error')
		})
	}
}
// http://www.liangfangji.com/operation/operation?act=1

// mutations
const mutations = {
  [types.RECEIVE_FEATURES] (state, data) {
  	state.features = data;
  },
  [types.RECEIVE_DISCOVERS] (state, data) {
  	console.log('~~~~~~ mutations discovers: ', data)
  	state.discovers = data;
  },

}

export default {
	namespaced: true,
  state,
  getters,
  actions,
  mutations
}