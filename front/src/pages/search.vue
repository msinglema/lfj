<template>
    <div class="main">
         <div class="search">
             <div class="searchIn">
                   <a href="javascript:;" class="searchBtn"></a>
                   <input type="text" v-model="param.query"  @input="getSearchList" placeholder="小儿感冒" />
             </div>
         </div>
        <div class="columnNav">
            <a :class="{cur : param.filter == '1'}" @click="changeType('1')" href="javascript:;">综合</a>
            <a :class="{cur : param.filter == '2'}" @click="changeType('2')" href="javascript:;">问答</a>
            <a :class="{cur : param.filter == '3'}" @click="changeType('3')" href="javascript:;">发现</a>
            <a :class="{cur : param.filter == '4'}" @click="changeType('4')" href="javascript:;">小组</a>
        </div>
        <p class="h15"></p>
        <ul id='searchList' style="height:1000px">
            <c-searchItem 
             v-for="(item,index) in renderList"
             v-bind:item="item"
             v-bind:index="index"
             :key="item.id"
            ></c-searchItem>
        </ul>
    </div>
</template>


<script>
import Util from '../vuex/util.js'
import {mapState, mapActions} from 'vuex'  
import SearchItem from '../components/searchItem.vue'
var searchTag = null;

export default {
    computed:Util.extend(mapState(['param','list','renderList','total']),{

    }),
    methods:Util.extend(mapActions(['getSearchListAction','changeTypeAction','resetPiAction','appendListAction']),{
        getSearchList(){
            searchTag && window.clearTimeout(searchTag)
            searchTag = window.setTimeout(() =>{
                this.resetPiAction()
                this.getSearchListAction()
            },300)
        },
        changeType(type){
            if(this.param.filter == type) return
            this.changeTypeAction(type)
            this.resetPiAction()
            this.getSearchListAction()   
        }
    }),
    created(){
        this.getSearchListAction()
    },
    mounted(){
        let list = this.$el.querySelector('#searchList')
        if(!list) return

        window.onscroll = () => {
            if(this.list.length == 0 || this.list.length == this.total){
                return
            }

            if(list.clientHeight - window.innerHeight - window.scrollY <= 0){
                if(this.renderList.length < this.list.length){
                    this.appendListAction()
                }else if(this.renderList.length == this.list.length){
                    this.getSearchListAction()
                }
            }
        }
    },
    destroyed(){
        window.onscroll = null
    },
    components:{
        'c-searchItem' : SearchItem
    },
}

</script>

