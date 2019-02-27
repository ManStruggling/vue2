<template>
  <div class="container pd">
      <ul class="gwc_list">
        <li class="shdz">
          <a href="dzgl.html">
            <span class="ggdz">地址</span>
            <p style=" margin-top:10px">
              <span class="name">陈伟</span>
              <span class="tel">15807197602</span>
            </p>
            <p style=" margin-bottom:10px">
              <span class="addr">北京市丰台区星火科技大厦1212</span>
            </p>
          </a>
        </li>
      </ul>

      <ul class="gw_list">
        <li v-for="(item,index) in carList" :key="index">
          <a>
            <img :src="item.url">
          </a>
          <div>
            <h3>{{item.title}}</h3>
            <p class="service_time">单价:
              <span>{{item.price}}元</span>
            </p>
            <p class="service_price">数量:
              <input type="button" value="-">
              <input type="number" :value="item.num" id="num">
              <input type="button" value="+">
            </p>
          </div>
        </li>
      </ul>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  computed:mapGetters(
    ['carList']
  ),
}
</script>