<template>
	<div id="weIndustryUL">
		<div v-for="div_c in div_C" :key="div_c.name">
			<img :src="div_c.src" v-on:mouseover="bg_change(div_c.new_src, div_c.src, div_c.name, div_c.id)" v-on:mouseleave="bg_return(div_c.new_src, div_c.src, div_c.name, div_c.id)" v-on:click="toPage(div_c.toPage)" :id="div_c.id" />
		</div>		
	</div>
</template>
<script>
	export default {
		data () {
			return {
				div_C:[{
						name:'金凤科技',
						src:'http://52.83.234.27:80/gd/upload/image/load/125f72efae58484d8de3561a234baf23.jpg',
						new_src:'http://52.83.234.27:80/gd/upload/image/load/cdb7b430e5ba4231b21515b1450a401c.png',
						id: 'img_1',
						toPage:'#/product'
					  },{
						name:'国能生物集团',
						src:'http://52.83.234.27:80/gd/upload/image/load/cdb7b430e5ba4231b21515b1450a401c.png',
						new_src:'http://52.83.234.27:80/gd/upload/image/load/cdb7b430e5ba4231b21515b1450a401c.png',
						id: 'img_2',
						toPage:'#/product'
					  },{
						name:'安徽安泰科技',
						src:'http://52.83.234.27:80/gd/upload/image/load/3051dd08342e4864920fbc22157382b6.jpg',
						new_src:'http://52.83.234.27:80/gd/upload/image/load/cdb7b430e5ba4231b21515b1450a401c.png',
						id: 'img_3',
						toPage:'#/product'
					  },{
						name:'胜利油田',
						src:'http://52.83.234.27:80/gd/upload/image/load/989fc001c777445993a84a14e91edf0d.jpg',
						new_src:'http://52.83.234.27:80/gd/upload/image/load/cdb7b430e5ba4231b21515b1450a401c.png',
						id: 'img_4',
						toPage:'#/product'
					  },{
						name:'农夫山泉',
						src:'http://52.83.234.27:80/gd/upload/image/load/7fec8a68388742c49ceab69f04bbc533.png',
						new_src:'http://52.83.234.27:80/gd/upload/image/load/cdb7b430e5ba4231b21515b1450a401c.png',
						id: 'img_5',
						toPage:'#/product'
					  },{
						name:'火力发电',
						src:'http://52.83.234.27:80/gd/upload/image/load/82254c6f8759400ab0250b17c42e9ac1.png',
						new_src:'http://52.83.234.27:80/gd/upload/image/load/cdb7b430e5ba4231b21515b1450a401c.png',
						id: 'img_6',
						toPage:'#/product'
					  },{
						name:'煤矿领域',
						src:'http://52.83.234.27:80/gd/upload/image/load/0ccbb05f468446ca8c574046477b311d.jpg',
						new_src:'http://52.83.234.27:80/gd/upload/image/load/cdb7b430e5ba4231b21515b1450a401c.png',
						id: 'img_7',
						toPage:'#/product'
					  },{
						name:'数据中心',
						src:'http://52.83.234.27:80/gd/upload/image/load/e7be76d13b4e4f7daffe605b090e71e3.jpg',
						new_src:'http://52.83.234.27:80/gd/upload/image/load/cdb7b430e5ba4231b21515b1450a401c.png',
						id: 'img_8',
						toPage:'#/product'
					  },{
						name:'国华能源',
						src:'http://52.83.234.27:80/gd/upload/image/load/109d7c2e5efa4a78a1d499d887a2454a.jpg',
						new_src:'http://52.83.234.27:80/gd/upload/image/load/cdb7b430e5ba4231b21515b1450a401c.png',
						id: 'img_9',
						toPage:'#/product'
					  },{
						name:'国家电网',
						src:'http://52.83.234.27:80/gd/upload/image/load/19220957e2a245f0bdbc2408cd2e4771.jpg',
						new_src:'http://52.83.234.27:80/gd/upload/image/load/cdb7b430e5ba4231b21515b1450a401c.png',
						id: 'img_10',
						toPage:'#/product'
					  },{
						name:'光伏发电',
						src:'http://52.83.234.27:80/gd/upload/image/load/b644cbd71c0e49509556759bcaa297f7.jpg',
						new_src:'http://52.83.234.27:80/gd/upload/image/load/cdb7b430e5ba4231b21515b1450a401c.png',
						id: 'img_11',
						toPage:'#/product'
					  },{
						name:'智能制造',
						src:'http://52.83.234.27:80/gd/upload/image/load/b48cb6f3ea2840e499e36f50d2b17f82.png',
						new_src:'http://52.83.234.27:80/gd/upload/image/load/cdb7b430e5ba4231b21515b1450a401c.png',
						id: 'img_12',
						toPage:'#/product'
					  }]
					}
				},
		methods: {
			bg_change(new_src, src, name, id) {
				document.getElementById(id).src=new_src; 
			},
			bg_return(new_src, src, name, id) {
				document.getElementById(id).src=src;
			},
			toPage(toPage) {
				document.location = toPage
			}
		}
	}
</script>

<style>
	#weIndustryUL{
		width: 80%;
		height: 618px;
		margin: 30px 10% 30px 10%;
	}
	#weIndustryUL div{
		float: left;
		
	}
	#weIndustryUL div img{
		width: 100%;
		height: 100%;
		cursor: pointer;
	}
	#weIndustryUL div:first-child{
		width: 32%;
		height: 372px;
		padding: 15px 1% 15px 0px;
	}
	#weIndustryUL div:nth-child(2),#weIndustryUL div:nth-child(3),#weIndustryUL div:nth-child(4) {
		width: 15%;
		height: 171px;
		padding: 15px 1%;
	}
	#weIndustryUL div:nth-child(5){
		width: 15%;
		height: 171px;
		padding: 15px 0px 15px 1%;
	}
	#weIndustryUL div:nth-child(6),#weIndustryUL div:nth-child(7){
		width: 15%;
		height: 171px;
		padding: 15px 1%;
	}
	
	#weIndustryUL div:nth-child(8) {
		width: 32%;
		height: 372px;
		padding: 15px 0px 15px 1%;
	}
	#weIndustryUL div:nth-child(9){
		position: relative;
		top:-201px;
		width: 15%;
		padding: 15px 1% 15px 0px;
	}
	#weIndustryUL div:nth-child(10){
		position: relative;
		top:-201px;
		width: 15%;
		padding: 15px 1%;
	}
	#weIndustryUL div:nth-child(11){
		position: relative;
		top:-201px;
		width: 15%;
		padding: 15px 1%;
	}
	#weIndustryUL div:nth-child(12) {
		position: relative;
		top:-201px;
		width: 15%;
		padding: 15px 1%;
	}
</style>
