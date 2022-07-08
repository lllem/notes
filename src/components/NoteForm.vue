<template>
  <form
  class="note note_edit"
  >

    <label for="title">
      <input
      v-model="noteEdited.title"
      ref="title"
      type="text"
      placeholder="Заголовок"
      id="title"
      class="note__title py-2 m-0 w-100 m-0 d-block"
      autocomplete="off"
      maxlength="12"
      />
    </label>

    <textarea
    v-model="noteEdited.description"
    class="note__description py-2 m-0 w-100 d-block"
    placeholder="Описание"
    maxlength="25"
    ></textarea>

    <textarea
    v-model="noteEdited.text"
    class="note__text py-2 m-0 w-100 d-block"
    placeholder="Текст"
    maxlength="50"
    ></textarea>

    <div class="sticky-bottom row mt-5 py-3">

      <div v-if="this.note.id !== null" class="col-auto">
        <button
        @click.prevent="deleteNote"
        class="btn btn-outline-danger btn-sm">
          Удалить
        </button>
      </div>

      <div class="col-auto">
        <button
        @click.prevent="saveNote"
        class="btn btn-outline-primary btn-sm">
          Сохранить
        </button>
      </div>

    </div>

  </form>
</template>

<script lang="js">
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'NewForm',

  props: {
    note: {
      type: Object,
      default() {
        return {
          id: null,
          title: '',
          description: '',
          text: '',
        };
      },
    },
  },

  data() {
    return {
      noteEdited: {},
    };
  },

  methods: {
    fillNote() {
      this.noteEdited = this.note;
    },

    async saveNote() {
      if (this.note.id) {
        axios.patch(
          `http://localhost:3000/notes/${this.note.id}`,
          { title: this.noteEdited.title },
        );

        axios.patch(
          `http://localhost:3000/notes/${this.note.id}`,
          { description: this.noteEdited.description },
        );

        axios.patch(
          `http://localhost:3000/notes/${this.note.id}`,
          { text: this.noteEdited.text },
        );
      } else {
        const res = await axios.post('http://localhost:3000/notes', this.noteEdited);
        console.log('post', res);
      }

      this.$store.dispatch('fetchNotes');
    },

    async deleteNote() {
      const res = await axios.delete(`http://localhost:3000/notes/${this.note.id}`);
      console.log('delete', res);

      this.$router.push('/');
    },
  },

  created() {
    this.fillNote();
  },

  mounted() {
    this.$refs.title.focus();
  },
});
</script>

<style scoped lang="scss">
.note {
}
</style>
