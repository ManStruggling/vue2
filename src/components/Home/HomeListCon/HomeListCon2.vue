<template>
  <li>
    <ul class="service_list">
      <li v-for="(item,index) in home_list_2" :key="index">
        <a href="article.html">
          <img :src="item.url">
          <div>
            <h3>{{item.title}}</h3>
            <p class="service_time">地址:
              <span>{{item.address}}</span>
            </p>
            <p class="service_price">距离:
              <span>{{item.distance}}</span>
            </p>
          </div>
        </a>
      </li>
    </ul>
  </li>
</template>
<script>
export default {
  props:['home_list_2']
}
</script>