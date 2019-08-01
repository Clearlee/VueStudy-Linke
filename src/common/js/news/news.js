import { post, get, postBody } from '../base'

//加载栏目列表
export function loadCategorysData() {
  const url = '/api/content/selectCategory'
  return get(url)
}

//首页热门文章推荐
export function findHotArticle() {
  const url = '/api/content/findHostArticle'
  return get(url)
}

//相关推荐文章
export function findArticleRecommend(categoryId) {
  const url = '/api/content/findArticleRecommend'
  return get(url, {
    categoryId: categoryId
  })
}

export function findArticleByCategoryId(categoryId) {
  const url = '/api/content/findArticleByCategoryId'
  return get(url, {
    categoryId: categoryId === 1 ? '' : categoryId,
    pageNumber: 1,
    pageSize: 10
  })
}

//首页广告位
export function queryAdvertFront(positionId) {
  const url = '/api/marketing/noAuth/queryAdvertFront'
  return post(url, {
    positionId: positionId,
    flag: 0
  })
}

export function findArticleDetailById(id) {
  const url = '/api/content/findArticleDetailById'
  return get(url, {
    id: id
  })
}

//获取文章评论数据
export function pageArticleComment(id, pageNumber) {
  const url = '/api/content/pageArticleComment'
  return get(url, {
    articleId: id,
    pageNumber: pageNumber,
    pageSize: 20
  })
}

//添加评论
export function addArticleComment(articleId, content, parentId) {
  const url = '/api/content/addArticleComment'
  return postBody(url, {
    articleId: articleId,
    content: content,
    parentId: parentId
  })
}
