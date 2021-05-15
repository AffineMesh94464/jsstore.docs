(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{172:function(t,e,n){var content=n(176);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("0aaeab4d",content,!0,{sourceMap:!1})},173:function(t,e,n){"use strict";var r=n(4),l=n(83)(6),o="findIndex",c=!0;o in[]&&Array(1)[o]((function(){c=!1})),r(r.P+r.F*c,"Array",{findIndex:function(t){return l(this,t,arguments.length>1?arguments[1]:void 0)}}),n(82)(o)},174:function(t,e){t.exports=[{text:"Get Started",url:"get-started"},{text:"Installation",url:"installation"},{text:"Connection",url:"connection"},{text:"Column",url:"column"},{text:"Table",url:"table"},{text:"Database",url:"database"},{text:"Initiate Database",url:"initiate-database"},{text:"Data Type",url:"data-type"},{text:"insert",url:"insert",children:[{text:"upsert",url:"upsert"}]},{text:"Select",url:"select",children:[{text:"Limit",url:"limit"},{text:"Skip",url:"skip"},{text:"Order By",url:"order-by"},{text:"Aggregate",url:"aggregate"},{text:"Group By",url:"group-by"},{text:"Distinct",url:"distinct"},{text:"Case",url:"case"},{text:"Join",url:"join"},{text:"Flatten",url:"flatten"}]},{text:"Where",url:"where",children:[{text:"Like",url:"like"},{text:"In",url:"in"},{text:"Regex",url:"regex"},{text:"Or",url:"or"},{text:"Operators",url:"operators"},{text:"Between",url:"between"}]},{text:"Update",url:"update",children:[{text:"With operators",url:"with-operators"}]},{text:"Remove",url:"remove"},{text:"Count",url:"count"},{text:"Union",url:"union"},{text:"Intersect",url:"intersect"},{text:"Clear",url:"clear"},{text:"Drop Database",url:"drop-db"},{text:"Change Table Schema",url:"change-table-design"},{text:"Helpers",url:"helpers"},{text:"Terminate",url:"terminate"},{text:"Adv. Sql Example",url:"adv-sql-example"},{text:"Enums",url:"enums"},{text:"V3 To V4",url:"v3-to-v4"},{text:"Import scripts",url:"import-scripts"},{text:"Transaction",url:"transaction"},{text:"multiEntry",url:"multi-entry"},{text:"keyPath",url:"keypath"},{text:"Event",url:"event"},{text:"Middleware",url:"middleware"},{text:"Plugin",url:"plugin"},{text:"Optimization",url:"optimization"},{text:"SqlWeb",url:"sqlweb"},{text:"IDBStudio",url:"idbstudio"}]},175:function(t,e,n){"use strict";n(172)},176:function(t,e,n){var r=n(32)(!1);r.push([t.i,".b-tutorial[data-v-2c61efac]{padding:10px 10px 0}.b-tutorial__links[data-v-2c61efac]{padding-right:30px;border-right:1px solid #e9ecef}.b-tutorial__links__item[data-v-2c61efac],.b-tutorial__links__item-children[data-v-2c61efac]{cursor:pointer;padding:10px;color:var(--link-color);font-size:1.1rem}.b-tutorial__links__item-children[data-v-2c61efac]:hover,.b-tutorial__links__item[data-v-2c61efac]:hover{background-color:rgba(0,0,0,.05)}.b-tutorial__links__item-children .fas[data-v-2c61efac],.b-tutorial__links__item .fas[data-v-2c61efac]{margin-right:5px}.b-tutorial__links__item-children[data-v-2c61efac]{margin-left:20px;font-size:1rem}.b-tutorial__links__item--active[data-v-2c61efac]{border:1px solid;border-radius:3px;text-align:center;color:var(--secondary-color);justify-content:center}.b-tutorial__content[data-v-2c61efac]{padding-left:40px}.b-tutorial__content__btns[data-v-2c61efac]{display:flex;justify-content:space-between;font-size:2rem;margin-top:30px;margin-bottom:20px}.b-tutorial__content__btns i[data-v-2c61efac]{cursor:pointer}.b-tutorial__sticky-btn[data-v-2c61efac]{position:fixed;right:0;bottom:20px;display:flex;flex-direction:column;z-index:1000}.b-tutorial__sticky-btn a[data-v-2c61efac]{width:56px;height:56px;border-radius:50%;margin-bottom:10px;padding:0}.ad-container[data-v-2c61efac]{text-align:center;border:1px solid;display:flex;flex-direction:column;padding:5px;cursor:pointer}",""]),t.exports=r},177:function(t,e,n){"use strict";n(119),n(173);var r={created:function(){this.ads=["Component based framework for nodejs"]},head:function(){return{title:"JsStore - ".concat(this.title),meta:[{hid:"keywords",name:"keywords",content:this.keywords},{hid:"description",name:"description",content:this.description}]}},props:{contentSrc:String,title:String,description:String,keywords:String},computed:{currentUrl:function(){var path=this.$route.path,t=path.length;return"/"===path[t-1]&&(path=path.substr(0,t-1)),path},activeUrlIndex:function(){var t=this,e=this.currentUrl.split("/"),n=e[e.length-1];return this.links.findIndex((function(e){if(e.url===n)return t.childActiveUrlIndex=-1,!0;var r=e.children;if(r)for(var i=0,l=r.length;i<l;i++)if(r[i].url===n)return t.childActiveUrlIndex=i,!0}))}},data:function(){return{links:[],childActiveUrlIndex:-1}},fetch:function(){var t=n(174);this.links=t},mounted:function(){console.log("comp",this),window.comp=this,hljs.highlightAll();var t='Copy <i class="margin-left-10px far fa-copy"></i>';document.querySelectorAll("pre code").forEach((function(e){var div=document.createElement("div");div.className="code-copy ripple",div.innerHTML=t,e.parentNode.prepend(div),div.onclick=function(){!function(t){var e=document.createElement("textarea");e.value=t,e.setAttribute("readonly",""),e.style.position="absolute",e.style.left="-9999px",document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}(e.innerText),div.innerHTML='Copied <i class="margin-left-10px fas fa-check"></i>',setTimeout((function(){div.innerHTML=t}),1e3)}}))},methods:{url:function(t){return"/tutorial/"+t},goto:function(t){var path,e=this.childActiveUrlIndex,n=this.links[this.activeUrlIndex];if(e>=0){var r=n.children[e+t];r&&(path=r.url)}return path||(path=this.links[this.activeUrlIndex+t].url),this.$router.push({path:this.url(path)})}}},l=(n(175),n(14)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row b-tutorial"},[n("div",{staticClass:"col-sm-4 col-md-3 col-lg-2 b-tutorial__links"},t._l(t.links,(function(link,e){return n("div",{key:link.text},[n("a",{staticClass:"row content-v-center b-tutorial__links__item ripple",class:{"b-tutorial__links__item--active":e===(!link.children&&t.activeUrlIndex)},attrs:{href:t.url(link.url)}},[link.children?[e===t.activeUrlIndex?n("i",{staticClass:"fas fa-chevron-down"}):n("i",{staticClass:"fas fa-chevron-right"})]:t._e(),t._v("\n        "+t._s(link.text)+"\n      ")],2),t._v(" "),e===t.activeUrlIndex?t._l(link.children,(function(e,r){return n("a",{key:e.url,staticClass:"row content-v-center b-tutorial__links__item-children ripple",class:{"b-tutorial__links__item--active":r===t.childActiveUrlIndex},attrs:{href:t.url(link.url+"/"+e.url)}},[t._v("\n          "+t._s(e.text)+"\n        ")])})):t._e()],2)})),0),t._v(" "),n("div",{staticClass:"b-tutorial__content col-sm-8 col-md-9 col-lg-8"},[t._t("default"),t._v(" "),n("div",{staticClass:"b-tutorial__content__btns"},[n("i",{staticClass:"fas fa-chevron-left",on:{click:function(e){return t.goto(-1)}}}),t._v(" "),n("i",{staticClass:"fas fa-chevron-right",on:{click:function(e){return t.goto(1)}}})])],2),t._v(" "),n("div",{staticClass:"col-lg-2 width-full pl-10px pr-5px"},[n("a",{staticClass:"ad-container",attrs:{target:"_blank",href:"http://fortjs.info/"}},[n("h6",[t._v("FortJs")]),t._v(" "),n("img",{staticClass:"mt-5px",attrs:{src:"//fortjs.info/img/fort_js_logo_200_137.png"}}),t._v(" "),n("div",[t._v(t._s(t.ads[0]))])])]),t._v(" "),n("div",{staticClass:"b-tutorial__sticky-btn"},[t._m(0),t._v(" "),n("a",{staticClass:"btn secondary",attrs:{alt:"edit this doc",target:"_blank",href:"https://github.com/ujjwalguptaofficial/jsstore.docs/edit/master/content"+t.currentUrl+".md",fixed:"",bottom:"",right:"",fab:""}},[n("i",{staticClass:"far fa-edit"})])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"btn rounded secondary margin-bottom-70px",attrs:{alt:"edit this doc",target:"_blank",href:"https://gitter.im/JsStore/Lobby"}},[e("i",{staticClass:"fab fa-gitter"})])}],!1,null,"2c61efac",null);e.a=component.exports},221:function(t,e,n){"use strict";n.r(e);var r={components:{Layout:n(177).a}},l=n(14),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",{attrs:{title:"keyPath",description:"learn how to use keypath for querying faster in indexeddb",keywords:"keypath, column, indexing, indexeddb, jsstore",contentSrc:"/home/travis/build/ujjwalguptaofficial/jsstore.docs/out/content/tutorial/keypath.md"}},[n("p",[n("code",[t._v("keyPath")]),t._v(" is a option in column. It is used to add multiple index, so that query execution can be made faster. It takes an array of type string.")]),t._v(" "),n("p",[t._v("It can b used to increase speed of "),n("code",[t._v("select")]),t._v(" query.")]),t._v(" "),n("p",[t._v("e.g - Lets take a table name with cities having column pinCodes & name")]),t._v(" "),n("pre",[n("code",[t._v("var table = {\n    name: 'cities',\n    columns: {\n        cityName:{},\n        pincCodes:{}\n    }\n}\n")])]),t._v(" "),n("p",[t._v("We want to query on pincodes & name so a select query will be like this - ")]),t._v(" "),n("pre",[n("code",[t._v("connection.select({\n    from: 'cities',\n    where: {\n        pinCodes: 12345,\n        name: 'london'\n    }\n})\n")])]),t._v(" "),n("p",[t._v("Now lets define the table using keyPath ")]),t._v(" "),n("pre",[n("code",[t._v("var table = {\n    name: 'cities',\n    columns: {\n        cityName:{},\n        pincCodes:{},\n        cityPincodes:{keyPath:['cityName','pinCodes']}\n    }\n}\n")])]),t._v(" "),n("p",[t._v("and now new query can be written as - ")]),t._v(" "),n("pre",[n("code",[t._v("connection.select({\n    from: 'cities',\n    where: {\n        cityPincodes: ['london',12345] // order of values should be same as what has been defined in keyPath\n    }\n})\n")])]),t._v(" "),n("p",[t._v("Note :- Please compare between query execution time if there is no difference or very less then don't use keyPath. Adding multiple index will increase the db size which is limited for users.")])])}),[],!1,null,null,null);e.default=component.exports}}]);