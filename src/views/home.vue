<template>
  <div>
   <!-- head -->
    <header class="head">
      <a href="javascript:;" class="login">
        <img src="../assets/images/index/logo.jpg" alt="" />
      </a>
      <input type="search" placeholder="寻找商品" />
      <p class="head-menu">
        <span></span>
        <span></span>
        <span></span>
      </p>
    </header>
     <!-- nav -->
    <nav class="navbox">
      <ul class="navbar clearfix">
        <li class="navbar-active"><a href="#">推荐</a></li>
        <li><a href="#">女装</a></li>
        <li><a href="#">鞋包</a></li>
        <li><a href="#">居家</a></li>
        <li><a href="#">母婴儿童</a></li>
        <li><a href="#">女装</a></li>
        <li><a href="#">女装</a></li>
        <li><a href="#">女装</a></li>
        <li><a href="#">女装</a></li>
        <li><a href="#">女装</a></li>
      </ul>
      <span class="navbox-btn"></span>
    </nav>
    <!-- 图片轮播 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="coral">
      <van-swipe-item v-for="item in bannerList" :key="item.id">
        <img :src="$imgUrl + item.img" alt="" class="img" />
      </van-swipe-item>
    </van-swipe>

    <!-- 四个方块-->
    <van-grid :border="false" :column-num="4">
      <van-grid-item text="限时抢购">
        <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
        <span class="gridTitle">限时抢购</span>
      </van-grid-item>
      <van-grid-item text="积分商城">
        <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
        <span class="gridTitle">积分商城</span>
      </van-grid-item>
      <van-grid-item text="联系我们">
        <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
        <span class="gridTitle">联系我们</span>
      </van-grid-item>
      <van-grid-item to="/sort" text="商品分类">
        <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
        <span class="gridTitle">商品分类</span>
      </van-grid-item>
    </van-grid>

 <!-- activity-right -->
      <div class="activity-right">
        <div class="activity-update">
          <h2 class="activity-hd">品牌上新</h2>
          <p class="activity-desc">每日9点 抢大牌</p>
          <img src="../assets/images/index/brand.jpg" alt="" class="dapai" />
          <a class="activity-update-pic" href="#">
            <img src="../assets/images/index/indexshop.jpg" alt="" />
          </a>
        </div>
        <div class="activity-else">
          <div class="activity-else-item">
            <h2 class="activity-hd2">每日十件</h2>
            <p class="activity-desc">只为你选好货</p>
            <a class="activity-else-item-pic" href="#">
              <img src="../assets/images/index/indexship2.jpg" alt="" />
            </a>
          </div>
          <div class="activity-else-item">
            <h2 class="activity-hd2">拼啊</h2>
            <p class="activity-desc">超级好价拼团</p>
            <p class="activity-else-item-pic">
              <img src="../assets/images/index/shop_3.jpg" alt="" />
            </p>
          </div>
        </div>
      </div>

      <!--banner2-->
    <div class="banner2">
      <img src="../assets/images/index/banner2.jpg" alt="" />
    </div>
    <!-- tab商品切换 -->
    <div id="hot">
    <van-tabs type="card" class="hot-bd">
      <van-tab title="发现新品">
        <!-- 商品卡片 -->
        <van-card
          v-for="item in newsList"
          :key="item.id"
          num="2"
          price="99.00"
          desc="描述信息"
          :title="item.goodsname"
          :thumb="
            item.img
              ? $imgUrl + item.img
              : 'https://img.yzcdn.cn/vant/ipad.jpeg'
          "
        />
      </van-tab>
      <van-tab title="热门推荐">
        <!-- 商品卡片 -->
        <van-card
          v-for="item in hotsList"
          :key="item.id"
          num="2"
          price="99.00"
          desc="描述信息"
          :title="item.goodsname"
          :thumb="
            item.img
              ? $imgUrl + item.img
              : 'https://img.yzcdn.cn/vant/ipad.jpeg'
          "
        />
      </van-tab>
      <van-tab title="所有商品">
        <!-- 商品卡片 -->
        <van-card v-for="item in newsList" :key="item.id"
          num="2"
          price="99.00"
          desc="描述信息"
          :title="item.goodsname"
          :thumb=" item.img
              ? $imgUrl + item.img
              : 'https://img.yzcdn.cn/vant/ipad.jpeg'"
        />
      </van-tab>
    </van-tabs>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { getBanner, getIndexGoods } from "../util/axios";
import { Toast } from "vant";
export default {
  data() {
    return {
      bannerList: [],
      newsList: [],
      hotsList: [],
      goodsList: [],
    };
  },
  mounted() {
    axios.all([getBanner(), getIndexGoods()]).then(
      axios.spread((bannerList, indexGoods) => {
        console.log(bannerList, "轮播响应");
        if (bannerList.code == 200) {
          this.bannerList = bannerList.list;
        } else {
          Toast.fail(bannerList.msg);
        }

        if (indexGoods.code == 200) {
          console.log(indexGoods, "限时抢购响应");
          this.newsList = indexGoods.list[0];
          this.hotsList = indexGoods.list[1];
          this.goodsList = indexGoods.list[2];
        } else {
          Toast.fail(indexGoods.msg);
        }
      })
    );
  },
};
</script>

<style lang="" scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.img {
  width: 100%;
  /* 200px */
  height: 4rem;
}
.gridTitle {
  font-size: 14px;
}
.backWhite {
  background: #fff;
}
.backBlack {
  background: #000;
}
.txCenter {
  text-align: center;
}
.flexSp {
  display: flex;
  justify-content: space-between;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.wrap {
  max-width: 7.5rem;
  margin: 0 auto;
}
.head {
  height: 0.88rem;
  background: #ffffff;
  padding: 0.4rem 0.23rem 0 .23rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e4e4e4;
}
.head .login {
  width: 1.55rem;
}
.head .login img {
  width: 100%;
  height: auto;
}
.head input {
  width: 3.05rem;
  height: 0.39rem;
  background: #eeeeee;
  border-radius: 6px;
  font: 0.18rem/0.39rem "微软雅黑";
  color: #c0c0c0;
  text-align: center;
}
.head-menu {
  width: 0.55rem;
  display: flex;
  justify-content: space-between;
}
.head-menu span {
  display: block;
  width: 0.12rem;
  height: 0.12rem;
  background: #000;
  border-radius: 50%;
}

.navbox {
  background: #fff;
  position: relative;
  overflow: hidden;
  padding-left: 0.11rem;
}
.navbox .navbar {
  padding-top: 0.23rem;
  width: 20rem;
}
.navbox .navbar li {
  float: left;
  margin: 0 0.2rem;
  position: relative;
}
.navbox .navbar li a {
  font: 0.28rem/0.32rem "微软雅黑";
  padding: 0 0 0.17rem;
  color: #545454;
  border-bottom: 0.04rem solid transparent;
}
.navbox .navbar li a:hover {
  color: #ff005b;
  border-bottom: 4px solid #ff005b;
}
.navbox .navbar .navbar-active a {
  color: #ff005b;
  border-bottom-color: #ff005b;
}
.navbox .navbar .navbar-active:after {
  content: "";
  position: absolute;
  right: -0.2rem;
  top: 0;
  width: 0.01rem;
  height: 0.32rem;
  background: #f1f1f1;
}
.navbox-btn {
  display: block;
  position: absolute;
  right: 0;
  top: 0.11rem;
  width: 0.75rem;
  height: 0.59rem;
  background: #ffffff url(../assets/images/index/arrow.jpg) no-repeat center;
  background-size: 0.35rem 0.21rem;
}
.banner1 {
  height: 2.92rem;
}
.banner1 a img {
  height: 2.92rem;
  width: 100%;
}
.main-nav {
  height: 1.8rem;
  background: #fff;
  margin-bottom: 0.3rem;
}
.main-nav-ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 1.8rem;
}
.main-nav-ul > li {
  text-align: center;
}
.main-nav-ul > li img {
  height: 0.55rem;
  width: auto;
}
.main-nav-ul > li span {
  display: block;
  line-height: 0.8rem;
  font-size: 0.28rem;
  color: #676767;
}
.activity {
  height: 3.63rem;
  padding: 0.14rem 0 0 0.2rem;
  background: #fff;
  display: flex;
}
.activity-left {
  flex: 1;
  border-right: 1px solid #f0f0f0;
}
.activity-left-hd {
  font: 0.28rem/0.37rem "微软雅黑";
  color: #ff2376;
  background: url(../assets/images/index/timer.jpg) no-repeat left center;
  background-size: 0.33rem 0.31rem;
  text-indent: 1.5em;
}
.activity-left-cont {
  font-size: 0.22rem;
  line-height: 0.3rem;
  color: #878787;
}
.activity-left-countDown {
  height: 0.49rem;
  width: 3.15rem;
  position: relative;
}
.activity-left-countDown ul {
  width: 1.68rem;
  padding-top: 0.03rem;
  display: flex;
  justify-content: space-between;
}
.activity-left-countDown ul li {
  width: 0.42rem;
  height: 0.42rem;
  background: #27272f;
  border-radius: 0.06rem;
  color: #fff;
  line-height: 0.42rem;
  font-size: 0.17rem;
  text-align: center;
  position: relative;
}
.activity-left-countDown ul li:nth-child(1):after,
.activity-left-countDown ul li:nth-child(2):after {
  content: ":";
  color: #202020;
  position: absolute;
  left: 0.5rem;
  font-weight: bold;
}
.activity-left-countDown .countDown-ms {
  width: 0.96rem;
  height: 0.4rem;
  display: block;
  position: absolute;
  right: 0;
  top: 0.03rem;
  font: 0.26rem/0.4rem "微软雅黑";
  color: #422b3b;
  background: url(../assets/images/index/bg.jpg) no-repeat left center;
  background-size: 0.96rem 0.4rem;
  text-align: center;
}
.activity-left a {
  height: 2.07rem;
  width: 2.34rem;
  padding-left: 0.55rem;
  padding-top: 0.23rem;
  position: relative;
}
.activity-left a img {
  height: 2.07rem;
  width: auto;
}
.activity-left a::after {
  content: "￥14.8";
  display: block;
  line-height: 0.84rem;
  color: #fff;
  text-align: center;
  font-size: 0.22rem;
  width: 0.84rem;
  height: 0.84rem;
  background: #ff3179;
  border-radius: 50%;
  position: absolute;
  right: -0.5rem;
  top: 1.32rem;
}
.activity-right {
  flex: 1;
}
.activity-update {
  position: relative;
  padding-left: 0.18rem;
  height: 1.74rem;
  border-bottom: 1px solid #eeeeee;
}
.activity-update .dapai {
  width: auto;
  height: 0.32rem;
  margin-top: 0.18rem;
}
.activity-update-pic {
  position: absolute;
  top: -0.08rem;
  right: 0.24rem;
}
.activity-update-pic img {
  max-height: 1.78rem;
}
.activity-desc {
  font: 0.22rem/0.3rem "微软雅黑";
  color: #8f8f8f;
}
.activity-hd {
  font: 0.28rem/0.37rem "微软雅黑";
  color: #f32e76;
  position: relative;
}
.activity-hd::after {
  content: "折";
  display: block;
  width: 0.32rem;
  height: 0.23rem;
  line-height: 0.23rem;
  color: #fff;
  font-size: 0.18rem;
  border: 1px solid #ef8baf;
  text-align: center;
  background: linear-gradient(#ff2b66, #fd3799);
  position: absolute;
  left: 1.22rem;
  top: 0.05rem;
}
.activity-hd2 {
  font: 0.28rem/0.35rem "微软雅黑";
  color: #f32e76;
}
.activity-else {
  padding-top: 0.14rem;
  height: 1.74rem;
  display: flex;
}
.activity-else-item {
  flex: 1;
  padding-left: 0.18rem;
}
.activity-else-item:nth-child(1) {
  border-right: 1px solid #eeeeee;
}
.activity-else-item-pic {
  padding-right: 0.2rem;
  padding-top: 0.02rem;
  text-align: center;
}
.activity-else-item-pic img {
  max-width: 96%;
  max-height: 1.04rem;
}
.banner2 {
  margin: 0.3rem 0;
}
.banner2 img {
  height: 1.88rem;
  width: auto;
}
/*详情列表*/
#hot {
  background: #fff;
  padding: 0.2rem 0.2rem 0;
  flex-direction: column;
  padding-bottom: 1.49rem;
}
.hot-hd {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 0.68rem;
  font: 0.28rem/0.68rem "微软雅黑";
  border: 1px solid #f0f0f0;
  text-align: center;
  color: #0d0d0d;
  margin-bottom: 0.2rem;
}
.hot-hd li {
  width: 1.75rem;
  height: 0.68rem;
  border-right: 1px solid #f0f0f0;
}
.hot-hd li:nth-child(4) {
  border-right: none;
}
.hot-hd li .active {
  background-color: #f26b11;
  color: #fff;
}
.hot-bd li {
  margin-bottom: 0.3rem;
  height: 3rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
}
.hot-bd li a img {
  float: left;
  padding: 0.48rem 0.5rem 0 0.35rem;
  width: auto;
  height: 2.17rem;
}
.hot-bd-intro {
  float: left;
}
.hot-bd-intro h3 {
  font: 0.3rem/0.57rem "微软雅黑";
  color: #313131;
}
.hot-bd-intro span {
  display: block;
  font: 0.24rem/0.53rem "微软雅黑";
  color: #e72e3c;
}
.hot-bd-intro p {
  font: 0.24rem/0.53rem "微软雅黑";
  color: #9e9e9e;
}
.hot-bd-intro .hot-btn {
  margin-top: 0.16rem;
  width: 1.64rem;
  height: 0.52rem;
  background: #f26b11;
  font: 0.24rem/0.52rem "微软雅黑";
  color: #fff;
  text-align: center;
  border-radius: 4px;
}

</style>
