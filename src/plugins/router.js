import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import Practice from '../pages/Practice.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/practice/:languages',
            name: 'practice',
            component: Practice,
            props: true,
        }
    ]
})