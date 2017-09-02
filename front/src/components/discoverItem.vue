<template>
      <li>
          <p class="user"><img src="http://www.liangfangji.com/mockcdn/image/head.jpg"/> {{author}}</p>
          <p class="problem"><a :href="item.sUrl">{{item.sTitle}}</a></p>
          <p class="answer"><a :href="item.sUrl">{{item.sSummary}}</a></p>
          <p class="bottom">
            <span>{{item.dwContenttype}}</span>
            <span>{{item.dwCommentNum}}评论</span>
            <span>{{item.dwLikeNum}}有用</span>
          </p>
          <p class="flow"><span>{{time}}</span></p>
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
        return item.sAuthor ? `${item.sAuthor}发表的问题` : ''
      },
      time(){
        return moment(this.item.sDate, "YYYY-MM-DD").fromNow()
      }
    }),
    methods:Util.extend(mapActions([]),{

    })
}
</script>

