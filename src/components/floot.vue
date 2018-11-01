<template>
	<div id="floot">
		<div class="gd_info">
			<div class="gzh_code">
				<img src="http://www.golden-data.com.cn/front/images/code.jpg"/>
				<p>庚顿公众账号</p>
			</div>
			<div class="company_info">
				<div class="info_h">欢迎联系我们</div>
				<div class="info_line"></div>
				<div class="info_li">
					<ul>
						<li class="el-icon-service">免费热线：400-628-5226</li><br/>
						<li class="el-icon-phone">电话：010-82790169</li><br/>
						<li class="el-icon-printer">传真：010-82825226</li><br/>
						<li class="el-icon-message">邮箱：service@golden-data.com.cn</li>
						<li class="el-icon-location">地址：北京市海淀区中关村软件园2号楼B座</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="gd_copyright">
			京ICP备09070246号 版权所有 | Copyright(C) 2018 © All Rights Reserved
		</div>
	</div>
</template>

<script>
	export default {
	}
</script>

<style>
	#floot{
		width: 100%;
		height: 350px;
		margin-top: 30px;
	}
	#floot .gd_info{
		width: 100%;
		height: 280px;
		background: #565c66;
	}
	.gd_info .gzh_code{
		width: 40%;
		margin-left: 10%;
		height: 100%;
		float: left;
		color: white;
	}
	.gd_info .gzh_code img{
		padding-top: 50px;
	}
	.gd_info .company_info{
		width: 40%;
		height: 100%;
		float: left;
		text-align: left;
	}
	.company_info .info_h{
		width: 100%;
		height: 50px;
		line-height: 50px;
		font-size: 16px;
		color: white;
	}
	.company_info .info_line {
		width: 100px;
		height: 1px;
		background: white;
	}
	.company_info .info_li ul{
		margin-left: 0px;
		padding-left: 0px;
		width: 100%;
		height: calc(100% - 51px);
		list-style: none;
		color: white;
	}
	.company_info .info_li ul li {
		height: 35x;
		line-height: 35px;
	}
	#floot .gd_copyright{
		width: 100%;
		height: 70px;
		background: #29333c;
		font-size: 14px;
		color: white;
		line-height: 70px;
	}
</style>
