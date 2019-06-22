<template>
	<transition enter-active-class="animated bounceIn" leave-active-class="animated fadeOutDownBig">
		<div class="p_common animated bounceIn" id="target">
			<div class="p_common_0" v-for="(itembox,index) in list" :key="index">
				<el-row>
					<el-col :span="4" class="p_common_1">{{itembox.title}}</el-col>
				</el-row>
				<el-row class="p_common_box">
					<el-col :span="24" class="p_common_2 img4" v-for="(item,index) in itembox.listImg" :key="index">
						<div class="p_common_2_box" @click="handlejump(index,item.img,item.title2)">
							<img class="p_common_2_box_img" :src="item.img" alt="">
							<div class="p_common_2_box_font">{{item.title2}}</div>
						</div>
					</el-col>
				</el-row>
			</div>
		</div>
	</transition>
</template>

<script>
	export default {
		name: 'common',

		mixins: [],

		components: {

		},

		props: {},

		data() {
			return {
				list: [],
				listImgBox4: [{
						title: '常规产品',
						listImg: [{
								title2: '12oz 烫金品牌黑色马克杯',
								img: 'https://www.starbucks.com.cn/images/products/12oz-black-bronze-brand-handle-mug.jpg'
							},
							{
								title2: '12oz 烫金品牌黑色马克杯',
								img: 'https://www.starbucks.com.cn/images/products/12oz-true-essence-stainless-steel-bottle.jpg'
							},
							{
								title2: '12oz 烫金品牌黑色马克杯',
								img: 'https://www.starbucks.com.cn/images/products/16oz-black-gilded-brand-mug.jpg'
							},
							{
								title2: '12oz 烫金品牌黑色马克杯',
								img: 'https://www.starbucks.com.cn/images/products/3oz-white-gilded-brand-mug.jpg'
							}
						]
					},
					{
						title: '常规产品',
						listImg: [{
								title2: '12oz 烫金品牌黑色马克杯',
								img: 'https://www.starbucks.com.cn/images/products/12oz-black-bronze-brand-handle-mug.jpg'
							},
							{
								title2: '12oz 烫金品牌黑色马克杯',
								img: 'https://www.starbucks.com.cn/images/products/12oz-true-essence-stainless-steel-bottle.jpg'
							},
							{
								title2: '12oz 烫金品牌黑色马克杯',
								img: 'https://www.starbucks.com.cn/images/products/16oz-black-gilded-brand-mug.jpg'
							},
							{
								title2: '12oz 烫金品牌黑色马克杯',
								img: 'https://www.starbucks.com.cn/images/products/3oz-white-gilded-brand-mug.jpg'
							}
						]
					},
					{
						title: '常规产品',
						listImg: [{
								title2: '12oz 烫金品牌黑色马克杯',
								img: 'https://www.starbucks.com.cn/images/products/12oz-black-bronze-brand-handle-mug.jpg'
							},
							{
								title2: '12oz 烫金品牌黑色马克杯',
								img: 'https://www.starbucks.com.cn/images/products/12oz-true-essence-stainless-steel-bottle.jpg'
							},
							{
								title2: '12oz 烫金品牌黑色马克杯',
								img: 'https://www.starbucks.com.cn/images/products/16oz-black-gilded-brand-mug.jpg'
							},
							{
								title2: '12oz 烫金品牌黑色马克杯',
								img: 'https://www.starbucks.com.cn/images/products/3oz-white-gilded-brand-mug.jpg'
							}
						]
					},
					{
						title: '常规产品',
						listImg: [{
								title2: '12oz 烫金品牌黑色马克杯',
								img: 'https://www.starbucks.com.cn/images/products/12oz-black-bronze-brand-handle-mug.jpg'
							},
							{
								title2: '12oz 烫金品牌黑色马克杯',
								img: 'https://www.starbucks.com.cn/images/products/12oz-true-essence-stainless-steel-bottle.jpg'
							},
							{
								title2: '12oz 烫金品牌黑色马克杯',
								img: 'https://www.starbucks.com.cn/images/products/16oz-black-gilded-brand-mug.jpg'
							},
							{
								title2: '12oz 烫金品牌黑色马克杯',
								img: 'https://www.starbucks.com.cn/images/products/3oz-white-gilded-brand-mug.jpg'
							}
						]
					},
				],
				listImgBox3: [{
						title: '中度烘焙',
						listImg: [{
								title2: '星巴克®凤舞祥云综合咖啡豆',
								img: 'https://www.starbucks.com.cn/images/breakfast-blend-coffee-beans.png'
							},
							{
								title2: '星巴克®凤舞祥云综合咖啡豆',
								img: 'https://www.starbucks.com.cn/images/italian-roast-coffee-beans.png'
							},
							{
								title2: '星巴克®凤舞祥云综合咖啡豆',
								img: 'https://www.starbucks.com.cn/images/kenya-coffee-beans.png'
							},
							{
								title2: '星巴克®凤舞祥云综合咖啡豆',
								img: 'https://www.starbucks.com.cn/images/komodo-dragon-blend-coffee-beans.png'
							}
						]
					},
					{
						title: '中度烘焙',
						listImg: [{
								title2: '星巴克®凤舞祥云综合咖啡豆',
								img: 'https://www.starbucks.com.cn/images/breakfast-blend-coffee-beans.png'
							},
							{
								title2: '星巴克®凤舞祥云综合咖啡豆',
								img: 'https://www.starbucks.com.cn/images/italian-roast-coffee-beans.png'
							},
							{
								title2: '星巴克®凤舞祥云综合咖啡豆',
								img: 'https://www.starbucks.com.cn/images/kenya-coffee-beans.png'
							},
							{
								title2: '星巴克®凤舞祥云综合咖啡豆',
								img: 'https://www.starbucks.com.cn/images/komodo-dragon-blend-coffee-beans.png'
							}
						]
					},
					{
						title: '中度烘焙',
						listImg: [{
								title2: '星巴克®凤舞祥云综合咖啡豆',
								img: 'https://www.starbucks.com.cn/images/breakfast-blend-coffee-beans.png'
							},
							{
								title2: '星巴克®凤舞祥云综合咖啡豆',
								img: 'https://www.starbucks.com.cn/images/italian-roast-coffee-beans.png'
							},
							{
								title2: '星巴克®凤舞祥云综合咖啡豆',
								img: 'https://www.starbucks.com.cn/images/kenya-coffee-beans.png'
							},
							{
								title2: '星巴克®凤舞祥云综合咖啡豆',
								img: 'https://www.starbucks.com.cn/images/komodo-dragon-blend-coffee-beans.png'
							}
						]
					},
					{
						title: '中度烘焙',
						listImg: [{
								title2: '星巴克®凤舞祥云综合咖啡豆',
								img: 'https://www.starbucks.com.cn/images/breakfast-blend-coffee-beans.png'
							},
							{
								title2: '星巴克®凤舞祥云综合咖啡豆',
								img: 'https://www.starbucks.com.cn/images/italian-roast-coffee-beans.png'
							},
							{
								title2: '星巴克®凤舞祥云综合咖啡豆',
								img: 'https://www.starbucks.com.cn/images/kenya-coffee-beans.png'
							},
							{
								title2: '星巴克®凤舞祥云综合咖啡豆',
								img: 'https://www.starbucks.com.cn/images/komodo-dragon-blend-coffee-beans.png'
							}
						]
					},
				],
				listImgBox2: [{
						title: '烘焙',
						listImg: [{
								title2: '美式松饼',
								img: 'https://www.starbucks.com.cn/images/products/beef-baguette.jpg'
							},
							{
								title2: '美式松饼',
								img: 'https://www.starbucks.com.cn/images/products/avocado-and-chicken-bagel.jpg'
							},
							{
								title2: '美式松饼',
								img: 'https://www.starbucks.com.cn/images/products/bacon-and-egg-wrap.jpg'
							},
							{
								title2: '美式松饼',
								img: 'https://www.starbucks.com.cn/images/products/blueberry-muffin.jpg'
							}
						]
					},
					{
						title: '烘焙',
						listImg: [{
								title2: '美式松饼',
								img: 'https://www.starbucks.com.cn/images/products/beef-baguette.jpg'
							},
							{
								title2: '美式松饼',
								img: 'https://www.starbucks.com.cn/images/products/avocado-and-chicken-bagel.jpg'
							},
							{
								title2: '美式松饼',
								img: 'https://www.starbucks.com.cn/images/products/bacon-and-egg-wrap.jpg'
							},
							{
								title2: '美式松饼',
								img: 'https://www.starbucks.com.cn/images/products/blueberry-muffin.jpg'
							}
						]
					},
					{
						title: '烘焙',
						listImg: [{
								title2: '美式松饼',
								img: 'https://www.starbucks.com.cn/images/products/beef-baguette.jpg'
							},
							{
								title2: '美式松饼',
								img: 'https://www.starbucks.com.cn/images/products/avocado-and-chicken-bagel.jpg'
							},
							{
								title2: '美式松饼',
								img: 'https://www.starbucks.com.cn/images/products/bacon-and-egg-wrap.jpg'
							},
							{
								title2: '美式松饼',
								img: 'https://www.starbucks.com.cn/images/products/blueberry-muffin.jpg'
							}
						]
					},
					{
						title: '烘焙',
						listImg: [{
								title2: '美式松饼',
								img: 'https://www.starbucks.com.cn/images/products/beef-baguette.jpg'
							},
							{
								title2: '美式松饼',
								img: 'https://www.starbucks.com.cn/images/products/avocado-and-chicken-bagel.jpg'
							},
							{
								title2: '美式松饼',
								img: 'https://www.starbucks.com.cn/images/products/bacon-and-egg-wrap.jpg'
							},
							{
								title2: '美式松饼',
								img: 'https://www.starbucks.com.cn/images/products/blueberry-muffin.jpg'
							}
						]
					},

				],
				listImgBox: [{
						title: '咖啡融合冰淇淋',
						listImg: [{
								title2: '阿馥奇朵',
								img: 'https://www.starbucks.com.cn/images/products/caffe-americano.jpg'
							},
							{
								title2: '阿馥奇朵',
								img: 'https://www.starbucks.com.cn/images/products/caramel-espresso-frappuccino.jpg'
							},
							{
								title2: '阿馥奇朵',
								img: 'https://www.starbucks.com.cn/images/products/affogato.jpg'
							},
							{
								title2: '阿馥奇朵',
								img: 'https://www.starbucks.com.cn/images/products/cold-brew-lemon-sour.jpg'
							}
						]
					},
					{
						title: '咖啡融合冰淇淋',
						listImg: [{
								title2: '阿馥奇朵',
								img: 'https://www.starbucks.com.cn/images/products/caffe-americano.jpg'
							},
							{
								title2: '阿馥奇朵',
								img: 'https://www.starbucks.com.cn/images/products/caramel-espresso-frappuccino.jpg'
							},
							{
								title2: '阿馥奇朵',
								img: 'https://www.starbucks.com.cn/images/products/affogato.jpg'
							},
							{
								title2: '阿馥奇朵',
								img: 'https://www.starbucks.com.cn/images/products/cold-brew-lemon-sour.jpg'
							}
						]
					},
					{
						title: '咖啡融合冰淇淋',
						listImg: [{
								title2: '阿馥奇朵',
								img: 'https://www.starbucks.com.cn/images/products/caffe-americano.jpg'
							},
							{
								title2: '阿馥奇朵',
								img: 'https://www.starbucks.com.cn/images/products/caramel-espresso-frappuccino.jpg'
							},
							{
								title2: '阿馥奇朵',
								img: 'https://www.starbucks.com.cn/images/products/affogato.jpg'
							},
							{
								title2: '阿馥奇朵',
								img: 'https://www.starbucks.com.cn/images/products/cold-brew-lemon-sour.jpg'
							}
						]
					},
					{
						title: '咖啡融合冰淇淋',
						listImg: [{
								title2: '阿馥奇朵',
								img: 'https://www.starbucks.com.cn/images/products/caffe-americano.jpg'
							},
							{
								title2: '阿馥奇朵',
								img: 'https://www.starbucks.com.cn/images/products/caramel-espresso-frappuccino.jpg'
							},
							{
								title2: '阿馥奇朵',
								img: 'https://www.starbucks.com.cn/images/products/affogato.jpg'
							},
							{
								title2: '阿馥奇朵',
								img: 'https://www.starbucks.com.cn/images/products/cold-brew-lemon-sour.jpg'
							}
						]
					},

				]
			}
		},

		computed: {

		},
		watch: {
			$route: function(to, from) {
				let _this = this;
				let key = _this.$route.query.keyNum;
				// 2饮料//3美食//4咖啡//商品//1季度
				target.scrollIntoView();
				_this.getlistImg(key);

			}
		},

		created() {
			let _this = this;
			let key = _this.$route.query.keyNum;
			_this.getlistImg(key)
		},


		mounted() {
			// 切换页面时滚动条自动滚动到顶部
			window.scrollTo(0, 0);
		},


		destroyed() {},

		methods: {
			handleClick: function(e) {
				console.log(e)

			},
			handlejump: function(a, b, c) {
				console.log(a)
				let _this = this,
					data = {};
				data.index = '', data.img = b, data.font = c, data = JSON.stringify(data);
				setTimeout(function() {
					_this.$router.push({
						path: '/index/menu/details',
						query: {
							data: data
						}
					})

				}, 100)
			},
			getlistImg: function(key) {
				let _this = this;

				if (key == 2) {
					console.log(key)
					_this.list = _this.listImgBox;
				} else if (key == 3) {
					console.log(key)
					_this.list = _this.listImgBox2;
				} else if (key == 4) {
					_this.list = _this.listImgBox3;
				} else {
					_this.list = _this.listImgBox4;
				}
			}
		}
	};
</script>

<style lang="less">
	// @import './static/css/global.css';
	.p_common {
		width: 100%;
		box-sizing: border-box;
		padding: 30px;
		background: #F7F7F7;

		&_box {
			display: flex;
			justify-content: space-between;
		}

		&_0 {
			border-bottom: 1px solid #D9D9D9;
			padding-bottom: 30px;
			margin-bottom: 30px;
		}

		&_1 {
			color: rgba(0, 0, 0, 0.56);
			font-size: 14px;
			// font-size: 1.4rem;
			font-weight: 700;
		}

		&_2 {
			// display: flex;
			// justify-content: space-around;
			// border: 1px solid red;
			width: 150px;

			&_box {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				margin-top: 30px;

				&_img {
					width: 150px;
					height: 150px;
					border-radius: 50%;
					box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.12);
					margin-bottom: 20px;

				}

				&_font {
					color: rgba(0, 0, 0, 0.87);
					font-size: 16px;
					font-weight: 700;
					// font-size: 1.6rem;
				}
			}

		}
	}
</style>
