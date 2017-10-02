<template>
	<div class="profile-wrapper">
		<div class="basic-info">
			<div class="avatar">
				<img src="../../build/image/avatar.png"/>
			</div>
			<div class="nickname">骤雨初听</div>
		</div>
		<div class="section">
			<a class="section-cell" href="#/quiz">
				<span class="cell-label">健康档案</span>
				<img src="../../build/image/more.jpg"/>
			</a>
			<a class="section-cell">
				<span class="cell-label">健康工具</span>
				<img src="../../build/image/more.jpg"/>
			</a>
		</div>
		<div class="section">
			<a class="section-cell">
				<span class="cell-label">我的收藏</span>
				<img src="../../build/image/more.jpg"/>
			</a>
		</div>
		<div class="section">
			<a class="section-cell">
				<span class="cell-label">设置与帮助</span>
				<img src="../../build/image/more.jpg"/>
			</a>
			<a class="section-cell">
				<span class="cell-label">意见反馈</span>
				<img src="../../build/image/more.jpg"/>
			</a>
		</div>
		<c-QuickQuestion></c-QuickQuestion>
		<c-TabBar></c-TabBar>
	</div>
</template>

<script>
import TabBar from '../components/tabBar.vue'
import QuickQuestion from '../components/quickQuestion.vue'

export default {
	components: {
		'c-TabBar' : TabBar,
		'c-QuickQuestion': QuickQuestion
	},
	methods: {
	}
}
</script>

<style lang="less" >
	.profile-wrapper{
		height: 100%;
		font-size:0.22rem; 
		color:#fff; background-color: #f1f1f1;
		.basic-info{
			display:flex;
			align-items:center;
			padding: 0.5rem 0.2rem;
			background-color: #1eac11;
			opacity: 0.75;
			.avatar{ 
				width:0.5rem; height:0.5rem; 
				padding: 0.25rem;
			    background-color: #e1e1e1;
			    border-radius: 1rem;
				img{width:100%;}
			}
			.nickname{margin-left: 0.2rem;}
		}
		.section{
			margin: 0.2rem 0;
			.section-cell{
				display: flex; justify-content: space-between;
				color:#000; background-color: #fff;
				padding: 0.3rem; border-bottom: 0.01rem solid #e1e1e1;
				img{width: 0.18rem; height: 0.25rem;}
			}
		}
	}
</style>