(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{176:function(t,e,r){var n=r(179);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,r(27).default)("478f6032",n,!0,{})},177:function(t,e,r){"use strict";var n=function(){function t(t){t&&(this.el=document.querySelector(t))}return t.prototype.css=function(t,e){this.el.style[t]=e},t.prototype.attr=function(t,e){this.el.setAttribute(t,e)},Object.defineProperty(t.prototype,"window",{get:function(){return window},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"document",{get:function(){return document},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"innerHeight",{get:function(){return window.innerHeight},enumerable:!0,configurable:!0}),t.prototype.createElement=function(t){return document.createElement(t)},t.prototype.innerTextFromHtml=function(t){try{var e=this.createElement("div");return e.innerHTML=t,e.innerText}catch(t){console.log(t)}return""},t.prototype.val=function(){return this.el.value},t}();e.a=n},178:function(t,e,r){"use strict";var n=r(176);r.n(n).a},179:function(t,e,r){(t.exports=r(26)(!1)).push([t.i,"\n.link-active{background-color:#dd5959!important;border:1px solid #fff;border-radius:3px;text-align:center\n}\n.link-active a{color:#fff!important\n}\n#divMenuContainer ul{list-style:none;display:inline-block;border-right:2px solid #a2cfd5;padding-right:15px;margin-left:0\n}\n#divMenuContainer ul li a{padding:10px;color:rgba(0,0,0,.87);display:block\n}\n#divMenuContainer ul li:hover{cursor:pointer;background-color:rgba(0,0,0,.05)\n}\n#divMenuContainer ul li.search i{vertical-align:middle\n}\n#divMenuContainer ul li #txtSearch{width:80%;border:none;text-align:center;margin:0;height:45px\n}\n#btnMenuToggle{margin-left:10px;display:inline-block;cursor:pointer;vertical-align:middle\n}\n#btnMenuToggle i{font-size:30px\n}\n.show-menu{display:block!important;z-index:1000;position:absolute;background-color:#fff;overflow-y:scroll\n}\n.show-menu ul{border-right:none!important;margin-left:15px\n}\n.search .search-wrapper a:hover{background-color:#eee;outline:none\n}\npre{background-color:#f1f1f1;box-shadow:0 2px 4px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)!important;padding:.01em 16px;display:inline-block;min-width:70%\n}\npre,pre code{margin:20px 0\n}\npre code{background-color:#fff;border-left:5px solid #ee6e73;padding:5px 20px;display:block;color:#000;font-family:monospace;font-size:100%;font-weight:400\n}\n.search-results{webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)\n}\n.right-side-button{padding:15px;height:50px;text-align:center\n}\n.ad-container{width:100%;padding:8px;display:inline-block;border:1px solid;text-align:center\n}\n.ad-container div{color:#000\n}\n.ad-container .ad-image,.ad-container img{width:100px;height:auto\n}\n.ad-container-text{font-size:30px;text-align:center\n}",""])},180:function(t,e,r){"use strict";var n,o=r(13),i=r(177),a=r(32),s=[{text:"Get Started",url:"get-started"},{text:"Installation",url:"installation"},{text:"Connection",url:"connection"},{text:"Column",url:"column"},{text:"Table",url:"table"},{text:"Database",url:"database"},{text:"Initiate Database",url:"initiate-database"},{text:"Data Type",url:"data-type"},{text:"insert",url:"insert"},{text:"Bulk Insert",url:"bulk-insert"},{text:"Select",url:"select"},{text:"Where",url:"where"},{text:"Ignore Case",url:"ignore-case"},{text:"Or",url:"or"},{text:"Limit",url:"limit"},{text:"Skip",url:"skip"},{text:"Order By",url:"order-by"},{text:"Aggregate",url:"aggregate"},{text:"Group By",url:"group-by"},{text:"Distinct",url:"distinct"},{text:"Update",url:"update"},{text:"Update with operators",url:"update-with-operators"},{text:"Remove",url:"remove"},{text:"Count",url:"count"},{text:"Regex",url:"regex"},{text:"Like",url:"like"},{text:"In",url:"in"},{text:"Operators",url:"operators"},{text:"Between",url:"between"},{text:"Join",url:"join"},{text:"Union",url:"union"},{text:"Case (beta)",url:"case"},{text:"Clear",url:"clear"},{text:"Drop Database",url:"drop-db"},{text:"Change Table Schema",url:"change-table-design"},{text:"Export Json",url:"export-json"},{text:"Helpers",url:"helpers"},{text:"Promise",url:"promise"},{text:"Terminate",url:"terminate"},{text:"Adv. Sql Example",url:"adv-sql-example"},{text:"Enums",url:"enums"},{text:"V1 To V2",url:"v1-to-v2"},{text:"V2 To V3",url:"v2-to-v3"},{text:"Transaction",url:"transaction"},{text:"multiEntry",url:"multi-entry"},{text:"keyPath",url:"keypath"},{text:"Event",url:"event"},{text:"Optimization",url:"optimization"},{text:"SqlWeb",url:"sqlweb"},{text:"IDBStudio",url:"idbstudio"}],l=(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),c=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},u=function(t){function e(){var e=t.call(this)||this;return e.version=3,e.activeUrl="",e.showMenu=!1,e.searchValue="",e.searchResult="",e.jsstoreText=["Component based framework for nodejs"],e.adIndex=-1,e.catchEvents(),e}return l(e,t),Object.defineProperty(e.prototype,"docToEdit",{get:function(){var t=this.allLinks_[this.getCurrentUrlIndex()];return t?t.url:null},enumerable:!0,configurable:!0}),e.prototype.catchEvents=function(){a.b.$on("version_change",this.onVersionChange),a.b.$on("menu_click",this.toggleMenu)},e.prototype.onSearch=function(){var t=this,e="";this.links.forEach(function(r){r.text.toLowerCase().indexOf(t.searchValue)>=0&&(e+='<a href="/tutorial/'+r.url+'">'+r.text+"</a>")}),this.searchResult=e},e.prototype.mounted=function(){var t=this;this.showAds(),this.setVersion();var e=this.$route.path,r=this.links.find(function(r){return e.toLowerCase().replace(/\//g,"")===(""+t.relativeUrl+r.url.toLowerCase()).replace(/\//g,"")});r&&r.url.length>0&&(this.activeUrl=r.url),this.registerNextBtnEvents()},e.prototype.toggleMenu=function(){this.showMenu=!this.showMenu},e.prototype.showHideMenuButton=function(){var t=this;setTimeout(function(){t.$vuetify.breakpoint.mdAndUp?t.showMenu=!0:t.showMenu=!1},200)},e.prototype.registerNextBtnEvents=function(){var t=new i.a(".btnNext");t.el&&(t.el.onclick=this.onNextBtnClick.bind(this))},e.prototype.head=function(){return{title:"JsStore - "+this.pageTitle,meta:[{hid:"keywords",name:"keywords",content:this.pageKeywords},{hid:"description",name:"description",content:this.pageDescription}]}},e.prototype.getVersion=function(){return new i.a("#selectVersions").val()},e.prototype.setVersion=function(t){this.version=t||Number(this.getVersion())},e.prototype.onVersionChange=function(t){this.setVersion(t);var e=this.$route.path.split("/").reverse(),r=e[0].length>0?e[0]:e[1];this.$router.push(this.relativeUrl+r)},Object.defineProperty(e.prototype,"tutorialHtml",{get:function(){return decodeURI(this.innerHtml)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"links",{get:function(){var t;switch(this.version){case 1:t=["v1-to-v2","terminate","transaction","regex","connection","v2-to-v3","data-type","initiate-database","event","union","case"];break;case 2:t=["promise","export-json","v2-to-v3","data-type","initiate-database","event","union","case"];case 3:t=["promise","export-json","v1-to-v2","bulk-insert"]}return this.allLinks_.filter(function(e){return t.findIndex(function(t){return t===e.url})<0})},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"allLinks_",{get:function(){return s},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"relativeUrl",{get:function(){switch(this.version){case 1:return"/v1/tutorial/";case 2:return"/v2/tutorial/";case 3:return"/tutorial/";default:return"/"}},enumerable:!0,configurable:!0}),e.prototype.getCurrentUrlIndex=function(){var t=this,e=this.$route.path;this.relativeUrl;return this.links.findIndex(function(r){return e.toLowerCase().replace(/\//g,"")===(""+t.relativeUrl+r.url.toLowerCase()).replace(/\//g,"")})},e.prototype.onNextBtnClick=function(){var t=this.getCurrentUrlIndex();if(t>=0){var e=s[t+1];e&&this.$router.push(this.relativeUrl+e.url)}},e.prototype.showAds=function(){var t=++this.adIndex;t>=this.jsstoreText.length&&(t=this.adIndex=0),this.adIndex=t},e=c([Object(o.Component)({props:{innerHtml:String,pageTitle:String,pageKeywords:String,pageDescription:String}})],e)}(a.a),p=(r(178),r(12)),d=Object(p.a)(u,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{row:"",wrap:""}},[r("link",{attrs:{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.5.0/css/all.css",integrity:"sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU",crossorigin:"anonymous"}}),t._v(" "),r("v-flex",{staticClass:"hidden-sm-and-down",class:{"show-menu":t.showMenu},attrs:{md2:"",xl2:"",id:"divMenuContainer"}},[r("ul",[r("li",{staticClass:"search margin-bottom-10px"},[r("v-card",{staticClass:"search-wrapper"},[r("v-card-text",{staticStyle:{padding:"5px"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchValue,expression:"searchValue"}],attrs:{id:"txtSearch",type:"text",placeholder:"Search"},domProps:{value:t.searchValue},on:{keyup:t.onSearch,input:function(e){e.target.composing||(t.searchValue=e.target.value)}}}),t._v(" "),r("i",{staticClass:"material-icons"},[t._v("search")]),t._v(" "),r("div",{staticClass:"search-results",domProps:{innerHTML:t._s(t.searchResult)}})])],1)],1),t._v(" "),t._l(t.links,function(e){return r("li",{key:e.text,class:{"link-active":e.url===t.activeUrl}},[r("a",{attrs:{href:t.relativeUrl+e.url}},[t._v(t._s(e.text))])])})],2)]),t._v(" "),r("v-flex",{class:{"padding-left-15px":t.$vuetify.breakpoint.mdAndUp},attrs:{id:"divTutorialContent",xs12:"",md8:"",xl8:""}},[r("div",{staticClass:"margin-top-20px",domProps:{innerHTML:t._s(t.tutorialHtml)}})]),t._v(" "),r("v-flex",{attrs:{md2:""}},[r("v-btn",{attrs:{href:"/sponsor",color:"success right-side-button"}},[t._v("\n            Sponsor Us &\n            "),r("br"),t._v("get your logo here\n        ")]),t._v(" "),r("br"),t._v(" "),r("v-btn",{attrs:{href:"/sponsor",color:"success right-side-button"}},[t._v("\n            Be a backer &\n            "),r("br"),t._v("get your logo on our page\n        ")]),t._v(" "),r("a",{staticClass:"ad-container margin-bottom-10px margin-top-20px",attrs:{target:"_blank",href:"http://fortjs.info/"}},[r("img",{staticClass:"ad-container-text",attrs:{src:"/FLIXLOVERS_502_74.png"}}),t._v(" "),r("div",[t._v("Join amazing community of movies lovers. ")]),t._v(" "),r("v-btn",{attrs:{href:"https://flixlovers.com/"}},[t._v("Visit today")])],1),t._v(" "),r("a",{staticClass:"ad-container",attrs:{target:"_blank",href:"http://fortjs.info/"}},[r("div",{staticClass:"ad-container-text"},[t._v("FortJs")]),t._v(" "),r("img",{staticClass:"ad-image",attrs:{src:"//fortjs.info/img/fort_js_logo_200_137.png"}}),t._v(" "),r("div",[t._v(t._s(t.jsstoreText[t.adIndex]))])]),t._v(" "),null!=t.docToEdit?r("v-btn",{staticClass:"margin-bottom-70px",attrs:{alt:"edit this doc",target:"_blank",href:"https://gitter.im/JsStore/Lobby",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[r("i",{staticClass:"fab fa-gitter"})]):t._e(),t._v(" "),null!=t.docToEdit?r("v-btn",{attrs:{alt:"edit this doc",target:"_blank",href:"https://github.com/ujjwalguptaofficial/jsstore.docs/edit/master/docs/tutorial/"+t.docToEdit+".md",color:"primary",fixed:"",bottom:"",right:"",fab:""}},[r("v-icon",[t._v("edit")])],1):t._e(),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),r("div",{attrs:{id:"codefund"}}),t._v(" "),r("script",{attrs:{src:"https://codefund.app/properties/280/funder.js",async:"async"}})],1)],1)},[],!1,null,null,null);d.options.__file="tutorial.vue";e.a=d.exports},238:function(t,e,r){"use strict";r.r(e);var n,o=r(13),i=r(180),a=(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),s=function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.tutorialContent="%3Cp%3EConnection%20in%20jsstore%20is%20instance%20of%20class%20%3Ccode%3EConnection%3C/code%3E.%20All%20apis%20are%20called%20using%20connection.%3C/p%3E%0A%3Ch5%20id=%22syntax%22%3ESyntax%3C/h5%3E%0A%3Cp%3E%3Cbr%3E%3C/p%3E%0A%3Ch3%20id=%22withwebworker%22%3EWith%20Web%20Worker%3C/h3%3E%0A%3Cpre%3E%3Ccode%3Evar%20connection%20=%20new%20JsStore.Connection(new%20Worker('jsstore%20worker%20path'));%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3E%3Cstrong%3Eexample%3C/strong%3E%20-%20%3Ca%20target=%22_blank%22%20href=%22https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/without_web_worker%22%3Ehttps://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/without%3Cem%3Eweb%3C/em%3Eworker%3C/a%3E%3C/p%3E%0A%3Ch3%20id=%22withoutwebworker%22%3EWithout%20web%20worker%3C/h3%3E%0A%3Cpre%3E%3Ccode%3Evar%20connection%20=%20new%20JsStore.Connection();%0A%3C/code%3E%3C/pre%3E%0A%3Cp%3E%3Cstrong%3Eexample%3C/strong%3E%20-%20%3Ca%20target=%22_blank%22%20href=%22https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/simple_example%22%3Ehttps://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/simple_example%3C/a%3E%3C/p%3E%0A%3Cdiv%20class=%22margin-top-30px%20top-border%20margin-bottom-20px%22%3E%3C/div%3E%0A%3Cp%3E%3Cbr%3E%3C/p%3E%0A%3Ch2%20id=%22howtocreateconnectioninwebpack%22%3EHow%20to%20create%20connection%20in%20webpack%3C/h2%3E%0A%3Cp%3E%3Cbr%3E%3C/p%3E%0A%3Col%3E%0A%3Cli%3E%3Cp%3EInstall%20jsstore%20using%20npm%20or%20yarn%20-%20%3Ccode%3Enpm%20i%20jsstore%3C/code%3E%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3EInstall%20file-loader%20-%20%20%3Ccode%3Enpm%20i%20file-loader%20-D%3C/code%3E%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3ECreate%20a%20file%20jsstore_con.js%20or%20jsstore_con.ts%20(for%20typescript).%20This%20file%20will%20be%20used%20to%20create%20the%20jsstore%20connection.%20You%20can%20choose%20any%20file%20name.%3C/p%3E%3C/li%3E%0A%3Cli%3E%3Cp%3EInside%20the%20file%20jsstore_con.js,%20write%20below%20code%20-%20%3C/p%3E%3C/li%3E%0A%3C/ol%3E%0A%3Cpre%3E%3Ccode%3Econst%20getWorkerPath%20=%20()%20=&gt;%20%7B%0A%0A%20%20%20%20//%20return%20dev%20build%20when%20env%20is%20development%0A%20%20%20%20if%20(process.env.NODE_ENV%20===%20'development')%20%7B%0A%0A%20%20%20%20%20%20%20%20return%20require(%22file-loader?name=scripts/%5Bname%5D.%5Bhash%5D.js!jsstore/dist/jsstore.worker.js%22);%0A%0A%20%20%20%20%7D%0A%20%20%20%20else%20%7B%20//%20return%20prod%20build%20when%20env%20is%20production%0A%0A%20%20%20%20%20%20%20%20return%20require(%22file-loader?name=scripts/%5Bname%5D.%5Bhash%5D.js!jsstore/dist/jsstore.worker.min.js%22);%0A%0A%20%20%20%20%7D%0A%7D;%0A%0Aconst%20workerPath%20=%20getWorkerPath();%0Aexport%20const%20connection%20=%20new%20JsStore.Connection(new%20Worker(workerPath));%0A%3C/code%3E%3C/pre%3E%0A%3Col%20start=%225%22%3E%0A%3Cli%3EStep%204%20creates%20a%20connection%20and%20export%20the%20connection%20variable.%20You%20can%20import%20this%20connection%20variable%20to%20anywhere%20in%20your%20code.%3C/li%3E%0A%3C/ol%3E%0A%3Cp%3E%3Cbr%3EIn%20the%20above%20code%20we%20are%20using%20%3Cstrong%3Efile-loader%3C/strong%3E%20to%20load%20jsstore%20worker%20file%20but%20you%20are%20free%20to%20use%20your%20own%20technique%20to%20load%20jsstore%20worker.%20The%20simplest%20approach%20is%20download%20jsstore.worker.js%20and%20then%20specify%20its%20path.%20%20%3C/p%3E%0A%3Cp%3EIf%20you%20are%20finding%20difficult%20to%20understand,%20please%20take%20a%20look%20at%20%3Ca%20href=%22https://github.com/ujjwalguptaofficial/jsstore-examples%22%3Eexamples%3C/a%3E%20or%20our%20%3Ca%20href=%22https://medium.com/jsstore%22%3Emedium%20page%3C/a%3E%20%3C/p%3E%0A%3Cp%3E%3Cbr%3E%0A%3Cstrong%3EImportant%20points%20:-%3C/strong%3E%20%20%3C/p%3E%0A%3Cul%3E%0A%3Cli%3EThe%20connection%20variable%20will%20be%20used%20to%20execute%20the%20further%20query.%3C/li%3E%0A%3Cli%3EA%20connection%20will%20handle%20one%20db%20at%20a%20time.%3C/li%3E%0A%3Cli%3EDo%20not%20create%20multiple%20connection%20for%20one%20db.%3C/li%3E%0A%3C/ul%3E%0A%3Cp%20class=%22margin-top-40px%20center-align%22%3E%0A%20%20%20%20%20%20%3Cbutton%20class=%22btn%20info%20btnNext%22%3ENext%3C/button%3E%0A%3C/p%3E",e.title="Connection",e.keywords="database, connection, query, indexeddb, jsstore",e.description="How to create connection in jsstore",e}return a(e,t),e=s([Object(o.Component)({components:{Tutorial:i.a}})],e)}(o.Vue),c=r(12),u=Object(c.a)(l,function(){var t=this.$createElement;return(this._self._c||t)("Tutorial",{attrs:{pageDescription:this.description,pageKeywords:this.keywords,innerHtml:this.tutorialContent,pageTitle:this.title}})},[],!1,null,null,null);u.options.__file="connection.vue";e.default=u.exports}}]);