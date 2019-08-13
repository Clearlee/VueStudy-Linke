import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Mine from '@/components/mine/Mine'
import Msg from '@/components/msg/msg'
import News from '@/components/news/News'
import NewsComment from '@/components/news/comment/NewsComment'
import NewsDetail from '@/components/news/details/NewsDetails'
import FastNewsDetail from '@/components/fastnews/FastNewsDetails'
import UserInfo from '@/components/userinfo/UserInfo'
import MsgRecommend from '@/components/msg/recommend/Recommend'
import MsgDynamic from '@/components/msg/dynamic/MsgDynamic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      redirect: '/news',
      children: [
        {
          path: 'mine',
          name: 'Mine',
          component: Mine
        },
        {
          path: 'news',
          component: News
        },
        {
          path: 'newsdetail/:id',
          component: NewsDetail
        },
        {
          path: 'fastnewsdetail/:id',
          component: FastNewsDetail
        },
        {
          path: 'newscomment/:id',
          component: NewsComment
        },
        {
          path: 'msg',
          name: 'Msg',
          component: Msg,
          redirect: 'msg/recommend',
          children: [
            {
              path: 'recommend',
              name: 'MsgRecommend',
              component: MsgRecommend
            },
            {
              path: 'dynamic',
              name: 'MsgDynamic',
              component: MsgDynamic
            }
          ]
        }
      ]
    },
    {
      path: '/userinfo',
      name: 'UserInfo',
      component: UserInfo
    }
  ]
})
