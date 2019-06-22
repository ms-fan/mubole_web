<template>
	<div>
		<van-tabbar v-model="active" active-color="#07c160" inactive-color="#000" route>
			<van-tabbar-item icon="home-o" replace
    to="/menu">菜单</van-tabbar-item>
			<van-tabbar-item icon="search" replace
    to="/shop">门店</van-tabbar-item>
			<van-tabbar-item icon="friends-o" replace
    to="/user">我的</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
	import {
		Tabbar,
		TabbarItem
	} from 'vant';
	export default {
		name: "Tabbar",
		mixins: [],
		components: {
			[Tabbar.name]: Tabbar,
			[TabbarItem.name]: TabbarItem,
		},

		props: {},

		data() {
			return {
				active: 0,
			}
		},

		computed: {},

		watch: {},

		created() {
			if(this.$route.path=="/menu"){
				this.active = 0
			}else if(this.$route.path=="/shop"){
				this.active = 1
			}else{
				this.active = 2
			}
		},

		mounted() {},

		destroyed() {},

		methods: {}
	};
</script>

<style lang="less">
</style>
