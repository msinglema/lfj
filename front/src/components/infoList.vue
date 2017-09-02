<style lang="less">
</style>

<template>
    <div class="infoList">
      <ul>
          <c-discoverItem 
            v-for="(item,index) in items"
            v-bind:item="item"
            v-bind:index="index"
            :key="item.id"
          ></c-discoverItem> 
      </ul>
      <div class="loading" :class="{none:!loading}"></div>
    </div>
</template>

<script>
import DiscoverItem from '../components/discoverItem.vue'

export default {
  props:['items','loading'],
  computed: {
    ...{}
  },
  components:{
       'c-discoverItem':DiscoverItem
    }
}
</script>
