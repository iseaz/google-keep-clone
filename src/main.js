import Vue from 'vue'
import VueRouter from 'vue-router'
import { store } from './store/store'
import { routes } from './routes'
import App from './App.vue'

window.$ = window.jQuery = require('jquery')
require('./assets/js/global')

const eventHub = new Vue()
Object.defineProperties(Vue.prototype, {
	$eventHub: {
		get(){
			return eventHub
		}
	}
})

Vue.use(VueRouter)

const router = new VueRouter({
	routes
})

new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
})