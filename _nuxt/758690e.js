(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{226:function(t,e,o){"use strict";o.r(e);var n={components:{Layout:o(172).a}},r=o(14),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Layout",{attrs:{title:"Helpers",description:"jsstore helpers methods",keywords:"helpers, api, query, indexeddb, jsstore",contentSrc:"/home/travis/build/ujjwalguptaofficial/jsstore.docs/out/content/tutorial/helpers.md"}},[o("h4",{attrs:{id:"logstatus"}},[t._v("logStatus")]),t._v(" "),o("p",[t._v("It sets the status of log. When supplied true - JsStore logs query flow in console. This is helpful in debugging.")]),t._v(" "),o("pre",[o("code",[t._v("connection.logStatus = true;\n")])]),t._v(" "),o("h4",{attrs:{id:"getdblist"}},[t._v("getDbList")]),t._v(" "),o("p",[t._v("It returns list of database created using jsstore.")]),t._v(" "),o("pre",[o("code",[t._v("connection.getDbList().then(function(result) {\n    console.log(result)\n});\n")])]),t._v(" "),o("h4",{attrs:{id:"set"}},[t._v("set")]),t._v(" "),o("p",[t._v("It stores data in form of key and value in a special table. You can think of it is similar to localStorage but you can store every type of data using 'set' which is not the case with localStorage (can be stored only string).")]),t._v(" "),o("p",[t._v("Lets say you want to store user profile picture or may be some basic information, so that you can load it on page load.")]),t._v(" "),o("pre",[o("code",[t._v("var userInfo = {\n    name: 'ujjwal gupta',\n    accountType: 'super_admin',\n    profilePic: Blob Object // i am not creating it.\n\n}\nconnection.set(\"user_info\", userInfo).then(function() {\n    console.log('value setted');\n});\n")])]),t._v(" "),o("h4",{attrs:{id:"get"}},[t._v("get")]),t._v(" "),o("p",[t._v("Get data from special table.")]),t._v(" "),o("pre",[o("code",[t._v('connection.get("user_info").then(function(userInfo) {\n    console.log(userInfo); \n});\n')])])])}),[],!1,null,null,null);e.default=component.exports}}]);