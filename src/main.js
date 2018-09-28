import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import Home from './components/Home.vue';
import Blog from './components/Blog.vue';
import Products from './components/Products.vue';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;

//register vue-router

//define routes for your application

new Vue({
	render: h => h(App)
}).$mount('#app');
