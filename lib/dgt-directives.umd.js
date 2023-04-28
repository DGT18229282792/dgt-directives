(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["dgt-directives"] = factory();
	else
		root["dgt-directives"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 383:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// 改变背景颜色
// author:DGT 
/* harmony default export */ __webpack_exports__["default"] = ({
  bind: function (el, binding) {
    el.style.backgroundColor = binding.value;
  }
});

/***/ }),

/***/ 813:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// 点击元素外部触发指定事件
// author:DGT
/* harmony default export */ __webpack_exports__["default"] = ({
  bind: function (el, binding, vnode) {
    el.clickOutsideEvent = function (event) {
      if (!(el == event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent);
  },
  unbind: function (el) {
    document.body.removeEventListener('click', el.clickOutsideEvent);
  }
});

/***/ }),

/***/ 236:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// 防抖动，延迟触发指定事件
/* harmony default export */ __webpack_exports__["default"] = ({
  inserted: function (el, binding) {
    let timer;
    el.addEventListener('input', function () {
      clearTimeout(timer);
      timer = setTimeout(() => {
        binding.value();
      }, 1000);
    });
  }
});

/***/ }),

/***/ 472:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// 实现元素拖拽
/* harmony default export */ __webpack_exports__["default"] = ({
  bind: function (el) {
    el.style.position = 'absolute';
    el.addEventListener('mousedown', function (event) {
      el.style.cursor = 'pointer';
      const startX = event.clientX;
      const startY = event.clientY;
      const left = el.offsetLeft;
      const top = el.offsetTop;
      document.addEventListener('mousemove', move);
      document.addEventListener('mouseup', stop);
      function move(event) {
        el.style.left = left + event.clientX - startX + 'px';
        el.style.top = top + event.clientY - startY + 'px';
      }
      function stop() {
        document.removeEventListener('mousemove', move);
        document.removeEventListener('mouseup', stop);
        el.style.cursor = 'default';
      }
    });
  }
});

/***/ }),

/***/ 981:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// 文本溢出时自动添加省略号
/* harmony default export */ __webpack_exports__["default"] = ({
  bind: function (el) {
    el.classList.add('ellipsis');
  }
});

/***/ }),

/***/ 823:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// 自动聚焦
// author:DGT
/* harmony default export */ __webpack_exports__["default"] = ({
  inserted: function (el) {
    el.focus();
  }
});

/***/ }),

/***/ 122:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// 输入框自动格式化
/* harmony default export */ __webpack_exports__["default"] = ({
  bind: function (el) {
    const reg = /\D/g;
    el.addEventListener('input', function () {
      el.value = el.value.replace(reg, '');
    });
  }
});

/***/ }),

/***/ 5:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// 元素大小改变时触发指定事件
/* harmony default export */ __webpack_exports__["default"] = ({
  bind: function (el, binding) {
    let width = el.offsetWidth;
    let height = el.offsetHeight;
    setInterval(() => {
      if (el.offsetWidth !== width || el.offsetHeight !== height) {
        binding.value(el.offsetWidth, el.offsetHeight);
        width = el.offsetWidth;
        height = el.offsetHeight;
      }
    }, 500);
  }
});

/***/ }),

/***/ 828:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// 滚动时触发指定事件
/* harmony default export */ __webpack_exports__["default"] = ({
  bind: function (el, binding) {
    el.addEventListener('scroll', function () {
      binding.value(el.scrollTop);
    });
  }
});

/***/ }),

/***/ 456:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// 节流，限制触发指定事件的频率
/* harmony default export */ __webpack_exports__["default"] = ({
  inserted: function (el, binding) {
    let timer;
    el.addEventListener('input', function () {
      if (!timer) {
        timer = setTimeout(() => {
          binding.value();
          timer = null;
        }, 1000);
      }
    });
  }
});

/***/ }),

/***/ 223:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//鼠标悬停时显示提示信息
/* harmony default export */ __webpack_exports__["default"] = ({
  bind: function (el, binding) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.innerHTML = binding.value;
    el.appendChild(tooltip);
    el.addEventListener('mouseenter', function () {
      tooltip.style.display = 'block';
    });
    el.addEventListener('mouseleave', function () {
      tooltip.style.display = 'none';
    });
  }
});

/***/ }),

/***/ 260:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./backGround.js": 383,
	"./click-outside.js": 813,
	"./debounce.js": 236,
	"./draggable.js": 472,
	"./ellipsis.js": 981,
	"./facus.js": 823,
	"./mask.js": 122,
	"./resize.js": 5,
	"./scroll.js": 828,
	"./throttle.js": 456,
	"./tooltip.js": 223
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 260;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./src/plugins/index.js
const requireDirective = __webpack_require__(260);
const directives = {};
requireDirective.keys().forEach(fileName => {
  const directiveName = fileName.replace(/\.\/(.*)\.js$/, '$1');
  directives[directiveName] = requireDirective(fileName).default;
});
const install = Vue => {
  for (let i in directives) {
    Vue.directive(i, directives[i]);
  }
};
// 环境检测
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
/* harmony default export */ var plugins = ({
  install
});
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (plugins);


}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=dgt-directives.umd.js.map