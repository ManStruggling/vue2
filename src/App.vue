<template>
  <div>
    <loading v-show="bLoading"></loading>
    <router-view></router-view>
    <bNav v-show="bNav"></bNav>
  </div>
</template>
<script>
  import bNav from './components/bNav'
  import {mapGetters} from 'vuex'
  import * as types from './store/types';

  export default {
    components:{
      bNav
    },
    computed:mapGetters(
      ['bNav','bLoading','carList','carNum']
    ),
    watch:{
      $route:{//路由监听
        handler:function(to){
          let path = to.path;
          if(/detail|servedetail|car|log|reg/.test(path)){
            this.$store.dispatch(types.VIEW_NAV,false);
          }else{
            this.$store.dispatch(types.VIEW_NAV,true);
          }
        },
        immediate:true
      }
    },
    mounted() {
      axios({url:'http://localhost:4000/api/petCarData'}).then(
        res=>{
          this.$store.dispatch(types.CAR_LIST,res.data.data[0].carList.carList);
          this.$store.dispatch(types.SET_NUM,res.data.data[0].carNum);
        }
      )
    }
  }
</script>
