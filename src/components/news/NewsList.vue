<template>
  <div class="newslist">
    <!-- banner -->
    <swiper
      class="bannerSwiper"
      :options="bannerOption"
      ref="banner"
      v-show="categorayId===1 && bannerData.length"
    >
      <swiper-slide
        v-for="banner in bannerData"
        :key="banner.id"
      >
        <div class="banner-wrapper">
          <img
            :src="banner.path"
            class="banner-img"
          >
        </div>
      </swiper-slide>
      <div
        v-show="bannerData.length>1"
        class="banner-pagination"
        slot="pagination"
      ></div>
    </swiper>
    <!-- banner -->

    <!-- 资讯列表 -->
    <ul v-show="newsData.length">
      <li
        v-for="(newsItem,index) in newsData"
        :key="newsItem.id"
      >
        <div
          class="news-item border-bottom"
          @click="goDetails(newsItem.id)"
        >
          <div class="news-content">
            <div class="news-title">{{newsItem.title}}</div>
            <div class="bottom">
              <span
                class="sticky des"
                v-show="newsItem.isStick===1"
              >置顶
              </span>
              <span class="des">{{newsItem.createTimeStr}} | {{newsItem.source}}</span>
              <span class="des">{{newsItem.browseNum}}人阅读</span>
            </div>
          </div>
          <img
            :src="newsItem.picUrl"
            class="news-img"
          >
        </div>

        <!-- 推荐内容 -->
        <div
          class="recomment-content"
          v-if="recommendData.length&&showRecommend&&index===5"
        >
          <div class="header border-bottom">
            <img
              src="../msg/recommend/icon_hot.png"
              class="hoticon"
            >
            <span class="title">热门</span>
          </div>

          <div class="recommendWrapper">
            <swiper
              :options="recommendOption"
              class="recommendSwiper"
              ref="recommendSwiper"
            >
              <swiper-slide
                v-for="recommend in recommendData"
                :key="recommend.id"
              >
                <div class="recommnet-item">
                  <img
                    :src="recommend.picUrl"
                    class="recommend-img"
                  >
                  <div class="recommend-title">{{recommend.title}}</div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <!-- 推荐内容 -->
      </li>
    </ul>
    <div
      class="loading-wrapper"
      v-show="!newsData.length"
    >
      <loading></loading>
    </div>
  </div>
</template>

<script>
import {
  findArticleByCategoryId,
  findHotArticle,
  queryAdvertFront,
  findArticleRecommend
} from "js/news/news.js";
import Loading from "common/loading/loading";
export default {
  components: {
    Loading
  },
  data() {
    return {
      bannerData: [],
      newsData: [],
      recommendData: [],
      bannerOption: {
        pagination: {
          el: ".banner-pagination",
          type: "bullets",
          bulletActiveClass: "my-bullet-active"
        }
      },
      recommendOption: {
        slidesPerView: 2,
        spaceBetween: 10,
        freeMode: true
      },
      showswiper: false
    };
  },
  props: {
    categorayId: {
      type: Number,
      default: 0
    }
  },
  mounted() {
    this.loadData();
  },
  computed: {
    showRecommend() {
      if (this.categorayId === 1) {
        return true;
      }

      return this.showswiper;
    }
  },
  methods: {
    goDetails(id) {
      this.$emit("goDetails", id);
    },
    refreshSwiper() {
      //fix swiper 宽度计算不正确的bug
      this.showswiper = true;
    },
    loadData() {
      if (this.categorayId === 1) {
        queryAdvertFront(1).then(res => {
          if (res.data.data && res.data.success) {
            this.bannerData = res.data.data;
          }
        });
        findHotArticle().then(res => {
          if (res.data.data && res.data.success) {
            this.recommendData = res.data.data;
          }
        });
      } else {
        findArticleRecommend(this.categorayId).then(res => {
          if (res.data.data && res.data.success) {
            this.recommendData = res.data.data;
          }
        });
      }

      findArticleByCategoryId(this.categorayId).then(res => {
        if (res.data.data && res.data.success) {
          this.newsData = res.data.data.list;
          this.showloading = false;
          console.log("hideloading");
          if (this.categorayId === 1) {
            this.$emit("dataChange");
          }
        }
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.newslist
  .loading-wrapper
    position absolute
    left 0
    top 0
    display flex
    align-items center
    justify-content center
    width 100%
    height 9rem
    z-index 101
  .recomment-content
    border-top solid #F6F6F6 0.2rem
    border-bottom solid #F6F6F6 0.2rem
    .header
      line-height 0.8rem
      height 0.8rem
      padding-left 0.12rem
      .hoticon
        width 0.32rem
        height 0.34rem
        position relative
        top -0.04rem
      .title
        color #2A2A2A
        font-size 0.3rem
    .recommendWrapper
      padding 0.2rem 0.12rem
      .recommendSwiper
        .recommnet-item
          width 3.5rem
          .recommend-img
            width 3.5rem
            height 2rem
            border-radius 0.1rem
          .recommend-title
            margin-top 0.1rem
            color #333333
            line-height 0.35rem
            font-size 0.3rem
  .news-item
    height 2rem
    width 100%
    display flex
    align-items center
    .news-img
      margin-right 0.12rem
      height 1.3rem
      width 2.1rem
      border-radius 0.1rem
    .news-content
      margin-right 0.2rem
      flex 1
      margin-left 0.12rem
      min-height 1.3rem
      .news-title
        color #2A2A2A
        font-size 0.3rem
        line-height 0.45rem
        min-height 0.9rem
      .bottom
        margin-top 0.15rem
        .des
          font-size 0.2rem
          color #999999
          margin-right 0.18rem
          &:last-child
            margin-right 0
        .sticky
          color #F97200
          margin-right 0.1rem
          padding 0.03rem
          background #FFF4EB
  .bannerSwiper
    height 3rem
    .banner-pagination
      z-index 100
      position relative
      bottom 0.5rem
      width 100%
      text-align center
    .banner-wrapper
      box-sizing border-box
      padding 0.1rem
      box-sizing border-box
      overflow hidden
      width 100%
      height 3rem
      .banner-img
        box-sizing border-box
        width 100%
        height 2.8rem
        border-radius 0.1rem
</style>