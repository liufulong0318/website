<template>
	<div id="myVue">
		<div id="head">
			<img src="../assets/logo_website.png"/>
			<ul>
				<li v-for="todo in todos" :key="todo.src">
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
					text:'首页',
					src:'/home'
					},{
					text:'软件产品',
					src:'/product'
					},{
					text:'行业领域',
					src:'/industry'
					},{
					text:'客户案例',
					src:'/customerCase'
					},{
					text:'关于庚顿',
					src:'/about'
					},{
					text:'下载中心',
					src:'/download'
					}]
	    }
	  },
	  methods: {
	
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
		color: red;
	}
	
	floot{
		width: 100%;
		height: 50px;
	}
</style>
