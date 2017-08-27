<style lang="less">
    .el-carousel__item{
        text-align: center;
        &:nth-child(2n) {
            background-color: #99a9bf;
        }
        &:nth-child(2n+1) {
            background-color: #d3dce6;
        }
    }
</style>

<template>
    <div  class="main">
        
        <!-- 话题搜索 -->
        <c-SearchBar></c-SearchBar>
        
        <!-- 推荐 -->
        <c-Banner></c-Banner>

        <!-- 版块 -->
        <c-Section></c-Section>
        <!-- <el-button type="primary" @click.native="startHacking">Let's do it</el-button> -->

        <!--信息列表-->
        <c-InfoList :items="renderList" :loading="loading"></c-InfoList>
        
        <p class="paddBtm"></p>
        <c-QuickQuestion></c-QuickQuestion>
        <c-TabBar></c-TabBar>
    </div>
</template>


<script>
import Vue from 'vue'
import { mapState, mapGetters, mapActions } from 'vuex'

import SearchBar from '../components/searchBar.vue'
import Banner from '../components/banner.vue'
import TabBar from '../components/tabBar.vue'
import Section from '../components/section.vue'
import InfoList from '../components/infoList.vue'
import QuickQuestion from '../components/quickQuestion.vue'

export default {
    data:function(){
        return {};
    },

    computed:{
        ...mapState(['loading','list','renderList','total'])
    },

    methods: {
        ...mapActions('discover',['getTopicListAction', 'resetParamAction']),
        ...mapActions(['appendListAction', 'resetAction'])
    },
    created(){
        this.resetParamAction()
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
        'c-SearchBar':SearchBar,
        'c-Banner': Banner,
        'c-TabBar' : TabBar,
        'c-Section' : Section,
        'c-InfoList': InfoList,
        'c-QuickQuestion': QuickQuestion
    }
}
</script>