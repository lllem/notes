<template>
  <NoteForm class="container py-5"/>
</template>

<script lang="js">
import { defineComponent } from 'vue';
import NoteForm from '@/components/NoteForm.vue';

export default defineComponent({
  name: 'NewNote',

  data() {
    return {
      note: {},
    };
  },

  components: {
    NoteForm,
  },
});
</script>

<style scoped lang="scss">
.note {
}
</style>
