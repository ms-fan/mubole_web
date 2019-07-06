<template>
	<div class="zixunzhongxin">
		<!-- info -->
		<div id="info" class="info_bg">
		  <div  class="container">
		    <div class="i-message">
		      <h3 class="info-title"><span>咨询中心</span><small></small></h3>
		      <img src="/static/utils/img/i-mes.jpg" alt="" class="img-responsive"/>
		      <div class="mes-r">
		        <h4>填写您的疑问和需求</h4>
		        
		        <form action="/plus/diy.php" enctype="multipart/form-data" method="post" id="form1">
		          <input type="hidden" name="action" value="post" />
		          <input type="hidden" name="diyid" value="1" />
		          <input type="hidden" name="do" value="2" />
		          <input type="text" placeholder="您的姓名" required name="name" />
		          <input type="text" placeholder="公司地址" required name="adr" />
		          <input type="text" placeholder="您的电话" required name="tel"/>
		          <textarea  id="" placeholder="告诉我们您的需求和疑问" required  name="content"></textarea>
		          <input type="hidden" name="dede_fields" value="name,text;adr,text;tel,text;content,multitext" />
		          <input type="hidden" name="dede_fieldshash" value="3d0ea1e1e2fb6b4af2fc4af78434c9d7" />
		          <input type="submit" value="立即提交"/>
		        </form>
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

<style  lang="less">
</style>
