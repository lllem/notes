<template>
  <router-link
  :to="`/notes/${note.id}`"
  class="note-card mb-3 py-2 shadow rounded-xl"
  >
    <h2 class="title px-3 py-2 m-0 w-100">{{ note.title }}</h2>

    <p class="description px-3 py-2 m-0 w-100">{{ note.description }}</p>

    <p class="text px-3 py-2 m-0 w-100">{{ note.text }}</p>
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
