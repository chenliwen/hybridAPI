!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.hybridAPI=t():e.hybridAPI=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return Object.keys(e).map(function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])}).join("&")},o=function(e,t){if(!t&&!(t=(window.navigator.userAgent.match(/Eleme\/([\d|\.]+)/i)||[])[1]))return!1;e=e.split("."),t=t.split(".");var n;return e.forEach(function(e,r){var o=t[r];if(void 0===o&&(o=0),void 0===n){var i=Number(e)-Number(o);0!==i&&(n=i>0)}}),!!n},i=function(e,t){return new Promise(function(n,r){var o=[t,n];window.EJsBridge[e].apply(window.EJsBridge,o)})},a=Object.create(null),c=function(e,t){document[e+"EventListener"](t,a[t],!1)},u=function(e){var t=[];return e.forEach(function(e){var n=e.eventName,r=function(){setTimeout(e.action,0)};"function"==typeof a[n]&&c("remove",n),a[n]=r,c("add",n),t.push({title:e.text,iconHash:e.iconHash,overflow:!!e.overflow,eventName:n})}),i("showRightBarItems",t)},s=function(){return Object.keys(a).forEach(function(e){c("remove",e),delete a[e]}),i("removeRightBarItems")},d=Object.create(null),l=function(e,t){document[e+"EventListener"](t,d[t],!1)},f=function(e){var t=e.eventName,n=e.action;if("function"==typeof n)return"function"==typeof d[t]&&l("remove",t),d[t]=function(e){setTimeout(function(){n(e&&e.detail)},0)},l("add",t),i("hookGoback",t)},m=function(){return Object.keys(d).forEach(function(e){l("remove",e),delete d[e]}),i("hookGoback",null)},v=function(){if(!/Android/i.test(navigator.userAgent))return!1;var e=(navigator.userAgent.match(/Eleme\/([\d|\.]+)/i)||[])[1];return!e||"7.9"===e||"7.9.1"===e},g=function(e){return new Promise(function(t,n){(!/eleme/i.test(navigator.userAgent)||o("7.8")||v())&&n({name:"NOT_SUPPORT"});var r=e.eventName,i=(e.action,e.merchantId),a=e.merchantOrderNo,c=e.xShard;r=r||"NATIVE_PAY_CALLBACk";var u=function(e){var r=e.detail,o={};o.merchantId=r.merchant_id,o.merchantOrderNo=r.merchant_order_no,o.status=r.status,"success"===r.status?t(o):n({name:r.status.toUpperCase(),data:o})};document.addEventListener(r,u,!1);var s="merchant_id="+i+"&merchant_order_no="+a+"&event_name="+r,d="eleme://web_pay_result?"+s,l="eleme://pay?"+s+"&return_url="+encodeURIComponent(d);c&&(l+="&x_shard="+c),location.href=l})},h=~~document.querySelector("html").getAttribute("data-dpr")||1,p=window.devicePixelRatio||1,w=function(e){return void 0===e&&(e=0),~~(e*h/p)},b=function(e){return void 0===e&&(e={}),{status_bar:w(e.status_bar),nav_bar:w(e.nav_bar)}},_=function(){return i("defaultHeightOfTopBar").then(b)},y=function(e){return new Promise(function(t,n){if(/Android/i.test(navigator.userAgent))return n({name:"NOT_SUPPORT"});i("contactList",e).then(function(e){"string"==typeof e?n({name:"PERMISSION_DENIED",data:e}):t(e)})})},I=function(e){return"string"==typeof e?{solid:e}:e},k=function(e,t){void 0===t&&(t={}),!0===e&&i("setNavBgColor",Object.assign({from:"#00ffffff",to:"#00aaff,#0085ff"},t))},E=function(e){var t=e.immersive,n=e.statusText,r=e.navBg,o=e.navText,a=e.triggerHeight;return void 0!==t&&(i("setImmersiveMode",t),k(t,r)),void 0!==n&&i("setLightStatusBar",{solid:"white"===n}),void 0!==r&&i("setNavBgColor",I(r)),void 0!==o&&i("setNavTextColor",I(o)),void 0!==a&&i("setTriggerHeight",a),new Promise(function(e){e()})},C=function(e){var t={weixin:{key:"weixin_session",value:0},weixin_timeline:{key:"weixin_timeline",value:1},weibo:{key:"weibo",value:2},qq:{key:"qq_session",value:4},qzone:{key:"qzone_session",value:5}},n={source:"",title:"饿了么",text:"",url:location.href,media:"",targets:Object.keys(t)};e=Object.assign(n,e);var o={},i=e.url+(/\?|#/.test(e.url)?"&":"?"),a=e.targets.indexOf("clipboard");return-1!==a&&(o.clipboard="eleme://copy?text="+e.url,e.targets.splice(a,1)),e.targets.forEach(function(n){o[t[n].key]="eleme://share?"+r({type:t[n].value,title:e.title,text:2===t[n].value?e.title+", "+e.text+"。分享链接："+i+"type="+n:e.text,url:i+"type="+n,image_url:encodeURI(decodeURI(e.image_url)),image_only:e.image_only?1:0,media:e.media})}),location.href="eleme://sns_share?source="+e.source+"&"+r(o),Promise.resolve()},x={get:function(e){return i("getCartItems",e)},reduce:function(e){return void 0===e&&(e={}),i("reduceCartItem",e)},remove:function(e){return void 0===e&&(e={}),i("removeCartItem",e)},add:function(e){return void 0===e&&(e={}),i("addCartItem",e)},clear:function(e){return i("clearCart",e)}},O=n(1),N=(n.n(O),["getGlobalGeohash","showShareButton","selectedHongbao","selectHongbao","selectCoupon","getLocateStatus","setTitle","closePage","getUserID","showRightBarItems","removeRightBarItems","hookGoback","shouldShowNewRetailRedBadge","networkType","exitConfirm","checkPackages","openPackage","defaultHeightOfTopBar","contactList","setImmersiveMode","setLightStatusBar","setNavBgColor","setNavTextColor","setTriggerHeight","scanCode","getCartItems","addCartItem","reduceCartItem","removeCartItem","clearCart"]);O.inject("EJsBridge",N);var P={getGlobalGeohash:function(){return i("getGlobalGeohash")},getLocateStatus:function(){return i("getLocateStatus")},share:function(e){document.head.insertAdjacentHTML("afterbegin",'\n      <meta name="eleme-share">\n      <meta name="eleme-share:title" content="'+e.title+'">\n      <meta name="eleme-share:description" content="'+e.text+'">\n      <meta name="eleme-share:image" content="'+encodeURI(decodeURI(e.image_url))+'">')},selectHongbao:function(e){return i("selectHongbao",e)},selectCoupon:function(e){return i("selectCoupon",String(e))},networkType:function(){return i("networkType")},setTitle:function(e){return document.title=e,i("setTitle",e)},closePage:function(){return i("closePage")},exitConfirm:function(e){return i("exitConfirm",e)},getUserID:function(e){return i("getUserID")},checkPackages:function(e){return i("checkPackages")},openPackage:function(e){return i("openPackage",e)},scanCode:function(e){return void 0===e&&(e={}),i("scanCode",e)},setRightMenu:u,clearRightMenu:s,hookBack:f,cancelHookBack:m,shouldShowNewRetailRedBadge:function(){return i("shouldShowNewRetailRedBadge")},pay:g,getTopBarHeight:_,contactList:y,setNav:E,sharePanel:C,cart:x};t.default=P},function(e,t,n){!function(e,n){n(t)}(0,function(e){"use strict";var t=function(){var e=navigator.userAgent||navigator.vendor;return/windows phone/i.test(e)?"Windows Phone":/android/i.test(e)?"Android":/iPad|iPhone|iPod/.test(e)&&!window.MSStream?"iOS":"Unknown"},n={},r="elmscheme",o="__ELM_QUEUE_MESSAGE__",i="elemejsbridge",a=t(),c=function(e){if("android"!==e.toLowerCase())return!1;var t=navigator.userAgent||navigator.vendor,n=/eleme\/(\d+(\.\d+){1,2})/i.exec(t);if(null!=n&&n.length>2){var r=n[1].split(".");if(r[0]>7)return!0;if(7==r[0]&&r[1]>=18)return!0}return!1}(a),u={},s=void 0,d=1,l=[],f=function(e,t,u){if(t){var f="cb_"+d+++"_"+(new Date).getTime();n[f]=t,e.callbackId=f}if("iOS"===a)l.push(e),s.src=r+"://"+o;else if(c)e.type=u,l.push(e),s.src=i+"://"+o;else{l.push(e);var m=JSON.stringify(l);s.src=i+"://return/"+u+"/"+encodeURIComponent(m),l=[]}},m=function(){var e=JSON.stringify(l);return l=[],e},v=function(){for(var e=i+"://return",t=void 0,n=0;n<l.length;n++){t=l[n],e=e+"/"+t.type,delete t.type;var r=JSON.stringify([t]);e=e+"/"+encodeURIComponent(r)}s.src=e},g=function(e,t){u[e]=t},h=function(e){return u[e]},p=function(e,t,n){f({handlerName:e,data:t},n,"_handler")},w=function(e,t,n,r){var o={obj:e,method:t};void 0!==n&&null!==n&&(o.data=n),f(o,r,"_interface")},b=function(e){var t=JSON.parse(e),r=void 0;if(t.responseId)r=n[t.responseId],"function"==typeof r&&r(t.responseData||t.data),delete n[t.responseId];else{if(t.callbackId){var o=t.callbackId;r=function(e){f({responseId:o,data:e},null,"_response")}}var i=WebViewJavascriptBridge._messageHandler;t.handlerName&&(i=h(t.handlerName));try{i(t.data,r)}catch(e){console.log("WebViewJavascriptBridge: WARNING: javascript handler throw.",t,e)}}},_=[],y=function(e){_?_.push(e):b(e)},I=!1,k=function(e){if(I)throw new Error("WebViewJavascriptBridge.init called twice");if(window.WebViewJavascriptBridge&&(window.WebViewJavascriptBridge._messageHandler=e,I=!0,_)){for(var t=0;t<_.length;t++)b(_[t]);_=null}},E=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=window[e]={},r=function(t){t=t.replace(new RegExp(":","g"),""),n[t]=function(n,r){w(e,t,n,r)}};t.forEach(r)},C=function(){var e=document.createEvent("Events");e.initEvent("WebViewJavascriptBridgeInjectFinishedReady",!0,!0),document.dispatchEvent(e)},x=function(){};x.init=k,x.inject=E,x.injectEvent=C,x.registerHandler=g,x.callHandler=p;var O=t();"iOS"===O?(x._fetchQueue=m,x._handleMessageFromObjC=y):"Android"===O?(x._fetchQueue=v,x._handleMessageFromNative=y):console.warn("Error: "+O+" is not supported."),window.WebViewJavascriptBridge=x,function(){s=document.createElement("iframe"),s.style.display="none","iOS"===a&&(s.src=r+"://"+o),document.documentElement.appendChild(s)}(),function(e){var t=document.createEvent("Events");t.initEvent("WebViewJavascriptBridgeReady",!0,!0),t.bridge=e,document.dispatchEvent(t)}(x),k(),e.inject=E,e.registerHandler=g,e.callHandler=p,e.callObjectMethod=w,Object.defineProperty(e,"__esModule",{value:!0})})}]).default});