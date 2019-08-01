<template>
  <div class="dynamic-list">
    <gallery
      :imgs="imgs"
      v-if="showGallery"
      @close="handleGalleryClose"
    ></gallery>
    <div class="dynamic-item">
      <div class="user-info">
        <div class="img-wrapper">
          <img
            src="./profile.png"
            class="user-img"
          >
          <img
            src="./icon_daka.png"
            class="user-ifhave"
          >
        </div>
        <div class="user_details">
          <div class="user-name-wapper">
            <span class="user-name">尚币哥</span>
            <img
              src="./v3.png"
              class="tv-grade"
            >
          </div>
          <div class="dynamic-time">2018年7月23日</div>
        </div>
        <div class="btn-focus">
          <img
            src="./icon_add.png"
            class="focus-img"
          >关注
        </div>
      </div>
      <div class="dynamic-content">
        <img
          src="./icon-tg.png"
          class="promote-img"
        >
        <span class="content-text">钛值的各项工作都在稳步发展，做事，做势，做市，目前处于第二阶段</span>
      </div>
      <div
        class="img-wapper"
        @click="handleGalleryClick"
      >
        <img
          src="https://lianxiangfiles.oss-cn-beijing.aliyuncs.com/article/hvh2gvrc1c1548904651308.jpeg?x-oss-process=style/newsdetail"
          class="dynamic-img"
        >
      </div>
      <div class="dynamic-interactive border-top">
        <div class="interactive-item border-right">
          <img
            src="./icon_share.png"
            class="item-img"
          >
          <span class="item-number">23</span>
        </div>
        <div class="interactive-item border-right">
          <img
            src="./icon_like.png"
            class="item-img"
          >
          <span class="item-number">23</span>
        </div>
        <div class="interactive-item">
          <img
            src="./icon_comment.png"
            class="item-img"
          >
          <span class="item-number">23</span>
        </div>
      </div>
      <div class="dynamic-comment">
        <div class="comment-item">
          <p class="comment-name">追求者：</p>
          <p class="comment-content">我们一直跟随着，希望TV坚挺起希望TV坚挺起希望TV坚挺起希望TV坚挺起</p>
        </div>
        <div class="comment-item">
          <p class="comment-name">追求者：</p>
          <p class="comment-content">我们一直跟随着，希望TV坚挺起希望TV坚挺起希望TV坚挺起希望TV坚挺起</p>
        </div>
        <div class="comment-item">
          <p class="comment-name">追求者：</p>
          <p class="comment-content">我们一直跟随着，希望TV坚挺起希望TV坚挺起希望TV坚挺起希望TV坚挺起</p>
        </div>
        <div class="comment-footer border-top">查看全部评论 >></div>
      </div>
    </div>
    <div class="dynamic-item">
      <div class="user-info">
        <div class="img-wrapper">
          <img
            src="./profile.png"
            class="user-img"
          >
          <img
            src="./icon_daka.png"
            class="user-ifhave"
          >
        </div>
        <div class="user_details">
          <div class="user-name-wapper">
            <span class="user-name">尚币哥</span>
            <img
              src="./v3.png"
              class="tv-grade"
            >
          </div>
          <div class="dynamic-time">2018年7月23日</div>
        </div>
        <div class="btn-focus">
          <img
            src="./icon_add.png"
            class="focus-img"
          >关注
        </div>
      </div>
      <div class="dynamic-content">
        <img
          src="./icon-tg.png"
          class="promote-img"
        >
        <span class="content-text">钛值的各项工作都在稳步发展，做事，做势，做市，目前处于第二阶段</span>
      </div>
      <div
        class="img-wapper"
        @click="handleGalleryClick"
      >
        <img
          src="https://lianxiangfiles.oss-cn-beijing.aliyuncs.com/article/hvh2gvrc1c1548904651308.jpeg?x-oss-process=style/newsdetail"
          class="dynamic-img"
        >
      </div>
      <div class="dynamic-interactive border-top">
        <div class="interactive-item border-right">
          <img
            src="./icon_share.png"
            class="item-img"
          >
          <span class="item-number">23</span>
        </div>
        <div class="interactive-item border-right">
          <img
            src="./icon_like.png"
            class="item-img"
          >
          <span class="item-number">23</span>
        </div>
        <div class="interactive-item">
          <img
            src="./icon_comment.png"
            class="item-img"
          >
          <span class="item-number">23</span>
        </div>
      </div>
      <div class="dynamic-comment">
        <div class="comment-item">
          <p class="comment-name">追求者：</p>
          <p class="comment-content">我们一直跟随着，希望TV坚挺起希望TV坚挺起希望TV坚挺起希望TV坚挺起</p>
        </div>
        <div class="comment-item">
          <p class="comment-name">追求者：</p>
          <p class="comment-content">我们一直跟随着，希望TV坚挺起希望TV坚挺起希望TV坚挺起希望TV坚挺起</p>
        </div>
        <div class="comment-item">
          <p class="comment-name">追求者：</p>
          <p class="comment-content">我们一直跟随着，希望TV坚挺起希望TV坚挺起希望TV坚挺起希望TV坚挺起</p>
        </div>
        <div class="comment-footer border-top">查看全部评论 >></div>
      </div>
    </div>
    <div class="dynamic-item">
      <div class="user-info">
        <div class="img-wrapper">
          <img
            src="./profile.png"
            class="user-img"
          >
          <img
            src="./icon_daka.png"
            class="user-ifhave"
          >
        </div>
        <div class="user_details">
          <div class="user-name-wapper">
            <span class="user-name">尚币哥</span>
            <img
              src="./v3.png"
              class="tv-grade"
            >
          </div>
          <div class="dynamic-time">2018年7月23日</div>
        </div>
        <div class="btn-focus">
          <img
            src="./icon_add.png"
            class="focus-img"
          >关注
        </div>
      </div>
      <div class="dynamic-content">
        <img
          src="./icon-tg.png"
          class="promote-img"
        >
        <span class="content-text">钛值的各项工作都在稳步发展，做事，做势，做市，目前处于第二阶段</span>
      </div>
      <div
        class="img-wapper"
        @click="handleGalleryClick"
      >
        <img
          src="https://lianxiangfiles.oss-cn-beijing.aliyuncs.com/article/hvh2gvrc1c1548904651308.jpeg?x-oss-process=style/newsdetail"
          class="dynamic-img"
        >
      </div>
      <div class="dynamic-interactive border-top">
        <div class="interactive-item border-right">
          <img
            src="./icon_share.png"
            class="item-img"
          >
          <span class="item-number">23</span>
        </div>
        <div class="interactive-item border-right">
          <img
            src="./icon_like.png"
            class="item-img"
          >
          <span class="item-number">23</span>
        </div>
        <div class="interactive-item">
          <img
            src="./icon_comment.png"
            class="item-img"
          >
          <span class="item-number">23</span>
        </div>
      </div>
      <div class="dynamic-comment">
        <div class="comment-item">
          <p class="comment-name">追求者：</p>
          <p class="comment-content">我们一直跟随着，希望TV坚挺起希望TV坚挺起希望TV坚挺起希望TV坚挺起</p>
        </div>
        <div class="comment-item">
          <p class="comment-name">追求者：</p>
          <p class="comment-content">我们一直跟随着，希望TV坚挺起希望TV坚挺起希望TV坚挺起希望TV坚挺起</p>
        </div>
        <div class="comment-item">
          <p class="comment-name">追求者：</p>
          <p class="comment-content">我们一直跟随着，希望TV坚挺起希望TV坚挺起希望TV坚挺起希望TV坚挺起</p>
        </div>
        <div class="comment-footer border-top">查看全部评论 >></div>
      </div>
    </div>
  </div>
</template>

<script>
import Gallery from "../../common/Gallery";
export default {
  name: "DynamicList",
  components: {
    Gallery
  },
  data() {
    return {
      showGallery: false,
      imgs: [
        "http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png",
        "http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png"
      ]
    };
  },
  methods: {
    handleGalleryClick() {
      this.showGallery = true;
    },
    handleGalleryClose() {
      this.showGallery = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'

.dynamic-list
  background $backGroundColor
  .dynamic-item
    padding-bottom 0.1rem
    border-bottom $backGroundColor 0.2rem solid
    background $bgColor
    &:last-child
      border-bottom 0rem
    .dynamic-comment
      background $backGroundColor
      padding 0.1rem
      margin 0 0.1rem
      .comment-footer
        color #F97200
        padding-top 0.1rem
        margin-top 0.05rem
        line-height 0.5rem
      .comment-item
        display flex
        height 0.5rem
        line-height 0.5rem
        box-sizing border-box
        .comment-name
          color #2A2A2A
        .comment-content
          flex 1
          color #666666
          ellipsis()
    .dynamic-interactive
      overflow hidden
      height 0.8rem
      margin 0.1rem
      display flex
      flex-direction row
      .interactive-item
        margin auto 0
        text-align center
        flex 1
        height 0.5rem
        line-height 0.5rem
        .item-img
          height 0.35rem
        .item-number
          color #666666
    .img-wapper
      overflow hidden
      margin 0 0.1rem
      background #eeeeee
      height 0
      padding-bottom 35%
      border-radius 0.1rem
      .dynamic-img
        width 100%
    .dynamic-content
      padding 0.1rem
      .promote-img
        height 0.45rem
      .content-text
        color #2A2A2A
        font-size 0.3rem
        line-height 0.5rem
    .user-info
      padding-left 0.1rem
      display flex
      height 1.2rem
      .img-wrapper
        margin auto 0
        position relative
        height 1rem
        width 1rem
        .user-img
          height 1rem
          width 1rem
        .user-ifhave
          height 0.4rem
          width 0.35rem
          position absolute
          bottom 0
          right 0
      .user_details
        margin auto 0
        margin-left 0.2rem
        flex 1
        .user-name-wapper
          height 0.5rem
          line-height 0.5rem
          .user-name
            color #2A2A2A
            font-size 0.35rem
          .tv-grade
            height 0.35rem
            width 0.35rem
            position relative
            top -0.05rem
        .dynamic-time
          color #808080
      .btn-focus
        padding-top 0.05rem
        line-height 0.6rem
        text-align center
        margin auto 0.2rem auto 0
        height 0.6rem
        width 1.45rem
        border 0.01rem solid $color_yellow
        border-radius 0.1rem
        color $color_yellow
        font-size 0.05rem
        .focus-img
          margin-right 0.1rem
          position relative
          top -0.03rem
          width 0.2rem
          height 0.2rem
</style>