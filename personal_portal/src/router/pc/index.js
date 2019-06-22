import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/pc/index'
import shop from '@/components/pc/shop/shop'
import user from '@/components/pc/user/user'
import menu from '@/components/pc/menu/menu'
import common from '@/components/pc/menu/common'
import details from '@/components/pc/menu/details'
import search from '@/components/pc/menu/search'
import selection from '@/components/pc/menu/selection/selection'
import all from '@/components/pc/menu/selection/all/all'
Vue.use(Router)

let router = new Router({
	routes: [{
			path: '/',
			redirect: '/index/menu/selection/all',
		},
		{
			path: '/index',
			name: 'index',
			component: index,
			redirect: '/index/menu/selection/all',
			children: [{
					path: 'shop',
					name: 'shop',
					component: shop,
					meta: {
						isCai:true
					}
				},
				{
					path: 'user',
					name: 'user',
					component: user,
					meta: {
						isCai:true
					}
				},
				{
					path: 'menu',
					name: 'menu',
					component: menu,
					meta: {
						isCai:true
					},
					children: [{
							path: 'selection',
							name: 'selection',
							component: selection,
							meta: {
								isCai:true
							},
							children: [{
								path: 'all',
								name: 'all',
								component: all,
								meta: {
									isCai:true
								}
							}]
						},
						{
							path: 'common',
							name: 'common',
							component: common,
							meta: {
								isCai:true
							}
						},
						{
							path: 'details',
							name: 'details',
							component: details,
							meta: {
								isCai:true
							}
						},
						{
							path: 'search',
							name: 'search',
							component: search,
							meta: {
								isCai:false
							}
						}
					]
				}
			]

		},

	]
})

/**
 * 判断是否为移动设备，是，则跳转到移动端的路径
 */
router.beforeEach((to, from, next) => {
	if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
		window.location.href = '/m_index.html#/'
		return
	}
	next()
})

export default router
