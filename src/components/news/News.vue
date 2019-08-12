<template>
  <div class="news">
    <div>
      <div
        class="header-wapper"
        ref="headerWrapper"
      >
        <div class="header">
          <img
            src="./search_bg.png"
            class="top-img"
          >
          <div class="floatcontent">
            <div class="search-content">
              <img
                src="./find_search_bg.png"
                class="search-bg"
              >
              <div class="inner">
                <img
                  src="./search.png"
                  class="search-icon"
                >
                <span class="hint">输入关键字搜索</span>
                <img
                  src="./icon_find_saoyisao.png"
                  class="qr-icon"
                >
              </div>
            </div>
            <img
              src="./icon_find_bless.png"
              class="bless"
            >
            <img
              src="./icon_find_bubble.png"
              alt=""
              class="bubble"
            >
            <div class="verticalview-wrapper">
              <vertical-view></vertical-view>
            </div>
          </div>
        </div>
        <swiper
          class="swiper"
          :options="swiperOption"
          ref="mySwiper"
        >
          <!-- slides -->
          <swiper-slide>
            <div class="swiper-item">
              <div class="item">
                <img
                  src="./icon_find_news.png"
                  class="item-img"
                >
                <span class="item-des">资讯</span>
              </div>
              <div class="item">
                <img
                  src="./icon_find_market.png"
                  class="item-img"
                >
                <span class="item-des">行情</span>
              </div>
              <div class="item">
                <img
                  src="./icon_find_urlnav.png"
                  class="item-img"
                >
                <span class="item-des">导航</span>
              </div>
              <div class="item">
                <img
                  src="./icon_find_friends.png"
                  class="item-img"
                >
                <span class="item-des">人脉</span>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="swiper-item">
              <div class="item">
                <img
                  src="./icon_find_circle.png"
                  class="item-img"
                >
                <span class="item-des">圈子</span>
              </div>
              <div class="item">
                <img
                  src="./icon_find_shop.png"
                  class="item-img"
                >
                <span class="item-des">商品</span>
              </div>
              <div class="item">

              </div>
              <div class="item">

              </div>
            </div>
          </swiper-slide>
          <!-- Optional controls -->
          <div
            class="swiper-pagination"
            slot="pagination"
          ></div>
        </swiper>
        <img
          src="./icon_find_shadow.png"
          width="100%"
        >

      </div>

      <div
        class="indicator-wrapper"
        :class="{sticky:stickyIndicator===true}"
        ref="indicatorWrapper"
        v-show="categorys.length"
      >
        <div
          class="indicator"
          ref="indicator"
        >
          <div
            @click="changeIndex(index)"
            ref="indicatorItem"
            class="indicator-item"
            v-for="(item,index) in categorys"
            :key="item.id"
            :class="{'activeClass':currentIndex===index}"
          >{{item.name}}</div>
        </div>
      </div>

      <div>
        <swiper
          class="viewpagerSwiper"
          :options="viewpagerOption"
          ref="viewpager"
          @slideChange="slideChanged"
        >
          <!-- slides -->
          <swiper-slide
            v-for="(item,index) in categorys"
            :key="index"
          >
            <news-list
              ref="newslist"
              v-if="index!==1"
              :categorayId="item.id"
              @dataChange='handleDataChange(item.id)'
              @goDetails='goDetails'
            ></news-list>

            <fast-news-list v-if="index===1"></fast-news-list>
          </swiper-slide>

        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import FastNewsList from "../fastnews/FastNewsList.vue";
import BScoll from "better-scroll";
import NewsList from "./NewsList.vue";
import VerticalView from "common/VerticalView.vue";
import { loadCategorysData } from "js/news/news.js";
export default {
  name: "News",
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          bulletActiveClass: "my-bullet-active"
        }
      },
      viewpagerOption: {
        autoHeight: true
      },
      categorys: [],
      indicatorWidth: 0,
      currentIndex: 0,
      stickyIndicator: false,
      showList: false
    };
  },
  components: {
    NewsList,
    VerticalView,
    FastNewsList,
  },
  mounted() {
    loadCategorysData().then(res => {
      if (res.data && res.data.success) {
        let arr = [];
        arr = res.data.data;
        arr.unshift({ id: 2, name: "快讯" });
        arr.unshift({ id: 1, name: "全部" });
        this.categorys = arr;
        this.$nextTick(() => {
          window.addEventListener("scroll", this._handleScroll);
          this._computeIndicatorWidth();
        });
      }
    });
  },
  destroyed() {
    window.removeEventListener("scroll", this._handleScroll);
  },
  computed: {
    swiper() {
      return this.$refs.viewpager.swiper;
    }
  },
  methods: {
    goDetails(id) {
      this.$router.push({
        path: `/newsdetail/${id}`
      });
    },
    handleDataChange(categorayId) {
      if (categorayId === 1) {
        this.showList = true;
      }
    },
    _handleScroll() {
      const scrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop;
      let header = this.$refs.headerWrapper;
      const headerHeight = header.clientHeight;
      if (scrollTop >= headerHeight) {
        this.stickyIndicator = true;
      } else {
        this.stickyIndicator = false;
      }
    },
    _computeIndicatorWidth() {
      let indicator = this.$refs.indicator;
      let indicatorItems = this.$refs.indicatorItem;
      this.indicatorWidth = 0;
      for (let i = 0; i < indicatorItems.length; i++) {
        let item = indicatorItems[i];
        this.indicatorWidth += indicatorItems[i].clientWidth;
      }

      indicator.style.width =
        ((indicatorItems.length - 1) * 22 + this.indicatorWidth) / 50 +
        0.1 +
        "rem";

      if (!this.indicatorScroll) {
        this.indicatorScroll = new BScoll(this.$refs.indicatorWrapper, {
          scrollX: true,
          eventPassthrough: "vertical" //忽略竖直方向的滚动
        });
      } else {
        this.indicatorScroll.refresh();
      }
    },
    changeIndex(index) {
      this.currentIndex = index;
      this.swiper.slideTo(this.currentIndex, 500, false);
    },
    slideChanged() {
      this.currentIndex = this.swiper.realIndex;
      this.$refs.newslist[this.currentIndex].refreshSwiper();
    }
  },
  watch: {
    currentIndex() {
      this.$nextTick(() => {
        this._computeIndicatorWidth();
        let el = this.$refs.indicatorItem;
        if (this.currentIndex !== el.length - 1) {
          let el = this.$refs.indicatorItem[this.currentIndex];
          this.indicatorScroll.scrollToElement(el, 200, -100, 0);
        }
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.news
  padding-bottom 1rem
  .detail-enter-active, .detail-leave-active
    transition all 0.4s
  .detail-enter, .detail-leave-to
    transform translate3d(100%, 0, 0)
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
    .recomment-list
      padding 0.2rem 0.12rem
      display flex
      flex-wrap nowrap
      .recommnet-item
        margin-right 0.1rem
        &:last-child
          margin-right 0
        width 3.8rem
        .recommend-img
          width 3.8rem
          height 2rem
          border-radius 0.1rem
        .recommend-title
          margin-top 0.1rem
          color #333333
          line-height 0.35rem
          font-size 0.3rem
  .indicator-wrapper
    overflow hidden
    width 100%
    &.sticky
      transform translateZ(0)
      background white
      z-index 100
      position fixed
      top 0
      left 0
    .indicator
      padding 0 0.1rem
      height 0.8rem
      .indicator-item
        box-sizing border-box
        display inline-block
        height 0.8rem
        line-height 0.8rem
        color #666666
        font-size 0.3rem
        margin-right 22px
        &:last-child
          margin-right 0
        &.activeClass
          color #2A2A2A
          font-weight 700
          font-size 0.35rem
          border-bottom 0.05rem #F97200 solid
  .swiper
    height 2rem
    .swiper-pagination
      bottom 0.2rem
    .swiper-item
      height 1.6rem
      display flex
      .item
        flex 1
        display flex
        flex-direction column
        justify-content center
        align-items center
        .item-img
          display inline-block
          height 0.8rem
          width 0.8rem
        .item-des
          color #2A2A2A
          font-size 0.25rem
  .header
    position relative
    height 3.2rem
    .top-img
      width 100%
      height 3rem
    .floatcontent
      height 2.5rem
      position absolute
      bottom 0
      width 100%
      .bless
        position absolute
        left 1rem
        top -0.1rem
        z-index 11
        width 2rem
        height 1.8rem
      .bubble
        position absolute
        left 3rem
        top 0.6rem
        width 3.5rem
        height 0.5rem
      .verticalview-wrapper
        position absolute
        display inline-block
        left 3.5rem
        width 3.5rem
        top 0.62rem
        height 0.5rem
      .search-content
        height 1rem
        z-index 10
        position absolute
        bottom 0
        height 1rem
        width 100%
        .search-bg
          height 1rem
          width 100%
        .inner
          display flex
          align-items center
          justify-content center
          position absolute
          top 0
          left 0
          width 100%
          height 0.85rem
          .search-icon
            margin-left 0.5rem
            height 0.35rem
            width 0.35rem
          .hint
            margin-left 0.15rem
            flex 1
            color #A5A5A5
          .qr-icon
            margin-right 0.5rem
            height 0.35rem
            width 0.35rem
</style>