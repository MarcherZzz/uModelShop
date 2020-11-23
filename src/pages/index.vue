<template>
 <div>
     <!-- 二级出口 -->
<router-view></router-view>
<!-- 底部导航 -->
<van-tabbar v-model="active" active-color="#07c160" inactive-color="#000" >
  <van-tabbar-item icon="wap-home-o" to='/home'>首页</van-tabbar-item>
  <van-tabbar-item icon="apps-o" to='/sort'>分类</van-tabbar-item>
  <van-tabbar-item icon="shopping-cart-o" to='/cart'>购物车</van-tabbar-item>
  <van-tabbar-item icon="friends-o" to='/mine'>我的</van-tabbar-item>
</van-tabbar>
 </div>
</template>

<script>
export default {
 data() {
 return {
   active:0
 };
 },
};
</script>

<style lang="" scoped>

</style>
