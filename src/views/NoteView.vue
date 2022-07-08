<template>
  <div class="container py-5">
    <div v-if="err404" class="text-center">
      <h1>404</h1>
      <p class="lead">Запись не найдена</p>
    </div>

    <div v-else-if="loading" class="text-center">Загрузка...</div>

    <div
    v-else-if="!editmode"
    class="note container px-0"
    :to="`/notes/${id}`"
    >
      <h1 class="note__title py-2 m-0">{{ note.title }}</h1>

      <p class="note__description py-2 m-0">{{ note.description }}</p>

      <p class="note__text py-2 m-0">{{ note.text }}</p>

      <div class="sticky-bottom mt-5">
        <button
        @click="editmode = true"
        class="btn btn-outline-primary btn-sm"
        >
          Редактировать
        </button>
      </div>
    </div>

    <NoteForm v-else :note="note" />
  </div>
</template>

<script lang="js">
import { defineComponent } from 'vue';
import axios from 'axios';
import NoteForm from '@/components/NoteForm.vue';

export default defineComponent({
  name: 'NoteView',

  props: {
    id: Number,
  },

  components: {
    NoteForm,
  },

  data() {
    return {
      note: {},
      err404: false,
      editmode: false,
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
.note {}
</style>
