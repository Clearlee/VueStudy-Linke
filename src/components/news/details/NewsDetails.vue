<template>
  <div class="newsDeatail">
    <top-bar title='资讯'></top-bar>
    <scroll
      class="scroll"
      ref="scroll"
      :data="comments"
    >
      <div>
        <div class="news-content">
          <h1 class="news-title">
            {{data.title}}
          </h1>
          <div class="news-des">
            <img
              :src="data.sourceLogo"
              class="news-img"
            >
            <div class="middle-content">
              <div class="news-source">{{data.source}}</div>
              <div class="news-time">{{data.createTime}}</div>
            </div>
            <div class="focus-wrapper">
              <span class="focus">关注</span>
            </div>
          </div>
          <div class="news-summary">
            <p class="summary">{{data.summary}}</p>
          </div>
          <div
            v-html="data.content"
            class="news-html"
          ></div>
          <div class="news-summary">
            <p class="summary">声明：BTC123登载此文出于传递更多信息之目的，并不意味着赞同其观点或证实其描述。文章内容仅供参考，不构成投资建议。</p>
          </div>
          <div class="news-tags">
            <span class="tag-item">区块链</span>
            <span class="tag-item">区块链</span>
            <span class="tag-item">区块链</span>
          </div>
        </div>

        <div class="comment-wrapper">
          <div class="comment-header border-bottom">
            用户评论（{{allComments.length}}）
          </div>
          <comment-list
            :id="this.$route.params.id"
            :comments="comments"
          ></comment-list>
          <div
            @click="jumpToCommentList()"
            class="comment-footer"
            v-show="allComments.length>10"
          >
            查看全部评论 >>
          </div>
        </div>
      </div>
    </scroll>

    <div class="footer border-top">
      <div
        class="add-comment"
        @click.stop="openDialog()"
      >说点什么吧…</div>
      <div class="news-control">
        <img
          src="./icon_comment.png"
          class="control-img"
        >
        <span class="number">0</span>
        <img
          src="./icon_collection.png"
          class="control-img"
        >
        <img
          src="./icon_like.png"
          class="control-img"
        >
        <span class="number">0</span>
      </div>
    </div>

    <transition name='dialog'>
      <div
        class="dialog-wrapper"
        v-show="showDialog"
      >
        <comment-dialog
          @dismiss='closeDialog()'
          :articleId='parseInt(id)'
          :parentId='parentId'
          @success='_pageArticleComment(id)'
        ></comment-dialog>
      </div>
    </transition>
  </div>
</template>

<script>
import TopBar from "common/topbar/TopBar.vue";
import Scroll from "common/Scroll.vue";
import CommentList from "common/commentlist/CommentList.vue";
import CommentDialog from "common/CommentDialog.vue";
import { findArticleDetailById, pageArticleComment } from "js/news/news.js";
export default {
  name: "newsDeatail",
  components: {
    TopBar,
    Scroll,
    CommentList,
    CommentDialog
  },
  activated() {
    this.$refs.scroll.scrollTo(0, 0);
    this.id = this.$route.params.id;
    this.loadData(this.id);
  },
  data() {
    return {
      data: {},
      comments: [],
      allComments: [],
      showDialog: false,
      parentId: 0,
      id: 0
    };
  },
  methods: {
    loadData(id) {
      this._findArticleDetailById(id);
      this._pageArticleComment(id);
    },
    _findArticleDetailById(id) {
      findArticleDetailById(id).then(res => {
        if (res.data && res.data.success) {
          this.data = res.data.data;
          // this.$nextTick(() => {
          //   this.$refs.scroll.refresh();
          // });
          setTimeout(() => {
            this.$refs.scroll.refresh();
          }, 2500);
        }
      });
    },
    _pageArticleComment(id) {
      pageArticleComment(id, 1).then(res => {
        if (res.data && res.data.success) {
          this.comments = [];
          this.allComments = res.data.data.list;
          if (res.data && this.allComments.length > 10) {
            for (let i = 0; i < 10; i++) {
              this.comments.push(this.allComments[i]);
            }
          } else {
            this.comments = this.allComments;
          }
        }
      });
    },
    jumpToCommentList() {
      this.$router.push({
        path: `/newscomment/${this.id}`
      });
    },
    openDialog() {
      this.showDialog = true;
    },
    closeDialog() {
      this.showDialog = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
.newsDeatail
  position fixed
  width 100%
  background white
  z-index 101
  height 100%
  .dialog-enter, .dialog-leave-to
    transform translate3d(0, 100%, 0)
  .dialog-enter-active, .dialog-leave-active
    transition all 0.4s
  .dialog-wrapper
    position fixed
    left 0
    bottom 0
    width 100%
    top 0
  .footer
    position fixed
    bottom 0
    height 1rem
    background white
    display flex
    width 100%
    align-items center
    .add-comment
      margin-left 0.16rem
      padding-left 0.2rem
      line-height 0.6rem
      width 3rem
      height 0.6rem
      border-radius 1rem
      background #E6E6E6
      color #999999
      font-size 0.35rem
    .news-control
      z-index 102
      flex 1
      display flex
      justify-content flex-end
      align-items center
      padding-right 0.12rem
      .control-img
        width 0.6rem
        height 0.6rem
        margin-right 0.2rem
        &:nth-of-type(2)
          margin-right 0.4rem
      .number
        color #666666
        margin-right 0.4rem
        font-size 0.35rem
        &:last-child
          margin-right 0
  .scroll
    position absolute
    overflow hidden
    top 1rem
    bottom 1rem
    width 100%
  .comment-wrapper
    .comment-header
      padding-left 0.12rem
      border-top solid 0.2rem #F6F6F6
      line-height 0.8rem
      color #2A2A2A
      font-size 0.3rem
    .comment-footer
      line-height 0.8rem
      font-size 0.3rem
      color #999999
      text-align center
  .news-content
    padding 0.15rem 0.16rem
    .news-title
      color #333333
      font-size 0.45rem
      line-height 0.6rem
    .news-des
      display flex
      margin-top 0.2rem
      align-items center
      height 1rem
      .news-img
        width 0.8rem
        height 0.8rem
        border-radius 50%
      .middle-content
        flex 1
        margin-left 0.1rem
        .news-source
          line-height 0.4rem
          color #333333
        .news-time
          line-height 0.4rem
          color #9B9B9B
      .focus-wrapper
        text-align center
        line-height 0.6rem
        width 1.3rem
        height 0.6rem
        border-radius 0.1rem
        border solid 0.01rem #F97200
        .focus
          color #F97200
    .news-html>>>img
      max-width 100% !important
      height auto !important
      border-radius 0.1rem
    .news-html>>>p
      font-size 0.4rem !important
      line-height 0.6rem !important
      color #333333 !important
    .news-summary
      margin-bottom 0.2rem
      margin-top 0.14rem
      background #F6F6F6
      border-radius 0.1rem
      padding 0.15rem 0.2rem
      .summary
        font-size 0.3rem
        line-height 0.5rem
        color #999999
    .news-tags
      margin-top 0.2rem
      display flex
      flex-wrap nowrap
      .tag-item
        width 1.5rem
        height 0.6rem
        border-radius 0.5rem
        background #F6F6F6
        color #808080
        text-align center
        line-height 0.6rem
        margin-right 0.2rem
        &:last-child
          margin-right 0
</style>