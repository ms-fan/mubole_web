<template>
	<div class="p_footer">
		<el-row>
			<el-col :span="24" class="p_footer_1">
				<el-row>
					<el-col :span="4" class='p_footer_1_des'></el-col>
					<el-col :span="6" class='p_footer_1_des'>
						<div>logo</div>
						<div>xxxxxxxxxxx</div>
						<div>xxxxxxxxxxx</div>
						<div>xxxxxxxxxxx</div>
						<div>xxxxxxxxxxx</div>
						<div>xxxxxxxxxxx</div>
						<div>xxxxxxxxxxx</div>
					</el-col>
					<el-col :span="10" class='p_footer_1_des2'>
						<el-row>
							<el-col :span='4'>
								<div>关于我们</div>
							</el-col>
							<el-col :span='4'>
								<div>品牌优势</div>
							</el-col>
							<el-col :span='4'>
								<div>十大新材料</div>
							</el-col>
							<el-col :span='4'>
								<div>战略合作</div>
							</el-col>
							<el-col :span='4'>
								<div>加盟合作</div>
							</el-col>
							<el-col :span='4'>
								<div>联系我们</div>
							</el-col>
						</el-row>
					</el-col>
					<el-col :span="4" class='p_footer_1_des'></el-col>
				</el-row>
			</el-col>
			<el-col :span="24" class="p_footer_2">
				<div>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
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
			return {}
		},

		computed: {},

		watch: {},

		created() {},

		mounted() {},

		destroyed() {},

		methods: {
			handleClick: function(e) {
				console.log(e)

			},
		}
	};
</script>

<style lang="less">
	// @import './static/css/global.css';
	.p_footer {

		&_1 {
			border: 1px solid red;
			padding: 10px 0;
			background: #3F424B;
			box-sizing: border-box;
			&_des{
				border: 1px solid yellow;
				color: #fff;
				
				display: flex;
				flex-direction: column;
				align-items: center;
			
			}
			&_des2{
				color:#fff
			}
		}

		&_2 {
			padding: 10px 0;
			box-sizing: border-box;
			background: #383C3F;
			border: 1px solid red;
			color: #fff;
			display: flex;
			justify-content: center
		}
	}
</style>
