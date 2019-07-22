import Vue from 'vue'
import Router from 'vue-router'
import gongchenganli from '@/views/gongchenganli/gongchenganli'
import chanpinzhongxin from '@/views/chanpinzhongxin/chanpinzhongxin'
import chanpinmingchen from '@/views/chanpinmingchen/chanpinmingchen'
import pinpaigushi from '@/views/pinpaigushi/pinpaigushi'
import xinwendongtai from '@/views/xinwendongtai/xinwendongtai'
import zixunzhongxin from '@/views/zixunzhongxin/zixunzhongxin'
import bigimgs from '@/views/bigimgs/bigimgs'
import jiaruwomen from '@/views/jiaruwomen/jiaruwomen'
import lianxiwomen from '@/views/lianxiwomen/lianxiwomen'
import index from '@/views/index/index'
Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'index',
			component: index,
			meta: {
				title: 'index'
			}

		},
		{
			path: '/index',
			name: 'index',
			component: index,
			meta: {
				title: 'index'
			}
		},
		{
			path: '/gongchenganli',
			name: 'gongchenganli',
			component: gongchenganli,
			meta: {
				title: 'gongchenganli'
			}
		},
		{
			path: '/chanpinmingchen',
			name: 'chanpinmingchen',
			component: chanpinmingchen,
			meta: {
				title: 'chanpinmingchen'
			}
		},
    {
    	path: '/bigimgs',
    	name: 'bigimgs',
    	component: bigimgs,
    	meta: {
    		title: 'bigimgs'
    	}
    },
    {
    	path: '/chanpinzhongxin',
    	name: 'chanpinzhongxin',
    	component: chanpinzhongxin,
    	meta: {
    		title: 'chanpinzhongxin'
    	}
    },
		{
			path: '/pinpaigushi',
			name: 'pinpaigushi',
			component: pinpaigushi,
			meta: {
				title: 'pinpaigushi'
			}
		},
		{
			path: '/xinwendongtai',
			name: 'xinwendongtai',
			component: xinwendongtai,
			meta: {
				title: 'xinwendongtai'
			}

		},
		{
			path: '/zixunzhongxin',
			name: 'zixunzhongxin',
			component: zixunzhongxin,
			meta: {
				title: 'zixunzhongxin'
			}
		},
		{
			path: '/jiaruwomen',
			name: 'jiaruwomen',
			component: jiaruwomen,
			meta: {
				title: 'jiaruwomen'
			}
		},
		{
			path: '/lianxiwomen',
			name: 'lianxiwomen',
			component: lianxiwomen,
			meta: {
				title: 'lianxiwomen'
			}
		},


	]
})
