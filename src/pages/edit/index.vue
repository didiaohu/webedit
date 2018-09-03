<template>
	<div class="edit-page">
		<div class="pub" @click="ispub=!ispub" v-show="ispub">发布</div>
		<mavon-editor v-if="ispub" class="edit" :ishljs = "true" @change="change"></mavon-editor>
		<div class="view markdown-body" v-html="value" v-else>
			
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				value:"",
				ispub:true
			}
		},
		methods:{
			change(value, render){
				this.value = render;
			}
		}
	}
</script>
<style lang="scss">
	.edit-page{
		.pub{
			background-color: #007fff;
			border-radius: 3px;
			width: 80px;
			height: 30px;
			line-height: 30px;
			color: #fff;
			text-align: center;
		}
		.edit{
			height: 800px;
		}
		.view{
			width: 700px;
			margin: 0 auto;
		}
	}
</style>