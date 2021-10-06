<template>
  <div class="note__list" @click="editNote">
    {{ noteTitle }}
  </div>
</template>

<script>
export default {
  props: {
    noteIndex: {
      type: Number,
      required: true
    },
    noteText: {
      type: String,
      required: true
    }
  },
  methods: {
    editNote: function() {
      this.$emit('getEditingIndex', this.noteIndex)
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
