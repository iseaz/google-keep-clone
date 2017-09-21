const Home = () => import('./pages/Home.vue')
const About = () => import('./pages/About.vue')

export const routes = [
	{ path: '/', component: Home },
	{ path: '/about', component: About },
	{ path: '*', redirect: '/' }
]