<template>
  <div class="top_fixed">
    <a href="javascript:window.history.back()" class="left_btn hide">
      <i></i>
    </a>
    <h1>个人中心</h1>
    <router-link to="/log" :class="'right_btn'">注销</router-link>
  </div>
</template>