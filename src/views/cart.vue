<template>
  <div id="wrap" v-cloak>
    <van-nav-bar
      :title="$route.meta.name"
      left-text=""
      left-arrow
      @click-left="$router.back()"
    />
    <!-- 详情列表 -->
    <div v-if="proList.length > 0 && userInfo">
      <van-checkbox-group v-model="result" ref="checkboxGroup">
        <div class="cateInfo" v-for="(item, index) in proList" :key="index">
          <van-checkbox
            name="checkone"
            v-model="checked"
            @click="chOne()"
          ></van-checkbox>

          <van-swipe-cell>
            <van-card
              :num="item.num"
              :price="item.price.toFixed(2)"
              desc="描述信息"
              :title="item.goodsname"
              class="goods-card"
              :thumb="
                item.img
                  ? $imgUrl + item.img
                  : 'https://img.yzcdn.cn/vant/cat.jpeg'
              "
            >
              <template #footer>
                <div>
                  <van-stepper
                    v-model="goodsNum"
                    theme="round"
                    button-size="22"
                    disable-input
                  />
                </div>
              </template>
            </van-card>
            <template #right>
              <van-button
                square
                text="删除"
                type="danger"
                class="delete-button"
              />
            </template>
          </van-swipe-cell>
        </div>
      </van-checkbox-group>
      <!-- 底部合计 -->
      <van-submit-bar :price="3050" button-text="提交订单" @submit="goOrder">
        <!-- <van-checkbox v-model="allcheck" @change="checkAll">全选</van-checkbox> -->
        <van-checkbox @click="selectall" v-model="checkAll">全选</van-checkbox>
      </van-submit-bar>
    </div>

    <div v-else-if="proList.length == 0 && userInfo">
      <van-empty description="购物车空空如也，快去买买买~"></van-empty>
    </div>
    <div v-else>
      <van-button @click="$router.push('/login')" type="warning"
        >请先登录，再查看</van-button
      >
    </div>
  </div>
</template>

<script>
import { getCartList, getCartDelete } from "../util/axios";
export default {
  data() {
    return {
      proList: [],
      goodsNum: 1,
      userInfo: "",
      result: [],
      checkAll: false,
      checked:false
    };
  },
  mounted() {
    this.userInfo = sessionStorage.getItem("userInfo")
      ? JSON.parse(sessionStorage.getItem("userInfo"))
      : "";
    this.cartList();
  },
  methods: {
    cartList() {
      getCartList({
        uid: this.$route.query.id,
      }).then((res) => {
        console.log(res, " 购物车列表响应");
        if (res.code == 200) {
          this.proList = res.list;
          console.log(this.proList);
        }
      });
    },
    goOrder() {
      this.$router.push("/order");
    },
    // 全选按钮
    selectall() {
      if (this.checkAll == true) {
        this.$refs.checkboxGroup.toggleAll(true);
      }else{
         this.$refs.checkboxGroup.toggleAll();
      }
    },
    chOne() {
     this.checkAll= this.checked;
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

/* 防闪屏 */
[v-cloak] {
  display: none;
}
.goods-card {
  margin: 0;
  background-color: #ffffff;
}

.delete-button {
  height: 100%;
}
.cartInfo {
  display: flex;
}
.van-swipe-cell {
  flex: 1;
}
</style>
