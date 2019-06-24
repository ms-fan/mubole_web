<template>
	<div id="app">
		<Header></Header>
		<router-view />
		<Footer></Footer>
	</div>
</template>

<script>
	import Header from '@/components/pc/header.vue'
	import Footer from '@/components/pc/footer.vue'
	export default {
		name: '',

		mixins: [],

		components: {
			Header,
			Footer
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
						setTimeout(function() {
							window.location.href = '/m_index.html#/'
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


</style>
