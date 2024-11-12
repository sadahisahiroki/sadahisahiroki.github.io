/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./source/js/common.js":
/*!*****************************!*\
  !*** ./source/js/common.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\ndocument.addEventListener('DOMContentLoaded', function () {\n  const squareContainer = document.querySelector('.square-container'); // 複数の.square要素を取得\n  const targets = {\n    info: document.getElementById('info'),\n    lang: document.getElementById('lang'),\n    sites: document.getElementById('sites'),\n    void1: document.getElementById('void1'),\n    void2: document.getElementById('void2')\n  };\n  const options = {\n    root: null,\n    // ビューポートを基準\n    rootMargin: '0px',\n    threshold: 0 // 交差する割合\n  };\n  const observer = new IntersectionObserver(entries => {\n    entries.forEach(entry => {\n      let stateClass; // デフォルト状態\n\n      if (entry.isIntersecting) {\n        switch (entry.target.id) {\n          case 'info':\n            stateClass = '--state-1';\n            break;\n          case 'lang':\n            stateClass = '--state-2';\n            break;\n          case 'sites':\n            stateClass = '--state-3';\n            break;\n          case 'void1':\n            stateClass = '--state-0';\n            break;\n          case 'void2':\n            stateClass = '--state-0';\n            break;\n          default:\n            stateClass = '--state-0';\n        }\n        squareContainer.className = `square-container ${stateClass}`;\n      }\n    });\n  }, options);\n\n  // 各ターゲット要素を監視\n  Object.values(targets).forEach(target => {\n    observer.observe(target);\n  });\n});\n\n//# sourceURL=webpack://template/./source/js/common.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./source/js/common.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;