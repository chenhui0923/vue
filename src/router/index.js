import Vue from 'vue'
//对应你要跳转的组件
import Router from 'vue-router'
import HelloWorld from "@/components/HelloWorld";
import new_file from '@/components/new_file.vue';

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
		}

	]
})
