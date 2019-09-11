import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'ArticleList',
            component: require('@views/articleList.vue').default
        },
        {
            path: '/article/:id',
            name: 'Article',
            component: require('@views/article.vue').default
        }
    ]
})
