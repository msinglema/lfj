export default {
    getSearchList(state,payload){
    	state.total = payload.data.total
        state.param.pi = payload.data.Pi
        state.list = [...state.list,...payload.data.vData]  

        let len = state.renderList.length
        let list = state.list.slice(len,len+20)
        state.renderList = [...state.renderList,...list]
    },
    changeType(state,payload){
        state.param.filter = payload.data
    },
    resetPi(state,payload){
    	state.param.pi = 0
    },
    appendList(state,payload){
    	let len = state.renderList.length
        let list = state.list.slice(len,len+20)
        state.renderList = [...state.renderList,...list]
    }
}
