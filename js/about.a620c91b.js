(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"02f4":function(t,e,n){var r=n("4588"),i=n("be13");t.exports=function(t){return function(e,n){var c,a,o=String(i(e)),s=r(n),l=o.length;return s<0||s>=l?t?"":void 0:(c=o.charCodeAt(s),c<55296||c>56319||s+1===l||(a=o.charCodeAt(s+1))<56320||a>57343?t?o.charAt(s):c:t?o.slice(s,s+2):a-56320+(c-55296<<10)+65536)}}},"0390":function(t,e,n){"use strict";var r=n("02f4")(!0);t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"04e5":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"trans-form"},[n("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"center"}},[n("el-col",{attrs:{span:6}},[n("div",{staticClass:"grid-content bg-purple"})]),n("el-col",{attrs:{span:6}},[n("div",{staticClass:"grid-content bg-purple-light"},[n("el-input",{attrs:{type:"textarea",rows:10,placeholder:"Pleas Input Something"},model:{value:t.currentInput,callback:function(e){t.currentInput=e},expression:"currentInput"}})],1)]),n("el-col",{attrs:{span:6}},[n("div",{staticClass:"grid-content bg-purple"})])],1),n("div",{staticStyle:{margin:"20px 0"}}),n("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"center"}},[n("el-col",{attrs:{span:6}},[n("div",{staticClass:"grid-content bg-purple"})]),n("el-col",{attrs:{span:6}},[n("el-row",[n("el-col",[n("div",{staticClass:"grid-content bg-purple-light"},[n("el-button",{on:{click:t.trans}},[t._v("Trans")])],1)]),n("el-col",[n("div",{staticClass:"grid-content bg-purple-light"},[n("el-button",{on:{click:t.transToEmpty}},[t._v("TransToEmpty")])],1)])],1)],1),n("el-col",{attrs:{span:6}},[n("div",{staticClass:"grid-content bg-purple"})])],1)],1)},i=[],c=(n("ac6a"),n("28a5"),n("cadf"),n("551c"),n("097d"),{name:"trans-form",data:function(){return{currentInput:this.input}},methods:{trans:function(){if(!this.currentInput.indexOf("[")&&!this.currentInput.indexOf("]"))return!1;var t=this.currentInput.split("\n"),e="[\n";t.forEach(function(t){e+="'"+t+"',\n"}),e+="];",this.currentInput=e},transToEmpty:function(){if(!this.currentInput.indexOf("[")&&!this.currentInput.indexOf("]"))return!1;var t=this.currentInput.split("\n"),e="[\n";t.forEach(function(t){e+="'"+t+"' => '',\n"}),e+="];",this.currentInput=e}}}),a=c,o=n("2877"),s=Object(o["a"])(a,r,i,!1,null,null,null);s.options.__file="TransForm.vue";e["default"]=s.exports},"0bfb":function(t,e,n){"use strict";var r=n("cb7c");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"214f":function(t,e,n){"use strict";n("b0c5");var r=n("2aba"),i=n("32e9"),c=n("79e5"),a=n("be13"),o=n("2b4c"),s=n("520a"),l=o("species"),u=!c(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),p=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var f=o(t),d=!c(function(){var e={};return e[f]=function(){return 7},7!=""[t](e)}),g=d?!c(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[l]=function(){return n}),n[f](""),!e}):void 0;if(!d||!g||"replace"===t&&!u||"split"===t&&!p){var v=/./[f],h=n(a,f,""[t],function(t,e,n,r,i){return e.exec===s?d&&!i?{done:!0,value:v.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),x=h[0],b=h[1];r(String.prototype,t,x),i(RegExp.prototype,f,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},"28a5":function(t,e,n){"use strict";var r=n("aae3"),i=n("cb7c"),c=n("ebd6"),a=n("0390"),o=n("9def"),s=n("5f1b"),l=n("520a"),u=Math.min,p=[].push,f="split",d="length",g="lastIndex",v=!!function(){try{return new RegExp("x","y")}catch(t){}}();n("214f")("split",2,function(t,e,n,h){var x;return x="c"=="abbc"[f](/(b)*/)[1]||4!="test"[f](/(?:)/,-1)[d]||2!="ab"[f](/(?:ab)*/)[d]||4!="."[f](/(.?)(.?)/)[d]||"."[f](/()()/)[d]>1||""[f](/.?/)[d]?function(t,e){var i=String(this);if(void 0===t&&0===e)return[];if(!r(t))return n.call(i,t,e);var c,a,o,s=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,v=void 0===e?4294967295:e>>>0,h=new RegExp(t.source,u+"g");while(c=l.call(h,i)){if(a=h[g],a>f&&(s.push(i.slice(f,c.index)),c[d]>1&&c.index<i[d]&&p.apply(s,c.slice(1)),o=c[0][d],f=a,s[d]>=v))break;h[g]===c.index&&h[g]++}return f===i[d]?!o&&h.test("")||s.push(""):s.push(i.slice(f)),s[d]>v?s.slice(0,v):s}:"0"[f](void 0,0)[d]?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,r){var i=t(this),c=void 0==n?void 0:n[e];return void 0!==c?c.call(n,i,r):x.call(String(i),n,r)},function(t,e){var r=h(x,t,this,e,x!==n);if(r.done)return r.value;var l=i(t),p=String(this),f=c(l,RegExp),d=l.unicode,g=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(v?"y":"g"),b=new f(v?l:"^(?:"+l.source+")",g),y=void 0===e?4294967295:e>>>0;if(0===y)return[];if(0===p.length)return null===s(b,p)?[p]:[];var m=0,L=0,S=[];while(L<p.length){b.lastIndex=v?L:0;var w,C=s(b,v?p:p.slice(L));if(null===C||(w=u(o(b.lastIndex+(v?0:L)),p.length))===m)L=a(p,L,d);else{if(S.push(p.slice(m,L)),S.length===y)return S;for(var E=1;E<=C.length-1;E++)if(S.push(C[E]),S.length===y)return S;L=m=w}}return S.push(p.slice(m)),S}]})},"520a":function(t,e,n){"use strict";var r=n("0bfb"),i=RegExp.prototype.exec,c=String.prototype.replace,a=i,o="lastIndex",s=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t[o]||0!==e[o]}(),l=void 0!==/()??/.exec("")[1],u=s||l;u&&(a=function(t){var e,n,a,u,p=this;return l&&(n=new RegExp("^"+p.source+"$(?!\\s)",r.call(p))),s&&(e=p[o]),a=i.call(p,t),s&&a&&(p[o]=p.global?a.index+a[0].length:e),l&&a&&a.length>1&&c.call(a[0],n,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(a[u]=void 0)}),a}),t.exports=a},"5f1b":function(t,e,n){"use strict";var r=n("23c6"),i=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var c=n.call(t,e);if("object"!==typeof c)throw new TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},aae3:function(t,e,n){var r=n("d3f4"),i=n("2d95"),c=n("2b4c")("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[c])?!!e:"RegExp"==i(t))}},ac6a:function(t,e,n){for(var r=n("cadf"),i=n("0d58"),c=n("2aba"),a=n("7726"),o=n("32e9"),s=n("84f2"),l=n("2b4c"),u=l("iterator"),p=l("toStringTag"),f=s.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},g=i(d),v=0;v<g.length;v++){var h,x=g[v],b=d[x],y=a[x],m=y&&y.prototype;if(m&&(m[u]||o(m,u,f),m[p]||o(m,p,x),s[x]=f,b))for(h in r)m[h]||c(m,h,r[h],!0)}},b0c5:function(t,e,n){"use strict";var r=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})}}]);
//# sourceMappingURL=about.a620c91b.js.map