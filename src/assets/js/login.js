new Vue({
    el: '#loginList',
    data: {
        telErr: false,
        pwdErr:false,
        telInfo: '',
        pwdInfo:'',
        userInfo: {
            tel: '',
            pwd: '',

        }
    },
    methods: {
        login() {
            if (this.userInfo.tel == '' || this.userInfo.pwd == '') {
                alert('用户信息输入不完整~');
            } else {
                this.isErr=false;
                alert('登录成功~')
                window.location.href = './index.html';
            }
        },
        telBlur(){
            if(this.userInfo.tel==''){
                this.telErr=true;
                this.telInfo='还未输入电话号码~';
            }else{
                this.telErr=false;
            }
        },
        pwdBlur(){
            if(this.userInfo.pwd==''){
                this.pwdErr=true;
                this.pwdInfo='还未输入密码~';
            }else{
                this.pwdErr=false;
            }
        }
    }
})