import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {path: '/', redirect: '/bookmark'},
    {path: '/bookmark', name: 'bookmark', component: () => import('@/view/bookmark/Bookmark.vue')},
    {path: '/wiki', name: 'wiki', component: () => import('@/view/wiki/Wiki.vue')},
  ]
})

export default router