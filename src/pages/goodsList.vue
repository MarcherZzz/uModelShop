<template>
  <div class="wrap">
    <!-- head -->
    <header class="head">
      <a href="javascript:;" @click="$router.back()">
        <img src="../assets/images/productList/arrowLeft.jpg" alt="" />
      </a>
      <a href="javascript:;" class="login">
        <img src="../assets/images/index/logo.jpg" alt="" />
      </a>
      <p class="head-menu">
        <span></span>
        <span></span>
        <span></span>
      </p>
    </header>
    <!-- 搜索框 -->
    <div class="searchbox">
      <input type="search" class="searchbox-input" placeholder="搜索商品" />
      <i class="iconfont icon-sousuo"></i>
    </div>
    <!-- 详情列表 -->
    <van-list class="probox">
      <van-card
      @click='goDe(item.id)'
        v-for="item in goodsList"
        :key="item.id"
        desc="这是当季热卖"
        :price="item.price.toFixed(2)"
        :title="item.goodsname"
        :thumb="
          item.img
            ? $imgUrl + item.img
            : 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605690430066&di=6b40da2d29ed89625f77cf2d525a943f&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201409%2F11%2F20140911211243_3rT4u.jpeg'
        "
      />
    </van-list>
  </div>
</template>

<script>
import { getGoods } from "../util/axios";
export default {
  data() {
    return {
      goodsList: [],
    };
  },
  mounted() {
      this.getGoodsList()
  },
  methods: {
    getGoodsList() {
      getGoods({
        fid: this.$route.query.id,
      }).then((res) => {
        if (res.code == 200) {
            console.log(res,'商品列表响应');
          this.goodsList = res.list;
        }
      });
    },
    goDe(id) {
      this.$router.push({
        path: "/goodsDetail",
        query: {
          id,
        },
      });
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
.head {
  height: 0.88rem;
  background: #ffffff;
  padding: 0.4rem 0.23rem 0 0.23rem;
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

.searchbox {
  height: 1.2rem;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-bottom: 0.15rem;
}
.searchbox-input {
  width: 6.23rem;
  height: 0.77rem;
  background: #f26b11;
  border-radius: 0.77rem;
  font: 0.26rem/0.77rem "微软雅黑";
  text-align: center;
}
.searchbox ::-webkit-input-placeholder {
  color: #fff;
}
.searchbox i {
  font-size: 0.25rem;
  color: #fff;
  position: absolute;
  left: 2.7rem;
  top: 0.5rem;
}
.probox {
  background: #fff;
  padding: 0 0.23rem 2.67rem 0.23rem;
}

</style>
