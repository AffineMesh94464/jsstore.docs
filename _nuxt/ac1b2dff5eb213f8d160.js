(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{176:function(e,t,r){var n=r(178);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,r(27).default)("7a78b854",n,!0,{})},177:function(e,t,r){"use strict";var n=r(176);r.n(n).a},178:function(e,t,r){(e.exports=r(26)(!1)).push([e.i,"\n.link-active{background-color:#dd5959!important;border:1px solid #fff;border-radius:3px;text-align:center\n}\n.link-active a{color:#fff!important\n}\n#divMenuContainer ul{list-style:none;display:inline-block;border-right:2px solid #a2cfd5;padding-right:15px;margin-left:0\n}\n#divMenuContainer ul li a{padding:10px;color:rgba(0,0,0,.87);display:block\n}\n#divMenuContainer ul li:hover{cursor:pointer;background-color:rgba(0,0,0,.05)\n}\n#divMenuContainer ul li.search i{vertical-align:middle\n}\n#divMenuContainer ul li #txtSearch{width:80%;border:none;text-align:center;margin:0;height:45px\n}\n#btnMenuToggle{margin-left:10px;display:inline-block;cursor:pointer;vertical-align:middle\n}\n#btnMenuToggle i{font-size:30px\n}\n.show-menu{display:block!important;z-index:1000;position:absolute;background-color:#fff;overflow-y:scroll\n}\n.show-menu ul{border-right:none!important;margin-left:15px\n}\n.search .search-wrapper a:hover{background-color:#eee;outline:none\n}\npre{background-color:#f1f1f1;box-shadow:0 2px 4px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)!important;padding:.01em 16px;display:inline-block;min-width:70%\n}\npre,pre code{margin:20px 0\n}\npre code{background-color:#fff;border-left:5px solid #ee6e73;padding:5px 20px;display:block;color:#000;font-family:monospace;font-size:100%;font-weight:400\n}\n.search-results{webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)\n}\n.right-side-button{padding:15px;height:50px;text-align:center\n}",""])},179:function(e,t,r){"use strict";var n,o=r(13),i=function(){function e(e){e&&(this.el=document.querySelector(e))}return e.prototype.css=function(e,t){this.el.style[e]=t},e.prototype.attr=function(e,t){this.el.setAttribute(e,t)},Object.defineProperty(e.prototype,"window",{get:function(){return window},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"document",{get:function(){return document},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"innerHeight",{get:function(){return window.innerHeight},enumerable:!0,configurable:!0}),e.prototype.createElement=function(e){return document.createElement(e)},e.prototype.innerTextFromHtml=function(e){try{var t=this.createElement("div");return t.innerHTML=e,t.innerText}catch(e){console.log(e)}return""},e.prototype.val=function(){return this.el.value},e}(),l=r(32),a=[{text:"Get Started",url:"get-started"},{text:"Installation",url:"installation"},{text:"Connection",url:"connection"},{text:"Column",url:"column"},{text:"Table",url:"table"},{text:"Database",url:"database"},{text:"Data Type",url:"data-type"},{text:"insert",url:"insert"},{text:"Bulk Insert",url:"bulk-insert"},{text:"Select",url:"select"},{text:"Where",url:"where"},{text:"Ignore Case",url:"ignore-case"},{text:"Or",url:"or"},{text:"Limit",url:"limit"},{text:"Skip",url:"skip"},{text:"Order By",url:"order-by"},{text:"Aggregate",url:"aggregate"},{text:"Group By",url:"group-by"},{text:"Distinct",url:"distinct"},{text:"Update",url:"update"},{text:"Update with operators",url:"update-with-operators"},{text:"Remove",url:"remove"},{text:"Count",url:"count"},{text:"Regex",url:"regex"},{text:"Like",url:"like"},{text:"In",url:"in"},{text:"Operators",url:"operators"},{text:"Between",url:"between"},{text:"Join",url:"join"},{text:"Clear",url:"clear"},{text:"Drop Database",url:"drop-db"},{text:"Change Table Design",url:"change-table-design"},{text:"Export Json",url:"export-json"},{text:"Helpers",url:"helpers"},{text:"Promise",url:"promise"},{text:"Terminate",url:"terminate"},{text:"Adv. Sql Example",url:"adv-sql-example"},{text:"Enums",url:"enums"},{text:"V1 To V2",url:"v1-to-v2"},{text:"V2 To V3",url:"v2-to-v3"},{text:"Transaction",url:"transaction"},{text:"keyPath",url:"keypath"},{text:"SqlWeb",url:"sqlweb"},{text:"IDBStudio",url:"idbstudio"}],s=(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),u=function(e,t,r,n){var o,i=arguments.length,l=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(i<3?o(l):i>3?o(t,r,l):o(t,r))||l);return i>3&&l&&Object.defineProperty(t,r,l),l},c=function(e){function t(){var t=e.call(this)||this;return t.version=3,t.activeUrl="",t.showMenu=!1,t.searchValue="",t.searchResult="",t.catchEvents(),t}return s(t,e),Object.defineProperty(t.prototype,"docToEdit",{get:function(){var e=this.allLinks_[this.getCurrentUrlIndex()];return e?e.url:null},enumerable:!0,configurable:!0}),t.prototype.catchEvents=function(){l.b.$on("version_change",this.onVersionChange),l.b.$on("menu_click",this.toggleMenu)},t.prototype.onSearch=function(){var e=this,t="";this.links.forEach(function(r){r.text.toLowerCase().indexOf(e.searchValue)>=0&&(t+='<a href="/tutorial/'+r.url+'">'+r.text+"</a>")}),this.searchResult=t},t.prototype.mounted=function(){var e=this;this.setVersion();var t=this.$route.path,r=this.links.find(function(r){return t.toLowerCase().replace(/\//g,"")===(""+e.relativeUrl+r.url.toLowerCase()).replace(/\//g,"")});r&&r.url.length>0&&(this.activeUrl=r.url),this.registerNextBtnEvents()},t.prototype.toggleMenu=function(){this.showMenu=!this.showMenu},t.prototype.showHideMenuButton=function(){var e=this;setTimeout(function(){e.$vuetify.breakpoint.mdAndUp?e.showMenu=!0:e.showMenu=!1},200)},t.prototype.registerNextBtnEvents=function(){var e=new i(".btnNext");e.el&&(e.el.onclick=this.onNextBtnClick.bind(this))},t.prototype.head=function(){return{title:"JsStore - "+this.pageTitle,meta:[{hid:"keywords",name:"keywords",content:this.pageKeywords}]}},t.prototype.getVersion=function(){return new i("#selectVersions").val()},t.prototype.setVersion=function(e){this.version=e||Number(this.getVersion())},t.prototype.onVersionChange=function(e){this.setVersion(e);var t=this.$route.path.split("/").reverse(),r=t[0].length>0?t[0]:t[1];this.$router.push(this.relativeUrl+r)},Object.defineProperty(t.prototype,"tutorialHtml",{get:function(){return decodeURI(this.innerHtml)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"links",{get:function(){var e;switch(this.version){case 1:e=["v1-to-v2","terminate","transaction","regex","connection","v2-to-v3","data-type"];break;case 2:e=["promise","export-json","v2-to-v3","data-type"];case 3:e=["promise","export-json","v1-to-v2"]}return this.allLinks_.filter(function(t){return e.findIndex(function(e){return e===t.url})<0})},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"allLinks_",{get:function(){return a},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"relativeUrl",{get:function(){switch(this.version){case 1:return"/v1/tutorial/";case 2:return"/v2/tutorial/";case 3:return"/tutorial/";default:return"/"}},enumerable:!0,configurable:!0}),t.prototype.getCurrentUrlIndex=function(){var e=this,t=this.$route.path;this.relativeUrl;return this.links.findIndex(function(r){return t.toLowerCase().replace(/\//g,"")===(""+e.relativeUrl+r.url.toLowerCase()).replace(/\//g,"")})},t.prototype.onNextBtnClick=function(){var e=this,t=this.$route.path,r=(this.relativeUrl,this.links),n=r.findIndex(function(r){return t.toLowerCase().replace(/\//g,"")===(""+e.relativeUrl+r.url.toLowerCase()).replace(/\//g,"")});if(n>=0){var o=r[n+1];o&&this.$router.push(this.relativeUrl+o.url)}},t=u([Object(o.Component)({props:{innerHtml:String,pageTitle:String,pageKeywords:String}})],t)}(l.a),p=(r(177),r(12)),d=Object(p.a)(c,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{staticClass:"hidden-sm-and-down",class:{"show-menu":e.showMenu},attrs:{md2:"",xl2:"",id:"divMenuContainer"}},[r("ul",[r("li",{staticClass:"search margin-bottom-10px"},[r("v-card",{staticClass:"search-wrapper"},[r("v-card-text",{staticStyle:{padding:"5px"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchValue,expression:"searchValue"}],attrs:{id:"txtSearch",type:"text",placeholder:"Search"},domProps:{value:e.searchValue},on:{keyup:e.onSearch,input:function(t){t.target.composing||(e.searchValue=t.target.value)}}}),e._v(" "),r("i",{staticClass:"material-icons"},[e._v("search")]),e._v(" "),r("div",{staticClass:"search-results",domProps:{innerHTML:e._s(e.searchResult)}})])],1)],1),e._v(" "),e._l(e.links,function(t){return r("li",{key:t.text,class:{"link-active":t.url===e.activeUrl}},[r("a",{attrs:{href:e.relativeUrl+t.url}},[e._v(e._s(t.text))])])})],2)]),e._v(" "),r("v-flex",{class:{"padding-left-15px":e.$vuetify.breakpoint.mdAndUp},attrs:{id:"divTutorialContent",xs12:"",md8:"",xl8:""}},[r("div",{staticClass:"margin-top-20px",domProps:{innerHTML:e._s(e.tutorialHtml)}})]),e._v(" "),r("v-flex",{staticClass:"margin-top-50px",attrs:{md2:""}},[r("v-btn",{attrs:{href:"/sponsor",color:"success right-side-button"}},[e._v("\n            Sponsor Us &\n            "),r("br"),e._v("get your logo here\n        ")]),e._v(" "),r("br"),e._v(" "),r("br"),e._v(" "),r("v-btn",{attrs:{href:"/sponsor",color:"success right-side-button"}},[e._v("\n            Be a backer &\n            "),r("br"),e._v("get your logo on our page\n        ")]),e._v(" "),null!=e.docToEdit?r("v-btn",{attrs:{alt:"edit this doc",target:"_blank",href:"https://github.com/ujjwalguptaofficial/jsstore.docs/edit/master/docs/tutorial/"+e.docToEdit+".md",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[r("v-icon",[e._v("edit")])],1):e._e()],1)],1)},[],!1,null,null,null);d.options.__file="tutorial.vue";t.a=d.exports},417:function(e,t,r){"use strict";r.r(t);var n,o=r(13),i=r(179),l=(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),a=function(e,t,r,n){var o,i=arguments.length,l=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(i<3?o(l):i>3?o(t,r,l):o(t,r))||l);return i>3&&l&&Object.defineProperty(t,r,l),l},s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.tutorialContent="%3Cp%3EThese%20are%20some%20examples%20of%20common%20use%20cases%20-%3C/p%3E%0A%3Cul%3E%0A%3Cli%3E%3Cstrong%3ESQL%3C/strong%3E%20-%20Select%20*%20from%20Table_Name%20where%20Column1=value1%20or%20Column2=value2%20or%20Column3=value3;%3C/li%3E%0A%3C/ul%3E%0A%3Cpre%3E%3Ccode%3Econnection.select(%7B%0A%20%20%20%20from:%20%22Table_Name%22,%0A%20%20%20%20where:%20%7B%0A%20%20%20%20%20%20%20%20Column1:%20value1,%0A%20%20%20%20%20%20%20%20or:%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20Column2:%20value2,%0A%20%20%20%20%20%20%20%20%20%20%20%20Column3:%20value3%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%7D);%0A%3C/code%3E%3C/pre%3E%0A%3Cul%3E%0A%3Cli%3E%3Cstrong%3ESQL%3C/strong%3E%20-%20Select%20*%20from%20Table_Name%20where%20Column1=value1%20and%20(Column2=value2%20or%20Column3=value3);%3C/li%3E%0A%3C/ul%3E%0A%3Cpre%3E%3Ccode%3Econnection.select(%7B%0A%20%20%20%20from:%20%22Table_Name%22,%0A%20%20%20%20where:%20%5B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20Column1:%20value1%0A%20%20%20%20%20%20%20%20%7D,%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20Column2:%20value2,%0A%20%20%20%20%20%20%20%20%20%20%20%20or:%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Column3:%20value3%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D);%0A%3C/code%3E%3C/pre%3E%0A%3Cul%3E%0A%3Cli%3E%3Cstrong%3ESQL%3C/strong%3E%20-%20Select%20*%20from%20Table_Name%20where%20Column1=value1%20or%20(Column2=value2%20and%20Column3=value3);%3C/li%3E%0A%3C/ul%3E%0A%3Cpre%3E%3Ccode%3Econnection.select(%7B%0A%20%20%20%20from:%20%22Table_Name%22,%0A%20%20%20%20where:%20%5B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20Column1:%20value1%0A%20%20%20%20%20%20%20%20%7D,%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20or:%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Column2:%20value2,%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Column3:%20value3%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%7D);%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3EHope%20these%20examples%20will%20help%20you%20to%20write%20more%20complex%20queries.%20If%20you%20are%20not%20able%20to%20understand%20or%20write%20some%20complex%20queries%20-%20ask%20at%20stackoverflow%20mentioning%20jsstore%20and%20indexeddb.%3C/p%3E",t.title="Advanced Sql Example",t.keywords="advanced sql, example, indexeddb, jsstore",t}return l(t,e),t=a([Object(o.Component)({components:{Tutorial:i.a}})],t)}(o.Vue),u=r(12),c=Object(u.a)(s,function(){var e=this.$createElement;return(this._self._c||e)("Tutorial",{attrs:{pageKeywords:this.keywords,innerHtml:this.tutorialContent,pageTitle:this.title}})},[],!1,null,null,null);c.options.__file="adv-sql-example.vue";t.default=c.exports}}]);