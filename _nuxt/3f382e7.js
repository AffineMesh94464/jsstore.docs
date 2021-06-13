(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{182:function(e,t,n){"use strict";n.r(t);var o={components:{Layout:n(172).a}},r=n(14),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Layout",{attrs:{title:"Update",description:"learn how to update data in indexedb using jsstore",keywords:"update, api, query, indexeddb, jsstore",contentSrc:"/home/travis/build/ujjwalguptaofficial/jsstore.docs/out/content/tutorial/update/index.md"}},[n("p",[e._v("Update is used to modify the existing records in a table. You can use "),n("code",[e._v("where")]),e._v(" with update to filter target records.")]),e._v(" "),n("h4",{attrs:{id:"sql"}},[e._v("Sql")]),e._v(" "),n("pre",[n("code",[e._v("Update Table_Name;\nSet\n    column1 = value1,\n    column2 = value2,\nWhere\n    column3=some_value\nand\n    column4=some_another_value;\n")])]),e._v(" "),n("h4",{attrs:{id:"jsstore"}},[e._v("JsStore")]),e._v(" "),n("pre",[n("code",[e._v("var noOfRowsUpdated = await connection.update({ \n      in: \"Table_Name\",\n    set: {\n        column1: value1,\n        column2: value2\n    },\n    where: {\n        column3: some_value,\n        column4: some_another_value\n    }\n});\n\nalert(noOfRowsUpdated + ' rows updated');\n")])]),e._v(" "),n("p",{staticClass:"margin-top-40px text-center"},[n("a",{staticClass:"btn info",attrs:{target:"_blank",href:"https://ujjwalguptaofficial.github.io/idbstudio/?db=Demo&query=update(%7B%0A%20%20%20%20in%3A%20%22Customers%22%2C%0A%20%20%20%20set%3A%20%7B%0A%20%20%20%20%20%20%20%20contactName%3A%20'Ujjwal'%2C%0A%20%20%20%20%20%20%20%20city%3A%20'Bhubaneswar'%0A%20%20%20%20%7D%2C%0A%20%20%20%20where%3A%20%7B%0A%20%20%20%20%20%20%20%20customerId%3A%205%0A%20%20%20%20%7D%0A%7D)%3B%0A"}},[e._v("Example")])])])}),[],!1,null,null,null);t.default=component.exports}}]);