<template>
  <div>
    <ul class="tabs1">
      <router-link to="/" tag="li" @click.native="tab_change(1)" :class="tab==1?'on':''">
        <a>特色服务</a>
      </router-link>
      <router-link to="/" tag="li" @click.native="tab_change(2)" :class="tab==2?'on':''">
        <a>推荐医院</a>
      </router-link>
      <router-link to="/" tag="li" @click.native="tab_change(3)" :class="tab==3?'on':''">
        <a>宠物百科</a>
      </router-link>
    </ul>
    <ul class="content">
      <HomeListCon1 :home_list_1='home_list_1' v-show="tab===1"></HomeListCon1>
      <HomeListCon2 :home_list_2='home_list_2' v-show="tab===2"></HomeListCon2>
      <HomeListCon3 :home_list_3='home_list_3' v-show="tab===3"></HomeListCon3>
    </ul>
    <div class="fill2"></div>
  </div>
</template>
<script>
import HomeListCon1 from './HomeListCon/HomeListCon1'
import HomeListCon2 from './HomeListCon/HomeListCon2'
import HomeListCon3 from './HomeListCon/HomeListCon3'
export default {
  props:['home_list_1','home_list_2','home_list_3'],
  data(){
    return {
      tab:1
    }
  },
  components:{
    HomeListCon1,HomeListCon2,HomeListCon3
  },
  methods: {
    tab_change(index){
      this.tab = index;
    }
  },
}
</script>
<style lang="scss">
  .fill2{height:60px;}
</style>