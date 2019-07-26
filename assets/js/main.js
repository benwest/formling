// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":[function(require,module,exports) {
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;
},{}],"../node_modules/@babel/runtime/helpers/iterableToArray.js":[function(require,module,exports) {
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;
},{}],"../node_modules/@babel/runtime/helpers/nonIterableSpread.js":[function(require,module,exports) {
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;
},{}],"../node_modules/@babel/runtime/helpers/toConsumableArray.js":[function(require,module,exports) {
var arrayWithoutHoles = require("./arrayWithoutHoles");

var iterableToArray = require("./iterableToArray");

var nonIterableSpread = require("./nonIterableSpread");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
},{"./arrayWithoutHoles":"../node_modules/@babel/runtime/helpers/arrayWithoutHoles.js","./iterableToArray":"../node_modules/@babel/runtime/helpers/iterableToArray.js","./nonIterableSpread":"../node_modules/@babel/runtime/helpers/nonIterableSpread.js"}],"js/slider.js":[function(require,module,exports) {
"use strict";

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _toConsumableArray2.default)(document.querySelectorAll('.slider')).forEach(function (el) {
  var track = el.querySelector('.slider__track');
  var count = track.children.length;
  var curr = 0;

  var next = function next() {
    curr = (curr + 1) % count;
    track.style.transform = "translateX( ".concat(-100 / count * curr, "% )");
  };

  el.addEventListener('click', next);
});
},{"@babel/runtime/helpers/toConsumableArray":"../node_modules/@babel/runtime/helpers/toConsumableArray.js"}],"js/about.js":[function(require,module,exports) {
var aboutButton = document.getElementById('about-button');
var aboutSection = document.getElementById('about-section');

var scrollToTop = function scrollToTop() {
  var c = document.documentElement.scrollTop || document.body.scrollTop;

  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

function aboutReveal(e) {
  e.preventDefault();
  scrollToTop();
  $(aboutSection).slideToggle(250).toggleClass('reveal');
}

aboutButton.addEventListener('click', function (e) {
  return aboutReveal(e);
});
},{}],"js/excerpt.js":[function(require,module,exports) {
"use strict";

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// var sleep = delay => new Promise( resolve => setTimeout( resolve, delay ) );
// var type = async ( el, text ) => {
//   var words = text.split(' ');
//   for ( var i = 0; i < words.length; i++ ) {
//     el.innerText = words.slice( 0, i ).join(' ');
//     var nextWord = words[ i + 1 ];
//     if ( nextWord ) await sleep( 60 * nextWord.length );
//   }
// }
(0, _toConsumableArray2.default)(document.querySelectorAll('.excerpt--single')).forEach(function (el) {
  var textEl = el.querySelector('.excerpt__text');
  var sizerTextEl = el.querySelector('.excerpt__sizer .excerpt__text');
  var url = el.dataset.url;
  var text = textEl.innerText;
  var curr = 0;
  var timer;

  var render = function render() {
    sizerTextEl.innerText = text;
    textEl.innerText = text.split(' ').slice(0, curr).join(' ');
  };

  render();

  var typeNext = function typeNext() {
    var nextWord = text.split(' ')[curr];
    if (!nextWord) return;
    var delay = nextWord.length * 60;
    timer = setTimeout(function () {
      curr++;
      render();
      typeNext();
    }, delay);
  };

  typeNext(); // type( textEl, textEl.innerText );
});
},{"@babel/runtime/helpers/toConsumableArray":"../node_modules/@babel/runtime/helpers/toConsumableArray.js"}],"js/main.js":[function(require,module,exports) {
"use strict";

require("./slider");

require("./about");

require("./excerpt");
},{"./slider":"js/slider.js","./about":"js/about.js","./excerpt":"js/excerpt.js"}]},{},["js/main.js"], null)
//# sourceMappingURL=/assets/js/main.js.map