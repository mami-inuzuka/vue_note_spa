<template>
  <form @submit.prevent="addNote">
    <input v-model="noteText"
      type="text"
      placeholder="メモの内容を入力"
    >
    <button type="submit">新規追加</button>
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
      }
    }
  }
</script>

