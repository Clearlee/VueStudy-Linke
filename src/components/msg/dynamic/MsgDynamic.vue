<template>
  <div
    class="msgdynamic"
    ref="dynamicWrapper"
  >
    <div>
      <dynamic-list></dynamic-list>
    </div>
  </div>
</template>

<script>
import DynamicList from "./DynamicList.vue";
import BScroll from "better-scroll";
export default {
  name: "MsgDynamic",
  components: {
    DynamicList
  },
  mounted() {
    this.$nextTick(() => {
      this._initScroll();
    });
  },
  methods: {
    _initScroll() {
      this.recommendScroll = new BScroll(this.$refs.dynamicWrapper, {
        click: true
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.msgdynamic
  position absolute
  overflow hidden
  top 1rem
  width 100%
  bottom 1rem
</style>


