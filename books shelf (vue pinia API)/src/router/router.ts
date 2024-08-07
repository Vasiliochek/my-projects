import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(''),
  routes: [
    {
      name: 'startPage',
      path: '/',
      component: () => import ('@/views/StartPageView.vue')
    },
    {
      name: 'allBooks',
      path: '/books',
      component: () => import ('@/views/BooksView.vue')
    },
    {
      name: 'readed',
      path: '/readed-books',
      component: () => import ('@/views/ReadedView.vue')
    },
    {
      name: 'shelf',
      path: '/shelf',
      component: () => import ('@/views/ShelfView.vue')
    },
    {
      name: 'not-found',
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/NotFoundView.vue'),
    }
  ]
})

export default router
