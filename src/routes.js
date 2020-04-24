import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home';
import About from './components/About';
window.Vue = Vue;

Vue.use(VueRouter);



let routes = [

	{
		path: '/',
		component: Home,
		name: "Home",
		meta:{title: "Home"},
	},
	{
		path: '/about',
		component: About,
		name: "About",
		meta:{title: "About"},
	}

]

const router = new VueRouter();

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
});



export default new VueRouter({
	routes,
	router,
})