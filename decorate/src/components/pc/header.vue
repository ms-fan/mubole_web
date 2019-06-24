<template>
	<div class="p_header">
		<el-row>
			<el-col :span="24" class="p_header_1">
				<el-row>
					<el-col :span="8" class="p_header_1_logo">
						<el-image style="width: 100px; height: 30px" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
						 fit="cover"></el-image>
					</el-col>
				</el-row>
			</el-col>
			<el-col :span="24" class="p_header_2">
				<el-row>
					<el-col :span="10" class="p_header_2_title1"></el-col>
					<el-col :span="14" class="p_header_2_title1">
						<el-tabs v-model="activeName" @tab-click="handleClick">
							<el-tab-pane label="首页" name="first"></el-tab-pane>
							<el-tab-pane label="装修效果图" name="second"></el-tab-pane>
							<el-tab-pane label="装修公司" name="third"></el-tab-pane>
							<el-tab-pane label="十大新材料" name="fourth"></el-tab-pane>
							<el-tab-pane label="家具商城" name="five"></el-tab-pane>
							<el-tab-pane label="装修攻略" name="six"></el-tab-pane>
							<el-tab-pane label="线下体验馆" name="seven"></el-tab-pane>
						</el-tabs>
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
				activeName: 'first'
			}
		},

		computed: {},

		watch: {
			activeName: function(a) {
				console.log(a)
				let _this = this;
				if (a == 'first') {
					_this.$router.push({
						path: "/index",
					});
				}
			}
		},

		created() {},

		mounted() {},

		destroyed() {},

		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			}
		}
	};
</script>

<style lang="less">
	.p_header {

		.el-tabs__nav-wrap::after,
		.el-tabs__active-bar {
			display: none
		}

		.el-tabs__header {
			margin-bottom: 0;
		}

		.el-tabs__item.is-active,
		.el-tabs__item:hover {
			color: #000;
			font-weight: bold;
		}

		&_1 {
			height: 50px;
			background: #2E3E4B;

			&_logo {
				border: 1px solid red;
				height: 50px;
				display: flex;
				justify-content: flex-end;
				align-items: center
			}
		}

		&_2 {
			border: 1px solid red;
			&_title1 {
					padding: 10px 0;
			}
		}
	}
</style>
