<template>
	<div class="lianxiwomen">
		<div id="info" class="info_bg">
			<div class="container">
				<div class="i-contact">
					<h3 class="info-title"><span>联系我们</span><small></small></h3>
					<ul class="i-contact-ul">
						<div class="contact-boxss">
							<p>
								&nbsp; 电话:151 8015 1127</p>
							<p>
								&nbsp;&nbsp;传真：</p>
							<p>
								&nbsp;&nbsp;网址：www.mubole.top</p>
							<p>
								&nbsp;&nbsp;电子邮箱：fanmanfu@126.com</p>
							<p>
								&nbsp;&nbsp;地址：江西省九江市修水县</p>
							<p>
								&nbsp;</p>
						</div>


					</ul>

					<!-- //地图 -->
					<div id="map">
						<el-amap vid='amapDemo'></el-amap>
					</div>
				</div>
			</div>
		</div>
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
	#map{
		width: 100%;
		height:18.333333rem;
	}
</style>
