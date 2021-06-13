(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{222:function(e,t,n){"use strict";n.r(t);var o={components:{Layout:n(172).a}},r=n(14),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Layout",{attrs:{title:"Insert",description:"insert data in indexedb",keywords:"insert, api, upsert, indexeddb, jsstore",contentSrc:"/home/travis/build/ujjwalguptaofficial/jsstore.docs/out/content/tutorial/insert/index.md"}},[n("p",[n("code",[e._v("insert")]),e._v(" api is used to insert new records in a table.")]),e._v(" "),n("h4",{attrs:{id:"sql"}},[e._v("Sql")]),e._v(" "),n("pre",[n("code",[e._v("INSERT INTO TABLE_NAME\n(column1, column2, column3,...columnN)\nVALUES\n(value1, value2, value3,...valueN);\n")])]),e._v(" "),n("h4",{attrs:{id:"jsstore"}},[e._v("JsStore")]),e._v(" "),n("pre",[n("code",[e._v("var value = {\n    column1: value1,\n    column2: value2,\n    column3: value3,\n    ...\n    columnN: valueN\n};\n\nvar noOfRowsInserted = await connection.insert({\n    into: \"TABLE_NAME\",\n    values: [Value], //you can insert multiple values at a time\n});\nif (noOfRowsInserted > 0) {\n    alert('Successfully Added');\n}\n")])]),e._v(" "),n("p",[n("br"),n("strong",[e._v("Note :-")]),e._v(" You can also insert data for a column, which you have not defined in db schema. JsStore preserves the NoSql functionality of IndexedDb.")]),e._v(" "),n("p",{staticClass:"margin-top-40px text-center"},[n("a",{staticClass:"btn info",attrs:{target:"_blank",href:"https://ujjwalguptaofficial.github.io/idbstudio/?db=Demo&query=insert(%7B%0A%20%20%20%20into%3A%20%22Customers%22%2C%0A%20%20%20%20values%3A%20%5B%7B%0A%20%20%20%20%20%20%20%20customerName%3A%20'ujjwal%20gupta'%2C%0A%20%20%20%20%20%20%20%20contactName%3A%20'ujjwal'%2C%0A%20%20%20%20%20%20%20%20address%3A%20'bhubaneswar%20odisha'%2C%0A%20%20%20%20%20%20%20%20city%3A%20'bhubaneswar'%2C%0A%20%20%20%20%20%20%20%20postalCode%3A%20'12345'%2C%0A%20%20%20%20%20%20%20%20country%3A%20'India'%0A%20%20%20%20%7D%5D%0A%7D)%3B%0A"}},[e._v("Example")])]),e._v(" "),n("div",{staticClass:"margin-top-30px top-border mb-20px"}),e._v(" "),n("p",[n("strong",[e._v("insert")]),e._v(" api has following options -")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("into : string // table name")])]),e._v(" "),n("li",[n("p",[e._v("values: Array // values to insert")])]),e._v(" "),n("li",[n("p",[e._v("return?: Boolean // Return the inserted record. Default value is false.This is useful in case - you want the autoincrement column value.")])]),e._v(" "),n("li",[n("p",[e._v("skipDataCheck?: Boolean // Whether to check or not supplied data. Default value is false. If supplied true, this will directly insert data without checking any thing like datatype, auto increment etc. This is useful in case - where you want to insert huge record at a time.")])]),e._v(" "),n("li",[n("p",[n("a",{attrs:{href:"/tutorial/insert/upsert"}},[e._v("upsert?")]),e._v(": boolean; // Update data if exist otherwise insert . Default value is false")])])])])}),[],!1,null,null,null);t.default=component.exports}}]);