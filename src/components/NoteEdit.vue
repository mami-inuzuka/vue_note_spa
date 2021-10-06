<template>
  <form>
    <textarea v-model="textToEdit" type="text"></textarea>
    <div class="button__wrap">
      <button type="button" @click="updateNote" :disabled="isButtonDisabled">更新する</button>
      <button type="button" @click="deleteNote" class="button--danger">削除する</button>
    </div>
    <button type="button" @click="cancelEdit" class="button--default">編集をキャンセルする</button>
  </form>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    noteIndex: {
      type: Number,
      required: true
    }
  },
  methods: {
    cancelEdit: function() {
      this.$emit('endedUpdateNote')
    },
    deleteNote: function() {
      this.$store.dispatch('deleteNote', {
        noteIndex: this.noteIndex
      })
      this.$emit('endedUpdateNote')
    },
    updateNote: function() {
      this.$store.dispatch('updateNote', {
        noteIndex: this.noteIndex,
        noteText: this.textToEdit
      })
      this.$emit('endedUpdateNote')
    }
  },
  computed: {
    textToEdit: {
      get: function() {
        return this.noteList[this.noteIndex].noteText
      },
      set: function(value) {
        this.noteList[this.noteIndex].noteText = value
      }
    },
    isButtonDisabled: function() {
      return this.textToEdit.length === 0
    },
    ...mapState(['noteList'])
  }
}
</script>
