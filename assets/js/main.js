parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"XfJI":[function(require,module,exports) {
function r(r){if(Array.isArray(r)){for(var e=0,n=new Array(r.length);e<r.length;e++)n[e]=r[e];return n}}module.exports=r;
},{}],"OMTj":[function(require,module,exports) {
function t(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}module.exports=t;
},{}],"wF/n":[function(require,module,exports) {
function e(){throw new TypeError("Invalid attempt to spread non-iterable instance")}module.exports=e;
},{}],"Fhqp":[function(require,module,exports) {
var r=require("./arrayWithoutHoles"),e=require("./iterableToArray"),a=require("./nonIterableSpread");function o(o){return r(o)||e(o)||a()}module.exports=o;
},{"./arrayWithoutHoles":"XfJI","./iterableToArray":"OMTj","./nonIterableSpread":"wF/n"}],"C4qV":[function(require,module,exports) {
var global = arguments[3];
var t=arguments[3];Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var n=-1;return t.some(function(t,r){return t[0]===e&&(n=r,!0)}),n}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var n=t(this.__entries__,e),r=this.__entries__[n];return r&&r[1]},e.prototype.set=function(e,n){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,r=t(n,e);~r&&n.splice(r,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n];t.call(e,i[1],i[0])}},e}()}(),n="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,r=void 0!==t&&t.Math===Math?t:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),i="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(r):function(t){return setTimeout(function(){return t(Date.now())},1e3/60)},o=2;function s(t,e){var n=!1,r=!1,s=0;function c(){n&&(n=!1,t()),r&&h()}function a(){i(c)}function h(){var t=Date.now();if(n){if(t-s<o)return;r=!0}else n=!0,r=!1,setTimeout(a,e);s=t}return h}var c=20,a=["top","right","bottom","left","width","height","size","weight"],h="undefined"!=typeof MutationObserver,u=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=s(this.refresh.bind(this),c)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter(function(t){return t.gatherActive(),t.hasActive()});return t.forEach(function(t){return t.broadcastActive()}),t.length>0},t.prototype.connect_=function(){n&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),h?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){n&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;a.some(function(t){return!!~n.indexOf(t)})&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),f=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var i=r[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},d=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||r},p=E(0,0,0,0);function v(t){return parseFloat(t)||0}function _(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce(function(e,n){return e+v(t["border-"+n+"-width"])},0)}function l(t){for(var e={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var i=r[n],o=t["padding-"+i];e[i]=v(o)}return e}function b(t){var e=t.getBBox();return E(0,0,e.width,e.height)}function m(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return p;var r=d(t).getComputedStyle(t),i=l(r),o=i.left+i.right,s=i.top+i.bottom,c=v(r.width),a=v(r.height);if("border-box"===r.boxSizing&&(Math.round(c+o)!==e&&(c-=_(r,"left","right")+o),Math.round(a+s)!==n&&(a-=_(r,"top","bottom")+s)),!w(t)){var h=Math.round(c+o)-e,u=Math.round(a+s)-n;1!==Math.abs(h)&&(c-=h),1!==Math.abs(u)&&(a-=u)}return E(i.left,i.top,c,a)}var y="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof d(t).SVGGraphicsElement}:function(t){return t instanceof d(t).SVGElement&&"function"==typeof t.getBBox};function w(t){return t===d(t).document.documentElement}function g(t){return n?y(t)?b(t):m(t):p}function O(t){var e=t.x,n=t.y,r=t.width,i=t.height,o="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,s=Object.create(o.prototype);return f(s,{x:e,y:n,width:r,height:i,top:n,right:e+r,bottom:i+n,left:e}),s}function E(t,e,n,r){return{x:t,y:e,width:n,height:r}}var M=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=E(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=g(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),A=function(){return function(t,e){var n=O(e);f(this,{target:t,contentRect:n})}}(),x=function(){function t(t,n,r){if(this.activeObservations_=[],this.observations_=new e,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof d(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new M(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof d(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(e){e.isActive()&&t.activeObservations_.push(e)})},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map(function(t){return new A(t.target,t.broadcastRect())});this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),T="undefined"!=typeof WeakMap?new WeakMap:new e,R=function(){return function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=u.getInstance(),r=new x(e,n,this);T.set(this,r)}}();["observe","unobserve","disconnect"].forEach(function(t){R.prototype[t]=function(){var e;return(e=T.get(this))[t].apply(e,arguments)}});var D=void 0!==r.ResizeObserver?r.ResizeObserver:R,j=D;exports.default=j;
},{}],"SvgR":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("@babel/runtime/helpers/toConsumableArray"));function t(e){return e&&e.__esModule?e:{default:e}}var r=function(t,r){var n=new t(function(e){return e.forEach(o)},r),u=new Map,o=function(e){var t=u.get(e.target);t&&t.forEach(function(t){return t(e)})};return{observe:function(t,r){u.has(t)?u.set(t,[].concat((0,e.default)(u.get(t)),[r])):(u.set(t,[r]),n.observe(t))},unobserve:function(e,t){var r=u.get(e);r&&((r=r.filter(function(e){return e!==t})).length?u.set(e,r):(u.delete(e),n.unobserve(e)))}}};exports.default=r;
},{"@babel/runtime/helpers/toConsumableArray":"Fhqp"}],"+Ftf":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.bindImage=void 0;var e=u(require("@babel/runtime/helpers/toConsumableArray")),t=u(require("resize-observer-polyfill")),r=u(require("./utils/observer"));function u(e){return e&&e.__esModule?e:{default:e}}var s=(0,r.default)(t.default),i=s.observe,n=function(e){var t=function(t){return e.setAttribute("sizes",t+"px")};t(e.getBoundingClientRect().width),e.setAttribute("srcset",e.dataset.srcset);i(e,function(e){return t(e.contentRect.width)})};exports.bindImage=n,(0,e.default)(document.querySelectorAll("img[data-srcset]")).forEach(n);
},{"@babel/runtime/helpers/toConsumableArray":"Fhqp","resize-observer-polyfill":"C4qV","./utils/observer":"SvgR"}],"10wz":[function(require,module,exports) {
"use strict";var e=t(require("@babel/runtime/helpers/toConsumableArray"));function t(e){return e&&e.__esModule?e:{default:e}}(0,e.default)(document.querySelectorAll(".slider")).forEach(function(e){var t=e.querySelector(".slider__track"),l=t.children.length,r=0;e.addEventListener("click",function(){r=(r+1)%l,t.style.transform="translateX( ".concat(-100/l*r,"% )"),e.parentNode.querySelector(".slider__pagination__bullet--active").classList.remove("slider__pagination__bullet--active"),e.parentNode.querySelectorAll(".slider__pagination__bullet")[r].classList.add("slider__pagination__bullet--active")})});
},{"@babel/runtime/helpers/toConsumableArray":"Fhqp"}],"H3RA":[function(require,module,exports) {
var e=document.getElementById("about-button"),t=document.getElementById("about-section"),n=function e(){var t=document.documentElement.scrollTop||document.body.scrollTop;t>0&&(window.requestAnimationFrame(e),window.scrollTo(0,t-t/8))};function o(e){e.preventDefault(),n(),$(t).slideToggle(250).toggleClass("reveal")}e.addEventListener("click",function(e){return o(e)});
},{}],"KyVg":[function(require,module,exports) {
"use strict";var e=n(require("@babel/runtime/helpers/toConsumableArray")),t=require("./image");function n(e){return e&&e.__esModule?e:{default:e}}var r,i=function(e){return new Promise(function(t){return setTimeout(t,e)})},o=!1,c=function(e,t){var n,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},c=t.split(" "),u=0;return function t(){u++,e.innerText=c.slice(0,u).join(" ");var a=c[u];if(!a)return i();var s=60*a.length;o&&r.classList.contains("slow-down")&&(s=180*a.length),n=setTimeout(t,s)}(),function(){return clearTimeout(n)}};(0,e.default)(document.querySelectorAll(".excerpt--single")).forEach(function(e){var t=e.querySelector(".excerpt__text"),n=e.querySelector(".excerpt__sizer .excerpt__text"),r=e.dataset.url,i=null,o=function(e){null!==i&&i(),n.innerText=e,i=c(t,e)};o(t.innerText),e.classList.add("excerpt--ready");e.addEventListener("click",function(){return fetch(r).then(function(e){return e.text()}).then(o)})});var u=function(e){var t=document.createElement(e?"a":"div");return t.classList.add("excerpt__text"),e&&(t.href=e),t},a=function(e){var n=e.ratio,r=e.srcset,i=document.createElement("span");i.classList.add("excerpt__cover");var o=document.createElement("img");return o.dataset.srcset=r,o.style.width=1/n+"em",(0,t.bindImage)(o),i.appendChild(document.createTextNode(" (")),i.appendChild(o),i.appendChild(document.createTextNode(") ")),i},s=function(e){var t=window.innerHeight-(document.querySelector(".layout__sidebar").offsetHeight+50),n=window.innerHeight-50;if(window.innerWidth>768){if(e.offsetHeight>n)return!1}else if(e.offsetHeight>t)return!1;return!0};(0,e.default)(document.querySelectorAll(".excerpt--multiple")).forEach(function(e){o||((r=document.querySelector(".home__excerpt")).addEventListener("mouseenter",function(){r.classList.add("slow-down")}),r.addEventListener("mouseleave",function(){r.classList.remove("slow-down")}),o=!0);var t=e.dataset.url;!function n(){return fetch(t).then(function(e){return e.json()}).then(function(t){var n=t.text,i=t.url,o=t.cover,d=u(i),l=document.createElement("span");return d.appendChild(l),d.appendChild(a(o)),e.appendChild(d),l.innerText=n,s(e)||r.classList.contains("slow-down")?new Promise(function(e){return c(l,n,e)}):(l.innerText="",d.remove(),void(e.innerHTML=""))}).then(function(){return i(1e3)}).then(n)}(),e.classList.add("excerpt--ready")});
},{"@babel/runtime/helpers/toConsumableArray":"Fhqp","./image":"+Ftf"}],"d6sW":[function(require,module,exports) {
"use strict";require("./image"),require("./slider"),require("./about"),require("./excerpt");
},{"./image":"+Ftf","./slider":"10wz","./about":"H3RA","./excerpt":"KyVg"}]},{},["d6sW"], null)
//# sourceMappingURL=/assets/js/main.js.map