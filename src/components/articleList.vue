<template>
    <div v-loading.fullscreen.lock="loading">
        <div v-show="open==1">
            <div class="header">
                <div class="container">
                    <div class="logo" @click="logo">LOGO</div>
                    <div class="menu">
                        <ul>
                            <li @click="logo" :class="{ 'active': active == 0 }">全部分类</li>
                            <li v-for="(item,index) in categoriesData" @click="categorie(index)"
                                :class="{ 'active': active == index+1 }">{{item.name}}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <el-col>
                <div class="container">
                    <el-col class="article-list">
                        <ul>
                            <li v-for="(item,index) in articleData" @click="article(index)">
                                <h1 v-html="item.title.rendered"></h1>
                                <div class="article-rendered" v-html="item.content.rendered"></div>
                                <span @click="article(index)">查看详情</span>
                            </li>
                            <p v-if="total<1">该分类下没有文章</p>
                        </ul>
                    </el-col>
                </div>
                <div class="container">
                    <div class="pagination">
                        <el-col>
                            <el-pagination v-if="total>0"
                                           layout="prev, pager, next" :page-size="per_page"
                                           :total="total" @current-change="handleCurrentChange">
                            </el-pagination>
                        </el-col>
                    </div>
                </div>
            </el-col>
        </div>
    </div>
</template>

<script>
    import {
        getArticleList,
        getCategories
    } from '../api/api';
    export default {
        data () {
            return {
                articleData: [{
                    title: {
                        rendered: ''
                    },
                    excerpt: {
                        rendered: ''
                    },
                    content: {
                        rendered: ''
                    }
                }],
                per_page: 10,
                page: 1,
                total: 0,
                categories: null,
                categoriesData: [{}],
                active: 0,
                open: 0,
                loading: true
            }
        },
        mounted: function () {
            this.getarticlelist()
            this.getcategories()
        },
        methods: {
            getarticlelist(){
                let params = {
                    page: this.page,
                    per_page: this.per_page,
                    categories: this.categories
                }
                getArticleList({params}).then(res => {
                    let headerData = Object.values(res.headers)
                    this.articleData = res.data
                    this.total = parseInt(headerData[2])
                    this.open = 1
                    this.loading = false
                })
            },
            article(index){
                let ids = this.articleData[index].id
                this.$router.push({
                    path: '../article/' + ids
                })
            },
            handleCurrentChange(val) {
                this.loading = true
                this.page = val
                this.getarticlelist()
            },
            getcategories(){
                getCategories().then(res => {
                    this.categoriesData = res
                })
            },
            categorie(index){
                this.loading = true
                this.categories = this.categoriesData[index].id
                this.page = 1
                this.active = index+1
                this.getarticlelist()
            },
            logo(){
                let params = {
                    page: this.page,
                    per_page: this.per_page,
                }
                this.loading = true
                this.active=0
                getArticleList({params}).then(res => {
                    let headerData = Object.values(res.headers)
                    this.articleData = res.data
                    this.total = parseInt(headerData[2])
                    this.open = 1
                    this.loading = false
                })
            },
        }
    }
</script>

