<style lang="less">
	.info-list{
    width:100%; height: auto; background:#fff;
    ul{
      li{
        padding:0.3rem 0.24rem;border-bottom: 0.02rem #f0eff5 solid;
        .author{
          height:0.44rem;line-height:0.44rem;font-size:0.28rem;color:#989898;overflow: hidden;margin-bottom: 0.2rem;
          img{float: left;width:auto;height: 100%;margin-right: 0.2rem;}
        }
        .title{font-size:0.3rem;line-height:1.6em;margin-bottom: 0.1rem;font-weight:bold;}
        .summary{font-size:0.28rem;color:#333;line-height:1.6em;}
        .bottom{
          font-size:0.24rem;color:#989898;margin-top:0.15rem;overflow: hidden;
          .bottom-content-type{float:left;}
          .bottom-comment{float: right;margin-left: 0.4rem;}
          .bottom-like{float: right;}
        }
      }
    }
    .loading{height:42px;background:url("data:image/gif;base64,R0lGODlhIAAgALMAAP///7Ozs/v7+9bW1uHh4fLy8rq6uoGBgTQ0NAEBARsbG8TExJeXl/39/VRUVAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBQAAACwAAAAAIAAgAAAE5xDISSlLrOrNp0pKNRCdFhxVolJLEJQUoSgOpSYT4RowNSsvyW1icA16k8MMMRkCBjskBTFDAZyuAEkqCfxIQ2hgQRFvAQEEIjNxVDW6XNE4YagRjuBCwe60smQUDnd4Rz1ZAQZnFAGDd0hihh12CEE9kjAEVlycXIg7BAsMB6SlnJ87paqbSKiKoqusnbMdmDC2tXQlkUhziYtyWTxIfy6BE8WJt5YEvpJivxNaGmLHT0VnOgGYf0dZXS7APdpB309RnHOG5gDqXGLDaC457D1zZ/V/nmOM82XiHQjYKhKP1oZmADdEAAAh+QQFBQAAACwAAAAAGAAXAAAEchDISasKNeuJFKoHs4mUYlJIkmjIV54Soypsa0wmLSnqoTEtBw52mG0AjhYpBxioEqRNy8V0qFzNw+GGwlJki4lBqx1IBgjMkRIghwjrzcDti2/Gh7D9qN774wQGAYOEfwCChIV/gYmDho+QkZKTR3p7EQAh+QQFBQAAACwBAAAAHQAOAAAEchDISWdANesNHHJZwE2DUSEo5SjKKB2HOKGYFLD1CB/DnEoIlkti2PlyuKGEATMBaAACSyGbEDYD4zN1YIEmh0SCQQgYehNmTNNaKsQJXmBuuEYPi9ECAU/UFnNzeUp9VBQEBoFOLmFxWHNoQw6RWEocEQAh+QQFBQAAACwHAAAAGQARAAAEaRDICdZZNOvNDsvfBhBDdpwZgohBgE3nQaki0AYEjEqOGmqDlkEnAzBUjhrA0CoBYhLVSkm4SaAAWkahCFAWTU0A4RxzFWJnzXFWJJWb9pTihRu5dvghl+/7NQmBggo/fYKHCX8AiAmEEQAh+QQFBQAAACwOAAAAEgAYAAAEZXCwAaq9ODAMDOUAI17McYDhWA3mCYpb1RooXBktmsbt944BU6zCQCBQiwPB4jAihiCK86irTB20qvWp7Xq/FYV4TNWNz4oqWoEIgL0HX/eQSLi69boCikTkE2VVDAp5d1p0CW4RACH5BAUFAAAALA4AAAASAB4AAASAkBgCqr3YBIMXvkEIMsxXhcFFpiZqBaTXisBClibgAnd+ijYGq2I4HAamwXBgNHJ8BEbzgPNNjz7LwpnFDLvgLGJMdnw/5DRCrHaE3xbKm6FQwOt1xDnpwCvcJgcJMgEIeCYOCQlrF4YmBIoJVV2CCXZvCooHbwGRcAiKcmFUJhEAIfkEBQUAAAAsDwABABEAHwAABHsQyAkGoRivELInnOFlBjeM1BCiFBdcbMUtKQdTN0CUJru5NJQrYMh5VIFTTKJcOj2HqJQRhEqvqGuU+uw6AwgEwxkOO55lxIihoDjKY8pBoThPxmpAYi+hKzoeewkTdHkZghMIdCOIhIuHfBMOjxiNLR4KCW1ODAlxSxEAIfkEBQUAAAAsCAAOABgAEgAABGwQyEkrCDgbYvvMoOF5ILaNaIoGKroch9hacD3MFMHUBzMHiBtgwJMBFolDB4GoGGBCACKRcAAUWAmzOWJQExysQsJgWj0KqvKalTiYPhp1LBFTtp10Is6mT5gdVFx1bRN8FTsVCAqDOB9+KhEAIfkEBQUAAAAsAgASAB0ADgAABHgQyEmrBePS4bQdQZBdR5IcHmWEgUFQgWKaKbWwwSIhc4LonsXhBSCsQoOSScGQDJiWwOHQnAxWBIYJNXEoFCiEWDI9jCzESey7GwMM5doEwW4jJoypQQ743u1WcTV0CgFzbhJ5XClfHYd/EwZnHoYVDgiOfHKQNREAIfkEBQUAAAAsAAAPABkAEQAABGeQqUQruDjrW3vaYCZ5X2ie6EkcKaooTAsi7ytnTq046BBsNcTvItz4AotMwKZBIC6H6CVAJaCcT0CUBTgaTg5nTCu9GKiDEMPJg5YBBOpwlnVzLwtqyKnZagZWahoMB2M3GgsHSRsRACH5BAUFAAAALAEACAARABgAAARcMKR0gL34npkUyyCAcAmyhBijkGi2UW02VHFt33iu7yiDIDaD4/erEYGDlu/nuBAOJ9Dvc2EcDgFAYIuaXS3bbOh6MIC5IAP5Eh5fk2exC4tpgwZyiyFgvhEMBBEAIfkEBQUAAAAsAAACAA4AHQAABHMQyAnYoViSlFDGXBJ808Ep5KRwV8qEg+pRCOeoioKMwJK0Ekcu54h9AoghKgXIMZgAApQZcCCu2Ax2O6NUud2pmJcyHA4L0uDM/ljYDCnGfGakJQE5YH0wUBYBAUYfBIFkHwaBgxkDgX5lgXpHAXcpBIsRADs=") no-repeat center center}

  } 
</style>

<template>
    <div class="info-list">
      <ul>
        <li class="info-item" v-for="item in items" >
            <p class="author"><img src="http://www.liangfangji.com/mockcdn/image/head.jpg"/> {{item.sAuthor}}发表的问题</p>
            <p class="title"><a :href="item.sUrl">{{item.sTitle}}</a></p>
            <p class="summary"><a :href="item.sUrl">{{item.sSummary}}</a></p>
            <p class="bottom">
              <span class="bottom-content-type">{{item.dwContenttype}}</span>
              <span class="bottom-comment">{{item.dwCommentNum}} 评论</span>
              <span class="bottom-like">{{item.dwLikeNum}} 有用</span>
            </p>
        </li>  
      </ul>
      <div class="loading" :class="{none:!loading}"></div>
    </div>
</template>

<script>
export default {
    props:['items','loading'],
    // data:function(){
    //    return {
    //       items : [
    //       	{
    //           sAuthor:'马某某', img:"http://www.liangfangji.com/mockcdn/image/head.jpg",
    //           sTitle:'这里小儿感冒问题', 
    //           sSummary: '这里是发表的回答这里是发表的回答这里是发表的回答这里是发表的回答这里是发表的回答，这里是发表的回答这里是发表的回答。',
    //           dwContenttype:'我的提问', dwCommentNum:'113', dwLikeNum:'201'
    //         },
    //         {
    //           sAuthor:'刘某某', img:"http://www.liangfangji.com/mockcdn/image/head.jpg",
    //           sTitle:'这里小儿感冒问题', 
    //           sSummary: '这里是发表的回答这里是发表的回答这里是发表的回答这里是发表的回答这里是发表的回答，这里是发表的回答这里是发表的回答。',
    //           dwContenttype:'某小组', dwCommentNum:'113', dwLikeNum:'201'
    //         },
    //         {
    //           sAuthor:'雷某某', img:"http://www.liangfangji.com/mockcdn/image/head.jpg",
    //           sTitle:'这里小儿感冒问题', 
    //           sSummary: '这里是发表的回答这里是发表的回答这里是发表的回答这里是发表的回答这里是发表的回答，这里是发表的回答这里是发表的回答。',
    //           dwContenttype:'某话题', dwCommentNum:'113', dwLikeNum:'201'
    //         }
    //     ]
    //    }
    // }
}
</script>
