<template>
  <div class="container">
    <div>
      <img :src="detail_data.url" alt="">
    </div>
    <div class="pro_detail">
      <!--产品指标-->
      <ul class="detail_list">
        <h2>{{detail_data.title}}</h2>
        <li>
          <span>单价:</span>
          <a>{{detail_data.price}}</a>元
        </li>
        <li>
          <span>数量:</span>
          <input type="button" value="-">
          <input type="number" value="1" id="num">
          <input type="button" value="+">
        </li>
      </ul>

      <h3>商品介绍</h3>
      <div class="details">
        <img :src="detail_data.detail_url">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['detail_data']  
}
</script>