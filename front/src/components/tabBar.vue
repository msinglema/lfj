<style lang="less">
	.bottomNav {
		width:100%;height:0.97rem; background:#fff;
		border-top:1px #c0d2d8 solid; box-shadow:0px -2px 10px 0px #c0d2d8;
		position: fixed; bottom: 0px;left:0px;z-index:9999;
		a {
			display:inline-block;width:33.33333333333333%;
			float:left; padding-top:0.6rem;
			text-align:center;font-size:0.24rem;color:#1eac11;
			&.active{}
			&:nth-child(1){background:url(http://www.liangfangji.com/mockcdn/image/index.jpg) no-repeat center 0.1rem;background-size:0.5rem 0.5rem;}
			&:nth-child(2){background:url(http://www.liangfangji.com/mockcdn/image/find.jpg) no-repeat center 0.1rem;background-size:0.5rem 0.5rem;}
			&:nth-child(3){background:url(http://www.liangfangji.com/mockcdn/image/user.jpg) no-repeat center 0.1rem;background-size:0.5rem 0.5rem;}
		}
	}
</style>

<template>
    <div class="bottomNav">
    	<a v-for="(item, index) in items" :href="item.path" >
    	  	{{ item.label }}
    	</a>
        <a href="#index">首页</a><a href="#discover">发现</a><a href="#">我的</a>
    </div>
</template>

<script>
export default {
    data:function(){
       return {
          items : [{label:'首页', path:'#index'}, {label:'发现', path:'#discover'}, {label:'我的', path:'#'}, ]
       }
    }
}
</script>
