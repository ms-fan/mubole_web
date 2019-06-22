<template>
	<transition name="fade" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutRightBig">
		<div class="m_details" id="flagTow">
			<div class="m_details_phone" @click="handlePhone">
				<van-icon name="phone" />:7892372</div>
			<van-row>
				<van-col span="24" class='m_details_img'>
					<van-image class="m_details_img_1" fit="cover" lazy-load :src="dataList.img" @click="handleBig(dataList.img)" />
					<div class="m_details_img_2" @click="handleBack">
						<van-icon name="arrow-left" />
					</div>
				</van-col>
			</van-row>
			<van-row class="m_details_font">
				<van-col span="24" class="m_details_font_1">
					中度烘焙
				</van-col>
				<van-col span="24">
					<h1>{{dataList.font}}</h1>
				</van-col>
				<van-col span="24" class="m_details_font_2">
					一款非常平衡的咖啡，带有坚果和可可般的香味，由优质的拉丁美洲咖啡豆混合而成，我们一开始就为咖啡爱好者提供这款具有代表性的综合咖啡。
				</van-col>
			</van-row>
			<van-row class='m_details_cai'>
				<van-col span="24" class='m_details_cai_1'>
					猜我喜欢
				</van-col>
				<van-col span="24">
					<van-swipe :autoplay="4000" :show-indicators='false'>
						<van-swipe-item v-for="(imageUp, index) in imgList" :key="index">
							<div class="m_details_cai_2">
								<div class="m_details_cai_2_img" v-for="(imageDown, index) in imageUp.img" :key="index" @click="handleImg(imageDown.i,imageDown.font)">
									<van-image class="m_details_cai_2_img_1" :src="imageDown.i" fit="cover" lazy-load />
									<div class="m_details_cai_2_img_2">{{imageDown.font}}</div>
								</div>
							</div>
						</van-swipe-item>
					</van-swipe>
				</van-col>
			</van-row>

		</div>
	</transition>
</template>

<script>
	import {
		Swipe,
		SwipeItem,
		Row,
		Col,
		Image,
		Icon,
		ImagePreview,
	} from 'vant';
	export default {
		name: '',

		mixins: [],

		components: {
			[Swipe.name]: Swipe,
			[SwipeItem.name]: SwipeItem,
			[Row.name]: Row,
			[Col.name]: Col,
			[Image.name]: Image,
			[Icon.name]: Icon,
		},

		props: {},

		data() {
			return {
				dataList: {},
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
						}]
					},

				]
			}

		},

		computed: {},

		watch: {
			dataList: function() {
				document.getElementById("flagTow").scrollIntoView();
			}
		},

		created() {
			let _this = this;
			let data = _this.$route.query.data;
			data = JSON.parse(data);
			console.log(data)
			_this.dataList = data;
		},

		mounted() {},

		destroyed() {},

		methods: {
			handleClick: function(e) {
				console.log(e)

			},
			handleBack: function() {
				let _this = this;
				let active = _this.$route.query.active;
				if (active) {
					_this.$router.push({
						path: '/menu',
						query: {
							active: active
						}
					})
				} else {
					setTimeout(function() {
						_this.$router.go(-1); //返回上一层
					}, 100)
				}

			},
			handleImg: function(a, b) {
				console.log(a);
				console.log(b)
				let _this = this,
					data = {};
				data.img = a;
				data.font = b;
				_this.dataList = data;
				document.getElementById("flagTow").scrollIntoView();
			},
			handleBig: function(img) {
				console.log(img);
				ImagePreview([
					img
				]);

			},
			handlePhone: function() {}
		}
	};
</script>

<style lang="less">
	.m_details {

		&_phone {
			position: fixed;
			top: 65%;
			right: 10px;
			z-index: 10;
			padding: 10px;
			background: #00A862;
			border-color: #00A862;
			color: #FFF;
			border-radius: 21px;
			-webkit-box-sizing: border-box;
			box-sizing: border-box;
			box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.38);
		}

		&_cai {
			padding: 0.8rem;
			box-sizing: border-box;
			width: 100%;
			background: #F2F2F2;

			&_1 {
				font-weight: bold;
				font-size: 1.2rem;
			}

			&_2 {
				box-sizing: border-box;
				width: 100%;
				height: 200px;
				display: flex;
				align-items: center;
				justify-content: space-between;

				&_img {
					width: 100px;
					display: flex;
					flex-direction: column;
					align-items: center;

					&_1 {
						width: 100px;
						height: 100px;
						border-radius: 50%;
					}

					&_2 {
						font-size: 14px;
						width: 100px;
						padding: 5px 0;
						text-align: center
					}
				}
			}
		}

		&_font {
			padding: 1.6rem 0.8rem 0.8rem 0.8rem;
			box-sizing: border-box;
			width: 100%;
			background: #FAFAFA;

			&_1 {
				color: #C2A661;
				font-weight: bold;
				font-size: 1.2rem
			}

			&_2 {
				font-size: 1em
			}
		}

		&_img {
			position: relative;
			width: 100%;
			box-sizing: border-box;

			&_1 {
				display: block;
				width: 100%;
				height: 400px;
			}

			&_2 {
				position: absolute;
				top: 5%;
				left: 5%;
				box-sizing: border-box;
				border-radius: 4px;
				background: rgba(255, 255, 255, 0.5);
				height: 28px;
				width: 28px;
				display: flex;
				justify-content: center;
				align-items: center;
				box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.38);

			}

		}
	}
</style>
