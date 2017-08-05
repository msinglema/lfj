import Vue from 'vue'

export default {
    getSearchListAction({commit,state,dispatch}){
        Vue.http.get('//127.0.0.1:18547/search',{
         	  params : state.param 
        }).then((response) => {
           	if(response.body.Ret == 0){
                commit({
               	    type : 'getSearchList',
               	    data : response.body
                })
                dispatch('pushStateAction')
           	}
        }).catch(function(msg) {
           // alert('网络错误，请稍后再试')
           console.log('------->net error')
        })
    },
    appendListAction(){
        commit({
            type : 'appendList'
        })    
    },
    changeTypeAction({commit,state,dispatch},type){
        commit({
            type : 'changeType',
            data : type
        }) 
    },
    resetPiAction({commit,state,dispatch}){
        commit({
            type : 'resetPi'
        }) 
    }
}
