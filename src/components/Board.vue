<template>
  <div class="board__wrap">
    <h1>Note App</h1>
    <note v-for="item in noteList"
      :noteText="item.noteText"
      :key="item.id"
    />
    <note-add />
  </div>
</template>

<script>
import NoteAdd from './NoteAdd.vue'
import Note from './Note.vue'
import { mapState } from 'vuex'

export default {
  components: {
    NoteAdd,
    Note
  },
  computed: {
    ...mapState(['noteList'])
  }
}
</script>
