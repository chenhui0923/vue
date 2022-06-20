import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(router);


new Vue({
	el: '#app',
	render: h => h(App),
	router
}).$mount('#app')
