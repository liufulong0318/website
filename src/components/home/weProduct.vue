<template>
	<div id="weProduct">
		<div id="what_weProduct"><span class="we_weProduct">我们的</span><span class="product_weProduct">产品</span></div>
		<div id="weProductList">
			<ul>
				<li>数据库系列</li>
				<li>可视化系列</li>
			</ul>
		</div>
		<div class="more_weProduct">
			<router-link :to="todo.url">了解更多产品详情>></router-link>
		</div>
	</div>
</template>

<script>
	
	export default {
		data () {
			return {
				todo:{
					url:'/product'
				}
					}
				},
		methods: {
	
		}
	}
</script>

<style>
	#weProduct {
		width: 80%;
		height: 70px;
		margin: 120px 10% 30px 10%;
		border-bottom: 1px #e1e1e1 solid;
	}
	#what_weProduct {
		float: left;
		font-size: 33px;
		text-align: left;
		line-height: 60px;
		border-right: 1px #05abff solid;
		padding-right: 20px;
	}
	.product_weProduct {
		color: #00a9f6;
	}
	#weProductList{
		float: left;
		width: 45%;
		height: 60px;
		text-align: left;
	}
	#weProductList ul {
		-webkit-padding-start: 20px;
		-webkit-margin-before: 10px;
		height: 60%;
		list-style: none;
		color: #bcbcbe;
	}
	.more_weProduct {
		height: 60px;
		float: right;
	}
	.more_weProduct a {
		text-decoration: none;
		color: #02affc;
		line-height: 60px;
	}
</style>
