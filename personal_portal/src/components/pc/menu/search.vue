<template>
	<transition enter-active-class="animated rotateIn" leave-active-class="animated bounceOutUp">
		<div class="p_search animated rotateIn">
			<!-- 关闭按钮 -->
			<div class="p_search_box">
				<i class="el-icon-close p_search_box_close" @click="handleClose"></i>
			</div>
			<!-- 搜索部分 -->
			<div class="p_search_sou">
				<el-row class="p_search_sou_line">
					<el-col :span="24" class="flex">
						<el-input v-model="input" placeholder="搜索菜单" class="p_search_sou_none" maxlength='20'></el-input>
						<el-button type="primary" icon="el-icon-search" class="p_search_sou_color" @click="handleSearch">搜索</el-button>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="4" class="p_search_sou_all">
						大家都在搜
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="6" class="p_search_sou_span flex_f animated bounceIn" v-for="(item,index) in imageList" :key='index'>
						<div @click="handleAll(index,item.src,item.font)" class="img4 flex_c">
							<el-image :src="item.src" class="p_search_sou_span_img"></el-image>
							<div class="p_search_sou_span_font">{{item.font}}</div>
						</div>
					</el-col>
				</el-row>
			</div>

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
				input: '',
				imageList: [{
					src: "https://www.starbucks.com.cn/images/products/cinnamon-swirl.jpg",
					font: '焦糖玛奇朵(热/冷)'
				}, {
					src: "https://www.starbucks.com.cn/images/products/american-style-pancakes.jpg",
					font: '星巴克®早餐综合咖啡豆'
				}, {
					src: "https://www.starbucks.com.cn/images/products/bacon-and-egg-wrap.jpg",
					font: '星巴克®首选咖啡豆'
				}, {
					src: "https://www.starbucks.com.cn/images/products/cinnamon-swirl.jpg",
					font: '星巴克®肯亚咖啡豆'
				}],
			}
		},

		computed: {},

		watch: {
			$route: function(to, from) {

			},
				
			input:function(e){
				console.log(e)
				let _this = this;
				_this.input = e;
				// console.log(_this.input)
				// if(_this.input==""){
				// 	 _this.$message('请输入内容');
				// }else{
				// 	// _this
				// }
			}
		},

		created() {},

		mounted() {},

		destroyed() {},

		methods: {
			handleClick: function(e) {
				console.log(e)

			},
			handleSearch:function(){
				let _this = this;
				if(_this.input==''){
					 _this.$message('请输入内容');
				}else{
					let a ='';
					let b = '';
					let c = _this.input;
					_this.handleAll(a,b,c)
				}
				console.log(_this.input)
			},
			handleAll: function(index, img, font) {
				let _this = this,
					data = {};
				data.index = index;
				data.img = img;
				data.font = font;
				data = JSON.stringify(data);
				setTimeout(function() {
					_this.$router.push({
						path: '/index/menu/details',
						query: {
							data: data
						}
					})

				}, 100)
			},
			handleClose: function() {
				let _this = this;
				setTimeout(function() {
					_this.$router.go(-1); //返回上一层
				}, 100)
			}
		}
	};
</script>

<style lang="less">
	// @import './static/css/global.css';
	.p_search {
		&_box {
			width: 100%;
			display: flex;
			justify-content: flex-end;

			&_close {
				font-size: 30px;
				cursor: pointer;
			}
		}

		&_sou {
			width: 70%;
			margin: auto;
			margin-top: 10%;

			&_none {
				input {
					border: none;
					padding-left: 0px;
				}
			}

			&_line {
				border-bottom: 1px solid #1C9B6C;
			}

			&_color {
				background: transparent;
				border: none;
				color: #1C9B6C
			}

			&_all {
				display: inline-block;
				padding: 2px 12px;
				background: #00A862;
				font-size: 14px;
				color: #FFF;
				margin-top: 20px;
			}



			&_span {
				margin-top: 30px;

				&_img {
					width: 86px;
					height: 86px;
					border-radius: 50%;

				}

				&_font {
					font-size: 16px;
					color: #303133;
					font-weight: bold;
					width: 86px;
					margin-top: 10px;
				}
			}
		}
	}
</style>
