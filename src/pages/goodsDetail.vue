<template>
  <div class="wrap">
    <!-- <h1>接收到的参数：{{$route.query.id}}</h1> -->
    <!-- 导航栏 -->
    <van-nav-bar
      :title="$route.name"
      left-text=""
      left-arrow
      @click-left="$router.back()"
    />
    <!-- 商品展示 -->
    <div class="display" v-if="goodsInfo">
      <a href="#">
        <img
          :src="
            goodsInfo.img
              ? $imgUrl + goodsInfo.img
              : 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1181805538,1146807157&fm=26&gp=0.jpg'
          "
          alt=""
        />
      </a>
      <div class="display-intro">
        <h2>
          <a href="#">{{ goodsInfo.goodsname }}</a>
        </h2>
        <p>
          ￥{{ goodsInfo.market_price.toFixed(2)
          }}<span>（此价格不与套装优惠同时享受）</span>
        </p>
      </div>
    </div>
    <!-- 属性选择 -->
    <ul class="choose">
      <li class="choose-sales">
        <p>促销：<span>满减</span>满两件9折；3件8折</p>
      </li>
      <li class="choose-quantity">
        <p>购买数量</p>
        <van-stepper
          v-model="value"
          theme="round"
          button-size="22"
          disable-input
          class="choose-num"
        />
      </li>
      <li class="choose-set">
        <h2>商品属性</h2>
        <p>
          {{ goodsInfo.specsname
          }}<van-tag
            class="set-5g"
            v-for="item in goodsAttr"
            :key="item.id"
            type="success"
            >{{ item }}</van-tag
          >
        </p>
      </li>
    </ul>
    <!-- 商品详情 -->
    <div class="page">
      <p class="page-hd">商品详情</p>
      <div class="page-bd">
        <p v-html="goodsInfo.description"></p>
      </div>
    </div>
    <!-- 商品评价 -->
    <div class="eval">
      <p class="eval-hd">商品评价</p>
      <div class="eval-bd">
        <h3>123458fg</h3>
        <p>效果很好，物流到位，下次继续来！</p>
        <ul>
          <li><img src="../assets/images/detail/picDetail_8.jpg" alt="" /></li>
          <li><img src="../assets/images/detail/picDetail_9.jpg" alt="" /></li>
          <li>
            <img src="../assets//images/detail/picDetail_10.jpg" alt="" />
          </li>
        </ul>
        <p class="eval-date">2020-01-13</p>
        <p class="eval-comment">
          <span>共1000+条评论</span><span>查看更多></span>
        </p>
      </div>
    </div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" color="#07c160" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="goCart"/>
      <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
      <van-goods-action-button
        type="warning"
        text="加入购物车"
        @click="goCart"
      />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
import { getGoodsInfo, getCartAdd } from "../util/axios";
import {Toast} from 'vant'
export default {
  data() {
    return {
      goodsInfo: "",
      goodsAttr: [],
      value: 1,
    };
  },
  mounted() {
    this.getGoodsList();
  },
  methods: {
    getGoodsList() {
      getGoodsInfo({ id: this.$route.query.id }).then((res) => {
        console.log(res, "商品细节列表响应");
        if (res.code == 200) {
          this.goodsInfo = res.list[0];
          this.goodsAttr = this.goodsInfo.specsattr
            ? this.goodsInfo.specsattr.split(",")
            : [];
        }
      });
    },
    //  加入购物车事件
    goCart() {
      console.log(JSON.parse(sessionStorage.getItem("userInfo")).uid,'uuuuuuuuid');
      if (sessionStorage.getItem("userInfo")) {
        // 如果已经登录
        getCartAdd({
          uid: JSON.parse(sessionStorage.getItem("userInfo")).uid,
          goodsid: this.goodsInfo.id,
          num: this.value,
        }).then((res) => {
          console.log(res, "加入购物车响应");
          Toast.success(res.msg);
          this.$router.push({
            path:'/cart',
            query:{
              id:JSON.parse(sessionStorage.getItem('userInfo')).uid
            }
          })
        });
      }else{
        Toast.fail('还未登录，请先登录哦~');
        this.$router.push('/login')
      }
    },
  },
};
</script>

<style lang="" scoped>
body {
  background: #f1f1f1;
}
.wrap {
  max-width: 7.5rem;
  margin: 0 auto;
}

.display {
  height: 9.54rem;
  margin-bottom: 0.17rem;
  background: #fff;
}
.display a img {
  height: 7.48rem;
  width: auto;
}
.display-intro {
  padding: 0.23rem 0.37rem 0 0.37rem;
}
.display-intro h2 {
  font: 0.3rem/0.48rem "微软雅黑";
  color: #333333;
}
.display-intro P {
  font: 0.26rem/0.86rem "微软雅黑";
  color: #e3393a;
}
.display-intro P span {
  font-size: 0.22rem;
  color: #878787;
}
.choose {
  height: 3.98rem;
  background: #fff;
  margin-bottom: 0.2rem;
}
.choose-sales {
  height: 0.98rem;
  border-bottom: 1px solid #f1f1f1;
  padding: 0 0.23rem;
}
.choose-sales p {
  font: 0.26rem/0.98rem "微软雅黑";
  color: #444444;
}
.choose-sales p span {
  display: inline-block;
  width: 0.96rem;
  height: 0.35rem;
  border: 1px solid #b0281a;
  border-radius: 4px;
  font-size: 0.2rem;
  line-height: 0.35rem;
  color: #b02916;
  margin: 0 0.15rem;
  letter-spacing: 8px;
  text-indent: 6px;
}
.choose-quantity {
  height: 1.08rem;
  border-bottom: 1px solid #f1f1f1;
  padding: 0 0.23rem;
  display: flex;
  justify-content: space-between;
}
.choose-quantity p {
  font: 0.26rem/1.08rem "微软雅黑";
  color: #333;
}
.choose-quantity .choose-num {
  margin-top: 0.25rem;
  width: 2.1rem;
  height: 0.57rem;
  font-size: 0.2rem;
  line-height: 0.57rem;
  text-align: center;
}

.choose-set {
  padding: 0.14rem 0.23rem 0 0.23rem;
}
.choose-set h2 {
  font: 0.26rem/0.82rem "微软雅黑";
  color: #454545;
}
.choose-set p {
  color: #b5b5b5;
  font: 0.24rem/0.59rem "微软雅黑";
}
.choose-set p .set-30g {
  display: inline-block;
  width: 1.5rem;
  height: 0.6rem;
  background: #e43a3d;
  font: 0.3rem/0.6rem "微软雅黑";
  color: #fff;
  text-align: center;
  border-radius: 3px;
  margin-left: 0.7rem;
}
.choose-set p .set-5g {
  display: inline-block;
  width: 1.17rem;
  height: 0.6rem;
  background: #e1e1e3;
  font: 0.3rem/0.6rem "微软雅黑";
  color: #fff;
  text-align: center;
  border-radius: 3px;
  margin-left: 0.15rem;
}
.page {
  background: #fff;
  margin-bottom: 0.3rem;
}
.page-hd {
  font: 0.29rem/0.95rem "微软雅黑";
  color: #444444;
  margin-left: 0.23rem;
  margin-bottom: 0.05rem;
}
.page-bd a {
  width: 100%;
}
.page-bd a .details1 {
  height: 4.58rem;
  width: auto;
}
.page-bd a .details2 {
  height: 6.48rem;
  width: auto;
}
.page-bd a .details3 {
  height: 5.92rem;
  width: auto;
}
.page-bd a .details4 {
  height: 3.5rem;
  width: auto;
}
.page-bd a .details5 {
  height: 3.31rem;
  width: auto;
}
.eval {
  padding: 0 0.23rem;
  background: #fff;
  margin-bottom: 1.12rem;
}
.eval-hd {
  color: #444444;
  font: 0.29rem/0.93rem "微软雅黑";
  border-bottom: 1px solid #eeeeee;
}
.eval-bd {
  padding-top: 0.14rem;
}
.eval-bd h3 {
  font: 0.26rem/0.6rem "微软雅黑";
  color: #666666;
}
.eval-bd p {
  font: 0.25rem/0.51rem "微软雅黑";
  color: #666666;
}
.eval-bd ul {
  padding-top: 0.2rem;
  height: 1.63rem;
  width: 5.26rem;
  display: flex;
  justify-content: space-around;
}
.eval-bd ul li img {
  height: 1.51rem;
  width: auto;
}
.eval-bd .eval-date {
  height: 0.72rem;
  border-bottom: 1px solid #eeeeee;
  font: 0.2rem/0.72rem "微软雅黑";
  color: #999999;
}
.eval-bd .eval-comment {
  color: #999999;
  height: 0.81rem;
  font: 0.23rem/0.81rem "微软雅黑";
  padding-bottom: 0.1rem;
  display: flex;
  justify-content: space-between;
}
</style>
