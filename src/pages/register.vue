<template>
  <div class="wrap">
    <!-- head -->
    <header class="head">
      <a href="#">
        <i class="iconfont icon-zuojiantou" @click="$router.back()"></i>
      </a>
      <h2>{{$route.name}}</h2>
      <h2><a href="javascript:;" @click="$router.push('/login')">登录</a></h2>
    </header>

   <!-- 表单项 -->
    <van-form @submit="register">
      <van-field
        v-model="regInfo.phone"
        name="手机号"
        label="手机号"
        placeholder="请输入手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field
        v-model="regInfo.nickname"
        name="昵称"
        label="昵称"
        placeholder="请输入昵称"
        :rules="[{ required: true, message: '请填写昵称' }]"
      />
      <van-field
        v-model="regInfo.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          注册
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import {getRegister} from '../util/axios'
import {Toast} from 'vant'
export default {
  data() {
    return {
    regInfo:{
            phone:'',
            nickname:'',
            password:''
        }
    };
  },
  methods: {
    register(){
      getRegister(this.regInfo).then(res=>{
        if(res.code==200){
          Toast.success(res.msg)
          this.$router.push('/login')
        }else{
          Toast.fail(res.msg)
        }
      })
    }
  },
};
</script>

<style lang="" scoped>

body {
  background: #ffffff;
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

.head {
  background: #ff9900;
  border-bottom: none;
}
.head a i {
  color: #fff;
  font-size: 0.28rem;
}
.head h2,h2 a {
  font-size: 0.34rem;
  color: #fff;
}
.head p span {
  background: #fff;
}

</style>
