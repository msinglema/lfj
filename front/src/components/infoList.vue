<style lang="less">
	.info-list{
    width:100%; height: auto; background:#fff;
    ul{
      li{
        padding:0.3rem 0.24rem;border-bottom: 1px #f0eff5 solid;
        .author{
          height:0.44rem;line-height:0.44rem;font-size:0.28rem;color:#989898;overflow: hidden;margin-bottom: 0.2rem;
          img{float: left;width:auto;height: 100%;margin-right: 0.2rem;}
        }
        .question{font-size:0.3rem;line-height:1.6em;margin-bottom: 0.1rem;}
        .answer{font-size:0.28rem;color:#333;line-height:1.6em;}
        .bottom{
          font-size:0.24rem;color:#989898;margin-top:0.15rem;overflow: hidden;
          .bottom-source{float:left;}
          .bottom-comment{float: right;margin-left: 0.4rem;}
          .bottom-like{float: right;}
        }
      }
    }
  } 
</style>

<template>
    <div class="info-list">
      <ul>
        <li class="info-item" v-for="item in items" >
            <p class="author"><img src="../../build/image/head.jpg"/> {{item.author}}发表的问题</p>
            <p class="question">{{item.question}}</p>
            <p class="answer">{{item.answer}}</p>
            <p class="bottom">
              <span class="bottom-source">来自{{item.source}}</span>
              <span class="bottom-comment">{{item.comment}} 评论</span>
              <span class="bottom-like">{{item.like}} 有用</span>
            </p>
        </li>  
      </ul>
    </div>
</template>

<script>
export default {
    data:function(){
       return {
          items : [
          	{
              author:'马某某', img:require("../../build/image/head.jpg"),
              question:'这里小儿感冒问题', 
              answer: '这里是发表的回答这里是发表的回答这里是发表的回答这里是发表的回答这里是发表的回答，这里是发表的回答这里是发表的回答。',
              source:'我的提问', comment:'113', like:'201'
            },
            {
              author:'刘某某', img:require("../../build/image/head.jpg"),
              question:'这里小儿感冒问题', 
              answer: '这里是发表的回答这里是发表的回答这里是发表的回答这里是发表的回答这里是发表的回答，这里是发表的回答这里是发表的回答。',
              source:'某小组', comment:'113', like:'201'
            },
            {
              author:'雷某某', img:require("../../build/image/head.jpg"),
              question:'这里小儿感冒问题', 
              answer: '这里是发表的回答这里是发表的回答这里是发表的回答这里是发表的回答这里是发表的回答，这里是发表的回答这里是发表的回答。',
              source:'某话题', comment:'113', like:'201'
            }
        ]
       }
    }
}
</script>
