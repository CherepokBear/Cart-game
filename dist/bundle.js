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

/***/ "./js/card.js":
/*!********************!*\
  !*** ./js/card.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Card: () => (/* binding */ Card)\n/* harmony export */ });\nclass Card {\r\n    _open = false\r\n    _success = false\r\n\r\n    constructor(container, number, action) {\r\n        this.card = document.createElement('div')\r\n        this.card.classList.add('card')\r\n        this.card.textContent = number\r\n        this.number = number\r\n\r\n        this.card.addEventListener('click', () => {\r\n            if (this.open == false && this._success == false) {\r\n                this.open = true\r\n                action(this)\r\n            }\r\n\r\n        })\r\n\r\n        container.append(this.card)\r\n    }\r\n\r\n    set open(value) {\r\n        this._open = value\r\n\r\n        if (value) {\r\n            this.card.classList.add('open')\r\n        } else {\r\n            this.card.classList.remove('open')\r\n        }\r\n    }\r\n    get open() {\r\n        return this._open\r\n    }\r\n    set success(value) {\r\n        this._success = value;\r\n        value ? this.card.classList.add('success') : this.card.classList.remove('success')\r\n    }\r\n    get success() {\r\n        return this._open\r\n    }\r\n}\n\n//# sourceURL=webpack:///./js/card.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   newGame: () => (/* binding */ newGame)\n/* harmony export */ });\n/* harmony import */ var _card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card.js */ \"./js/card.js\");\n/* harmony import */ var _stopwatch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stopwatch.js */ \"./js/stopwatch.js\");\n// const suits = [worms, peaks, bubi, baptize]\r\n// const rank = [6, 7, 8, 9, 10, J, K, Q, A]\r\n\r\n\r\n\r\n\r\nfunction newGame(container, cardsCount) {\r\n    //создать поле\r\n    let cardsNumberArray = [],\r\n        cardsArray = [],\r\n        firstCard = null,\r\n        secondCard = null\r\n\r\n    for (let i = 1; i <= cardsCount / 2; i++) {\r\n        cardsNumberArray.push(i);\r\n        cardsNumberArray.push(i);\r\n    }\r\n\r\n    cardsNumberArray = cardsNumberArray.sort(() => Math.random() - 0.5);\r\n\r\n    for (const cardNumber of cardsNumberArray) {\r\n        cardsArray.push(new _card_js__WEBPACK_IMPORTED_MODULE_0__.Card(container, cardNumber, flip))\r\n    }\r\n\r\n    //логика игры\r\n    function flip(card) {\r\n\r\n        if (firstCard !== null && secondCard !== null) {\r\n            if (firstCard.number != secondCard.number) {\r\n                firstCard.open = false\r\n                secondCard.open = false\r\n                firstCard = null\r\n                secondCard = null\r\n            }\r\n        }\r\n\r\n        if (firstCard == null) {\r\n            firstCard = card\r\n        } else {\r\n            if (secondCard == null) {\r\n                secondCard = card\r\n            }\r\n        }\r\n\r\n        if (firstCard !== null && secondCard !== null) {\r\n            if (firstCard.number == secondCard.number) {\r\n                firstCard.success = true\r\n                secondCard.success = true\r\n                firstCard = null\r\n                secondCard = null\r\n            }\r\n        }\r\n\r\n        //нашел все карты\r\n        if (document.querySelectorAll('.card.success').length == cardsNumberArray.length) {\r\n            //Сброс\r\n            alert('Победа')\r\n            container.innerHTML = ''\r\n            cardsNumberArray = []\r\n            cardsArray = []\r\n            firstCard = null\r\n            secondCard = null\r\n            init = 0;\r\n\r\n            newGame(container, cardsCount)\r\n        }\r\n\r\n    }\r\n\r\n}\r\n\r\nnewGame(document.getElementById('game'), 6)\r\n\r\n\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./js/stopwatch.js":
/*!*************************!*\
  !*** ./js/stopwatch.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ClearСlock\": () => (/* binding */ ClearСlock),\n/* harmony export */   StartStop: () => (/* binding */ StartStop),\n/* harmony export */   StartTIME: () => (/* binding */ StartTIME)\n/* harmony export */ });\nwindow.onload = () => {\r\n  StartStop();\r\n}\r\n\r\n//объявляем переменные\r\nvar base = 60;\r\nvar clocktimer, dateObj, dh, dm, ds, ms;\r\nvar readout = '';\r\nvar h = 1,\r\n  m = 1,\r\n  tm = 1,\r\n  s = 0,\r\n  ts = 0,\r\n  ms = 0,\r\n  init = 0;\r\n\r\n//функция для очистки поля\r\nfunction ClearСlock() {\r\n  clearTimeout(clocktimer);\r\n  h = 1;\r\n  m = 1;\r\n  tm = 1;\r\n  s = 0;\r\n  ts = 0;\r\n  ms = 0;\r\n  init = 0;\r\n  readout = '00:00:00';\r\n  document.MyForm.stopwatch.value = readout;\r\n}\r\n\r\n//функция для старта секундомера\r\nfunction StartTIME() {\r\n  var cdateObj = new Date();\r\n  var t = (cdateObj.getTime() - dateObj.getTime()) - (s * 1000);\r\n  if (t > 999) {\r\n    s++;\r\n  }\r\n  if (s >= (m * base)) {\r\n    ts = 0;\r\n    m++;\r\n  } else {\r\n    ts = parseInt((ms / 100) + s);\r\n    if (ts >= base) {\r\n      ts = ts - ((m - 1) * base);\r\n    }\r\n  }\r\n  if (m > (h * base)) {\r\n    tm = 1;\r\n    h++;\r\n  } else {\r\n    tm = parseInt((ms / 100) + m);\r\n    if (tm >= base) {\r\n      tm = tm - ((h - 1) * base);\r\n    }\r\n  }\r\n  ms = Math.round(t / 10);\r\n  if (ms > 99) {\r\n    ms = 0;\r\n  }\r\n  if (ms == 0) {\r\n    ms = '00';\r\n  }\r\n  if (ms > 0 && ms <= 9) {\r\n    ms = '0' + ms;\r\n  }\r\n  if (ts > 0) {\r\n    ds = ts;\r\n    if (ts < 10) {\r\n      ds = '0' + ts;\r\n    }\r\n  } else {\r\n    ds = '00';\r\n  }\r\n  dm = tm - 1;\r\n  if (dm > 0) {\r\n    if (dm < 10) {\r\n      dm = '0' + dm;\r\n    }\r\n  } else {\r\n    dm = '00';\r\n  }\r\n  dh = h - 1;\r\n  if (dh > 0) {\r\n    if (dh < 10) {\r\n      dh = '0' + dh;\r\n    }\r\n  } else {\r\n    dh = '00';\r\n  }\r\n  readout = dh + ':' + dm + ':' + ds;\r\n  document.MyForm.stopwatch.value = readout;\r\n  clocktimer = setTimeout(\"StartTIME()\", 1);\r\n}\r\n\r\n//Функция запуска и остановки\r\nfunction StartStop() {\r\n  if (init == 0) {\r\n    ClearСlock();\r\n    dateObj = new Date();\r\n    StartTIME();\r\n    init = 1;\r\n  } else {\r\n    clearTimeout(clocktimer);\r\n    init = 0;\r\n  }\r\n}\n\n//# sourceURL=webpack:///./js/stopwatch.js?");

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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/main.js");
/******/ 	
/******/ })()
;