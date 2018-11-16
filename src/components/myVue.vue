<template>
	<div id="myVue">
		<div id="head">
			<img src="../assets/logo_website.png"/>
			<ul>
				<li v-for="todo in todos" :key="todo.src" :id="todo.id" v-on:click="selectCSS(todo.id)">
					<router-link :to="todo.src">{{todo.text}}</router-link>
				</li>
				
			</ul>
			<div class="registerAndlogin">
				<ul>
					<li ><el-button type="text" @click="centerDialogVisible_R = true">注册</el-button></li>
					<li><el-button type="text" @click="centerDialogVisible_L = true">登录</el-button></li>
				</ul>
			</div>
		</div>
		<router-view></router-view>
		<floot></floot>
		<el-dialog title="注册" :visible.sync="centerDialogVisible_R" width="30%" center>
			<el-form ref="form" :model="form" :rules="rules" label-width="80px">
				<el-form-item label="用户名" prop="name">
					<el-input v-model="form.name" placeholder="请输入用户名"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="password">
					<el-input type="password" v-model="form.password" placeholder="请输入密码(长度在 6 到 12 个字符)"></el-input>
				</el-form-item>
				<el-form-item label="确认密码" prop="password2">
					<el-input type="password" v-model="form.password2" placeholder="请再次输入密码(保持一致)"></el-input>
				</el-form-item>
			</el-form>
		  <span slot="footer" class="dialog-footer">
			<el-button @click="resetForm('form')">重 置</el-button>
			<el-button type="primary"  @click="submitForm('form')">注册</el-button>
		  </span>
		</el-dialog>
		<el-dialog title="登录" :visible.sync="centerDialogVisible_L" width="30%" center>
			<el-form ref="form_login" :model="form_login" :rules="rules_login" label-width="80px">
				<el-form-item label="用户名" prop="name">
					<el-input v-model="form_login.name" placeholder="请输入用户名"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="password">
					<el-input type="password" v-model="form_login.password" placeholder="请输入密码"></el-input>
				</el-form-item>
			</el-form>
		<span slot="footer" class="dialog-footer">
			<el-button @click="resetForm('form_login')">取 消</el-button>
			<el-button type="primary" @click="submitForm('form_login')">登录</el-button>
		</span>
		</el-dialog>
	</div>
</template>

<script>
import floot from "@/components/floot";
	export default {
	  data () {
	    return {
		  centerDialogVisible_R: false,
		  centerDialogVisible_L: false,
		  form: {
			  name: '',
			  password: '',
			  password2: ''
			},
		  form_login: {
				name: '',
				password: ''
			},
		  rules: {
			  name: [
				{ required: true, message: '请输入用户名', trigger: 'blur' },
				{ min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
			  ],
			  password: [
				{ required: true, message: '请输入密码', trigger: 'blur'},
				{ min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
			  ],
			  password2: [
				{ required: true, message: '两次数据密码不一致，请重新输入', trigger: 'blur' },
				{ min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
			  ]
			},
			rules_login: {
				name: [
				{ required: true, message: '请输入用户名', trigger: 'blur' },
				{ min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
				],
				password: [
				{ required: true, message: '请输入密码', trigger: 'blur'},
				{ min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
				]
			},
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
			},
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
				  if (valid) {
					alert('submit!');
				  } else {
					console.log('error submit!!');
					return false;
				  }
				});
			  },
			resetForm(formName) {
				this.$refs[formName].resetFields();
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
	#head .registerAndlogin{
		width: 20%;
		float: left;
		height: 50px;
		color: white;
		line-height: 50px;
	}
	#head .registerAndlogin ul{
		height: 100%;
		padding: 0px;
		margin: 0px;
	}
	#head .registerAndlogin ul li{
		list-style:none;
		float: left;
		font-size: 16px;
		text-align: center;
		padding: 2px 15px;
		line-height: 50px;
		cursor: pointer;
	}
	#head >ul{
		width: calc(60% - 132px);
		float: left;
		height: 50px;
		padding: 0px;
		margin: 0px;
	}
	#head >ul li{
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
