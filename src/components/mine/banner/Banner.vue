<template>
    <div class="home-banner" ref="wrapper">
        <div class="box" ref="img_list">
            <div class="img-wrapper" v-for="item of list" :key="item.id">
                <img :src="item.url" class="banner-img">
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'HomeBanner',
  data(){
      return {
          list:[
              {
                id: '001',
                url: 'https://cdn.btc123.com/btc123/2fcde1f9e5ba48fcb74322b367e196c3?x-oss-process=image/interlace,1/resize,w_300,h_160,m_fill/quality,q_90/format,jpg'
              },
              {
                id: '002',
                url: 'https://cdn.btc123.com/btc123/2fcde1f9e5ba48fcb74322b367e196c3?x-oss-process=image/interlace,1/resize,w_300,h_160,m_fill/quality,q_90/format,jpg'
              },
              {
                id: '003',
                url: 'https://cdn.btc123.com/btc123/2fcde1f9e5ba48fcb74322b367e196c3?x-oss-process=image/interlace,1/resize,w_300,h_160,m_fill/quality,q_90/format,jpg'
              }
          ]
      }
  },
  mounted(){
    this.$nextTick(()=>{
        this.initScroll()
    })
  },
  methods:{
      initScroll(){
          let width = 3.5
          let margin = 0.18
          let total = (width+margin)*3-margin + 'rem'
          console.log(total)
          this.$refs.img_list.style.width = total;
          this.$nextTick(()=>{
              this.picScroll = new BScroll(this.$refs.wrapper,{
                scrollX:true,
                eventPassthrough:'vertical' //忽略竖直方向的滚动
              });
          })
      }
  }
}
</script>


<style lang="stylus" scoped>
    .home-banner
        background:#f6f6f6
        width:100%
        overflow: hidden
        height: 2.2rem
        line-height: 2.2rem
        white-space: nowrap
        .box
            padding: 0 0.2rem
            font-size:0
            .img-wrapper
                float: left
                margin-right:0.18rem
                border-radius: 0.1rem
                width: 3.5rem
                height: 100%
                &:last-child
                    margin:0
                .banner-img
                    width: 100%
                    height: 100%
                    border-radius: 0.1rem 

</style>
