(function(e){function n(n){for(var r,a,u=n[0],i=n[1],f=n[2],l=0,s=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&s.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(n);while(s.length)s.shift()();return c.push.apply(c,f||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,a=1;a<t.length;a++){var u=t[a];0!==o[u]&&(r=!1)}r&&(c.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},a={app:0},o={app:0},c=[];function u(e){return i.p+"assets/js/"+({}[e]||e)+"."+{"chunk-153f2b50":"cff85c0a","chunk-2d0c7343":"79cfbf21","chunk-2d0e5015":"e69ff9d5","chunk-a794953a":"2bc62c5d","chunk-aa044aa2":"21be7ab8","chunk-c53678dc":"a0324ff7","chunk-c53a98b2":"5513c15d"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-153f2b50":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var r="assets/css/"+({}[e]||e)+"."+{"chunk-153f2b50":"cb60ed14","chunk-2d0c7343":"31d6cfe0","chunk-2d0e5015":"31d6cfe0","chunk-a794953a":"31d6cfe0","chunk-aa044aa2":"31d6cfe0","chunk-c53678dc":"31d6cfe0","chunk-c53a98b2":"31d6cfe0"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var f=c[u],l=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(l===r||l===o))return n()}var s=document.getElementsByTagName("style");for(u=0;u<s.length;u++){f=s[u],l=f.getAttribute("data-href");if(l===r||l===o)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var r=n&&n.target&&n.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],d.parentNode.removeChild(d),t(c)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)n.push(r[2]);else{var c=new Promise((function(n,t){r=o[e]=[n,t]}));n.push(r[2]=c);var f,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var s=new Error;f=function(n){l.onerror=l.onload=null,clearTimeout(d);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,t[1](s)}o[e]=void 0}};var d=setTimeout((function(){f({type:"timeout",target:l})}),12e4);l.onerror=l.onload=f,document.head.appendChild(l)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],l=f.push.bind(f);f.push=n,f=f.slice();for(var s=0;s<f.length;s++)n(f[s]);var d=l;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("0cdd");var r=t("2b0e"),a=t("5f5b"),o=t("0759");r["default"].use(a["a"]),r["default"].component("BIcon",o["a"]);var c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},u=[],i=t("2877"),f={},l=Object(i["a"])(f,c,u,!1,null,null,null),s=l.exports,d=(t("99af"),t("d3b7"),t("4795"),t("8c4f")),p={path:"/",name:"layout",component:function(){return t.e("chunk-aa044aa2").then(t.bind(null,"f3ee"))},children:[{path:"/",redirect:"/main"},{path:"/main",name:"main",component:function(){return t.e("chunk-a794953a").then(t.bind(null,"50f9"))}},{path:"/book",name:"book",component:function(){return t.e("chunk-c53a98b2").then(t.bind(null,"4725"))}},{path:"/reference",name:"reference",component:function(){return t.e("chunk-c53678dc").then(t.bind(null,"7ecf"))}},{path:"/movieclass",name:"movieclass",component:function(){return t.e("chunk-153f2b50").then(t.bind(null,"29ff"))}},{path:"/classsample",name:"classsample",component:function(){return t.e("chunk-2d0e5015").then(t.bind(null,"9349"))}},{path:"/company",name:"company",component:function(){return t.e("chunk-2d0c7343").then(t.bind(null,"502d"))}}]},h=p;r["default"].use(d["a"]);var m=[{path:"/",name:"home",redirect:"/main"}],b=new d["a"]({mode:"history",routes:[].concat(m,[h]),scrollBehavior:function(e,n,t){return new Promise((function(e,n){setTimeout((function(){e({x:0,y:0})}),0)}))}}),v=b,g=(t("96cf"),t("1da1"));v.beforeEach(function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(n,t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r();case 1:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}());var k=t("a7ab"),y=t.n(k);t("7b8d");r["default"].config.productionTip=!1,r["default"].component("VueSlickCarousel",y.a),new r["default"]({router:v,render:function(e){return e(s)}}).$mount("#app")}});