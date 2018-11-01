<template>
	<div id="weProductAbstract">
		<div class="abstractLeft">
			<router-link :to="todo.url" class="abstractA">
				<img src="http://52.83.234.27:80/gd/upload/image/load/9c64152c74854c34b3a39398915a1e7c.png"/>
			</router-link>
		</div>
		<div class="abstractRight">
			<div class="abstractTitle">
				<router-link :to="todo.url" class="abstractA">实时数据库及可视化软件</router-link>
			</div>
			<div class="abstractContext">
				<p>
					实时数据库是工业领域信息化的核心基础软件，在两化融合中发挥重要作用，更是大数据、云计算、物联网、边缘计算等产业的核心支撑软件。庚顿自主研发实时数据库管理系统，企业或科研机构利用该软件实时处理生产过程数据、机器设备运行数据、自然环境等传感数据，在信息化运营中链接底层控制与管理决策层。
				</p>
				<p>	
					庚顿公司面向工业过程智能化提供了集数据采集、存储、计算、分析及高级可视化于一体的产品级解决方案，用户可利用平台提供的监控组态软件、趋势分析系统、报警与事件系统等产品构建高级应用。
				</p>
			</div>
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
	#weProductAbstract {
		width: 80%;
		height: 400px;
		margin: 30px 10%;
		border: 1px #e0e0e0 solid;
	}
	.abstractLeft {
		width: calc(50% - 50px);
		height: 100%;
		float: left;
	}
	.abstractLeft img {
		width: calc(100% - 50px);
		height: calc(100% - 50px);
		padding: 25px;
	}
	.abstractRight {
		float: left;
		width: 50%;
		height: calc(100% - 25px);
		padding: 25px 25px 0px 25px;
	}
	.abstractTitle{
		text-align: left;
		font-size: 24px;
		width: 100%;
		height: 15%;
		border-bottom: 1px #e0e0e0 dashed;
	}
	.abstractTitle a {
		text-decoration: none;
		color: #333;
	}
	.abstractContext{
		width: 100%;
		height: calc(85% - 75px);
		padding: 25px 0px;
		text-align: left;
	}
	.abstractContext p {
		font-size: 16px;
		font-weight: 100;
		color: #666;
		line-height: 30px;
	}
</style>
