<template>
  <div>
    <div class="container pd">
      <ul class="pro_list clearfix">
        <router-link v-for="(item,index) in goods_list_data" :key="index" :to="'/detail/goods'+item.id+'?id='+item.id" tag="li"  v-show="item[select]==choice?true:false">
            <div class="img">
              <img :src="item.url">
              <h3>{{item.title}}</h3>
            </div>
            <p>售价：
              <span>{{item.price}}元</span>
            </p>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props:['goods_list_data','choice','select']
}
</script>