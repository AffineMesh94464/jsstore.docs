(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{206:function(n,e,t){"use strict";t.r(e);var o={components:{Layout:t(172).a}},r=t(14),component=Object(r.a)(o,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("Layout",{attrs:{title:"Migrating from v2 to v3",description:"migrating from v2 to v3",keywords:"migrate, v2, v3, indexeddb, jsstore",contentSrc:"/home/travis/build/ujjwalguptaofficial/jsstore.docs/out/content/tutorial/v3-to-v4.md"}},[t("p",{staticClass:"highlight"},[n._v("\nv4 now suports multiple database feature, which was lacking in earlier version of jsstore. In order to do that some big changes has been done in v4.\n")]),n._v(" "),t("p",[n._v("In order to migrate from v3 to v4 - Increase db version greater than current version. ")]),n._v(" "),t("pre",[t("code",[n._v("var dbSchema = {\n    name:\"Demo\",\n    version: 2 // previous version was 1,\n    tables:[{\n        name:'Products',\n        columns:{\n            id: {\n                autoIncrement:true,\n                primaryKey:true\n            }\n        }\n    }]\n}\n\nvar connection = new JsStore.Connection();\nconnection.initDb(dbSchema);\n")])]),n._v(" "),t("p",[n._v("you can find your current db version in indexedDb section of browser development tools.")]),n._v(" "),t("p",[t("img",{staticStyle:{"max-width":"100%"},attrs:{src:"/img/version_screenshot.png"}})]),n._v(" "),t("p",[n._v("👉 Note:- This step will recreate database & in turn all your data will be cleared. ")]),n._v(" "),t("p",[n._v("If you want to keep your data, you can fetch data before upgrading then insert it after upgrading. In order to do that you will have to keep two db schema.")]),n._v(" "),t("pre",[t("code",[n._v("var dbSchema = {\n    name:\"Demo\",\n    version: 1 ,\n    tables:[{\n        name:'Products',\n        columns:{\n            id: {\n                autoIncrement:true,\n                primaryKey:true\n            }\n        }\n    }]\n};\n\nvar newDbSchema = {\n    name:\"Demo\",\n    version: 2 // previous version was 1,\n    tables:[{\n        name:'Products',\n        columns:{\n            id: {\n                autoIncrement:true,\n                primaryKey:true\n            }\n        }\n    }]\n}\n\nvar connection = new JsStore.Connection();\nvar isDbCreated = connection.initDb(dbSchema);\n\nvar tablesData = {};\n\n// if db is opened\nif(!isDbCreated){\n\n    // select from table prodcuts\n    const results =  await connection.select({\n        from:'Products'\n    });\n    tablesData['Products'] = results;\n}\n\nisDbCreated = connection.initDb(newDbSchema);\n\nif(isDbCreated){\n    for(const key in tablesData){\n        connection.insert({\n            into:key,\n            values: tablesData[key]\n        })\n    }\n}\n")])]),n._v(" "),t("p",{staticClass:"top-border"}),n._v(" "),t("p",[n._v("👉 Another simple way to upgrade db & save your data is - to keep two dbs. So you create your schema with new db name and then after new db is created, fetch data from old db.")]),n._v(" "),t("pre",[t("code",[n._v("var dbSchema = {\n    name:\"Demo\",\n    tables:[{\n        name:'Products',\n        columns:{\n            id: {\n                autoIncrement:true,\n                primaryKey:true\n            }\n        }\n    }]\n};\n\nvar newDbSchema = {\n    name:\"DemoV2\",\n    tables:[{\n        name:'Products',\n        columns:{\n            id: {\n                autoIncrement:true,\n                primaryKey:true\n            }\n        }\n    }]\n}\n\nvar connection = new JsStore.Connection();\nvar isDbCreated = connection.initDb(newDbSchema);\n\n// if db is created\nif(isDbCreated){\n\n    var oldDbConnection = new JsStore.Connection();\n    var isOldDbCreated = oldDbConnection.initDb(dbSchema);\n\n    if(!isOldDbCreated){ // when db is opened\n\n      // select from old db\n        const results =  await oldDbConnection.select({\n            from:'Products'\n        });\n\n     // insert into new db\n        connection.insert({\n            into:key,\n            values: results\n        })\n\n      // now i don't need old db, so drop db\n\n        oldDbConnection.dropDb();\n\n    }    \n}\n")])])])}),[],!1,null,null,null);e.default=component.exports}}]);