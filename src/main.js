import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App.vue'
import Members from './components/Members.vue'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
  {path: '/', component: Members}
]

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes
})

new Vue({
  router,
  template: `
    <div id="app">
      <router-view></router-view>
    </div>
  `
}).$mount('#app')
