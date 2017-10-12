<template>
	<div class="notes" ref="notes">
		<note v-for="note in notes" :note="note" :key="note.title"></note>
	</div>
</template>

<script>
	import Note from './Note.vue'
	import Masonry from 'masonry-layout'
	import noteRepository from '../../data/NoteRepository'

	export default {
		components: {
			Note
		},
		data(){
			return {
				notes: []
			}
		},
		mounted(){
			noteRepository.on('added', note => {
				this.notes.unshift(note)
			})

			noteRepository.on('changed', ({key, title, content}) => {
				let outdatedNote = noteRepository.find(this.notes, key)
				outdatedNote.title = title
				outdatedNote.content = content
				console.log(outdatedNote)
			})
		}
		// created(){
		// 	let masonry = new Masonry(this.$refs.notes, {
		// 		itemSelector: '.note',
		// 		columnWidth: 240,
		// 		gutter: 16,
		// 		fitWidth: true
		// 	})

		// 	let firebase = new Firebase('https://apisit-gkc.firebaseio.com/')

		// 	firebase.child('notes').on('child_added', snapshot => {
		// 		let note = snapshot.val()
		// 		this.notes.unshift(note)

		// 		this.$nextTick(() => {
		// 			masonry.reloadItems()
		// 			masonry.layout()
		// 		})
		// 	})
		// }
	}
</script>

<style>
	.notes {
		margin: 0 auto;
	}
</style>
