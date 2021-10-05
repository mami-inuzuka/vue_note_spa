<template>
  <div class="note__list">
    {{ noteTitle }}
  </div>
</template>

<script>
export default {
  props: {
    noteText: {
      type: String,
      required: true
    }
  },
  computed: {
    noteTitle: function() {
      const noteTextArray = this.noteText.split(/\n/)
      return noteTextArray[0]
    }
  }
}
</script>
