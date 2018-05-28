import Vue from 'vue'
import Router from 'vue-router'
import List from '../components/List/List'
import Token from '../components/Token/Token'
import GistContent from '../components/GistContent/GistContent'

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'List',
			component: List
		},
		{
			path: '/token',
			name: 'Token',
			component: Token
		},
		{
			path: '/gist-content/:id',
			name: 'Gist content',
			component: GistContent
		}
	]
})
