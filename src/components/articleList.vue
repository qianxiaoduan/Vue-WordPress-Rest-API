<template>
    <el-row v-loading="loading" class="loading">
        <el-col v-show="open==1">
            <el-col class="menu">
                <ul>
                    <li v-for="(item,index) in categoriesData" @click="categorie(index)"
                        :class="{ 'active': active == index }">{{item.name}}
                    </li>
                </ul>
            </el-col>
            <el-col class="article">
                <ul>
                    <li v-for="(item,index) in articleData">
                        <h1 v-html="item.title.rendered" @click="article(index)"></h1>
                        <div class="abc" v-html="item.excerpt.rendered"></div>
                        <span @click="article(index)">查看详情</span>
                    </li>
                    <p v-if="total<1">该分类下没有文章</p>
                </ul>
                <el-col>
                    <el-pagination v-if="total>0"
                            layout="prev, pager, next" :page-size="per_page"
                            :total="total" @current-change="handleCurrentChange">
                    </el-pagination>
                </el-col>
            </el-col>
        </el-col>
    </el-row>
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
                    }
                }],
                per_page: 5,
                page: 1,
                total: 0,
                categories: null,
                categoriesData: [{}],
                active: null,
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
                    console.log(res);
                    this.categoriesData = res
                })
            },
            categorie(index){
                this.loading = true
                this.categories = this.categoriesData[index].id
                this.page = 1
                this.active = index
                this.getarticlelist()
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
    h1, h2 {
        font-weight: normal;
        font-size: 16px;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    .loading {
        min-height: 500px
    }

    a {
        color: #42b983;
    }

    .more-link {
        display: none
    }

    .article {
        max-width: 1170px;
        margin: 0 auto;
        padding: 0 20px;
        > ul li {
            border-bottom: 1px solid #d6d6d6;
            padding: 20px 0;
            p {
                font-size: 14px
            }
            span {
                font-size: 13px;
                color: #42b983
            }
        }
    }

    .menu {
        ul {
            li {
                display: inline-block;
                padding: 10px 20px;
                cursor: pointer;
                &.active {
                    color: #42b983
                }
            }
        }
    }
</style>
