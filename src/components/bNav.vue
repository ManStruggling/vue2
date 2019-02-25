<template>
  <div class="footer">
    <ul>
      <router-link to="/home" tag="li" active-class="active">
        <p>
          <i class="icon iconfont icon-shouye"></i>
        </p>
        <h4>宠尚门</h4>
      </router-link>
      <router-link to="/goods" tag="li" active-class="active">
        <p>
          <i class="icon iconfont icon-shangcheng"></i>
        </p>
        <h4>商品</h4>
      </router-link>
      <router-link to="/serve" tag="li" active-class="active">
        <p>
          <i class="icon iconfont icon-choujiang1"></i>
        </p>
        <h4>服务</h4>
      </router-link>
      <router-link to="/user" tag="li" active-class="active">
        <p>
          <i class="icon iconfont icon-wode"></i>
        </p>
        <h4>个人中心</h4>
      </router-link>
    </ul>
  </div>
</template>