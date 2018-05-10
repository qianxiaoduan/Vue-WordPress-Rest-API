<template>
    <el-row>
        <el-col class="article">
            <h1 v-html="articleData.title.rendered">3</h1>
            <p class="p"><span>作者：{{articleData.author}}</span><span>发布时间：{{articleData.date}}</span></p>
            <div v-html="articleData.content.rendered"></div>
        </el-col>
    </el-row>
</template>

<script>
    import {
        getArticle
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
                    date: ''
                }
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
                    console.log(this.articleData)
                })
            },

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
    .article {
        max-width: 1170px;
        margin: 0 auto;
        padding: 0 20px;
        h1 {
            font-size: 18px
        }
        .p{font-size: 14px;border-bottom: 1px solid #d6d6d6;padding-bottom: 15px;padding-top: 15px;
            span{padding-right: 40px}
        }
        pre {
            padding: 20px;
            background: #f5f5f5
        }
    }
</style>
