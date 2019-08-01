<template>
  <div class="comment-list">
    <div v-show="!comments.length" class="empty-wrapper">
      <img
        src="./icon_no_comment.png"
        class="empty-img"
      >
      <div class="empty">
        还没有评论，说点什么吧～
      </div>
    </div>
    <div
      class="comment-item border-bottom"
      v-for="(comment,index) in comments"
      :key="index"
      v-show="comments.length"
    >
      <div>
        <div class="first-item">
          <img
            :src="comment.userLogo"
            class="user-img"
          >
          <div class="first-content">
            <span class="user-name">{{comment.nickName}}</span>
            <div class="comment-content">{{comment.content}}</div>
          </div>
        </div>
        <span class="comment-time">
          {{comment.createTime}}
        </span>
      </div>
      <div
        class="second-wrapper border-top"
        v-show="comment.articleCommentDtos.length"
        v-for="(item,index) in comment.articleCommentDtos"
        :key="index"
      >
        <div class="second-item">
          <img
            :src="item.userLogo"
            class="user-img"
          >
          <div class="first-content">
            <div class="name-wrapper">
              <span class="user-name">{{item.nickName}}</span>
              <div class="right-triangle"></div>
              <span class="user-name">{{item.replayName}}</span>
            </div>
            <div class="comment-content">{{item.content}}</div>
          </div>
          <div class="comment-time">
            {{item.createTime}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { pageArticleComment } from "js/news/news.js";
export default {
  name: "CommentList",
  components: {},
  props: {
    comments: {
      type: Array,
      default: []
    }
  }
};
</script>

<style lang="stylus" scoped>
.comment-list
  .empty-wrapper
    text-align center
    .empty-img
      width 50%
      height auto
    .empty
      text-align center
      color #999999
      padding 0.3rem 0
      font-size 0.25rem
  .comment-item
    position relative
    .second-wrapper
      padding 0.2rem 0.12rem
      padding-left 0.9rem
      position relative
      .second-item
        display flex
        align-items center
        .user-img
          height 0.8rem
          width 0.8rem
          border-radius 50%
        .first-content
          margin-left 0.1rem
          flex 1
          .user-name
            color #2A2A2A
            font-size 0.25rem
            line-height 0.4rem
            font-weight 700
          .right-triangle
            width 0
            height 0
            display inline-block
            border-top 0.08rem solid transparent
            border-bottom 0.08rem solid transparent
            border-left 0.08rem solid #999999
          .comment-content
            color #999999
            font-size 0.25rem
            line-height 0.4rem
        .comment-time
          position absolute
          right 0.17rem
          top 0.2rem
          font-size 0.25rem
          color #808080
    .first-item
      padding 0.2rem 0.12rem
      display flex
      .user-img
        height 0.8rem
        width 0.8rem
        border-radius 50%
      .first-content
        margin-left 0.1rem
        flex 1
        .user-name
          color #2A2A2A
          font-size 0.25rem
          line-height 0.4rem
          font-weight 700
        .comment-content
          color #999999
          font-size 0.25rem
          line-height 0.4rem
    .comment-time
      position absolute
      right 0.17rem
      top 0.2rem
      font-size 0.25rem
      color #808080
</style>