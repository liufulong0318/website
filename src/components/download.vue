<template>
	<div id="download">
		<div class="img_download">
			<img src="../assets/down.jpg"/>
		</div>
		<div class="down_div" v-for="product in products" :key="product.id">
			<div class="down_img_L">
				<img :src="product.src"/>
			</div>
			<div class="down_info_C">
				<div class="down_project_name">
				<router-link to="/download/details">{{product.productName}}</router-link></div>
				<div class="down_project_info">{{product.productInfo}}</div>
			</div>
			<div class="down_opt">
				<el-button type="primary">免费试用</el-button>
				<el-button type="primary">立即购买</el-button>
			</div>
			<div style='clear:both'></div>
		</div>
		<div style='clear:both'></div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				products:[{
					id:'1',
					src:'http://www.golden-data.com.cn/upload/productImg/20180718141255.jpg',
					productName:'庚星时序数据库管理系统V3.0',
					productInfo:'庚星时序数据库是依托于工业实时数据库面向物联网领域推出的一款基于Windows平台时序数据库，具备采集、控制和管理传感器数据查询、存储海量时序/历史数据的功能，能实现物联网领域终端用户和设备的连接，管理物联网领域用户和设备的智能交互。开放的、可扩展的结构可满足用户构建各种企业级应用的需求。庚星时序数据库提供丰富的二次开发接口，可方便用户构建各类应用系统。'
				}]
				}
		},
		mounted(){
		},
		methods: {
			
		}
		
	}
</script>

<style>
	#download {
		width: 100%;
	}
	#download .img_download img{
		width: 100%;
		height: 100%;
	}
	#download .down_div {
		width: 80%;
		margin: 30px 10%;
		/* border-top: 1px solid #BCBCBE; */
		
		border-bottom: 1px solid #BCBCBE;
	}
	.down_div .down_img_L {
		height: 260px;
		width: 260px;
		padding: 30px;
		float: left;
	}
	.down_div .down_img_L img{
		width: 100%;
		height: 100%;
	}
	.down_div .down_info_C {
		width: calc(100% - 500px);
		height: calc(100% - 30px);
		padding-top: 30px;
		float: left;
		min-width: 410px;
	}
	.down_div .down_info_C .down_project_name {
		height: 50px;
		width: 100%;
		text-align: left;
		line-height: 50px;
		font-size: 24px;
		color: #00A9F6;
		border-bottom: 1px dashed #BCBCBE;
		cursor: pointer;
	}
	.down_div .down_info_C .down_project_info{
		height: calc(100% - 90px);
		width: 100%;
		font-size: 18px;
		text-align: left;
		padding: 20px 0px;
		line-height: 28px;
	}
	.down_div .down_opt {
		width: 180px;
		height: 100%;
		float: left;
	}
	.down_div .down_opt button{
		margin-top: 45%;
	}
	.down_project_name a {
		color: #00A9F6;
		text-decoration: none;
	}
	.el-button+.el-button{
		margin-left: 0px;
	}
</style>
