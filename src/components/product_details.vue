<template>
	<div id="detalis">
		<div class="navigation">
			<el-breadcrumb separator="/">
			<el-breadcrumb-item :to="{ path: '/download' }">产品购买</el-breadcrumb-item>
			<el-breadcrumb-item>详情</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div style='clear:both'></div>
	</div>
	
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	#detalis {
		width: 80%;
		margin: 30px 10%;
	}
	#detalis .navigation {
		width: 100%;
		height: 50px;
		border: 1px solid #E0E0E0;
		
	}
	#detalis .navigation .el-breadcrumb{
		line-height: 50px;
		font-size: 20px;
		width: calc(100% - 20px);
		padding-left: 20px;
	}
</style>
