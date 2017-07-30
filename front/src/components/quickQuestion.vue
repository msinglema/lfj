<style lang="less">
  .quick-question{
    font-size: 16px; text-align:center; width:80px;
    position: fixed; bottom: 6.5em; right:40px; z-index:9999;
    .btn-group{
      .btn{
        display: block;
        margin:10px 0px; padding: 10px 20px; border-radius: 20px;
        color:#fff; background-color:#1eac11;
        &:hover{cursor: pointer; }
      }
    }
    .toggler{
      width:80px; height:80px; border-radius:40px;
      background-color:#1eac11;
      display: flex; justify-content: center; align-items: center;
      &:hover{cursor:pointer;}
      .el-icon{color:#fff;}
    }
  }
</style>

<template>
    <div class="quick-question">
      <div class="btn-group" v-if="open">
          <a class="btn">提问</a>
          <a class="btn">回答</a>
          <a class="btn">发布</a>
      </div>
      <a class="toggler" @click="toggle()">
            <i class="el-icon el-icon-close" v-if="open"></i>
            <i class="el-icon el-icon-plus" v-else="open"></i>
      </a>
    </div>
</template>

<script>
export default {
    data:function(){
      return {
        open: true
      } 
    },
    methods:{
      toggle:function(){
        console.log('toggle');
        this.open = !this.open;
      }
    }
}
</script>
