<template>
  <div class="taglist">
    <div class="header">
      <img :src="imgs" class="img">
      <div class="title border-bottom">{{title}}</div>
    </div>
    <div class="content">
      <ul class="tag-wrapper">
        <li class="tag" v-for="(tag,key) in tags" :key="key">{{tag}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "TagList",
  props: {
    imgs: {
      type: String
    },
    title: {
      type: String,
      default: "我的标签"
    },
    tags: {
      type: Array,
      default: []
    }
  },
  components: {}
};
</script>

<style lang="stylus" scoped>
.taglist
  .header
    display flex
    height 1rem
    line-height 1rem
    align-items center
    .img
      width 0.6rem
      height 0.6rem
    .title
      box-sizing border-box
      flex 1
      margin-left 0.1rem
      color #2A2A2A
      font-size 0.35rem
  .content
    padding 0.1rem 0.15rem 0 0.7rem
    .tag-wrapper
      display flex
      flex-wrap wrap
      .tag
        line-height 0.5rem
        box-sizing border-box
        border 0.01rem solid #FFBB7F
        padding 0.08rem 0.3rem
        border-radius 0.5rem
        margin .2rem .2rem 0 0
        &:last-child
          margin-right 0
</style>