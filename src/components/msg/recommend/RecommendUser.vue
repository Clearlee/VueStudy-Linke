<template>
  <div class="recommend-user" ref="wrapper">
    <div class="item-wrapper" ref="content">
      <div class="item-container" ref="imgContainer">
        <div class="user-item">
          <img src="./icon_mine_placeholder.png" class="user-img">
          <img src="./icon_hot.png" class="hot-img">
        </div>
        <div class="user-item">
          <img src="./icon_mine_placeholder.png" class="user-img">
          <img src="./icon_hot.png" class="hot-img">
        </div>
        <div class="user-item">
          <img src="./icon_mine_placeholder.png" class="user-img">
          <img src="./icon_hot.png" class="hot-img">
        </div>
        <div class="user-item">
          <img src="./icon_mine_placeholder.png" class="user-img">
          <img src="./icon_hot.png" class="hot-img">
        </div>
        <div class="user-item">
          <img src="./icon_mine_placeholder.png" class="user-img">
          <img src="./icon_hot.png" class="hot-img">
        </div>
        <div class="user-item">
          <img src="./icon_mine_placeholder.png" class="user-img">
          <img src="./icon_hot.png" class="hot-img">
        </div>
        <div class="user-item">
          <img src="./icon_mine_placeholder.png" class="user-img">
          <img src="./icon_hot.png" class="hot-img">
        </div>
        <div class="user-item">
          <img src="./icon_mine_placeholder.png" class="user-img">
          <img src="./icon_hot.png" class="hot-img">
        </div>
        <div class="user-item">
          <img src="./icon_mine_placeholder.png" class="user-img">
          <img src="./icon_hot.png" class="hot-img">
        </div>
      </div>
      <div class="item-container" ref="imgContainer">
        <div class="user-item">
          <img src="./icon_mine_placeholder.png" class="user-img">
          <img src="./icon_hot.png" class="hot-img">
        </div>
        <div class="user-item">
          <img src="./icon_mine_placeholder.png" class="user-img">
          <img src="./icon_hot.png" class="hot-img">
        </div>
        <div class="user-item">
          <img src="./icon_mine_placeholder.png" class="user-img">
          <img src="./icon_hot.png" class="hot-img">
        </div>
        <div class="user-item">
          <img src="./icon_mine_placeholder.png" class="user-img">
          <img src="./icon_hot.png" class="hot-img">
        </div>
        <div class="user-item">
          <img src="./icon_mine_placeholder.png" class="user-img">
          <img src="./icon_hot.png" class="hot-img">
        </div>
        <div class="user-item">
          <img src="./icon_mine_placeholder.png" class="user-img">
          <img src="./icon_hot.png" class="hot-img">
        </div>
        <div class="user-item">
          <img src="./icon_mine_placeholder.png" class="user-img">
          <img src="./icon_hot.png" class="hot-img">
        </div>
        <div class="user-item">
          <img src="./icon_mine_placeholder.png" class="user-img">
          <img src="./icon_hot.png" class="hot-img">
        </div>
        <div class="user-item">
          <img src="./icon_mine_placeholder.png" class="user-img">
          <img src="./icon_hot.png" class="hot-img">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "RecommendUser",
  components: {},
  mounted() {
    this.$nextTick(() => {
      this.initScroll();
    });
  },
  methods: {
    initScroll() {
      let width = 1.2;
      let margin = 0.2;
      let total = (width + margin) * 9 - margin + "rem";
      this.$refs.content.style.width = total;
      this.$nextTick(() => {
        this.picScroll = new BScroll(this.$refs.wrapper, {
          scrollX: true,
          eventPassthrough: "vertical" //忽略竖直方向的滚动
        });
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.recommend-user
  .item-container
    display flex
    height 1.8rem
    line-height 1.8rem
    .user-item
      position relative
      text-align center
      margin-top 0.3rem
      width 1.2rem
      height 1.2rem
      border 0.01rem #F79522 solid
      border-radius 1rem
      margin-right 0.2rem
      &:last-child
        margin-right 0rem
      .user-img
        margin-top 0.05rem
        vertical-align top
        width 1.1rem
        height 1.1rem
      .hot-img
        position absolute
        width 0.3rem
        height 0.3rem
        right 0
        bottom 0
</style>