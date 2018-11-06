<template>
	<div id="about">
		<div class="img_about">
			<img src="http://52.83.234.27:80/gd/front/images_new/index/about.jpg"/>
		</div>
		<div class="about_msg">
			<div class="about">
				<div v-for="item in items" :key="item.id">
					<div class="about_title" :id="item.id" v-on:click="showInfo(item.id,item.title,item.content)">{{item.title}}</div>
				</div>
			</div>
			<div class="about_textInfo">
				<div class="textInfo_title"></div>
				<div class="about_content">
					
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
					id:'about_1',
					title:'成立宣言',
					content:'axxxxxxxx'
				},{
					id:'about_2',
					title:'公司简介',
					content:'bxxxxxxxx'
				},{
					id:'about_3',
					title:'资质荣誉',
					content:'cxxxxxxxx'
				},{
					id:'about_4',
					title:'企业文化',
					content:'dxxxxxxxx'
				},{
					id:'about_5',
					title:'庚顿动态',
					content:'exxxxxxxx'
				},{
					id:'about_6',
					title:'庚顿分享',
					content:'exxxxxxxx'
				},{
					id:'about_7',
					title:'联系我们',
					content:'exxxxxxxx'
				}]
				}
		},
		mounted(){
			this.init()	
		},
		methods: {
			showInfo(id,title,content){
				var lis = document.getElementById('about').getElementsByClassName("about_title");
				for(var i =0;i<lis.length;i++){
					lis[i].style.color = "";
				}
				document.getElementById(id).style.color = "#00A9F6";
				document.getElementsByClassName("textInfo_title")[0].innerHTML = title;
				document.getElementsByClassName("about_content")[0].innerHTML = content;
			},
			init(){
				var a = document.getElementById("about_1");
				a.click();
			}
		}
		
	}
</script>

<style>
	#about {
		width: 100%;
	}
	#about .img_about img{
		width: 100%;
		height: 100%;
	}
	
	#about .about_msg{
		width: 80%;
		min-height: 600px;
		margin: 30px 10%;
	}
	#about .about_msg .about{
		width: 20%;
		/* border: 1px solid #BCBCBE; */
		border-right:1px #BCBCBE dashed ;
		float: left;
	}
	#about .about_msg .about ul{
		width: 100%;
		list-style: none;
		padding: 0px;
		margin: 0px;
	}
	#about .about_msg .about ul li{
		cursor: pointer;
		width: 80%;
		height: 50px;
		line-height: 50px;
		margin-left: 10%;
		border-bottom: 1px solid #E1E1E1;
		font-size: 14px;
	}
	#about .about_msg .about ul li:hover{
		color: #00A9F6;
	}
	#about .about_msg .about .about_title{
		cursor: pointer;
		font-size: 1em;
		text-align: left;
		padding: 20px 10px 10px 10px;
		border-bottom: 1px solid #E1E1E1;
	}
	#about .about_msg .about .about_title:hover{
		color: #00A9F6;
	}
	#about .about_msg .about_textInfo{
		float: left;
		width: calc(70% - 2px);
		margin-left: 10%;
	}
	#about .about_msg .about_textInfo .textInfo_title{
		width: calc(100% - 20px);
		height: 50px;
		text-align: left;
		line-height: 50px;
		font-size: 1.5em;
		border-bottom: 1px solid #E1E1E1;
		border-left: 5px solid #00A9F6;
		padding-left: 15px;
	}
</style>
