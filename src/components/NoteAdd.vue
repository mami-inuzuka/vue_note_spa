<template>
  <form @submit.prevent="addNote">
    <textarea v-model="noteText"
      type="text"
      placeholder="メモの内容を入力"
    ></textarea>
    <button type="submit">メモを保存する</button>
  </form>
</template>

<script>
  export default {
    data: function () {
      return {
        noteText: ""
      }
    },
    methods: {
      addNote: function () {
        this.$store.dispatch('addNote', { noteText: this.noteText })
        this.noteText = ""
        this.$emit('noteAdded')
      }
    }
  }
</script>

