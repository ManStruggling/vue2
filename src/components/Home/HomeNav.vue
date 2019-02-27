<template>
  <ul class="nine_grid">
    <li v-for="(item,index) in home_nav_data" :key="index">
      <router-link :to="'/servedetail/'+item.self+'?id='+item.id">
        <img :src="item.url">
        <p>{{item.title}}</p>
      </router-link>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      home_nav_data:[]
    }
  },
  mounted() {
    axios({
      url:'http://localhost:4000/api/petServe'
    }).then(
      res=>{
        this.home_nav_data = res.data.data[0].serve;
      }
    )
  },
}
</script>