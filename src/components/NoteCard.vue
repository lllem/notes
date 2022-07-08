<template>
  <router-link
  :to="`/notes/${note.id}`"
  class="note-card p-3 mb-3 shadow rounded-xl"
  >
    <h2 class="my-2">{{ note.title }}</h2>

    <p class="lead my-2">{{ note.description }}</p>

    <p class="my-2">{{ note.description }}</p>
  </router-link>
</template>

<script lang="js">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NoteCard',

  props: {
    note: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">
.note-card {
  display: inline-block;
  width: 100%;
  border-radius: 1rem;

  &, & * {
    text-decoration: none;
    color: #000;
  }
}
</style>
