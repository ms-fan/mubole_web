<template>
	<div class="footer">
		<footer>
			<div class="container hidden-xs">
				<div class="f-top">
					<h1><a href="/"><img src="/static/utils/img/logo3.png" alt="" /></a></h1>
					<ul>
						<li>
							<router-link to='/'>首页</router-link>
						</li>
						<li>
							<router-link to='chanpinzhongxin'>产品中心</router-link>
						</li>
						<li>
							<router-link to='gongchenganli'>工程案例</router-link>
						</li>
            <li>
              <router-link to='huanbaobancai'>环保板材</router-link>
            </li>
						<li>
							<router-link to='zixunzhongxin'>咨询中心</router-link>
						</li>
						<li>
							<router-link to='lianxiwomen'>联系我们</router-link>
						</li>
					</ul>
				</div>
				<div class="f-center">
					<div class="f-l">
						<ol>
							<li>电话：15180151127</li>
							<li>邮箱：fanmanfu@163.com</li>
							<li style="clear: both;margin-right: 0"></li>
							<li>传真：+86-010-57348001</li>
							<li>地址：浙江省杭州市滨江区</li>
              <li style="clear: both;margin-right: 0"></li>
              <li class="f_b"><a href="http://beian.miit.gov.cn">Copyright &copy; 2018-2020 木伯乐全屋定制 版权所有&nbsp;&nbsp;赣ICP备19007009号
				</a></li>
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
			<p class="f-bottom2 visible-xs f_b"> <a href="http://beian.miit.gov.cn">Copyright &copy; 2018-2020 木伯乐全屋定制 版权所有  赣ICP备19007009号
				</a></p>
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
			return {

      }
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
  .f_b a{
    font-weight: bold;
  }
</style>
