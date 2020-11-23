new Vue({
    el: '#loginList',
    data: {
        msg: '发送验证码',
        nameInfo:'',
        nameErr:false,
        telInfo:'',
        telErr:false,
        pwdInfo:'',
        pwdErr:false,
        yzmInfo:'',
        yzmErr:false,
        userInfo: {
            username: '',
            tel: '',
            pwd: '',
            yzm: '',
            isGree: false,
            num: 5,
            timer: null,
            show: false
        }
    },
    methods: {
        //昵称判断
        nameBlur(){
            if(this.userInfo.username==''){
                this.nameErr=true;
                this.nameInfo='还未输入昵称~';
            }else{
                this.nameErr=false;
            }
        },
        //电话判断
        telBlur(){
            if(this.userInfo.tel==''){
                this.telErr=true;
                this.telInfo='还未输入电话号码~';
            }else{
                this.telErr=false;
            }
        },
        //密码验证
        pwdBlur(){
            if(this.userInfo.pwd==''){
                this.pwdErr=true;
                this.pwdInfo='还未输入密码~';
            }else{
                this.pwdErr=false;
            } 
        },
        //验证码验证
        yzmBlur(){
            if(this.userInfo.yzm==''){
                this.yzmErr=true;
                this.yzmInfo='还未输入验证码~';
            }else{
                this.yzmErr=false;
            } 
        },
        next() {
            if (this.userInfo.username == '' || this.userInfo.tel == '' || this.userInfo.pwd == '' || this.userInfo.yzm == '') {
                alert('用户信息未填完整~')
            }else if(!this.userInfo.isGree){
             alert('协议还未勾选~');
            } 
            else {
                alert('注册成功');
                window.location.href = './login.html';
                console.log('用户信息：', this.userInfo);
            }
        },
        time() {
            this.userInfo.show = true;
            this.msg='重新发送';
            this.userInfo.timer = setInterval(() => {
                this.userInfo.num--;
                console.log(this.userInfo.num);
                if (this.userInfo.num == 0) {
                    clearInterval(this.userInfo.timer);
                    this.userInfo.show = false;
                    this.msg = '发送验证码'
                    this.userInfo.num = 5;
                }
            }, 1000);

        }
    }
})