import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App.vue'
import Members from './components/Members.vue'
import AddMember from './components/AddMember.vue'
import DetailsMember from './components/DetailsMember.vue'
import EditMember from './components/EditMember.vue'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
	{path: '/', component: Members},
	{path: '/members', component: Members},
	{path: '/add', component: AddMember},
	{path: '/member/:id', component: DetailsMember},
	{path: '/edit/:id', component: EditMember}
]

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes
})

new Vue({
	router,
	template: '<App/>',
	components: {App}
}).$mount('#app')
