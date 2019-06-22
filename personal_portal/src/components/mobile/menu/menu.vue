<template>
	<transition name="fade" enter-active-class="animated fadeIn" leave-active-class="animated fadeOutRightBig">
		<div class="m_menu animated fadeInLeft" id='sign'>
			<!-- <div class="m_menu_search" @click="handleSearch">搜索</div> -->
			<!-- 头部title部分 -->
			<van-row class="m_menu_title">
				<van-col span="24" class='m_menu_title_font'>菜单</van-col>
			</van-row>
			<van-row>
				<van-col span="24">
					<van-tabs v-model="active" title-active-color="#00A862" :swipeable="true" :swipe-threshold='5' :animated='true'
					 :border='false'>
						<van-tab title="精选">
							<van-row v-for="(imageUp, index) in imagelist" :key="index">
								<van-col span="24">
									<van-swipe :autoplay="3000" indicator-color="#00A862" :show-indicators="isShow">
										<van-swipe-item v-for="(imageDown, index) in imageUp.images" :key="index">
											<van-image class="m_menu_title_img" fit="cover" lazy-load :src="imageDown" @click="handleClick" />
										</van-swipe-item>
									</van-swipe>
								</van-col>
								<van-col span="24" class="m_menu_title_des1">
									<h2>{{imageUp.title}}</h2>
								</van-col>
								<van-col span="24" class="m_menu_title_des2">
									<p>
										{{imageUp.des}}
									</p>
								</van-col>
							</van-row>
							<van-row class="m_menu_all" id="flag">
								<van-col span="24" class="m_menu_all_title">
									<h2>
										所有新品
									</h2>
								</van-col>
								<van-col span="24" class="m_menu_all_commodity">
									<div class="m_menu_all_commodity_box" v-for="(item,index) in imgAll" :key="index" @click="handleDetails(item.img,item.font)">
										<van-image class="m_menu_all_commodity_box_img" fit="cover" lazy-load :src="item.img" />
										<div class="m_menu_all_commodity_box_font van-ellipsis">{{item.font}}</div>
									</div>
								</van-col>
							</van-row>
						</van-tab>
						<van-tab title="饮料">
							<van-row class="m_menu_type">

								<van-col span="24" v-for="(itemFater,index) in listImgBox" :key="index">
									<div class="m_menu_type_title">{{itemFater.title}}</div>
									<van-row class="m_menu_type_1">

										<van-col span="12" class="m_menu_type_1_box" v-for="(itemSon,index) in itemFater.listImg" :key="index">
											<!-- <div class="m_menu_type_1_box_img"></div> -->
											<van-image class="m_menu_type_1_box_img" fit="cover" lazy-load :src="itemSon.img" @click="handleDetailsTow(itemSon.img,itemSon.title2)" />
											<div class="m_menu_type_1_box_font">{{itemSon.title2}}</div>
										</van-col>

									</van-row>
								</van-col>

							</van-row>
						</van-tab>
						<van-tab title="美食">
							<van-row class="m_menu_type">
								<van-col span="24" v-for="(itemFater,index) in listImgBox2" :key="index">
									<div class="m_menu_type_title">{{itemFater.title}}</div>
									<van-row class="m_menu_type_1">
										<van-col span="12" class="m_menu_type_1_box" v-for="(itemSon,index) in itemFater.listImg" :key="index">
											<!-- <div class="m_menu_type_1_box_img"></div> -->
											<van-image class="m_menu_type_1_box_img" fit="cover" lazy-load :src="itemSon.img" @click="handleDetailsTow(itemSon.img,itemSon.title2)" />
											<div class="m_menu_type_1_box_font">{{itemSon.title2}}</div>
										</van-col>
									</van-row>
								</van-col>
							</van-row>
						</van-tab>
						<van-tab title="咖啡">
							<van-row class="m_menu_type">
								<van-col span="24" v-for="(itemFater,index) in listImgBox3" :key="index">
									<div class="m_menu_type_title">{{itemFater.title}}</div>
									<van-row class="m_menu_type_1">
										<van-col span="12" class="m_menu_type_1_box" v-for="(itemSon,index) in itemFater.listImg" :key="index">
											<!-- <div class="m_menu_type_1_box_img"></div> -->
											<van-image class="m_menu_type_1_box_img" fit="cover" lazy-load :src="itemSon.img" @click="handleDetailsTow(itemSon.img,itemSon.title2)" />
											<div class="m_menu_type_1_box_font">{{itemSon.title2}}</div>
										</van-col>
									</van-row>
								</van-col>
							</van-row>
						</van-tab>
						<van-tab title="商品">
							<van-row class="m_menu_type">
								<van-col span="24" v-for="(itemFater,index) in listImgBox4" :key="index">
									<div class="m_menu_type_title">{{itemFater.title}}</div>
									<van-row class="m_menu_type_1">
										<van-col span="12" class="m_menu_type_1_box" v-for="(itemSon,index) in itemFater.listImg" :key="index">
											<van-image class="m_menu_type_1_box_img" fit="cover" lazy-load :src="itemSon.img" @click="handleDetailsTow(itemSon.img,itemSon.title2)" />
											<div class="m_menu_type_1_box_font">{{itemSon.title2}}</div>
										</van-col>
									</van-row>
								</van-col>
							</van-row>
						</van-tab>
					</van-tabs>
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
		Tab,
		Tabs,
		Collapse,
		CollapseItem,
		Image,
		Icon,
	} from 'vant';
	export default {
		name: '',

		mixins: [],

		components: {
			[Swipe.name]: Swipe,
			[SwipeItem.name]: SwipeItem,
			[Row.name]: Row,
			[Col.name]: Col,
			[Tab.name]: Tab,
			[Tabs.name]: Tabs,
			[Collapse.name]: Collapse,
			[CollapseItem.name]: CollapseItem,
			[Image.name]: Image,
			[Icon.name]: Icon,
		},

		props: {},

		data() {
			return {
				active: 0,
				isShow: true,
				imgAll: [{
						img: 'https://www.starbucks.com.cn/assets/images/featured/2019summer/blueberry-passion-pearl-fizz.jpg',
						font: '蓝莓星空',
					},
					{
						img: 'https://www.starbucks.com.cn/assets/images/featured/2019summer/citrus-mint-mojito.jpg',
						font: '橘香茉吉托',
					},
					{
						img: 'https://www.starbucks.com.cn/assets/images/featured/2019summer/cold-brew-lemon-sour.jpg',
						font: '酸柠浮冷萃',
					},
					{
						img: 'https://www.starbucks.com.cn/assets/images/featured/2019summer/peach-shrub-fizz.jpg',
						font: '醋意桃桃',
					},
				],
				imagelist: [{
						des: '星轻盈系列，蛋糕也可以清爽一夏无负担。采用风味酸奶为原料，搭配大颗真实果粒，清新轻甜，满足想吃甜点的小心思。',
						title: '一口轻盈 清爽一夏',
						images: [
							'https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg',
							'https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg'
						],
					},
					{
						des: '星轻盈系列，蛋糕也可以清爽一夏无负担。采用风味酸奶为原料，搭配大颗真实果粒，清新轻甜，满足想吃甜点的小心思。',
						title: '一口轻盈 清爽一夏',
						images: [
							'https://www.starbucks.com.cn/assets/images/featured/2019summer/banner-1-mobile.jpg',
						],
					},
					{
						des: '星轻盈系列，蛋糕也可以清爽一夏无负担。采用风味酸奶为原料，搭配大颗真实果粒，清新轻甜，满足想吃甜点的小心思。',
						title: '一口轻盈 清爽一夏',
						images: [
							'https://www.starbucks.com.cn/assets/images/featured/2019summer/banner-2-mobile.jpg',
							'https://www.starbucks.com.cn/assets/images/featured/2019summer/banner-3-mobile.jpg'
						],
					},
					{
						des: '星轻盈系列，蛋糕也可以清爽一夏无负担。采用风味酸奶为原料，搭配大颗真实果粒，清新轻甜，满足想吃甜点的小心思。',
						title: '一口轻盈 清爽一夏',
						images: [
							'https://www.starbucks.com.cn/assets/images/featured/2019summer/banner-4-mobile.jpg',
							'https://www.starbucks.com.cn/assets/images/featured/2019summer/banner-6-mobile.jpg'
						],
					},
				],
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

				],
			}
		},

		computed: {},

		watch: {
			'$route'(to, from) {
			
			},
			active: function(a) {
				console.log(a)
				this.active = a
				// localStorage.setItem('ative', a);
			
			}
		},

		created() {
			let _this = this;
			let active = _this.$route.query.active;
			_this.active = active||0

		},

		mounted() {},

		destroyed() {},

		methods: {
		
			handleClick: function(e) {
				console.log(e)
				document.getElementById("flag").scrollIntoView();
			},
			handleDetailsTow: function(a, b) {
				console.log(a)
				this.handleDetails(a, b)
			},
			handleDetails: function(a, b) {
				let _this = this,
					data = {};
				data.img = a, data.font = b, data = JSON.stringify(data);
				console.log(data);
				console.log(_this.active)
				setTimeout(function() {
					_this.$router.push({
						path: '/details',
						query: {
							data: data,
							active:_this.active
						}
					})

				}, 100)
			},
			handleSearch: function() {

			}
		}
	};
</script>

<style lang="less">
	// cursor:pointer;
	.m_menu {
		width: 100%;
		box-sizing: border-box;
		padding-bottom: 50px;

		.van-ellipsis {
			font-weight: bold;
		}

		.van-tabs__line {
			background-color: #00A862
		}

		&_type {
			padding: 0.8rem 0;
			width: 100%;
			box-sizing: border-box;
			background: #F7F7F7;
			border-top: 1px solid #EBEBEB;

			&_title {
				margin-left: 3%;
				margin-bottom: 10px;
				width: 100%;
				box-sizing: border-box;
				color: rgba(0, 0, 0, 0.56);
			}

			&_1 {
				display: flex;
				flex-wrap: wrap;

				// justify-content: space-between;
				&_box {
					display: flex;
					flex-direction: column;
					align-items: center;

					// justify-content: center;
					&_img {
						width: 88%;
						height: 140px;
					}

					&_font {
						width: 100%;
						text-align: center;
						padding: 10px 0;
						font-weight: bold;
						font-size: 16px;
					}

				}
			}
		}

		&_search {
			position: fixed;
			top: 18%;
			right: 10px;
			z-index: 10;
			padding: 5px 10px;
			background: #00A862;
			border-color: #00A862;
			color: #FFF;
			border-radius: 10px;
			-webkit-box-sizing: border-box;
			box-sizing: border-box;
			box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.38);
		}

		&_all {
			background: #F7F7F7;
			padding: 0.8rem;
			width: 100%;
			box-sizing: border-box;

			&_title {
				display: flex;
				justify-content: center;
			}

			&_commodity {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;

				&_box {
					display: flex;
					flex-direction: column;
					align-items: center;
					padding-bottom: 15px;
					width: 12rem;

					&_img {
						width: 12rem;
						height: 10rem;
					}

					&_font {
						font-size: 16px;
						width: 12rem;
						margin-top: 10px;
						text-align: center
					}
				}
			}
		}

		&_title {
			padding: 0.8rem;
			padding-bottom: 0;

			&_font {
				font-size: 1.8rem;
				font-weight: bold;
			}

			&_des1 {
				display: flex;
				justify-content: center;
			}

			&_des2 {
				display: flex;
				justify-content: center;
				padding: 0 0.8rem;
				box-sizing: border-box;
			}

			&_img {
				display: block;
				width: 100%;
				height: 400px;
			}
		}
	}
</style>
