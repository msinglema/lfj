<template>
    <div class="main">
        <c-searchBar></c-searchBar>
        <div class="columnNav">
            <a :class="{cur : param.btype == '0'}" @click="changeType('0')" href="javascript:;">精选</a>
            <a :class="{cur : param.btype == '1'}" @click="changeType('1')" href="javascript:;">问答</a>
            <a :class="{cur : param.btype == '2'}" @click="changeType('2')" href="javascript:;">话题</a>
            <a :class="{cur : param.btype == '3'}" @click="changeType('3')" href="javascript:;">咨讯</a>
        </div>
        <p class="h15"></p>
        <div class="infoList">
            <ul id='searchList'>
                <c-searchItem 
                 v-for="(item,index) in renderList"
                 v-bind:item="item"
                 v-bind:index="index"
                 :key="item.id"
                ></c-searchItem>
            </ul>
            <div class="loading" :class="{none:!loading}"></div>
        </div>
        <div class="empty" :class="{none: list.length > 0 || (param.pi == 1 && total == 0)}">查询没有数据</div>
        <p class="paddBtm"></p>
        <c-TabBar></c-TabBar>
    </div>
</template>

<script>
import Util from '../vuex/util.js'
import {mapState, mapActions} from 'vuex'
import TabBar from '../components/tabBar.vue'
import SearchBar from '../components/searchBar.vue'
import SearchItem from '../components/searchItem.vue'

export default {
    computed:Util.extend(
        mapState('search',['param']),
        mapState(['loading','list','renderList','total'])
    ),
    methods:Util.extend(
        mapActions('search',['getSearchListAction','changeTypeAction','resetPiAction','resetParamAction']),
        mapActions(['appendListAction','resetAction']),
        {
            changeType(type){
                if(this.param.btype == type) return
                this.changeTypeAction(type)
                this.resetPiAction()
                this.resetAction()
                this.getSearchListAction()    
            }
        }
    ),
    created(){
        this.getSearchListAction()
    },
    mounted(){

        window.onscroll = () => {
            if(this.list.length == 0){
                return
            }

            if(document.body.clientHeight - window.innerHeight - window.scrollY <= 10){
                if(this.renderList.length < this.list.length){
                    this.appendListAction()
                }else if(this.renderList.length == this.list.length && this.list.length < this.total){
                    this.getSearchListAction()
                }
            }
        }
    },
    beforeRouteLeave(to, from, next){
        this.resetParamAction()
        this.resetAction()
        window.onscroll = null
        next()
    },
    components:{
        'c-TabBar' : TabBar,
        'c-searchBar' : SearchBar,
        'c-searchItem' : SearchItem
    }
}
</script>