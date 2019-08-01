export const BASE_URL = 'https://apioperate.btc123.com'

const axios = require('axios')

export function get(url, params) {
  return axios.get(BASE_URL + url, {
    params: params
  })
}

export function post(url, data) {
  return axios({
    url: BASE_URL + url,
    method: 'post',
    data: data,
    transformRequest: [
      function(data) {
        // Do whatever you want to transform the data
        let ret = ''
        for (let it in data) {
          ret +=
            encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
      }
    ],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

export function postBody(url, data) {
  return axios({
    url: BASE_URL + url,
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'application/json',
      'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvcmlnaW4iOjIsInVzZXJUeXBlIjoxLCJ1c2VySWQiOjExNTY5NzgsImRldmljZUlkIjoiMjU1YWJkOGVkMWY1ZmQwMSJ9.1SyeU6AW73XEdE3a12mp9HBg9cEmqIj09loc9RzvFxc'
    }
  })
}
