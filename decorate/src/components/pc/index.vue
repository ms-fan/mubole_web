<template>
	<div class="p_index">
		<!-- 首页 -->
		<el-row>
			<el-col :span="24">
				<el-carousel height='30rem'>
					<el-carousel-item v-for="item in listImg" :key="item">
						<!-- 	<h3 class="small">{{ item }}</h3> -->
						<el-image :src="item" fit="cover" class="p_index_img"></el-image>
					</el-carousel-item>
				</el-carousel>
			</el-col>
		</el-row>
		<el-row style="display: flex;flex-direction: column;align-items: center;position: relative;top: -20px;z-index: 100;">

			<el-col :span="18" class="p_index_main">
				<el-row>
					<el-col :span='4' class="p_index_main_1">
						<el-image :src="src" fit="cover" class="p_index_main_1_img"></el-image>
						<div class="p_index_main_1_box">
							<el-image :src="src" fit="cover" class="p_index_main_1_box_img"></el-image>
							<div>免费设计</div>
							<div>xxxxxx</div>
							<div>xxxxxx</div>
						</div>
					</el-col>
					<el-col :span='4' class="p_index_main_1">
						<el-image :src="src" fit="cover" class="p_index_main_1_img"></el-image>
						<div class="p_index_main_1_box">
							<el-image :src="src" fit="cover" class="p_index_main_1_box_img"></el-image>
							<div>免费设计</div>
							<div>xxxxxx</div>
							<div>xxxxxx</div>
						</div>
					</el-col>
					<el-col :span='4' class="p_index_main_1">
						<el-image :src="src" fit="cover" class="p_index_main_1_img"></el-image>
						<div class="p_index_main_1_box">
							<el-image :src="src" fit="cover" class="p_index_main_1_box_img"></el-image>
							<div>免费设计</div>
							<div>xxxxxx</div>
							<div>xxxxxx</div>
						</div>
					</el-col>
					<el-col :span='4' class="p_index_main_1">
						<el-image :src="src" fit="cover" class="p_index_main_1_img"></el-image>
						<div class="p_index_main_1_box">
							<el-image :src="src" fit="cover" class="p_index_main_1_box_img"></el-image>
							<div>免费设计</div>
							<div>xxxxxx</div>
							<div>xxxxxx</div>
						</div>
					</el-col>
					<el-col :span='4' class="p_index_main_1">
						<el-image :src="src" fit="cover" class="p_index_main_1_img"></el-image>
						<div class="p_index_main_1_box">
							<el-image :src="src" fit="cover" class="p_index_main_1_box_img"></el-image>
							<div>免费设计</div>
							<div>xxxxxx</div>
							<div>xxxxxx</div>
						</div>
					</el-col>
					<el-col :span='4' class="p_index_main_1">
						<el-image :src="src" fit="cover" class="p_index_main_1_img"></el-image>
						<div class="p_index_main_1_box">
							<el-image :src="src" fit="cover" class="p_index_main_1_box_img"></el-image>
							<div>免费设计</div>
							<div>xxxxxx</div>
							<div>xxxxxx</div>
						</div>
					</el-col>
				</el-row>
			</el-col>
			<el-col :span="18" class='p_index_main2'>
				<div>在线装修案例</div>
				<div>更多<i class="el-icon-arrow-right"></i></div>
			</el-col>
			<el-col :span="18" class='p_index_main3'>
				<el-row>
					<el-col :span="12" class='p_index_main3_font'>
						<div class="p_index_main3_font_box">
							<el-image :src="src" fit="cover" class="p_index_main3_font_box_img"></el-image>
							<div class="p_index_main3_font_box_font">
								<div>三房欧式风格</div>
								<div>d的代价fond老年福利的肌肤的能力愤怒的十六年东南烈风南斯拉夫你决定了发你啦</div>
							</div>
						</div>
					</el-col>
					<el-col :span="12" class='p_index_main3_font'>
						<el-row>
							<el-col :span="12" style="display: flex;flex-direction: column;align-items: center;">
								<el-image :src="src" fit="cover" class="p_index_main3_right"></el-image>
								<div>二房简约风格</div>
								<div>都饿顶顶的hi的的hi</div>
								<div>7.6</div>
							</el-col>
							<el-col :span="12" style="display: flex;flex-direction: column;align-items: center;">
								<el-image :src="src" fit="cover" class="p_index_main3_right"></el-image>
								<div>二房简约风格</div>
								<div>都饿顶顶的hi的的hi</div>
								<div>7.6</div>
							</el-col>
							<el-col :span="12" style="display: flex;flex-direction: column;align-items: center;">
								<el-image :src="src" fit="cover" class="p_index_main3_right"></el-image>
								<div>二房简约风格</div>
								<div>都饿顶顶的hi的的hi</div>
								<div>7.6</div>
							</el-col>
							<el-col :span="12" style="display: flex;flex-direction: column;align-items: center;">
								<el-image :src="src" fit="cover" class="p_index_main3_right"></el-image>
								<div>二房简约风格</div>
								<div>都饿顶顶的hi的的hi</div>
								<div>7.6</div>
							</el-col>
						</el-row>
					</el-col>
				</el-row>
			</el-col>

			<el-col :span="18" class='p_index_main2'>
				<div>在线装修案例</div>
				<div>更多<i class="el-icon-arrow-right"></i></div>
			</el-col>

			<el-col :span="18" class='p_index_main3'>
				<div class="p_index_main3_finish" v-for="(item,index) in listFont" :key="index">
					<div class="p_index_main3_finish_box">
						<el-image :src="src" fit="cover" class="p_index_main3_finish_img"></el-image>
						<div>新材料优势</div>
						<div>调动部队立即领导能力女</div>
					</div>
				</div>
			</el-col>

			<el-col :span="18" class='p_index_main3' style="padding: 2rem 0.4rem;">
				<el-row class='p_index_main3_phone'>
					<el-col :span="4" clas="p_index_main3_phone_center">
						<div>今天有418位业主</div>
						<div>预定精选方案</div>
					</el-col>
					<el-col :span="16">
						<el-row>
							<el-col :span="3">我的</el-col>
							<el-col :span="3">我的</el-col>
							<el-col :span="3">我的</el-col>
							<el-col :span="3">我的</el-col>
							<el-col :span="3">我的</el-col>
							<el-col :span="3">我的</el-col>
							<el-col :span="3">我的</el-col>
							<el-col :span="3">我的</el-col>
						</el-row>
						<el-row>
							<el-col :span="3">我的</el-col>
							<el-col :span="3">我的</el-col>
							<el-col :span="3">我的</el-col>
							<el-col :span="3">我的</el-col>
							<el-col :span="3">我的</el-col>
							<el-col :span="3">我的</el-col>
							<el-col :span="3">我的</el-col>
							<el-col :span="3">我的</el-col>
						</el-row>

					</el-col>
					<el-col :span="4">
						我也要预定
					</el-col>
				</el-row>
			</el-col>

			<el-col :span="18" class='p_index_main2'>
				<div>在线装修案例</div>
				<div>更多<i class="el-icon-arrow-right"></i></div>
			</el-col>
			<el-col :span="18" class='p_index_main4'>
				<el-row>
					<el-col :span="8" class="p_index_main4_space" v-for="(item,index) in listSpace" :key="index">
						<el-image :src="src" fit="cover" class="p_index_main4_space_img"></el-image>
						<div>
							<div>空间</div>
							<div class="p_index_main4_space_font">
								<div>我的</div>
								<div>我的</div>
								<div>我的</div>
								<div>我的</div>
								<div>我的</div>
								<div>我的</div>
							</div>
						</div>
					</el-col>
				</el-row>
			</el-col>

			<el-col :span="18" class='p_index_main5'>
				<el-row class="p_index_main5_essential0">
					<el-col :span="6" class="p_index_main5_relative">
						<el-image :src="src" fit="cover" class="p_index_main5_essential2"></el-image>
						<div class="p_index_main5_absolute2">
							<div>我的</div>
							<div>我的</div>
							<div>我的</div>
						</div>
					</el-col>
					<el-col :span="18" class="p_index_main5_essential p_index_main5_relative">
						<el-image :src="src" fit="cover" class="p_index_main5_essential2"></el-image>
						<div class="p_index_main5_absolute4">
							<div>我的</div>
							<div>我的</div>
							<div>我的</div>
						</div>
					</el-col>
				</el-row>
				<el-row class="p_index_main5_essential0">
					<el-col :span="18" class="p_index_main5_relative">
						<el-image :src="src" fit="cover" class="p_index_main5_essential2"></el-image>
						<div class="p_index_main5_absolute2">
							<div>我的</div>
							<div>我的</div>
							<div>我的</div>
						</div>
					</el-col>
					<el-col :span="6" class="p_index_main5_essential p_index_main5_relative">
						<el-image :src="src" fit="cover" class="p_index_main5_essential2"></el-image>
						<div class="p_index_main5_absolute4">
							<div>我的</div>
							<div>我的</div>
							<div>我的</div>
						</div>
					</el-col>
				</el-row>
				<el-row class="p_index_main5_essential0">
					<el-col :span="24" class="p_index_main5_relative">
						<el-image :src="src" fit="cover" class="p_index_main5_essential3"></el-image>
						<div class="p_index_main5_absolute2 p_index_main5_absolute3">
							<div>我的</div>
							<div>我的</div>
							<div>我的</div>
						</div>
					</el-col>
				</el-row>
			</el-col>


			<el-col :span="18" class='p_index_main2'>
				<div>在线装修案例</div>
				<el-breadcrumb separator="|">
					<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
					<el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
					<el-breadcrumb-item>活动列表</el-breadcrumb-item>
					<el-breadcrumb-item>活动详情</el-breadcrumb-item>
					<el-breadcrumb-item>更多<i class="el-icon-arrow-right"></i></el-breadcrumb-item>
				</el-breadcrumb>
			</el-col>
			<el-col :span="18" class='p_index_main3'>
				<el-row>
					<el-col :span="24">
						<el-tabs v-model="activeName" type="card" @tab-click="handleClick">
							<el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
							<el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
							<el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
							<el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
						</el-tabs>
					</el-col>
				</el-row>
			</el-col>

			<el-col :span="18" class='p_index_main6'>
				<el-row>
					<el-col :span="24">
						<el-image :src="src" fit="cover" class="p_index_main6_money"></el-image>
					</el-col>
					<el-col :span="24">
						<el-image :src="src" fit="cover" class="p_index_main6_money"></el-image>
					</el-col>
				</el-row>
			</el-col>
			
			<el-col :span="18" class='p_index_main2'>
				<div>在线装修案例</div>
				<div>更多<i class="el-icon-arrow-right"></i></div>
			</el-col>
			<el-col :span="18"  class='p_index_main3'>
				<el-row>
					<el-col :span="6" style="display: flex;justify-content: center;">
						<div class='p_index_main3_stylist'>
						<el-image :src="src" fit="cover" class="p_index_main3_stylist_img"></el-image>
						<div>张鹏</div>
						<div>顶顶顶顶</div>
						</div>
					</el-col>
				</el-row>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name: '',

		mixins: [],

		components: {

		},

		props: {},

		data() {
			return {
				activeName: 'first',
				listImg: [
					'https://www.starbucks.com.cn/assets/images/featured/2019summer/banner-1.jpg',
					'https://www.starbucks.com.cn/assets/images/featured/2019summer/banner-2.jpg',
					'https://www.starbucks.com.cn/assets/images/featured/2019summer/banner-3.jpg'
				],
				src: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
				listFont: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
				listSpace: [{}, {}, {}]
			}
		},

		computed: {},

		watch: {},

		created() {},

		mounted() {},

		destroyed() {},

		methods: {
			handleClick: function(e) {
				console.log(e)

			},
		}
	};
</script>

<style lang="less">
	// @import './static/css/global.css';
	.p_index {

		&_img {
			width: 100%;
			height: 30rem;

		}

		&_main {
			&_1 {
				border: 1px solid green;
				height: 15rem;
				position: relative;
				display: flex;
				justify-content: center;

				&_img {
					width: 95%;
					height: 100%;
				}

				&_box {
					position: absolute;
					top: 0;
					left: 0;
					width: 95%;
					height: 100%;
					background: rgba(255, 255, 255, 0.7);
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: space-around;
					box-shadow: 2px 4px 2px #888888;

					&_img {
						height: 2.5rem;
						width: 2.5rem;
					}


				}
			}
		}

		&_main2 {
			display: flex;
			justify-content: space-between;
			padding: 2rem 0.4rem;
		}

		&_main3 {
			padding: 0 0.4rem;
			&_stylist{
				display: flex;
				flex-direction: column;
				align-items: center;
				width: 96%;
				border: 1px solid red;
				&_img{
					height: 10rem;
				}
			}
			&_phone {
				&_center {
					display: flex;
					flex-direction: column;
					align-items: center;
				}
			}

			&_finish {
				display: inline-block;
				// flex-direction:column;
				// align-items: center;
				width: 20%;
				height: 10.6rem;
				margin-bottom: 0.5rem;

				&_box {
					display: flex;
					width: 95%;
					height: 10.6rem;
					box-shadow: 1px 1px 4px #ddd;
					flex-direction: column;
					align-items: center;
				}

				&_img {
					height: 2.3rem;
					width: 2.3rem;
				}
			}

			&_right {
				width: 90%;
				height: 8rem;
				border: 1px solid #00A862;
			}

			&_font3 {
				border: 1px solid red;

				&_box {
					width: 96%;
					display: flex;
					flex-direction: column;

					&_img {
						width: 19.3rem;
						height: 13.85rem;
					}

					&_font {
						display: flex;
						flex-direction: column;
					}

				}
			}
		}

		&_main4 {
			padding: 0 4rem;
			border: 1px solid #00A862;
			box-sizing: border-box;

			&_space {
				display: flex;

				&_img {
					height: 2.5rem;
					width: 2.5rem;
				}

				&_font {
					display: flex;
				}
			}
		}
		&_main6{
			padding: 2rem 0.4rem;
			&_money{
				width: 100%;
				height: 20rem;
				margin-bottom: 0.75rem;
			}
		}
		&_main5 {
			padding: 2rem 0.4rem;

			&_essential {
				display: flex;
				justify-content: flex-end;
			}

			&_essential2 {
				height: 20rem;
				width: 98%;
			}

			&_absolute2 {
				height: 25%;
				width: 98%;
				position: absolute;
				bottom: 0;
				left: 0;
				border: 1px solid yellow;
				background: rgba(0, 0, 0, 0.8);
				display: flex;
				flex-direction: column;
				align-items: center;
				color: #FFFFFF;
			}

			&_absolute3 {
				width: 100%;
			}

			&_absolute4 {
				height: 25%;
				width: 98%;
				position: absolute;
				bottom: 0;
				right: 0;
				border: 1px solid yellow;
				background: rgba(0, 0, 0, 0.8);
				display: flex;
				flex-direction: column;
				align-items: center;
				color: #FFFFFF;
			}

			&_essential3 {
				height: 20rem;
				width: 100%;
			}

			&_essential0 {
				margin-bottom: 0.8rem;
			}

			&_relative {
				position: relative;
			}
		}
	}
</style>
