import Vue from 'vue'
//对应你要跳转的组件
import Router from 'vue-router'
import HelloWorld from "../components/HelloWorld";
import new_file from '../app/new_file.vue';
import canteen_dishes from '../app/canteen_dishes.vue';
import first from '../components/first.vue';
import inputtest from '../app/inputtest.vue';
import testchpz from '../app/testchpz.vue';
import sum from '../app/sum.vue';


Vue.use(Router)
export default new Router({
	mode: 'history',
	routes: [{
			path: '/',
			name: 'hello',
			component: HelloWorld
		}, {
			path: '/new_file',
			name: 'new_file',
			component: new_file
		},
		{
			path: '/canteen_dishes',
			name: 'canteen_dishes',
			component: canteen_dishes
		},
		{
			path: '/first',
			name: 'first',
			component: first
		},
		{
			path: '/inputtest',
			name: 'inputtest',
			component: inputtest

		},
{
			path: '/testchpz',
			name: 'testchpz',
			component: testchpz
		},
		{
			path: '/sum',
			name: 'sum',
			component: sum
		}		


	]
})
