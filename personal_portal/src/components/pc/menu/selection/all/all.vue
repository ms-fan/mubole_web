<template>
	<div class="pc_all animated bounceInLeft">
		<el-row>
			<el-col :span="24" class="pc_all_font">
				<div>
					所有新品
				</div>
			</el-col>
		</el-row>
		<el-row class="pc_all_w">
			<el-col :span="8" v-for="(itme,index) in listAll" :key='index'>
				<div class="pc_all_box img4" @click="handleClick(index,itme.img,itme.font)">
					<el-image :src="itme.img" class="pc_all_box_img"></el-image>
					<div class="pc_all_box_font">{{itme.font}}</div>
				</div>
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
				listAll: [{
						img: 'https://www.starbucks.com.cn/assets/images/featured/2019summer/wb4.jpg',
						font: '蓝莓星空'
					}, {
						img: 'https://www.starbucks.com.cn/assets/images/featured/2019summer/mer-12.jpg',
						font: '橘香茉吉托'
					}, {
						img: 'https://www.starbucks.com.cn/assets/images/featured/2019summer/mer-18.jpg',
						font: '酸柠浮冷萃'
					},
					{
						img: 'https://www.starbucks.com.cn/assets/images/featured/2019summer/wb4.jpg',
						font: '蓝莓星空'
					}, {
						img: 'https://www.starbucks.com.cn/assets/images/featured/2019summer/mer-12.jpg',
						font: '橘香茉吉托'
					}, {
						img: 'https://www.starbucks.com.cn/assets/images/featured/2019summer/mer-18.jpg',
						font: '酸柠浮冷萃'
					}, {
						img: 'https://www.starbucks.com.cn/assets/images/featured/2019summer/wb4.jpg',
						font: '蓝莓星空'
					}, {
						img: 'https://www.starbucks.com.cn/assets/images/featured/2019summer/mer-12.jpg',
						font: '橘香茉吉托'
					}, {
						img: 'https://www.starbucks.com.cn/assets/images/featured/2019summer/mer-18.jpg',
						font: '酸柠浮冷萃'
					}, {
						img: 'https://www.starbucks.com.cn/assets/images/featured/2019summer/wb4.jpg',
						font: '蓝莓星空'
					}, {
						img: 'https://www.starbucks.com.cn/assets/images/featured/2019summer/mer-12.jpg',
						font: '橘香茉吉托'
					}, {
						img: 'https://www.starbucks.com.cn/assets/images/featured/2019summer/mer-18.jpg',
						font: '酸柠浮冷萃'
					}, {
						img: 'https://www.starbucks.com.cn/assets/images/featured/2019summer/wb4.jpg',
						font: '蓝莓星空'
					}, {
						img: 'https://www.starbucks.com.cn/assets/images/featured/2019summer/mer-12.jpg',
						font: '橘香茉吉托'
					}, {
						img: 'https://www.starbucks.com.cn/assets/images/featured/2019summer/mer-18.jpg',
						font: '酸柠浮冷萃'
					}, {
						img: 'https://www.starbucks.com.cn/assets/images/featured/2019summer/wb4.jpg',
						font: '蓝莓星空'
					}, {
						img: 'https://www.starbucks.com.cn/assets/images/featured/2019summer/mer-12.jpg',
						font: '橘香茉吉托'
					}, {
						img: 'https://www.starbucks.com.cn/assets/images/featured/2019summer/mer-18.jpg',
						font: '酸柠浮冷萃'
					},
				]
			}
		},

		computed: {

		},

		watch: {},

		created() {

		},

		mounted() {},

		destroyed() {

		},


		methods: {
			handleClick: function(a, b, c) {
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
		}
	};
</script>

<style scoped lang="less">
	.font {
		font-weight: bold;
		font-size: 18px;
	}

	.dis_center {
		display: flex;
		justify-content: center;
		align-items: center
	}

	.dis_center_x {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center
	}

	.margin_auto {
		margin: auto
	}

	.flex_wrap {
		flex-wrap: wrap;
	}

	.pc_all {
		background: #F7F7F7;
		box-sizing: border-box;
		padding: 30px 10%;

		&_font {
			.dis_center();
			.font();
			margin-bottom: 30px;
		}

		&_w {
			.flex_wrap();
		}

		&_box {
			width: 80%;
			.margin_auto();
			.dis_center_x();

			&_img {
				width: 100%;
				height: 205px;

			}

			&_font {
				margin-top: 20px;
				margin-bottom: 20px;
				.flex_wrap();
			}
		}
	}

	// @import './static/css/global.css';
</style>
