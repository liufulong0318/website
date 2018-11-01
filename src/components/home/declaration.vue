<template>
	<div id="declaration">
		<div class="L_img">
			<img src="http://www.golden-data.com.cn/front/images_new/about/about1.png" />
		</div>
		<div class="R_content">
			<div class="title">
				关于我们 -- <span>成立宣言</span>
			</div>
			<div class="line"></div>
			<div class="text">
				<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;北京庚顿数据科技有限公司专业从事自主知识产权的"实时数据库管理系统"研发及产业化，作为一种基础软件，实时数据库管理系统在工业化和信息化融合过程中起着重要的支撑作用，是新一代信息技术产业中的关键。该领域关系国家安全、产业关联广泛，存在巨大的创新空间。</p>
				<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们深知这项事业的艰巨性、复杂性和长期性。我们更清楚地认识到，没有基础软件的突破，我国就无法跻身世界信息技术产业强国之列。有鉴于此，我们立志“啃得了骨头、耐得住寂寞、顶得住诱惑”，决心长期专注实时数据库领域，打造优秀人才队伍、提升创新能力、突破核心技术、掌握自主知识产权、研发创新产品系列、形成高附加值的产业链条。</p>
				<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们有一个梦想：让中国的实时数据库软件领先全球，让中国的基础软件领先全球!<br /></p>
				<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们坚信：就像中华民族的伟大复兴一定能实现一样，我们的梦想一定能实现!</p>
			</div>
			<div class="ref_li">
				<ul>
					<li v-for="todo in todos" :key="todo.text">
						<div class="li_text" :name="todo.name" v-on:click="to(todo.name,todo.url)">{{todo.text}}</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				todos :[{
						text: '简介',
						url: '#/product',
						name:'jj'
						},
						{
						text: '荣誉',
						url: '#/product',
						name:'ry'
						},
						{
						text: '文化',
						url: '#/product',
						name:'wh'
						},
						{
						text: '历程',
						url: '#/product',
						name:'lc'
						}]
					}
				},
		methods: {
			to(text,url){
				console.log(document.getElementsByName(text)[0].innerHTML);
				document.location = url
			}
		}
	}
</script>

<style>
	#declaration {
		position: absolute;
		width: 80%;
		height: 540px;
		margin: 490px calc(10% - 1px) 30px calc(10% - 1px);
		border: 1px #e0e0e0 solid;
	}
	#declaration .L_img{
		width: 50%;
		height: 100%;
		float: left;
	}
	#declaration .R_content{
		width: 50%;
		height: 100%;
		float: left;
	}
	#declaration .title {
		width: 100%;
		height: 70px;
		text-align: left;
		padding-left: 30px;
		font-size: 33px;
		line-height: 70px;
	}
	.title span {
		color: #00a9f6;
	}
	#declaration .line{
		width: 310px;
		height: 1px;
		margin-left: 30px;
		background: #BCBCBE;
	}
	#declaration .text {
		width: calc(100% - 60px);
		height: 350px;
		padding: 10px 30px 30px 30px;
		font-size: 16px;
		text-align: left;
		overflow: hidden;
	}
	#declaration .ref_li {
		width: calc(100% - 60px);
		height: 79px;
		padding-left: 30px;
		padding-right: 30px;
	}
	.ref_li ul {
		width: 100%;
		height: 100%;
		padding: 0px;
		margin: 0px;
		list-style: none;
		display: table;
	}
	.ref_li ul li {
		display: table-cell;
	}
	.ref_li .li_text{
		cursor: pointer;
		text-align: center;
		line-height: 70px;
		width: 70px;
		height: 70px;
		border-radius: 40px;
		border: 1px solid #61656e;
		font-size: 18px;
	}
	.ref_li .li_text:hover{
		border: 1px solid #00a9f6;
		color: #00A9F6;
	}
	#declaration .L_img img {
		padding: 10px;
		width: calc(100% - 20px);
		height: calc(100% - 20px);
	}
</style>
