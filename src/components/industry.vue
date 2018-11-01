<template>
	<div id="industry">
		<div class="img_industry">
			<img src="http://52.83.234.27:80/gd/front/images_new/index/jiejue.jpg"/>
		</div>
			<ul>
				<li v-for="item in items" :key="item.title">
						<el-popover
							placement="top-start"
							:title="item.title"
							width="800"
							trigger="click"
							>
							<div v-for="con in item.content" :key="con.id" >
								<p>{{con.p_text}}</p>
								<img :src="con.img_text"/>
							</div>
							<img slot="reference" :src="item.img_url"/>
						  </el-popover>
					<div class="name_in">{{item.title}}</div>
				</li>
			</ul>
		<div style='clear:both'></div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				items:[{
					title:'风电集控',
					content:[{
						id:'1',
						p_text:'大数据平台基于庚顿实时数据库、Hadoop，以及规范的数据共享技术构建。',
						img_text:''
					},{
						id:'2',
						p_text:'平台功能包括采集数据接收及传输、数据实时清洗、数据实时处理、实时数据告警、元数据管理、数据压缩存储、海量数据在线多维查询及导出、数据并行分析计算、数据挖掘、作业调度管理、并提供实时数据库接口、数据共享服务、平台维护管理功能。',
						img_text:'http://www.golden-data.com.cn/upload/fck/image/71a4342f6f78432089d2d5f21e1cb6b2.png'
					}],
					img_url:'http://52.83.234.27:80/gd/upload/image/load/f32e2979df6345c19691161984f3d3e1.jpg'
				},{
					title:'轨道交通',
					content:[{
						id:'1',
						p_text:'城市轨道交通综合监控系统，以实时监控为主要应用目的，实现电力调度、机电设备监控、车站运营状态监视等功能。在体系架构设计和接口方面主要侧重于实时设备监控和数据处理，实时数据及历史数据的管理。系统主要由中心服务器及车站端、车辆段端、停车场端服务器构成，以实时数据库和关系数据库为基础构建。',
						img_text:'http://www.golden-data.com.cn/upload/fck/image/df1b58ce68654db9a608cd8bc243aba1.png'
					}],
					img_url:'http://52.83.234.27:80/gd/upload/image/load/8e795ae21ff74008a66577a46003764f.jpg'
				},{
					title:'智慧城市',
					content:[{
						id:'1',
						p_text:' 智慧城市大数据平台遵循住建部发布的智慧城市标准，实时采集水、电、气、管网、环境、路网等基础数据，实时监测城市、商圈运行体征，实现整个城市或商圈的用电信息采集及监控、能耗管控、地下管网实时监控、环境实时监测、路网实时监控、智能停车导引、室内导航、商业区客流量监控、IT设备监控、智能家居、智能照明等系统和服务。',
						img_text:'http://www.golden-data.com.cn/upload/fck/image/c832bacba42242ec94cdbe17ba2c7d6d.png'
					},{
						id:'2',
						p_text:'平台功能包括采集数据接收及传输、数据实时清洗、数据实时处理、实时数据告警、元数据管理、数据压缩存储、海量数据在线多维查询及导出、数据并行分析计算、数据挖掘、作业调度管理、并提供实时数据库接口、数据共享服务、平台维护管理功能。',
						img_text:''
					}],
					img_url:'http://52.83.234.27:80/gd/upload/image/load/e0f366972a9948c4aa009aeeaffe2f0a.jpg'
				},{
					title:'智能楼宇',
					content:[{
						id:'1',
						p_text:'智慧楼宇平台基于庚顿实时数据库并采用先进的计算机控制技术，管理软件和节能系统程序，使建筑物机电或建筑群内的设备有条不紊、综合协调、科学地运行，从而达到有效地保证建筑物内有舒适的工作环境、实现节能、节省维护管理工作量和运行费用的目的。平台主要采集监测存储楼宇的主要耗电设备空调的运行情况，包括电流电压以及用电量等参数。分析不同时间段和分布在不同地点的空调耗电情况，可以准确诊断空调系统故障，合理选配使用空调，以及节约用电。',
						img_text:'http://www.golden-data.com.cn/upload/fck/image/31a17c77bfbe4bb3be6cdb2ba772f2f9.png'
					}],
					img_url:'http://52.83.234.27:80/gd/upload/image/load/b959fc0ecb8d4aeb8ffa954d7f9edd2c.jpg'
				},{
					title:'火力发电',
					content:[{
						id:'1',
						p_text:'发电厂厂级监控信息系统是通过实时数据库对DCS、脱硫、输煤、除灰、化水等数据的集中采集和存储管理，实现生产实时监控，进而进行机组级和厂级性能计算、耗差分析、能量审计，形成负荷优化分配、操作优化指导等辅助决策知识，以提高发电厂的经济性和安全性。',
						img_text:'http://www.golden-data.com.cn/upload/fck/image/57560deb712c4887b63e0b392157ccde.png'
					}],
					img_url:'http://52.83.234.27:80/gd/upload/image/load/ffab0fe4738b484092fbddb385476111.png'
				},{
					title:'安全生产',
					content:[{
						id:'1',
						p_text:'物联网安全生产监控系统，是以生产过程的安全监控为核心，以B/S 为架构建立的系统，整个系统以庚顿实时数据库为核心，并借助于关系库，将实时监控与信息查询有机结合起来，对不同功能的子系统进行界面集成，实现对工业企业生产过程中的安全环节进行监控。主要功能模块包括：统一展现门户，操作系统维护，应急指挥，应急管理，监测监控，统一管理等模块，整个系统具有操作简单，信息共享性强，业务扩展方便，可将不同的子系统进行界面集成，部署维护容易，为工业企业的安全生产提供可靠信息支持。',
						img_text:'http://www.golden-data.com.cn/upload/fck/image/23c82a950ed54f57beaed5741366d5fd.png'
					},{
						id:'2',
						p_text:'',
						img_text:'http://www.golden-data.com.cn/upload/fck/image/260a4d3228a94dd3ba94ba55f0c6c91d.png'
					}],
					img_url:'http://52.83.234.27:80/gd/upload/image/load/0c64703cc79243ae9038be18248f6c3f.jpg'
				},{
					title:'智能电网',
					content:[{
						id:'1',
						p_text:'以信息化、自动化、互动化为特征的智能电网在发电、输电、变电、配电、用电和调度六个环节产生海量数据。这些数据是智能电网的重要基础。',
						img_text:''
					},{
						id:'2',
						p_text:'基于实时数据库建立的海量实时/历史数据管理平台，可以满足智能电网各业务应用对海量实时/历史数据进行整合、存储、共享、统一访问的需求。',
						img_text:'http://www.golden-data.com.cn/upload/fck/image/361fe0d5db25446785e448c73204e5ac.png'
					}],
					img_url:'http://52.83.234.27:80/gd/upload/image/load/95681483c46844a6822e05d3a9ec9333.jpg'
				},{
					title:'节能环保',
					content:[{
						id:'1',
						p_text:'庚顿实时数据库可集中管理厂区、园区内的水、电、暖等各类资源的实时传感数据。',
						img_text:''
					},{
						id:'2',
						p_text:'通过对厂区、园区内各种用电、用水和用能设备的集中监视和管理，实现能源管理现代化，达到减少浪费、节约能源的目的。这是两化融合推动节约型社会建设的重要途径。',
						img_text:''
					},{
						id:'3',
						p_text:'',
						img_text:'http://www.golden-data.com.cn/upload/fck/image/56da2c8850064237bbf59833ecfe3c6f.png'
					},{
						id:'4',
						p_text:'环境实时监测可通过实时数据库有效管理环境质量监测数据，如：空气、水、噪声、辐射等，以及污染源监控数据，如：燃煤锅炉烟气、建筑工地扬尘、污水处理厂水质、传染病医院污水等。',
						img_text:''
					},{
						id:'5',
						p_text:' 用户以此为基础，可以分析、展示环境质量状况及其变化规律、污染源排放汲取变化状况、环境风险和隐患，实现环境管理与污染源监管，完成城市环境质量目标，保障城市环境安全。',
						img_text:''
					},{
						id:'6',
						p_text:'',
						img_text:'http://www.golden-data.com.cn/upload/fck/image/059cd4fd5f584242bb99451e78ec0411.png'
					}],
					img_url:'http://52.83.234.27:80/gd/upload/image/load/723608adfab44d5c9f51c9a8406b17b0.jpg'
				},{
					title:'集团生产',
					content:[{
						id:'1',
						p_text:' 集团级生产实时信息系统中的实时数据库支持分布式部署，具有数据断网续传、编码转换、与第三方数据库无缝链接等功能，适于构建集团生产实时信息系统。集团数据中心实时数据库汇总各分厂实时生产信息，为集团实时掌握下属各企业生产动态、实现精细化管理提供支撑。',
						img_text:'http://www.golden-data.com.cn/upload/fck/image/440cb758bcec492dbbfa9725909d0b9a.png'
					}],
					img_url:'http://52.83.234.27:80/gd/upload/image/load/49b7b4d694a941bca3a17958b738c133.jpg'
				}]
				}
		},
		mounted(){
				
		},
		methods: {
			
		}
	}
</script>

<style>
	#industry {
		width: 100%;
	}
	#industry .img_industry img{
		width: 100%;
		height: 100%;
	}
	#industry ul{
		width: 80%;
		height: 100%;
		list-style: none;
		margin: 0px 10%;
		padding: 0px;
		
	}
	#industry ul li{
		width: 30%;
		float: left;
		margin: 30px 1.5%;
	}
	
	#industry ul li img{
		width: 100%;
		cursor: pointer;
	}
	#industry .name_in{
		width: 100%;
		height: 50px;
		line-height: 50px;
		border-bottom: 1px solid #BCBCBE;
	}
	.el-popper{
		height: 400px;
		overflow: auto;
	}
</style>
