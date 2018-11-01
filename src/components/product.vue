<template>
	<div id="product">
		<div class="img_product">
			<img src="http://52.83.234.27:80/gd/front/images_new/index/product.jpg"/>
		</div>
		<div class="pro_msg">
			<div class="pro">
				<div v-for="item in items" :key="item.title">
						<div class="title" >{{item.title}}</div>
						<div class="content" >
							<ul>
								<li v-for="obj in item.content" :key="obj.id" :id="obj.id" v-on:click="showInfo(obj.id,obj.name,obj.html)">{{obj.name}}</li>
							</ul>
						</div>
					</div>
				</div>
			<div class="pro_textInfo">
				<div class="textInfo_title"></div>
				<div class="pro_content">
					
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
				items :[{
					title:'数据库软件',
					content:[{
						id:'rj_1',
						name:'庚云实时数据库管理系统',
						html:'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
					},
					{
						id:'rj_2',
						name:'庚顿实时数据库管理系统',
						html:'xxxxxxxxxxxxxxxxxxxxxxxxxx'
					},
					{
						id:'rj_3',
						name:'庚金实时数据库管理系统',
						html:'xxxxxxxxxxxx'
					}]
				},
				{
					title:'可视化软件',
					content:[{
						id:'ksh_1',
						name:'庚顿通用监控组态平台',
						html:'xxxxxxxxxxx'
					},
					{
						id:'ksh_2',
						name:'庚顿可视化产品系列',
						html:'xxxxxxxx'
					}]
				},
				{
					title:'数据融合软件',
					content:[{
						id:'sjrh_1',
						name:'庚顿数据采集适配器',
						html:'xxxxxxxxxxxxxx'
					},
					{
						id:'sjrh_2',
						name:'庚顿数据输出适配器',
						html:'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
					}]
				}]
				}
		},
		mounted(){
				this.init()
		},
		methods: {
			showInfo(id,name,html){
				var lis = document.getElementById('product').getElementsByTagName('li');
				for(var i =0;i<lis.length;i++){
					lis[i].style.color = "";
				}
				document.getElementById(id).style.color = "#00A9F6";
				document.getElementsByClassName("textInfo_title")[0].innerHTML = name;
				document.getElementsByClassName("pro_content")[0].innerHTML = html;
			},
			init(){
				var a = document.getElementById("rj_1");
				a.click();
			}
		}
		
	}
</script>

<style>
	
	#product .img_product {
		width: 100%;
		height: 339px;
	}
	#product .img_product img{
		width: 100%;
		height: 100%;
	}
	#product .pro_msg{
		width: 80%;
		min-height: 600px;
    margin: 30px 10%;
	}
	#product .pro_msg .pro{
		width: 20%;
		/* border: 1px solid #BCBCBE; */
		border-right:1px #BCBCBE dashed ;
		float: left;
	}
	#product .pro_msg .pro ul{
		width: 100%;
		list-style: none;
		padding: 0px;
		margin: 0px;
	}
	#product .pro_msg .pro ul li{
		cursor: pointer;
		width: 80%;
		height: 50px;
		line-height: 50px;
		margin-left: 10%;
		border-bottom: 1px solid #E1E1E1;
		font-size: 14px;
	}
	#product .pro_msg .pro ul li:hover{
		color: #00A9F6;
	}
	#product .pro_msg .pro .title{
		font-size: 1.5em;
		text-align: left;
		padding: 30px 10px 10px 10px;
	}
	#product .pro_msg .pro_textInfo{
		float: left;
		width: calc(70% - 2px);
		margin-left: 10%;
	}
	#product .pro_msg .pro_textInfo .textInfo_title{
		width: 100%;
		height: 50px;
		text-align: center;
		line-height: 50px;
		font-size: 1.5em;
		border-bottom: 1px solid #E1E1E1;
	}
</style>
