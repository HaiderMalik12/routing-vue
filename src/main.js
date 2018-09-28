import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import Home from './components/Home.vue';
import Blog from './components/Blog.vue';
import Products from './components/Products.vue';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;

//register vue-router
Vue.use(VueRouter);

//define routes for your application
const router = new VueRouter({
	base: __dirname,
	mode: 'history',
	routes: [
		{ path: '/', component: Home },
		{ path: '/products', component: Products },
		{ path: '/blog', component: Blog }
	]
});

new Vue({
	router,
	render: h => h(App)
}).$mount('#app');
