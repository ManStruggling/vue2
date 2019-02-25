<template>
  <div class="wrap">
    <!--顶部-->
    <div class="top_fixed">
      <a href="/" class="left_btn">
        <i class="icon iconfont">&#xe622;</i>
      </a>
      <h1>服务详情</h1>
      <a href="yylc1.html" class="right_btn">预约</a>
    </div>

    <div class="container">
      <ul class="service_list">
        <li class="bgwhite">
          <a href="javascript:;">
            <img :src="serve_detail_data.url">
            <div>
              <h3>{{serve_detail_data.title}}</h3>
              <p class="service_time">服务时间:
                <span>{{serve_detail_data.time}}</span>
              </p>
              <p class="service_price">服务价格:
                <span>{{serve_detail_data.price}}</span>
              </p>
            </div>
          </a>
        </li>
      </ul>

      <ul class="tabs">
        <router-link :to="'/servedetail/'+str+'/serve'" tag="li" active-class="on"><a>服务内容</a></router-link>
        <router-link :to="'/servedetail/'+str+'/apply'" tag="li" active-class="on"><a>适用</a></router-link>
        <router-link :to="'/servedetail/'+str+'/range'" tag="li" active-class="on"><a>服务范围</a></router-link>
      </ul>
      <ul class="content">
        <router-view :serve_detail_data='serve_detail_data'></router-view>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      str:'',
      serve_detail_data:{}
    }
  },
  mounted() {
    this.str = this.$route.params.id;
    axios({
      url:'http://localhost:4000/api/petServeDetail'
    }).then(
      res=>{
        let id = this.$route.params.id;
        this.serve_detail_data = res.data.data[0][id];
      }
    )
  },
}
</script>