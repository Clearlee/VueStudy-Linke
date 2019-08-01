<template>
  <div class="navbottom border-top">
    <router-link
      to="/news"
      v-on:click.native="handleItemChange(0)"
      class="nav-item"
    >
      <img
        :src="index===0?require('./main_bottom_news_checked.png'):require('./main_bottom_news_normal.png')"
        class="item-img"
      >
    </router-link>

    <router-link
      to="/msg"
      v-on:click.native="handleItemChange(1)"
      class="nav-item"
    >
      <img
        :src="index===1?require('./main_bottom_msg_checked.png'):require('./main_bottom_msg_normal.png')"
        class="item-img"
      >
    </router-link>

    <router-link
      to="/mine"
      v-on:click.native="handleItemChange(2)"
      class="nav-item"
    >
      <img
        :src="index===2?require('./main_bottom_mine_checked.png'):require('./main_bottom_mine_normal.png')"
        class="item-img"
      >
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Bottom",
  data() {
    return {
      index: 0
    };
  },
  methods: {
    handleItemChange(index) {
      this.index = index;
    }
  },
  mounted() {}
};
</script>

<style lang="stylus" scoped>
.navbottom
  display flex
  z-index 99
  position fixed
  left 0
  bottom 0
  right 0
  height 1rem
  background white
  .nav-item
    flex 1
    text-align center
    line-height 1rem
    .item-img
      height 0.8rem
</style>