<template>
  <div class="container pb">
    <ul class="service_list">
      <router-link v-for="(item,index) in serve_list_data" :key=index :to="'/servedetail/'+item.self+'?id='+item.id" tag="li">
          <img :src="item.url">
          <div>
            <h3>{{item.title}}</h3>
            <p class="service_time">服务时间:
              <span>{{item.time}}</span>
            </p>
            <p class="service_price">服务价格:
              <span>￥{{item.price}}元</span>
            </p>
          </div>
      </router-link>
    </ul>
    <div class="fill2"></div>
  </div>
</template>
<script>
export default {
  props:['serve_list_data']
}
</script>