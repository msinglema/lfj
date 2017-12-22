const app = getApp()

import util from '../../utils/util.js'
const { scene_map, request } = util

Page({
	data:{
		pi:0,
		ps:2,
		prescriptions:[],
		diseases:[]
	},
	onLoad:function(options){
		app._getUserInfo().then((userInfo)=>{
	      this.setData({ userInfo })
	    })
	    const { query } = options
	    if(query){
	    	this.setData({inputShowed:true, query})
	    	this.doSearch(query)
	    }
	},
	doSearch: function(query){
		const { pi, ps } = this.data
		const data = { pi, ps, query: query ? query : this.data.query }
		const path = 'SEARCH'

		console.log(path)
		request({ path: path, data})
			.then((result)=>{
				const { data } = result
				const prescriptions = data.find( (item)=> 1 === item.dwBtype )
				const diseases = data.find( (item)=> 3 === item.dwBtype )
				this.setData({prescriptions:prescriptions.vData, diseases:diseases.vData})
			}, (error)=>{
			  console.log('error: ', error)
			})
	},
	//搜索框相关
	showInput: function () {
	    this.setData({
	        inputShowed: true
	    })
	},
	hideInput: function () {
	    this.setData({
	        query: "",
	        inputShowed: false
	    })
	},
	clearInput: function () {
	    this.setData({
	        query: ""
	    })
	},
	inputTyping: function (e) {
	    this.setData({
	        query: e.detail.value
	    })
	},
	searchsubmit: function (e){
		this.doSearch()
	}
})
