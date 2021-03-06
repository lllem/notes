import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/notes/:id',
    name: 'note',
    props: true,
    component: () => import('../views/NoteView.vue'),
  },
  {
    path: '/notes/new',
    name: 'newNote',
    component: () => import('../views/NewNoteView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
