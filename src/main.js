let html = document.querySelector("#html")
let style = document.querySelector("#style")
let str = `
/**
 * 你好，我叫小吴
 * 接下来我来演示一下我的前端功底
 **/
/* 首先给所有元素加上过渡效果 */
* {
  transition: all .3s;
}
/* 白色背景太单调了，我们来点背景 */
html {
  color: rgb(222,222,222); background: rgb(36,40,59);
}
/* 文字离边框太近了 */
#html {
  padding: .5em;
  border: 1px solid;
  margin: .5em;
  overflow: auto;
  width: 45vw; height: 90vh;
}
/* 代码高亮 */
.token.selector{ color: rgb(252,123,123); }
.token.property{ color: rgb(122,162,247); }
.token.punctuation{ color: rgb(154, 189, 245); }
.token.function{ color: rgb(42,161,152); }

 /**
 * 首先我要准备一个div
 **/
#div1{
  border:1px solid white;
  width:200px;
  height:200px;
}
/**
 * 接下来我把div变成一个八卦图
 * 注意看好了
 * 首先，把div变成一个圆
 **/
#div1{
  border-radius:50%;
  box-shadow:0 0 3px rgba(0,0,0,0.5);
  border:none
}
/**
 * 八卦是阴阳形成的
 * 一黑一白
 **/
#div1{
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/**
 * 加俩个小球
 **/
#div1::before{
  width:100px;
  height:100px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 255, 255, 1) 10%, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 100%);
}
#div1::after{
  position: absolute;
  width: 100px;
  height: 100px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,0,0,1) 10%, rgba(255,255,255,1) 10%, rgba(255,255,255,1) 100%);
}
`
let str2 = ""
let n = 0


let step = () => {
  setTimeout(() => {
    if (str[n] === "\n") {// 换行
      str2 += "<br>"
    } else if (str[n] === " ") {// 空格
      str2 += "&nbsp;"
    }
    else if(str[n]=="#"){//ID选择器
      str2+=`<span class="token selector">${str[n]}`
    }else if(str[n]=="{"){//左花括号
      str2+=`</span><span class="token punctuation">{</span>
      <span class="token property">
      `
    }else if(str[n]==":"&&str[n-1]!=":"&&str[n+1]!=":"){//冒号 判断属性，且不是双冒号::
      str2+=`</span>:`
    }else if(str[n]==";"&&str[n+2]!=="}"){//分号 且后面不是回车花括号
      str2+=`</span><span class="token punctuation">${str[n]}</span>
      <span class="token property">
      `
    }else if(str[n]=="}"){//右花括号
      str2+=`<span class="token punctuation">}</span>`
    }else {
      str2 += str[n]
    }
    window.scrollTo(0, 99999)
    html.scrollTo(0, 99999)
    html.innerHTML = str2
    style.innerHTML = str.substring(0, n)
    if (++n < str.length) step()
  }, 2)
}


step()