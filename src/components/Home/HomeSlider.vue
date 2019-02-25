<template>
  <div>
      <div class="fill"></div>
    <Swipe class="my_swipe" :speed="100" :auto="2000">
      <SwipeItem v-for="(item,index) in home_banner" :key=index>
        <router-link :to="'/detail/'+item.self+'?id='+item.id">
          <img :src="item.url" alt style="height:100%;width:100%;">
        </router-link>
      </SwipeItem>
    </Swipe>
  </div>
</template>

<script>
import "vue-swipe/dist/vue-swipe.css";
import { Swipe, SwipeItem } from "vue-swipe";
export default {
  data(){
    return {
      home_banner:[]
    }
  },
  components: {
    Swipe,
    SwipeItem
  },
  mounted() {
    this.$http({
      url:'http://localhost:4000/api/petHome'
    }).then(
      res=>{
        this.home_banner = res.data.data[0].home_banner;
      }
    )
  },
};
</script>

<style lang="scss">
.fill{
    height:44px;
}
.my_swipe {
  height: 200px;
}
</style>