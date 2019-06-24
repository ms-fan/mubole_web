<template>
	<div id="app">
		<router-view />
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

		created() {
			let loading = document.getElementById('Loading')
			if (loading != null) {
				document.body.removeChild(loading)
			}
		},

		mounted() {
			window.onresize = () => {
				return (() => {
					if ((navigator.userAgent.match(
							/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
						))) {

					} else {
						setTimeout(function() {
							window.location.href = '/p_index.html#/'
						}, 400)
					}
				})()
			}
		},

		destroyed() {},

		methods: {

		}
	};
</script>

<style lang='less'>
	/* @import './static/css/global.css'; */
</style>
