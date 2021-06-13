(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{210:function(e,n,t){"use strict";t.r(n);var o={components:{Layout:t(172).a}},r=t(14),component=Object(r.a)(o,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("Layout",{attrs:{title:"Union",description:"Union is an api which combine the result of two or more select query.",keywords:"union, api, indexeddb, jsstore",contentSrc:"/home/travis/build/ujjwalguptaofficial/jsstore.docs/out/content/tutorial/union.md"}},[t("p",[t("code",[e._v("union")]),e._v(" api combine the result of two or more select query and remove duplicate records. ")]),e._v(" "),t("h2",{attrs:{id:"usecase"}},[e._v("Use Case")]),e._v(" "),t("p",[t("br"),e._v("\nThere are times when one query is not able to fulfill the situation and so you need to use multiple query but now you are in a situation where some of the values are same in both results. "),t("code",[e._v("union")]),e._v(" api is useful in these situation where it combines the results of multiple select query and removes the duplicate records.")]),e._v(" "),t("p",[e._v("e.g - Consider below queries - ")]),e._v(" "),t("p",[e._v("1st query ")]),e._v(" "),t("pre",[t("code",[e._v("connection.select({\n    from: 'Products',\n    where: {\n        price: {\n            '>': 10\n        }\n    }\n})\n")])]),e._v(" "),t("p",[e._v("2nd query ")]),e._v(" "),t("pre",[t("code",[e._v("connection.select({\n    from: 'Products',\n    where: {\n        price: {\n            '>': 50\n        }\n    }\n})\n")])]),e._v(" "),t("p",[e._v("now in the above two queries - results from first query will have some records existing in results of 2nd query.")]),e._v(" "),t("p",[e._v("so using union we will combine these two results and query will be - ")]),e._v(" "),t("pre",[t("code",[e._v("var results = await connection.union([\n    {\n        from: 'Products',\n        where: {\n            price: {\n                '>': 10\n            }\n        }\n    },\n    {\n        from: 'Products',\n        where: {\n            price: {\n                '>': 50\n            }\n        }\n    }\n])\n")])]),e._v(" "),t("p",{staticClass:"margin-top-40px text-center"},[t("a",{staticClass:"btn info",attrs:{target:"_blank",href:"https://ujjwalguptaofficial.github.io/idbstudio/?db=Demo&query=union(%5B%7B%0A%20%20%20%20%20%20%20%20from%3A%20'Products'%2C%0A%20%20%20%20%20%20%20%20where%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20price%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20'%3E'%3A%2010%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20from%3A%20'Products'%2C%0A%20%20%20%20%20%20%20%20where%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20price%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20'%3E'%3A%2050%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%5D)"}},[e._v("Example")])])])}),[],!1,null,null,null);n.default=component.exports}}]);