(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{172:function(t,e,r){"use strict";r(119),r(175),r(84),r(34);var n=r(176),o=r.n(n),l={created:function(){this.ads=["Component based framework for nodejs"],this.finder=new o.a({encode:"balance",tokenize:"forward",threshold:0,async:!0,worker:!1,cache:!1})},head:function(){return{title:"JsStore - ".concat(this.title),meta:[{hid:"keywords",name:"keywords",content:this.keywords},{hid:"description",name:"description",content:this.description}]}},props:{contentSrc:String,title:String,description:String,keywords:String},computed:{currentUrl:function(){var path=this.$route.path,t=path.length;return"/"===path[t-1]&&(path=path.substr(0,t-1)),path},activeUrlIndex:function(){var t=this,e=this.currentUrl.split("/"),r=e[e.length-1];return this.links.findIndex((function(e){if(e.url===r)return t.childActiveUrlIndex=-1,!0;var n=e.children;if(n)for(var i=0,o=n.length;i<o;i++)if(n[i].url===r)return t.childActiveUrlIndex=i,!0}))},prevUrl:function(){return this.getLink(-1)},nextUrl:function(){return this.getLink(1)}},data:function(){return{links:[],childActiveUrlIndex:-1,searchResults:[],searchText:""}},fetch:function(){var t=r(177);this.links=t},mounted:function(){window.comp=this,hljs.highlightAll();var t='Copy <i class="margin-left-10px far fa-copy"></i>';document.querySelectorAll("pre code").forEach((function(e){var div=document.createElement("div");div.className="code-copy ripple",div.innerHTML=t,e.parentNode.prepend(div),div.onclick=function(){!function(t){var e=document.createElement("textarea");e.value=t,e.setAttribute("readonly",""),e.style.position="absolute",e.style.left="-9999px",document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}(e.innerText),div.innerHTML='Copied <i class="margin-left-10px fas fa-check"></i>',setTimeout((function(){div.innerHTML=t}),1e3)}})),this.addLinksToFinder()},methods:{onSearch:function(){var t=this;this.searchTimer&&clearTimeout(this.searchTimer),this.searchTimer=setTimeout((function(){t.finder.search(t.searchText).then((function(e){t.searchResults=e.map((function(e){return{url:e,text:t.flatLinks[e]}})),t.searchTimer=null}))}),200)},addLinksToFinder:function(){var t=this,e={};this.links.forEach((function(link){var r=t.url(link.url);e[r]=link.text,t.finder.add(r,link.text),link.children&&link.children.forEach((function(n){r=t.url(link.url+"/"+n.url),e[r]=n.text,t.finder.add(r,n.text)}))})),this.flatLinks=e},url:function(t){return"/tutorial/"+t},getLink:function(t){var path,e=this.childActiveUrlIndex,r=this.links[this.activeUrlIndex],n=r.children;if(e>=0||n&&t>0){var o=n[e+t];o?path=r.url+"/"+o.url:t<0&&(path=r.url)}if(!path){var l=this.links[this.activeUrlIndex+t];l&&(path=l.url)}return path?this.url(path):"/"},goto:function(t){return this.$router.push({path:this.getLink(t)})}}},h=(r(178),r(14)),component=Object(h.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row b-tutorial"},[r("div",{staticClass:"col-sm-4 col-md-3 col-lg-2 b-tutorial__links"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],staticClass:"textbox b-tutorial__links__search",attrs:{type:"text",placeholder:"Search in docs"},domProps:{value:t.searchText},on:{input:[function(e){e.target.composing||(t.searchText=e.target.value)},t.onSearch]}}),t._v(" "),t.searchResults.length>0?r("div",{staticClass:"b-tutorial__links__search-result"},t._l(t.searchResults,(function(link){return r("a",{key:link.text,staticClass:"row content-v-center ripple",attrs:{href:link.url}},[t._v(t._s(link.text))])})),0):t._l(t.links,(function(link,e){return r("div",{key:link.text},[r("a",{staticClass:"row content-v-center b-tutorial__links__item ripple",class:{"b-tutorial__links__item--active":t.childActiveUrlIndex<0&&e===t.activeUrlIndex,"b-tutorial__links__item--active-with-children":link.children&&t.childActiveUrlIndex<0},attrs:{href:t.url(link.url)}},[link.children?[e===t.activeUrlIndex?r("i",{staticClass:"fas fa-chevron-down"}):r("i",{staticClass:"fas fa-chevron-right"})]:t._e(),t._v("\n        "+t._s(link.text)+"\n      ")],2),t._v(" "),e===t.activeUrlIndex?t._l(link.children,(function(e,n){return r("a",{key:e.url,staticClass:"row content-v-center b-tutorial__links__item-children ripple",class:{"b-tutorial__links__item--active":n===t.childActiveUrlIndex},attrs:{href:t.url(link.url+"/"+e.url)}},[t._v("\n          "+t._s(e.text)+"\n        ")])})):t._e()],2)}))],2),t._v(" "),r("div",{staticClass:"b-tutorial__content col-sm-8 col-md-9 col-lg-8"},[t._t("default"),t._v(" "),r("div",{staticClass:"b-tutorial__content__btns"},[r("a",{attrs:{href:t.prevUrl}},[r("i",{staticClass:"fas fa-chevron-left"})]),t._v(" "),r("a",{attrs:{href:t.nextUrl}},[r("i",{staticClass:"fas fa-chevron-right"})])])],2),t._v(" "),r("div",{staticClass:"col-lg-2 width-full pl-10px pr-5px"},[r("a",{staticClass:"ad-container",attrs:{target:"_blank",href:"http://fortjs.info/"}},[r("h6",[t._v("FortJs")]),t._v(" "),r("img",{staticClass:"mt-5px",attrs:{src:"//fortjs.info/img/fort_js_logo_200_137.png"}}),t._v(" "),r("div",[t._v(t._s(t.ads[0]))])])]),t._v(" "),r("div",{staticClass:"b-tutorial__sticky-btn"},[t._m(0),t._v(" "),r("a",{staticClass:"btn secondary",attrs:{alt:"edit this doc",target:"_blank",href:"https://github.com/ujjwalguptaofficial/jsstore.docs/edit/master/content"+t.currentUrl+".md",fixed:"",bottom:"",right:"",fab:""}},[r("i",{staticClass:"far fa-edit"})])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"btn rounded secondary margin-bottom-70px",attrs:{alt:"edit this doc",target:"_blank",href:"https://gitter.im/JsStore/Lobby"}},[e("i",{staticClass:"fab fa-gitter"})])}],!1,null,"074cbfd4",null);e.a=component.exports},173:function(t,e,r){var content=r(179);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(33).default)("601bcea8",content,!0,{sourceMap:!1})},175:function(t,e,r){"use strict";var n=r(4),o=r(83)(6),l="findIndex",h=!0;l in[]&&Array(1)[l]((function(){h=!1})),n(n.P+n.F*h,"Array",{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),r(82)(l)},176:function(t,e,r){"use strict";!function(e,r,n){let o;(o=n.define)&&o.amd?o([],(function(){return r})):(o=n.modules)?o["FlexSearch".toLowerCase()]=r:t.exports=r}(0,function t(e){function r(a,t){const b=t?t.id:a&&a.id;this.id=b||0===b?b:R++,this.init(a,t),c(this,"index",(function(){return this.a?Object.keys(this.a.index[this.a.keys[0]].c):Object.keys(this.c)})),c(this,"length",(function(){return this.index.length}))}function n(a,t,b,e){return this.u!==this.g&&(this.o=this.o.concat(b),this.u++,e&&this.o.length>=e&&(this.u=this.g),this.u===this.g&&(this.cache&&this.j.set(t,this.o),this.F&&this.F(this.o))),this}function o(a){const t=A();for(const b in a)if(a.hasOwnProperty(b)){const e=a[b];I(e)?t[b]=e.slice(0):U(e)?t[b]=o(e):t[b]=e}return t}function l(a,t){const b=a.length,e=O(t),r=[];for(let n=0,o=0;n<b;n++){const g=a[n];(e&&t(g)||!e&&!t[g])&&(r[o++]=g)}return r}function h(a,t,b,e,r,n,o,g,l,h){let p;if(b=C(b,o?0:r,g,n,t,l,h),g&&(g=b.page,p=b.next,b=b.result),o)t=this.where(o,null,r,b);else{for(t=b,b=this.l,r=t.length,n=Array(r),o=0;o<r;o++)n[o]=b[t[o]];t=n}return b=t,e&&(O(e)||(F=e.split(":"),1<F.length?e=k:(F=F[0],e=y)),b.sort(e)),b=w(g,p,b),this.cache&&this.j.set(a,b),b}function c(a,t,b){Object.defineProperty(a,t,{get:b})}function f(a){return new RegExp(a,"g")}function d(a,t){for(let b=0;b<t.length;b+=2)a=a.replace(t[b],t[b+1]);return a}function v(a,t,b,e,r,n,o,g){return t[b]?t[b]:(r=r?(g-(o||g/1.5))*n+(o||g/1.5)*r:n,t[b]=r,r>=o&&((a=(a=a[g-(r+.5>>0)])[b]||(a[b]=[]))[a.length]=e),r)}function x(a,t){if(a){const b=Object.keys(a);for(let e=0,r=b.length;e<r;e++){const r=b[e],n=a[r];if(n)for(let g=0,e=n.length;g<e;g++){if(n[g]===t){1===e?delete a[r]:n.splice(g,1);break}U(n[g])&&x(n[g],t)}}}}function m(a){let t="",b="";var e="";for(let r=0;r<a.length;r++){const n=a[r];n!==b&&(r&&"h"===n?(e="a"===e||"e"===e||"i"===e||"o"===e||"u"===e||"y"===e,(("a"===b||"e"===b||"i"===b||"o"===b||"u"===b||"y"===b)&&e||" "===b)&&(t+=n)):t+=n),e=r===a.length-1?"":a[r+1],b=n}return t}function _(a,t){return 0>(a=a.length-t.length)?1:a?-1:0}function y(a,t){return(a=a[F])<(t=t[F])?-1:a>t?1:0}function k(a,t){const b=F.length;for(let e=0;e<b;e++)a=a[F[e]],t=t[F[e]];return a<t?-1:a>t?1:0}function w(a,t,b){return a?{page:a,next:t?""+t:null,result:b}:b}function C(a,t,b,e,r,n,o){let g,l=[];if(!0===b){b="0";var h=""}else h=b&&b.split(":");const p=a.length;if(1<p){const x=A(),m=[];let _,y;var c,f=0;let k;var u=!0;let C,I,O,U,S,L,z=0;if(h&&(2===h.length?(U=h,h=!1):h=S=parseInt(h[0],10)),o){for(_=A();f<p;f++)if("not"===r[f])for(y=a[f],k=y.length,c=0;c<k;c++)_["@"+y[c]]=1;else O=f+1;if(T(O))return w(b,g,l);f=0}else I=j(r)&&r;for(;f<p;f++){const j=f===(O||p)-1;if(!I||!f)if((c=I||r&&r[f])&&"and"!==c){if("or"!==c)continue;L=!1}else L=n=!0;if(y=a[f],k=y.length){if(u){if(!C){C=y;continue}var q=C.length;for(c=0;c<q;c++){var d="@"+(u=C[c]);o&&_[d]||(x[d]=1,n||(l[z++]=u))}C=null,u=!1}for(d=!1,c=0;c<k;c++){var v="@"+(q=y[c]);const r=n?x[v]||0:f;if(!(!r&&!e||o&&_[v]||!n&&x[v]))if(r===f){if(j){if((!S||--S<z)&&(l[z++]=q,t&&z===t))return w(b,z+(h||0),l)}else x[v]=f+1;d=!0}else e&&((v=m[r]||(m[r]=[]))[v.length]=q)}if(L&&!d&&!e)break}else if(L&&!e)return w(b,g,y)}if(C)if(f=C.length,o)for(c=h?parseInt(h,10):0;c<f;c++)_["@"+(a=C[c])]||(l[z++]=a);else l=C;if(e)for(z=l.length,U?(f=parseInt(U[0],10)+1,c=parseInt(U[1],10)+1):(f=m.length,c=0);f--;)if(q=m[f]){for(k=q.length;c<k;c++)if(e=q[c],(!o||!_["@"+e])&&(l[z++]=e,t&&z===t))return w(b,f+":"+c,l);c=0}}else!p||r&&"not"===r[0]||(l=a[0],h&&(h=parseInt(h[0],10)));return t&&(o=l.length,h&&h>o&&(h=0),g=(h=h||0)+t,g<o?l=l.slice(h,g):(g=0,h&&(l=l.slice(h)))),w(b,g,l)}function j(a){return"string"==typeof a}function I(a){return a.constructor===Array}function O(a){return"function"==typeof a}function U(a){return"object"==typeof a}function T(a){return void 0===a}function S(a){const t=Array(a);for(let b=0;b<a;b++)t[b]=A();return t}function A(){return Object.create(null)}function L(){let a,t;self.onmessage=function(b){if(b=b.data)if(b.search){const e=t.search(b.content,b.threshold?{limit:b.limit,threshold:b.threshold,where:b.where}:b.limit);self.postMessage({id:a,content:b.content,limit:b.limit,result:e})}else b.add?t.add(b.id,b.content):b.update?t.update(b.id,b.content):b.remove?t.remove(b.id):b.clear?t.clear():b.info?((b=t.info()).worker=a,console.log(b)):b.register&&(a=b.id,b.options.cache=!1,b.options.async=!1,b.options.worker=!1,t=new Function(b.register.substring(b.register.indexOf("{")+1,b.register.lastIndexOf("}")))(),t=new t(b.options))}}function z(a,r,b,n){a=e("flexsearch","id"+a,L,(function(t){(t=t.data)&&t.result&&n(t.id,t.content,t.result,t.limit,t.where,t.cursor,t.suggest)}),r);const o=t.toString();return b.id=r,a.postMessage({register:o,options:b,id:r}),a}const M={encode:"icase",f:"forward",split:/\W+/,cache:!1,async:!1,g:!1,D:!1,a:!1,b:9,threshold:0,depth:0},P={memory:{encode:"extra",f:"strict",threshold:0,b:1},speed:{encode:"icase",f:"strict",threshold:1,b:3,depth:2},match:{encode:"extra",f:"full",threshold:1,b:3},score:{encode:"extra",f:"strict",threshold:1,b:9,depth:4},balance:{encode:"balance",f:"strict",threshold:0,b:3,depth:3},fast:{encode:"icase",f:"strict",threshold:8,b:9,depth:1}},E=[];let R=0;const B={},D={};let F;r.create=function(a,t){return new r(a,t)},r.registerMatcher=function(a){for(const t in a)a.hasOwnProperty(t)&&E.push(f(t),a[t]);return this},r.registerEncoder=function(a,t){return J[a]=t.bind(J),this},r.registerLanguage=function(a,t){return B[a]=t.filter,D[a]=t.stemmer,this},r.encode=function(a,t){return J[a](t)},r.prototype.init=function(a,t){if(this.v=[],t){var b=t.preset;a=t}else a||(a=M),b=a.preset;if(t={},j(a)?(t=P[a],a={}):b&&(t=P[b]),b=a.worker)if("undefined"==typeof Worker)a.worker=!1,this.m=null;else{var e=parseInt(b,10)||4;this.C=-1,this.u=0,this.o=[],this.F=null,this.m=Array(e);for(var l=0;l<e;l++)this.m[l]=z(this.id,l,a,n.bind(this))}if(this.f=a.tokenize||t.f||this.f||M.f,this.split=T(b=a.split)?this.split||M.split:j(b)?f(b):b,this.D=a.rtl||this.D||M.D,this.async="undefined"==typeof Promise||T(b=a.async)?this.async||M.async:b,this.g=T(b=a.worker)?this.g||M.g:b,this.threshold=T(b=a.threshold)?t.threshold||this.threshold||M.threshold:b,this.b=T(b=a.resolution)?b=t.b||this.b||M.b:b,b<=this.threshold&&(this.b=this.threshold+1),this.depth="strict"!==this.f||T(b=a.depth)?t.depth||this.depth||M.depth:b,this.w=(b=T(b=a.encode)?t.encode||M.encode:b)&&J[b]&&J[b].bind(J)||(O(b)?b:this.w||!1),(b=a.matcher)&&this.addMatcher(b),b=(t=a.lang)||a.filter){if(j(b)&&(b=B[b]),I(b)){e=this.w,l=A();for(var h=0;h<b.length;h++){var c=e?e(b[h]):b[h];l[c]=1}b=l}this.filter=b}if(b=t||a.stemmer){var g;for(g in t=j(b)?D[b]:b,e=this.w,l=[],t)t.hasOwnProperty(g)&&(h=e?e(g):g,l.push(f(h+"($|\\W)"),e?e(t[g]):t[g]));this.stemmer=g=l}if(this.a=l=(b=a.doc)?o(b):this.a||M.a,this.i=S(this.b-(this.threshold||0)),this.h=A(),this.c=A(),l){if(this.l=A(),a.doc=null,g=l.index={},t=l.keys=[],e=l.field,h=l.tag,c=l.store,I(l.id)||(l.id=l.id.split(":")),c){var d=A();if(j(c))d[c]=1;else if(I(c))for(let t=0;t<c.length;t++)d[c[t]]=1;else U(c)&&(d=c);l.store=d}if(h){if(this.G=A(),c=A(),e)if(j(e))c[e]=a;else if(I(e))for(d=0;d<e.length;d++)c[e[d]]=a;else U(e)&&(c=e);for(I(h)||(l.tag=h=[h]),e=0;e<h.length;e++)this.G[h[e]]=A();this.I=h,e=c}if(e){let n;for(I(e)||(U(e)?(n=e,l.field=e=Object.keys(e)):l.field=e=[e]),l=0;l<e.length;l++)I(h=e[l])||(n&&(a=n[h]),t[l]=h,e[l]=h.split(":")),g[h]=new r(a)}a.doc=b}return this.B=!0,this.j=!!(this.cache=b=T(b=a.cache)?this.cache||M.cache:b)&&new W(b),this},r.prototype.encode=function(a){return a&&(E.length&&(a=d(a,E)),this.v.length&&(a=d(a,this.v)),this.w&&(a=this.w(a)),this.stemmer&&(a=d(a,this.stemmer))),a},r.prototype.addMatcher=function(a){const t=this.v;for(const b in a)a.hasOwnProperty(b)&&t.push(f(b),a[b]);return this},r.prototype.add=function(a,t,b,e,r){if(this.a&&U(a))return this.A("add",a,t);if(t&&j(t)&&(a||0===a)){var n="@"+a;if(this.c[n]&&!e)return this.update(a,t);if(this.g)return++this.C>=this.m.length&&(this.C=0),this.m[this.C].postMessage({add:!0,id:a,content:t}),this.c[n]=""+this.C,b&&b(),this;if(!r){if(this.async&&"function"!=typeof importScripts){let r=this;return n=new Promise((function(n){setTimeout((function(){r.add(a,t,null,e,!0),r=null,n()}))})),b?(n.then(b),this):n}if(b)return this.add(a,t,null,e,!0),b(),this}if(!(t=this.encode(t)).length)return this;r=O(b=this.f)?b(t):t.split(this.split),this.filter&&(r=l(r,this.filter));const f=A();f._ctx=A();const d=r.length,u=this.threshold,q=this.depth,x=this.b,m=this.i,_=this.D;for(let t=0;t<d;t++){var o=r[t];if(o){var g=o.length,h=(_?t+1:d-t)/d,c="";switch(b){case"reverse":case"both":for(var p=g;--p;)v(m,f,c=o[p]+c,a,_?1:(g-p)/g,h,u,x-1);c="";case"forward":for(p=0;p<g;p++)v(m,f,c+=o[p],a,_?(p+1)/g:1,h,u,x-1);break;case"full":for(p=0;p<g;p++){const t=(_?p+1:g-p)/g;for(let e=g;e>p;e--)v(m,f,c=o.substring(p,e),a,t,h,u,x-1)}break;default:if(g=v(m,f,o,a,1,h,u,x-1),q&&1<d&&g>=u)for(g=f._ctx[o]||(f._ctx[o]=A()),o=this.h[o]||(this.h[o]=S(x-(u||0))),0>(h=t-q)&&(h=0),(c=t+q+1)>d&&(c=d);h<c;h++)h!==t&&v(o,g,r[h],a,0,x-(h<t?t-h:h-t),u,x-1)}}}this.c[n]=1,this.B=!1}return this},r.prototype.A=function(a,t,b){if(I(t)){var e=t.length;if(e--){for(var r=0;r<e;r++)this.A(a,t[r]);return this.A(a,t[e],b)}}else{var n,o=this.a.index,l=this.a.keys,g=this.a.tag;r=this.a.store;var h=this.a.id;e=t;for(var p=0;p<h.length;p++)e=e[h[p]];if("remove"===a&&(delete this.l[e],h=l.length,h--)){for(t=0;t<h;t++)o[l[t]].remove(e);return o[l[h]].remove(e,b)}if(g){for(n=0;n<g.length;n++){var c=g[n],f=t;for(h=c.split(":"),p=0;p<h.length;p++)f=f[h[p]];f="@"+f}n=(n=this.G[c])[f]||(n[f]=[])}for(let u=0,q=(h=this.a.field).length;u<q;u++){for(c=h[u],g=t,f=0;f<c.length;f++)g=g[c[f]];c=o[l[u]],f="add"===a?c.add:c.update,u===q-1?f.call(c,e,g,b):f.call(c,e,g)}if(r){for(b=Object.keys(r),a=A(),o=0;o<b.length;o++)if(r[l=b[o]]){let u,q;for(l=l.split(":"),h=0;h<l.length;h++)u=(u||t)[g=l[h]],q=(q||a)[g]=u}t=a}n&&(n[n.length]=t),this.l[e]=t}return this},r.prototype.update=function(a,t,b){return this.a&&U(a)?this.A("update",a,t):(this.c["@"+a]&&j(t)&&(this.remove(a),this.add(a,t,b,!0)),this)},r.prototype.remove=function(a,t,b){if(this.a&&U(a))return this.A("remove",a,t);var e="@"+a;if(this.c[e]){if(this.g)return this.m[this.c[e]].postMessage({remove:!0,id:a}),delete this.c[e],t&&t(),this;if(!b){if(this.async&&"function"!=typeof importScripts){let r=this;return e=new Promise((function(t){setTimeout((function(){r.remove(a,null,!0),r=null,t()}))})),t?(e.then(t),this):e}if(t)return this.remove(a,null,!0),t(),this}for(t=0;t<this.b-(this.threshold||0);t++)x(this.i[t],a);this.depth&&x(this.h,a),delete this.c[e],this.B=!1}return this},r.prototype.search=function(a,t,b,e){if(U(t)){if(I(t))for(var r=0;r<t.length;r++)t[r].query=a;else t.query=a;a=t,t=1e3}else t&&O(t)?(b=t,t=1e3):t||0===t||(t=1e3);if(!this.g){var n=[],g=a;if(U(a)&&!I(a)){b||(b=a.callback)&&(g.callback=null);var o=a.sort,c=a.page;t=a.limit,m=a.threshold;var p=a.suggest;a=a.query}if(this.a){m=this.a.index;const l=g.where;var f=g.bool||"or",d=g.field;let v,x,_=f;if(d)I(d)||(d=[d]);else if(I(g)){var u=g;d=[],_=[];for(var q=0;q<g.length;q++)r=(e=g[q]).bool||f,d[q]=e.field,_[q]=r,"not"===r?v=!0:"and"===r&&(x=!0)}else d=this.a.keys;for(f=d.length,q=0;q<f;q++)u&&(g=u[q]),c&&!j(g)&&(g.page=null,g.limit=0),n[q]=m[d[q]].search(g,0);if(b)return b(h.call(this,a,_,n,o,t,p,l,c,x,v));if(this.async){const e=this;return new Promise((function(r){Promise.all(n).then((function(n){r(h.call(e,a,_,n,o,t,p,l,c,x,v))}))}))}return h.call(this,a,_,n,o,t,p,l,c,x,v)}if(m||(m=this.threshold||0),!e){if(this.async&&"function"!=typeof importScripts){let e=this;return m=new Promise((function(r){setTimeout((function(){r(e.search(g,t,null,!0)),e=null}))})),b?(m.then(b),this):m}if(b)return b(this.search(g,t,null,!0)),this}if(!a||!j(a))return n;if(g=a,this.cache)if(this.B){if(b=this.j.get(a))return b}else this.j.clear(),this.B=!0;if(!(g=this.encode(g)).length)return n;b=O(b=this.f)?b(g):g.split(this.split),this.filter&&(b=l(b,this.filter)),u=b.length,e=!0,r=[];var v=A(),x=0;if(1<u&&(this.depth&&"strict"===this.f?f=!0:b.sort(_)),!f||(q=this.h)){const t=this.b;for(;x<u;x++){let o=b[x];if(o){if(f){if(!d)if(q[o])d=o,v[o]=1;else if(!p)return n;if(p&&x===u-1&&!r.length)f=!1,o=d||o,v[o]=0;else if(!d)continue}if(!v[o]){const n=[];let l=!1,h=0;const c=f?q[d]:this.i;if(c){let e;for(let r=0;r<t-m;r++)(e=c[r]&&c[r][o])&&(n[h++]=e,l=!0)}if(l)d=o,r[r.length]=1<h?n.concat.apply([],n):n[0];else if(!p){e=!1;break}v[o]=1}}}}else e=!1;return e&&(n=C(r,t,c,p)),this.cache&&this.j.set(a,n),n}this.F=b,this.u=0,this.o=[];for(var m=0;m<this.g;m++)this.m[m].postMessage({search:!0,limit:t,content:a})},r.prototype.find=function(a,t){return this.where(a,t,1)[0]||null},r.prototype.where=function(a,t,b,e){const r=this.l,n=[];let g,o=0;var l;let h;if(U(a)){b||(b=t);var p=Object.keys(a),c=p.length;if(g=!1,1===c&&"id"===p[0])return[r[a.id]];if((l=this.I)&&!e)for(var f=0;f<l.length;f++){var u=l[f],q=a[u];if(!T(q)){if(h=this.G[u]["@"+q],0==--c)return h;p.splice(p.indexOf(u),1),delete a[u];break}}for(l=Array(c),f=0;f<c;f++)l[f]=p[f].split(":")}else{if(O(a)){for(b=(t=e||Object.keys(r)).length,p=0;p<b;p++)a(c=r[t[p]])&&(n[o++]=c);return n}if(T(t))return[r[a]];if("id"===a)return[r[t]];p=[a],c=1,l=[a.split(":")],g=!0}for(f=(e=h||e||Object.keys(r)).length,u=0;u<f;u++){q=h?e[u]:r[e[u]];let f=!0;for(let e=0;e<c;e++){g||(t=a[p[e]]);const r=l[e],n=r.length;let o=q;if(1<n)for(let t=0;t<n;t++)o=o[r[t]];else o=o[r[0]];if(o!==t){f=!1;break}}if(f&&(n[o++]=q,b&&o===b))break}return n},r.prototype.info=function(){if(!this.g)return{id:this.id,items:this.length,cache:!(!this.cache||!this.cache.s)&&this.cache.s.length,matcher:E.length+(this.v?this.v.length:0),worker:this.g,threshold:this.threshold,depth:this.depth,resolution:this.b,contextual:this.depth&&"strict"===this.f};for(let a=0;a<this.g;a++)this.m[a].postMessage({info:!0,id:this.id})},r.prototype.clear=function(){return this.destroy().init()},r.prototype.destroy=function(){if(this.cache&&(this.j.clear(),this.j=null),this.i=this.h=this.c=null,this.a){const a=this.a.keys;for(let t=0;t<a.length;t++)this.a.index[a[t]].destroy();this.a=this.l=null}return this},r.prototype.export=function(a){const t=!a||T(a.serialize)||a.serialize;if(this.a){const t=!a||T(a.doc)||a.doc;var b=!a||T(a.index)||a.index;a=[];let e=0;if(b)for(b=this.a.keys;e<b.length;e++){const t=this.a.index[b[e]];a[e]=[t.i,t.h,Object.keys(t.c)]}t&&(a[e]=this.l)}else a=[this.i,this.h,Object.keys(this.c)];return t&&(a=JSON.stringify(a)),a},r.prototype.import=function(a,t){(!t||T(t.serialize)||t.serialize)&&(a=JSON.parse(a));const b=A();if(this.a){var e=!t||T(t.doc)||t.doc,r=0;if(!t||T(t.index)||t.index){const e=(t=this.a.keys).length;for(var n=a[0][2];r<n.length;r++)b[n[r]]=1;for(r=0;r<e;r++){n=this.a.index[t[r]];const g=a[r];g&&(n.i=g[0],n.h=g[1],n.c=b)}}e&&(this.l=U(e)?e:a[r])}else{for(e=a[2],r=0;r<e.length;r++)b[e[r]]=1;this.i=a[0],this.h=a[1],this.c=b}};const H=function(){const a=f("\\s+"),t=f("[^a-z0-9 ]"),b=[f("[-/]")," ",t,"",a," "];return function(t){return m(d(t.toLowerCase(),b))}}(),J={icase:function(a){return a.toLowerCase()},simple:function(){const a=f("\\s+"),t=f("[^a-z0-9 ]"),b=f("[-/]"),u=[f("[àáâãäå]"),"a",f("[èéêë]"),"e",f("[ìíîï]"),"i",f("[òóôõöő]"),"o",f("[ùúûüű]"),"u",f("[ýŷÿ]"),"y",f("ñ"),"n",f("[çc]"),"k",f("ß"),"s",f(" & ")," and ",b," ",t,"",a," "];return function(q){return" "===(q=d(q.toLowerCase(),u))?"":q}}(),advanced:function(){const a=f("ae"),t=f("ai"),b=f("ay"),e=f("ey"),r=f("oe"),n=f("ue"),o=f("ie"),g=f("sz"),l=f("zs"),h=f("ck"),p=f("cc"),c=[a,"a",t,"ei",b,"ei",e,"ei",r,"o",n,"u",o,"i",g,"s",l,"s",f("sh"),"s",h,"k",p,"k",f("th"),"t",f("dt"),"t",f("ph"),"f",f("pf"),"f",f("ou"),"o",f("uo"),"u"];return function(t,e){return t?(2<(t=this.simple(t)).length&&(t=d(t,c)),e||1<t.length&&(t=m(t)),t):t}}(),extra:function(){const g=[f("p"),"b",f("z"),"s",f("[cgq]"),"k",f("n"),"m",f("d"),"t",f("[vw]"),"f",f("[aeiouy]"),""];return function(t){if(!t)return t;if(1<(t=this.advanced(t,!0)).length){t=t.split(" ");for(let e=0;e<t.length;e++){const p=t[e];1<p.length&&(t[e]=p[0]+d(p.substring(1),g))}t=m(t=t.join(" "))}return t}}(),balance:H},W=function(){function a(t){this.clear(),this.H=!0!==t&&t}return a.prototype.clear=function(){this.cache=A(),this.count=A(),this.index=A(),this.s=[]},a.prototype.set=function(t,b){if(this.H&&T(this.cache[t])){let e=this.s.length;if(e===this.H){e--;const t=this.s[e];delete this.cache[t],delete this.count[t],delete this.index[t]}this.index[t]=e,this.s[e]=t,this.count[t]=-1,this.cache[t]=b,this.get(t)}else this.cache[t]=b},a.prototype.get=function(t){const b=this.cache[t];if(this.H&&b){var e=++this.count[t];const n=this.index;let o=n[t];if(0<o){const g=this.s;for(var r=o;this.count[g[--o]]<=e&&-1!==o;);if(o++,o!==r){for(e=r;e>o;e--)r=g[e-1],g[e]=r,n[r]=e;g[o]=t,n[t]=o}}}return b},a}();return r}(function(){const t={},e="undefined"!=typeof Blob&&"undefined"!=typeof URL&&URL.createObjectURL;return function(r,n,o,l,h){return o=e?URL.createObjectURL(new Blob(["("+o.toString()+")()"],{type:"text/javascript"})):r+".min.js",t[r+="-"+n]||(t[r]=[]),t[r][h]=new Worker(o),t[r][h].onmessage=l,t[r][h]}}()),this)},177:function(t,e){t.exports=[{text:"Get Started",url:"get-started"},{text:"Installation",url:"installation"},{text:"Connection",url:"connection"},{text:"Database",url:"database",children:[{text:"Table",url:"table"},{text:"Column",url:"column"},{text:"Data Type",url:"data-type"}]},{text:"insert",url:"insert",children:[{text:"upsert",url:"upsert"}]},{text:"Select",url:"select",children:[{text:"Limit",url:"limit"},{text:"Skip",url:"skip"},{text:"Order By",url:"order-by"},{text:"Aggregate",url:"aggregate"},{text:"Group By",url:"group-by"},{text:"Distinct",url:"distinct"},{text:"Case",url:"case"},{text:"Join",url:"join"},{text:"Flatten",url:"flatten"}]},{text:"Where",url:"where",children:[{text:"Like",url:"like"},{text:"In",url:"in"},{text:"Regex",url:"regex"},{text:"Or",url:"or"},{text:"Operators",url:"operators"},{text:"Between",url:"between"}]},{text:"Update",url:"update",children:[{text:"With operators",url:"with-operators"}]},{text:"Remove",url:"remove"},{text:"Count",url:"count"},{text:"Union",url:"union"},{text:"Intersect",url:"intersect"},{text:"Clear",url:"clear"},{text:"Drop Database",url:"drop-db"},{text:"Update Schema",url:"update-schema"},{text:"Helpers",url:"helpers"},{text:"Terminate",url:"terminate"},{text:"Adv. Sql Example",url:"adv-sql-example"},{text:"Enums",url:"enums"},{text:"V3 To V4",url:"v3-to-v4"},{text:"Import scripts",url:"import-scripts"},{text:"Transaction",url:"transaction"},{text:"multiEntry",url:"multi-entry"},{text:"keyPath",url:"keypath"},{text:"Event",url:"event"},{text:"Middleware",url:"middleware"},{text:"Plugin",url:"plugin"},{text:"Optimization",url:"optimization"},{text:"SqlWeb",url:"sqlweb"},{text:"IDBStudio",url:"idbstudio"}]},178:function(t,e,r){"use strict";r(173)},179:function(t,e,r){var n=r(32)(!1);n.push([t.i,".b-tutorial[data-v-074cbfd4]{padding:10px 10px 0}.b-tutorial__links[data-v-074cbfd4]{padding-right:30px;border-right:1px solid #e9ecef;position:sticky;top:4rem;z-index:100;height:calc(100vh - 4rem);overflow-y:scroll}.b-tutorial__links[data-v-074cbfd4]::-webkit-scrollbar{width:3px}.b-tutorial__links[data-v-074cbfd4]::-webkit-scrollbar-thumb{background:#e4dddd}.b-tutorial__links__item[data-v-074cbfd4],.b-tutorial__links__item-children[data-v-074cbfd4],.b-tutorial__links__search-result a[data-v-074cbfd4]{cursor:pointer;padding:10px;color:var(--link-color);font-size:1.1rem}.b-tutorial__links__item-children[data-v-074cbfd4]:hover,.b-tutorial__links__item[data-v-074cbfd4]:hover,.b-tutorial__links__search-result a[data-v-074cbfd4]:hover{background-color:rgba(0,0,0,.05)}.b-tutorial__links__item-children .fas[data-v-074cbfd4],.b-tutorial__links__item .fas[data-v-074cbfd4],.b-tutorial__links__search-result a .fas[data-v-074cbfd4]{margin-right:5px}.b-tutorial__links__item-children[data-v-074cbfd4]{margin-left:20px;font-size:1rem}.b-tutorial__links__item--active[data-v-074cbfd4]{border:1px solid;border-radius:3px;text-align:center;color:var(--secondary-color);justify-content:center}.b-tutorial__links__item--active-with-children[data-v-074cbfd4]{justify-content:unset}.b-tutorial__content[data-v-074cbfd4]{padding-left:40px}.b-tutorial__content__btns[data-v-074cbfd4]{display:flex;justify-content:space-between;font-size:2rem;margin-top:30px;margin-bottom:20px}.b-tutorial__content__btns i[data-v-074cbfd4]{cursor:pointer}.b-tutorial__sticky-btn[data-v-074cbfd4]{position:fixed;right:0;bottom:20px;display:flex;flex-direction:column;z-index:1000}.b-tutorial__sticky-btn a[data-v-074cbfd4]{width:56px;height:56px;border-radius:50%;margin-bottom:10px;padding:0}.ad-container[data-v-074cbfd4]{text-align:center;border:1px solid;display:flex;flex-direction:column;padding:5px;cursor:pointer}.b-tutorial__links__search[data-v-074cbfd4]{padding:5px;max-width:100%;margin-bottom:20px}",""]),t.exports=n}}]);