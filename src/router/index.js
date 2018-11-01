import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import abc from '@/components/abc'
import myVue from '@/components/myVue'

import home from '@/components/home/home'
import product from '@/components/product'
import industry from '@/components/industry'
import customerCase from '@/components/customerCase'
import about from '@/components/about'
import download from '@/components/download'

Vue.use(Router)

export default new Router({
  routes: [
		{
			path: '/myVue',
			name: 'myVue',
			component: myVue,
			children: [{
			path: '/home',
			name: 'home',
			component: home
			},
			{
				path: '/product',
				name: 'product',
				component: product
			},
			{
				path: '/industry',
				name: 'industry',
				component: industry
			},
			{
			path: '/customerCase',
			name: 'customerCase',
			component: customerCase
			},
			{
				path: '/about',
				name: 'about',
				component: about
			},
			{
			path: '/download',
			name: 'download',
			component: download
			}]
		}
  ]
})
