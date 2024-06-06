/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./source/js/common.js":
/*!*****************************!*\
  !*** ./source/js/common.js ***!
  \*****************************/
/***/ (function() {

eval("var isScrolling = false;\n\nfunction throttleScroll() {\n  if (!isScrolling) {\n    isScrolling = true;\n    requestAnimationFrame(function () {\n      handleScroll();\n      isScrolling = false;\n    });\n  }\n}\n\nfunction blurToOverlappingElements(targetElement, className) {\n  // ターゲット要素の座標とサイズを取得\n  var targetRect = targetElement.getBoundingClientRect(); // 重なっている要素を取得\n\n  var overlappingElements = document.querySelectorAll('.js-blur-element'); // 重なっている要素に対してクラス名を追加\n\n  overlappingElements.forEach(function (element) {\n    var elementRect = element.getBoundingClientRect();\n    var isOverlapping = !(targetRect.right < elementRect.left || targetRect.left > elementRect.right || targetRect.bottom < elementRect.top || targetRect.top > elementRect.bottom);\n\n    if (isOverlapping) {\n      element.classList.add(className);\n    } else {\n      element.classList.remove(className);\n    }\n  });\n}\n\nfunction handleScroll() {\n  var targetElement = document.querySelector('.js-target-element');\n  blurToOverlappingElements(targetElement, 'is-blur');\n} // スクロールイベントをスロットルする\n\n\nwindow.addEventListener('scroll', throttleScroll);\n\n//# sourceURL=webpack://template/./source/js/common.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./source/js/common.js"]();
/******/ 	
/******/ })()
;