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

    <div class="sticky-bottom mt-5 py-3">
      <button  class="btn btn-outline-primary btn-sm">Сохранить</button>
    </div>

  </form>
</template>

<script lang="js">
import { defineComponent } from 'vue';
// import axios from 'axios';

export default defineComponent({
  name: 'NewForm',

  props: {
    note: {
      type: Object,
      default() {
        return {
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
