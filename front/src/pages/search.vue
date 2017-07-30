<template>
    <div class="main">
         <div class="search">
             <div class="searchIn">
                <form method="post" action="#">
                    <a href="javascript:;" class="searchBtn"></a>
                    <input type="text" placeholder="小儿感冒" />
                </form>
             </div>
         </div>
        <div class="columnNav">
            <a class="cur" href="javascript:;">综合</a><a href="javascript:;">问答</a><a href="javascript:;">发现</a><a href="javascript:;">小组</a>
        </div>
        <p class="h15"></p>
        <div class="infoList">
            <p class="infotit"><span class="fontIcon fl">问答</span><a href="#" class="more fr">共46条</a></p>
            <ul>
                <li>
                    <p class="user"><img src="../../build/image/head.jpg"/>王某某发表的回答</p>
                    <p class="problem">这里小儿感冒问题</p>
                    <p class="answer">这里是发表的回答这里是发表的回答这里是发表的回答这里是发表的回答这里是发表的回答，这里是发表的回答这里是发表的回答。</p>
                    <p class="bottom"><span>来自某话题</span><span>113评论</span><span>201有用</span></p>
                </li>
                
                <li>
                    <p class="user"><img src="../../build/image/head.jpg"/>王某某发表的回答</p>
                    <p class="problem">这里小儿感冒问题</p>
                    <p class="answer">这里是发表的回答这里是发表的回答这里是发表的回答这里是发表的回答这里是发表的回答，这里是发表的回答这里是发表的回答。</p>
                    <p class="bottom"><span>来自某话题</span><span>113评论</span><span>201有用</span></p>
                </li>
            </ul>
        </div>
        
        <p class="h15"></p>
        <div class="infoList">
            <p class="infotit"><span class="fontIcon fl">发现</span><a href="#" class="more fr">共46条</a></p>
            <ul>
                <li>
                    <p class="user"><img src="../../build/image/head.jpg"/>王某某发表的回答</p>
                    <p class="problem">这里小儿感冒问题</p>
                    <p class="answer">这里是发表的回答这里是发表的回答这里是发表的回答这里是发表的回答这里是发表的回答，这里是发表的回答这里是发表的回答。</p>
                    <p class="bottom"><span>来自某话题</span><span>113评论</span><span>201有用</span></p>
                </li>
                
                <li>
                    <p class="user"><img src="../../build/image/head.jpg"/>王某某发表的回答</p>
                    <p class="problem">这里小儿感冒问题</p>
                    <p class="answer">这里是发表的回答这里是发表的回答这里是发表的回答这里是发表的回答这里是发表的回答，这里是发表的回答这里是发表的回答。</p>
                    <p class="bottom"><span>来自某话题</span><span>113评论</span><span>201有用</span></p>
                </li>
            </ul>
        </div>

        <c-TabBar></c-TabBar>
    </div>
</template>


<script>
import Vue from 'vue'
import TabBar from '../components/tabBar.vue'

export default {
    methods: {
       
    },
    components:{
        'c-TabBar' : TabBar
    }
}

</script>