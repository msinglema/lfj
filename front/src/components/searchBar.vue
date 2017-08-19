<template>
   <div class="search">
       <div class="searchIn">
            <form form  method="post" @submit.prevent="getSearchList">
                <a href="javascript:;" class="searchPic" @click.stop="getSearchList"></a>
                <input type="text" v-model="param.query" ref="keyword"  placeholder="小儿感冒" />
                <a href="javascript:;" class="searchBtn" @click.stop="getSearchList">搜索</a>
            </form>
       </div>
   </div>
</template>

<script>
import Util from '../vuex/util.js'
import router from '../router/index.js'
import {mapState, mapActions} from 'vuex'

export default {
    computed:mapState('search',['param']),
    methods:Util.extend(
        mapActions('search',['getSearchListAction','resetPiAction','resetListAction']),
        mapActions(['resetAction']),
        {
            getSearchList(){

                if(this.param.query.trim() == ''){
                    return;
                }
                 
                this.$refs.keyword && this.$refs.keyword.blur()  
                
                if(this.$route != '/search'){
                    router.push('search')
                }

                this.resetPiAction()
                this.resetAction()
                this.getSearchListAction()
            }
        }    
    )
}
</script>

