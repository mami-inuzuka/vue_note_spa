<template>
  <div class="board__wrap">
    <h1>Note App</h1>
    <div class="board__inner">
      <div class="board__item">
        <note v-for="(item, index) in noteList"
          :noteText="item.noteText"
          :key="item.id"
          :noteIndex="index"
          @getEditingIndex="startEditing"
        />
        <button @click="startAdding" :class="buttonNewClass">新しいメモを作成</button>
      </div>
      <div class="board__item">
        <div class="edit" v-if="isEditing">
          <note-edit :noteIndex="noteIndex" @endedUpdateNote="finishEditing" />
        </div>
        <div class="add" v-if="isAdding">
          <note-add @noteAdded="finishAdding" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Note from './Note.vue'
import NoteAdd from './NoteAdd.vue'
import NoteEdit from './NoteEdit.vue'

export default {
  components: {
    Note,
    NoteAdd,
    NoteEdit
  },
  data: function() {
    return {
      isAdding: false,
      isEditing: false,
      noteIndex: 0,
      noteId: 0
    }
  },
  methods: {
    startAdding: function() {
      this.isEditing = false
      this.isAdding = true
    },
    finishAdding: function() {
      this.isAdding = false
    },
    startEditing: function(noteIndex) {
      this.isEditing = true
      this.isAdding = false
      this.noteIndex = noteIndex
    },
    finishEditing: function() {
      this.isEditing = false
    }
  },
  computed: {
    buttonNewClass: function() {
      const buttonNewClass = ['button__new']
      if(this.isAdding) {
        buttonNewClass.push(['hidden'])
      }
      return buttonNewClass
    },
    ...mapState(['noteList'])
  }
}
</script>
