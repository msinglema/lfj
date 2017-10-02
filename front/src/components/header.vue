<template>
	<header class="mhn-header">
		<div class="mhn-header-button header-button-left">
			<a class="mhn-button" @click="back">
				<label class="mhn-button-text">{{options.labelL}}</label>
			</a>
		</div> 
		<h1 class="mhn-header-title">{{options.title}}</h1> 
		<div class="mhn-header-button header-button-right">
			<a class="mhn-button">
				<label class="mhn-button-text">{{options.labelR}}</label>
			</a>
		</div>
	</header>
</template>

<script>

export default {
	props:['options'],
 	data:function(){
        return {}
	},
	methods: {
		back:function(){
			history.back()
		}
	}
}
</script>

<style lang="less" >
	.mhn-header{
		display: flex;
		justify-content:space-between;
		align-items:center;
		font-size: 0.22rem;
		padding: 0.25rem 0.1rem;
		background-color: #1eac11; opacity: 0.75;
	    color: #fff;
	    a{color:#fff;}
		.mhn-header-title{
			font-size:0.28rem; font-weight:bolder;
		}
		.mhn-header-button{}
	}
</style>