<template>
    <div class="Gallery">
        <div class="container" @click='handleGalleryClose'>
            <swiper :options="swiperOption" ref="mySwiper">
                <!-- slides -->
                <swiper-slide v-for='(item,key) in imgs' :key="key">
                    <img :src="item" class="gallery-item">
                </swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Gallery',
  data(){
      return{
          swiperOption: {
          // some swiper options/callbacks
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction'
          }
        }
      }
  },
  props:{
      imgs:{
          type: Array
      }
  },
  methods:{
      handleGalleryClose(){
          this.$emit('close')
      }
  }
}
</script>

<style lang="stylus" scoped>
    .Gallery >>> .swiper-container
        overflow: inherit
    .Gallery
        z-index: 9
        position: fixed
        bottom: 0
        top: 0
        right: 0
        left: 0
        background: #000
        display: flex
        flex-direction: column
        justify-content: center
        .container
            background: #f6f6f6
            width: 100%
            height: 0
            padding-bottom: 100%
            .gallery-item
                width: 100%
            .swiper-pagination
                color: #fff
                bottom: -1rem

</style>