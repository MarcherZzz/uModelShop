new Vue({
    el: '#wrap',
    data: {
        proList: [{
                img: 'images/shopcart/shopCart.jpg',
                intro: '雅诗兰黛素颜霜',
                size: '规格：50g',
                price: '123.00',
                num: 1
            },
            {
                img: 'images/shopcart/shopCart.jpg',
                intro: '雅诗兰黛素颜霜',
                size: '规格：50g',
                price: '123.00',
                num: 1
            },
            {
                img: 'images/shopcart/shopCart.jpg',
                intro: '雅诗兰黛素颜霜',
                size: '规格：50g',
                price: '123.00',
                num: 1
            }
        ],
        checkAll: false,
    },
    methods: {
        chAll() {
            this.proList.map(item => item.checked = this.checkAll)

        },
        checkOne() {
            this.checkAll = this.proList.every(item => item.checked)
        },
        //减少
        sub(index) {
            if (this.proList[index].num <= 1) {
                alert('只剩一个不能删除了~');
                return
            }
            this.proList[index].num--;
        },
        //增加
        add(index) {
            this.proList[index].num++;
        },
        // 删除
        del(index){
            this.proList.splice(index,1);
        }

    },
    computed: {
        sumPrice() {
            let sum = 0;
            this.proList.map((item, index, arr) => {
                sum += item.price * item.num;

            })
            return sum.toFixed(2)
        },
        sumNum() {
            let all = 0;
            this.proList.map((item, index, arr) => {
                all += item.num;
            })
            return all
        }
    },
})

// let lis = document.querySelectorAll('.probox .pro-nol');
// for (let i = 0; i < lis.length; i++) {
//     lis[i].onclick=function(){
//         if(this.style.transform){
//             this.style.transform = '';
//         }else{
//             this.style.transform = 'translateX(-0.97rem)';
//         }  
//     }
// }