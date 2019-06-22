import Vue from 'vue'
import Router from 'vue-router'
import menu from '@/components/mobile/menu/menu'
import shop from '@/components/mobile/shop/shop'
import user from '@/components/mobile/user/user'
import details from '@/components/mobile/details'

Vue.use(Router)

let router = new Router({
	routes: [{
		path: '*',
		redirect: '/menu'
	}, {
		path: '/menu',
		name: 'menu',
		component: menu,
	}, {
		path: '/shop',
		name: 'shop',
		component: shop
	}, {
		path: '/user',
		name: 'user',
		component: user,
	}, {
		path: '/details',
		name: 'details',
		component: details,
	}]
})

/**
 * 验证
 */
router.beforeEach((to, from, next) => {
	if (!/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
		window.location.href = '/p_index.html#/'
		return
	}
	next()
})

export default router
