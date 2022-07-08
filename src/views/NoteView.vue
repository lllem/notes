<template>
  <div v-if="err404" class="text-center py-5">
    <h1>404</h1>
    <p class="lead">Запись не найдена</p>
  </div>

  <div v-else-if="loading" class="text-center py-5">Загрузка...</div>

  <div
  v-else
  class="note-view container py-5"
  :to="`/notes/${id}`"
  >
    <h1 class="my-2">{{ note.title }}</h1>

    <p class="lead my-2">{{ note.description }}</p>

    <p class="my-2">{{ note.description }}</p>
  </div>
</template>

<script lang="js">
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'NoteView',

  props: {
    id: Number,
  },

  data() {
    return {
      note: {},
      err404: false,
    };
  },

  computed: {
    loading() {
      return this.note === {};
    },
  },

  async created() {
    try {
      const res = await axios.get(`http://localhost:3000/notes/${this.id}`);
      this.note = res.data;
    } catch (error) {
      this.err404 = true;
      console.log(error);
    }
  },
});
</script>

<style scoped lang="scss">
.note-view {}
</style>
