parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var n=document.querySelector("#demo"),r=document.querySelector("#style"),i="/*你好，我是一名前端新人\n*接下来我要加样式了\n*首先准备一个div*/\n#div1{\n    border: 1px solid red;\n    width:250px;\n    height:250px;\n}\n/*再加个样式*/\nbody{\n    color:red;\n}\n/*接下来把div变成一个八卦图\n*先变成一个圆*/\n#div1{\n    border-radius:50%;\n    box-shadow:0 0 3px rgba(0,0,0,.5);\n    border: none;   \n}\n/*一黑一白方为阴阳*/\n#div1{\n    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 51%, rgba(0,0,0,1) 100%);\n}\n/*阴玉和阳玉*/\n#div1::before{\n    width: 125px;\n    height: 125px;\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%); \n    border-radius:50%;\n    background: #ffffff;\n    background: radial-gradient(circle, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 25%, rgba(255, 255, 255, 1) 26%, rgba(255, 255, 255, 1) 100%);\n}\n#div1::after {\n    width: 125px;\n    height: 125px;\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    border-radius:50%;\n    background: #000000;\n    background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 25%, rgba(0, 0, 0, 1) 26%, rgba(0, 0, 0, 1) 100%);\n}\n/*转起来*/\n#div1{\n    animation:rotation 2.5s linear infinite;\n    -webkit-animation:rotation 2.5s linear infinite;\n    -moz-animation:rotation 2.5s linear infinite;\n}\n",a=-1,e="",o=function o(){setTimeout(function(){"\n"===i[a+=1]?e+="<br>":" "===i[a]?e+="&nbsp":e+=i[a],n.innerHTML=e,r.innerHTML=i.substring(0,a),window.scrollTo(0,9999),demo.scrollTo(0,9999),a+1<i.length&&o()},30)};o();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.eb700352.js.map