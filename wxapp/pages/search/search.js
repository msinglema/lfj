const app = getApp()

import util from '../../utils/util.js'
const { scene_map, request } = util

Page({
	data:{
		pi:0,
		ps:2,
		query:'',
		prescriptions:[],
		diseases:[]
	},
	onLoad:function(options){
		app._getUserInfo().then((userInfo)=>{
		  this.setData({ userInfo })
		})
		const { query } = options
		if(query) {
			// this.doSearch(null, {query})
			this.setData({query})
		}
	},
	onShow:function(){
		const { query } = this.data
		console.log('query in onshow: ', query)
		if( '' !==  query ) this.doSearch(null, {query})
	},
	doSearch: function(e, opts){
		let query
		if( null !== e ) query = e.detail.query
		else query = opts.query

		const { pi, ps } = this.data
		const data = { pi, ps, query }
		const path = 'SEARCH'

		console.log(path)
		request({ path: path, data})
			.then((result)=>{
				const { data } = result
				const prescriptions = data.find( (item)=> 1 === item.dwBtype )	//分享和问答
				const diseases = data.find( (item)=> 3 === item.dwBtype )	//疾病
				this.setData({prescriptions:prescriptions.vData, diseases:diseases.vData})
			}, (error)=>{
			  console.log('error: ', error)
			})
	},
	searchsubmit: function (e){
		this.doSearch(e.detail.query)
	},
	showDetail: function (e){
		const { currentTarget:target } = e
		const { dataset:{btype, id} } = target
		console.log('btype, id: ', btype, id)
		if( "1" === btype ) wx.navigateTo({url: `../detail/prescription?id=${id}`})
		if( "3" === btype ) wx.navigateTo({url: `../detail/disease?id=${id}`})
	}
})
