<template>
	<div id="myVue">
		<div id="head">
			<img src="../assets/logo_website.png"/>
			<ul>
				<li v-for="todo in todos" :key="todo.src" :id="todo.id" v-on:click="selectCSS(todo.id)">
					<router-link :to="todo.src">{{todo.text}}</router-link>
				</li>
			</ul>
		</div>
		<router-view></router-view>
		<floot></floot>
	</div>
</template>

<script>
import floot from "@/components/floot";
	export default {
	  data () {
	    return {
	      todos: [{
						id:'home_1',
						text:'首页',
						src:'/home'
					},{
						id:'home_2',
						text:'软件产品',
						src:'/product'
					},{
						id:'home_3',
						text:'行业领域',
						src:'/industry'
					},{
						id:'home_4',
						text:'客户案例',
						src:'/customerCase'
					},{
						id:'home_5',
						text:'关于庚顿',
						src:'/about'
					},{
						id:'home_6',
						text:'产品购买',
						src:'/download'
					}]
	    }
	  },
	  methods: {
			selectCSS(id){
// 				var lis = document.getElementById('head').getElementsByTagName("li");
// 				for(var i =0;i<lis.length;i++){
// 					console.log(lis[i].style.color)
// 					lis[i].style.color = "#fff";
// 				}
				// document.getElementById(id).style.color="#00A9F6";
			}
	  },
	  components:{
			floot
	  }
	}

</script>

<style scoped>
	html, body{
		width: 100%;
		height: 100%;
		margin: 0px;
		padding: 0px;
	}
	#myVue{
		width: 100%;
		height: 100%;
		min-width: 1260px;
	}
	#head {
		width: 100%;
		height: 50px;
		background-color: #2C3E50;
	}
	#head img{
		width: 120px;
		height: 26px;
		float: left;
		padding: 12px;
		margin-left: 10%;
	}
	#head ul{
		height: 50px;
		padding: 0px;
		margin: 0px;
	}
	#head ul li{
		padding: 14px;
		list-style:none;
		float: left;
		font-size: 16px;
		text-align: center;
	}
	a {
		color: #fff;
		text-decoration: none;
	}
	a:hover {
		color: #00A9F6;
	}
	.selectCSS{
		color: #00A9F6;
	}
	floot{
		width: 100%;
		height: 50px;
	}
</style>
