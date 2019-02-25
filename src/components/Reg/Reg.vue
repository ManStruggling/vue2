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
        <input type="text" placeholder="请输入手机号" name="phone" required>
      </div>
      <div class="yhmm">
        <label>
          <i class="icon iconfont">&#xe603;</i>
        </label>
        <input type="text" placeholder="请输入验证码">
        <input type="button" value="获取验证码">
      </div>
      <div class="yhmm">
        <label>
          <i class="icon iconfont">&#xe66b;</i>
        </label>
        <input type="text" placeholder="请输入密码">
      </div>
      <div class="wj">
        <router-link to="/log" :class="'wjmm'">已有账号，点击登录</router-link>
      </div>
      <div class="dl" style="margin-top:35px">
        <a class="tjan" href="login.html">确认</a>
      </div>
    </form>
  </div>
</template>