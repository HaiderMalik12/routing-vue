import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import User from './components/user/User.vue';
import UserProfile from './components/user/UserProfile.vue';
import UserMessages from './components/user/UserMessages.vue';
import UserPosts from './components/user/UserPosts.vue';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
	base: __dirname,
	mode: 'history',
	routes: [
		{
			path: '/user/:id',
			component: User,
			children: [
				{ path: 'profile', component: UserProfile },
				{ path: 'messages', component: UserMessages },
				{ path: 'posts', component: UserPosts }
			]
		}
	]
});

new Vue({
	router,
	render: h => h(App)
}).$mount('#app');
