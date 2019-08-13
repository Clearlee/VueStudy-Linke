<template>
  <div class="news-details">
    <img
      src="./icon_bg_top.png"
      class="icon-top"
    >
    <img
      src="./icon_bless.png"
      class="icon-right"
    >
    <div class="content-wrapper">
      <div class="news-title">
        {{currentData.title}}
      </div>
      <div class="news-content">
        {{currentData.content}}
      </div>
      <div class="news-source">
        来源：{{currentData.source}}
      </div>
      <div class="news-time">
        {{getTimeStr(currentData.createTime)}}
      </div>
    </div>
    <img
      src="./icon_bg_end.png"
      class="icon-qr"
    >
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["currentData"])
  },
  methods: {
    getTimeStr(data) {
      let date = new Date(data);
      let week;
      switch (date.getDay()) {
        case 0:
          week = "星期天";
          break;
        case 1:
          week = "星期一";
          break;
        case 2:
          week = "星期二";
          break;
        case 3:
          week = "星期三";
          break;
        case 4:
          week = "星期四";
          break;
        case 5:
          week = "星期五";
          break;
        case 6:
          week = "星期六";
          break;
      }

      let h =
        (date.getHours() >= 10 ? date.getHours() : "0" + date.getHours()) + ":";
      let m =
        date.getMinutes() >= 10 ? date.getMinutes() : "0" + date.getMinutes();

      return (
        date.getFullYear() +
        "年" +
        (date.getMonth() + 1) +
        "月" +
        date.getDate() +
        "日" +
        "  " +
        week +
        " " +
        h +
        m
      );
    }
  }
};
</script>

<style lang='stylus'>
.news-details
  position fixed
  box-sizing border-box
  width 100%
  height 100%
  background #F8B52A
  z-index 101
  .icon-top
    width 100%
  .icon-right
    position absolute
    right 0
    top 0
    width 4.1rem
  .icon-qr
    position absolute
    bottom 0
    height 1.7rem
    margin-left 0.3rem
    margin-right 0.3rem
    margin-bottom 0.2rem
  .content-wrapper
    margin-top 0.14rem
    margin-left 0.2rem
    margin-right 0.2rem
    border-radius 0.2rem
    padding 0.2rem 0.2rem
    box-sizing border-box
    background white
    .news-title
      font-size 0.32rem
      color #2A2A2A
      line-height 0.4rem
      font-weight 600
    .news-content
      margin-top 0.16rem
      color #666666
      font-size 0.3rem
      line-height 0.4rem
    .news-source
      margin-top 0.2rem
      color #A0A0A0
      font-size 0.24rem
    .news-time
      display flex
      justify-content center
      margin-top 0.5rem
      color #666666
</style>


