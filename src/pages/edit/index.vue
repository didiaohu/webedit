<template>
	<div class="edit-page">
		<div class="pub" @click="ispub=!ispub" v-show="ispub">发布</div>
		<div class="content">
			<div class="content_left">
				<el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" node-key="id">
					<span class="custom-tree-node" slot-scope="{ node, data }">
<<<<<<< HEAD
						<span>{{ node.label }}</span>
					</span>
=======
						<span>{{data.label}}</span>
						<span class="content_bar">
							<i class="el-icon-edit" @click="treeEdit(node, data)"></i>
							<i class="el-icon-plus" @click="treeAdd(data)"></i>
							<i class="el-icon-close" @click="treeRemove(node, data)"></i>
						</span>
					</span>c
>>>>>>> dcb6f4782865b585860f5559a6e4cb9ba6e5f837
				</el-tree>
				<div class="content_createDir">
					<el-button @click="createDirWindow">新建章节</el-button>
				</div>
			</div>
			<mavon-editor v-if="ispub" class="content_edit" :ishljs = "true" @change="change"></mavon-editor>
			<div class="view markdown-body" v-html="value" v-else>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				value:"",
				ispub:true,
				data: [],
				defaultProps: {
					children: 'children',
					label: 'label'
				},
				id: 0,
				menuVisible: false
			}
		},
		methods:{
			change(value, render){
				this.value = render;
			},
			handleNodeClick(data) {
				console.log(data);
			},
			createDirWindow(){
				const vm = this;
				this.$prompt('目录标题', '新建章节', {
					confirmButtonText: '确定',
					cancelButtonText: '取消'
				}).then(({ value }) => {
					vm.data.push({
						id: vm.id++,
						label: value,
						children: []
					});
				}).catch(() => {
					       
				});
			},
			treeEdit(node, data){
				const vm = this;
				this.$prompt('添加页面', '添加', {
					confirmButtonText: '确定',
					cancelButtonText: '取消'
				}).then(({ value }) => {
					data.label = value;
				}).catch(() => {
					       
				});
			},
			treeAdd(data){
				const vm = this;
				this.$prompt('添加页面', '添加', {
					confirmButtonText: '确定',
					cancelButtonText: '取消'
				}).then(({ value }) => {
					const newChild = { id: vm.id++, label: value, children: [] };
					if (!data.children) {
						vm.$set(data, 'children', []);
					}
					data.children.push(newChild);
				}).catch(() => {
					       
				});
			}
		}
	}
</script>
<style lang="scss">
	.edit-page{
		position: fixed;
	    top: 0;
	    right: 0;
	    bottom: 0;
	    left: 0;
		.pub{
			background-color: #007fff;
			border-radius: 3px;
			width: 80px;
			height: 30px;
			line-height: 30px;
			color: #fff;
			text-align: center;
		}
		.content{
			position: relative;
			width: 100%;
			height: 100%;
			.el-tree-node {
				position: relative;
			}
			&_left{
				position: absolute;
				width: 280px;
				top: 0;
				bottom: 0;
				box-shadow: 0 0px 3px rgba(0,0,0,0.157), 0 0px 3px rgba(0,0,0,0.227);
			}
			&_createDir{
				text-align: center;
			}
			&_edit{
				position: absolute;
				left: 280px;
				right: 2px;
				top: 0;
				bottom: 0;
			}
			.el-tree-node__content:hover .content_bar {
				display: block;
			}
			&_bar{
				display: none;
			    position: absolute;
			    top: 0;
			    right: 10px;
			}
		}
		.view{
			width: 700px;
			margin: 0 auto;
		}
	}
</style>