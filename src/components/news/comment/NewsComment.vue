<template>
  <div class="news-comment">
    <top-bar title='评论'></top-bar>
    <scroll
      ref="scroll"
      :data='comments'
      class="comment-wrapper"
      :pullUpLoad='true'
      @pullingUp="handlePullingUp()"
    >
      <div>
        <comment-list :comments="comments"></comment-list>
      </div>
    </scroll>
  </div>
</template>

<script>
import TopBar from "common/topbar/TopBar.vue";
import Scroll from "common/Scroll.vue";
import { pageArticleComment } from "js/news/news.js";
import CommentList from "common/commentlist/CommentList.vue";
export default {
  components: {
    TopBar,
    Scroll,
    CommentList
  },
  activated() {
    this.currentPage = 1;
    this.id = this.$route.params.id;
    this.loadData();
  },
  data() {
    return {
      comments: [],
      currentPage: 1,
      hasNextPage: true
    };
  },
  methods: {
    loadData() {
      this._pageArticleComment(this.id);
    },
    _pageArticleComment(id) {
      pageArticleComment(id, this.currentPage).then(res => {
        if (res.data && res.data.success) {
          if (this.currentPage === 1) {
            this.comments = [];
          }
          this.comments = this.comments.concat(res.data.data.list);
          console.log(
            "pageNumber=" + this.currentPage + ",length=" + this.comments.length
          );
          this.hasNextPage = res.data.data.hasNextPage;
        }
      });
    },
    handlePullingUp() {
      if (this.hasNextPage) {
        this.currentPage++;
        this.loadData();
      } else {
        this.$refs.scroll.changePullUpDirty();
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.news-comment
  height 100%
  background white
  width 100%
  position fixed
  z-index 101
  .comment-wrapper
    position absolute
    top 1rem
    left 0
    overflow hidden
    bottom 0
    z-index 102
</style>


