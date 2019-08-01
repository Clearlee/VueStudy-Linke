<template>
  <div class="msg">
    <div class="header">
      <router-link
        to="/msg/recommend"
        class="item"
      >
        <span
          class="item"
          :class="{'select':index===0}"
          @click="handleChangeIndex(0)"
        >推荐</span>
      </router-link>
      <router-link
        to="/msg/dynamic"
        class="item"
      >
        <span
          class="item"
          :class="{'select':index===1}"
          @click="handleChangeIndex(1)"
        >动态</span>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Recommend from "./recommend/Recommend";
import DynamicList from "./dynamic/DynamicList";
export default {
  name: "Message",
  data() {
    return {
      index: 0
    };
  },
  methods: {
    handleChangeIndex(index) {
      this.index = index;
    }
  },
  components: {
    Recommend,
    DynamicList
  }
};
</script>

<style lang="stylus" scoped>
.msg
  .dynamic-wrapper
    position absolute
    top 1rem
    left 0
    width 100%
    bottom 1rem
    overflow hidden
  .header
    height 1rem
    line-height 1rem
    width 100%
    text-align center
    .item
      font-size 0.35rem
      margin-right 0.5rem
      color #999999
      &:last-child
        margin-right 0
      &.select
        color #2C2C2C
        font-weight 700
</style>

