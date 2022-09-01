import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/AboutView.vue')
  },
  {
    path: "/projects",
    name: "projects",
    component: () => import('@/views/ProjectsView.vue')
  },
  {
    path: "/blog",
    name: "Blog",
    component: () => import('@/views/BlogView.vue')
  },
  {
    path: "/cv",
    name: "CV",
    component: () => import('@/views/CvView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
      path: "/blog/:post",
      component: () => import('@/views/BlogPostView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
