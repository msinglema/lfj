<style lang="less">
.el-carousel__container{
  min-height:2.4rem;
  .el-carousel__item{
    img{
      width:100%;
      height:auto;
    }
  }
}
</style>

<template>
    <el-carousel indicator-position="inside" height="100px">
        <el-carousel-item v-for="(item,index) in items" :key="index">
            <img :src="item.src" :alt="item.alt">
        </el-carousel-item>
    </el-carousel>
</template>

<script>
export default {
    data:function(){
      return {
        items : [
          {src: 'http://www.liangfangji.com/mockcdn/image/banner-1.jpg', alt:'1'},
          {src: 'http://www.liangfangji.com/mockcdn/image/banner-2.jpg', alt:'2'},
          {src: 'http://www.liangfangji.com/mockcdn/image/banner-3.jpg', alt:'3'}
        ]
      }
    }
}
</script>
