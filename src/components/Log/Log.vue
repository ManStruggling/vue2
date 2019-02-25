<template>
  <div class="wrap login">
    <div class="log_banner">
      <img src="../../assets/images/dog.png">
    </div>
    <form>
      <div class="yhmm">
        <label>
          <i class="icon iconfont">&#xe657;</i>
        </label>
        <input type="text" name="phone" placeholder="请输入手机号">
      </div>
      <div class="yhmm">
        <label>
          <i class="icon iconfont">&#xe66b;</i>
        </label>
        <input type="text" name="password" placeholder="请输入密码">
      </div>
      <div class="wj">
        <a class="wjmm" href="">忘记密码？</a>
      </div>
      <div class="dl" style="margin-top:35px">
        <a class="tjan" href="">登录</a>
      </div>
      <div class="qx" style="margin-top:10px">
        <router-link to="/reg" :class="'tjan'">注册</router-link>
      </div>
    </form>
  </div>
</template>