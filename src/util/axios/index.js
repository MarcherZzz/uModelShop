import http from './axios'
// 封装接口
// 轮播图获取接口
export function getBanner(){
    return http.get('/getbanner')
}
// 获取轮播图首页信息
export function getIndexGoods(){
    return http.get('/getindexgoods')
}
// 封装分类树形结构
export function getCateTree(){
    return http.get('/getcatetree')
}
// 获取商品列表
export function getGoods(params){
    return http.get('/getgoods',{
        params
    })
}
// 获取商品信息
export function getGoodsInfo(params){
    return http.get('/getgoodsinfo',{
        params
    })
}
// 获取登录接口
export function getLogin(data){
    return http.post('/login',data)
}
// 获取一个商品信息
export function getRegister(data){
    return http.post('/register',data)
}
// 购物车列表
export function getCartList(params){
    return http.get('/cartlist',{
        params
    })
}
// 购物车添加
export function getCartAdd(data){
    return http.post('/cartadd',data)
}
// 购物车删除
export function getCartDelete(data){
    return http.post('/cartdelete',data)
}
