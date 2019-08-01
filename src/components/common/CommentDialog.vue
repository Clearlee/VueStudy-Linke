<template>
  <div class="comment-dialog">
    <div
      class="dialog-bg"
      @click="close()"
    >
    </div>
    <div class="comment-wrapper">
      <div class="header border-bottom">
        <span
          class="btn"
          @click="close()"
        >取消</span>
        <span
          class="btn"
          @click="submmit()"
        >发布</span>
      </div>
      <textarea
        type="text"
        class="comment-content"
        placeholder="说点什么吧…"
        v-model="value"
      ></textarea>
    </div>
  </div>
</template>

<script>
import { addArticleComment } from "js/news/news.js";
export default {
  components: {},
  methods: {
    close() {
      this.$emit("dismiss");
    },
    submmit() {
      if (!this.value) {
        alert("请输入内容");
        return;
      }

      addArticleComment(this.articleId, this.value, this.parentId).then(res => {
        if (res.data && res.data.success) {
          this.close();
          this.$emit("success");
        }
      });
    }
  },
  data() {
    return {
      value: ""
    };
  },
  props: {
    articleId: {
      type: Number,
      default: 0
    },
    parentId: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style lang="stylus" scoped>
.comment-dialog
  height 100%
  .dialog-bg
    height 100%
    width 100%
    background-color rgba(0, 0, 0, 0.5)
  .comment-wrapper
    height 4rem
    background white
    position absolute
    width 100%
    bottom 0
    border-radius 0.2rem 0.2rem 0 0
    .header
      height 1rem
      display flex
      align-items center
      justify-content space-between
      padding 0 0.32rem
      .btn
        color #999999
        font-size 0.35rem
    .comment-content
      box-sizing border-box
      padding 0.2rem 0.35rem
      height 3rem
      width 100%
</style>