import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Members',
    component: () => import(/* webpackChunkName: "about" */ '../components/Members.vue')
  },
  {
    path: '/members',
    name: 'Members',
    component: () => import(/* webpackChunkName: "about" */ '../components/Members.vue')
  },
  {
    path: '/offices',
    name: 'Offices',
    component: () => import(/* webpackChunkName: "about" */ '../components/Office.vue')
  },
  {
    path: '/add',
    name: 'Add Members',
    component: () => import(/* webpackChunkName: "about" */ '../components/AddMember.vue')
  },
  {
    path: '/member/:id',
    name: 'Details Member',
    component: () => import(/* webpackChunkName: "about" */ '../components/DetailsMember.vue')
  },
  {
    path: '/edit/:id',
    name: 'Edit Member',
    component: () => import(/* webpackChunkName: "about" */ '../components/EditMember.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
