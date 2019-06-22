<template>
	<div class="pc_menu">
		<!-- 按钮部分 -->
		<div v-if='$route.name!="details"'>
			<div :class="isShowDow?'pc_menu_cai':'pc_menu_cai pc_menu_cai_btn'" @click="handleCai" v-if='$route.meta.isCai'>搜索菜单</div>
		</div>
		<div v-else>
			<div class="pc_menu_cai" @click="handlePhone" v-if='$route.meta.isCai'><i class="el-icon-phone"></i>:7892372</div>
		</div>
		<!-- 	<div :class="isShowDow?'pc_menu_cai':'pc_menu_cai pc_menu_cai_btn'" @click="handleCai" v-if='$route.meta.isCai'>搜索菜单</div> -->
		<!-- 主题部分 -->
		<transition name="custom-classes-transition" enter-active-class="animated bounceInLeft" leave-active-class="animated zoomOut">
			<el-row class='animated bounceInLeft'>
				<template>
					<router-view />
				</template>
			</el-row>
		</transition>

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
				isShowDow: true,
			}
		},

		computed: {},

		watch: {
			$route: function(to, from) {
				// console.log(to)
				this.isShowDow = true
			}
		},

		created() {
			// console.log(activeName)
		},

		mounted() {},

		destroyed() {},

		methods: {
			handleCai: function() {
				let _this = this;
				_this.isShowDow = false;
				setTimeout(function() {
					_this.$router.push({
						path: "/index/menu/search"
					});
				}, 100)

			},
			handlePhone:function(){
				let _this = this;
				_this.isShowDow = false;
				
			}
		}
	};
</script>

<style lang="less">
	.font3 {
		font-weight: bold !important;
		font-size: 16px !important;
	}

	.translate {
		transform: translateY(5px);
		-webkit-transform: translateY(5px);
		/*兼容-webkit-引擎浏览器*/
		-moz-transform: translateY(5px);
	}

	.pc_menu {
		position: relative;
		border: 1px solid transparent;

		&_cai {
			position: fixed;
			top: 82%;
			right: 3em;
			z-index: 10;
			padding: 12px 24px;
			background: #00A862;
			border-color: #00A862;
			color: #FFF;
			border-radius: 48px;
			-webkit-box-sizing: border-box;
			box-sizing: border-box;
			cursor: pointer;
			box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.38);
			.font3();
		}

		&_cai_btn {
			box-shadow: none;
			.translate();
		}
	}
</style>
