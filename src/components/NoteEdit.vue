<template>
  <form @submit.prevent="updateNote">
    <textarea v-model="textToEdit" type="text"></textarea>
    <button type="submit">更新</button>
    <a @click="kakunin">kakunin</a>
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
    kakunin: function() {
      console.log(this.textToEdit)
    },
    updateNote: function() {
      this.$store.dispatch('updateNote', {
        noteIndex: this.noteIndex,
        noteText: this.textToEdit
      })
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
