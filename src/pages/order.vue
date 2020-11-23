<template>
  <div class="wrap">
    <!-- head -->
    <van-nav-bar
      :title="$route.name"
      left-text=""
      left-arrow
      @click-left="$router.back()"
    />
    <!--收货信息  -->
    <div class="personDetail">
      <div class="cnee">
        <p>收货人：YouSu</p>
        <span>10000000000</span>
      </div>
      <div class="personDetail-address">
        <span>收货地址：</span>
        <p>北京市海淀区隐泉路清林苑6号楼中公优就业总部3层</p>
      </div>
      <i class="iconfont icon-youjiantou"></i>
    </div>
    <!-- 交易信息1 -->
    <div class="tradeInf1">
      <div class="tradeInf1-top">
        <div class="trad-top-left clearfix">
          <img src="../assets/images/order/orderpic.png" alt="" class="fl" />
          <div class="trade-intro fl">
            <p class="trade-intro-tit">雅诗兰黛护肤霜</p>
            <p class="trade-intro-size">规格：50g</p>
          </div>
        </div>
        <div class="trad-top-right">
          <p><span>￥</span>123.00</p>
        </div>
      </div>
      <div class="tradeInf1-center">
        <p class="tradeInf1-center-left">购买数量：</p>
        <ul class="tradeInf1-center-right">
          <li>-</li>
          <li><input type="text" /></li>
          <li>+</li>
        </ul>
      </div>
      <div class="tradeInf1-bottom">
        <p class="tradeInf1-bottom-left">配送方式</p>
        <p class="tradeInf1-bottom-right">XX快递</p>
      </div>
    </div>
    <!-- 交易信息2-->
    <div class="tradeInf2">
      <div class="tradeInf2-top">
        <p>优惠券</p>
        <p>无可用</p>
      </div>
      <div class="tradeInf2-bottom">
        <p class="tradeInf2-bottom-left">使用积分</p>
        <div class="tradeInf2-bottom-right">
          <input type="text" placeholder="输入积分" />
          <a href="#">使用</a>
          <p>可用<span>50</span>积分</p>
        </div>
      </div>
    </div>
    <!-- 交易信息3 -->
    <div class="tradeInf3">
      <div class="tradeInf3-top">
        <ul>
          <li>
            <p class="f3-li-left">商品金额</p>
            <p class="f3-li-right">￥123.00</p>
          </li>
          <li>
            <p class="f3-li-left">运费</p>
            <p class="f3-li-right">+￥0.00</p>
          </li>
          <li>
            <p class="f3-li-left">优惠券</p>
            <p class="f3-li-right">-￥0.00</p>
          </li>
          <li>
            <p class="f3-li-left">会员优惠</p>
            <p class="f3-li-right">-￥0.00</p>
          </li>
          <li>
            <p class="f3-li-left">积分抵扣</p>
            <p class="f3-li-right">-￥0.00</p>
          </li>
        </ul>
      </div>
      <div class="tradeInf3-bottom">
        <p>实付金额：<span>￥123.00</span></p>
        <a href="#">提交订单</a>
      </div>
    </div>
    <v-nav></v-nav>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="" scoped>
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
body {
  background: #f1f1f1;
}
.wrap {
  max-width: 7.5rem;
  margin: 0 auto;
}

.personDetail {
  height: 1.47rem;
  padding-top: 0.04rem;
  padding: 0 0.23rem;
  position: relative;
  background: #fff;
}
.personDetail .cnee {
  width: 6.33rem;
  height: 0.64rem;
  line-height: 0.64rem;
  font-size: 0.24rem;
  color: #676767;
  display: flex;
  justify-content: space-between;
}
.personDetail-address {
  display: flex;
  line-height: 0.3rem;
  font-size: 0.24rem;
  color: #676767;
}
.personDetail-address p {
  width: 5.3rem;
}
.personDetail .icon-youjiantou {
  color: #b0b0b0;
  font-size: 0.26rem;
  position: absolute;
  right: 0.26rem;
  top: 0.62rem;
}
.tradeInf1 {
  height: 3.49rem;
  margin-bottom: 0.11rem;
  background: #fff;
  padding-top: 0.13rem;
  margin-top: 0.12rem;
  padding: 0 0.23rem;
}
.tradeInf1-top {
  height: 1.15rem;
  display: flex;
  justify-content: space-between;
}
.tradeInf1-top .trad-top-left {
  height: 1.15rem;
}
.tradeInf1-top .trad-top-left img {
  height: 1.15rem;
  width: auto;
  margin-left: 0.06rem;
  margin-right: 0.19rem;
}
.tradeInf1-top .trad-top-left .trade-intro-tit {
  margin-top: 0.15rem;
  font: 0.25rem/0.49rem "微软雅黑";
  color: #6b6b6b;
}
.tradeInf1-top .trad-top-left .trade-intro-size {
  font: 0.23rem/0.51rem "微软雅黑";
  color: #b1b1b1;
}
.tradeInf1-top .trad-top-right {
  padding-top: 0.15rem;
}
.tradeInf1-top .trad-top-right p {
  font: 0.3rem/0.59rem "微软雅黑";
  color: #df343a;
}
.tradeInf1-top .trad-top-right p span {
  font-size: 0.19rem;
}
.tradeInf1-center {
  height: 1.38rem;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  justify-content: space-between;
}
.tradeInf1-center-left {
  font: 0.25rem/1.38rem "微软雅黑";
  color: #6b6b6b;
}
.tradeInf1-center-right {
  display: flex;
  justify-content: space-between;
  width: 2.92rem;
  height: 1.29rem;
  align-items: center;
  text-align: center;
}
.tradeInf1-center-right li {
  height: 0.64rem;
  line-height: 0.64rem;
}
.tradeInf1-center-right li:nth-child(1) {
  width: 0.73rem;
  border-radius: 4px;
  border: 1px solid #535353;
}
.tradeInf1-center-right li:nth-child(2) {
  width: 1.17rem;
  border-radius: 4px;
  border: 1px solid #535353;
}
.tradeInf1-center-right li:nth-child(2) input {
  text-align: center;
  width: 1.17rem;
  height: 0.64rem;
}
.tradeInf1-center-right li:nth-child(3) {
  width: 0.73rem;
  border-radius: 4px;
  border: 1px solid #535353;
}
.tradeInf1-bottom {
  height: 0.95rem;
  display: flex;
  justify-content: space-between;
  line-height: 0.95rem;
  font-size: 0.24rem;
  color: #6f6f6f;
}
.tradeInf2 {
  height: 2.05rem;
  padding: 0 0.23rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.1rem;
}
.tradeInf2-top {
  display: flex;
  justify-content: space-between;
  flex: 1;
  line-height: 1rem;
  font-size: 0.24rem;
  border-bottom: 1px solid #f0f0f0;
  color: #656565;
}
.tradeInf2-bottom {
  flex: 1;
  display: flex;
  justify-content: space-between;
}
.tradeInf2-bottom-left {
  line-height: 1rem;
  font-size: 0.24rem;
  color: #656565;
}
.tradeInf2-bottom-right {
  width: 3.9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tradeInf2-bottom-right input {
  width: 1.49rem;
  height: 0.7rem;
  border: 2px solid #d9d9d9;
  text-align: center;
  font-size: 0.23rem;
  color: #e3e3e3;
}
.tradeInf2-bottom-right a {
  width: 0.7rem;
  height: 0.69rem;
  border: 2px solid #f19123;
  background: #f26b11;
  color: #fff;
  font-size: 0.23rem;
  text-align: center;
  line-height: 0.69rem;
}
.tradeInf2-bottom-right p {
  font-size: 0.23rem;
  color: #989898;
}
.tradeInf2-bottom-right p span {
  color: #da3543;
}
.tradeInf3 {
  height: 4.72rem;
  background: #fff;
  padding: 0.23rem 0.23rem 0 0.23rem;
  margin-bottom: 1.15rem;
}
.tradeInf3-top {
  height: 2.37rem;
}
.tradeInf3-top ul {
  height: 2.37rem;
  border-bottom: 1px solid #efefef;
}
.tradeInf3-top ul li {
  display: flex;
  justify-content: space-between;
  height: 0.45rem;
  align-items: center;
}
.tradeInf3-top ul li .f3-li-left {
  font-size: 0.25rem;
  color: #6b6b6b;
}
.tradeInf3-top ul li .f3-li-right {
  font-size: 0.2rem;
  color: #dd3447;
}
.tradeInf3-top ul li:nth-child(3) {
  height: 0.42rem;
}
.tradeInf3-top ul li:last-child {
  height: 0.36rem;
}
.tradeInf3-bottom {
  height: 2.44rem;
}
.tradeInf3-bottom p {
  height: 1.24rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 0.35rem;
  color: #646464;
}
.tradeInf3-bottom p span {
  font-size: 0.29rem;
  color: #db363d;
}
.tradeInf3-bottom a {
  width: 3.55rem;
  height: 1.12rem;
  background: #f26b11;
  line-height: 1.12rem;
  color: #fff;
  font-size: 0.29rem;
  text-align: center;
  border-radius: 3px;
  margin: 0 auto;
}
</style>
