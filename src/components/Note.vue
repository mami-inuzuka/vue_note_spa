<template>
  <div class="note__list">
    {{ noteText }}
  </div>
</template>

<script>
export default {
  props: {
    noteText: {
      type: String,
      required: true
    }
  }
}
</script>
