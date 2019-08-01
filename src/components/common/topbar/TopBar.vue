<template>
  <div class="topbar border-bottom">
    <div class="img-wrapper">
      <img
        src="./back.png"
        class="icon-back"
        @click="back"
      >
    </div>
    <span class="title">{{title}}</span>
    <slot name="right-icon"></slot>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String
  },
  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'

.topbar
  line-height $headerHeight
  background $bgColor
  height $headerHeight
  text-align center
  .title
    font-size 0.4rem
    color $darkTextColor
  .img-wrapper
    position absolute
    left 0
    top 0
    width $headerHeight
    height $headerHeight
    .icon-back
      width 0.25rem
      height 0.45rem
</style>
