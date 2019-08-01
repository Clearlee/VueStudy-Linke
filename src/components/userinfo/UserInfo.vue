<template>
  <div class="userInfo">
    <top-bar title="个人资料">
      <img src="./icon-right.png" class="right-icon" slot="right-icon">
    </top-bar>
    <div class="wrapper" ref="wrapper">
      <div>
        <div ref="header">
          <div class="img-wrapper">
            <swiper :options="swiperOption" ref="mySwiper">
              <!-- slides -->
              <swiper-slide>
                <img
                  src="https://lianxiangfiles.oss-cn-beijing.aliyuncs.com/article/hvh2gvrc1c1548904651308.jpeg?x-oss-process=style/newsdetail"
                  class="gallery-item"
                >
              </swiper-slide>
              <swiper-slide>
                <img
                  src="https://lianxiangfiles.oss-cn-beijing.aliyuncs.com/article/hvh2gvrc1c1548904651308.jpeg?x-oss-process=style/newsdetail"
                  class="gallery-item"
                >
              </swiper-slide>
              <swiper-slide>
                <img
                  src="https://lianxiangfiles.oss-cn-beijing.aliyuncs.com/article/hvh2gvrc1c1548904651308.jpeg?x-oss-process=style/newsdetail"
                  class="gallery-item"
                >
              </swiper-slide>
              <!-- Optional controls -->
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </div>
          <div>
            <div class="name-wrapper">
              <span class="name">用户名</span>
              <img src="./icon_daka.png" class="daka-img">
            </div>
            <div class="position-wrapper">
              <span class="position">BTC123-运营经理</span>
            </div>
            <div class="focus-wrapper">
              <span class="fanscount">粉丝 22</span>
              <span class="focuscount">关注 66</span>
            </div>
            <div class="sign">我是长长的签名最多二十字我是长长的签名最</div>
          </div>
        </div>
        <div class="indicator">
          <span
            class="indicator-item"
            :class="{'slectClass':index===0}"
            @click="changeIndex(0)"
          >个人信息</span>
          <span class="indicator-item" :class="{'slectClass':index===1}" @click="changeIndex(1)">动态</span>
        </div>

        <div class="user-details" v-if="index===0">
          <div class="item">
            <div class="des-item">
              <img src="./male_female.png" class="details-img">
              <div class="right border-bottom">
                <span class="key">性别</span>
                <span class="value">女</span>
              </div>
            </div>
            <div class="des-item">
              <img src="./mine_personal_birthday.png" class="details-img">
              <div class="right border-bottom">
                <span class="key">生日</span>
                <span class="value">1996年6月6日</span>
              </div>
            </div>
            <div class="des-item">
              <img src="./mine_personal_comefrom.png" class="details-img">
              <div class="right border-bottom">
                <span class="key">来自</span>
                <span class="value">中国 成都</span>
              </div>
            </div>
            <div class="des-item">
              <img src="./mine_personal_business.png" class="details-img">
              <div class="right">
                <span class="key">行业</span>
                <span class="value">互联网</span>
              </div>
            </div>
          </div>
          <div class="item">
            <tag-list title="我的标签" :tags="tags" :imgs="tagImg"></tag-list>
          </div>
          <div class="item">
            <tag-list title="我的爱好" :tags="interest" :imgs="interestImg"></tag-list>
          </div>
        </div>

        <div class="dynamiclist-wrapper" v-if="index===1">
          <dynamic-list></dynamic-list>
        </div>
      </div>
    </div>
    <div class="topindicator" v-show="showTopIndicator">
      <span class="indicator-item" :class="{'slectClass':index===0}" @click="changeIndex(0)">个人信息</span>
      <span class="indicator-item" :class="{'slectClass':index===1}" @click="changeIndex(1)">动态</span>
    </div>
    <div class="footer">编辑资料</div>
  </div>
</template>

<script>
import TopBar from "../common/topbar/TopBar";
import TagList from "../common/TagList";
import DynamicList from "../msg/dynamic/DynamicList";
import BScroll from "better-scroll";
export default {
  name: "UserInfo",
  components: {
    TopBar,
    TagList,
    DynamicList
  },
  computed: {
    showTopIndicator() {
      if (this.scrollY >= this.headerHeight) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    changeIndex(index) {
      this.index = index;
    },
    initScroll() {
      this.headerHeight = this.$refs.header.clientHeight;
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.wrapper, {
          click: true,
          bounce: false,
          probeType: 3
        });

        this.scroll.on("scroll", pos => {
          this.scrollY = Math.abs(Math.round(pos.y));
        });
      } else {
        this.scroll.refresh();
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initScroll();
    });
  },
  data() {
    return {
      swiperOption: {
        // some swiper options/callbacks
        pagination: {
          el: ".swiper-pagination",
          type: "bullets"
        }
      },
      headerHeight: 0,
      index: 0,
      scrollY: 0,
      tags: ["比特币", "区块链", "交友", "萌萌哒", "挖矿", "搬砖"],
      interest: [
        "比特币",
        "区块链",
        "交友",
        "萌萌哒",
        "挖矿",
        "搬砖",
        "比特币",
        "区块链",
        "交友",
        "萌萌哒",
        "挖矿",
        "搬砖"
      ],
      tagImg: require("./mine_personal_tags.png"),
      interestImg: require("./mine_edit_feel.png")
    };
  }
};
</script>

<style lang="stylus" scoped>
.userInfo >>> .swiper-container
  overflow inherit
.userInfo
  .topindicator
    position absolute
    top 0.98rem
    right 0
    left 0
    z-index 99
    height 0.9rem
    background #F6F6F6
    width 100%
    text-align center
    .indicator-item
      box-sizing border-box
      margin-right 1.8rem
      display inline-block
      height 0.9rem
      line-height 0.9rem
      color #B3B3B3
      font-size 0.3rem
      &:last-child
        margin-right 0
      &.slectClass
        border-bottom 0.05rem solid #F97200
        color #2A2A2A
  .footer
    text-align center
    height 1rem
    line-height 1rem
    position fixed
    bottom 0
    width 100%
    background white
    color #F97200
    font-size 0.3rem
  .right-icon
    top 0.275rem
    right 0.4rem
    position absolute
    width 0.45rem
    height 0.45rem
  .wrapper
    position absolute
    top 1rem
    left 0
    bottom 1rem
    width 100%
    overflow hidden
    .user-details
      background #F6F6F6
      .item
        padding 0.1rem 0.2rem
        background white
        margin 0 0.1rem
        border-radius 0.1rem
        margin-bottom 0.2rem
        &:last-child
          margin-bottom 0
        .des-item
          height 0.8rem
          display flex
          align-items center
          .details-img
            width 0.6rem
            height 0.6rem
          .right
            padding-right 0.2rem
            flex 1
            height 0.8rem
            margin-left 0.2rem
            line-height 0.8rem
            display flex
            justify-content space-between
            .key
              color #2A2A2A
              font-size 0.3rem
            .value
              color #666666
    .indicator
      height 0.9rem
      background #F6F6F6
      width 100%
      text-align center
      .indicator-item
        box-sizing border-box
        margin-right 1.8rem
        display inline-block
        height 0.9rem
        line-height 0.9rem
        color #B3B3B3
        font-size 0.3rem
        &:last-child
          margin-right 0
        &.slectClass
          border-bottom 0.05rem solid #F97200
          color #2A2A2A
    .img-wrapper
      overflow hidden
      background #F6F6F6
      width 100%
      height 0
      padding-bottom 50%
      .swiper-pagination
        bottom 1.5rem
      .gallery-item
        width 100%
    .name-wrapper
      margin-top 0.1rem
      text-align center
      .name
        vertical-align middle
        color #2A2A2A
        font-size 0.4rem
      .daka-img
        display inline-block
        height 0.4rem
        width 0.4rem
    .position-wrapper
      margin-top 0.1rem
      text-align center
      .position
        color #4A4A4A
        font-size 0.3rem
    .focus-wrapper
      line-height 0.5rem
      height 0.5rem
      margin-top 0.1rem
      text-align center
      .fanscount
        box-sizing border-box
        border-radius 0.5rem
        background #F97200
        padding 0.05rem 0.1rem
        color white
        font-size 0.25rem
      .focuscount
        box-sizing border-box
        margin-left 0.1rem
        border-radius 0.5rem
        background #F79522
        padding 0.05rem 0.1rem
        color white
        font-size 0.25rem
    .sign
      margin 0.15rem 0
      text-align center
      color #999999
      font-size 0.3rem
</style>