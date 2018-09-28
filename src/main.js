import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import Dashboard from './components/dashboard/Dashboard.vue';
import AuthForm from './components/auth/AuthForm.vue';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;

Vue.use(VueRouter);
const requiresAuth = (to, from, next) => {
	//fetch user from localStorage
	//if there is a user then navigate to dashboard
	//otherwise don't navigate to root route
};
const router = new VueRouter({
	base: __dirname,
	mode: 'history',
	routes: [
		{
			path: '/',
			component: AuthForm
		},
		{
			path: '/dashboard',
			component: Dashboard
			//require auth here only authenticated user
			//can access the dashboard route
		}
	]
});

new Vue({
	router,
	render: h => h(App)
}).$mount('#app');
