<template>
  <div class="wrap">
    <div class="top_fixed">
      <a href="javascript:window.history.back()" class="left_btn">
        <i class="icon iconfont" style="font-size:20px;">&#xe622;</i>
      </a>
      <h1>产品详情</h1>
      <a href="shopcar.html" class="right_btns">
        <i class="icon iconfont" style="font-size:20px;">&#xe609;</i>
        <span>{{carNum}}</span>
      </a>
    </div>

    <div class="container">
      <div>
        <img :src="detail_data.url" alt>
      </div>
      <div class="pro_detail">
        <ul class="detail_list">
          <h2>{{detail_data.title}}</h2>
          <li>
            <span>单价:</span>
            <a>{{detail_data.price}}</a>元
          </li>
          <li>
            <span>数量:</span>
            <input type="button" value="-" @click="changeNum(-1,detail_data)">
            <input type="number" v-model="good_num" id="num">
            <input type="button" value="+" @click="changeNum(1,detail_data)">
          </li>
        </ul>
        <h3>商品介绍</h3>
        <div class="details">
          <img :src="detail_data.detail_url">
        </div>
      </div>
    </div>

    <div class="footer">
      <a class="next" @click="add(good_num,goodList,carList)">加入购物车</a>
    </div>
  </div>
</template>
<script>
import * as types from '../../store/types'
import { mapGetters } from "vuex";
import qs from 'qs'

export default {
  data() {
    return {
      detail_data: {},
      good_num: 0,
      goodList: []
    };
  },
  computed: mapGetters(["carList", "carNum"]),
  methods: {
    changeNum(num, obj) {
      let newNum = this.good_num + num;
      if (newNum <= 1) {
        newNum = 1;
      }
      this.good_num = newNum;
      this.goodList.push(obj);
    },
    add(num,gList,cList){
      if(num){
        let onOff = true;
       this.$store.dispatch(types.ADD_NUM,num);
       cList.forEach(item => {
         if(item.id==gList[0].id){
           item.num+=this.good_num;
           this.$store.dispatch(types.CAR_LIST,cList)
          onOff = false;
        }
       });
       if(onOff){
         gList[0].num = this.good_num;
           cList.push(gList[0])
          this.$store.dispatch(types.CAR_LIST,cList) 
       }
       this.good_num = 0;
       this.goodList = [];
        axios.post('http://localhost:4000/api/petCar',
          qs.stringify({
            "carList":this.$store.state.carList,
              "carNum":this.$store.state.carNum
          })
        )
      }
    }
  },
  mounted() {
    axios({
      url: "http://localhost:4000/api/petDetail"
    }).then(res => {
      let id = this.$route.params.id;
      this.detail_data = res.data.data[0][id];
    });
  },
  beforeDestroy() {

  },
};
</script>