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
        <c-InfoList></c-InfoList>
        
        <p class="paddBtm"></p>
        <c-QuickQuestion></c-QuickQuestion>
        <c-TabBar></c-TabBar>
    </div>
</template>


<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'

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

    computed:{},

    methods: {},

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