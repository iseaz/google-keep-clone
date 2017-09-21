<template>
	<div class="container">
		<app-header></app-header>
		<router-view></router-view>
		<div class="lightbox-overlay"></div>
	</div>
</template>

<script>
	import Header from './components/Header.vue'

	export default {
		components: {
			appHeader: Header
		}
	}
</script>