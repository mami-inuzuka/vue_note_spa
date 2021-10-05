<template>
  <form>
    <textarea v-model="textToEdit" type="text"></textarea>
    <button type="button" @click="updateNote">更新</button>
    <button type="button" @click="deleteNote">削除</button>
  </form>

</template>

<script>
export default {
  props: {
    noteIndex: {
      type: Number,
      required: true
    }
  },
  methods: {
    updateNote: function() {
      this.$store.dispatch('updateNote', {
        noteIndex: this.noteIndex,
        noteText: this.textToEdit
      })
      this.$emit('endedUpdateNote')
    },
    deleteNote: function() {
      this.$store.dispatch('deleteNote', {
        noteIndex: this.noteIndex
      })
      this.$emit('endedUpdateNote')
    }
  },
  computed: {
    textToEdit: {
      get: function() {
        return this.$store.state.noteList[this.noteIndex].noteText
      },
      set: function(value) {
        this.$store.state.noteList[this.noteIndex].noteText = value
      }
    }
  }
}
</script>
