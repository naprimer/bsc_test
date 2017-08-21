<template>
  <div class="main">
    <New-Note :createNote="createNote" :lang="lang"></New-Note>
    <Note v-for="(note, index) in this.notes" :lang="lang" :noteDetails="note" :key="index" :deleteNote="deleteNote"></Note>
  </div>
</template>

<script>
import Note from './Note'
import NewNote from './NewNote'

export default {
  name: 'Main',
  props: ['lang', 'notes', 'deleteNote', 'createNote'],
  components: {Note, NewNote}
}
</script>

<style lang="scss" scoped>
  
</style>
