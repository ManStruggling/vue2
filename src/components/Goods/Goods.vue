<template>
  <div>
    <GoodsHead :change_filter='change_filter'></GoodsHead>
    <Goods-list :goods_list_data='goods_list_data' :choice='choice' :select='select'></Goods-list>
    <GoodsFilter v-show="bFilter" :change_filter='change_filter' :change_select='change_select'></GoodsFilter>
  </div>
</template>
<script>
import GoodsHead from "./GoodsHead";
import GoodsList from "./GoodsList";
import GoodsFilter from "./GoodsFilter";
export default {
  data() {
    return {
      choice:'show_all',
      select:'all',
      bFilter: false,
      goods_list_data:[]
    };
  },
  components: {
    GoodsHead,
    GoodsList,
    GoodsFilter
  },
  methods: {
      change_filter(bl){
          this.bFilter = bl;
      },
      change_select(s1,s2){
        this.select = s1;
        this.choice = s2;
      }
  },
  mounted() {
      axios({
          url:'http://localhost:4000/api/petGoods'
      }).then(
          res=>{
              this.goods_list_data = res.data.data[0].goods;
          }
      )
  },
};
</script>