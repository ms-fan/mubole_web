<template>
	<div class="footer">
		<footer>
			<div class="container hidden-xs">
				<div class="f-top">
					<h1><a href="/"><img src="/static/utils/img/logo.png" alt="" /></a></h1>
					<ul>
						<li>
							<router-link to='/'>首页</router-link>
						</li>
						<li>
							<router-link to='pinpaigushi'>品牌故事</router-link>
						</li>
						<li>
							<router-link to='chanpinzhongxin'>产品中心</router-link>
						</li>
						<li>
							<router-link to='chanpinzhongxin'>工程案例</router-link></a>
						</li>
						<li>
							<router-link to='xinwendongtai'>新闻动态</router-link>
						</li>
						<li>
							<router-link to='zixunzhongxin'>咨询中心</router-link>
						</li>
						<li>
							<router-link to='jiaruwomen'>加入我们</router-link>
						</li>
						<li>
							<router-link to='lianxiwomen'>联系我们</router-link></a>
						</li>
					</ul>
				</div>
				<div class="f-center">
					<div class="f-l">
						<ol>
							<li>电话：400-680-5107</li>
							<li>邮箱：tuliao@163.com</li>
							<li style="clear: both;margin-right: 0"></li>
							<li>传真：+86-010-57348001</li>
							<li>地址：北京市海淀区国际大厦CBD</li>
						</ol>
						<ul>
							<li><a href="#"><img src="/static/utils/img/f1.png" alt="" />关于我们<i class="iconfont icon-arrow-right"></i></a></li>
							<li>
								<router-link to='chanpinzhongxin'><img src="/static/utils/img/f2.png" alt="" />产品中心<i class="iconfont icon-arrow-right"></i></router-link>
							</li>
							<li>
								<router-link to='lianxiwomen'><img src="/static/utils/img/f3.png" alt="" />联系我们<i class="iconfont icon-arrow-right"></i></router-link>
							</li>
						</ul>
					</div>
					<div class="f-r">
						<p> <a href="#"><i class="iconfont icon-QQ"></i></a>
							<a href="#"><i class="iconfont icon-youxiang"></i></a> <a href="#"><i class="iconfont icon-iconfontmoban"></i></a></p>
						<span> <img src="/static/utils/img/wei.png" alt="" /> 扫一扫　关注我们 </span>
					</div>
				</div>
			</div>
			<p class="f-bottom2 visible-xs"> Copyright &copy; 2002-2018 某某涂料有限公司 版权所有 <a href="#" target="_blank">京ICP备01054714号
				</a><span><a href="#" target="_blank">【源码商城】</a></span> </p>
		</footer>
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

		watch: {

		},

		created() {

		},

		mounted() {
			// let _this = this;
			// console.log("是不是pc" + _this.$store.getters.isShow)
		},

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
