let html = document.querySelector("#demo")  //通过css选择器找到这个元素
let style = document.querySelector("#style")
let string = `/*你好，我是一名前端新人
*接下来我要加样式了
*首先准备一个div*/
#div1{
    border: 1px solid red;
    width:250px;
    height:250px;
}
/*再加个样式*/
body{
    color:red;
}
/*接下来把div变成一个八卦图
*先变成一个圆*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,.5);
    border: none;   
}
/*一黑一白方为阴阳*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 51%, rgba(0,0,0,1) 100%);
}
/*阴玉和阳玉*/
#div1::before{
    width: 125px;
    height: 125px;
    top: 0;
    left: 50%;
    transform: translateX(-50%); 
    border-radius:50%;
    background: #ffffff;
    background: radial-gradient(circle, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 25%, rgba(255, 255, 255, 1) 26%, rgba(255, 255, 255, 1) 100%);
}
#div1::after {
    width: 125px;
    height: 125px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius:50%;
    background: #000000;
    background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 25%, rgba(0, 0, 0, 1) 26%, rgba(0, 0, 0, 1) 100%);
}
/*转起来*/
#div1{
    animation:rotation 2.5s linear infinite;
    -webkit-animation:rotation 2.5s linear infinite;
    -moz-animation:rotation 2.5s linear infinite;
}
`;
let n = -1;
let string2 = ''
//parcel src/index.html
let stpe = () => {
    setTimeout(() => {    //1变成2
        n += 1;
        if (string[n] === "\n") {
            string2 += "<br>"//当有回车时变成<br>加进去，一次加了4个字符就不会出现 < 这个了
        } else if (string[n] === " ") {
            string2 += "&nbsp"
        } else {
            string2 += string[n]//其他的直接放进去
        }
        html.innerHTML = string2;//打印出新字符串
        style.innerHTML = string.substring(0, n)//从0到n打印出来
        window.scrollTo(0,9999);
        demo.scrollTo(0,9999);
        if (n + 1 < string.length) {
            stpe();//延迟后调用，相当与循环，需要加个条件
        }
    }, 0)
};
stpe();