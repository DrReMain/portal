"use strict";(self.webpackChunkgo_zero=self.webpackChunkgo_zero||[]).push([[9555],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=d(n),k=l,g=u["".concat(o,".").concat(k)]||u[k]||m[k]||r;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4019:function(e,t,n){n.r(t),n.d(t,{default:function(){return m},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return d}});var a=n(7462),l=n(3366),r=(n(7294),n(3905)),i=["components"],p={},o={unversionedId:"eco/intellij",id:"eco/intellij",isDocsHomePage:!1,title:"goctl intellij  Plugin",description:"go-zero",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/eco/intellij.md",sourceDirName:"eco",slug:"/eco/intellij",permalink:"/cn/docs/eco/intellij",editUrl:"https://github.com/zeromicro/portal/edit/main/i18n/cn/docusaurus-plugin-content-docs/current/eco/intellij.md",version:"current",lastUpdatedAt:1655617245,formattedLastUpdatedAt:"6/19/2022",frontMatter:{},sidebar:"eco",previous:{title:"\u5de5\u5177\u4e2d\u5fc3",permalink:"/cn/docs/eco/editor"},next:{title:"vscode \u9ad8\u4eae\u63d2\u4ef6",permalink:"/cn/docs/eco/vscode"}},d=[{value:"\u65b9\u5f0f\u4e00",id:"\u65b9\u5f0f\u4e00",children:[]},{value:"\u65b9\u5f0f\u4e8c",id:"\u65b9\u5f0f\u4e8c",children:[]},{value:"1. api \u6587\u4ef6\u53f3\u952e\u751f\u6210",id:"1-api-\u6587\u4ef6\u53f3\u952e\u751f\u6210",children:[]},{value:"2. api \u6587\u4ef6\u7f16\u8f91\u533a\u53f3\u952e\u751f\u6210",id:"2-api-\u6587\u4ef6\u7f16\u8f91\u533a\u53f3\u952e\u751f\u6210",children:[]},{value:"Api \u4ee3\u7801\u751f\u6210\u8bf4\u660e",id:"api-\u4ee3\u7801\u751f\u6210\u8bf4\u660e",children:[]},{value:"1. proto \u6587\u4ef6\u53f3\u952e\u751f\u6210",id:"1-proto-\u6587\u4ef6\u53f3\u952e\u751f\u6210",children:[]},{value:"2. proto \u6587\u4ef6\u7f16\u8f91\u533a\u53f3\u952e\u751f\u6210",id:"2-proto-\u6587\u4ef6\u7f16\u8f91\u533a\u53f3\u952e\u751f\u6210",children:[]},{value:"zRPC \u4ee3\u7801\u751f\u6210\u8bf4\u660e",id:"zrpc-\u4ee3\u7801\u751f\u6210\u8bf4\u660e",children:[]},{value:"1. sql \u6587\u4ef6\u53f3\u952e\u751f\u6210",id:"1-sql-\u6587\u4ef6\u53f3\u952e\u751f\u6210",children:[]},{value:"2. sql \u6587\u4ef6\u7f16\u8f91\u533a\u53f3\u952e\u751f\u6210",id:"2-sql-\u6587\u4ef6\u7f16\u8f91\u533a\u53f3\u952e\u751f\u6210",children:[]},{value:"Model \u4ee3\u7801\u751f\u6210\u8bf4\u660e",id:"model-\u4ee3\u7801\u751f\u6210\u8bf4\u660e",children:[]}],c={toc:d};function m(e){var t=e.components,p=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/tal-tech/go-zero"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Github-go--zero-brightgreen?logo=github",alt:"go-zero"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zeromicro/goctl-intellij/blob/main/LICENSE"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/License-MIT-blue",alt:"license"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zeromicro/goctl-intellij/releases"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Release-1.1.0-red",alt:"license"}))),(0,r.kt)("h1",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,r.kt)("p",null,"\u4e00\u6b3e\u652f\u6301go-zero api\u8bed\u8a00\u7ed3\u6784\u8bed\u6cd5\u9ad8\u4eae\u3001\u68c0\u6d4b\u4ee5\u53caapi\u3001rpc\u3001model\u5feb\u6377\u751f\u6210\u7684\u63d2\u4ef6\u5de5\u5177\u3002"),(0,r.kt)("h1",{id:"idea\u7248\u672c\u8981\u6c42"},"idea\u7248\u672c\u8981\u6c42"),(0,r.kt)("p",null,"\u4e0d\u4f4e\u4e8e193.0(2019.3)"),(0,r.kt)("h1",{id:"\u7248\u672c\u7279\u6027"},"\u7248\u672c\u7279\u6027"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"api\u8bed\u6cd5\u9ad8\u4eae"),(0,r.kt)("li",{parentName:"ul"},"api\u8bed\u6cd5\u3001\u8bed\u4e49\u68c0\u6d4b"),(0,r.kt)("li",{parentName:"ul"},"struct\u3001route\u3001handler\u91cd\u590d\u5b9a\u4e49\u68c0\u6d4b"),(0,r.kt)("li",{parentName:"ul"},"type\u8df3\u8f6c\u5230\u7c7b\u578b\u58f0\u660e\u4f4d\u7f6e"),(0,r.kt)("li",{parentName:"ul"},"\u4e0a\u4e0b\u6587\u83dc\u5355\u4e2d\u652f\u6301api\u3001rpc\u3001mode\u76f8\u5173menu\u9009\u9879"),(0,r.kt)("li",{parentName:"ul"},"\u4ee3\u7801\u683c\u5f0f\u5316(option+command+L)"),(0,r.kt)("li",{parentName:"ul"},"\u4ee3\u7801\u63d0\u793a")),(0,r.kt)("h1",{id:"\u5b89\u88c5\u65b9\u5f0f"},"\u5b89\u88c5\u65b9\u5f0f"),(0,r.kt)("h2",{id:"\u65b9\u5f0f\u4e00"},"\u65b9\u5f0f\u4e00"),(0,r.kt)("p",null,"\u5728github\u7684release\u4e2d\u627e\u5230\u6700\u65b0\u7684zip\u5305\uff0c\u4e0b\u8f7d\u672c\u5730\u5b89\u88c5\u5373\u53ef\u3002\uff08\u65e0\u9700\u89e3\u538b\uff09"),(0,r.kt)("h2",{id:"\u65b9\u5f0f\u4e8c"},"\u65b9\u5f0f\u4e8c"),(0,r.kt)("p",null,"\u5728plugin\u5546\u5e97\u4e2d\uff0c\u641c\u7d22",(0,r.kt)("inlineCode",{parentName:"p"},"Goctl"),"\u5b89\u88c5\u5373\u53ef\uff08\u76ee\u524d\u5546\u5e97\u4e2d\u5df2\u901a\u8fc7\u7684\u7248\u672c\u6bd4\u8f83\u4f4e\u3002\uff09"),(0,r.kt)("h1",{id:"\u9884\u89c8"},"\u9884\u89c8"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"preview",src:n(8551).Z})),(0,r.kt)("h1",{id:"\u65b0\u5efa-api-file"},"\u65b0\u5efa Api file"),(0,r.kt)("p",null,"\u5728\u5de5\u7a0b\u533a\u57df\u76ee\u6807\u6587\u4ef6\u5939",(0,r.kt)("inlineCode",{parentName:"p"},"\u53f3\u952e -> New -> New Api File -> Empty File/Api Template"),",\u5982\u56fe\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"preview",src:n(9313).Z}),"\n",(0,r.kt)("img",{alt:"preview",src:n(9785).Z})),(0,r.kt)("h1",{id:"\u65b0\u5efa-proto-file"},"\u65b0\u5efa Proto File"),(0,r.kt)("p",null,"\u5728\u5de5\u7a0b\u533a\u76ee\u6807\u6587\u4ef6\u5939",(0,r.kt)("inlineCode",{parentName:"p"},"\u53f3\u952e -> New -> New Proto File -> Empty File/Proto Template"),",\u5982\u56fe\uff1a\n",(0,r.kt)("img",{alt:"preview",src:n(7984).Z}),"\n",(0,r.kt)("img",{alt:"preview",src:n(7414).Z})),(0,r.kt)("h1",{id:"\u5feb\u901f\u751f\u6210apirpc\u670d\u52a1"},"\u5feb\u901f\u751f\u6210api/rpc\u670d\u52a1"),(0,r.kt)("p",null,"\u5728\u76ee\u6807\u6587\u4ef6\u5939",(0,r.kt)("inlineCode",{parentName:"p"},"\u53f3\u952e -> New -> Go Zero -> Api Greet Service/Rpc Greet Service")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"preview",src:n(7704).Z})),(0,r.kt)("h1",{id:"api-\u4ee3\u7801\u751f\u6210"},"Api \u4ee3\u7801\u751f\u6210"),(0,r.kt)("h2",{id:"1-api-\u6587\u4ef6\u53f3\u952e\u751f\u6210"},"1. api \u6587\u4ef6\u53f3\u952e\u751f\u6210"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"preview",src:n(9768).Z})),(0,r.kt)("h2",{id:"2-api-\u6587\u4ef6\u7f16\u8f91\u533a\u53f3\u952e\u751f\u6210"},"2. api \u6587\u4ef6\u7f16\u8f91\u533a\u53f3\u952e\u751f\u6210"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"preview",src:n(6454).Z})),(0,r.kt)("h2",{id:"api-\u4ee3\u7801\u751f\u6210\u8bf4\u660e"},"Api \u4ee3\u7801\u751f\u6210\u8bf4\u660e"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"API Code Generation")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"API Quick Code Generation")," \u7684\u533a\u522b\u662f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"API Code Generation")," \u4e2d ",(0,r.kt)("inlineCode",{parentName:"li"},"goctl")," \u7684\u76f8\u5173\u6307\u4ee4\u53c2\u6570\u5747\u4f7f\u7528\u6307\u5b9a\u503c\uff0c\u5176\u4ee3\u7801\u751f\u6210\u6307\u4ee4\u5185\u5bb9\u5982\u4e0b\uff1a",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ goctl api go --api=${API \u6587\u4ef6\u8def\u5f84} --style=gozero --home="~/.goctl" --dir=${API \u6587\u4ef6\u6240\u5728\u6587\u4ef6\u5939}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"API Quick Code Generation")," \u4f1a\u6253\u5f00\u5f39\u7a97\u8ba9\u4f7f\u7528\u8005\u586b\u5199 ",(0,r.kt)("inlineCode",{parentName:"li"},"--style"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"-- dir"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"--home")," \u7b49\u4fe1\u606f\n",(0,r.kt)("img",{alt:"preview",src:n(6220).Z}))),(0,r.kt)("h1",{id:"zrpc-\u4ee3\u7801\u751f\u6210"},"zRPC \u4ee3\u7801\u751f\u6210"),(0,r.kt)("h2",{id:"1-proto-\u6587\u4ef6\u53f3\u952e\u751f\u6210"},"1. proto \u6587\u4ef6\u53f3\u952e\u751f\u6210"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"preview",src:n(981).Z})),(0,r.kt)("h2",{id:"2-proto-\u6587\u4ef6\u7f16\u8f91\u533a\u53f3\u952e\u751f\u6210"},"2. proto \u6587\u4ef6\u7f16\u8f91\u533a\u53f3\u952e\u751f\u6210"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"preview",src:n(9254).Z})),(0,r.kt)("h2",{id:"zrpc-\u4ee3\u7801\u751f\u6210\u8bf4\u660e"},"zRPC \u4ee3\u7801\u751f\u6210\u8bf4\u660e"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ZRPC Code Generation")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"ZRPC Quick Code Generation")," \u7684\u533a\u522b\u662f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ZRPC Code Generation")," \u4e2d ",(0,r.kt)("inlineCode",{parentName:"li"},"goctl")," \u7684\u76f8\u5173\u6307\u4ee4\u53c2\u6570\u5747\u4f7f\u7528\u6307\u5b9a\u503c\uff0c\u5176\u4ee3\u7801\u751f\u6210\u6307\u4ee4\u5185\u5bb9\u5982\u4e0b\uff1a",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ goctl rpc protoc ${proto \u6587\u4ef6\u8def\u5f84} --style=gozero --home="~/.goctl" --go_out=${API \u6587\u4ef6\u6240\u5728\u6587\u4ef6\u5939} --grpc-go_out=${API \u6587\u4ef6\u6240\u5728\u6587\u4ef6\u5939} --zrpc_out=${API \u6587\u4ef6\u6240\u5728\u6587\u4ef6\u5939}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ZRPC Quick Code Generation")," \u4f1a\u6253\u5f00\u5f39\u7a97\u8ba9\u4f7f\u7528\u8005\u586b\u5199 ",(0,r.kt)("inlineCode",{parentName:"li"},"--style"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"-- dir"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"--home"),",",(0,r.kt)("inlineCode",{parentName:"li"},"proto_path"),"(\u5982\u679c\u6709 import \u5176\u4ed6 proto \u6587\u4ef6) \u7b49\u4fe1\u606f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u65e0 import \u60c5\u51b5\n",(0,r.kt)("img",{alt:"preview",src:n(6220).Z})),(0,r.kt)("li",{parentName:"ul"},"\u6709 import \u60c5\u51b5\uff0cproto_path \u76ee\u524d\u53ea\u652f\u6301\u4f46\u6587\u4ef6\u9009\u62e9\uff0c\u56e0\u6b64 ",(0,r.kt)("strong",{parentName:"li"},"\u4e0d\u652f\u6301 import \u81ea\u4e0d\u540c\u6587\u4ef6\u5939\u7684 proto"),"\u3002\n",(0,r.kt)("img",{alt:"preview",src:n(6235).Z}))))),(0,r.kt)("h1",{id:"model-\u4ee3\u7801\u751f\u6210"},"Model \u4ee3\u7801\u751f\u6210"),(0,r.kt)("h2",{id:"1-sql-\u6587\u4ef6\u53f3\u952e\u751f\u6210"},"1. sql \u6587\u4ef6\u53f3\u952e\u751f\u6210"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"preview",src:n(4532).Z})),(0,r.kt)("h2",{id:"2-sql-\u6587\u4ef6\u7f16\u8f91\u533a\u53f3\u952e\u751f\u6210"},"2. sql \u6587\u4ef6\u7f16\u8f91\u533a\u53f3\u952e\u751f\u6210"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"preview",src:n(1375).Z})),(0,r.kt)("h2",{id:"model-\u4ee3\u7801\u751f\u6210\u8bf4\u660e"},"Model \u4ee3\u7801\u751f\u6210\u8bf4\u660e"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Model \u4ee3\u7801\u751f\u6210\u9ed8\u8ba4\u90fd\u662f\u5e26\u7f13\u5b58\u7684\u3002")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Model Code Generation")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"Model Quick Code Generation")," \u7684\u533a\u522b\u662f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Model Code Generation")," \u4e2d ",(0,r.kt)("inlineCode",{parentName:"li"},"goctl")," \u7684\u76f8\u5173\u6307\u4ee4\u53c2\u6570\u5747\u4f7f\u7528\u6307\u5b9a\u503c\uff0c\u5176\u4ee3\u7801\u751f\u6210\u6307\u4ee4\u5185\u5bb9\u5982\u4e0b\uff1a",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ goctl model mysql ddl --src=${sql \u6587\u4ef6\u8def\u5f84} --dir=${sql \u6587\u4ef6\u6240\u5728\u6587\u4ef6\u5939} --style=gozero -c --home="~/.goctl"\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Model Quick Code Generation")," \u4f1a\u6253\u5f00\u5f39\u7a97\u8ba9\u4f7f\u7528\u8005\u586b\u5199 ",(0,r.kt)("inlineCode",{parentName:"li"},"--style"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"-- dir"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"--home"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"--cache")," \u7b49\u4fe1\u606f\n",(0,r.kt)("img",{alt:"preview",src:n(6220).Z})),(0,r.kt)("li",{parentName:"ul"})),(0,r.kt)("h1",{id:"\u9519\u8bef\u63d0\u793a"},"\u9519\u8bef\u63d0\u793a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"context menu",src:n(3008).Z})),(0,r.kt)("h1",{id:"live-template"},"Live Template"),(0,r.kt)("p",null,"Live Template\u53ef\u4ee5\u52a0\u5feb\u6211\u4eec\u5bf9api\u6587\u4ef6\u7684\u7f16\u5199\uff0c\u6bd4\u5982\u6211\u4eec\u5728go\u6587\u4ef6\u4e2d\u8f93\u5165",(0,r.kt)("inlineCode",{parentName:"p"},"main"),"\u5173\u952e\u5b57\u6839\u636etip\u56de\u8f66\u540e\u4f1a\u63d2\u5165\u4e00\u6bb5\u6a21\u677f\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-golang"},"func main(){\n\n}\n")),(0,r.kt)("p",null,"\u6216\u8005\u8bf4\u770b\u5230\u4e0b\u56fe\u4f60\u4f1a\u66f4\u52a0\u719f\u6089\uff0c\u66fe\u51e0\u4f55\u65f6\u4f60\u8fd8\u5728\u8fd9\u91cc\u5b9a\u4e49\u8fc7template\n",(0,r.kt)("img",{alt:"context menu",src:n(2377).Z})),(0,r.kt)("p",null,"\u4e0b\u9762\u5c31\u8fdb\u5165\u4eca\u5929api\u8bed\u6cd5\u4e2d\u7684\u6a21\u677f\u4f7f\u7528\u8bf4\u660e\u5427\uff0c\u6211\u4eec\u5148\u6765\u770b\u770bservice\u6a21\u677f\u7684\u6548\u679c\n",(0,r.kt)("img",{alt:"context menu",src:n(5134).Z})),(0,r.kt)("h4",{id:"\u9884\u8bbe\u6a21\u677f\u53ca\u751f\u6548\u533a\u57df"},"\u9884\u8bbe\u6a21\u677f\u53ca\u751f\u6548\u533a\u57df"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6a21\u677f\u5173\u952e\u5b57"),(0,r.kt)("th",{parentName:"tr",align:null},"psiTree\u751f\u6548\u533a\u57df"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"@doc"),(0,r.kt)("td",{parentName:"tr",align:null},"ApiService"),(0,r.kt)("td",{parentName:"tr",align:null},"doc\u6ce8\u91ca\u6a21\u677f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"doc"),(0,r.kt)("td",{parentName:"tr",align:null},"ApiService"),(0,r.kt)("td",{parentName:"tr",align:null},"doc\u6ce8\u91ca\u6a21\u677f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"struct"),(0,r.kt)("td",{parentName:"tr",align:null},"Struct"),(0,r.kt)("td",{parentName:"tr",align:null},"struct\u58f0\u660e\u6a21\u677f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"info"),(0,r.kt)("td",{parentName:"tr",align:null},"ApiFile"),(0,r.kt)("td",{parentName:"tr",align:null},"info block\u6a21\u677f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"ApiFile"),(0,r.kt)("td",{parentName:"tr",align:null},"type group\u6a21\u677f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"handler"),(0,r.kt)("td",{parentName:"tr",align:null},"ApiService"),(0,r.kt)("td",{parentName:"tr",align:null},"handler\u6587\u4ef6\u540d\u6a21\u677f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"get"),(0,r.kt)("td",{parentName:"tr",align:null},"ApiService"),(0,r.kt)("td",{parentName:"tr",align:null},"get\u65b9\u6cd5\u8def\u7531\u6a21\u677f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"head"),(0,r.kt)("td",{parentName:"tr",align:null},"ApiService"),(0,r.kt)("td",{parentName:"tr",align:null},"head\u65b9\u6cd5\u8def\u7531\u6a21\u677f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"post"),(0,r.kt)("td",{parentName:"tr",align:null},"ApiService"),(0,r.kt)("td",{parentName:"tr",align:null},"post\u65b9\u6cd5\u8def\u7531\u6a21\u677f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"put"),(0,r.kt)("td",{parentName:"tr",align:null},"ApiService"),(0,r.kt)("td",{parentName:"tr",align:null},"put\u65b9\u6cd5\u8def\u7531\u6a21\u677f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"delete"),(0,r.kt)("td",{parentName:"tr",align:null},"ApiService"),(0,r.kt)("td",{parentName:"tr",align:null},"delete\u65b9\u6cd5\u8def\u7531\u6a21\u677f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connect"),(0,r.kt)("td",{parentName:"tr",align:null},"ApiService"),(0,r.kt)("td",{parentName:"tr",align:null},"connect\u65b9\u6cd5\u8def\u7531\u6a21\u677f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options"),(0,r.kt)("td",{parentName:"tr",align:null},"ApiService"),(0,r.kt)("td",{parentName:"tr",align:null},"options\u65b9\u6cd5\u8def\u7531\u6a21\u677f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"trace"),(0,r.kt)("td",{parentName:"tr",align:null},"ApiService"),(0,r.kt)("td",{parentName:"tr",align:null},"trace\u65b9\u6cd5\u8def\u7531\u6a21\u677f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"service"),(0,r.kt)("td",{parentName:"tr",align:null},"ApiFile"),(0,r.kt)("td",{parentName:"tr",align:null},"service\u670d\u52a1block\u6a21\u677f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"json"),(0,r.kt)("td",{parentName:"tr",align:null},"Tag"),(0,r.kt)("td",{parentName:"tr",align:null},"Tag literal")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"xml"),(0,r.kt)("td",{parentName:"tr",align:null},"Tag"),(0,r.kt)("td",{parentName:"tr",align:null},"Tag literal")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"Tag"),(0,r.kt)("td",{parentName:"tr",align:null},"Tag literal")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"form"),(0,r.kt)("td",{parentName:"tr",align:null},"Tag"),(0,r.kt)("td",{parentName:"tr",align:null},"Tag literal")))))}m.isMDXComponent=!0},3008:function(e,t,n){t.Z=n.p+"assets/images/alert-283c9c777b8b7dfcd94d11974687b50b.png"},6220:function(e,t,n){t.Z=n.p+"assets/images/api_code_gen_dialog-62324f682ec90f1a8d164bbdbd3b8d89.png"},8551:function(e,t,n){t.Z=n.p+"assets/images/api_colorful-ae74ebdc2848902ba66acdef72aea8fa.png"},9313:function(e,t,n){t.Z=n.p+"assets/images/api_new-6ca623f6582c8534dd0fe43a29a72cda.png"},6454:function(e,t,n){t.Z=n.p+"assets/images/editor_api_code_gen-5f80e27383f255e930afd63d778967f5.png"},1375:function(e,t,n){t.Z=n.p+"assets/images/editor_model_code_gen-8c1712f80c9c7f08e9d1c986838343ef.png"},9254:function(e,t,n){t.Z=n.p+"assets/images/editor_zrpc_code_gen-4b5ce5d879d2a982ce83cf6624ae28e3.png"},2377:function(e,t,n){t.Z=n.p+"assets/images/go_live_template-c1d979d6a2d95a646ddebd648251ed41.png"},5134:function(e,t,n){t.Z=n.p+"assets/images/live_preview-3e92215bedb06086f35b605b1424a770.gif"},9785:function(e,t,n){t.Z=n.p+"assets/images/new-438e52877d19e552081f5484c10738c0.png"},7984:function(e,t,n){t.Z=n.p+"assets/images/new_proto-56fcb3bca9bcf709560df856219c983b.png"},9768:function(e,t,n){t.Z=n.p+"assets/images/project_api_code_gen-f371bbeb28996c4b4aafffcb7ddc6114.png"},4532:function(e,t,n){t.Z=n.p+"assets/images/project_model_code_gen-37d05bc1bb5eb935fe8786736c1e118f.png"},981:function(e,t,n){t.Z=n.p+"assets/images/project_zrpc_code_gen-070cd82a3c0afe7cf44bdd9d709b5cc7.png"},7414:function(e,t,n){t.Z=n.p+"assets/images/proto-846d045a808dcbd997bd03f2f590bbaf.png"},6235:function(e,t,n){t.Z=n.p+"assets/images/rpc_code_gen_dialog-bffa3716bb6b412eb68137bfc66277df.png"},7704:function(e,t,n){t.Z=n.p+"assets/images/service-ef0e5066817495ba077f595ca8c63239.png"}}]);