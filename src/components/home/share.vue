<template>
	<div id="share">
		<div class="gd_dynamic">
			<div class="title">
				庚顿动态
			</div>
			<div class="content">
				<ul>
					<li v-for="obj in dynamic" :key="obj.name" class="el-icon-minus">
						<router-link :to="obj.url">{{obj.name}}</router-link>
					</li>
				</ul>
			</div>
			<div class="gengduo">
				<span v-on:click="more_dynamic">更多动态...</span>
			</div>
		</div>
		<div class="gd_share">
			<div class="title">
				庚顿分享
			</div>
			<div class="content">
				<ul>
					<li v-for="obj in share" :key="obj.name" class="el-icon-minus">
						<router-link :to="obj.url">{{obj.name}}</router-link>
					</li>
				</ul>
			</div>
			<div class="gengduo">
				<span v-on:click="more_share">更多分享...</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				dynamic:[{
					name:'2018年01月 庚顿公司成立全资子公司“庚顿河北信息科技有限公司”',
					url:'/product'
					},
					{
					name:'2017年12月 庚顿实时数据库进入化工行业',
					url:'/product'
					},
					{
					name:'2017年10月 与百度达成合作，面向物联网领域推出时序数据库，普惠中小企业',
					url:'/product'
					}
					],
				share:[{
					name:'什么是实时数据库？',
					url:'/product'
					},
					{
					name:'实时数据库有哪些应用领域？',
					url:'/product'
					},
					{
					name:'实时数据库与关系数据库的区别？',
					url:'/product'
					}
					]
				}
			},
		methods: {
			more_dynamic(){
				document.location = "#/product";
			},
			more_share(){
				document.location = "#/product";
			}
			}
	}
</script>

<style>
	#share {
		position: absolute;
		width: 80%;
		height: 280px;
		margin: 1070px calc(10% - 1px) 30px calc(10% - 1px);
		border: 1px #e0e0e0 solid;
	}
	#share .gd_dynamic {
		width: calc(50% - 1px);
		height: 100%;
		float: left;
		border-right: 1px solid #e0e0e0;
	}
	.gd_dynamic .title{
		width: calc(100% - 30px);
		height: 55px;
		text-align: left;
		padding-left: 30px;
		font-size: 24px;
		color: #00A9F6;
		line-height: 55px;
	}
	.gd_dynamic .content {
		width: calc(100% - 30px);
		height: 150px;
		text-align: left;
		padding-left: 30px;
	}
	.gd_dynamic .content ul {
		width: 100%;
		height: 100%;
		padding: 0px;
	}
	.gd_dynamic .content ul li{
		width: 100%;
		height: 50px;
		overflow: hidden;
	}
	.gd_dynamic .content ul li a{
		text-decoration: none;
		font-size: 14px;
		line-height: 50px;
		color: #666;
	}
	.gd_dynamic .content ul li a:hover{
		color: red;
	}
	.gd_dynamic .gengduo {
		width: calc(100% - 30px);
		height: 50px;
		padding-left: 30px;
	}
	.gd_dynamic .gengduo span{
		display: block;
		margin: 10px 0px;
		cursor: pointer;
		width: 100px;
		height: 30px;
		line-height: 30px;
		border: 1px solid #666;
		color: #666;
	}
	.gd_dynamic .gengduo span:hover{
		border: 1px solid #00A9F6;
		color: #00A9F6;
	}
	#share .gd_share {
		width: 50%;
		height: 100%;
		float: left;
	}
	.gd_share .title{
		width: calc(100% - 30px);
		height: 55px;
		text-align: left;
		padding-left: 30px;
		font-size: 24px;
		color: #00A9F6;
		line-height: 55px;
	}
	.gd_share .content {
		width: calc(100% - 30px);
		height: 150px;
		text-align: left;
		padding-left: 30px;
	}
	.gd_share .content ul {
		width: 100%;
		height: 100%;
		padding: 0px;
	}
	.gd_share .content ul li{
		width: 100%;
		height: 50px;
		overflow: hidden;
	}
	.gd_share .content ul li a{
		text-decoration: none;
		font-size: 14px;
		line-height: 50px;
		color: #666;
	}
	.gd_share .content ul li a:hover{
		color: red;
	}
	.gd_share .gengduo {
		width: calc(100% - 30px);
		height: 50px;
		padding-left: 30px;
	}
	.gd_share .gengduo span{
		display: block;
		margin: 10px 0px;
		cursor: pointer;
		width: 100px;
		height: 30px;
		line-height: 30px;
		border: 1px solid #666;
		color: #666;
	}
	.gd_share .gengduo span:hover{
		border: 1px solid #00A9F6;
		color: #00A9F6;
	}
</style>
