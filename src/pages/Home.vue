<template>
	<div>
		Home <i class="fa fa-info"></i><br>
		{{tmp.title}} - {{tmp.id}}<br>
		<router-link to="/about">About</router-link>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				tmp: ''
			}
		},
		mounted(){
			this.$eventHub.$on('updateData', value => {
				this.tmp = value
			})
		},
		beforeDestroy(){
			this.$eventHub.$off('updateData')
		}
	}
</script>