import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/electron-vue',
            name: 'landing-page',
            component: require('@/components/LandingPage').default
        },
        {
            path: '*',
            redirect: '/'
        },
        {
            path: '/hello',
            name: 'hello-page',
            component: require('@/components/Hello').default
        },
        {
            path: '/',
            name: 'markdown-page',
            component: require('@/components/Markdown').default
        },
    ]
})
