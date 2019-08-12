import { post, get, postBody } from '../base'

export function selectPageFlashNews() {
  const url = '/api/content/selectPageFlashNews'
  return get(url, {
    pageNumber: 1,
    pageSize: 10
  })
}

export function findArticleDetailById(id) {
  const url = '/api/content/findArticleDetailById'
  return get(url, {
    id: id
  })
}
