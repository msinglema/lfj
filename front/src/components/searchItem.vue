<template>
      <li>
          <p class="infotit"><span class="fontIcon fl">问答</span><a href="#" class="more fr">共46条</a></p>
          <p class="user"><img src="http://www.liangfangji.com/mockcdn/image/head.jpg"/>王某某发表的回答</p>
          <p class="problem">这里小儿感冒问题</p>
          <p class="answer">这里是发表的回答这里是发表的回答这里是发表的回答这里是发表的回答这里是发表的回答，这里是发表的回答这里是发表的回答。</p>
          <p class="bottom"><span>来自某话题</span><span>113评论</span><span>201有用</span></p>
      </li>
</template>

<script>
import Util from '../vuex/util.js'
import {mapState, mapActions} from 'vuex'

export default {
    props:['item','index'],
    computed:Util.extend(mapState([]),{

    }),
    methods:Util.extend(mapActions([]),{

    })
}
</script>

