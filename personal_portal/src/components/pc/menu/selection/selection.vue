<template>
	<div class="pc_selection animated bounceInLeft">
		<!-- 轮播列表部分 -->
		<el-row class="pc_selection_bottom" v-for="(itemFater, index) in list" :key="index">
			<el-col :span="24" class="pc_selection_1">
				<el-carousel indicator-position="outside">
					<el-carousel-item v-for="(itemSon, index) in itemFater.urls" :key="index" fit="scale-down">
						<el-image :src="itemSon" class="pc_selection_swiper" @click="handleImg"></el-image>
					</el-carousel-item>
				</el-carousel>
			</el-col>
			<el-col :span="24" class="pc_selection_1">
				<div class="pc_selection_auto">
					{{itemFater.describeTitle}}
				</div>
			</el-col>
			<el-col :span="24" class="pc_selection_1">
				<div class="pc_selection_length">
					{{itemFater.describe}}
				</div>
			</el-col>

		</el-row>
		<!-- 轮播列表部分 -->
		<el-row>
			<el-col :span="24" id='postion'>
				<template>
					<router-view />
				</template>
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
				//轮播图
				list: [{
					describeTitle: '玩味冰调™ 夏天自造',
					describe: "窗外蝉鸣声响起，那是夏天又来到的信号。这次，我们将用玩味冰调™致敬夏天，用焕然一新的沁爽活力，赶走夏日的沉闷，自在享受夏日时光。富于层次感的口感，带来不一样的味蕾体验。零脂、真材实料、不添加化学合成色素和甜味剂，让这一杯带你轻盈一“夏”",
					urls: [
						'https://www.starbucks.com.cn/assets/images/featured/2019summer/banner-1.jpg',
						'https://www.starbucks.com.cn/assets/images/featured/2019summer/banner-2.jpg',
						'https://www.starbucks.com.cn/assets/images/featured/2019summer/banner-3.jpg'
					],
				}, {
					describeTitle: '一口轻盈 清爽一夏',
					describe: "从玩味冰杯设计中精心挑选出三款设计作为星礼卡卡面设计，每款搭配上不同形象的卡套挂件，同时背面可自由DIY你的活力与张扬，让这个夏天充满新奇与乐趣。",
					urls: [
						'https://www.starbucks.com.cn/assets/images/featured/2019summer/banner-4.jpg',
						'https://www.starbucks.com.cn/assets/images/featured/2019summer/banner-5.jpg'
					],
				}, {
					describeTitle: '星巴克玩味冰调™，开启轻盈一夏',
					describe: "这一季，我们带着探索与发现的好奇心，来一场视觉与味觉的双重碰撞。玩味冰调作为今夏全新的产品品类登场，以鸡尾酒为灵感，突破茶与咖啡的传统定义，精心调制出富于层次感的全新饮品。零脂、真材实料、不添加化学合成色素和甜味剂，满足身为潮人的你，对“美味”和“零负担”的双重标准。",
					urls: [
						'https://www.starbucks.com.cn/assets/images/featured/2019summer/banner-6.jpg'
					],
				},
				{
					describeTitle: '星巴克玩味冰调™，开启轻盈一夏',
					describe: "这一季，我们带着探索与发现的好奇心，来一场视觉与味觉的双重碰撞。玩味冰调作为今夏全新的产品品类登场，以鸡尾酒为灵感，突破茶与咖啡的传统定义，精心调制出富于层次感的全新饮品。零脂、真材实料、不添加化学合成色素和甜味剂，满足身为潮人的你，对“美味”和“零负担”的双重标准。",
					urls: [
						'https://www.starbucks.com.cn/assets/images/featured/2019summer/banner-3.jpg'
					],
				}
				]


			}
		},

		computed: {

		},

		watch: {},

		created() {

		},

		mounted() {
			window.scrollTo(0, 0);
		},

		destroyed() {

		},


		methods: {
			handleImg: function(e) {
				document.getElementById("postion").scrollIntoView();
			},
		}
	};
</script>

<style scoped lang="less">
	.dis_center {
		display: flex;
		justify-content: center;
		align-items: center
	}

	.margin_auto {
		margin: auto
	}

	.pc_selection {
		&_auto {
			.dis_center();
			margin: 30px 0;
			font-weight: bold;
			font-size: 18px;
		}

		&_length {
			width: 50%;
			.margin_auto();
		}

		&_bottom {
			margin-bottom: 80px
		}

		&_swiper {
			width: 100%;
			height: 100%;
			cursor: pointer;
		}
	}

	// @import './static/css/global.css';
</style>
