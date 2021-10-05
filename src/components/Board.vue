<template>
  <div class="board__wrap">
    <h1>Note App</h1>
    <div class="board__inner">
      <div class="board__item">
        <note v-for="(item, index) in noteList"
          :noteText="item.noteText"
          :key="item.id"
          :noteId="item.id"
          :noteIndex="index"
          @getEditingIndex="startEditing"
        />
      </div>
      <div class="board__item">
        <div class="edit" v-if="isEditing">
          <note-edit :noteIndex="noteIndex" />
        </div>
        <div class="add" v-else>
          <note-add />
        </div>
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
  data: function() {
    return {
      isEditing: false,
      noteIndex: 0,
      noteId: 0
    }
  },
  methods: {
    startEditing: function(noteIndex) {
      this.isEditing = true
      this.noteIndex = noteIndex
    }
  },
  computed: {
    ...mapState(['noteList'])
  }
}
</script>
