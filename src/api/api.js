import axios from 'axios';

let base = 'http://example.com/wp-json/wp/v2';

//获取文章列表
export const getArticleList = params => {
    return axios.get(`${base}/posts`, params).then();
};
//获取单篇文章
export const getArticle = ids => {
    return axios.get(`${base}/posts/${ids}`).then(res => res.data);
};
//获取文章分类
export const getCategories= params => {
    return axios.get(`${base}/categories`, params).then(res => res.data);
};