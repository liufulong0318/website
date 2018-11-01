<template>
	<div id="weIndustry">
		<div id="what_weIndustry"><span class="we_weIndustry">我们的</span><span class="industry_weIndustry">行业案例</span></div>
		<div id="weIndustryList">
			<ul>
				<li>风力发电&nbsp;&nbsp;&nbsp;&nbsp;生产管理</li>
				<li>智能电网&nbsp;&nbsp;&nbsp;&nbsp;智能制造</li>
			</ul>
		</div>
		<div class="more_weIndustry">
			<router-link :to="todo.url">了解更多案例详情>></router-link>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				todo:{
					url:'/industry'
				}
					}
				},
		methods: {
	
		}
	}
</script>

<style>
	#weIndustry {
		width: 80%;
		height: 70px;
		margin: 50px 10% 30px 10%;
		border-bottom: 1px #e1e1e1 solid;
	}
	#what_weIndustry {
		float: left;
		font-size: 33px;
		text-align: left;
		line-height: 60px;
		border-right: 1px #05abff solid;
		padding-right: 20px;
	}
	.industry_weIndustry {
		color: #00a9f6;
	}
	#weIndustryList{
		float: left;
		width: 45%;
		height: 60px;
		text-align: left;
	}
	#weIndustryList ul {
		-webkit-padding-start: 20px;
		-webkit-margin-before: 10px;
		height: 60%;
		list-style: none;
		color: #bcbcbe;
	}
	.more_weIndustry {
		height: 60px;
		float: right;
	}
	.more_weIndustry a {
		text-decoration: none;
		color: #02affc;
		line-height: 60px;
	}
</style>
