<template>
  <div class="notes-list container px-0 py-5 border-top">

    <NoteCard
    v-for="note in notes"
    :key="`note_${ note.id }`"
    :note="note"
    />

  </div>
</template>

<script lang="js">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import NoteCard from '@/components/NoteCard.vue';

export default defineComponent({
  name: 'NotesList',

  components: {
    NoteCard,
  },

  computed: {
    ...mapGetters([
      'notes',
    ]),
  },

  created() {
    this.$store.dispatch('fetchNotes');
  },
});
</script>

<style scoped lang="scss">
</style>
