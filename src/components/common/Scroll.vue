<template>
  <div
    class="wrapper"
    ref="scroll"
  >
    <div>
      <slot
        :pullUpLoad="pullUpLoad"
        :isPullUpLoad="isPullUpLoad"
      ></slot>
      <div
        class="pullup-wrapper"
        v-if="pullUpLoad"
      >
        <div
          class="before-trigger"
          v-if="!isPullUpLoad"
        >
          <span>{{pullUpTxt}}</span>
        </div>
        <div
          class="after-trigger"
          v-else
        >
          <loading></loading>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScorll from "better-scroll";
import loading from "common/loading/loading.vue";
export default {
  mounted() {},
  activated() {
    this.$nextTick(() => {
      this._initScroll();
    });
  },
  props: {
    click: {
      type: Boolean,
      default: false
    },
    probeType: {
      type: Number,
      default: 3
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      default: null
    }
  },
  components: {
    loading
  },
  data() {
    return {
      isPullUpLoad: false,
      pullUpDirty: true
    };
  },
  methods: {
    _initScroll() {
      if (!this.$refs.scroll) {
        return;
      }
      this.scroll = new BScorll(this.$refs.scroll, {
        click: this.click,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      });

      if (this.scroll && this.pullUpLoad) {
        this._initPullUpLoad();
      }
    },
    _initPullUpLoad() {
      this.scroll.on("pullingUp", () => {
        if (this.pullUpDirty) {
          this.isPullUpLoad = true;
          this.$emit("pullingUp");
        } else {
          this.isPullUpLoad = false;
        }
      });
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    scrollTo(x, y) {
      this.scroll && this.scroll.scrollTo(x, y);
    },
    _forceUpdate() {
      if (this.pullUpLoad && this.isPullUpLoad) {
        this.isPullUpLoad = false;
        this.scroll.finishPullUp();
        this.refresh();
      } else {
        this.refresh();
      }
    },
    changePullUpDirty() {
      if (this.pullUpDirty) {
        this.pullUpDirty = false;
        this.isPullUpLoad = false;
      }
    }
  },
  computed: {
    pullUpTxt() {
      return this.pullUpDirty ? "加载更多" : "没有更多数据";
    }
  },
  watch: {
    data() {
      this.$nextTick(() => {
        this._forceUpdate();
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.wrapper
  .pullup-wrapper
    width 100%
    display flex
    justify-content center
    align-items center
    padding 16px 0
</style>