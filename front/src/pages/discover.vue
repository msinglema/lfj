<template>
    <div class="main">
        <c-searchBar></c-searchBar>
        <p class="columnTitle"><span class="fl">推荐小组</span><a class="more fr" href="#">全部</a></p>
        <div class="group">
            <swiper :options="swiperOption2">
                <swiper-slide v-for="item in recommend2" :key="item.itemId">
                    <a :href="item.DesUrl"><img :src="item.imgUrl"/><p class="tit">{{item.itemName}}</p><p class="smalltxt">{{item.desc}}</p></a>
                </swiper-slide>
            </swiper>
        </div>

        <p class="h15"></p>
        <!--推荐话题-->
        <p class="columnTitle"><span class="fl">推荐话题</span><a class="more fr" href="#">全部</a></p>
        <div class="topic">
            <swiper :options="swiperOption3">
                <swiper-slide v-for="item in recommend3" :key="item.itemId">
                    <a :href="item.DesUrl"><img :src="item.imgUrl"/><p>{{item.itemName}}</p></a>
                </swiper-slide>
            </swiper>
        </div>
        
        <p class="h15"></p>
        
        <!--栏目导航-->
        <div class="columnNav columnNav2">
            <p class="defnav">
                <a  :class="{cur:topicParam.ctype == 0}"  @click="changeType(0)" href="javascript:;">全部</a>
                <a  v-for="nav in showNavs" :key="nav[0]" :class="{cur:topicParam.ctype == nav[0]}" @click="changeType(nav[0])" href="javascript:;">{{nav[1]}}</a>
            </p>
            <div class="moreNav">
                <a class="more"  :class="{rotate:!more}" href="javascript:;" @click="toggleMore"></a>
                <div class="moreNavlist" :class="{none : !more}">
                    <a class="alltxt" @click="changeType(0)" href="javascript:;">全部</a>
                    <a class="child" v-for="nav in navs" :key="nav[0]" @click="changeType(nav[0])" href="javascript:;">{{nav[1]}}</a>
                </div>
            </div>
        </div>
        
        <!--信息列表-->
        <div class="infoList">
            <ul>
                <c-discoverItem 
                 v-for="(item,index) in renderList"
                 v-bind:item="item"
                 v-bind:index="index"
                 :key="item.id"
                ></c-discoverItem>
            </ul>
            <div class="loading" :class="{none:!loading}"></div>
        </div>
        <div class="empty" :class="{none: list.length > 0 || (topicParam.pi == 1 && total == 0)}">查询没有数据</div>
        <p class="paddBtm"></p>
        <c-TabBar></c-TabBar>
    </div>
</template>

<script>
import Util from '../vuex/util.js'
import {mapState, mapActions} from 'vuex'
import {swiper,swiperSlide} from 'vue-awesome-swiper'
import TabBar from '../components/tabBar.vue'
import SearchBar from '../components/searchBar.vue'
import DiscoverItem from '../components/discoverItem.vue'

export default {
    data(){
       return {
            more: false,
            swiperOption2: {
                pagination: '.swiper-pagination',
                slidesPerView: 'auto',
                paginationClickable: true,
                spaceBetween:10
                //slidesPerView: 4,
                //spaceBetween: 30
            },
            swiperOption3: {
                pagination: '.swiper-pagination',
                slidesPerView: 'auto',
                paginationClickable: true,
                spaceBetween:20
            },
            navs: [
                [1, '儿科'],
                [2, '内科'],
                [3, '外科'],
                [4, '妇科'],
                [5, '耳科'],
                [6, '眼科'],
                [7, '鼻科'],
                [8, '神经科'],
                [9, '牙科'],
                [10, '放射科']
            ]
       }
    },
    computed:Util.extend(
        mapState('discover',['recommend2','recommend3','topicParam']),
        mapState(['loading','list','renderList','total']),
        {
            showNavs(){
                return this.navs.slice(0,4)
            }
        }
    ),
    methods:Util.extend(
          mapActions('discover',['getRecommendAction','getTopicListAction','changeTopicTypeAction','resetParamAction']),
          mapActions(['appendListAction','resetAction']),
          {
            changeType(type){
                if(this.topicParam.ctype == type) return
                if(type != 0){
                    this.refactorType(type)
                }   
                if(this.more){
                    this.toggleMore()
                }
                
                this.resetAction()
                this.changeTopicTypeAction(type)
                this.getTopicListAction()    
            },
            refactorType(type){
                let index = 0
                //比较前4个类目
                for(let i=0; i< this.navs.length; ++i){
                    if(this.navs[i][0] == type){
                        index = i
                    }
                }

                if(index > 3){
                    let temp = this.navs[index]
                    this.navs.splice(index,1)
                    this.navs.unshift(temp)
                }
            },
            toggleMore(){
                this.more = ! this.more
            }
        }
    ),
    created(){
        this.getRecommendAction(2)
        this.getRecommendAction(3)
        this.getTopicListAction()
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
                    this.getTopicListAction()
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
       swiper,
       swiperSlide,
       'c-searchBar' : SearchBar,
       'c-TabBar' : TabBar,
       'c-discoverItem':DiscoverItem 
    }
}
</script>
