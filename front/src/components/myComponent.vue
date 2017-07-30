<template>
    <div>
        <input type="text" v-model="val" />
        <p>{{val}}</p>
    </div>
</template>

<script>
export default {
    data:function(){
       return {
          val : 'test'
       }
    },
    watch:{
        val : function(value){
            console.log('------------>',value)
        }
    }
}
</script>

<style scoped>

</style>
