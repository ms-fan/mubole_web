<template>
	<div id="app">
		<Header></Header>
		<router-view />
		<Tabbar></Tabbar>
	</div>
</template>

<script>
	import Tabbar from '@/components/footer.vue'
	import Header from '@/components/header.vue'
	export default {
		name: '',

		mixins: [],

		components: {
			Tabbar,
			Header
		},

		props: {},

		data() {
			return {

      }
		},

		computed: {},

		watch: {},

		created() {

		},

		mounted() {

		},

		destroyed() {},

		methods: {
			handleClick: function(e) {
				console.log(e)

			},

		}
	};
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
</style>
