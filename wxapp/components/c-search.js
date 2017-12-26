Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    query: {
      type: String,
      value: '',
    }
  },
  data: {
    // 这里是一些组件内部数据
  },
  ready:function(){
    const {query} = this.data  //组件数据，包括内部数据和属性值
    if(query) this.setData({inputShowed:true})
  },
  methods: {
    // 这里是一个自定义方法
    showInput: function () {
      this.setData({inputShowed: true })
    },
    hideInput: function () {
      this.setData({
        query: "",
        inputShowed: false
      })
    },
    clearInput: function () {
      this.setData({query: ""})
    },
    inputTyping: function (e) {
      this.setData({query: e.detail.value })
    },
    searchSubmit: function (e){
      const { query } = this.data
      this.triggerEvent('dosearch', {query}, {bubbles:false})
    }
  }
})