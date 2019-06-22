<template>
	<transition name="custom-classes-transition" enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
		<!-- 商品详情 -->
		<div class='p_details animated zoomInRight' id="target">
			<!-- 关闭按钮 -->
			<div class="p_details_box_btn">
				<i class="el-icon-close p_details_box_btn_close" @click="handleClose"></i>
			</div>
			<el-row>
				<el-col :span="12">
					<div>
						<el-image :src='dataList.img' class="p_details_img"></el-image>
					</div>
				</el-col>
				<el-col :span="12" class='p_details_right'>
					<div class='p_details_right_1'>中度烘焙</div>
					<div class='p_details_right_2'>{{dataList.font}}</div>
					<div class='p_details_right_3'>
						一款非常平衡的咖啡，带有坚果和可可般的香味，由优质的拉丁美洲咖啡豆混合而成，我们一开始就为咖啡爱好者提供这款具有代表性的综合咖啡。
					</div>

					<div class="p_details_progress">
						<div style="margin-bottom: 10px;font-weight: bold;">性能占比</div>
						<el-progress :text-inside="true" :stroke-width="14" :percentage="70" class="p_details_progress_1"></el-progress>
						<el-progress :text-inside="true" :stroke-width="14" :percentage="100" class="p_details_progress_1"></el-progress>
						<el-progress :text-inside="true" :stroke-width="14" :percentage="80" class="p_details_progress_1"></el-progress>
					</div>
					<div>
						<el-row>
							<el-col :span="8"></el-col>
							<el-col :span="16"></el-col>
						</el-row>
					</div>
				</el-col>

			</el-row>

			<!-- 产品展示 -->
			<el-row>
				<el-col :span="24">
					<template>
						<div class="block">
							<div class="p_details_demonstration">猜你喜欢</div>
							<el-carousel :autoplay="false">
								<el-carousel-item v-for="(item,index) in imgList" :key="index">
									<div class="p_details_small">
										<div v-for="(itemson,index) in item.img" :key="index" class="p_details_small_box img4" @click="handleDetails(itemson.i,itemson.font)">
											<el-image :src='itemson.i' class="p_details_small_box_img"></el-image>
											<div class="p_details_small_box_font">{{itemson.font}}</div>
										</div>
									</div>
								</el-carousel-item>
							</el-carousel>
						</div>
					</template>
				</el-col>
			</el-row>
		</div>
	</transition>
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
				dataList: {
					img: 'https://www.starbucks.com.cn/images/products/caffe-americano.jpg',
					font: '咖啡'
				},
				imgList: [{
						img: [{
							i: "https://www.starbucks.com.cn/images/products/caffe-americano.jpg",
							font: "拿铁（热/冷）拿铁"
						}, {
							i: 'https://www.starbucks.com.cn/images/products/caffe-mocha.jpg',
							font: "拿铁（热/冷）拿铁"
						}, {
							i: "https://www.starbucks.com.cn/images/products/caramel-macchiato.jpg",
							font: "拿铁（热/冷）拿铁"
						}, {
							i: 'https://www.starbucks.com.cn/images/products/flat-white.jpg',
							font: "拿铁（热/冷）拿铁"
						}]
					},
					{
						img: [{
							i: "https://www.starbucks.com.cn/images/products/caffe-americano.jpg",
							font: "拿铁（热/冷）拿铁"
						}, {
							i: 'https://www.starbucks.com.cn/images/products/caffe-mocha.jpg',
							font: "拿铁（热/冷）拿铁"
						}, {
							i: "https://www.starbucks.com.cn/images/products/caramel-macchiato.jpg",
							font: "拿铁（热/冷）拿铁"
						}, {
							i: 'https://www.starbucks.com.cn/images/products/flat-white.jpg',
							font: "拿铁（热/冷）拿铁"
						}]
					},
					{
						img: [{
							i: "https://www.starbucks.com.cn/images/products/caffe-americano.jpg",
							font: "拿铁（热/冷）拿铁"
						}, {
							i: 'https://www.starbucks.com.cn/images/products/caffe-mocha.jpg',
							font: "拿铁（热/冷）拿铁"
						}, {
							i: "https://www.starbucks.com.cn/images/products/caramel-macchiato.jpg",
							font: "拿铁（热/冷）拿铁"
						}, {
							i: 'https://www.starbucks.com.cn/images/products/flat-white.jpg',
							font: "拿铁（热/冷）拿铁"
						}]
					},
					{
						img: [{
							i: "https://www.starbucks.com.cn/images/products/caffe-americano.jpg",
							font: "拿铁（热/冷）拿铁"
						}, {
							i: 'https://www.starbucks.com.cn/images/products/caffe-mocha.jpg',
							font: "拿铁（热/冷）拿铁"
						}, {
							i: "https://www.starbucks.com.cn/images/products/caramel-macchiato.jpg",
							font: "拿铁（热/冷）拿铁"
						}, {
							i: 'https://www.starbucks.com.cn/images/products/flat-white.jpg',
							font: "拿铁（热/冷）拿铁"
						}]
					}

				]
			}
		},

		computed: {},

		watch: {
			$route: function(to, from) {
				console.log(to)
			},
			dataList: {
				handler(newName, oldName) {
					let  _this = this;
					
				},

			}
			// dataList{
			// 	handler(){
			// 			target.scrollIntoView();
			// 		},
			// }
		},

		created() {
			let _this = this;
			let data = _this.$route.query.data;
			data = JSON.parse(data)
			_this.dataList = data;
			// document.getElementById('target').scrollTop = 0;

		},

		mounted() {
		
		},

		destroyed() {},

		methods: {
			handleClick: function(e) {
				console.log(e)
			},

			handleClose: function() {
				let _this = this;
				setTimeout(function() {
					_this.$router.go(-1); //返回上一层
				}, 100)
			},
			handleDetails: function(a, b) {
				let _this = this;
				let data = {};
				data.img = a;
				data.font = b;
				_this.dataList = data;
				setTimeout(function() {
					target.scrollIntoView();
				}, 100)
			}
		}
	};
</script>

<style lang="less">
	.flex_c2 {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.p_details {
		background: #FAFAFA;
		width: 100%;


		&_box_btn {
			display: flex;
			justify-content: flex-end;

			&_close {
				font-size: 30px;
				cursor: pointer;
				margin-right: 10px;
				margin-top: 10px;
			}
		}

		&_demonstration {
			font-size: 18px;
			font-weight: bold;
			margin-bottom: 30px;
			margin-left: 2.4rem;
		}

		&_small {
			display: flex;
			justify-content: space-around;
			align-items: flex-start;
			padding-top: 20px;

			&_box {
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				align-items: center;

				&_img {
					height: 132px;
					width: 132px;
					border-radius: 50%;
				}

				&_font {
					font-size: 16px;
					color: #303133;
					font-weight: bold;
					margin-top: 10px;
					width: 132px;
					text-align: center;
				}
			}
		}

		&_box {
			width: 132px;
			.flex_c2();
		}

		&_show {
			width: 132px;
			height: 132px;
			border-radius: 50%;
		}

		&_right {
			box-sizing: border-box;
			padding: 4.8em 4.8em 4.8em 2.4em;

			&_1 {
				font-size: 1rem;
				font-weight: 700;
				color: #C2A661;
				margin-bottom: 12px;
				line-height: 160%;
			}

			&_2 {
				font-size: 2rem;
				font-weight: 700;
				line-height: 140%;
				margin-bottom: 12px;
			}

			&_3 {
				word-wrap: break-word;
				word-break: normal;
				line-height: 160%;
				font-size: 1.2rem;
				font-weight: 400;
				letter-spacing: 0.4px;

			}
		}

		&_progress {
			margin-top: 20px;

			&_1 {
				margin-bottom: 20px;
			}
		}

		&_img {
			width: 84%;
			height: 350px;
			padding: 5.6em 2.4em 4em 2.4em;
		}
	}
</style>
