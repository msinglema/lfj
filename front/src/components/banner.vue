<style lang="less">
.swiper-container{
    .image-item{
      height: 3.0rem;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }
}
</style>

<template>
    <swiper :loadtheme="true" :options="swiperOption">
        <swiper-slide v-for="(item, index) in features" :key="index">
            <div class="image-item" :style="{backgroundImage:'url(' + item.sImgUrl + ')'}"></div>
        </swiper-slide>
         <div class="swiper-pagination" slot="pagination"></div>  
    </swiper>
</template>

<script>
import {swiper,swiperSlide} from 'vue-awesome-swiper'
import { mapGetters, mapState, mapActions } from 'vuex'

export default {
    data:function(){
      return {
        items : [
          {src: 'http://www.liangfangji.com/mockcdn/image/banner-1.jpg', alt:'1'},
          {src: 'http://www.liangfangji.com/mockcdn/image/banner-2.jpg', alt:'2'},
          {src: 'http://www.liangfangji.com/mockcdn/image/banner-3.jpg', alt:'3'}
        ],
       swiperOption: {
            pagination: '.swiper-pagination',
            slidesPerView: 'auto',
            paginationClickable: true,
            spaceBetween:10
        }
      }
    },
    computed:{
      ...mapGetters('portal',['isFeatureLoading', 'features', 'discovers'])
    },
    methods: {
      ...mapActions('portal', ['getFeatures', 'getDiscovers'])
    },
    created (){
      this.getFeatures()
    },
    components:{
       swiper,
       swiperSlide
    }
}
</script>
