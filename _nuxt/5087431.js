(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{228:function(e,t,n){"use strict";n.r(t);var r={components:{Layout:n(172).a}},o=n(14),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Layout",{attrs:{title:"In",description:"learn how to use in query in indexedb using jsstore",keywords:"in, sql, query, indexeddb, jsstore",contentSrc:"/home/runner/work/jsstore.docs/jsstore.docs/content/tutorial/where/in.md"}},[n("p",[e._v("In allows you to specify multiple values in Where query. It is a shorthand for multiple or query.")]),e._v(" "),n("h4",{attrs:{id:"sqlwhere"}},[e._v("Sql (Where)")]),e._v(" "),n("pre",[n("code",[e._v("Select * From Table_Name;\nWhere\nColumn_Name In (value1, value2, ...)\n")])]),e._v(" "),n("h4",{attrs:{id:"jsstore"}},[e._v("JsStore")]),e._v(" "),n("pre",[n("code",[e._v('connection.select({\n    from: "Table_Name",\n    where: {\n        Column_Name: { \n            in: [value1, value2, ...]\n        }\n    }\n}).then(function(results) {\n    //results will be array of objects.\n    console.log(results);\n}).catch(function(error) {\n    alert(error.message);\n});\n')])]),e._v(" "),n("p",{staticClass:"margin-top-40px text-center"},[n("a",{staticClass:"btn info",attrs:{target:"_blank",href:"https://ujjwalguptaofficial.github.io/idbstudio/?db=Demo&query=select(%7B%0A%20%20%20%20from%3A%20%22Customers%22%2C%0A%20%20%20%20where%3A%7B%0A%20%20%20%20%20%20%20%20country%3A%7Bin%3A%5B'Germany'%2C%20'France'%2C%20'UK'%5D%7D%0A%20%20%20%20%7D%0A%7D)%3B%0A"}},[e._v("Example")])])])}),[],!1,null,null,null);t.default=component.exports}}]);