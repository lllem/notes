<template>
  <div class="home">
    <NotesList msg="Notes"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NotesList from '@/components/NotesList.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    NotesList,
  },
});
</script>
