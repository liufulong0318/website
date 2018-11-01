<template>
	<div id="wedo">
		<div id="what_wedo"><span class="we_wedo">我们是</span><span class="do_wedo">做什么的?</span></div>
		<div id="wedoList">
			<ul>
				<li>专注于自主知识产权的实时数据库管理系统研发及产业化</li>
				<li>专业提供数据可视化平台产品及解决方案</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				
					}
				},
		methods: {
	
		}
	}
</script>

<style>
	#wedo {
		width: 80%;
		height: 70px;
		margin: 30px 10% 30px 10%;
		border-bottom: 1px #e1e1e1 solid;
	}
	#what_wedo {
		float: left;
		font-size: 33px;
		text-align: left;
		line-height: 60px;
		border-right: 1px #05abff solid;
		padding-right: 20px;
	}

	.do_wedo {
		color: #00a9f6;
	}
	#wedoList{
		float: left;
		width: 45%;
		height: 60px;
		text-align: left;
	}
	#wedoList ul {
		-webkit-padding-start: 20px;
		-webkit-margin-before: 10px;
		height: 60%;
		list-style: none;
		color: #bcbcbe;
	}
	
</style>
