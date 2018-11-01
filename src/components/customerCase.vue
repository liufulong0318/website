<template>
	<div id="customerCase">
		<div class="img_customerCase">
			<img src="http://52.83.234.27:80/gd/front/images_new/index/kehu.jpg"/>
		</div>
		<div class="customer_msg">
			<div class="customer">
				<div v-for="item in items" :key="item.title">
						<div class="customer_title" :id="item.id" v-on:click="showInfo(item.id,item.title,item.content)">{{item.title}}</div>
					</div>
				</div>
			<div class="customer_textInfo">
				<div class="textInfo_title"></div>
				<div class="customer_content">
					
				</div>
			</div>
		</div>
		<div style='clear:both'></div>	
	</div>
</template>

<script>
	export default {
		data () {
			return {
				items:[{
					id:'customer_1',
					title:'能效管控一体化平台',
					content:'axxxxxxxx'
				},{
					id:'customer_2',
					title:'金风科技全球监控中心',
					content:'bxxxxxxxx'
				},{
					id:'customer_3',
					title:'国能生物生产运行监控系统',
					content:'cxxxxxxxx'
				},{
					id:'customer_4',
					title:'公共机构能耗监管中心',
					content:'dxxxxxxxx'
				},{
					id:'customer_5',
					title:'国华能源生产管理信息系统',
					content:'exxxxxxxx'
				}]
				}
		},
		mounted(){
			this.init()	
		},
		methods: {
			showInfo(id,title,content){
				var lis = document.getElementById('customerCase').getElementsByClassName("customer_title");
				for(var i =0;i<lis.length;i++){
					lis[i].style.color = "";
				}
				document.getElementById(id).style.color = "#00A9F6";
				document.getElementsByClassName("textInfo_title")[0].innerHTML = title;
				document.getElementsByClassName("customer_content")[0].innerHTML = content;
			},
			init(){
				var a = document.getElementById("customer_1");
				a.click();
			}
		}
		
	}
</script>

<style>
	#customerCase .img_customerCase {
		width: 100%;
		height: 339px;
	}
	#customerCase .img_customerCase img{
		width: 100%;
		height: 100%;
	}
	#customerCase .customer_msg{
		width: 80%;
		min-height: 600px;
		margin: 30px 10%;
	}
	#customerCase .customer_msg .customer{
		width: 20%;
		/* border: 1px solid #BCBCBE; */
		border-right:1px #BCBCBE dashed ;
		float: left;
	}
	#customerCase .customer_msg .customer ul{
		width: 100%;
		list-style: none;
		padding: 0px;
		margin: 0px;
	}
	#customerCase .customer_msg .customer ul li{
		cursor: pointer;
		width: 80%;
		height: 50px;
		line-height: 50px;
		margin-left: 10%;
		border-bottom: 1px solid #E1E1E1;
		font-size: 14px;
	}
	#customerCase .customer_msg .customer ul li:hover{
		color: #00A9F6;
	}
	#customerCase .customer_msg .customer .customer_title{
		cursor: pointer;
		font-size: 1em;
		text-align: left;
		padding: 20px 10px 10px 10px;
		border-bottom: 1px solid #E1E1E1;
	}
	#customerCase .customer_msg .customer .customer_title:hover{
		color: #00A9F6;
	}
	#customerCase .customer_msg .customer_textInfo{
		float: left;
		width: calc(70% - 2px);
		margin-left: 10%;
	}
	#customerCase .customer_msg .customer_textInfo .textInfo_title{
		width: 100%;
		height: 50px;
		text-align: center;
		line-height: 50px;
		font-size: 1.5em;
		border-bottom: 1px solid #E1E1E1;
	}
</style>
