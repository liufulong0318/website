<template>
	<div id="broadcast">
	  <carousel></carousel>
		<wedo></wedo>
		<wedoDiv></wedoDiv>
		<weProduct></weProduct>
		<weProductAbstract></weProductAbstract>
		<weIndustry></weIndustry>
		<weIndustryUL></weIndustryUL>
		<weUser></weUser>
		<weUserUL></weUserUL>
		<declaration></declaration>
		<share></share>
	</div>
	
</template>

<script>
	import carousel from "@/components/home/carousel";
	import wedo from "@/components/home/wedo";
	import wedoDiv from "@/components/home/wedo_div";
	import weProduct from "@/components/home/weProduct";
	import weProductAbstract from "@/components/home/weProductAbstract";
	import weIndustry from "@/components/home/weIndustry";
	import weIndustryUL from "@/components/home/weIndustryUL";
	import weUser from "@/components/home/weUser";
	import weUserUL from "@/components/home/weUserUL";
	import declaration from "@/components/home/declaration";
	import share from "@/components/home/share";
	
	export default {
		data () {
			return {}
		},
		methods: {
	
		},
	  components:{
			carousel,wedo,wedoDiv,weProduct,weProductAbstract,weIndustry,weIndustryUL,weUser,weUserUL,declaration,share
	  }
	}
</script>

<style>
	html, body{
		width: 100%;
		height: 100%;
		margin: 0px;
		padding: 0px;
	}
	#broadcast {
		width: 100%;
		height: calc(100% + 3098px);
	}
	#myCarousel {
		width: 100%;
		height: 100%;
	}
	.el-carousel {
		height: 100%;
		width: 100%;
	}
	.el-carousel__container {
		width: 100%;
		height: 100%;
	}
	.el-carousel__item {
		width: 100%;
		height:100%;
	}
	.el-carousel__item img{
		width: 100%;
		height: 100%;
	}
</style>
