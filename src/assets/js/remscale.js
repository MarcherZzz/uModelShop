window.onload = window.onresize =  function(){        
    // 获取现在的设备宽度 =  HTML的可视宽度    client客户区 
                    //html
    var deviceW =   document.documentElement.clientWidth;

    //判断大于等于750 
    if( deviceW >= 750){
        document.documentElement.style.fontSize = 100 +'px';
    }else{
        //控制台输出
        console.log(deviceW);
            //html的font-size
        document.documentElement.style.fontSize =  deviceW / 750  * 100 + "px";
    }
                                                    
}
