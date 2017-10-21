Page({
	confirm: function () {
		console.log('confirm')
	    wx.reLaunch({
	        url: '../profile/profile'
	    })
	},
	backPortal: function () {
		console.log('back portal')
	    wx.reLaunch({
	        url: '../index/index'
	    })
	}
});