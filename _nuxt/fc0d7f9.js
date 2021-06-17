(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{213:function(e,o,t){"use strict";t.r(o);var n={components:{Layout:t(172).a}},l=t(14),component=Object(l.a)(n,(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("Layout",{attrs:{title:"Column",description:"column in jsstore is an object where column name is key & column options are values.",keywords:"column, api, query, indexeddb, jsstore",contentSrc:"/home/runner/work/jsstore.docs/jsstore.docs/content/tutorial/database/column.md"}},[t("p",[e._v("Column in jsstore is an object where column name is key & column options are values.")]),e._v(" "),t("pre",[t("code",[e._v("var columns = {\n    [column name]: {} \n}\n")])]),e._v(" "),t("p",[e._v("Let's see an example - ")]),e._v(" "),t("pre",[t("code",[e._v('var columns = {\n    Id:{ primaryKey: true, autoIncrement: true },\n    ItemName:  { notNull: true, dataType: "string" },\n    Price:  { notNull: true, dataType: "number" },\n    Quantity : { notNull: true, dataType: "number" }\n}\n')])]),e._v(" "),t("p",[e._v("👉 Column has following options -")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("primaryKey: boolean, // declare this column as primary key (optional)")])]),e._v(" "),t("li",[t("p",[e._v("notNull: boolean, // ensure this column value should not be null (optional)")])]),e._v(" "),t("li",[t("p",[e._v("dataType: JsStore.DATA_TYPE, // datatype of this column (optional)")])])]),e._v(" "),t("p",[e._v("For more info about data type, see this link - "),t("a",{attrs:{href:"/tutorial/database/data-type/"}},[e._v("DataType")])]),e._v(" "),t("ul",[t("li",[t("p",[e._v("autoIncrement: boolean, // automatically increment value (optional)")])]),e._v(" "),t("li",[t("p",[e._v("unique: boolean // This column will have unique value (optional)")])]),e._v(" "),t("li",[t("p",[e._v("default: any, // Provides a default value for a column when none is specified (optional)")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"/tutorial/multi-entry"}},[e._v("multiEntry")]),e._v(": boolean, // Provides support to search inside array values (optional)")])]),e._v(" "),t("li",[t("p",[e._v("enableSearch: boolean - default value is true // Turn on/off search for this column (optional)")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"/tutorial/keypath/"}},[e._v("keyPath")]),e._v(" : string[] - allows you to use multiple indexing // optional ")])])])])}),[],!1,null,null,null);o.default=component.exports}}]);