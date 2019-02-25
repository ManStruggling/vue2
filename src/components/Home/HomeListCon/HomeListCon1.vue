<template>
    <li>
      <ul class="service_list">
        <li v-for="(item,index) in home_list_1" :key="index">
          <router-link :to="'/servedetail/'+item.self+'?id='+item.id">
            <img :src="item.url">
            <div>
              <h3>{{item.title}}</h3>
              <p class="service_time">服务时间:
                <span>{{item.time}}</span>
              </p>
              <p class="service_price">服务价格:
                <span>{{item.price}}</span>
              </p>
            </div>
          </router-link>
        </li>
      </ul>
    </li>
</template>
<script>
export default {
  props:['home_list_1']
}
</script>