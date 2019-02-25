<template>
  <div class="top_fixed">
    <a href="javascript:window.history.back()" class="left_btn hide">
      <i></i>
    </a>
    <h1>全部商品</h1>
    <a class="right_btn" style="text-decoration:none;" @click="change_filter(true)">筛选</a>
  </div>
</template>
<style lang="scss">
  .top_fixed a.right_btn:active{background:#bbb}
</style>
<script>
export default {
  props:['change_filter']
}
</script>