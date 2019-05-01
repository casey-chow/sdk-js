!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("DirectusSDK",[],e):"object"==typeof exports?exports.DirectusSDK=e():t.DirectusSDK=e()}("undefined"!=typeof self?self:this,function(){return function(t){var e={};function i(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=t,i.c=e,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=3)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t,e){return Object.prototype.toString.call(e)==="[object "+t+"]"};e.hasKeysWith=function(t,i,r){if(!e.isObjectOrEmpty(i)||!e.isArrayOrEmpty(r))return!1;for(var n=r.length,o=0;o<n;o++){if(!Object.prototype.hasOwnProperty.call(i,r[o]))return!1;if(!t(i[r[o]]))return!1}return!0},e.isNotNull=function(t){return null!=t},e.isString=function(t){return t&&"string"==typeof t&&/\S/.test(t)},e.isNumber=function(t){return r("Number",t)&&isFinite(t)&&!isNaN(parseFloat(t))},e.isFunction=function(t){return t instanceof Function},e.isObjectOrEmpty=function(t){return r("Object",t)},e.isArrayOrEmpty=function(t){return r("Array",t)},e.isArray=function(t){return!!e.isArrayOrEmpty(t)&&t.length>0},e.hasKeysWithString=function(t,i){return e.hasKeysWith(e.isString,t,i)},e.isObject=function(t){if(!e.isObjectOrEmpty(t))return!1;for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i))return!0;return!1}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.invariant=function(t,e){if(!0!=!!t)throw new Error("Invariant violation: "+e)}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(6),n=i(0);e.getPayload=function(t){if(!t||t.length<0||t.split(".").length<=0)return{};try{var e=t.split(".")[1].replace("-","+").replace("_","/"),i=r.decode(e),o=JSON.parse(i);return n.isNumber(o.exp)&&(o.exp=new Date(1e3*o.exp)),o}catch(t){return{}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(4);e.default=r.SDK},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(5),n=i(2),o=i(7),a=i(12),s=i(1),u=i(0),c=function(){function t(t){this.config=new a.Configuration(t),this.api=new o.API(this.config)}return Object.defineProperty(t.prototype,"loggedIn",{get:function(){return this.api.auth.isLoggedIn()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"payload",{get:function(){return this.config.token?this.api.getPayload():null},enumerable:!0,configurable:!0}),t.prototype.login=function(t,e){return void 0===e&&(e={persist:!0,storage:!1}),this.api.auth.login(t,e)},t.prototype.logout=function(){this.api.auth.logout()},t.prototype.reset=function(){this.api.reset()},t.prototype.refreshIfNeeded=function(){return this.api.auth.refreshIfNeeded()},t.prototype.refresh=function(t){return this.api.auth.refresh(t)},t.prototype.requestPasswordReset=function(t){return s.invariant(u.isString(t),"email must be a string"),this.api.post("/auth/password/request",{email:t})},t.prototype.getActivity=function(t){return void 0===t&&(t={}),s.invariant(u.isObjectOrEmpty(t),"params must be an object or empty"),this.api.get("/activity",t)},t.prototype.getMyBookmarks=function(t){void 0===t&&(t={}),s.invariant(u.isString(this.config.token),"defined token is not a string"),s.invariant(u.isObjectOrEmpty(t),"params must be an object or empty");var e=this.api.getPayload();return Promise.all([this.api.get("/collection_presets",{"filter[title][nnull]":1,"filter[user][eq]":e.id}),this.api.get("/collection_presets",{"filter[role][eq]":e.role,"filter[title][nnull]":1,"filter[user][null]":1})]).then(function(t){var e=t[0],i=t[1];return(e.data||[]).concat(i.data||[])})},t.prototype.getCollections=function(t){return void 0===t&&(t={}),s.invariant(u.isObjectOrEmpty(t),"params must be an object or empty"),this.api.get("/collections",t)},t.prototype.getCollection=function(t,e){return void 0===e&&(e={}),s.invariant(u.isString(t),"collection must be a string"),s.invariant(u.isObjectOrEmpty(e),"params must be an object or empty"),this.api.get("/collections/"+t,e)},t.prototype.createCollection=function(t){return s.invariant(u.isObject(t),"data must be an object"),this.api.post("/collections",t)},t.prototype.updateCollection=function(t,e){return s.invariant(u.isString(t),"collection must be a string"),s.invariant(u.isObject(e),"data must be an object"),this.api.patch("/collections/"+t,e)},t.prototype.deleteCollection=function(t){return s.invariant(u.isString(t),"collection must be a string"),this.api.delete("/collections/"+t)},t.prototype.createCollectionPreset=function(t){return s.invariant(u.isObject(t),"data must be an object"),this.api.post("/collection_presets",t)},t.prototype.updateCollectionPreset=function(t,e){return s.invariant(u.isNotNull(t),"primaryKey must be defined"),s.invariant(u.isObject(e),"data must be an object"),this.api.patch("/collection_presets/"+t,e)},t.prototype.deleteCollectionPreset=function(t){return s.invariant(u.isNotNull(t),"primaryKey must be defined"),this.api.delete("/collection_presets/"+t)},t.prototype.updateDatabase=function(){return this.api.post("/update")},t.prototype.getInterfaces=function(){return this.api.request("get","/interfaces",{},{},!0)},t.prototype.getLayouts=function(){return this.api.request("get","/layouts",{},{},!0)},t.prototype.getPages=function(){return this.api.request("get","/pages",{},{},!0)},t.prototype.getAllFields=function(t){return void 0===t&&(t={}),s.invariant(u.isObjectOrEmpty(t),"params must be an object or empty"),this.api.get("/fields",t)},t.prototype.getFields=function(t,e){return void 0===e&&(e={}),s.invariant(u.isString(t),"collection must be a string"),s.invariant(u.isObjectOrEmpty(e),"params must be an object or empty"),this.api.get("/fields/"+t,e)},t.prototype.getField=function(t,e,i){return void 0===i&&(i={}),s.invariant(u.isString(t),"collection must be a string"),s.invariant(u.isString(e),"fieldName must be a string"),s.invariant(u.isObjectOrEmpty(i),"params must be an object or empty"),this.api.get("/fields/"+t+"/"+e,i)},t.prototype.createField=function(t,e){return s.invariant(u.isString(t),"collection must be a string"),s.invariant(u.isObject(e),"fieldInfo must be an object"),this.api.post("/fields/"+t,e)},t.prototype.updateField=function(t,e,i){return s.invariant(u.isString(t),"collection must be a string"),s.invariant(u.isString(e),"fieldName must be a string"),s.invariant(u.isObject(i),"fieldInfo must be an object"),this.api.patch("/fields/"+t+"/"+e,i)},t.prototype.updateFields=function(t,e,i){return void 0===i&&(i=null),s.invariant(u.isString(t),"collection must be a string"),s.invariant(u.isArray(e),"fieldsInfoOrFieldNames must be an array"),i&&s.invariant(u.isObject(i),"fieldInfo must be an object"),i?this.api.patch("/fields/"+t+"/"+e.join(","),i):this.api.patch("/fields/"+t,e)},t.prototype.deleteField=function(t,e){return s.invariant(u.isString(t),"collection must be a string"),s.invariant(u.isString(e),"fieldName must be a string"),this.api.delete("/fields/"+t+"/"+e)},t.prototype.uploadFiles=function(t,e){var i=this;void 0===e&&(e=function(){return{}});var r={Authorization:"Bearer "+this.config.token,"Content-Type":"multipart/form-data"};return this.api.concurrent.attach(5),this.api.xhr.post(this.config.url+"/"+this.config.project+"/files",t,{headers:r,onUploadProgress:e}).then(function(t){return i.api.concurrent.detach(),t.data}).catch(function(t){throw i.api.concurrent.detach(),t.response?t.response.data.error:{code:-1,error:t,message:"Network Error"}})},t.prototype.updateItem=function(t,e,i,n){void 0===n&&(n={}),s.invariant(u.isString(t),"collection must be a string"),s.invariant(u.isNotNull(e),"primaryKey must be defined"),s.invariant(u.isObject(i),"body must be an object");var o=r.getCollectionItemPath(t);return this.api.patch(o+"/"+e,i,n)},t.prototype.updateItems=function(t,e,i){void 0===i&&(i={}),s.invariant(u.isString(t),"collection must be a string"),s.invariant(u.isArray(e),"body must be an array");var n=r.getCollectionItemPath(t);return this.api.patch(n,e,i)},t.prototype.createItem=function(t,e){s.invariant(u.isString(t),"collection must be a string"),s.invariant(u.isObject(e),"body must be an object");var i=r.getCollectionItemPath(t);return this.api.post(i,e)},t.prototype.createItems=function(t,e){s.invariant(u.isString(t),"collection must be a string"),s.invariant(u.isArray(e),"body must be an array");var i=r.getCollectionItemPath(t);return this.api.post(i,e)},t.prototype.getItems=function(t,e){void 0===e&&(e={}),s.invariant(u.isString(t),"collection must be a string"),s.invariant(u.isObjectOrEmpty(e),"params must be an object or empty");var i=r.getCollectionItemPath(t);return this.api.get(i,e)},t.prototype.getItem=function(t,e,i){void 0===i&&(i={}),s.invariant(u.isString(t),"collection must be a string"),s.invariant(u.isNotNull(e),"primaryKey must be defined"),s.invariant(u.isObjectOrEmpty(i),"params must be an object or empty");var n=r.getCollectionItemPath(t);return this.api.get(n+"/"+e,i)},t.prototype.deleteItem=function(t,e){s.invariant(u.isString(t),"collection must be a string"),s.invariant(u.isNotNull(e),"primaryKey must be defined");var i=r.getCollectionItemPath(t);return this.api.delete(i+"/"+e)},t.prototype.deleteItems=function(t,e){s.invariant(u.isString(t),"collection must be a string"),s.invariant(u.isArray(e),"primaryKeys must be an array");var i=r.getCollectionItemPath(t);return this.api.delete(i+"/"+e.join())},t.prototype.getMyListingPreferences=function(t,e){void 0===e&&(e={}),s.invariant(u.isString(this.config.token),"token must be defined"),s.invariant(u.isObjectOrEmpty(e),"params must be an object or empty");var i=this.api.getPayload();return Promise.all([this.api.get("/collection_presets",{"filter[collection][eq]":t,"filter[role][null]":1,"filter[title][null]":1,"filter[user][null]":1,limit:1,sort:"-id"}),this.api.get("/collection_presets",{"filter[collection][eq]":t,"filter[role][eq]":i.role,"filter[title][null]":1,"filter[user][null]":1,limit:1,sort:"-id"}),this.api.get("/collection_presets",{"filter[collection][eq]":t,"filter[role][eq]":i.role,"filter[title][null]":1,"filter[user][eq]":i.id,limit:1,sort:"-id"})]).then(function(t){var e=t[0],i=t[1],r=t[2];return r.data&&r.data.length>0?r.data[0]:i.data&&i.data.length>0?i.data[0]:e.data&&e.data.length>0?e.data[0]:{}})},t.prototype.getPermissions=function(t){return void 0===t&&(t={}),s.invariant(u.isObjectOrEmpty(t),"params must be an object or empty"),this.getItems("directus_permissions",t)},t.prototype.getMyPermissions=function(t){return void 0===t&&(t={}),s.invariant(u.isObjectOrEmpty(t),"params must be an object or empty"),this.api.get("/permissions/me",t)},t.prototype.createPermissions=function(t){return s.invariant(u.isArray(t),"data must be anarry"),this.api.post("/permissions",t)},t.prototype.updatePermissions=function(t){return s.invariant(u.isArray(t),"data must be anarry"),this.api.patch("/permissions",t)},t.prototype.getRelations=function(t){return void 0===t&&(t={}),s.invariant(u.isObjectOrEmpty(t),"params must be an object or empty"),this.api.get("/relations",t)},t.prototype.createRelation=function(t){return this.api.post("/relations",t)},t.prototype.updateRelation=function(t,e){return this.api.patch("/relations/"+t,e)},t.prototype.getCollectionRelations=function(t,e){return void 0===e&&(e={}),s.invariant(u.isString(t),"collection must be a string"),s.invariant(u.isObjectOrEmpty(e),"params must be an object or empty"),Promise.all([this.api.get("/relations",{"filter[collection_a][eq]":t}),this.api.get("/relations",{"filter[collection_b][eq]":t})])},t.prototype.getItemRevisions=function(t,e,i){void 0===i&&(i={}),s.invariant(u.isString(t),"collection must be a string"),s.invariant(u.isNotNull(e),"primaryKey must be defined"),s.invariant(u.isObjectOrEmpty(i),"params must be an object or empty");var n=r.getCollectionItemPath(t);return this.api.get(n+"/"+e+"/revisions",i)},t.prototype.revert=function(t,e,i){s.invariant(u.isString(t),"collection must be a string"),s.invariant(u.isNotNull(e),"primaryKey must be defined"),s.invariant(u.isNumber(i),"revisionID must be a number");var n=r.getCollectionItemPath(t);return this.api.patch(n+"/"+e+"/revert/"+i)},t.prototype.getRole=function(t,e){return void 0===e&&(e={}),s.invariant(u.isNumber(t),"primaryKey must be a number"),s.invariant(u.isObjectOrEmpty(e),"params must be an object or empty"),this.api.get("/roles/"+t,e)},t.prototype.getRoles=function(t){return void 0===t&&(t={}),s.invariant(u.isObjectOrEmpty(t),"params must be an object or empty"),this.api.get("/roles",t)},t.prototype.updateRole=function(t,e){return s.invariant(u.isNotNull(t),"primaryKey must be defined"),s.invariant(u.isObject(e),"body must be an object"),this.updateItem("directus_roles",t,e)},t.prototype.createRole=function(t){return s.invariant(u.isObject(t),"body must be an object"),this.createItem("directus_roles",t)},t.prototype.deleteRole=function(t){return s.invariant(u.isNotNull(t),"primaryKey must be defined"),this.deleteItem("directus_roles",t)},t.prototype.getSettings=function(t){return void 0===t&&(t={}),s.invariant(u.isObjectOrEmpty(t),"params must be an object or empty"),this.api.get("/settings",t)},t.prototype.getSettingsFields=function(t){return void 0===t&&(t={}),s.invariant(u.isObjectOrEmpty(t),"params must be an object or empty"),this.api.get("/settings/fields",t)},t.prototype.getUsers=function(t){return void 0===t&&(t={}),s.invariant(u.isObjectOrEmpty(t),"params must be an object or empty"),this.api.get("/users",t)},t.prototype.getUser=function(t,e){return void 0===e&&(e={}),s.invariant(u.isNotNull(t),"primaryKey must be defined"),s.invariant(u.isObjectOrEmpty(e),"params must be an object or empty"),this.api.get("/users/"+t,e)},t.prototype.getMe=function(t){return void 0===t&&(t={}),s.invariant(u.isObjectOrEmpty(t),"params must be an object or empty"),this.api.get("/users/me",t)},t.prototype.updateUser=function(t,e){return s.invariant(u.isNotNull(t),"primaryKey must be defined"),s.invariant(u.isObject(e),"body must be an object"),this.updateItem("directus_users",t,e)},t.prototype.ping=function(){return this.api.request("get","/server/ping",{},{},!0)},t.prototype.serverInfo=function(){return this.api.request("get","/",{},{},!0)},t.prototype.projectInfo=function(){return this.api.request("get","/")},t.prototype.getThirdPartyAuthProviders=function(){return this.api.get("/auth/sso")},t.getPayload=n.getPayload,t}();e.SDK=c},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.DIRECTUS_COLLECTION_PREFIX="directus_",e.getCollectionItemPath=function(t){return t.startsWith(e.DIRECTUS_COLLECTION_PREFIX)?"/"+t.substr(9):"/items/"+t}},function(t,e){t.exports=require("base-64")},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(8),n=i(9),o=i(10),a=i(11),s=i(1),u=i(0),c=i(2),p=function(){function t(t){this.config=t,this.xhr=r.default.create({paramsSerializer:n,timeout:6e5}),this.concurrent=a.concurrencyManager(this.xhr,10),this.auth=new o.Authentication(t,{post:this.post.bind(this)})}return t.prototype.reset=function(){this.auth.logout(),this.config.delete()},t.prototype.get=function(t,e){return void 0===e&&(e={}),s.invariant(u.isString(t),"endpoint must be a string"),s.invariant(u.isObjectOrEmpty(e),"params must be an object or empty"),this.request("get",t,e)},t.prototype.post=function(t,e,i){return void 0===e&&(e={}),void 0===i&&(i={}),s.invariant(u.isString(t),"endpoint must be a string"),s.invariant(Array.isArray(e)?u.isArrayOrEmpty(e):u.isObjectOrEmpty(e),"body must be an array or object"),this.request("post",t,i,e)},t.prototype.patch=function(t,e,i){return void 0===e&&(e={}),void 0===i&&(i={}),s.invariant(u.isString(t),"endpoint must be a string"),s.invariant(Array.isArray(e)?u.isArrayOrEmpty(e):u.isObjectOrEmpty(e),"body must be an array or object"),this.request("patch",t,i,e)},t.prototype.put=function(t,e,i){return void 0===e&&(e={}),void 0===i&&(i={}),s.invariant(u.isString(t),"endpoint must be a string"),s.invariant(Array.isArray(e)?u.isArrayOrEmpty(e):u.isObjectOrEmpty(e),"body must be an array or object"),this.request("put",t,i,e)},t.prototype.delete=function(t){return s.invariant(u.isString(t),"endpoint must be a string"),this.request("delete",t)},t.prototype.getPayload=function(){return u.isString(this.config.token)?c.getPayload(this.config.token):null},t.prototype.request=function(t,e,i,r,n,o){void 0===i&&(i={}),void 0===r&&(r={}),void 0===n&&(n=!1),void 0===o&&(o={}),s.invariant(u.isString(t),"method must be a string"),s.invariant(u.isString(e),"endpoint must be a string"),s.invariant(u.isObjectOrEmpty(i),"params must be an object or empty"),s.invariant(u.isString(this.config.url),"main url must be defined (see constructor)"),s.invariant(Array.isArray(r)?u.isArrayOrEmpty(r):u.isObjectOrEmpty(r),"data must be an array or object");var a=this.config.url+"/";!1===n&&(a+=this.config.project+"/");var c={baseURL:a,data:r,headers:o,method:t,params:i,url:e};return this.config.token&&u.isString(this.config.token)&&this.config.token.length>0&&(c.headers=o,c.headers.Authorization="Bearer "+this.config.token),this.xhr.request(c).then(function(t){return t.data}).then(function(t){if(!t||0===t.length)return t;if("object"!=typeof t)try{return JSON.parse(t)}catch(e){throw{data:t,error:e,json:!0}}return t}).catch(function(t){throw t.response?t.response.data.error:!0===t.json?{code:-2,data:t.data,error:t.error,message:"API returned invalid JSON"}:{code:-1,error:t,message:"Network Error"}})},t}();e.API=p},function(t,e){t.exports=require("axios")},function(t,e){t.exports=require("qs/lib/stringify")},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(1),n=i(0),o=i(2),a=function(){function t(t,e){this.config=t,this.inject=e,t.token&&t.token.includes(".")&&this.startInterval(!0)}return t.prototype.isLoggedIn=function(){return!!(n.isString(this.config.token)&&n.isString(this.config.url)&&n.isString(this.config.project)&&n.isObject(this.getPayload())&&this.config.localExp>Date.now())},t.prototype.login=function(t,e){var i=this;return void 0===e&&(e={persist:!0,storage:!1}),r.invariant(n.isObject(t),"malformed credentials"),r.invariant(n.hasKeysWithString(t,["email","password"]),"email & password required in credentials"),this.config.token=null,n.hasKeysWithString(t,["url"])&&(this.config.url=t.url),n.hasKeysWithString(t,["project"])&&(this.config.project=t.project),(t.persist||e.persist)&&this.startInterval(),new Promise(function(e,r){i.inject.post("/auth/authenticate",{email:t.email,password:t.password}).then(function(t){return i.config.token=t.data.token}).then(function(t){i.config.localExp=new Date(Date.now()+i.config.tokenExpirationTime).getTime(),e({localExp:i.config.localExp,project:i.config.project,token:t,url:i.config.url})}).catch(r)})},t.prototype.logout=function(){this.config.reset(),this.refreshInterval&&this.stopInterval()},t.prototype.refreshIfNeeded=function(){var t=this,e=this.getPayload();if(n.isString(this.config.token)&&n.isString(this.config.url)&&n.isString(this.config.project)&&e&&e.exp){var i=(this.config.localExp||0)-Date.now();if(!(i<=0))return i<3e4?new Promise(function(e){t.refresh(t.config.token).then(function(i){var r=t.config.localExp=new Date(Date.now()+t.config.tokenExpirationTime).getTime(),o=t.config.token=i.data.token||t.config.token,a={localExp:r,project:t.config.project,token:o,url:t.config.url};n.isFunction(t.onAutoRefreshSuccess)&&(t.onAutoRefreshSuccess(a),e([!0])),t.config.update(a),e([!0])}).catch(function(i){n.isFunction(t.onAutoRefreshError)&&t.onAutoRefreshError(i),e([!0,i])})}):void Promise.resolve([!1]);n.isFunction(this.onAutoRefreshError)&&this.onAutoRefreshError({code:102,message:"auth_expired_token"})}},t.prototype.refresh=function(t){return r.invariant(n.isString(t),"token must be a string"),this.inject.post("/auth/refresh",{token:t})},t.prototype.startInterval=function(t){t&&this.refreshIfNeeded(),this.refreshInterval=setInterval(this.refreshIfNeeded.bind(this),1e4)},t.prototype.stopInterval=function(){clearInterval(this.refreshInterval),this.refreshInterval=null},t.prototype.getPayload=function(){return n.isString(this.config.token)?o.getPayload(this.config.token):null},t}();e.Authentication=a},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.concurrencyManager=function(t,e){if(void 0===e&&(e=10),e<1)throw new Error("ConcurrencyManager Error: minimun concurrent requests is 1");var i={limit:e,queue:[],running:[],interceptors:{request:null,response:null},push:function(t){i.queue.push(t),i.shiftInitial()},shiftInitial:function(){setTimeout(function(){i.running.length<i.limit&&i.shift()},0)},shift:function(){if(i.queue.length){var t=i.queue.shift();t.resolver(t.request),i.running.push(t)}},requestHandler:function(t){return new Promise(function(e){i.push({request:t,resolver:e})})},responseHandler:function(t){return i.running.shift(),i.shift(),t},detach:function(){t.interceptors.request.eject(i.interceptors.request),t.interceptors.response.eject(i.interceptors.response)},attach:function(e){e&&(i.limit=e),i.interceptors.request=t.interceptors.request.use(i.requestHandler),i.interceptors.response=t.interceptors.response.use(i.responseHandler,i.responseHandler)}};return i}},function(t,e,i){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,i=1,r=arguments.length;i<r;i++)for(var n in e=arguments[i])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var n=i(1),o=i(0),a=function(){function t(t,e){this.storage=e;var i={};e&&(i=this.dehydrate()),t=t||{};var n=i.project||t.project||"_",o=i.tokenExpirationTime||t.tokenExpirationTime||3e4;this.internalConfiguration=r({},i,t,{project:n,tokenExpirationTime:o})}return Object.defineProperty(t.prototype,"token",{get:function(){return this.internalConfiguration.token},set:function(t){this.partialUpdate({token:t})},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"tokenExpirationTime",{get:function(){return this.internalConfiguration.tokenExpirationTime},set:function(t){this.partialUpdate({tokenExpirationTime:6e4*t})},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"url",{get:function(){return this.internalConfiguration.url},set:function(t){this.partialUpdate({url:t})},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"project",{get:function(){return this.internalConfiguration.project},set:function(t){this.partialUpdate({project:t||"_"})},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"localExp",{get:function(){return this.internalConfiguration.localExp},set:function(t){this.partialUpdate({localExp:t})},enumerable:!0,configurable:!0}),t.prototype.validate=function(){n.invariant(o.isString(this.url),"configuration - url must be defined"),n.invariant(o.isString(this.project),"configuration - project must be defined"),n.invariant(o.isString(this.token),"configuration - project must be defined")},t.prototype.update=function(t){this.internalConfiguration=t,this.hydrate(t)},t.prototype.partialUpdate=function(t){this.internalConfiguration=r({},this.internalConfiguration,t),this.hydrate(this.internalConfiguration)},t.prototype.reset=function(){delete this.internalConfiguration.token,delete this.internalConfiguration.url,delete this.internalConfiguration.localExp,this.internalConfiguration.project="_",this.delete()},t.prototype.dehydrate=function(){if(this.storage){var t=this.storage.getItem("directus-sdk-js");if(t){var e=JSON.parse(t);return this.internalConfiguration=e,e}}},t.prototype.hydrate=function(t){this.storage&&this.storage.setItem("directus-sdk-js",JSON.stringify(t))},t.prototype.delete=function(){this.storage&&this.storage.removeItem("directus-sdk-js")},t}();e.Configuration=a}])});