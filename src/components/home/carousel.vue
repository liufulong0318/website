<template>
	<div id="carousel">
		<el-carousel :interval="3000" arrow="always">
			<el-carousel-item v-for="item in items" :key="item.imageUrl">
			<img :src="item.imageUrl" >
			</el-carousel-item>
		</el-carousel>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				items: [{
					imageUrl:'http://52.83.234.27:80/gd/upload/image/load/cb352417dfd5472ba9b163a2207379b8.jpg'
						},{
					imageUrl:'http://52.83.234.27:80/gd/upload/image/load/44b590168cf04b05adadee83f88b205f.jpg'
						},{
					imageUrl:'http://52.83.234.27:80/gd/upload/image/load/ffa3ce497b5f4e0bbde10f960a9b48d5.jpg'
						},{
					imageUrl:'http://52.83.234.27:80/gd/upload/image/load/65c7021924c0424db922bb5f3e9e72fd.jpg'
						}]
					}
				},
		methods: {
	
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
	#carousel {
		width: 100%;
		height: calc(100% - 3148px);
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
