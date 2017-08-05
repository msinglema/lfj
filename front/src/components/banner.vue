<style lang="less">
</style>

<template>
    <el-carousel indicator-position="inside">
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
          {src: '../../build/image/banner-1.jpg', alt:'1'},
          {src: '../../build/image/banner-2.jpg', alt:'2'},
          {src: '../../build/image/banner-3.jpg', alt:'3'}
        ]
      }
    }
}
</script>
