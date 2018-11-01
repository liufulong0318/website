<template>
	<div id="weUser">
		<div id="what_weUser"><span class="we_weUser">我们的</span><span class="user_weUser">合作用户</span></div>
		<div id="weUserList">
			<ul>
				<li>智能制造&nbsp;&nbsp;新能源&nbsp;&nbsp;电网&nbsp;&nbsp;电信</li>
				<li>石油&nbsp;&nbsp;煤炭&nbsp;&nbsp;智慧城市&nbsp;&nbsp;火力发电</li>
			</ul>
		</div>
		<div class="more_weUser">
			<router-link :to="todo.url">了解更多用户详情>></router-link>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				todo:{
					url:'/customerCase'
				}
					}
				},
		methods: {
	
		}
	}
</script>

<style>
	#weUser {
		position: absolute;
		width: 80%;
		height: 70px;
		margin: 50px 10% 30px 10%;
		border-bottom: 1px #e1e1e1 solid;
	}
	#what_weUser {
		float: left;
		font-size: 33px;
		text-align: left;
		line-height: 60px;
		border-right: 1px #05abff solid;
		padding-right: 20px;
	}
	.user_weUser {
		color: #00a9f6;
	}
	#weUserList{
		float: left;
		width: 45%;
		height: 60px;
		text-align: left;
	}
	#weUserList ul {
		-webkit-padding-start: 20px;
		-webkit-margin-before: 10px;
		height: 60%;
		list-style: none;
		color: #bcbcbe;
	}
	.more_weUser {
		height: 60px;
		float: right;
	}
	.more_weUser a {
		text-decoration: none;
		color: #02affc;
		line-height: 60px;
	}
</style>
