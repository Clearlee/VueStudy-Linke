<template>
  <div
    class="verticalview"
    ref="VerticalView"
  >
    <div
      ref="ItemView"
      class="item"
      v-for="(item,index) in content"
      :key="index"
    >{{item}}
    </div>
  </div>
</template>

<script>
export default {
  name: "VerticalView",
  props: {
    content: {
      type: Array,
      default: function() {
        return [
          "你想要的，这里都能找到",
          "输入一个关键字试试呢",
          "有疑问，搜我就行",
          "你想要的，这里都能找到"
        ];
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.startTimer();
    });
  },
  methods: {
    startTimer() {
      let verticalScroll = this.$refs.VerticalView;
      let itemView = this.$refs.ItemView[0];
      this.timer = setInterval(() => {
        if (!verticalScroll) {
          clearInterval(this.timer);
          return;
        }
        verticalScroll.scrollTop++;
        if (
          verticalScroll.scrollTop !== 0 &&
          verticalScroll.scrollTop % itemView.clientHeight == 0
        ) {
          if (verticalScroll.scrollTop === itemView.clientHeight * 3) {
            verticalScroll.scrollTop = 0;
          }

          clearInterval(this.timer);
          this.waitTime();
        }
      }, 30);
    },
    waitTime() {
      setTimeout(() => {
        this.startTimer();
      }, 1000);
    }
  },
  destroyed() {
    clearInterval(this.timer);
  }
};
</script>

<style lang="stylus" scoped>
.verticalview
  height 0.5rem
  overflow hidden
  .item
    height 0.5rem
    line-height 0.5rem
    color white
    font-size 0.25rem
</style>