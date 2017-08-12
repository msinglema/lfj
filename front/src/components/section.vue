<style lang="less">
	.section-list{
		background-color: #fff;
		margin-bottom:0.5rem;
		.section-item{
			display: inline-block;
			width:33%;
			.image{
				width:0.6rem;
				margin:0.2rem auto; padding: 0.2rem;
				border-radius:0.5rem;
				&.ranking{background-color:#FA3C3C;}
				&.navigation{background-color:#78D200;}
				&.measure{background-color: #009AFF;}
				img{width:100%; margin:0 auto; }
			}
			.label{
				margin: 0.2rem auto;
				width: 100%;
				text-align: center; font-size: 0.22em;
			}
		}
	}
</style>

<template>
    <div class="section-list">
    	<a class="section-item" v-for="(item, index) in items" :href="item.path" >
    	  	<div class="image" v-bind:class="item.className">
	    	  	<img :src="item.src" :alt="item.alt">
    	  	</div>
			<div class="label">{{item.label}}</div>
    	</a>
    </div>
</template>

<script>
export default {
    data:function(){
       return {
          items : [
          	{className:'ranking', label:'热门排行', src: 'http://www.liangfangji.com/mockcdn/image/topic-1.svg', alt:'1'},
          	{className:'navigation', label:'就医导航', src: 'http://www.liangfangji.com/mockcdn/image/topic-2.svg', alt:'2'},
          	{className:'measure', label:'健康测量', src: 'http://www.liangfangji.com/mockcdn/image/topic-3.svg', alt:'3'}
        ]
       }
    }
}
</script>
