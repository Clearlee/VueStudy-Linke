<template>
  <div class="fast-news-list">
    <ul
      v-for="(data,key) in sortData"
      :key="key"
    >
      <div class="topbar">
        {{getTimeStr(data.createTimeDayLong)}}
      </div>
      <li
        v-for="(item,key) in data.data"
        :key="key"
        class="fast-news-item"
      >
        <div class="news-content">
          <div class="time-wrapper">
            <p class="time">
              {{item.createTime}}
            </p>
          </div>
          <p class="title">
            {{item.title}}
          </p>
          <p class="content">
            {{item.content}}
          </p>
          <div class="bottom-wrapper">
            <p class="source">
              来源： {{item.source}}
            </p>
            <img src="icon_share.png">
          </div>
        </div>
        <img
          src="./icon_point.png"
          class="point"
        >
      </li>
    </ul>
  </div>
</template>

<script>
import FastNewsItem from "./FastNewsItem.vue";
import { selectPageFlashNews } from "js/news/fastnews.js";
export default {
  name: "FastNewsList",
  components: {
    FastNewsItem
  },
  data() {
    return {
      resData: [],
      sortData: []
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      selectPageFlashNews().then(res => {
        if (res.data.success && res.data.data) {
          this.resData = res.data.data.list;
          this.formatData(this.resData);
        }
      });
    },
    formatData(data) {
      for (let i = 0; i < data.length; i++) {
        if (this.sortData && this.sortData.length > 0) {
          for (let j = 0; j < this.sortData.length; j++) {
            if (
              this.sortData[j].createTimeDayLong === data[i].createTimeDayLong
            ) {
              this.sortData[j].data.push(data[i]);
            } else {
              this.sortData.push({
                createTimeDayLong: data[i].createTimeDayLong,
                data: [data[i]]
              });
            }
          }
        } else {
          this.sortData.push({
            createTimeDayLong: data[i].createTimeDayLong,
            data: [data[i]]
          });
        }
      }
    },
    getTimeStr(data) {
      let date = new Date(data);
      return (
        date.getFullYear() +
        "年" +
        (date.getMonth() + 1) +
        "月" +
        date.getDate() +
        "日"
      );
    }
  },
  computed: {}
};
</script>

<style lang='stylus'>
.fast-news-list
  color red
  width 100%
  .topbar
    padding-left 0.12rem
    height 0.6rem
    background #F6F6F6
    line-height 0.6rem
    font-size 0.12rem
    color #F97200
  .fast-news-item
    position relative
    width 100%
    padding 0.1rem 0.16rem 0 0
    .point
      left 0.05rem
      color blue
      position absolute
      width 0.1rem
      height 0.1rem
      z-index 200
      top 0.14rem
    .news-content
      border-left solid 0.01rem #FEE6D1
      margin-left 0.1rem
      padding 0.1rem 0.1rem 0 0.11rem
      box-sizing border-box
      .time-wrapper
        line-height 0.18rem
        color #FFF4EB
        border-radius 0.5rem
        .time
          color #F97200
          font-size 0.24rem
      .title
        margin-top 0.12rem
        font-size 0.32rem
        color #2A2A2A
        line-height 0.4rem
      .content
        padding-right 0.16rem
        margin-top 0.1rem
        color #666666
        font-size 0.28rem
        line-height 0.4rem
      .bottom-wrapper
        display flex
        padding 0.2rem 0
        align-items center
        justify-content space-between
        border-bottom solid #E6E6E6 0.01rem
        img
          width 0.4rem
          height 0.17rem
        .source
          color #A0A0A0
          font-size 0.24rem
</style>


