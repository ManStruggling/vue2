<template>
    <div>
        <div class="zzc" style="display: block;"></div>
        <div class="zj_list" style="display: block;">
		    <h4>选择筛选条件</h4>
		    <ul class="goodsFilter" @click="change_filter(false)">
		    	<li @click="change_select('all','show_all')">全部商品</li>
		    	<li @click="change_select('tag','cat')">猫科</li>
		    	<li @click="change_select('tag','dog')">犬科</li>
		    	<li>取消</li>
		    </ul>
	    </div>
    </div>
</template>
<script>
export default {
	props:['change_filter','change_select']
}
</script>
<style lang="scss">
	ul.goodsFilter>li:active{background:#ccc;}
</style>