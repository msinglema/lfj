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
	// getFeatureData (){
	// 	return new Promise( (resolve, reject) => {
	// 		setTimeout( ()=> {
	// 			const data = [
	// 				{src: 'http://www.liangfangji.com/mockcdn/image/banner-1.jpg', alt:'1'},
	// 				{src: 'http://www.liangfangji.com/mockcdn/image/banner-2.jpg', alt:'2'},
	// 				{src: 'http://www.liangfangji.com/mockcdn/image/banner-3.jpg', alt:'3'}
	// 			]
	// 			resolve(data)
	// 		}, 1000)
	// 	})
	// },
	getFeatures ({ dispatch, commit }) {
		Vue.http.get('http://www.liangfangji.com/operation/operation',{
			params:{otype : 1, Actid : 0, ItemType : 0, pi:1, ps:6 }
		}).then((response) => {
			// console.log('~~~~ response.body: ', response.body )
			if(response.body.dwRet == 0){
				commit( types.RECEIVE_FEATURES,  response.body.vData )
				return;
			}
		}).catch(function(msg) {
			console.log('------->net error')
		})
	}
}

// mutations
const mutations = {
  [types.RECEIVE_FEATURES] (state, data) {
  	state.features = data;
  }
}

export default {
	namespaced: true,
  state,
  getters,
  actions,
  mutations
}