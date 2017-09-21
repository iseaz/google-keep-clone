<template>
	<header>
		<h3 @click="updateData">eventHub</h3>
	</header>
</template>

<script>
	export default {
		data(){
			return {
				//
			}
		},
		methods: {
			updateData(){
				this.$eventHub.$emit('updateData', {
					title: 'test',
					id: '123'
				})
			}
		}
	}
</script>