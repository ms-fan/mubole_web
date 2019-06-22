<template>
	<div class="">
		
	</div>
</template>

<script>
	import {
		Swipe,
		SwipeItem,
		Row,
		Col
	} from 'vant';
	export default {
		name: '',

		mixins: [],

		components: {
			[Swipe.name]: Swipe,
			[SwipeItem.name]: SwipeItem,
			[Row.name]: Row,
			[Col.name]: Col,
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
