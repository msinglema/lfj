<style lang="less">
  .quick-question{
    font-size: 0.22rem; text-align:center; width:1rem;
    position: fixed; bottom: 1.2rem; right:0.4rem; z-index:9999;
    .btn-group{
      .btn{
        display: block;
        margin: 0.1rem 0; padding: 0.12rem 0.2rem; border-radius: 0.5rem;
        color:#fff; background-color:#1eac11;
        &:hover{cursor: pointer; }
      }
    }
    .toggler{
      width:1rem; height:1rem; border-radius:5rem;
      font-size: 0.32rem; background-color:#1eac11;
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
        open: false
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
