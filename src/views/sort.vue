<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar
      @click-left="$router.back()"
      :title="$route.meta.name"
      left-text="返回"
      left-arrow
    >
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <div class="cateInfo">
      <!-- 侧边导航栏 -->
      <van-sidebar v-model="activeKey"  @change="onchange">
        <van-sidebar-item
          :title="item.catename"
          v-for="item in firstList"
          :key="item.id"
        />
      </van-sidebar>
      <!-- 右侧列表渲染 -->
      <van-grid :border='false' :column-num='3'>
        <van-grid-item icon="photo-o"  :to="'/goodsList?id='+item.id" v-for="item in secondList" :key="item.id">
        <van-image :src="item.img ? $imgUrl+item.img :'https://img.yzcdn.cn/vant/apple-1.jpg'"></van-image>
         <span class="title">{{item.catename}}</span>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
import { getCateTree } from "../util/axios";
export default {
  data() {
    return {
      activeKey: 0,
      firstList: [], //一级分类数组
      secondList: [], //二级分类数组
    };
  },
  mounted() {
    this.getCateTreeList();
  },
  methods: {
    onchange(e) {
        console.log(e);
      this.secondList = this.firstList[e].children;
    },
    //   获取分类列表
    getCateTreeList() {
      getCateTree().then((res) => {
        console.log(res, "商品分类列表响应");
        if (res.code == 200) {
          this.firstList = res.list;
          this.secondList = res.list[this.activeKey].children;
        }
      });
    },
  },
};
</script>

<style  lang="" scoped>
.cateInfo {
  display: flex;
}
.van-grid {
  flex: 1;
}
.title {
  font-size: 14px;
}


</style>
 