(function(e){function o(o){for(var n,r,c=o[0],s=o[1],l=o[2],u=0,d=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);p&&p(o);while(d.length)d.shift()();return i.push.apply(i,l||[]),t()}function t(){for(var e,o=0;o<i.length;o++){for(var t=i[o],n=!0,r=1;r<t.length;r++){var c=t[r];0!==a[c]&&(n=!1)}n&&(i.splice(o--,1),e=s(s.s=t[0]))}return e}var n={},r={app:0},a={app:0},i=[];function c(e){return s.p+"js/"+({editor:"editor"}[e]||e)+"."+{editor:"5b1c3085"}[e]+".js"}function s(o){if(n[o])return n[o].exports;var t=n[o]={i:o,l:!1,exports:{}};return e[o].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.e=function(e){var o=[],t={editor:1};r[e]?o.push(r[e]):0!==r[e]&&t[e]&&o.push(r[e]=new Promise((function(o,t){for(var n="css/"+({editor:"editor"}[e]||e)+"."+{editor:"d9a0ac7c"}[e]+".css",a=s.p+n,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===a))return o()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===n||u===a)return o()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=o,p.onerror=function(o){var n=o&&o.target&&o.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[e],p.parentNode.removeChild(p),t(i)},p.href=a;var g=document.getElementsByTagName("head")[0];g.appendChild(p)})).then((function(){r[e]=0})));var n=a[e];if(0!==n)if(n)o.push(n[2]);else{var i=new Promise((function(o,t){n=a[e]=[o,t]}));o.push(n[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(e);var d=new Error;l=function(o){u.onerror=u.onload=null,clearTimeout(p);var t=a[e];if(0!==t){if(t){var n=o&&("load"===o.type?"missing":o.type),r=o&&o.target&&o.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,t[1](d)}a[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(o)},s.m=e,s.c=n,s.d=function(e,o,t){s.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,o){if(1&o&&(e=s(e)),8&o)return e;if(4&o&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var n in e)s.d(t,n,function(o){return e[o]}.bind(null,n));return t},s.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(o,"a",o),o},s.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},s.p="/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=o,l=l.slice();for(var d=0;d<l.length;d++)o(l[d]);var p=u;i.push([0,"chunk-vendors"]),t()})({0:function(e,o,t){e.exports=t("cd49")},"034f":function(e,o,t){"use strict";var n=t("85ec"),r=t.n(n);r.a},"0613":function(e,o,t){"use strict";var n,r,a=t("2b0e"),i=t("2f62"),c=t("1898"),s=t("ade3");(function(e){e["ChangeDocumentSharingPrivacyStatus"]="ChangeDocumentSharingPrivacyStatus",e["ChangeDocumentSharingDiscoveryStatus"]="ChangeDocumentSharingDiscoveryStatus",e["ChangeDocumentSharingAbility"]="ChangeDocumentSharingAbility"})(n||(n={}));var l,u=Object(c["b"])({namespaced:!0,state:function(){return{privacyStatus:{isPrivate:!0,isDiscoverable:!1},shareStatus:{isShared:!1,sharedWith:[]},adoption:{adoptedTo:""}}},getters:{},actions:{},mutations:(r={},Object(s["a"])(r,n.ChangeDocumentSharingPrivacyStatus,(function(e,o){e.privacyStatus.isPrivate=o,!1===o&&(e.privacyStatus.isDiscoverable=!1,e.shareStatus.isShared=!1)})),Object(s["a"])(r,n.ChangeDocumentSharingDiscoveryStatus,(function(e,o){if(!0===o&&!0===e.privacyStatus.isPrivate)throw new Error("Store DocumentShareStatusStore.privacyStatus.isPrivate is true. Commit DocumentStateDocumentShareStatus.ChangeDocumentSharingPrivacyStatus first.");!1===e.privacyStatus.isPrivate&&(e.privacyStatus.isDiscoverable=o)})),Object(s["a"])(r,n.ChangeDocumentSharingAbility,(function(e,o){if(!0===o&&!0===e.privacyStatus.isPrivate)throw new Error("Store DocumentShareStatusStore.privacyStatus.isPrivate is true. Commit DocumentStateDocumentShareStatus.ChangeDocumentSharingPrivacyStatus first.");e.shareStatus.isShared=o})),r)}),d=u;t("7db0");(function(e){e["ChangeCurrentActiveTool"]="ChangeCurrentActiveTool"})(l||(l={}));var p=Object(c["b"])({namespaced:!0,state:function(){return{currentTools:[{toolName:"Pen",toolType:"pen",toolProperties:{width:1,opacity:.5,color:"#000000"},toolGraphic:{light:t("b75a"),dark:t("462d")},uuid:"c6732fca-cec9-4213-be50-bdfb557200b8",active:!0},{toolName:"Red Pen",toolType:"pen",toolProperties:{width:0,opacity:1,color:"#f03737"},toolGraphic:{light:t("a141"),dark:t("462d")},uuid:"05dc0e90-7525-4c4b-a8a2-54746b563ace",active:!1},{toolName:"Green Pen",toolType:"pen",toolProperties:{width:0,opacity:1,color:"#45e02d"},toolGraphic:{light:t("2446"),dark:t("462d")},uuid:"74ec5733-3ba1-4e7c-bf8f-36f1fbcb6d56",active:!1},{toolName:"Blue Pen",toolType:"pen",toolProperties:{width:0,opacity:1,color:"#19c6ff"},toolGraphic:{light:t("8291"),dark:t("462d")},uuid:"436602ee-fdfd-44f0-bbe3-4770e993a283",active:!1},{toolName:"Purple Pen",toolType:"pen",toolProperties:{width:0,opacity:1,color:"#b011d4"},toolGraphic:{light:t("fe3e"),dark:t("462d")},uuid:"49b04a19-4a73-4e46-a120-d4283b5cb0be",active:!1},{toolName:"Eraser",toolType:"eraser",toolProperties:{width:0,opacity:1,color:"#potato"},toolGraphic:{light:t("0752"),dark:t("e713")},uuid:"70a27869-dd8e-4bcb-b6c6-e0a731f5a71c",active:!1}]}},getters:{},actions:{},mutations:Object(s["a"])({},l.ChangeCurrentActiveTool,(function(e,o){var t=e.currentTools.find((function(e){return 1==e.active}));if(void 0===t)window.logger.log("error","Current Tool is undefined",["Current Tool is undefined"],"CTPS-76892","canvasToolPickerState.ts");else{t.active=!1;var n=e.currentTools.find((function(e){return e.uuid==o}));void 0==n?window.logger.log("error","Replacement Tool is undefined",["Replacement Tool is undefined"],"CTPS-76893","canvasToolPickerState.ts"):n.active=!0}}))}),g=p;a["a"].use(i["a"]);var f=Object(c["a"])({state:{},mutations:{},actions:{},modules:{DocumentStateDocumentShareStatus:d,CanvasStateCanvasToolPickerState:g},strict:!1}),h=f.store;f.rootActionContext,f.moduleActionContext,f.rootGetterContext,f.moduleGetterContext,o["a"]=h},"0752":function(e,o,t){e.exports=t.p+"img/Eraser.9a064340.svg"},1:function(e,o){},2446:function(e,o,t){e.exports=t.p+"img/Pen_GREEN.e281bf19.svg"},"462d":function(e,o,t){e.exports=t.p+"img/Pen.a44af241.svg"},8291:function(e,o,t){e.exports=t.p+"img/Pen_BLUE.e99c1f28.svg"},"85ec":function(e,o,t){},a141:function(e,o,t){e.exports=t.p+"img/Pen_RED.6fcd2b0f.svg"},b75a:function(e,o,t){e.exports=t.p+"img/Pen.850ad4c8.svg"},cd49:function(e,o,t){"use strict";t.r(o),t.d(o,"vm",(function(){return T}));t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("2b0e");t("99af");window.logger={logOut:{appInfo:null,startLogTime:Date.now(),log:[]},log:function(e,o,t,n,r){window.logger.logOut.log.push({type:e,info:o,msg:t,code:n,file:r,time:Date.now()})}};var r={install:function(e,o){console.log("%cStop!\n%cThis is a browser feature intended for developers. Using this console, attackers may be able to access your account or steal your data.\n%cDo not enter or paste code that you don't understand.","font-family: helvetica; font-size: 50px; font-weight: bold; color: red; -webkit-text-stroke: 1px black;","font-family: helvetica; font-size: 20px;","font-family: helvetica; font-size: 20px; font-weight: bold; color: red;");var t={displayName:"BluebirdCloud Canvas",packageName:"bluebirdcloud-canvas",version:"0.1.0",runAs:"production"};e.prototype.$appInfo=t,console.groupCollapsed("◀ Click to expand\n%cBluebirdTechnology LLC - ".concat(t.displayName," (").concat(t.packageName,")\n%cv").concat(t.version," as ").concat(t.runAs),"font-size: 20px; color: #007BFC;","font-size: 15px;"),console.log("Warning: these are advanced options intended only for developers. Proceed only if you understand what you're doing."),console.log("All code below is available to window scope."),console.groupCollapsed("Logging Options %c BETA %c","background:#F77D05 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff",""),console.groupCollapsed("window.logger                         Logger Object"),console.log("The main logger object."),console.groupEnd(),console.groupCollapsed("window.logger.logToConsole(scope)     Log scope to console."),console.log("Scope can be any of the following:"),console.log("1: Everything - Warnings, errors, debug logs - SLOW"),console.log("2: Warnings and errors - Warnings, errors    - FAST"),console.log("3: Errors - Errors                           - FAST"),console.log("4: Nothing - THIS IS THE DEFAULT             - FAST"),console.groupEnd(),console.groupCollapsed("window.logger.showLog()               Outputs entire log to console once."),console.log("Outputs formatted log to console."),console.groupEnd(),console.groupCollapsed("window.logger.logOut                     The Log object"),console.log("The log object"),console.groupEnd(),console.groupEnd(),console.groupEnd(),window.logger.appInfo=t}},a=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("main",{staticClass:"body light",attrs:{id:"app"}},[t("router-view")],1)},i=[],c={name:"App"},s=c,l=(t("034f"),t("2877")),u=Object(l["a"])(s,a,i,!1,null,null,null),d=u.exports,p=t("9483");Object(p["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});t("d3b7");var g=t("8c4f"),f=t("62ad"),h=t.n(f);n["a"].use(h.a),n["a"].use(g["a"]),t("95f0");var v=[{path:"/",name:"Loading...",redirect:"/edit"},{path:"/edit",name:"Editor",component:function(){return t.e("editor").then(t.bind(null,"1071"))}}],m=new g["a"]({mode:"history",base:"/",routes:v}),b=m,y=t("0613"),S=t("f87c"),w=t("8055"),C=t.n(w);n["a"].use(r),window.logger.log("debug","Importing Modules",[],"MAIN-17200","main.ts"),window.logger.log("debug","Imported Modules",[],"MAIN-17200","main.ts");var P=C()("https://fjstap.glitch.me");n["a"].use(S["a"],P),n["a"].config.productionTip=!1;var T=new n["a"]({router:b,store:y["a"].original,render:function(e){return e(d)},sockets:{connect:function(){console.log("socket connected")},info_packet:function(e){console.log(e.currentUsers),this.$data.currentUsers=e.currentUsers}},data:{currentUsers:0}}).$mount("#app");window.logger.log("debug","Mounted to #app",[],"MAIN-17202","main.ts")},e713:function(e,o,t){e.exports=t.p+"img/Eraser.f82a28c1.svg"},fe3e:function(e,o,t){e.exports=t.p+"img/Pen_PURPLE.d0600f3f.svg"}});
//# sourceMappingURL=app.ce4b6a63.js.map