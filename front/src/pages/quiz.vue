<template>
	<div class="quiz-wrapper">
		<c-Header :options="headerOptions"></c-Header>
		<div class="field-entity">
			<div class="field-label">标题</div>
			<div class="field-item">
				<input type="text">
			</div>
		</div>
		<div class="field-entity">
			<div class="field-label">类别</div>
			<div class="field-item">
				<v-select v-model="selected" :options="['儿科','妇科']"></v-select>
			</div>
		</div>

		<div class="field-entity">
			<div class="field-item item-quiz">
				<textarea cols="30" v-model="quiz"></textarea>
				<div class="word-limit">{{quiz.length}}/200</div>
			</div>
		</div>

		<div class="field-entity">
			<div class="field-item">
				<div class="image-upload-wrapper">
					<c-Croppa v-model="myCroppa"
						:placeholder="''"
						@file-choose="uploadCroppedImage"
					>
						<img slot="placeholder" src="../../build/image/add.png" />
					</c-Croppa>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
import Vue from 'vue'
import vSelect from 'vue-select'
import Croppa from 'vue-croppa'
import 'vue-croppa/dist/vue-croppa.css'
Vue.component('v-select', vSelect)

import Header from '../components/header.vue'

export default {
	components: {
		'c-Croppa': Croppa.component,
		'c-Header': Header
 	},
 	data:function(){
        return {
			myCroppa: null,
			selected:'儿科',
			quiz:'',
			imgUrl: '',
			headerOptions:{labelL:'返回', title:'新建档案', labelR:'下一步'}
		}
	},
	methods: {
		uploadCroppedImage() {
			const url = this.myCroppa.generateDataUrl()
			console.debug('url: ', url)
		}
	}
}
</script>

<style lang="less" >
	.quiz-wrapper{
		font-size: 0.22rem;
		.field-entity{
			div{display: flex;}
			min-height:0.5rem;
			padding: 0.1rem;
			border: 0 solid #ccc;
			border-top-width: 0.01rem;
			display: flex; align-items: center;
			.field-label{min-width:1.2rem; text-align:left; margin-right: 0.2rem;}
			.field-item{ 
				flex:1;
				textarea{width:100%; height:5rem; padding: 0.1rem; box-sizing: border-box;}
				&.item-quiz{
					flex-direction:column;
					.word-limit{
						justify-content:flex-end;
						margin-top:0.05rem;
					}
				}
			}
		}
		.image-upload-wrapper{
			margin:0.2rem;
			display: block;
			box-sizing: border-box;
			width: 100%;
			.croppa-container{
				padding: 0.2rem;
				background-color: #fff;
				border: 0.02rem dashed black;
				canvas{
					width: 2rem !important;
					height: 2rem !important;
				}
			}
		}
	}
</style>