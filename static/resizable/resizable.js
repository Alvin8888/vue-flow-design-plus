!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Resizable=t():e.Resizable=t()}(window,(function(){return function(e){var t={};function o(i){if(t[i])return t[i].exports;var s=t[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,o),s.l=!0,s.exports}return o.m=e,o.c=t,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(i,s,function(t){return e[t]}.bind(null,s));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Resizable=void 0;const i=["e","w","n","s","nw","ne","sw","se"];t.Resizable=class{constructor(e,t,o){this.element=e,this.document=e.ownerDocument,this.options=t||{},this.callback=o,this.createHandles()}setPosition(e,t){this.element.style.top=e+"px",this.element.style.left=t+"px"}createHandles(){const{handles:e=i}=this.options;e.filter(e=>i.includes(e)).forEach(e=>{this.createHandle(e)})}createHandle(e){const{threshold:t=10}=this.options;this.element.style.position="absolute";const o=this.document.createElement("div");o.className+="resizable-handle-"+e,o.style.position="absolute";const{left:i,right:s,width:n,height:r,top:l,bottom:u,cursor:h}=this.getStyleByDirection(e,t);o.style.left=i,o.style.right=s,o.style.width=n,o.style.height=r,o.style.top=l,o.style.bottom=u,o.style.cursor=h,this.element.appendChild(o),o.onmousedown=t=>{const{x:o,y:i}=t,{width:s,height:n}=this.element.style,{offsetTop:r,offsetLeft:l}=this.element;this.getChilds().forEach(e=>{e.style.pointerEvents="none"}),this.document.onmousemove=t=>{const{x:u,y:h}=t;this.resize(e,{baseX:o,baseY:i,width:s,height:n,offsetTop:r,offsetLeft:l,x:u,y:h})},this.document.onmouseup=()=>{this.document.onmousemove=null,this.document.onmouseup=null,this.callback(),this.getChilds().forEach(e=>{e.style.pointerEvents="auto"})}}}getChilds(){return[].slice.call(this.element.children).filter(e=>!e.className.includes("resizable-handle"))}resize(e,t){var o,i,s,n,r,l,u,h;const{baseX:a,baseY:p,width:c,height:d,x:f,y:x,offsetTop:m,offsetLeft:y}=t,b=e.split("");let g=(null===(i=null===(o=this.options)||void 0===o?void 0:o.initSize)||void 0===i?void 0:i.maxWidth)||1e3,v=(null===(n=null===(s=this.options)||void 0===s?void 0:s.initSize)||void 0===n?void 0:n.minWidth)||200,w=(null===(l=null===(r=this.options)||void 0===r?void 0:r.initSize)||void 0===l?void 0:l.maxHeight)||1e3,z=(null===(h=null===(u=this.options)||void 0===u?void 0:u.initSize)||void 0===h?void 0:h.minHeight)||200;b.forEach(e=>{switch(e){case"e":(t=parseFloat(c)+(f-a))>g?t=g:t<v&&(t=v),this.element.style.width=t+"px";break;case"w":var t;(t=parseFloat(c)+(a-f))>g?t=g:t<v&&(t=v),this.element.style.width=t+"px",this.element.style.left=y-(a-f)+"px";break;case"n":(o=parseFloat(d)+(p-x))>w?o=w:o<z&&(o=z),this.element.style.height=o+"px",this.element.style.top=m-(p-x)+"px";break;case"s":var o;(o=parseFloat(d)+(x-p))>w?o=w:o<z&&(o=z),this.element.style.height=o+"px"}})}getStyleByDirection(e,t){switch(e){case"e":return{left:"auto",right:`-${t/2}px`,width:t+"px",height:"auto",top:"0px",bottom:"0px",cursor:"e-resize"};case"w":return{left:`-${t/2}px`,right:"auto",width:t+"px",height:"auto",top:"0px",bottom:"0px",cursor:"w-resize"};case"n":return{left:"0px",right:"0px",width:"auto",height:t+"px",top:`-${t/2}px`,bottom:"auto",cursor:"n-resize"};case"s":return{left:"0px",right:"0px",width:"auto",height:t+"px",top:"auto",bottom:`-${t/2}px`,cursor:"s-resize"};case"nw":return{left:`-${t/2}px`,right:"auto",width:t+"px",height:t+"px",top:`-${t/2}px`,bottom:"auto",cursor:"nw-resize"};case"ne":return{left:"auto",right:`-${t/2}px`,width:t+"px",height:t+"px",top:`-${t/2}px`,bottom:"auto",cursor:"ne-resize"};case"sw":return{left:`-${t/2}px`,right:"auto",width:t+"px",height:t+"px",top:"auto",bottom:`-${t/2}px`,cursor:"sw-resize"};case"se":return{left:"auto",right:`-${t/2}px`,width:t+"px",height:t+"px",top:"auto",bottom:`-${t/2}px`,cursor:"se-resize"};default:return{}}}}}])}));
//# sourceMappingURL=resizable.js.map