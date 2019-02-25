<template>
  <div>
    <loading v-show="bLoading"></loading>
    <router-view></router-view>
    <bNav></bNav>
  </div>
</template>
<script>
  import bNav from './components/bNav'
  import {mapGetters} from 'vuex'

  export default {
    components:{
      bNav
    },
    computed:mapGetters(
      ['bLoading']
    ),
  }
</script>

<style lang="scss">
  
</style>
