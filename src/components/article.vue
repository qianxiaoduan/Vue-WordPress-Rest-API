<template>
    <div v-loading.fullscreen.lock="loading">
        <div v-show="open==1">
            <div class="container">
                <el-col class="article">
                    <span class="return" @click="returnList"><< 返回列表</span>
                    <h1 class="article-h1" v-html="articleData.title.rendered"></h1>
                    <p class="p"><span>作者：{{authorName}}</span><span>发布时间：{{articleData.date.replace(/T.*/g,'')}}</span></p>
                    <div v-html="articleData.content.rendered"></div>
                </el-col>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        getArticle,
        getAuthor
    } from '../api/api';
    export default {
        data () {
            return {
                articleData: {
                    title: {
                        rendered: ''
                    },
                    content: {
                        rendered: ''
                    },
                    author: '',
                    date: '',
                },
                open: 0,
                loading: true,
                authorName:''
            }
        },
        mounted: function () {
            this.getarticle()
        },
        methods: {
            getarticle(){
                let ids = this.$route.params.id
                getArticle(ids).then(res => {
                    this.articleData = res
                    this.open = 1
                    this.loading = false
                    let ids=res.author
                    getAuthor(ids).then(res => {
                        this.authorName=res.name
                    })
                })
            },
            returnList(){
                this.$router.push({
                    path: '/'
                })
            },

        }
    }
</script>

