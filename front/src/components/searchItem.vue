<template>
      <li>
          <p class="infotit"><span class="fontIcon fl">问答</span></p>
          <p class="user"><img src="../../build/image/head.jpg"/>{{author}}</p>
          <p class="problem"><a :href="item.sUrl">{{item.sTitle}}</a></p>
          <p class="answer"><a :href="item.sUrl">{{item.sSummary}}</a></p>
          <p class="bottom">
            <span>{{type}}</span>
            <span>{{item.dwCommentNum}} 评论</span>
            <span>{{item.dwLikeNum}} 有用</span>
          </p>
          <p class="flow">
            <span>{{time}}</span>
          </p>
      </li>
</template>

<script>
import moment from 'moment'
import Util from '../vuex/util.js'
import {mapState, mapActions} from 'vuex'

export default {
    props:['item','index'],
    computed:Util.extend(mapState([]),{
      author(){
        const { item } = this 
        return item.sAuthor ? `来自${item.sAuthor}的回答` : ''
      },
      type(){
        const { item } = this
        const typeMap = {1: '资讯', 2: '问答', 3: '话题', 4: '疾病库', 5: '药品库'};
        return `来自某${typeMap[item.dwFromtype]}`
      },
      time(){
        // moment(sDate, "YYYY-MM-DD HH:mm:ss").fromNow()
        return moment(this.item.sDate, "YYYY-MM-DD").fromNow()
      }
    }),
    methods:Util.extend(mapActions([]),{

    })
}
</script>

