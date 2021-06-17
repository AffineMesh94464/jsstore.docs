(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{214:function(e,t,o){"use strict";o.r(t);var n={components:{Layout:o(172).a}},r=o(14),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("Layout",{attrs:{title:"Data Type",description:"data type in jsstore",keywords:"data type, column, query, indexeddb, jsstore",contentSrc:"/home/runner/work/jsstore.docs/jsstore.docs/content/tutorial/database/data-type.md"}},[o("p",[e._v("JsStore provides following data type - ")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("String - 'string'")])]),e._v(" "),o("li",[o("p",[e._v("Number - 'number'")])]),e._v(" "),o("li",[o("p",[e._v("DateTime - 'date_time' . The value should be date object i.e "),o("code",[e._v("value = new Date()")])])]),e._v(" "),o("li",[o("p",[e._v("Object - 'object'  ")])]),e._v(" "),o("li",[o("p",[e._v("Array - 'array'")])]),e._v(" "),o("li",[o("p",[e._v("Boolean - 'boolean'")])])]),e._v(" "),o("p",[e._v("data types are exposed as - "),o("code",[e._v("DATA_TYPE")]),e._v(" , so you can also use it.")]),e._v(" "),o("p",[e._v("Let's see how to use datatype - ")]),e._v(" "),o("pre",[o("code",[e._v('import {DATA_TYPE} from \'jsstore\'\n\nvar columns = {\n    Id:{ primaryKey: true, autoIncrement: true },\n    ItemName:  { notNull: true, dataType: "string" },\n    Price:  { notNull: true, dataType: "number" },\n    Quantity : { notNull: true, dataType: DATA_TYPE.Number }\n}\n')])]),e._v(" "),o("p",[o("strong",[e._v("Note:-")]),e._v(" do not use data type boolean, if you want to filter on that column. For more info,check out - "),o("a",{attrs:{href:"https://stackoverflow.com/questions/48149851/failed-to-execute-only-on-idbkeyrange-the-parameter-is-not-a-valid-key/48179792#48179792"}},[e._v("https://stackoverflow.com/questions/48149851/failed-to-execute-only-on-idbkeyrange-the-parameter-is-not-a-valid-key/48179792#48179792")])])])}),[],!1,null,null,null);t.default=component.exports}}]);