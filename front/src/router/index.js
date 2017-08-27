import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index.vue'
import Discover from '../pages/discover.vue'
import Search from '../pages/search.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {path: '/index',component: Index},
        {path: '/discover',component: Discover},
        {path: '/search',component: Search},
        {path: '*', redirect: '/index'}
    ]
})