<template>
  <div class="board__wrap">
    <h1>Note App</h1>
    <div class="board__inner">
      <div class="board__item">
        <note v-for="item in noteList"
          :noteText="item.noteText"
          :key="item.id"
        />
        <note-add />
      </div>
      <div class="board__item">
        <note-edit />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import NoteAdd from './NoteAdd.vue'
import Note from './Note.vue'
import NoteEdit from './NoteEdit.vue'

export default {
  components: {
    NoteAdd,
    Note,
    NoteEdit
  },
  computed: {
    ...mapState(['noteList'])
  }
}
</script>
