<template>
      <li>
          <p class="problem"><a :href="item.sUrl">{{item.sTitle}}</a></p>
          <p class="answer"><a :href="item.sUrl">{{item.sSummary}}</a></p>
          <p class="bottom"><span>{{author}} {{item.dwContenttype}}</span><span>{{item.dwCommentNum}}评论</span><span>{{item.dwLikeNum}}有用</span></p>
      </li>
</template>

<script>
import Util from '../vuex/util.js'
import {mapState, mapActions} from 'vuex'

export default {
    props:['item','index'],
    computed:Util.extend(mapState([]),{
      author(){
        const { item } = this 
        return item.sAuthor ? `来自 ${item.sAuthor}` : ''
      }
    }),
    methods:Util.extend(mapActions([]),{

    })
}
</script>

