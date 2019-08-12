<template>
  <div class="fast-news-item">
    <div class="news-content">
      <div class="time-wrapper">
        <p class="time">
          41分钟前
        </p>
      </div>
      <p class="title">
        韩国国家开发银行：朝鲜一直在挖掘加密货
      </p>
      <p class="content">
        据韩国媒体报道，韩国国家开发银行(KDB)的一份报告显示，朝鲜一直在挖掘加密货币。此外，朝鲜一家科技公司正在开发比特币交易平台，而朝鲜普通民众对加密货币知之甚少。据韩国媒体报道，韩国国家开发银行(KDB)的一份报告显示，朝鲜一直在挖掘加密货币。此外，朝鲜一家科技公司正在开发比特币交易平台，而朝鲜普通民众对加密货币知之甚少。
      </p>
      <div class="bottom-wrapper">
        <p class="source">
          来源：币世界Bishijie.com
        </p>
        <img src="icon_share.png">
      </div>
    </div>
    <img
      src="./icon_point.png"
      class="point"
    >
  </div>
</template>

<script>
export default {
  name: "FastNewsItem"
};
</script>

<style lang='stylus'>
.fast-news-item
  position relative
  width 100%
  padding 0 0.16rem 0 0
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
    .content
      padding-right 0.16rem
      margin-top 0.1rem
      color #666666
      font-size 0.28rem
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