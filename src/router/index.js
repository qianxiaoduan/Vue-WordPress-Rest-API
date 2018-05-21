import Vue from 'vue'
import Router from 'vue-router'
import ArticleList from '@/components/articleList'
import Article from '@/components/article'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'ArticleList',
            component: ArticleList
        },
        {
            path: '/article/:id',
            name: 'Article',
            component: Article
        }
    ]
})
