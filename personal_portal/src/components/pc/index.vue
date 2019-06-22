<template>
	<div class="pc_index">
		<el-container>
			<div class="pc_index_logo">
				<img src="../../assets/imgs/logo.jpg" class="pc_index_logo_size" />
			</div>
			<el-aside width="25%">
				<el-tabs v-model="activeName" @tab-click="handleTitle">
					<el-tab-pane label="门店" name="first">
						<el-row class="tac">
							<el-col :span="16">
								<h5 class="pc_index_cai">门店</h5>
							</el-col>
						</el-row>
					</el-tab-pane>
					<el-tab-pane label="我的" name="second">
						<el-row class="tac">
							<el-col :span="16">
								<h5 class="pc_index_cai">我的</h5>
							</el-col>
						</el-row>
					</el-tab-pane>
					<el-tab-pane label="菜单" name="third">
						<el-row class="tac">
							<el-col :span="16">
								<h5 class="pc_index_cai">菜单</h5>
								<el-menu :default-active="active" :unique-opened='true' class="el-menu-vertical-demo" @select="handleSelect"
								 @open="handleOpen" @close="handleClose">
									<el-submenu index="1">
										<template slot="title">
											<span class="pc_index_cai_1">季度精选</span>
										</template>
										<el-menu-item-group>
											<el-menu-item index="1-1" class="pc_index_cai_1">季度精选</el-menu-item>
										</el-menu-item-group>
									</el-submenu>
									<el-submenu index="2">
										<template slot="title">
											<span class="pc_index_cai_1">饮料</span>
										</template>
										<el-menu-item-group>
											<el-menu-item index="2-1" class="pc_index_cai_1">饮料</el-menu-item>
										</el-menu-item-group>

									</el-submenu>
									<el-submenu index="3">
										<template slot="title">
											<span class="pc_index_cai_1">美食</span>
										</template>
										<el-menu-item-group>
											<el-menu-item index="3-1" class="pc_index_cai_1">美食</el-menu-item>
										</el-menu-item-group>

									</el-submenu>
									<el-submenu index="4">
										<template slot="title">
											<span class="pc_index_cai_1">咖啡产品</span>
										</template>
										<el-menu-item-group>
											<el-menu-item index="4-1" class="pc_index_cai_1">咖啡产品</el-menu-item>
										</el-menu-item-group>

									</el-submenu>
									<el-submenu index="5">
										<template slot="title">
											<span class="pc_index_cai_1">商品</span>
										</template>
										<el-menu-item-group>
											<el-menu-item index="5-1" class="pc_index_cai_1">商品</el-menu-item>
										</el-menu-item-group>

									</el-submenu>
								</el-menu>
							</el-col>

						</el-row>
					</el-tab-pane>
				</el-tabs>

			</el-aside>
			<el-main class="pc_index_main">
				<template>
					<router-view />
				</template>
			</el-main>
		</el-container>
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
				activeName: 'third',
				active: '1-1',
			}
		},

		computed: {},

		watch: {},

		created() {

		},
		mounted() {
			this.handleTitle();
		},

		destroyed() {},

		methods: {
			handleAnimate: function() {

			},
			handleClick: function(e) {
				console.log(e)

			},
			getJumpNum: function(key) {
				console.log(key)
				let _this = this;
				_this.$router.push({
					path: "/index/menu/common",
					query: {
						keyNum: key
					}
				});
			},
			handleOpen: function(key) {
				let _this = this;
				if (key == '2' || key == '2-1') {
					_this.getJumpNum(key);
					_this.active = "2-1"
				} else if (key == '3' || key == '3-1') {
					_this.getJumpNum(key);
					_this.active = "3-1"
				} else if (key == '4' || key == '4-1') {
					_this.getJumpNum(key);
					_this.active = "4-1"
				} else if (key == '5' || key == '5-1') {
					_this.getJumpNum(key);
					_this.active = "5-1"

				} else {
					console.log("触发")
					_this.$router.push({
						path: "/index/menu/selection/all"
					});
					_this.active = "1-1"
				}

			},
			// handleOne
			handleClose: function(key, keyPath) {
				console.log(key, keyPath);
				this.handleOpen(key)
			},
			// handleSelect
			handleSelect: function(event) {
				console.log(event);
			},

			handleTitle: function(tab, event) {
				let _this = this;
				if (_this.activeName == "first") {
					_this.$router.push({
						path: "/index/shop"
					});
				} else if (_this.activeName == "second") {
					_this.$router.push({
						path: "/index/user"
					});
				} else{
					_this.$router.push({
						path: "/index/menu/selection/all"
					});
					_this.handleOpen(_this.active)
				}
			}
		}
	};
</script>

<style lang="less">
	.font {
		font-weight: bold !important;
		font-size: 18px !important;
		color: #212121;
	}

	.font3 {
		font-weight: bold !important;
		font-size: 16px !important;
		color: #212121;
	}

	.font2 {
		font-weight: bold !important;
		font-size: 24px !important;
		color: #212121;
	}

	.dis_center {
		display: flex;
		justify-content: center;
		align-items: center
	}

	.margin_auto {
		margin: auto
	}

	.pc_index {
		&_logo {
			margin: 10px;

			&_size {
				width: 55px;
				height: 55px;
				border-radius: 50%;
			}
		}

		&_cai {
			.font2();

			&_1 {
				.font3();
			}
		}

		&_main {
			width: 70%;
		}

		.el-menu {
			border: none
		}

		.el-main {
			background-color: #fff;
			height: 100vh;
			border-left: 3px solid #EFEFEF
		}

		.tac {
			margin-top: 10%;
		}

		.el-tabs__nav-wrap::after {
			display: none !important;
		}

		.el-tabs__item {
			.font();
		}

		.el-aside {
			margin-top: 10px;
			margin-left: 2%;
		}

		.el-tabs__active-bar {
			display: none !important;
		}

		.is-active {
			color: #1C9B6C !important;
		}

		.el-tabs__item:hover {
			color: #1C9B6C !important;
			cursor: pointer;
		}

		.el-icon-arrow-down:before {
			display: none
		}
	}
</style>
