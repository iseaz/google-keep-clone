import Vue from 'vue'
// import VueRouter from 'vue-router'
// import { store } from './store/store'
// import { routes } from './routes'
import App from './App.vue'
// import Firebase from 'firebase'

// let firebase = new Firebase('https://apisit-gkc.firebaseio.com/')

// firebase.child('notes').set([
// 	{ title: 'first title', content: 'lorem ipsum' }
// ])

// firebase.child('notes').on('value', snapshot => {
// 	let notes = snapshot.val()
// 	console.log(notes)
// 	window.alert(notes[0].title)
// })

// window.$ = window.jQuery = require('jquery')
// require('./assets/js/global')

// const eventHub = new Vue()
// Object.defineProperties(Vue.prototype, {
// 	$eventHub: {
// 		get(){
// 			return eventHub
// 		}
// 	}
// })

// Vue.use(VueRouter)

// const router = new VueRouter({
// 	routes
// })

new Vue({
	el: '#app',
	render: h => h(App)
})