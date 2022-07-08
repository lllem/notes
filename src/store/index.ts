import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    notes: [],
  },
  getters: {
    notes: (state) => state.notes,
  },
  mutations: {
    SET_NOTES(state, notes) {
      state.notes = notes;
    },
  },
  actions: {

    async fetchNotes({ commit }) {
      try {
        const data = await axios.get('http://localhost:3000/notes');
        commit('SET_NOTES', data.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {
  },
});
