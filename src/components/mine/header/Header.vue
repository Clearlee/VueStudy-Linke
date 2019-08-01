<template>
  <div class="home">
    <div class="homeheader">
      <div class="header_top">
        <router-link to="/userinfo">
          <img
            class="user_img"
            alt="图片"
            src="./profile.png"
          >
        </router-link>
        <div class="name_content">
          <div class="user_name">萍七七</div>
          <div class="user_des">无所求亦无所苦！</div>
        </div>
        <router-link to="/setting">
          <img
            class="user_setting"
            src="./qr_code.png"
          >
        </router-link>
      </div>
      <div class="header_bottom">
        <router-link
          to="/user"
          class="header_bottom_content"
        >
          <div>
            <div class="content_count">15</div>
            <div class="content_name">粉丝</div>
          </div>
        </router-link>
        <router-link
          to="/user"
          class="header_bottom_content"
        >
          <div>
            <div class="content_count">15</div>
            <div class="content_name">好友</div>
          </div>
        </router-link>
        <router-link
          to="/user"
          class="header_bottom_content"
        >
          <div>
            <div class="content_count">15</div>
            <div class="content_name">关注</div>
          </div>
        </router-link>
        <router-link
          to="/dynamic"
          class="header_bottom_content"
        >
          <div>
            <div class="content_count">15</div>
            <div class="content_name">动态</div>
          </div>
        </router-link>
        <router-link
          to="/user"
          class="header_bottom_content"
        >
          <div>
            <div class="content_count">15</div>
            <div class="content_name">收藏</div>
          </div>
        </router-link>
      </div>
    </div>

    <div class="earnings_content">
      <div class="earnings_header">
        <span class="my_earnings">我的收益(TV)</span>
        <span class="earnings_details">收益明细</span>
      </div>
      <div class="earning_money">3160.02</div>
      <div class="earning_bottom">
        <div class="earning_bottom_content">
          <span class="earnings_reward">收益奖励</span>
          <span class="earnings_reward_number">99.23</span>
        </div>
        <div class="divider"></div>
        <div class="earning_bottom_content">
          <span class="earnings_reward">余额年化</span>
          <span class="earnings_reward_number">199.23</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader"
};
</script>

<style lang="stylus" scoped>
.home
  height 7.8rem
  background #f6f6f6
  .earnings_content
    background red
    height 3.2rem
    top -0.5rem
    margin-left 0.2rem
    margin-right 0.2rem
    position relative
    background white
    border-radius 0.1rem
    .earnings_header
      height 0.9rem
      border-bottom #eee 1px solid
      .my_earnings
        line-height 0.9rem
        margin-left 0.2rem
        color #333
        font-size 0.3rem
        font-weight bold
      .earnings_details
        line-height 0.9rem
        margin-right 0.2rem
        float right
        color #999
    .earning_money
      margin-top 0.8rem
      text-align center
      color #F97200
      font-size 0.75rem
    .earning_bottom
      height 0.7rem
      line-height 0.7rem
      width 100%
      position absolute
      bottom 0
      display flex
      .divider
        margin-top 0.14rem
        width 0.01rem
        height 0.4rem
        background #e6e6e6
      .earning_bottom_content
        text-align center
        width 50%
        line-height 0.7rem
        box-sizing border-box
        .earnings_reward
          color #999999
        .earnings_reward_number
          color #333
  .homeheader
    overflow hidden
    height 5rem
    background #F97200
    .header_top
      margin-top 1rem
      height 1.5rem
      display flex
      .user_img
        float left
        margin-left 0.2rem
        height 1.5rem
        width 1.5rem
      .name_content
        flex 1
        position relative
        margin-left 0.1rem
        padding-left 0.1rem
        color white
        height 100%
        .user_name
          margin-top 0.2rem
          font-size 0.45rem
        .user_des
          bottom 0
          margin-bottom 0.2rem
          position absolute
          font-size 0.3rem
      .user_setting
        float right
        margin-right 0.2rem
        height 0.3rem
        width 0.3rem
    .header_bottom
      padding 0 0.2rem
      margin-top 0.3rem
      height 1.5rem
      display flex
      flex-wrap wrap
      .header_bottom_content
        color white
        box-sizing border-box
        width 20%
        height 100%
        .content_count
          text-align center
          font-size 0.45rem
          margin 0.25rem
        .content_name
          text-align center
          font-size 0.25rem
</style>
