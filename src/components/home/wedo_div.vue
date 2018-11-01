<template>
	<div id="wedoList_2">
		<ul>
			<li v-for="todo in todo_div" :key="todo.text" >
				<div class="wedo_wrap">
					<div class="wedoDiv">
						<router-link :to="todo.href"><img :src="todo.src"/></router-link>
					</div>
					<div class="wedoA">
						<router-link :to="todo.href">{{todo.text}}</router-link>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				todo_div: [{
						text:'实时数据库',
						src:'http://www.golden-data.com.cn/front/images/index_do1.png',
						href:'/product'
						},
						{
						text:'数据可视化平台',
						src:'http://www.golden-data.com.cn/front/images/index_do2.png',
						href:'/industry'
						},
						{
						text:'行业解决方案',
						src:'http://www.golden-data.com.cn/front/images/index_do3.png',
						href:'about'
						}]
					}
				},
		methods: {
	
		}
	}
</script>

<style>
	#wedoList_2 {
		width: 80%;
		height: 250px;
		margin: 30px 10% 30px 10%;
	}
	.wedo_wrap {
		width: 80%;
		margin: 0px 10%;
		border: 1px #02affc solid;
	}
	#wedoList_2 ul{
		height: 100%;
		width: 100%;
		padding: 0px;
		margin: 0px;
		display: table;
	}
	#wedoList_2 ul li{
		list-style:none;
		font-size: 16px;
		display: table-cell;
		text-align: center;
	}
	
	.wedoDiv span{
		display: block;
		float: left;
	}
	.wedoA {
		width: 100%;
		height: 50px;
		font-size: 24px;
	}
	.wedoA a{
		color: #616568;
		text-decoration: none;
	}
	.wedoDiv img {
		padding: 50px;
	}
</style>
