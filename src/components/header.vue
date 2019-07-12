<template>
	<div class="header">
		<!--正常导航条-->
		<header>
			<div class="hidden-l">
				<div class="h-nav">
					<div class="container">
						<h1>
							<router-link to='/'><img src="/static/utils/img/logoaa.png" alt="" /></router-link>

            </h1>
						<ul>
							<li>
								<router-link to='/'>首页</router-link>
							</li>
							<li>
								<router-link to='chanpinzhongxin'>产品中心</router-link>
							</li>
							<li>
								<router-link to='gongchenganli'>工程案例</router-link></a>
							</li>
							<li>
								<router-link to='zixunzhongxin'>咨询中心</router-link>
							</li>
							<li>
								<router-link to='lianxiwomen'>联系我们</router-link></a>
							</li>
						</ul>
					</div>
				</div>
			</div>


			<!--手机导航条-->
			<div class="hidden-g">
				<div class="h-nav-g">
					<h1><a href="/"><img src="/static/utils/img/logoaa.png" alt="" /></a></h1>
					<i class="btn_i header_btn_i"><small></small></i>
				</div>
				<div class="ul-small">
					<!-- action="/plus/search.php" -->
					<form>
						<input type="hidden" name="kwtype" value="0" />
						<input type="text" placeholder="请输入产品名称" name="q" />
					</form>
					<ul>
						<li>
							<router-link to='/'>首页</router-link>
						</li>

						<li>
							<router-link to='chanpinzhongxin'>产品中心</router-link>
						</li>
						<li>
							<router-link to='gongchenganli'>工程案例</router-link></a>
						</li>

						<li>
							<router-link to='zixunzhongxin'>咨询中心</router-link>
						</li>

						<li>
							<router-link to='lianxiwomen'>联系我们</router-link></a>
						</li>
					</ul>
				</div>
			</div>
			<div v-if='$route.meta.title=="chanpinzhongxin"' class="banner2" style="background-image: url(/static/utils/img/banner1.jpg);"> </div>
			<div v-if='$route.meta.title=="pinpaigushi"' class="banner2" style="background-image: url(/static/utils/img/timg2.jpg);"> </div>
			<div v-if='$route.meta.title=="gongchenganli"' class="banner2" style="background-image: url(/static/utils/img/3.jpg);"> </div>
			<div v-if='$route.meta.title=="xinwendongtai"' class="banner2" style="background-image: url(/static/utils/img/banner16.jpg);"> </div>
			<div v-if='$route.meta.title=="zixunzhongxin"' class="banner2" style="background-image: url(/static/utils/img/banner42.jpg);"> </div>
			<div v-if='$route.meta.title=="jiaruwomen"' class="banner2" style="background-image: url(/static/utils/img/banner5.jpg);"> </div>
			<div v-if='$route.meta.title=="lianxiwomen"' class="banner2" style="background-image: url(/static/utils/img/banner17.jpg);"> </div>
		</header>
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

</style>
