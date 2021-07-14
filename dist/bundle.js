/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithHoles)
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _assertThisInitialized)
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorGet.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorGet.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classApplyDescriptorGet)
/* harmony export */ });
function _classApplyDescriptorGet(receiver, descriptor) {
  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }

  return descriptor.value;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorSet.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorSet.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classApplyDescriptorSet)
/* harmony export */ });
function _classApplyDescriptorSet(receiver, descriptor, value) {
  if (descriptor.set) {
    descriptor.set.call(receiver, value);
  } else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }

    descriptor.value = value;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classExtractFieldDescriptor)
/* harmony export */ });
function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to " + action + " private field on non-instance");
  }

  return privateMap.get(receiver);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classPrivateFieldGet)
/* harmony export */ });
/* harmony import */ var _classApplyDescriptorGet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classApplyDescriptorGet.js */ "./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorGet.js");
/* harmony import */ var _classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classExtractFieldDescriptor.js */ "./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js");


function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = (0,_classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_1__.default)(receiver, privateMap, "get");
  return (0,_classApplyDescriptorGet_js__WEBPACK_IMPORTED_MODULE_0__.default)(receiver, descriptor);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classPrivateFieldSet)
/* harmony export */ });
/* harmony import */ var _classApplyDescriptorSet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classApplyDescriptorSet.js */ "./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorSet.js");
/* harmony import */ var _classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classExtractFieldDescriptor.js */ "./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js");


function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = (0,_classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_1__.default)(receiver, privateMap, "set");
  (0,_classApplyDescriptorSet_js__WEBPACK_IMPORTED_MODULE_0__.default)(receiver, descriptor, value);
  return value;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _getPrototypeOf)
/* harmony export */ });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inherits)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.default)(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArrayLimit)
/* harmony export */ });
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableRest)
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _possibleConstructorReturn)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && ((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__.default)(call) === "object" || typeof call === "function")) {
    return call;
  }

  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__.default)(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _slicedToArray)
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__.default)(arr) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__.default)(arr, i) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__.default)(arr, i) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__.default)();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./src/modules/Controllers/Application.js":
/*!************************************************!*\
  !*** ./src/modules/Controllers/Application.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Application = {
  numberOfShips: 5,
  lengthsOfShips: [2, 3, 3, 4, 5],
  shipsOfGrid1: 0,
  shipsOfGrid2: 0,
  player1: undefined,
  player2: undefined,
  currentPlayer: undefined,
  updatePlayer: function updatePlayer() {
    this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Application);

/***/ }),

/***/ "./src/modules/Controllers/BlockClick.js":
/*!***********************************************!*\
  !*** ./src/modules/Controllers/BlockClick.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setBlockClickListeners),
/* harmony export */   "blockClickHandler": () => (/* binding */ blockClickHandler)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Application__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Application */ "./src/modules/Controllers/Application.js");


function setBlockClickListeners() {
  document.querySelectorAll('.block').forEach(function (block) {
    block.addEventListener('click', blockClickHandler);
  });
}
function blockClickHandler(e) {
  var block = e.target;
  var gridNumber = parseInt(block.parentElement.getAttribute('data-id'));
  if (!isValidPlayerClick(gridNumber)) return; // is the right player attacking the right grid?

  var _getBlockCoords = getBlockCoords(block),
      _getBlockCoords2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_getBlockCoords, 2),
      x = _getBlockCoords2[0],
      y = _getBlockCoords2[1];

  _Application__WEBPACK_IMPORTED_MODULE_1__.default.currentPlayer.attack(x - 1, y - 1);

  if (block.matches('.ship-block-in-grid')) {
    shipBlockClickHandler(block);
  } else {
    gridBlockClickHandler(block);
    console.log('left grid block handler');
    _Application__WEBPACK_IMPORTED_MODULE_1__.default.updatePlayer(); // update player only when grid block is clicked
  }

  block.removeEventListener('click', blockClickHandler);
}

function isValidPlayerClick(gridNumber) {
  if (gridNumber === 1 && _Application__WEBPACK_IMPORTED_MODULE_1__.default.currentPlayer === _Application__WEBPACK_IMPORTED_MODULE_1__.default.player2) return true;else if (gridNumber === 2 && _Application__WEBPACK_IMPORTED_MODULE_1__.default.currentPlayer === _Application__WEBPACK_IMPORTED_MODULE_1__.default.player1) return true;
  return false;
}

function gridBlockClickHandler(gridBlock) {
  gridBlock.classList.add('bad-attack');
  gridBlock.textContent = "\u2620\uFE0F";
}

function shipBlockClickHandler(shipBlock) {
  shipBlock.classList.add('attacked-ship');
  shipBlock.textContent = "\uD83D\uDCA5"; //shipBlock.textContent = `🔥`;
}

function getBlockCoords(block) {
  var x = block.getAttribute('data-row');
  var y = block.getAttribute('data-column');
  return [x, y];
}

/***/ }),

/***/ "./src/modules/Controllers/Game.js":
/*!*****************************************!*\
  !*** ./src/modules/Controllers/Game.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Application__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Application */ "./src/modules/Controllers/Application.js");
/* harmony import */ var _Views_dragFunctionForHuman__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Views/dragFunctionForHuman */ "./src/modules/Views/dragFunctionForHuman.js");
/* harmony import */ var _Models_Gameboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Models/Gameboard */ "./src/modules/Models/Gameboard.js");
/* harmony import */ var _Views_UI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Views/UI */ "./src/modules/Views/UI.js");
/* harmony import */ var _Views_checkNumberOfShipsOfHuman__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Views/checkNumberOfShipsOfHuman */ "./src/modules/Views/checkNumberOfShipsOfHuman.js");
/* harmony import */ var _Models_Player__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Models/Player */ "./src/modules/Models/Player.js");
/* harmony import */ var _Views_UIforAIShips__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Views/UIforAIShips */ "./src/modules/Views/UIforAIShips.js");
/* harmony import */ var _Models_AI__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Models/AI */ "./src/modules/Models/AI.js");
/* harmony import */ var _Models_HuntParityAI__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Models/HuntParityAI */ "./src/modules/Models/HuntParityAI.js");
/* harmony import */ var _Models_HuntProbAI__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Models/HuntProbAI */ "./src/modules/Models/HuntProbAI.js");
/* harmony import */ var _BlockClick__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./BlockClick */ "./src/modules/Controllers/BlockClick.js");
/* harmony import */ var _Views_rotateShip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Views/rotateShip */ "./src/modules/Views/rotateShip.js");
















var boardHuman = new _Models_Gameboard__WEBPACK_IMPORTED_MODULE_4__.default(10);
var boardAI = new _Models_Gameboard__WEBPACK_IMPORTED_MODULE_4__.default(10);

var sleep = function sleep(delay) {
  return new Promise(function (resolve) {
    setTimeout(resolve, delay);
  });
};

var human = new _Models_Player__WEBPACK_IMPORTED_MODULE_7__.default('human', boardHuman, boardAI);
var ai = new _Models_HuntProbAI__WEBPACK_IMPORTED_MODULE_11__.default('AI', boardAI, boardHuman);

function setup() {
  return _setup.apply(this, arguments);
}

function _setup() {
  _setup = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('Setup');
            (0,_Views_UI__WEBPACK_IMPORTED_MODULE_5__.default)();
            (0,_Views_rotateShip__WEBPACK_IMPORTED_MODULE_13__.default)();
            (0,_Views_dragFunctionForHuman__WEBPACK_IMPORTED_MODULE_3__.default)(boardHuman);
            ai.placeShips();
            (0,_Views_UIforAIShips__WEBPACK_IMPORTED_MODULE_8__.default)(boardAI);
            _context.next = 8;
            return (0,_Views_checkNumberOfShipsOfHuman__WEBPACK_IMPORTED_MODULE_6__.default)();

          case 8:
            _Application__WEBPACK_IMPORTED_MODULE_2__.default.player1 = human;
            _Application__WEBPACK_IMPORTED_MODULE_2__.default.player2 = ai;
            _Application__WEBPACK_IMPORTED_MODULE_2__.default.currentPlayer = human; // human starts

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _setup.apply(this, arguments);
}

setup().then(function () {
  startGame();
});

function startGame() {
  console.log('START THE GAME!!!');
  (0,_BlockClick__WEBPACK_IMPORTED_MODULE_12__.default)();
  document.addEventListener('click', updateGame);
}

function isGameOver() {
  return boardHuman.haveAllSunk() || boardAI.haveAllSunk();
}

function whoWon() {
  if (human.hasWon()) return human;else if (ai.hasWon()) return ai;else return null;
}

function updateGame() {
  return _updateGame.apply(this, arguments);
}

function _updateGame() {
  _updateGame = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
    var winner, boardNum, sum, title;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (isGameOver()) {
              console.log('Game Over');
              winner = whoWon();
              sum = 3;
              if (winner === human) boardNum = 1;else boardNum = 2;
              title = document.querySelector(".board[data-id = '".concat(boardNum, "'] .title"));
              title.textContent = 'WINNER FLEET';
              title = document.querySelector(".board[data-id = '".concat(sum - boardNum, "'] .title"));
              title.textContent = 'LOSER FLEET';
              cleanup();
            }

            _context2.next = 3;
            return sleep, 500;

          case 3:
            if (_Application__WEBPACK_IMPORTED_MODULE_2__.default.currentPlayer === ai) {
              ai.play();
            }

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _updateGame.apply(this, arguments);
}

function cleanup() {
  document.querySelectorAll('.grid .block').forEach(function (block) {
    block.removeEventListener('click', _BlockClick__WEBPACK_IMPORTED_MODULE_12__.blockClickHandler);
  });
  document.removeEventListener('click', updateGame);
}

/***/ }),

/***/ "./src/modules/Models/AI.js":
/*!**********************************!*\
  !*** ./src/modules/Models/AI.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AI)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldSet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Player */ "./src/modules/Models/Player.js");
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Ship */ "./src/modules/Models/Ship.js");
/* harmony import */ var _Controllers_Application__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Controllers/Application */ "./src/modules/Controllers/Application.js");










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }





var _nextY = /*#__PURE__*/new WeakMap();

var _nextX = /*#__PURE__*/new WeakMap();

var _orientations = /*#__PURE__*/new WeakMap();

var _addShipToBoard = /*#__PURE__*/new WeakSet();

var _getRandomCoords = /*#__PURE__*/new WeakSet();

var _getRandomInt = /*#__PURE__*/new WeakSet();

var _hunt = /*#__PURE__*/new WeakSet();

var _isValidIndex = /*#__PURE__*/new WeakSet();

var AI = /*#__PURE__*/function (_Player) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(AI, _Player);

  var _super = _createSuper(AI);

  function AI(name, ownBoard, oppBoard) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, AI);

    _this = _super.call(this, name, ownBoard, oppBoard);

    _isValidIndex.add((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this));

    _hunt.add((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this));

    _getRandomInt.add((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this));

    _getRandomCoords.add((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this));

    _addShipToBoard.add((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this));

    _nextY.set((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), {
      writable: true,
      value: void 0
    });

    _nextX.set((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), {
      writable: true,
      value: void 0
    });

    _orientations.set((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), {
      writable: true,
      value: void 0
    });

    _this.attackedBlocks = [];

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_8__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), _nextY, null);

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_8__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), _nextX, null);

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_8__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), _orientations, {
      0: 'horizontal',
      1: 'vertical'
    });

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(AI, [{
    key: "placeShips",
    value: function placeShips() {
      var _this2 = this;

      _Controllers_Application__WEBPACK_IMPORTED_MODULE_11__.default.lengthsOfShips.forEach(function (len) {
        return _classPrivateMethodGet(_this2, _addShipToBoard, _addShipToBoard2).call(_this2, len);
      });
    }
  }, {
    key: "play",
    value: function play() {
      var x, y, index;

      do {
        var _classPrivateFieldGet2, _classPrivateFieldGet3;

        var _classPrivateMethodGe = _classPrivateMethodGet(this, _getRandomCoords, _getRandomCoords2).call(this);

        var _classPrivateMethodGe2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_classPrivateMethodGe, 2);

        x = _classPrivateMethodGe2[0];
        y = _classPrivateMethodGe2[1];
        y = (_classPrivateFieldGet2 = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_7__.default)(this, _nextY)) !== null && _classPrivateFieldGet2 !== void 0 ? _classPrivateFieldGet2 : y;
        x = (_classPrivateFieldGet3 = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_7__.default)(this, _nextX)) !== null && _classPrivateFieldGet3 !== void 0 ? _classPrivateFieldGet3 : x;
        index = x * 10 + (y + 1); // 0 from (0,0) abstract -> 1 from (1,1) ui
      } while (this.attackedBlocks.includes(index));

      this.attackedBlocks.push(index);
      var block = document.querySelector(".grid[data-id = '1'] .block[data-row = '".concat(x + 1, "'][data-column = '").concat(y + 1, "']"));

      if (block.matches('.ship-block-in-grid')) {
        if (y + 1 < this.oppBoard.size && !this.oppBoard.grid[x][y + 1].attacked) {
          (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_8__.default)(this, _nextX, x);

          (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_8__.default)(this, _nextY, y + 1);
        } else if (y - 1 >= 0 && !this.oppBoard.grid[x][y - 1].attacked) {
          (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_8__.default)(this, _nextX, x);

          (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_8__.default)(this, _nextY, y - 1);
        } else {
          (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_8__.default)(this, _nextX, null);

          (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_8__.default)(this, _nextY, null);
        }
      } else {
        (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_8__.default)(this, _nextX, null);

        (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_8__.default)(this, _nextY, null);
      }

      block.click();
    }
  }]);

  return AI;
}(_Player__WEBPACK_IMPORTED_MODULE_9__.default);

function _addShipToBoard2(length) {
  var orientation = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_7__.default)(this, _orientations)[_classPrivateMethodGet(this, _getRandomInt, _getRandomInt2).call(this, 0, 2)];

  var ship = new _Ship__WEBPACK_IMPORTED_MODULE_10__.default(length, orientation);

  try {
    var _classPrivateMethodGe3 = _classPrivateMethodGet(this, _getRandomCoords, _getRandomCoords2).call(this),
        _classPrivateMethodGe4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_classPrivateMethodGe3, 2),
        x = _classPrivateMethodGe4[0],
        y = _classPrivateMethodGe4[1];

    this.ownBoard.placeShip(ship, x, y);
    ++_Controllers_Application__WEBPACK_IMPORTED_MODULE_11__.default.shipsOfGrid2;
  } catch (e) {
    _classPrivateMethodGet(this, _addShipToBoard, _addShipToBoard2).call(this, length);
  }
}

function _getRandomCoords2() {
  var x = _classPrivateMethodGet(this, _getRandomInt, _getRandomInt2).call(this, 0, 10);

  var y = _classPrivateMethodGet(this, _getRandomInt, _getRandomInt2).call(this, 0, 10);

  return [x, y];
}

function _getRandomInt2(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function _hunt2() {}

function _isValidIndex2() {}



/***/ }),

/***/ "./src/modules/Models/Gameboard.js":
/*!*****************************************!*\
  !*** ./src/modules/Models/Gameboard.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");



function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

var _createMatrix = /*#__PURE__*/new WeakSet();

var _placeHorizontally = /*#__PURE__*/new WeakSet();

var _placeVertically = /*#__PURE__*/new WeakSet();

var _areValidCoordForHorizontalShip = /*#__PURE__*/new WeakSet();

var _areValidCoordForVerticalShip = /*#__PURE__*/new WeakSet();

var Gameboard = /*#__PURE__*/function () {
  function Gameboard(_size) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Gameboard);

    _areValidCoordForVerticalShip.add(this);

    _areValidCoordForHorizontalShip.add(this);

    _placeVertically.add(this);

    _placeHorizontally.add(this);

    _createMatrix.add(this);

    this.size = _size;
    this.grid = _classPrivateMethodGet(this, _createMatrix, _createMatrix2).call(this, _size);
    this.shipCount = 0;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Gameboard, [{
    key: "placeShip",
    value:
    /**
     * @param {Ship} ship to be placed
     * @param {int} x starting x coordinate of ship placement
     * @param {int} y starting y coordinate of ship placement
     */
    function placeShip(ship, x, y) {
      if (this.isValidCoord(ship, x, y)) {
        if (ship.orientation === 'horizontal') _classPrivateMethodGet(this, _placeHorizontally, _placeHorizontally2).call(this, ship, x, y);else if (ship.orientation === 'vertical') _classPrivateMethodGet(this, _placeVertically, _placeVertically2).call(this, ship, x, y);else throw new Error('Invalid orientation');
        this.shipCount++;
      } else {
        throw new Error('Invalid Coordinates provided');
      }
    }
  }, {
    key: "isValidCoord",
    value: function isValidCoord(ship, x, y) {
      if (x < 0 || y < 0 || y > this.size || x > this.size) return false;
      if (ship.length > this.size) return false;
      if (ship.orientation === 'horizontal' && _classPrivateMethodGet(this, _areValidCoordForHorizontalShip, _areValidCoordForHorizontalShip2).call(this, ship, x, y) || ship.orientation === 'vertical' && _classPrivateMethodGet(this, _areValidCoordForVerticalShip, _areValidCoordForVerticalShip2).call(this, ship, x, y)) return true;
      return false;
    }
  }, {
    key: "receiveAttack",
    value: function receiveAttack(x, y) {
      if (!this.grid[x][y].attacked) this.grid[x][y].attacked = true;else throw new Error('Already attacked point');
      var ship = this.grid[x][y].ship;

      if (ship) {
        ship.hit(this.grid[x][y].index);
      }
    }
  }, {
    key: "wasSuccessfullAttack",
    value: function wasSuccessfullAttack(x, y) {
      if (this.grid[x][y]['attacked'] && this.grid[x][y]['ship']) return true;
      return false;
    }
  }, {
    key: "haveAllSunk",
    value: function haveAllSunk() {
      if (this.shipCount === 0) throw new Error('No ships');
      var grid = this.grid;

      for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[0].length; j++) {
          var ship = grid[i][j]['ship'];

          if (ship) {
            if (!ship.isSunk()) {
              return false;
            } else {
              // minor optimization:
              // move ahead by ship's length to not check the same horizontal ship repeatedly
              if (ship.orientation === 'horizontal') j += ship.length;
            }
          }
        }
      }

      return true;
    }
  }]);

  return Gameboard;
}();

function _createMatrix2(size) {
  var mat = new Array(size);

  for (var i = 0; i < size; i++) {
    // ship - for ship object if it exists, attacked - isAttacked?,
    // index - relative placement of ship tile wrt whole ship, if it exists
    mat[i] = new Array(size).fill().map(function () {
      return {
        ship: null,
        attacked: false,
        index: -1
      };
    });
  }

  return mat;
}

function _placeHorizontally2(ship, x, y) {
  for (var i = 0; i < ship.length; i++) {
    this.grid[x][y]['ship'] = ship;
    this.grid[x][y]['index'] = i;
    y++; //move to next column for next tile placement
  }
}

function _placeVertically2(ship, x, y) {
  for (var i = 0; i < ship.length; i++) {
    this.grid[x][y]['ship'] = ship;
    this.grid[x][y]['index'] = i;
    x++; //move to next row for next tile placement
  }
}

function _areValidCoordForHorizontalShip2(ship, x, y) {
  if (this.size - y < ship.length) return false;

  for (var i = 0; i < ship.length; i++) {
    if (this.grid[x][y + i]['ship']) return false;
  }

  return true;
}

function _areValidCoordForVerticalShip2(ship, x, y) {
  if (this.size - x < ship.length) return false;

  for (var i = 0; i < ship.length; i++) {
    if (this.grid[x + i][y]['ship']) return false;
  }

  return true;
}



/***/ }),

/***/ "./src/modules/Models/HuntParityAI.js":
/*!********************************************!*\
  !*** ./src/modules/Models/HuntParityAI.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HuntParityAI)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldSet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Player */ "./src/modules/Models/Player.js");
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Ship */ "./src/modules/Models/Ship.js");
/* harmony import */ var _Controllers_Application__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Controllers/Application */ "./src/modules/Controllers/Application.js");










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }





var _orientations = /*#__PURE__*/new WeakMap();

var _nextAttacks = /*#__PURE__*/new WeakMap();

var _addShipToBoard = /*#__PURE__*/new WeakSet();

var _getRandomCoords = /*#__PURE__*/new WeakSet();

var _getRandomInt = /*#__PURE__*/new WeakSet();

var _isValidIndexToAttack = /*#__PURE__*/new WeakSet();

var _obeyParity = /*#__PURE__*/new WeakSet();

var HuntParityAI = /*#__PURE__*/function (_Player) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(HuntParityAI, _Player);

  var _super = _createSuper(HuntParityAI);

  function HuntParityAI(name, ownBoard, oppBoard) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, HuntParityAI);

    _this = _super.call(this, name, ownBoard, oppBoard);

    _obeyParity.add((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this));

    _isValidIndexToAttack.add((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this));

    _getRandomInt.add((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this));

    _getRandomCoords.add((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this));

    _addShipToBoard.add((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this));

    _orientations.set((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), {
      writable: true,
      value: void 0
    });

    _nextAttacks.set((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), {
      writable: true,
      value: void 0
    });

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_8__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), _orientations, {
      0: 'horizontal',
      1: 'vertical'
    });

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_8__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), _nextAttacks, []);

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(HuntParityAI, [{
    key: "placeShips",
    value: function placeShips() {
      var _this2 = this;

      _Controllers_Application__WEBPACK_IMPORTED_MODULE_11__.default.lengthsOfShips.forEach(function (len) {
        return _classPrivateMethodGet(_this2, _addShipToBoard, _addShipToBoard2).call(_this2, len);
      });
    }
  }, {
    key: "play",
    value: function play() {
      var x, y, index;

      if ((0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_7__.default)(this, _nextAttacks).length > 0) {
        var randomIndex = _classPrivateMethodGet(this, _getRandomInt, _getRandomInt2).call(this, 0, (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_7__.default)(this, _nextAttacks).length);

        var _classPrivateFieldGet2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)((0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_7__.default)(this, _nextAttacks).splice(randomIndex, 1)[0], 2);

        x = _classPrivateFieldGet2[0];
        y = _classPrivateFieldGet2[1];
      } else {
        do {
          var _classPrivateMethodGe = _classPrivateMethodGet(this, _getRandomCoords, _getRandomCoords2).call(this);

          var _classPrivateMethodGe2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_classPrivateMethodGe, 2);

          x = _classPrivateMethodGe2[0];
          y = _classPrivateMethodGe2[1];
        } while (!_classPrivateMethodGet(this, _isValidIndexToAttack, _isValidIndexToAttack2).call(this, x, y) || !_classPrivateMethodGet(this, _obeyParity, _obeyParity2).call(this, x, y));
      }

      var block = document.querySelector(".grid[data-id = '1'] \n             .block[data-row = '".concat(x + 1, "'][data-column = '").concat(y + 1, "']"));

      if (this.oppBoard.wasSuccessfullAttack(x, y)) {
        if (_classPrivateMethodGet(this, _isValidIndexToAttack, _isValidIndexToAttack2).call(this, x, y + 1)) {
          (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_7__.default)(this, _nextAttacks).push([x, y + 1]);
        }

        if (_classPrivateMethodGet(this, _isValidIndexToAttack, _isValidIndexToAttack2).call(this, x, y - 1)) {
          (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_7__.default)(this, _nextAttacks).push([x, y - 1]);
        }

        if (_classPrivateMethodGet(this, _isValidIndexToAttack, _isValidIndexToAttack2).call(this, x + 1, y)) {
          (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_7__.default)(this, _nextAttacks).push([x + 1, y]);
        }

        if (_classPrivateMethodGet(this, _isValidIndexToAttack, _isValidIndexToAttack2).call(this, x - 1, y)) {
          (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_7__.default)(this, _nextAttacks).push([x - 1, y]);
        }
      }

      block.click();
    }
  }]);

  return HuntParityAI;
}(_Player__WEBPACK_IMPORTED_MODULE_9__.default);

function _addShipToBoard2(length) {
  var orientation = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_7__.default)(this, _orientations)[_classPrivateMethodGet(this, _getRandomInt, _getRandomInt2).call(this, 0, 2)];

  var ship = new _Ship__WEBPACK_IMPORTED_MODULE_10__.default(length, orientation);

  try {
    var _classPrivateMethodGe3 = _classPrivateMethodGet(this, _getRandomCoords, _getRandomCoords2).call(this),
        _classPrivateMethodGe4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_classPrivateMethodGe3, 2),
        x = _classPrivateMethodGe4[0],
        y = _classPrivateMethodGe4[1];

    this.ownBoard.placeShip(ship, x, y);
    ++_Controllers_Application__WEBPACK_IMPORTED_MODULE_11__.default.shipsOfGrid2;
  } catch (e) {
    _classPrivateMethodGet(this, _addShipToBoard, _addShipToBoard2).call(this, length);
  }
}

function _getRandomCoords2() {
  var x = _classPrivateMethodGet(this, _getRandomInt, _getRandomInt2).call(this, 0, 10);

  var y = _classPrivateMethodGet(this, _getRandomInt, _getRandomInt2).call(this, 0, 10);

  return [x, y];
}

function _getRandomInt2(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function _isValidIndexToAttack2(x, y) {
  var size = this.ownBoard.size;
  return x < size && x >= 0 && y < size && y >= 0 && !this.oppBoard.grid[x][y]['attacked'];
}

function _obeyParity2(x, y) {
  x = x + 1;
  y = y + 1;
  var index = (x - 1) * 10 + y;
  return index % 2 === 0 && x % 2 !== 0 || index % 2 !== 0 && x % 2 === 0;
}



/***/ }),

/***/ "./src/modules/Models/HuntProbAI.js":
/*!******************************************!*\
  !*** ./src/modules/Models/HuntProbAI.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SmartestAI)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldSet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Player */ "./src/modules/Models/Player.js");
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Ship */ "./src/modules/Models/Ship.js");
/* harmony import */ var _Controllers_Application__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Controllers/Application */ "./src/modules/Controllers/Application.js");










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }





var _orientations = /*#__PURE__*/new WeakMap();

var _nextAttacks = /*#__PURE__*/new WeakMap();

var _probData = /*#__PURE__*/new WeakMap();

var _lengths = /*#__PURE__*/new WeakMap();

var _addShipToBoard = /*#__PURE__*/new WeakSet();

var _getRandomCoords = /*#__PURE__*/new WeakSet();

var _getRandomInt = /*#__PURE__*/new WeakSet();

var _isValidIndexToAttack = /*#__PURE__*/new WeakSet();

var _updateProbabilityDistribution = /*#__PURE__*/new WeakSet();

var _createMatrix = /*#__PURE__*/new WeakSet();

var _isValidIndex = /*#__PURE__*/new WeakSet();

var SmartestAI = /*#__PURE__*/function (_Player) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(SmartestAI, _Player);

  var _super = _createSuper(SmartestAI);

  // store probability data
  function SmartestAI(name, ownBoard, oppBoard) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, SmartestAI);

    _this = _super.call(this, name, ownBoard, oppBoard);

    _isValidIndex.add((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this));

    _createMatrix.add((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this));

    _updateProbabilityDistribution.add((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this));

    _isValidIndexToAttack.add((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this));

    _getRandomInt.add((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this));

    _getRandomCoords.add((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this));

    _addShipToBoard.add((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this));

    _orientations.set((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), {
      writable: true,
      value: void 0
    });

    _nextAttacks.set((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), {
      writable: true,
      value: void 0
    });

    _probData.set((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), {
      writable: true,
      value: void 0
    });

    _lengths.set((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), {
      writable: true,
      value: void 0
    });

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_8__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), _orientations, {
      0: 'horizontal',
      1: 'vertical'
    });

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_8__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), _nextAttacks, []);

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_8__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), _lengths, _Controllers_Application__WEBPACK_IMPORTED_MODULE_11__.default.lengthsOfShips.slice());

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_8__.default)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), _probData, {
      maxX: 0,
      maxY: 0,
      matrix: _classPrivateMethodGet((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), _createMatrix, _createMatrix2).call((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), 10)
    });

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(SmartestAI, [{
    key: "placeShips",
    value: function placeShips() {
      var _this2 = this;

      _Controllers_Application__WEBPACK_IMPORTED_MODULE_11__.default.lengthsOfShips.forEach(function (len) {
        return _classPrivateMethodGet(_this2, _addShipToBoard, _addShipToBoard2).call(_this2, len);
      });
    }
  }, {
    key: "play",
    value: function play() {
      var x, y;

      if ((0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_7__.default)(this, _nextAttacks).length > 0) {
        var randomIndex = _classPrivateMethodGet(this, _getRandomInt, _getRandomInt2).call(this, 0, (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_7__.default)(this, _nextAttacks).length);

        var _classPrivateFieldGet2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)((0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_7__.default)(this, _nextAttacks).splice(randomIndex, 1)[0], 2);

        x = _classPrivateFieldGet2[0];
        y = _classPrivateFieldGet2[1];
      } else {
        _classPrivateMethodGet(this, _updateProbabilityDistribution, _updateProbabilityDistribution2).call(this);

        console.table((0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_7__.default)(this, _probData).matrix);
        x = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_7__.default)(this, _probData).maxX;
        y = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_7__.default)(this, _probData).maxY;
        (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_7__.default)(this, _probData).matrix = _classPrivateMethodGet(this, _createMatrix, _createMatrix2).call(this, 10); // reset matrix for next time;
      }

      var block = document.querySelector(".grid[data-id = '1'] \n             .block[data-row = '".concat(x + 1, "'][data-column = '").concat(y + 1, "']"));
      block.click();

      if (this.oppBoard.wasSuccessfullAttack(x, y)) {
        // if attack was successful and a ship was found, remove that ship from the list of ships
        if (this.oppBoard.grid[x][y]['ship'].isSunk()) {
          var ship = this.oppBoard.grid[x][y]['ship'];
          var length = ship.length;

          var index = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_7__.default)(this, _lengths).indexOf(length);

          console.log('*****TO REMOVE SHIP OF LENGTH****', length);

          if (index !== -1) {
            (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_7__.default)(this, _lengths).splice(index, 1);

            console.log('Now remaining lenghts are ', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_7__.default)(this, _lengths));
          }
        } else {
          if (_classPrivateMethodGet(this, _isValidIndexToAttack, _isValidIndexToAttack2).call(this, x, y + 1)) {
            (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_7__.default)(this, _nextAttacks).push([x, y + 1]);
          }

          if (_classPrivateMethodGet(this, _isValidIndexToAttack, _isValidIndexToAttack2).call(this, x, y - 1)) {
            (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_7__.default)(this, _nextAttacks).push([x, y - 1]);
          }

          if (_classPrivateMethodGet(this, _isValidIndexToAttack, _isValidIndexToAttack2).call(this, x + 1, y)) {
            (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_7__.default)(this, _nextAttacks).push([x + 1, y]);
          }

          if (_classPrivateMethodGet(this, _isValidIndexToAttack, _isValidIndexToAttack2).call(this, x - 1, y)) {
            (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_7__.default)(this, _nextAttacks).push([x - 1, y]);
          }
        }
      }
    }
  }]);

  return SmartestAI;
}(_Player__WEBPACK_IMPORTED_MODULE_9__.default);

function _addShipToBoard2(length) {
  var orientation = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_7__.default)(this, _orientations)[_classPrivateMethodGet(this, _getRandomInt, _getRandomInt2).call(this, 0, 2)];

  var ship = new _Ship__WEBPACK_IMPORTED_MODULE_10__.default(length, orientation);

  try {
    var _classPrivateMethodGe = _classPrivateMethodGet(this, _getRandomCoords, _getRandomCoords2).call(this),
        _classPrivateMethodGe2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_classPrivateMethodGe, 2),
        x = _classPrivateMethodGe2[0],
        y = _classPrivateMethodGe2[1];

    this.ownBoard.placeShip(ship, x, y);
    ++_Controllers_Application__WEBPACK_IMPORTED_MODULE_11__.default.shipsOfGrid2;
  } catch (e) {
    _classPrivateMethodGet(this, _addShipToBoard, _addShipToBoard2).call(this, length);
  }
}

function _getRandomCoords2() {
  var x = _classPrivateMethodGet(this, _getRandomInt, _getRandomInt2).call(this, 0, 10);

  var y = _classPrivateMethodGet(this, _getRandomInt, _getRandomInt2).call(this, 0, 10);

  return [x, y];
}

function _getRandomInt2(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function _isValidIndexToAttack2(x, y) {
  var size = this.ownBoard.size;
  return x < size && x >= 0 && y < size && y >= 0 && !this.oppBoard.grid[x][y]['attacked'];
}

function _updateProbabilityDistribution2() {
  var _this3 = this;

  var probData = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_7__.default)(this, _probData);

  var matrix = probData.matrix;

  var _loop = function _loop(i) {
    var _loop2 = function _loop2(j) {
      // if the point was attacked and had a ship which has already sunk, there's no point of evaluting it;
      if (_this3.oppBoard.grid[i][j]['attacked']) {
        matrix[i][j] = 0;
        return "continue";
      }

      (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_7__.default)(_this3, _lengths).forEach(function (length) {
        // Check if ship can be placed at the position horizontally
        var flag = true;

        for (var k = 0; k < length; k++) {
          // if it encounters an overlfowing block or a block that was attacked but not a ship
          if (!_classPrivateMethodGet(_this3, _isValidIndex, _isValidIndex2).call(_this3, i, j + k) || _this3.oppBoard.grid[i][j + k]['attacked'] && !_this3.oppBoard.grid[i][j + k]['ship'] || _this3.oppBoard.grid[i][j + k]['attacked'] && _this3.oppBoard.grid[i][j + k]['ship'].isSunk()) {
            flag = false;
            break;
          }
        }

        if (flag) {
          for (var _k = 0; _k < length; _k++) {
            if (_this3.oppBoard.grid[i][j + _k]['attacked']) {
              matrix[i][j + _k] = 0;
            } else {
              matrix[i][j + _k]++;
            }
          }
        } // Check if ship can be placed at the position vertically


        flag = true;

        for (var _k2 = 0; _k2 < length; _k2++) {
          if (!_classPrivateMethodGet(_this3, _isValidIndex, _isValidIndex2).call(_this3, i + _k2, j) || _this3.oppBoard.grid[i + _k2][j]['attacked'] && !_this3.oppBoard.grid[i + _k2][j]['ship'] || _this3.oppBoard.grid[i + _k2][j]['attacked'] && _this3.oppBoard.grid[i + _k2][j]['ship'].isSunk()) {
            flag = false;
            break;
          }
        }

        if (flag) {
          for (var _k3 = 0; _k3 < length; _k3++) {
            if (_this3.oppBoard.grid[i + _k3][j]['attacked']) {
              matrix[i + _k3][j] = 0;
            } else {
              matrix[i + _k3][j]++;
            }
          }
        }
      });

      if (matrix[i][j] > matrix[(0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_7__.default)(_this3, _probData).maxX][(0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_7__.default)(_this3, _probData).maxY]) {
        (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_7__.default)(_this3, _probData).maxX = i;
        (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_7__.default)(_this3, _probData).maxY = j;
      }
    };

    for (var j = 0; j < 10; j++) {
      var _ret = _loop2(j);

      if (_ret === "continue") continue;
    }
  };

  for (var i = 0; i < 10; i++) {
    _loop(i);
  }
}

function _createMatrix2(size) {
  var mat = new Array(size);

  for (var i = 0; i < size; i++) {
    mat[i] = new Array(size).fill(0);
  }

  return mat;
}

function _isValidIndex2(x, y) {
  var size = this.ownBoard.size;
  return x < size && x >= 0 && y < size && y >= 0;
}



/***/ }),

/***/ "./src/modules/Models/Player.js":
/*!**************************************!*\
  !*** ./src/modules/Models/Player.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");



var Player = /*#__PURE__*/function () {
  function Player(name, ownBoard, oppBoard) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Player);

    if (!ownBoard) throw 'No board for player';
    if (!oppBoard) throw 'No opponent board access';
    this.ownBoard = ownBoard;
    this.oppBoard = oppBoard;
    this.name = name;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Player, [{
    key: "attack",
    value: function attack(x, y) {
      console.log("".concat(this.name, " attacked (").concat(x, ", ").concat(y, ")"));
      this.oppBoard.receiveAttack(x, y);
    }
  }, {
    key: "hasWon",
    value: function hasWon() {
      return this.oppBoard.haveAllSunk();
    }
  }]);

  return Player;
}();



/***/ }),

/***/ "./src/modules/Models/Ship.js":
/*!************************************!*\
  !*** ./src/modules/Models/Ship.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");



function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

var _isValidIndex = /*#__PURE__*/new WeakSet();

var Ship = /*#__PURE__*/function () {
  function Ship(length) {
    var orientation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "horizontal";

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Ship);

    _isValidIndex.add(this);

    if (length <= 0) throw new Error("Invalid length of ship");
    this.length = length;
    this.hitIndices = [];
    this.orientation = orientation;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Ship, [{
    key: "hit",
    value: function hit(index) {
      if (_classPrivateMethodGet(this, _isValidIndex, _isValidIndex2).call(this, index) && !this.hitIndices.includes(index)) this.hitIndices.push(index);
    }
  }, {
    key: "isSunk",
    value: function isSunk() {
      return this.length === this.hitIndices.length;
    }
  }]);

  return Ship;
}();

function _isValidIndex2(index) {
  return index < this.length && index >= 0;
}



/***/ }),

/***/ "./src/modules/Views/UI.js":
/*!*********************************!*\
  !*** ./src/modules/Views/UI.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayGameInterface)
/* harmony export */ });
/* harmony import */ var _Controllers_Application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Controllers/Application */ "./src/modules/Controllers/Application.js");
 // Add 10*10 blocks to the grid

function displayGrids() {
  Array.from(document.querySelectorAll('.container .board .grid')).map(function (grid) {
    for (var i = 0; i < 100; i++) {
      var block = document.createElement('div');
      block.classList.add('block');
      block.setAttribute('data-column', i % 10 + 1);
      block.setAttribute('data-number', i + 1);
      block.setAttribute('data-row', Math.floor(i / 10 + 1));
      grid.appendChild(block);
    }
  });
}

function displayShips(lengths) {
  lengths.forEach(function (len) {
    return addShiptoUI(len);
  });
}

function modifyShipWidth() {
  console.log('resizing ship');
  document.querySelectorAll('.container .board .ship-yard .ship-block').forEach(function (shipBlock) {
    shipBlock.style.width = "".concat(document.querySelector('.grid .block').offsetWidth, "px");
  });
} // Create rectangular blocks to represent ships


function addShiptoUI(length) {
  Array.from(document.querySelectorAll('.ship-yard')).map(function (shipYard) {
    var yardNumber = shipYard.getAttribute('data-id');
    var ship = document.createElement('div');
    ship.classList.add('ship');
    ship.setAttribute('draggable', true);
    ship.setAttribute('data-id', yardNumber);

    for (var i = 0; i < length; i++) {
      var block = document.createElement('div');
      block.classList.add('ship-block');
      block.style.width = "".concat(document.querySelector('.grid .block').offsetWidth, "px");
      ship.appendChild(block);
    }

    shipYard.appendChild(ship);
  });
}

function displayGameInterface() {
  displayGrids();
  displayShips(_Controllers_Application__WEBPACK_IMPORTED_MODULE_0__.default.lengthsOfShips);
  window.onresize = modifyShipWidth;
}

/***/ }),

/***/ "./src/modules/Views/UIforAIShips.js":
/*!*******************************************!*\
  !*** ./src/modules/Views/UIforAIShips.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateUIWithAIShips)
/* harmony export */ });
function updateUIWithAIShips(boardAI) {
  document.querySelectorAll(".ship-yard[data-id = '2'] .ship").forEach(function (ship) {
    ship.style.display = "none";
  });

  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      if (boardAI.grid[i][j]["ship"]) {
        var block = document.querySelector(".grid[data-id = '2'] \n           .block[data-row = '".concat(i + 1, "'][data-column = '").concat(j + 1, "']"));
        block.classList.add("ship-block-in-grid");
        block.classList.add("ai-ship");
      }
    }
  }
}

/***/ }),

/***/ "./src/modules/Views/checkNumberOfShipsOfHuman.js":
/*!********************************************************!*\
  !*** ./src/modules/Views/checkNumberOfShipsOfHuman.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ areAllShipsPlaced)
/* harmony export */ });
/* harmony import */ var _Controllers_Application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Controllers/Application */ "./src/modules/Controllers/Application.js");

function areAllShipsPlaced() {
  return new Promise(function (resolve, reject) {
    (function waitForAllShipsToBePlaced() {
      if (_Controllers_Application__WEBPACK_IMPORTED_MODULE_0__.default.shipsOfGrid1 === _Controllers_Application__WEBPACK_IMPORTED_MODULE_0__.default.numberOfShips && _Controllers_Application__WEBPACK_IMPORTED_MODULE_0__.default.shipsOfGrid2 === _Controllers_Application__WEBPACK_IMPORTED_MODULE_0__.default.numberOfShips) return resolve();
      setTimeout(waitForAllShipsToBePlaced, 2000);
    })();
  });
}

/***/ }),

/***/ "./src/modules/Views/dragFunctionForHuman.js":
/*!***************************************************!*\
  !*** ./src/modules/Views/dragFunctionForHuman.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ letHumanDragShips)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Models_Ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Models/Ship */ "./src/modules/Models/Ship.js");
/* harmony import */ var _Controllers_Application__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Controllers/Application */ "./src/modules/Controllers/Application.js");



var draggedShip, draggedShipLength, shipBlockNumberDragged, draggedShipDirection;
function letHumanDragShips(boardHuman) {
  document.querySelectorAll(".ship-yard[data-id = '1'] .ship").forEach(function (ship) {
    ship.addEventListener('dragstart', handleDragStart);
    ship.addEventListener('dragend', function (e) {
      return handleDragEnd(e, boardHuman);
    });
  });
}

function handleDragStart(e) {
  e.stopPropagation();
  draggedShip = e.target;

  if (!draggedShip.matches('.ship')) {
    console.log('not matches');
    return;
  }

  try {
    this.style.opacity = '0.4';
    draggedShipLength = draggedShip.childElementCount;
    var rect = draggedShip.getBoundingClientRect();
    draggedShipDirection = window.getComputedStyle(draggedShip).flexDirection;

    if (draggedShipDirection === 'row') {
      var blockWidth = rect.width / draggedShipLength;
      shipBlockNumberDragged = Math.floor(e.offsetX / blockWidth + 1);
    } else if (draggedShipDirection === 'column') {
      var blockHeight = rect.height / draggedShipLength;
      shipBlockNumberDragged = Math.floor(e.offsetY / blockHeight + 1);
    }
  } catch (_unused) {
    restoreOpacity(e);
  }
}

function handleDragEnd(e, boardHuman) {
  e.preventDefault();
  e.stopPropagation(); // if (!draggedShip.matches('.ship')) {
  //     console.log('not matches');
  //     restoreOpacity(e);
  //     return;
  // }
  // on which element does drag end on screen - returns an array with parents included

  try {
    var elem = document.elementsFromPoint(e.clientX, e.clientY); // if it's a block in the right grid

    if (elem[0].matches(".grid[data-id = '1'] .block") && draggedShipLength >= 2) {
      var block = elem[0];

      var _getUICoords = getUICoords(block),
          _getUICoords2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_getUICoords, 2),
          row = _getUICoords2[0],
          column = _getUICoords2[1];

      var startingBlock = getStartingBlock(row, column, draggedShipDirection);
      console.log(startingBlock);

      if (!startingBlock) {
        console.log('NOT starting block');
        restoreOpacity(e);
        return;
      }

      var _getUICoords3 = getUICoords(startingBlock),
          _getUICoords4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_getUICoords3, 2),
          x = _getUICoords4[0],
          y = _getUICoords4[1];

      var orientation = draggedShipDirection === 'row' ? 'horizontal' : 'vertical';
      var ship = new _Models_Ship__WEBPACK_IMPORTED_MODULE_1__.default(draggedShipLength, orientation);

      try {
        boardHuman.placeShip(ship, x - 1, y - 1); // x-1,y-1 because UI: 1,2,... -> logic:0,1,...\

        ++_Controllers_Application__WEBPACK_IMPORTED_MODULE_2__.default.shipsOfGrid1;
        paintShipOnGrid(parseInt(startingBlock.getAttribute('data-number')), orientation);
        var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        console.log(width);
        if (width > 576) draggedShip.style.visibility = 'hidden';else draggedShip.style.display = 'none';
        return;
      } catch (err) {
        console.log(err.message);
        restoreOpacity(e);
        return;
      }
    } else restoreOpacity(e);
  } catch (_unused2) {
    restoreOpacity(e);
  }
}

function getStartingBlock(row, column, direction) {
  if (direction === 'row') return document.querySelector(".grid[data-id = '1'] .block[data-row = '".concat(row, "'][data-column = '").concat(column - shipBlockNumberDragged + 1, "']"));else if (direction === 'column') {
    return document.querySelector(".grid[data-id = '1'] .block[data-row = '".concat(row - shipBlockNumberDragged + 1, "'][data-column = '").concat(column, "']"));
  } else {
    throw new Error('No direction specified');
  }
}

function paintShipOnGrid(index, orientation) {
  if (orientation === 'horizontal') for (var i = 0; i < draggedShipLength; i++) {
    var currentBlock = document.querySelector(".grid[data-id = '1'] .block[data-number = '".concat(index++, "']"));
    currentBlock.classList.add('ship-block-in-grid');
  } else if (orientation === 'vertical') {
    for (var _i = 0; _i < draggedShipLength; _i++) {
      var _currentBlock = document.querySelector(".grid[data-id = '1'] .block[data-number = '".concat(index, "']"));

      _currentBlock.classList.add('ship-block-in-grid');

      index += 10;
    }
  }
}

function restoreOpacity(e) {
  if (draggedShip.matches('.ship')) draggedShip.style.opacity = 1;
}

function getUICoords(block) {
  var x = block.getAttribute('data-row');
  var y = block.getAttribute('data-column');
  return [x, y];
}

/***/ }),

/***/ "./src/modules/Views/rotateShip.js":
/*!*****************************************!*\
  !*** ./src/modules/Views/rotateShip.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ letHumanRotateShips)
/* harmony export */ });
var drag = false;
function letHumanRotateShips() {
  document.querySelectorAll(".ship-yard[data-id = '1'] .ship").forEach(function (ship) {
    // distinguish b/w drag and click
    // there is a mousemove between mousedown and mouseup in a drag,
    // but not in a click.
    ship.addEventListener('mousedown', function () {
      return drag = false;
    });
    ship.addEventListener('mousemove', function () {
      return drag = true;
    });
    ship.addEventListener('mouseup', function (e) {
      if (!drag) rotateShip(e);
    });
  });
}

function rotateShip(e) {
  e.preventDefault();
  console.log('click');
  var ship = e.target.parentElement; // because target will be a ship block due to event bubbling

  var currentDirection = ship.style.flexDirection;
  ship.style.flexDirection = currentDirection === 'column' ? 'row' : 'column';
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css ***!
  \****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./node_modules/normalize.css/normalize.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,iBAAiB,EAAE,MAAM;EACzB,8BAA8B,EAAE,MAAM;AACxC;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,SAAS;AACX;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,uBAAuB,EAAE,MAAM;EAC/B,SAAS,EAAE,MAAM;EACjB,iBAAiB,EAAE,MAAM;AAC3B;;AAEA;;;EAGE;;AAEF;EACE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,6BAA6B;AAC/B;;AAEA;;;EAGE;;AAEF;EACE,mBAAmB,EAAE,MAAM;EAC3B,0BAA0B,EAAE,MAAM;EAClC,iCAAiC,EAAE,MAAM;AAC3C;;AAEA;;EAEE;;AAEF;;EAEE,mBAAmB;AACrB;;AAEA;;;EAGE;;AAEF;;;EAGE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;;;;;EAKE,oBAAoB,EAAE,MAAM;EAC5B,eAAe,EAAE,MAAM;EACvB,iBAAiB,EAAE,MAAM;EACzB,SAAS,EAAE,MAAM;AACnB;;AAEA;;;EAGE;;AAEF;QACQ,MAAM;EACZ,iBAAiB;AACnB;;AAEA;;;EAGE;;AAEF;SACS,MAAM;EACb,oBAAoB;AACtB;;AAEA;;EAEE;;AAEF;;;;EAIE,0BAA0B;AAC5B;;AAEA;;EAEE;;AAEF;;;;EAIE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;EAEE;;AAEF;;;;EAIE,8BAA8B;AAChC;;AAEA;;EAEE;;AAEF;EACE,8BAA8B;AAChC;;AAEA;;;;;EAKE;;AAEF;EACE,sBAAsB,EAAE,MAAM;EAC9B,cAAc,EAAE,MAAM;EACtB,cAAc,EAAE,MAAM;EACtB,eAAe,EAAE,MAAM;EACvB,UAAU,EAAE,MAAM;EAClB,mBAAmB,EAAE,MAAM;AAC7B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;;AAEA;;EAEE;;AAEF;;EAEE,YAAY;AACd;;AAEA;;;EAGE;;AAEF;EACE,6BAA6B,EAAE,MAAM;EACrC,oBAAoB,EAAE,MAAM;AAC9B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;;EAGE;;AAEF;EACE,0BAA0B,EAAE,MAAM;EAClC,aAAa,EAAE,MAAM;AACvB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,aAAa;AACf;;AAEA;;EAEE;;AAEF;EACE,aAAa;AACf","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/container.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/container.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --primary-1: #00171f;\n    --primary-2: #ffffff;\n    --secondary-1: #003459;\n    --accent-1: #3f6c51;\n    --accent-2: #00a8e8;\n    /* --accent-3: #17bebb; */\n    /* --accent-3: #0288E8; */\n    --accent-3: rgb(211, 54, 54);\n}\n\n.container {\n    display: flex;\n    flex-wrap: wrap;\n}\n.container .game-title {\n    flex: 0 0 100%;\n    font-size: 2rem;\n    display: flex;\n    background-color: #041016;\n    border-bottom: 2rem transparent solid;\n    border-color: var(--primary-1);\n}\n\n.container .game-title span {\n    display: block;\n    border: 1rem solid transparent;\n    border-left: 2rem solid transparent;\n}\n.container .board {\n    width: 50%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 3vh;\n    position: relative;\n}\n.container .board .title {\n    /* background-color: var(--secondary-1); */\n    background-color: #cf0808;\n    text-align: center;\n    width: 70%;\n    border-radius: 5px;\n    font-size: 2em;\n    flex: 0 0 3vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 1rem solid transparent;\n}\n\n.board[data-id='2'] .title {\n    background-color: #cf080847;\n}\n\n.container .board .grid {\n    align-self: center;\n    display: grid;\n    grid-template-columns: repeat(10, calc(100% / 10));\n    grid-template-rows: repeat(10, calc(100% / 10));\n    /* background-color: white; */\n    width: 70%;\n    background-color: var(--primary-1);\n    border-radius: 5px;\n}\n\n.container .board .block {\n    background-color: var(--accent-2);\n    aspect-ratio: 1;\n    /* border: 1px solid var(--secondary-1); */\n    border-radius: 5px;\n    border: 0.2rem solid var(--primary-1);\n}\n\n.container .board .block:hover {\n    background-color: #0034599c;\n}\n\n.ship-yard-widget {\n    align-self: center;\n}\n\n.container .board .ship-yard {\n    width: 70%;\n    align-self: center;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: flex-start;\n    gap: 10px;\n}\n\n.container .board .ship-yard .ship {\n    display: flex;\n}\n\n.container .board .ship-yard .ship .ship-block {\n    /* background-color: var(--block-color); */\n    aspect-ratio: 1;\n    flex: 0 0 auto;\n    background-color: var(--accent-3);\n    aspect-ratio: 1;\n    /* border: 1px solid var(--secondary-1); */\n    border-radius: 5px;\n    border: 0.2rem solid var(--primary-1);\n}\n\n.ship-block-in-grid {\n    background-color: var(--accent-3) !important;\n    aspect-ratio: 1;\n    flex: 0 0 auto;\n    /* border: 2px solid black !important; */\n}\n\n.board[data-id='2'] .ship-block-in-grid {\n    background-color: var(--accent-2) !important;\n}\n\n.board[data-id='2'] .ship-block-in-grid:hover {\n    background-color: #0034599c !important;\n}\n\n.attacked-ship {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    /* background-color: var(--accent-3) !important; */\n    font-size: 2em;\n    background-color: rgba(165, 42, 42, 0.308) !important;\n}\n\n.board[data-id='2'] .attacked-ship {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 2em;\n    /* background-color: var(--accent-3) !important; */\n    background-color: rgba(165, 42, 42, 0.308) !important;\n    pointer-events: none !important;\n}\n\n.bad-attack {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    color: black;\n    background-color: black !important;\n    /* background-color: black !important; */\n}\n\n.bad-attack:hover {\n    pointer-events: none !important;\n}\n\n@media (max-width: 1200px) {\n    /* // rules here apply to devices from 993px to 1200px (inclusive) */\n    .container .board {\n        width: 50%;\n    }\n\n    .container .board .grid {\n        width: 90%;\n    }\n\n    .container .board .title {\n        width: 90%;\n    }\n\n    .container .board .ship-yard {\n        width: 90%;\n    }\n}\n@media (max-width: 992px) {\n    /* // rules here apply to devices from 769px to 992px (inclusive) */\n}\n@media (max-width: 768px) {\n    /* // rules here apply to devices from 0px to 768px (inclusive) */\n    .container .board .grid {\n        width: 95%;\n        border-radius: 2px;\n    }\n    .container .board .ship-yard {\n        width: 95%;\n    }\n    .container .board .block {\n        border-radius: 2px;\n        border: 0.15rem solid var(--primary-1);\n    }\n\n    .container .board .ship-yard .ship .ship-block {\n        border-radius: 2px;\n        border: 0.15rem solid var(--primary-1);\n    }\n}\n\n@media (max-width: 600px){\n    /* .container .board .block {\n        border: 0.1rem solid var(--primary-1);\n    }\n\n    .container .board .ship-yard .ship .ship-block {\n        border: 0.1rem solid var(--primary-1);\n    } */\n}\n\n@media (max-width: 576px) {\n    .container .board {\n        width: 100%;\n        gap: 0.5rem;\n    }\n\n    .container .board .title {\n        width: 50%;\n        font-size: 1rem;\n        border: none;\n    }\n    .container .board .grid {\n        width: 50%;\n    }\n\n    .container .board .ship-yard {\n        width: 50%;\n        border-bottom: 1rem solid transparent;\n    }\n}\n\n@media (max-width: 480px) {\n\n    .container .board {\n        width: 100%;\n        gap: 0.5rem;\n    }\n\n    .container .board .title {\n        width: 55%;\n        font-size: 1rem;\n        border: none;\n    }\n    .container .board .grid {\n        width: 55%;\n    }\n\n    .container .board .ship-yard {\n        width: 55%;\n        border-bottom: 1rem solid transparent;\n    }\n}\n", "",{"version":3,"sources":["webpack://./src/css/container.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,oBAAoB;IACpB,sBAAsB;IACtB,mBAAmB;IACnB,mBAAmB;IACnB,yBAAyB;IACzB,yBAAyB;IACzB,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,eAAe;AACnB;AACA;IACI,cAAc;IACd,eAAe;IACf,aAAa;IACb,yBAAyB;IACzB,qCAAqC;IACrC,8BAA8B;AAClC;;AAEA;IACI,cAAc;IACd,8BAA8B;IAC9B,mCAAmC;AACvC;AACA;IACI,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,QAAQ;IACR,kBAAkB;AACtB;AACA;IACI,0CAA0C;IAC1C,yBAAyB;IACzB,kBAAkB;IAClB,UAAU;IACV,kBAAkB;IAClB,cAAc;IACd,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,kDAAkD;IAClD,+CAA+C;IAC/C,6BAA6B;IAC7B,UAAU;IACV,kCAAkC;IAClC,kBAAkB;AACtB;;AAEA;IACI,iCAAiC;IACjC,eAAe;IACf,0CAA0C;IAC1C,kBAAkB;IAClB,qCAAqC;AACzC;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,UAAU;IACV,kBAAkB;IAClB,aAAa;IACb,eAAe;IACf,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,0CAA0C;IAC1C,eAAe;IACf,cAAc;IACd,iCAAiC;IACjC,eAAe;IACf,0CAA0C;IAC1C,kBAAkB;IAClB,qCAAqC;AACzC;;AAEA;IACI,4CAA4C;IAC5C,eAAe;IACf,cAAc;IACd,wCAAwC;AAC5C;;AAEA;IACI,4CAA4C;AAChD;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kDAAkD;IAClD,cAAc;IACd,qDAAqD;AACzD;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,cAAc;IACd,kDAAkD;IAClD,qDAAqD;IACrD,+BAA+B;AACnC;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,kCAAkC;IAClC,wCAAwC;AAC5C;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,oEAAoE;IACpE;QACI,UAAU;IACd;;IAEA;QACI,UAAU;IACd;;IAEA;QACI,UAAU;IACd;;IAEA;QACI,UAAU;IACd;AACJ;AACA;IACI,mEAAmE;AACvE;AACA;IACI,iEAAiE;IACjE;QACI,UAAU;QACV,kBAAkB;IACtB;IACA;QACI,UAAU;IACd;IACA;QACI,kBAAkB;QAClB,sCAAsC;IAC1C;;IAEA;QACI,kBAAkB;QAClB,sCAAsC;IAC1C;AACJ;;AAEA;IACI;;;;;;OAMG;AACP;;AAEA;IACI;QACI,WAAW;QACX,WAAW;IACf;;IAEA;QACI,UAAU;QACV,eAAe;QACf,YAAY;IAChB;IACA;QACI,UAAU;IACd;;IAEA;QACI,UAAU;QACV,qCAAqC;IACzC;AACJ;;AAEA;;IAEI;QACI,WAAW;QACX,WAAW;IACf;;IAEA;QACI,UAAU;QACV,eAAe;QACf,YAAY;IAChB;IACA;QACI,UAAU;IACd;;IAEA;QACI,UAAU;QACV,qCAAqC;IACzC;AACJ","sourcesContent":[":root {\n    --primary-1: #00171f;\n    --primary-2: #ffffff;\n    --secondary-1: #003459;\n    --accent-1: #3f6c51;\n    --accent-2: #00a8e8;\n    /* --accent-3: #17bebb; */\n    /* --accent-3: #0288E8; */\n    --accent-3: rgb(211, 54, 54);\n}\n\n.container {\n    display: flex;\n    flex-wrap: wrap;\n}\n.container .game-title {\n    flex: 0 0 100%;\n    font-size: 2rem;\n    display: flex;\n    background-color: #041016;\n    border-bottom: 2rem transparent solid;\n    border-color: var(--primary-1);\n}\n\n.container .game-title span {\n    display: block;\n    border: 1rem solid transparent;\n    border-left: 2rem solid transparent;\n}\n.container .board {\n    width: 50%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 3vh;\n    position: relative;\n}\n.container .board .title {\n    /* background-color: var(--secondary-1); */\n    background-color: #cf0808;\n    text-align: center;\n    width: 70%;\n    border-radius: 5px;\n    font-size: 2em;\n    flex: 0 0 3vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 1rem solid transparent;\n}\n\n.board[data-id='2'] .title {\n    background-color: #cf080847;\n}\n\n.container .board .grid {\n    align-self: center;\n    display: grid;\n    grid-template-columns: repeat(10, calc(100% / 10));\n    grid-template-rows: repeat(10, calc(100% / 10));\n    /* background-color: white; */\n    width: 70%;\n    background-color: var(--primary-1);\n    border-radius: 5px;\n}\n\n.container .board .block {\n    background-color: var(--accent-2);\n    aspect-ratio: 1;\n    /* border: 1px solid var(--secondary-1); */\n    border-radius: 5px;\n    border: 0.2rem solid var(--primary-1);\n}\n\n.container .board .block:hover {\n    background-color: #0034599c;\n}\n\n.ship-yard-widget {\n    align-self: center;\n}\n\n.container .board .ship-yard {\n    width: 70%;\n    align-self: center;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: flex-start;\n    gap: 10px;\n}\n\n.container .board .ship-yard .ship {\n    display: flex;\n}\n\n.container .board .ship-yard .ship .ship-block {\n    /* background-color: var(--block-color); */\n    aspect-ratio: 1;\n    flex: 0 0 auto;\n    background-color: var(--accent-3);\n    aspect-ratio: 1;\n    /* border: 1px solid var(--secondary-1); */\n    border-radius: 5px;\n    border: 0.2rem solid var(--primary-1);\n}\n\n.ship-block-in-grid {\n    background-color: var(--accent-3) !important;\n    aspect-ratio: 1;\n    flex: 0 0 auto;\n    /* border: 2px solid black !important; */\n}\n\n.board[data-id='2'] .ship-block-in-grid {\n    background-color: var(--accent-2) !important;\n}\n\n.board[data-id='2'] .ship-block-in-grid:hover {\n    background-color: #0034599c !important;\n}\n\n.attacked-ship {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    /* background-color: var(--accent-3) !important; */\n    font-size: 2em;\n    background-color: rgba(165, 42, 42, 0.308) !important;\n}\n\n.board[data-id='2'] .attacked-ship {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 2em;\n    /* background-color: var(--accent-3) !important; */\n    background-color: rgba(165, 42, 42, 0.308) !important;\n    pointer-events: none !important;\n}\n\n.bad-attack {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    color: black;\n    background-color: black !important;\n    /* background-color: black !important; */\n}\n\n.bad-attack:hover {\n    pointer-events: none !important;\n}\n\n@media (max-width: 1200px) {\n    /* // rules here apply to devices from 993px to 1200px (inclusive) */\n    .container .board {\n        width: 50%;\n    }\n\n    .container .board .grid {\n        width: 90%;\n    }\n\n    .container .board .title {\n        width: 90%;\n    }\n\n    .container .board .ship-yard {\n        width: 90%;\n    }\n}\n@media (max-width: 992px) {\n    /* // rules here apply to devices from 769px to 992px (inclusive) */\n}\n@media (max-width: 768px) {\n    /* // rules here apply to devices from 0px to 768px (inclusive) */\n    .container .board .grid {\n        width: 95%;\n        border-radius: 2px;\n    }\n    .container .board .ship-yard {\n        width: 95%;\n    }\n    .container .board .block {\n        border-radius: 2px;\n        border: 0.15rem solid var(--primary-1);\n    }\n\n    .container .board .ship-yard .ship .ship-block {\n        border-radius: 2px;\n        border: 0.15rem solid var(--primary-1);\n    }\n}\n\n@media (max-width: 600px){\n    /* .container .board .block {\n        border: 0.1rem solid var(--primary-1);\n    }\n\n    .container .board .ship-yard .ship .ship-block {\n        border: 0.1rem solid var(--primary-1);\n    } */\n}\n\n@media (max-width: 576px) {\n    .container .board {\n        width: 100%;\n        gap: 0.5rem;\n    }\n\n    .container .board .title {\n        width: 50%;\n        font-size: 1rem;\n        border: none;\n    }\n    .container .board .grid {\n        width: 50%;\n    }\n\n    .container .board .ship-yard {\n        width: 50%;\n        border-bottom: 1rem solid transparent;\n    }\n}\n\n@media (max-width: 480px) {\n\n    .container .board {\n        width: 100%;\n        gap: 0.5rem;\n    }\n\n    .container .board .title {\n        width: 55%;\n        font-size: 1rem;\n        border: none;\n    }\n    .container .board .grid {\n        width: 55%;\n    }\n\n    .container .board .ship-yard {\n        width: 55%;\n        border-bottom: 1rem solid transparent;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../../node_modules/normalize.css/normalize.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_crosshair_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/crosshair.png */ "./src/images/crosshair.png");
// Imports





var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_2__.default);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Rye&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(_images_crosshair_png__WEBPACK_IMPORTED_MODULE_4__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --primary-1: #00171f;\n    --primary-2: #ffffff;\n    --secondary-1: #003459;\n    --accent-1: #3F6C51;\n    --accent-2: #00a8e8;\n    --font: 'Rye', cursive;\n}\n\n* {\n    /* border: 1px solid white; */\n    margin: 0 !important;\n    padding: 0 !important;\n    box-sizing: border-box;\n}\nbody {\n    background-color: var(--primary-1);\n    color: var(--primary-2);\n    font-size: 62.5%;\n    font-family: var(--font);\n}\n\n\n\n\n/* .container .board[data-id = '2']{\n    margin-right: auto;\n} */\n\n.container .board .grid[data-id='2'] .block:hover {\n    cursor: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "), auto;\n}\n\n.container .board .grid[data-id='2'] .ship-block-in-grid:hover {\n    cursor: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "), auto;\n}\n\n.container .board .grid[data-id='2'] .ai-ship:hover {\n    cursor: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "), auto;\n}\n\n\n\n\n\n[draggable='true'] {\n    cursor: move;\n}\n\n\n.bad-attack {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 200%;\n    /* background-color: black !important; */\n}\n\n/* TEMPORARY */\n.block-text {\n    display: flex;\n    justify-content: center;\n    font-family: serif;\n    align-items: center;\n    font-size: 150%;\n    padding: 0;\n    /* font-size: 200%; */\n    /* font-size: 1.2rem; */\n}\n", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"AAGA;IACI,oBAAoB;IACpB,oBAAoB;IACpB,sBAAsB;IACtB,mBAAmB;IACnB,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,6BAA6B;IAC7B,oBAAoB;IACpB,qBAAqB;IACrB,sBAAsB;AAC1B;AACA;IACI,kCAAkC;IAClC,uBAAuB;IACvB,gBAAgB;IAChB,wBAAwB;AAC5B;;;;;AAKA;;GAEG;;AAEH;IACI,qDAA4C;AAChD;;AAEA;IACI,qDAA4C;AAChD;;AAEA;IACI,qDAA4C;AAChD;;;;;;AAMA;IACI,YAAY;AAChB;;;AAGA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,wCAAwC;AAC5C;;AAEA,cAAc;AACd;IACI,aAAa;IACb,uBAAuB;IACvB,kBAAkB;IAClB,mBAAmB;IACnB,eAAe;IACf,UAAU;IACV,qBAAqB;IACrB,uBAAuB;AAC3B","sourcesContent":["@import '~normalize.css/normalize.css';\n@import url('https://fonts.googleapis.com/css2?family=Rye&display=swap');\n\n:root {\n    --primary-1: #00171f;\n    --primary-2: #ffffff;\n    --secondary-1: #003459;\n    --accent-1: #3F6C51;\n    --accent-2: #00a8e8;\n    --font: 'Rye', cursive;\n}\n\n* {\n    /* border: 1px solid white; */\n    margin: 0 !important;\n    padding: 0 !important;\n    box-sizing: border-box;\n}\nbody {\n    background-color: var(--primary-1);\n    color: var(--primary-2);\n    font-size: 62.5%;\n    font-family: var(--font);\n}\n\n\n\n\n/* .container .board[data-id = '2']{\n    margin-right: auto;\n} */\n\n.container .board .grid[data-id='2'] .block:hover {\n    cursor: url('../images/crosshair.png'), auto;\n}\n\n.container .board .grid[data-id='2'] .ship-block-in-grid:hover {\n    cursor: url('../images/crosshair.png'), auto;\n}\n\n.container .board .grid[data-id='2'] .ai-ship:hover {\n    cursor: url('../images/crosshair.png'), auto;\n}\n\n\n\n\n\n[draggable='true'] {\n    cursor: move;\n}\n\n\n.bad-attack {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 200%;\n    /* background-color: black !important; */\n}\n\n/* TEMPORARY */\n.block-text {\n    display: flex;\n    justify-content: center;\n    font-family: serif;\n    align-items: center;\n    font-size: 150%;\n    padding: 0;\n    /* font-size: 200%; */\n    /* font-size: 1.2rem; */\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./src/css/container.css":
/*!*******************************!*\
  !*** ./src/css/container.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_container_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./container.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/container.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_container_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_container_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/images/crosshair.png":
/*!**********************************!*\
  !*** ./src/images/crosshair.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "83604b227481181d60be.png";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_container_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/container.css */ "./src/css/container.css");
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/index.css */ "./src/css/index.css");
/* harmony import */ var _modules_Controllers_Game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Controllers/Game */ "./src/modules/Controllers/Game.js");



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRoSG9sZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NBcHBseURlc2NyaXB0b3JHZXQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQXBwbHlEZXNjcmlwdG9yU2V0LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc1ByaXZhdGVGaWVsZEdldC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NQcml2YXRlRmllbGRTZXQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbW9kdWxlcy9Db250cm9sbGVycy9BcHBsaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbW9kdWxlcy9Db250cm9sbGVycy9CbG9ja0NsaWNrLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9tb2R1bGVzL0NvbnRyb2xsZXJzL0dhbWUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL21vZHVsZXMvTW9kZWxzL0FJLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9tb2R1bGVzL01vZGVscy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL21vZHVsZXMvTW9kZWxzL0h1bnRQYXJpdHlBSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbW9kdWxlcy9Nb2RlbHMvSHVudFByb2JBSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbW9kdWxlcy9Nb2RlbHMvUGxheWVyLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9tb2R1bGVzL01vZGVscy9TaGlwLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9tb2R1bGVzL1ZpZXdzL1VJLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9tb2R1bGVzL1ZpZXdzL1VJZm9yQUlTaGlwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbW9kdWxlcy9WaWV3cy9jaGVja051bWJlck9mU2hpcHNPZkh1bWFuLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9tb2R1bGVzL1ZpZXdzL2RyYWdGdW5jdGlvbkZvckh1bWFuLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9tb2R1bGVzL1ZpZXdzL3JvdGF0ZVNoaXAuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvY3NzL2NvbnRhaW5lci5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2Nzcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2Nzcy9jb250YWluZXIuY3NzPzMzOGIiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2Nzcy9pbmRleC5jc3M/ZjdlYSIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiQXBwbGljYXRpb24iLCJudW1iZXJPZlNoaXBzIiwibGVuZ3Roc09mU2hpcHMiLCJzaGlwc09mR3JpZDEiLCJzaGlwc09mR3JpZDIiLCJwbGF5ZXIxIiwidW5kZWZpbmVkIiwicGxheWVyMiIsImN1cnJlbnRQbGF5ZXIiLCJ1cGRhdGVQbGF5ZXIiLCJzZXRCbG9ja0NsaWNrTGlzdGVuZXJzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImJsb2NrIiwiYWRkRXZlbnRMaXN0ZW5lciIsImJsb2NrQ2xpY2tIYW5kbGVyIiwiZSIsInRhcmdldCIsImdyaWROdW1iZXIiLCJwYXJzZUludCIsInBhcmVudEVsZW1lbnQiLCJnZXRBdHRyaWJ1dGUiLCJpc1ZhbGlkUGxheWVyQ2xpY2siLCJnZXRCbG9ja0Nvb3JkcyIsIngiLCJ5IiwibWF0Y2hlcyIsInNoaXBCbG9ja0NsaWNrSGFuZGxlciIsImdyaWRCbG9ja0NsaWNrSGFuZGxlciIsImNvbnNvbGUiLCJsb2ciLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZ3JpZEJsb2NrIiwiY2xhc3NMaXN0IiwiYWRkIiwidGV4dENvbnRlbnQiLCJzaGlwQmxvY2siLCJib2FyZEh1bWFuIiwiR2FtZWJvYXJkIiwiYm9hcmRBSSIsInNsZWVwIiwiZGVsYXkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJodW1hbiIsIlBsYXllciIsImFpIiwiSHVudFByb2JBSSIsInNldHVwIiwiZGlzcGxheUdhbWVJbnRlcmZhY2UiLCJsZXRIdW1hblJvdGF0ZVNoaXBzIiwibGV0SHVtYW5EcmFnU2hpcHMiLCJwbGFjZVNoaXBzIiwidXBkYXRlVUlXaXRoQUlTaGlwcyIsImFyZUFsbFNoaXBzUGxhY2VkIiwidGhlbiIsInN0YXJ0R2FtZSIsInVwZGF0ZUdhbWUiLCJpc0dhbWVPdmVyIiwiaGF2ZUFsbFN1bmsiLCJ3aG9Xb24iLCJoYXNXb24iLCJ3aW5uZXIiLCJzdW0iLCJib2FyZE51bSIsInRpdGxlIiwicXVlcnlTZWxlY3RvciIsImNsZWFudXAiLCJwbGF5IiwiQUkiLCJuYW1lIiwib3duQm9hcmQiLCJvcHBCb2FyZCIsImF0dGFja2VkQmxvY2tzIiwibGVuIiwiaW5kZXgiLCJpbmNsdWRlcyIsInB1c2giLCJzaXplIiwiZ3JpZCIsImF0dGFja2VkIiwiY2xpY2siLCJsZW5ndGgiLCJvcmllbnRhdGlvbiIsInNoaXAiLCJTaGlwIiwicGxhY2VTaGlwIiwibWluIiwibWF4IiwiTWF0aCIsImNlaWwiLCJmbG9vciIsInJhbmRvbSIsInNoaXBDb3VudCIsImlzVmFsaWRDb29yZCIsIkVycm9yIiwiaGl0IiwiaSIsImoiLCJpc1N1bmsiLCJtYXQiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJIdW50UGFyaXR5QUkiLCJyYW5kb21JbmRleCIsInNwbGljZSIsIndhc1N1Y2Nlc3NmdWxsQXR0YWNrIiwiU21hcnRlc3RBSSIsIm1heFgiLCJtYXhZIiwibWF0cml4IiwidGFibGUiLCJpbmRleE9mIiwicHJvYkRhdGEiLCJmbGFnIiwiayIsInJlY2VpdmVBdHRhY2siLCJoaXRJbmRpY2VzIiwiZGlzcGxheUdyaWRzIiwiZnJvbSIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsImRpc3BsYXlTaGlwcyIsImxlbmd0aHMiLCJhZGRTaGlwdG9VSSIsIm1vZGlmeVNoaXBXaWR0aCIsInN0eWxlIiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsInNoaXBZYXJkIiwieWFyZE51bWJlciIsIndpbmRvdyIsIm9ucmVzaXplIiwiZGlzcGxheSIsInJlamVjdCIsIndhaXRGb3JBbGxTaGlwc1RvQmVQbGFjZWQiLCJkcmFnZ2VkU2hpcCIsImRyYWdnZWRTaGlwTGVuZ3RoIiwic2hpcEJsb2NrTnVtYmVyRHJhZ2dlZCIsImRyYWdnZWRTaGlwRGlyZWN0aW9uIiwiaGFuZGxlRHJhZ1N0YXJ0IiwiaGFuZGxlRHJhZ0VuZCIsInN0b3BQcm9wYWdhdGlvbiIsIm9wYWNpdHkiLCJjaGlsZEVsZW1lbnRDb3VudCIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJnZXRDb21wdXRlZFN0eWxlIiwiZmxleERpcmVjdGlvbiIsImJsb2NrV2lkdGgiLCJvZmZzZXRYIiwiYmxvY2tIZWlnaHQiLCJoZWlnaHQiLCJvZmZzZXRZIiwicmVzdG9yZU9wYWNpdHkiLCJwcmV2ZW50RGVmYXVsdCIsImVsZW0iLCJlbGVtZW50c0Zyb21Qb2ludCIsImNsaWVudFgiLCJjbGllbnRZIiwiZ2V0VUlDb29yZHMiLCJyb3ciLCJjb2x1bW4iLCJzdGFydGluZ0Jsb2NrIiwiZ2V0U3RhcnRpbmdCbG9jayIsInBhaW50U2hpcE9uR3JpZCIsImlubmVyV2lkdGgiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsImJvZHkiLCJ2aXNpYmlsaXR5IiwiZXJyIiwibWVzc2FnZSIsImRpcmVjdGlvbiIsImN1cnJlbnRCbG9jayIsImRyYWciLCJyb3RhdGVTaGlwIiwiY3VycmVudERpcmVjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmOztBQUVBLHdDQUF3QyxTQUFTO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNSZTtBQUNmO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7O0FDRmU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRWU7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QUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtB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QUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFF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O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7V0FDQSxDQUFDLEk7Ozs7O1dDUEQsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esa0M7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufSIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0FwcGx5RGVzY3JpcHRvckdldChyZWNlaXZlciwgZGVzY3JpcHRvcikge1xuICBpZiAoZGVzY3JpcHRvci5nZXQpIHtcbiAgICByZXR1cm4gZGVzY3JpcHRvci5nZXQuY2FsbChyZWNlaXZlcik7XG4gIH1cblxuICByZXR1cm4gZGVzY3JpcHRvci52YWx1ZTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NBcHBseURlc2NyaXB0b3JTZXQocmVjZWl2ZXIsIGRlc2NyaXB0b3IsIHZhbHVlKSB7XG4gIGlmIChkZXNjcmlwdG9yLnNldCkge1xuICAgIGRlc2NyaXB0b3Iuc2V0LmNhbGwocmVjZWl2ZXIsIHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWRlc2NyaXB0b3Iud3JpdGFibGUpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gc2V0IHJlYWQgb25seSBwcml2YXRlIGZpZWxkXCIpO1xuICAgIH1cblxuICAgIGRlc2NyaXB0b3IudmFsdWUgPSB2YWx1ZTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvcihyZWNlaXZlciwgcHJpdmF0ZU1hcCwgYWN0aW9uKSB7XG4gIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBcIiArIGFjdGlvbiArIFwiIHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xuICB9XG5cbiAgcmV0dXJuIHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTtcbn0iLCJpbXBvcnQgY2xhc3NBcHBseURlc2NyaXB0b3JHZXQgZnJvbSBcIi4vY2xhc3NBcHBseURlc2NyaXB0b3JHZXQuanNcIjtcbmltcG9ydCBjbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IgZnJvbSBcIi4vY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBjbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IocmVjZWl2ZXIsIHByaXZhdGVNYXAsIFwiZ2V0XCIpO1xuICByZXR1cm4gY2xhc3NBcHBseURlc2NyaXB0b3JHZXQocmVjZWl2ZXIsIGRlc2NyaXB0b3IpO1xufSIsImltcG9ydCBjbGFzc0FwcGx5RGVzY3JpcHRvclNldCBmcm9tIFwiLi9jbGFzc0FwcGx5RGVzY3JpcHRvclNldC5qc1wiO1xuaW1wb3J0IGNsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvciBmcm9tIFwiLi9jbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBjbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IocmVjZWl2ZXIsIHByaXZhdGVNYXAsIFwic2V0XCIpO1xuICBjbGFzc0FwcGx5RGVzY3JpcHRvclNldChyZWNlaXZlciwgZGVzY3JpcHRvciwgdmFsdWUpO1xuICByZXR1cm4gdmFsdWU7XG59IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn0iLCJpbXBvcnQgc2V0UHJvdG90eXBlT2YgZnJvbSBcIi4vc2V0UHJvdG90eXBlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTtcblxuICBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcblxuICB2YXIgX3MsIF9lO1xuXG4gIHRyeSB7XG4gICAgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIjtcbmltcG9ydCBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSBcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufSIsImltcG9ydCBhcnJheVdpdGhIb2xlcyBmcm9tIFwiLi9hcnJheVdpdGhIb2xlcy5qc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheUxpbWl0IGZyb20gXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzXCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCBub25JdGVyYWJsZVJlc3QgZnJvbSBcIi4vbm9uSXRlcmFibGVSZXN0LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCJjb25zdCBBcHBsaWNhdGlvbiA9IHtcbiAgICBudW1iZXJPZlNoaXBzOiA1LFxuICAgIGxlbmd0aHNPZlNoaXBzOiBbMiwgMywgMywgNCwgNV0sXG4gICAgc2hpcHNPZkdyaWQxOiAwLFxuICAgIHNoaXBzT2ZHcmlkMjogMCxcbiAgICBwbGF5ZXIxOiB1bmRlZmluZWQsXG4gICAgcGxheWVyMjogdW5kZWZpbmVkLFxuICAgIGN1cnJlbnRQbGF5ZXI6IHVuZGVmaW5lZCxcbiAgICB1cGRhdGVQbGF5ZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyID1cbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYXllciA9PT0gdGhpcy5wbGF5ZXIxID8gdGhpcy5wbGF5ZXIyIDogdGhpcy5wbGF5ZXIxO1xuICAgIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHBsaWNhdGlvbjtcbiIsImltcG9ydCBBcHBsaWNhdGlvbiBmcm9tICcuL0FwcGxpY2F0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0QmxvY2tDbGlja0xpc3RlbmVycygpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmxvY2snKS5mb3JFYWNoKChibG9jaykgPT4ge1xuICAgICAgICBibG9jay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGJsb2NrQ2xpY2tIYW5kbGVyKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJsb2NrQ2xpY2tIYW5kbGVyKGUpIHtcbiAgICBjb25zdCBibG9jayA9IGUudGFyZ2V0O1xuXG4gICAgY29uc3QgZ3JpZE51bWJlciA9IHBhcnNlSW50KGJsb2NrLnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xuICAgIGlmICghaXNWYWxpZFBsYXllckNsaWNrKGdyaWROdW1iZXIpKSByZXR1cm47IC8vIGlzIHRoZSByaWdodCBwbGF5ZXIgYXR0YWNraW5nIHRoZSByaWdodCBncmlkP1xuICAgIGNvbnN0IFt4LCB5XSA9IGdldEJsb2NrQ29vcmRzKGJsb2NrKTtcbiAgICBBcHBsaWNhdGlvbi5jdXJyZW50UGxheWVyLmF0dGFjayh4IC0gMSwgeSAtIDEpO1xuICAgIGlmIChibG9jay5tYXRjaGVzKCcuc2hpcC1ibG9jay1pbi1ncmlkJykpIHtcbiAgICAgICAgc2hpcEJsb2NrQ2xpY2tIYW5kbGVyKGJsb2NrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBncmlkQmxvY2tDbGlja0hhbmRsZXIoYmxvY2spO1xuICAgICAgICBjb25zb2xlLmxvZygnbGVmdCBncmlkIGJsb2NrIGhhbmRsZXInKTtcbiAgICAgICAgQXBwbGljYXRpb24udXBkYXRlUGxheWVyKCk7IC8vIHVwZGF0ZSBwbGF5ZXIgb25seSB3aGVuIGdyaWQgYmxvY2sgaXMgY2xpY2tlZFxuICAgIH1cblxuICAgIGJsb2NrLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYmxvY2tDbGlja0hhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkUGxheWVyQ2xpY2soZ3JpZE51bWJlcikge1xuICAgIGlmIChncmlkTnVtYmVyID09PSAxICYmIEFwcGxpY2F0aW9uLmN1cnJlbnRQbGF5ZXIgPT09IEFwcGxpY2F0aW9uLnBsYXllcjIpXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIGVsc2UgaWYgKFxuICAgICAgICBncmlkTnVtYmVyID09PSAyICYmXG4gICAgICAgIEFwcGxpY2F0aW9uLmN1cnJlbnRQbGF5ZXIgPT09IEFwcGxpY2F0aW9uLnBsYXllcjFcbiAgICApXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ3JpZEJsb2NrQ2xpY2tIYW5kbGVyKGdyaWRCbG9jaykge1xuICAgIGdyaWRCbG9jay5jbGFzc0xpc3QuYWRkKCdiYWQtYXR0YWNrJyk7XG4gICAgZ3JpZEJsb2NrLnRleHRDb250ZW50ID0gYOKYoO+4j2A7XG59XG5cbmZ1bmN0aW9uIHNoaXBCbG9ja0NsaWNrSGFuZGxlcihzaGlwQmxvY2spIHtcbiAgICBzaGlwQmxvY2suY2xhc3NMaXN0LmFkZCgnYXR0YWNrZWQtc2hpcCcpO1xuICAgIHNoaXBCbG9jay50ZXh0Q29udGVudCA9IGDwn5KlYDtcbiAgICAvL3NoaXBCbG9jay50ZXh0Q29udGVudCA9IGDwn5SlYDtcbn1cblxuZnVuY3Rpb24gZ2V0QmxvY2tDb29yZHMoYmxvY2spIHtcbiAgICBjb25zdCB4ID0gYmxvY2suZ2V0QXR0cmlidXRlKCdkYXRhLXJvdycpO1xuICAgIGNvbnN0IHkgPSBibG9jay5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sdW1uJyk7XG4gICAgcmV0dXJuIFt4LCB5XTtcbn1cbiIsImltcG9ydCAnLi9BcHBsaWNhdGlvbic7XG5pbXBvcnQgbGV0SHVtYW5EcmFnU2hpcHMgZnJvbSAnLi4vVmlld3MvZHJhZ0Z1bmN0aW9uRm9ySHVtYW4nO1xuaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuLi9Nb2RlbHMvR2FtZWJvYXJkJztcbmltcG9ydCBkaXNwbGF5R2FtZUludGVyZmFjZSBmcm9tICcuLi9WaWV3cy9VSSc7XG5pbXBvcnQgYXJlQWxsU2hpcHNQbGFjZWQgZnJvbSAnLi4vVmlld3MvY2hlY2tOdW1iZXJPZlNoaXBzT2ZIdW1hbic7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4uL01vZGVscy9QbGF5ZXInO1xuaW1wb3J0IHVwZGF0ZVVJV2l0aEFJU2hpcHMgZnJvbSAnLi4vVmlld3MvVUlmb3JBSVNoaXBzJztcbmltcG9ydCBBSSBmcm9tICcuLi9Nb2RlbHMvQUknO1xuaW1wb3J0IEh1bnRQYXJpdHlBSSBmcm9tICcuLi9Nb2RlbHMvSHVudFBhcml0eUFJJztcbmltcG9ydCBIdW50UHJvYkFJIGZyb20gJy4uL01vZGVscy9IdW50UHJvYkFJJztcbmltcG9ydCBzZXRCbG9ja0NsaWNrTGlzdGVuZXJzIGZyb20gJy4vQmxvY2tDbGljayc7XG5pbXBvcnQgQXBwbGljYXRpb24gZnJvbSAnLi9BcHBsaWNhdGlvbic7XG5pbXBvcnQgbGV0SHVtYW5Sb3RhdGVTaGlwcyBmcm9tICcuLi9WaWV3cy9yb3RhdGVTaGlwJztcbmltcG9ydCB7IGJsb2NrQ2xpY2tIYW5kbGVyIH0gZnJvbSAnLi9CbG9ja0NsaWNrJztcblxuY29uc3QgYm9hcmRIdW1hbiA9IG5ldyBHYW1lYm9hcmQoMTApO1xuY29uc3QgYm9hcmRBSSA9IG5ldyBHYW1lYm9hcmQoMTApO1xuY29uc3Qgc2xlZXAgPSAoZGVsYXkpID0+IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgZGVsYXkpO1xuICB9KTsgIFxuY29uc3QgaHVtYW4gPSBuZXcgUGxheWVyKCdodW1hbicsIGJvYXJkSHVtYW4sIGJvYXJkQUkpO1xuY29uc3QgYWkgPSBuZXcgSHVudFByb2JBSSgnQUknLCBib2FyZEFJLCBib2FyZEh1bWFuKTtcblxuYXN5bmMgZnVuY3Rpb24gc2V0dXAoKSB7XG4gICAgY29uc29sZS5sb2coJ1NldHVwJyk7XG4gICAgZGlzcGxheUdhbWVJbnRlcmZhY2UoKTtcbiAgICBsZXRIdW1hblJvdGF0ZVNoaXBzKCk7XG4gICAgbGV0SHVtYW5EcmFnU2hpcHMoYm9hcmRIdW1hbik7XG4gICAgYWkucGxhY2VTaGlwcygpO1xuICAgIHVwZGF0ZVVJV2l0aEFJU2hpcHMoYm9hcmRBSSk7XG4gICAgYXdhaXQgYXJlQWxsU2hpcHNQbGFjZWQoKTtcbiAgICBBcHBsaWNhdGlvbi5wbGF5ZXIxID0gaHVtYW47XG4gICAgQXBwbGljYXRpb24ucGxheWVyMiA9IGFpO1xuICAgIEFwcGxpY2F0aW9uLmN1cnJlbnRQbGF5ZXIgPSBodW1hbjsgLy8gaHVtYW4gc3RhcnRzXG59XG5zZXR1cCgpLnRoZW4oKCkgPT4ge1xuICAgIHN0YXJ0R2FtZSgpO1xufSk7XG5cbmZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcbiAgICBjb25zb2xlLmxvZygnU1RBUlQgVEhFIEdBTUUhISEnKTtcbiAgICBzZXRCbG9ja0NsaWNrTGlzdGVuZXJzKCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB1cGRhdGVHYW1lKTtcbn1cblxuZnVuY3Rpb24gaXNHYW1lT3ZlcigpIHtcbiAgICByZXR1cm4gYm9hcmRIdW1hbi5oYXZlQWxsU3VuaygpIHx8IGJvYXJkQUkuaGF2ZUFsbFN1bmsoKTtcbn1cblxuZnVuY3Rpb24gd2hvV29uKCkge1xuICAgIGlmIChodW1hbi5oYXNXb24oKSkgcmV0dXJuIGh1bWFuO1xuICAgIGVsc2UgaWYgKGFpLmhhc1dvbigpKSByZXR1cm4gYWk7XG4gICAgZWxzZSByZXR1cm4gbnVsbDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gdXBkYXRlR2FtZSgpIHtcbiAgICBpZiAoaXNHYW1lT3ZlcigpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdHYW1lIE92ZXInKTtcbiAgICAgICAgY29uc3Qgd2lubmVyID0gd2hvV29uKCk7XG4gICAgICAgIGxldCBib2FyZE51bTtcbiAgICAgICAgbGV0IHN1bSA9IDM7IFxuICAgICAgICBpZiAod2lubmVyID09PSBodW1hbikgYm9hcmROdW0gPSAxO1xuICAgICAgICBlbHNlIGJvYXJkTnVtID0gMjtcbiAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGAuYm9hcmRbZGF0YS1pZCA9ICcke2JvYXJkTnVtfSddIC50aXRsZWBcbiAgICAgICAgKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSAnV0lOTkVSIEZMRUVUJztcbiAgICAgICAgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYC5ib2FyZFtkYXRhLWlkID0gJyR7c3VtIC1ib2FyZE51bX0nXSAudGl0bGVgXG4gICAgICAgICk7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ0xPU0VSIEZMRUVUJztcbiAgICAgICAgY2xlYW51cCgpO1xuICAgIH1cbiAgICBhd2FpdChzbGVlcCwgNTAwKTtcbiAgICBpZiAoQXBwbGljYXRpb24uY3VycmVudFBsYXllciA9PT0gYWkpIHtcbiAgICAgICAgYWkucGxheSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JpZCAuYmxvY2snKS5mb3JFYWNoKChibG9jaykgPT4ge1xuICAgICAgICBibG9jay5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGJsb2NrQ2xpY2tIYW5kbGVyKTtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHVwZGF0ZUdhbWUpO1xufVxuIiwiaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllcic7XG5pbXBvcnQgU2hpcCBmcm9tICcuL1NoaXAnO1xuaW1wb3J0IEFwcGxpY2F0aW9uIGZyb20gJy4uL0NvbnRyb2xsZXJzL0FwcGxpY2F0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQUkgZXh0ZW5kcyBQbGF5ZXIge1xuICAgICNuZXh0WTtcbiAgICAjbmV4dFg7XG4gICAgI29yaWVudGF0aW9ucztcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBvd25Cb2FyZCwgb3BwQm9hcmQpIHtcbiAgICAgICAgc3VwZXIobmFtZSwgb3duQm9hcmQsIG9wcEJvYXJkKTtcbiAgICAgICAgdGhpcy5hdHRhY2tlZEJsb2NrcyA9IFtdO1xuICAgICAgICB0aGlzLiNuZXh0WSA9IG51bGw7XG4gICAgICAgIHRoaXMuI25leHRYID0gbnVsbDtcbiAgICAgICAgdGhpcy4jb3JpZW50YXRpb25zID0geyAwOiAnaG9yaXpvbnRhbCcsIDE6ICd2ZXJ0aWNhbCcgfTtcbiAgICB9XG5cbiAgICBwbGFjZVNoaXBzKCkge1xuICAgICAgICBBcHBsaWNhdGlvbi5sZW5ndGhzT2ZTaGlwcy5mb3JFYWNoKChsZW4pID0+IHRoaXMuI2FkZFNoaXBUb0JvYXJkKGxlbikpO1xuICAgIH1cblxuICAgICNhZGRTaGlwVG9Cb2FyZChsZW5ndGgpIHtcbiAgICAgICAgbGV0IG9yaWVudGF0aW9uID0gdGhpcy4jb3JpZW50YXRpb25zW3RoaXMuI2dldFJhbmRvbUludCgwLCAyKV07XG4gICAgICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcChsZW5ndGgsIG9yaWVudGF0aW9uKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IFt4LCB5XSA9IHRoaXMuI2dldFJhbmRvbUNvb3JkcygpO1xuICAgICAgICAgICAgdGhpcy5vd25Cb2FyZC5wbGFjZVNoaXAoc2hpcCwgeCwgeSk7XG4gICAgICAgICAgICArK0FwcGxpY2F0aW9uLnNoaXBzT2ZHcmlkMjtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdGhpcy4jYWRkU2hpcFRvQm9hcmQobGVuZ3RoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBsYXkoKSB7XG4gICAgICAgIGxldCB4LCB5LCBpbmRleDtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgW3gsIHldID0gdGhpcy4jZ2V0UmFuZG9tQ29vcmRzKCk7XG4gICAgICAgICAgICB5ID0gdGhpcy4jbmV4dFkgPz8geTtcbiAgICAgICAgICAgIHggPSB0aGlzLiNuZXh0WCA/PyB4O1xuICAgICAgICAgICAgaW5kZXggPSB4ICogMTAgKyAoeSArIDEpOyAvLyAwIGZyb20gKDAsMCkgYWJzdHJhY3QgLT4gMSBmcm9tICgxLDEpIHVpXG4gICAgICAgIH0gd2hpbGUgKHRoaXMuYXR0YWNrZWRCbG9ja3MuaW5jbHVkZXMoaW5kZXgpKTtcbiAgICAgICAgdGhpcy5hdHRhY2tlZEJsb2Nrcy5wdXNoKGluZGV4KTtcbiAgICAgICAgY29uc3QgYmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYC5ncmlkW2RhdGEtaWQgPSAnMSddIC5ibG9ja1tkYXRhLXJvdyA9ICcke1xuICAgICAgICAgICAgICAgIHggKyAxXG4gICAgICAgICAgICB9J11bZGF0YS1jb2x1bW4gPSAnJHt5ICsgMX0nXWBcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoYmxvY2subWF0Y2hlcygnLnNoaXAtYmxvY2staW4tZ3JpZCcpKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgeSArIDEgPCB0aGlzLm9wcEJvYXJkLnNpemUgJiZcbiAgICAgICAgICAgICAgICAhdGhpcy5vcHBCb2FyZC5ncmlkW3hdW3kgKyAxXS5hdHRhY2tlZFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4jbmV4dFggPSB4O1xuICAgICAgICAgICAgICAgIHRoaXMuI25leHRZID0geSArIDE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHkgLSAxID49IDAgJiYgIXRoaXMub3BwQm9hcmQuZ3JpZFt4XVt5IC0gMV0uYXR0YWNrZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiNuZXh0WCA9IHg7XG4gICAgICAgICAgICAgICAgdGhpcy4jbmV4dFkgPSB5IC0gMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy4jbmV4dFggPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuI25leHRZID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuI25leHRYID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuI25leHRZID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBibG9jay5jbGljaygpO1xuICAgIH1cblxuICAgICNnZXRSYW5kb21Db29yZHMoKSB7XG4gICAgICAgIGNvbnN0IHggPSB0aGlzLiNnZXRSYW5kb21JbnQoMCwgMTApO1xuICAgICAgICBjb25zdCB5ID0gdGhpcy4jZ2V0UmFuZG9tSW50KDAsIDEwKTtcbiAgICAgICAgcmV0dXJuIFt4LCB5XTtcbiAgICB9XG5cbiAgICAjZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XG4gICAgICAgIG1pbiA9IE1hdGguY2VpbChtaW4pO1xuICAgICAgICBtYXggPSBNYXRoLmZsb29yKG1heCk7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbik7IC8vIFRoZSBtYXhpbXVtIGlzIGV4Y2x1c2l2ZSBhbmQgdGhlIG1pbmltdW0gaXMgaW5jbHVzaXZlXG4gICAgfVxuXG4gICAgI2h1bnQoKSB7fVxuXG4gICAgI2lzVmFsaWRJbmRleCgpIHt9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lYm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKHNpemUpIHtcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICAgICAgdGhpcy5ncmlkID0gdGhpcy4jY3JlYXRlTWF0cml4KHNpemUpO1xuICAgICAgICB0aGlzLnNoaXBDb3VudCA9IDA7XG4gICAgfVxuXG4gICAgI2NyZWF0ZU1hdHJpeChzaXplKSB7XG4gICAgICAgIGNvbnN0IG1hdCA9IG5ldyBBcnJheShzaXplKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgICAgIC8vIHNoaXAgLSBmb3Igc2hpcCBvYmplY3QgaWYgaXQgZXhpc3RzLCBhdHRhY2tlZCAtIGlzQXR0YWNrZWQ/LFxuICAgICAgICAgICAgLy8gaW5kZXggLSByZWxhdGl2ZSBwbGFjZW1lbnQgb2Ygc2hpcCB0aWxlIHdydCB3aG9sZSBzaGlwLCBpZiBpdCBleGlzdHNcbiAgICAgICAgICAgIG1hdFtpXSA9IG5ldyBBcnJheShzaXplKVxuICAgICAgICAgICAgICAgIC5maWxsKClcbiAgICAgICAgICAgICAgICAubWFwKCgpID0+ICh7IHNoaXA6IG51bGwsIGF0dGFja2VkOiBmYWxzZSwgaW5kZXg6IC0xIH0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U2hpcH0gc2hpcCB0byBiZSBwbGFjZWRcbiAgICAgKiBAcGFyYW0ge2ludH0geCBzdGFydGluZyB4IGNvb3JkaW5hdGUgb2Ygc2hpcCBwbGFjZW1lbnRcbiAgICAgKiBAcGFyYW0ge2ludH0geSBzdGFydGluZyB5IGNvb3JkaW5hdGUgb2Ygc2hpcCBwbGFjZW1lbnRcbiAgICAgKi9cbiAgICBwbGFjZVNoaXAoc2hpcCwgeCwgeSkge1xuICAgICAgICBpZiAodGhpcy5pc1ZhbGlkQ29vcmQoc2hpcCwgeCwgeSkpIHtcbiAgICAgICAgICAgIGlmIChzaGlwLm9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpXG4gICAgICAgICAgICAgICAgdGhpcy4jcGxhY2VIb3Jpem9udGFsbHkoc2hpcCwgeCwgeSk7XG4gICAgICAgICAgICBlbHNlIGlmIChzaGlwLm9yaWVudGF0aW9uID09PSAndmVydGljYWwnKVxuICAgICAgICAgICAgICAgIHRoaXMuI3BsYWNlVmVydGljYWxseShzaGlwLCB4LCB5KTtcbiAgICAgICAgICAgIGVsc2UgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIG9yaWVudGF0aW9uJyk7XG4gICAgICAgICAgICB0aGlzLnNoaXBDb3VudCsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIENvb3JkaW5hdGVzIHByb3ZpZGVkJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAjcGxhY2VIb3Jpem9udGFsbHkoc2hpcCwgeCwgeSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZ3JpZFt4XVt5XVsnc2hpcCddID0gc2hpcDtcbiAgICAgICAgICAgIHRoaXMuZ3JpZFt4XVt5XVsnaW5kZXgnXSA9IGk7XG4gICAgICAgICAgICB5Kys7IC8vbW92ZSB0byBuZXh0IGNvbHVtbiBmb3IgbmV4dCB0aWxlIHBsYWNlbWVudFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgI3BsYWNlVmVydGljYWxseShzaGlwLCB4LCB5KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5ncmlkW3hdW3ldWydzaGlwJ10gPSBzaGlwO1xuICAgICAgICAgICAgdGhpcy5ncmlkW3hdW3ldWydpbmRleCddID0gaTtcbiAgICAgICAgICAgIHgrKzsgLy9tb3ZlIHRvIG5leHQgcm93IGZvciBuZXh0IHRpbGUgcGxhY2VtZW50XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc1ZhbGlkQ29vcmQoc2hpcCwgeCwgeSkge1xuICAgICAgICBpZiAoeCA8IDAgfHwgeSA8IDAgfHwgeSA+IHRoaXMuc2l6ZSB8fCB4ID4gdGhpcy5zaXplKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChzaGlwLmxlbmd0aCA+IHRoaXMuc2l6ZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAoc2hpcC5vcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnICYmXG4gICAgICAgICAgICAgICAgdGhpcy4jYXJlVmFsaWRDb29yZEZvckhvcml6b250YWxTaGlwKHNoaXAsIHgsIHkpKSB8fFxuICAgICAgICAgICAgKHNoaXAub3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcgJiZcbiAgICAgICAgICAgICAgICB0aGlzLiNhcmVWYWxpZENvb3JkRm9yVmVydGljYWxTaGlwKHNoaXAsIHgsIHkpKVxuICAgICAgICApXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgI2FyZVZhbGlkQ29vcmRGb3JIb3Jpem9udGFsU2hpcChzaGlwLCB4LCB5KSB7XG4gICAgICAgIGlmICh0aGlzLnNpemUgLSB5IDwgc2hpcC5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ncmlkW3hdW3kgKyBpXVsnc2hpcCddKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgI2FyZVZhbGlkQ29vcmRGb3JWZXJ0aWNhbFNoaXAoc2hpcCwgeCwgeSkge1xuICAgICAgICBpZiAodGhpcy5zaXplIC0geCA8IHNoaXAubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ3JpZFt4ICsgaV1beV1bJ3NoaXAnXSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJlY2VpdmVBdHRhY2soeCwgeSkge1xuICAgICAgICBpZiAoIXRoaXMuZ3JpZFt4XVt5XS5hdHRhY2tlZCkgdGhpcy5ncmlkW3hdW3ldLmF0dGFja2VkID0gdHJ1ZTtcbiAgICAgICAgZWxzZSB0aHJvdyBuZXcgRXJyb3IoJ0FscmVhZHkgYXR0YWNrZWQgcG9pbnQnKTtcbiAgICAgICAgY29uc3Qgc2hpcCA9IHRoaXMuZ3JpZFt4XVt5XS5zaGlwO1xuICAgICAgICBpZiAoc2hpcCkge1xuICAgICAgICAgICAgc2hpcC5oaXQodGhpcy5ncmlkW3hdW3ldLmluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHdhc1N1Y2Nlc3NmdWxsQXR0YWNrKHgsIHkpIHtcbiAgICAgICAgaWYgKHRoaXMuZ3JpZFt4XVt5XVsnYXR0YWNrZWQnXSAmJiB0aGlzLmdyaWRbeF1beV1bJ3NoaXAnXSkgcmV0dXJuIHRydWU7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBoYXZlQWxsU3VuaygpIHtcbiAgICAgICAgaWYgKHRoaXMuc2hpcENvdW50ID09PSAwKSB0aHJvdyBuZXcgRXJyb3IoJ05vIHNoaXBzJyk7XG4gICAgICAgIGNvbnN0IGdyaWQgPSB0aGlzLmdyaWQ7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ3JpZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBncmlkWzBdLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hpcCA9IGdyaWRbaV1bal1bJ3NoaXAnXTtcbiAgICAgICAgICAgICAgICBpZiAoc2hpcCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1pbm9yIG9wdGltaXphdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1vdmUgYWhlYWQgYnkgc2hpcCdzIGxlbmd0aCB0byBub3QgY2hlY2sgdGhlIHNhbWUgaG9yaXpvbnRhbCBzaGlwIHJlcGVhdGVkbHlcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGlwLm9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIGogKz0gc2hpcC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuIiwiaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllcic7XG5pbXBvcnQgU2hpcCBmcm9tICcuL1NoaXAnO1xuaW1wb3J0IEFwcGxpY2F0aW9uIGZyb20gJy4uL0NvbnRyb2xsZXJzL0FwcGxpY2F0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSHVudFBhcml0eUFJIGV4dGVuZHMgUGxheWVyIHtcbiAgICAjb3JpZW50YXRpb25zO1xuICAgICNuZXh0QXR0YWNrcztcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBvd25Cb2FyZCwgb3BwQm9hcmQpIHtcbiAgICAgICAgc3VwZXIobmFtZSwgb3duQm9hcmQsIG9wcEJvYXJkKTtcbiAgICAgICAgdGhpcy4jb3JpZW50YXRpb25zID0geyAwOiAnaG9yaXpvbnRhbCcsIDE6ICd2ZXJ0aWNhbCcgfTtcbiAgICAgICAgdGhpcy4jbmV4dEF0dGFja3MgPSBbXTtcbiAgICB9XG5cbiAgICBwbGFjZVNoaXBzKCkge1xuICAgICAgICBBcHBsaWNhdGlvbi5sZW5ndGhzT2ZTaGlwcy5mb3JFYWNoKChsZW4pID0+IHRoaXMuI2FkZFNoaXBUb0JvYXJkKGxlbikpO1xuICAgIH1cblxuICAgICNhZGRTaGlwVG9Cb2FyZChsZW5ndGgpIHtcbiAgICAgICAgbGV0IG9yaWVudGF0aW9uID0gdGhpcy4jb3JpZW50YXRpb25zW3RoaXMuI2dldFJhbmRvbUludCgwLCAyKV07XG4gICAgICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcChsZW5ndGgsIG9yaWVudGF0aW9uKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IFt4LCB5XSA9IHRoaXMuI2dldFJhbmRvbUNvb3JkcygpO1xuICAgICAgICAgICAgdGhpcy5vd25Cb2FyZC5wbGFjZVNoaXAoc2hpcCwgeCwgeSk7XG4gICAgICAgICAgICArK0FwcGxpY2F0aW9uLnNoaXBzT2ZHcmlkMjtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdGhpcy4jYWRkU2hpcFRvQm9hcmQobGVuZ3RoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBsYXkoKSB7XG4gICAgICAgIGxldCB4LCB5LCBpbmRleDtcbiAgICAgICAgaWYgKHRoaXMuI25leHRBdHRhY2tzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCByYW5kb21JbmRleCA9IHRoaXMuI2dldFJhbmRvbUludCgwLCB0aGlzLiNuZXh0QXR0YWNrcy5sZW5ndGgpO1xuICAgICAgICAgICAgW3gsIHldID0gdGhpcy4jbmV4dEF0dGFja3Muc3BsaWNlKHJhbmRvbUluZGV4LCAxKVswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICBbeCwgeV0gPSB0aGlzLiNnZXRSYW5kb21Db29yZHMoKTtcbiAgICAgICAgICAgIH0gd2hpbGUgKFxuICAgICAgICAgICAgICAgICF0aGlzLiNpc1ZhbGlkSW5kZXhUb0F0dGFjayh4LCB5KSB8fFxuICAgICAgICAgICAgICAgICF0aGlzLiNvYmV5UGFyaXR5KHgsIHkpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGAuZ3JpZFtkYXRhLWlkID0gJzEnXSBcbiAgICAgICAgICAgICAuYmxvY2tbZGF0YS1yb3cgPSAnJHt4ICsgMX0nXVtkYXRhLWNvbHVtbiA9ICcke3kgKyAxfSddYFxuICAgICAgICApO1xuXG4gICAgICAgIGlmICh0aGlzLm9wcEJvYXJkLndhc1N1Y2Nlc3NmdWxsQXR0YWNrKHgsIHkpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy4jaXNWYWxpZEluZGV4VG9BdHRhY2soeCwgeSArIDEpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4jbmV4dEF0dGFja3MucHVzaChbeCwgeSArIDFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLiNpc1ZhbGlkSW5kZXhUb0F0dGFjayh4LCB5IC0gMSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiNuZXh0QXR0YWNrcy5wdXNoKFt4LCB5IC0gMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuI2lzVmFsaWRJbmRleFRvQXR0YWNrKHggKyAxLCB5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuI25leHRBdHRhY2tzLnB1c2goW3ggKyAxLCB5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy4jaXNWYWxpZEluZGV4VG9BdHRhY2soeCAtIDEsIHkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4jbmV4dEF0dGFja3MucHVzaChbeCAtIDEsIHldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBibG9jay5jbGljaygpO1xuICAgIH1cblxuICAgICNnZXRSYW5kb21Db29yZHMoKSB7XG4gICAgICAgIGNvbnN0IHggPSB0aGlzLiNnZXRSYW5kb21JbnQoMCwgMTApO1xuICAgICAgICBjb25zdCB5ID0gdGhpcy4jZ2V0UmFuZG9tSW50KDAsIDEwKTtcbiAgICAgICAgcmV0dXJuIFt4LCB5XTtcbiAgICB9XG5cbiAgICAjZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XG4gICAgICAgIG1pbiA9IE1hdGguY2VpbChtaW4pO1xuICAgICAgICBtYXggPSBNYXRoLmZsb29yKG1heCk7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbik7IC8vIFRoZSBtYXhpbXVtIGlzIGV4Y2x1c2l2ZSBhbmQgdGhlIG1pbmltdW0gaXMgaW5jbHVzaXZlXG4gICAgfVxuXG4gICAgI2lzVmFsaWRJbmRleFRvQXR0YWNrKHgsIHkpIHtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IHRoaXMub3duQm9hcmQuc2l6ZTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIHggPCBzaXplICYmXG4gICAgICAgICAgICB4ID49IDAgJiZcbiAgICAgICAgICAgIHkgPCBzaXplICYmXG4gICAgICAgICAgICB5ID49IDAgJiZcbiAgICAgICAgICAgICF0aGlzLm9wcEJvYXJkLmdyaWRbeF1beV1bJ2F0dGFja2VkJ11cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAjb2JleVBhcml0eSh4LCB5KSB7XG4gICAgICAgIHggPSB4ICsgMTtcbiAgICAgICAgeSA9IHkgKyAxO1xuICAgICAgICBjb25zdCBpbmRleCA9ICh4IC0gMSkgKiAxMCArIHk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAoaW5kZXggJSAyID09PSAwICYmIHggJSAyICE9PSAwKSB8fCAoaW5kZXggJSAyICE9PSAwICYmIHggJSAyID09PSAwKVxuICAgICAgICApO1xuICAgIH1cbn1cbiIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXInO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9TaGlwJztcbmltcG9ydCBBcHBsaWNhdGlvbiBmcm9tICcuLi9Db250cm9sbGVycy9BcHBsaWNhdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNtYXJ0ZXN0QUkgZXh0ZW5kcyBQbGF5ZXIge1xuICAgICNvcmllbnRhdGlvbnM7XG4gICAgI25leHRBdHRhY2tzO1xuICAgICNwcm9iRGF0YTsgLy8gc3RvcmUgcHJvYmFiaWxpdHkgZGF0YVxuICAgICNsZW5ndGhzO1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIG93bkJvYXJkLCBvcHBCb2FyZCkge1xuICAgICAgICBzdXBlcihuYW1lLCBvd25Cb2FyZCwgb3BwQm9hcmQpO1xuICAgICAgICB0aGlzLiNvcmllbnRhdGlvbnMgPSB7IDA6ICdob3Jpem9udGFsJywgMTogJ3ZlcnRpY2FsJyB9O1xuICAgICAgICB0aGlzLiNuZXh0QXR0YWNrcyA9IFtdO1xuICAgICAgICB0aGlzLiNsZW5ndGhzID0gQXBwbGljYXRpb24ubGVuZ3Roc09mU2hpcHMuc2xpY2UoKTtcbiAgICAgICAgdGhpcy4jcHJvYkRhdGEgPSB7XG4gICAgICAgICAgICBtYXhYOiAwLFxuICAgICAgICAgICAgbWF4WTogMCxcbiAgICAgICAgICAgIG1hdHJpeDogdGhpcy4jY3JlYXRlTWF0cml4KDEwKSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwbGFjZVNoaXBzKCkge1xuICAgICAgICBBcHBsaWNhdGlvbi5sZW5ndGhzT2ZTaGlwcy5mb3JFYWNoKChsZW4pID0+IHRoaXMuI2FkZFNoaXBUb0JvYXJkKGxlbikpO1xuICAgIH1cblxuICAgICNhZGRTaGlwVG9Cb2FyZChsZW5ndGgpIHtcbiAgICAgICAgbGV0IG9yaWVudGF0aW9uID0gdGhpcy4jb3JpZW50YXRpb25zW3RoaXMuI2dldFJhbmRvbUludCgwLCAyKV07XG4gICAgICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcChsZW5ndGgsIG9yaWVudGF0aW9uKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IFt4LCB5XSA9IHRoaXMuI2dldFJhbmRvbUNvb3JkcygpO1xuICAgICAgICAgICAgdGhpcy5vd25Cb2FyZC5wbGFjZVNoaXAoc2hpcCwgeCwgeSk7XG4gICAgICAgICAgICArK0FwcGxpY2F0aW9uLnNoaXBzT2ZHcmlkMjtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdGhpcy4jYWRkU2hpcFRvQm9hcmQobGVuZ3RoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBsYXkoKSB7XG4gICAgICAgIGxldCB4LCB5O1xuICAgICAgICBpZiAodGhpcy4jbmV4dEF0dGFja3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IHJhbmRvbUluZGV4ID0gdGhpcy4jZ2V0UmFuZG9tSW50KDAsIHRoaXMuI25leHRBdHRhY2tzLmxlbmd0aCk7XG4gICAgICAgICAgICBbeCwgeV0gPSB0aGlzLiNuZXh0QXR0YWNrcy5zcGxpY2UocmFuZG9tSW5kZXgsIDEpWzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4jdXBkYXRlUHJvYmFiaWxpdHlEaXN0cmlidXRpb24oKTtcbiAgICAgICAgICAgIGNvbnNvbGUudGFibGUodGhpcy4jcHJvYkRhdGEubWF0cml4KTtcbiAgICAgICAgICAgIHggPSB0aGlzLiNwcm9iRGF0YS5tYXhYO1xuICAgICAgICAgICAgeSA9IHRoaXMuI3Byb2JEYXRhLm1heFk7XG4gICAgICAgICAgICB0aGlzLiNwcm9iRGF0YS5tYXRyaXggPSB0aGlzLiNjcmVhdGVNYXRyaXgoMTApOyAvLyByZXNldCBtYXRyaXggZm9yIG5leHQgdGltZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBibG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgLmdyaWRbZGF0YS1pZCA9ICcxJ10gXG4gICAgICAgICAgICAgLmJsb2NrW2RhdGEtcm93ID0gJyR7eCArIDF9J11bZGF0YS1jb2x1bW4gPSAnJHt5ICsgMX0nXWBcbiAgICAgICAgKTtcbiAgICAgICAgYmxvY2suY2xpY2soKTtcbiAgICAgICAgaWYgKHRoaXMub3BwQm9hcmQud2FzU3VjY2Vzc2Z1bGxBdHRhY2soeCwgeSkpIHtcbiAgICAgICAgICAgIC8vIGlmIGF0dGFjayB3YXMgc3VjY2Vzc2Z1bCBhbmQgYSBzaGlwIHdhcyBmb3VuZCwgcmVtb3ZlIHRoYXQgc2hpcCBmcm9tIHRoZSBsaXN0IG9mIHNoaXBzXG4gICAgICAgICAgICBpZiAodGhpcy5vcHBCb2FyZC5ncmlkW3hdW3ldWydzaGlwJ10uaXNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzaGlwID0gdGhpcy5vcHBCb2FyZC5ncmlkW3hdW3ldWydzaGlwJ107XG4gICAgICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gc2hpcC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLiNsZW5ndGhzLmluZGV4T2YobGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnKioqKipUTyBSRU1PVkUgU0hJUCBPRiBMRU5HVEgqKioqJywgbGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI2xlbmd0aHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vdyByZW1haW5pbmcgbGVuZ2h0cyBhcmUgJywgdGhpcy4jbGVuZ3Rocyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy4jaXNWYWxpZEluZGV4VG9BdHRhY2soeCwgeSArIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI25leHRBdHRhY2tzLnB1c2goW3gsIHkgKyAxXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLiNpc1ZhbGlkSW5kZXhUb0F0dGFjayh4LCB5IC0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jbmV4dEF0dGFja3MucHVzaChbeCwgeSAtIDFdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuI2lzVmFsaWRJbmRleFRvQXR0YWNrKHggKyAxLCB5KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiNuZXh0QXR0YWNrcy5wdXNoKFt4ICsgMSwgeV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy4jaXNWYWxpZEluZGV4VG9BdHRhY2soeCAtIDEsIHkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI25leHRBdHRhY2tzLnB1c2goW3ggLSAxLCB5XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgI2dldFJhbmRvbUNvb3JkcygpIHtcbiAgICAgICAgY29uc3QgeCA9IHRoaXMuI2dldFJhbmRvbUludCgwLCAxMCk7XG4gICAgICAgIGNvbnN0IHkgPSB0aGlzLiNnZXRSYW5kb21JbnQoMCwgMTApO1xuICAgICAgICByZXR1cm4gW3gsIHldO1xuICAgIH1cblxuICAgICNnZXRSYW5kb21JbnQobWluLCBtYXgpIHtcbiAgICAgICAgbWluID0gTWF0aC5jZWlsKG1pbik7XG4gICAgICAgIG1heCA9IE1hdGguZmxvb3IobWF4KTtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKTsgLy8gVGhlIG1heGltdW0gaXMgZXhjbHVzaXZlIGFuZCB0aGUgbWluaW11bSBpcyBpbmNsdXNpdmVcbiAgICB9XG5cbiAgICAjaXNWYWxpZEluZGV4VG9BdHRhY2soeCwgeSkge1xuICAgICAgICBjb25zdCBzaXplID0gdGhpcy5vd25Cb2FyZC5zaXplO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgeCA8IHNpemUgJiZcbiAgICAgICAgICAgIHggPj0gMCAmJlxuICAgICAgICAgICAgeSA8IHNpemUgJiZcbiAgICAgICAgICAgIHkgPj0gMCAmJlxuICAgICAgICAgICAgIXRoaXMub3BwQm9hcmQuZ3JpZFt4XVt5XVsnYXR0YWNrZWQnXVxuICAgICAgICApO1xuICAgIH1cblxuICAgICN1cGRhdGVQcm9iYWJpbGl0eURpc3RyaWJ1dGlvbigpIHtcbiAgICAgICAgY29uc3QgcHJvYkRhdGEgPSB0aGlzLiNwcm9iRGF0YTtcbiAgICAgICAgY29uc3QgbWF0cml4ID0gcHJvYkRhdGEubWF0cml4O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBwb2ludCB3YXMgYXR0YWNrZWQgYW5kIGhhZCBhIHNoaXAgd2hpY2ggaGFzIGFscmVhZHkgc3VuaywgdGhlcmUncyBubyBwb2ludCBvZiBldmFsdXRpbmcgaXQ7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3BwQm9hcmQuZ3JpZFtpXVtqXVsnYXR0YWNrZWQnXSkge1xuICAgICAgICAgICAgICAgICAgICBtYXRyaXhbaV1bal0gPSAwO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy4jbGVuZ3Rocy5mb3JFYWNoKChsZW5ndGgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgc2hpcCBjYW4gYmUgcGxhY2VkIGF0IHRoZSBwb3NpdGlvbiBob3Jpem9udGFsbHlcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZsYWcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiBpdCBlbmNvdW50ZXJzIGFuIG92ZXJsZm93aW5nIGJsb2NrIG9yIGEgYmxvY2sgdGhhdCB3YXMgYXR0YWNrZWQgYnV0IG5vdCBhIHNoaXBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy4jaXNWYWxpZEluZGV4KGksIGogKyBrKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLm9wcEJvYXJkLmdyaWRbaV1baiArIGtdWydhdHRhY2tlZCddICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLm9wcEJvYXJkLmdyaWRbaV1baiArIGtdWydzaGlwJ10pIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMub3BwQm9hcmQuZ3JpZFtpXVtqICsga11bJ2F0dGFja2VkJ10gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHBCb2FyZC5ncmlkW2ldW2ogKyBrXVsnc2hpcCddLmlzU3VuaygpKVxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChmbGFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3BwQm9hcmQuZ3JpZFtpXVtqICsga11bJ2F0dGFja2VkJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0cml4W2ldW2ogKyBrXSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0cml4W2ldW2ogKyBrXSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHNoaXAgY2FuIGJlIHBsYWNlZCBhdCB0aGUgcG9zaXRpb24gdmVydGljYWxseVxuICAgICAgICAgICAgICAgICAgICBmbGFnID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBsZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLiNpc1ZhbGlkSW5kZXgoaSArIGssIGopIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMub3BwQm9hcmQuZ3JpZFtpICsga11bal1bJ2F0dGFja2VkJ10gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMub3BwQm9hcmQuZ3JpZFtpICsga11bal1bJ3NoaXAnXSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5vcHBCb2FyZC5ncmlkW2kgKyBrXVtqXVsnYXR0YWNrZWQnXSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wcEJvYXJkLmdyaWRbaSArIGtdW2pdWydzaGlwJ10uaXNTdW5rKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGFnID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoZmxhZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBsZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wcEJvYXJkLmdyaWRbaSArIGtdW2pdWydhdHRhY2tlZCddKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdHJpeFtpICsga11bal0gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdHJpeFtpICsga11bal0rKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgbWF0cml4W2ldW2pdID5cbiAgICAgICAgICAgICAgICAgICAgbWF0cml4W3RoaXMuI3Byb2JEYXRhLm1heFhdW3RoaXMuI3Byb2JEYXRhLm1heFldXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI3Byb2JEYXRhLm1heFggPSBpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiNwcm9iRGF0YS5tYXhZID0gajtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAjY3JlYXRlTWF0cml4KHNpemUpIHtcbiAgICAgICAgY29uc3QgbWF0ID0gbmV3IEFycmF5KHNpemUpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgbWF0W2ldID0gbmV3IEFycmF5KHNpemUpLmZpbGwoMCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1hdDtcbiAgICB9XG5cbiAgICAjaXNWYWxpZEluZGV4KHgsIHkpIHtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IHRoaXMub3duQm9hcmQuc2l6ZTtcbiAgICAgICAgcmV0dXJuIHggPCBzaXplICYmIHggPj0gMCAmJiB5IDwgc2l6ZSAmJiB5ID49IDA7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBvd25Cb2FyZCwgb3BwQm9hcmQpIHtcbiAgICAgICAgaWYgKCFvd25Cb2FyZCkgdGhyb3cgJ05vIGJvYXJkIGZvciBwbGF5ZXInO1xuICAgICAgICBpZiAoIW9wcEJvYXJkKSB0aHJvdyAnTm8gb3Bwb25lbnQgYm9hcmQgYWNjZXNzJztcbiAgICAgICAgdGhpcy5vd25Cb2FyZCA9IG93bkJvYXJkO1xuICAgICAgICB0aGlzLm9wcEJvYXJkID0gb3BwQm9hcmQ7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxuXG4gICAgYXR0YWNrKHgsIHkpIHtcbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5uYW1lfSBhdHRhY2tlZCAoJHt4fSwgJHt5fSlgKTtcbiAgICAgICAgdGhpcy5vcHBCb2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgIH1cblxuICAgIGhhc1dvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3BwQm9hcmQuaGF2ZUFsbFN1bmsoKTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobGVuZ3RoLCBvcmllbnRhdGlvbiA9IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgaWYgKGxlbmd0aCA8PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGxlbmd0aCBvZiBzaGlwXCIpO1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMuaGl0SW5kaWNlcyA9IFtdO1xuICAgIHRoaXMub3JpZW50YXRpb24gPSBvcmllbnRhdGlvbjsgXG4gIH1cblxuICBoaXQoaW5kZXgpIHtcbiAgICBpZiAodGhpcy4jaXNWYWxpZEluZGV4KGluZGV4KSAmJiAhdGhpcy5oaXRJbmRpY2VzLmluY2x1ZGVzKGluZGV4KSlcbiAgICAgIHRoaXMuaGl0SW5kaWNlcy5wdXNoKGluZGV4KTtcbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICByZXR1cm4gdGhpcy5sZW5ndGggPT09IHRoaXMuaGl0SW5kaWNlcy5sZW5ndGg7XG4gIH1cblxuICAjaXNWYWxpZEluZGV4KGluZGV4KSB7XG4gICAgcmV0dXJuIGluZGV4IDwgdGhpcy5sZW5ndGggJiYgaW5kZXggPj0gMDtcbiAgfVxufVxuIiwiaW1wb3J0IEFwcGxpY2F0aW9uIGZyb20gJy4uL0NvbnRyb2xsZXJzL0FwcGxpY2F0aW9uJztcblxuXG4vLyBBZGQgMTAqMTAgYmxvY2tzIHRvIHRoZSBncmlkXG5mdW5jdGlvbiBkaXNwbGF5R3JpZHMoKSB7XG4gICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29udGFpbmVyIC5ib2FyZCAuZ3JpZCcpKS5tYXAoXG4gICAgICAgIChncmlkKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBibG9jay5jbGFzc0xpc3QuYWRkKCdibG9jaycpO1xuICAgICAgICAgICAgICAgIGJsb2NrLnNldEF0dHJpYnV0ZSgnZGF0YS1jb2x1bW4nLCAoaSAlIDEwKSArIDEpO1xuICAgICAgICAgICAgICAgIGJsb2NrLnNldEF0dHJpYnV0ZSgnZGF0YS1udW1iZXInLCBpICsgMSk7XG4gICAgICAgICAgICAgICAgYmxvY2suc2V0QXR0cmlidXRlKCdkYXRhLXJvdycsIE1hdGguZmxvb3IoaSAvIDEwICsgMSkpO1xuICAgICAgICAgICAgICAgIGdyaWQuYXBwZW5kQ2hpbGQoYmxvY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVNoaXBzKGxlbmd0aHMpIHtcbiAgICBsZW5ndGhzLmZvckVhY2goKGxlbikgPT4gYWRkU2hpcHRvVUkobGVuKSk7XG59XG5cbmZ1bmN0aW9uIG1vZGlmeVNoaXBXaWR0aCgpIHtcbiAgICBjb25zb2xlLmxvZygncmVzaXppbmcgc2hpcCcpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb250YWluZXIgLmJvYXJkIC5zaGlwLXlhcmQgLnNoaXAtYmxvY2snKS5mb3JFYWNoKChzaGlwQmxvY2spID0+IHtcbiAgICAgICAgc2hpcEJsb2NrLnN0eWxlLndpZHRoID0gYCR7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JpZCAuYmxvY2snKS5vZmZzZXRXaWR0aFxuICAgICAgICB9cHhgO1xuICAgIH0pO1xufVxuXG4vLyBDcmVhdGUgcmVjdGFuZ3VsYXIgYmxvY2tzIHRvIHJlcHJlc2VudCBzaGlwc1xuZnVuY3Rpb24gYWRkU2hpcHRvVUkobGVuZ3RoKSB7XG4gICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcC15YXJkJykpLm1hcCgoc2hpcFlhcmQpID0+IHtcbiAgICAgICAgY29uc3QgeWFyZE51bWJlciA9IHNoaXBZYXJkLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgICAgICBjb25zdCBzaGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNoaXAuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgICAgICBzaGlwLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgdHJ1ZSk7XG4gICAgICAgIHNoaXAuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgeWFyZE51bWJlcik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBibG9jay5jbGFzc0xpc3QuYWRkKCdzaGlwLWJsb2NrJyk7XG4gICAgICAgICAgICBibG9jay5zdHlsZS53aWR0aCA9IGAke1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkIC5ibG9jaycpLm9mZnNldFdpZHRoXG4gICAgICAgICAgICB9cHhgO1xuICAgICAgICAgICAgc2hpcC5hcHBlbmRDaGlsZChibG9jayk7XG4gICAgICAgIH1cbiAgICAgICAgc2hpcFlhcmQuYXBwZW5kQ2hpbGQoc2hpcCk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlHYW1lSW50ZXJmYWNlKCkge1xuICAgIGRpc3BsYXlHcmlkcygpO1xuICAgIGRpc3BsYXlTaGlwcyhBcHBsaWNhdGlvbi5sZW5ndGhzT2ZTaGlwcyk7XG4gICAgd2luZG93Lm9ucmVzaXplID0gbW9kaWZ5U2hpcFdpZHRoO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlVUlXaXRoQUlTaGlwcyhib2FyZEFJKSB7XG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3JBbGwoYC5zaGlwLXlhcmRbZGF0YS1pZCA9ICcyJ10gLnNoaXBgKVxuICAgIC5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBzaGlwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9KTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgIGlmIChib2FyZEFJLmdyaWRbaV1bal1bXCJzaGlwXCJdKSB7XG4gICAgICAgIGNvbnN0IGJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgLmdyaWRbZGF0YS1pZCA9ICcyJ10gXG4gICAgICAgICAgIC5ibG9ja1tkYXRhLXJvdyA9ICcke2kgKyAxfSddW2RhdGEtY29sdW1uID0gJyR7aiArIDF9J11gXG4gICAgICAgICk7XG4gICAgICAgIGJsb2NrLmNsYXNzTGlzdC5hZGQoXCJzaGlwLWJsb2NrLWluLWdyaWRcIik7XG4gICAgICAgIGJsb2NrLmNsYXNzTGlzdC5hZGQoXCJhaS1zaGlwXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IEFwcGxpY2F0aW9uIGZyb20gJy4uL0NvbnRyb2xsZXJzL0FwcGxpY2F0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXJlQWxsU2hpcHNQbGFjZWQoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgKGZ1bmN0aW9uIHdhaXRGb3JBbGxTaGlwc1RvQmVQbGFjZWQoKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgQXBwbGljYXRpb24uc2hpcHNPZkdyaWQxID09PSBBcHBsaWNhdGlvbi5udW1iZXJPZlNoaXBzICYmXG4gICAgICAgICAgICAgICAgQXBwbGljYXRpb24uc2hpcHNPZkdyaWQyID09PSBBcHBsaWNhdGlvbi5udW1iZXJPZlNoaXBzXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQod2FpdEZvckFsbFNoaXBzVG9CZVBsYWNlZCwgMjAwMCk7XG4gICAgICAgIH0pKCk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgU2hpcCBmcm9tICcuLi9Nb2RlbHMvU2hpcCc7XG5pbXBvcnQgQXBwbGljYXRpb24gZnJvbSAnLi4vQ29udHJvbGxlcnMvQXBwbGljYXRpb24nO1xuXG5sZXQgZHJhZ2dlZFNoaXAsXG4gICAgZHJhZ2dlZFNoaXBMZW5ndGgsXG4gICAgc2hpcEJsb2NrTnVtYmVyRHJhZ2dlZCxcbiAgICBkcmFnZ2VkU2hpcERpcmVjdGlvbjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGV0SHVtYW5EcmFnU2hpcHMoYm9hcmRIdW1hbikge1xuICAgIGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaXAteWFyZFtkYXRhLWlkID0gJzEnXSAuc2hpcFwiKVxuICAgICAgICAuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBoYW5kbGVEcmFnU3RhcnQpO1xuICAgICAgICAgICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgKGUpID0+XG4gICAgICAgICAgICAgICAgaGFuZGxlRHJhZ0VuZChlLCBib2FyZEh1bWFuKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZURyYWdTdGFydChlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBkcmFnZ2VkU2hpcCA9IGUudGFyZ2V0O1xuICAgIGlmICghZHJhZ2dlZFNoaXAubWF0Y2hlcygnLnNoaXAnKSkge1xuICAgICAgICBjb25zb2xlLmxvZygnbm90IG1hdGNoZXMnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICB0aGlzLnN0eWxlLm9wYWNpdHkgPSAnMC40JztcblxuICAgICAgICBkcmFnZ2VkU2hpcExlbmd0aCA9IGRyYWdnZWRTaGlwLmNoaWxkRWxlbWVudENvdW50O1xuICAgICAgICBjb25zdCByZWN0ID0gZHJhZ2dlZFNoaXAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGRyYWdnZWRTaGlwRGlyZWN0aW9uID1cbiAgICAgICAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRyYWdnZWRTaGlwKS5mbGV4RGlyZWN0aW9uO1xuICAgICAgICBpZiAoZHJhZ2dlZFNoaXBEaXJlY3Rpb24gPT09ICdyb3cnKSB7XG4gICAgICAgICAgICBjb25zdCBibG9ja1dpZHRoID0gcmVjdC53aWR0aCAvIGRyYWdnZWRTaGlwTGVuZ3RoO1xuICAgICAgICAgICAgc2hpcEJsb2NrTnVtYmVyRHJhZ2dlZCA9IE1hdGguZmxvb3IoZS5vZmZzZXRYIC8gYmxvY2tXaWR0aCArIDEpO1xuICAgICAgICB9IGVsc2UgaWYgKGRyYWdnZWRTaGlwRGlyZWN0aW9uID09PSAnY29sdW1uJykge1xuICAgICAgICAgICAgY29uc3QgYmxvY2tIZWlnaHQgPSByZWN0LmhlaWdodCAvIGRyYWdnZWRTaGlwTGVuZ3RoO1xuICAgICAgICAgICAgc2hpcEJsb2NrTnVtYmVyRHJhZ2dlZCA9IE1hdGguZmxvb3IoZS5vZmZzZXRZIC8gYmxvY2tIZWlnaHQgKyAxKTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2gge1xuICAgICAgICByZXN0b3JlT3BhY2l0eShlKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZURyYWdFbmQoZSwgYm9hcmRIdW1hbikge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIC8vIGlmICghZHJhZ2dlZFNoaXAubWF0Y2hlcygnLnNoaXAnKSkge1xuICAgIC8vICAgICBjb25zb2xlLmxvZygnbm90IG1hdGNoZXMnKTtcbiAgICAvLyAgICAgcmVzdG9yZU9wYWNpdHkoZSk7XG4gICAgLy8gICAgIHJldHVybjtcbiAgICAvLyB9XG4gICAgLy8gb24gd2hpY2ggZWxlbWVudCBkb2VzIGRyYWcgZW5kIG9uIHNjcmVlbiAtIHJldHVybnMgYW4gYXJyYXkgd2l0aCBwYXJlbnRzIGluY2x1ZGVkXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmVsZW1lbnRzRnJvbVBvaW50KGUuY2xpZW50WCwgZS5jbGllbnRZKTtcbiAgICAgICAgLy8gaWYgaXQncyBhIGJsb2NrIGluIHRoZSByaWdodCBncmlkXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGVsZW1bMF0ubWF0Y2hlcyhgLmdyaWRbZGF0YS1pZCA9ICcxJ10gLmJsb2NrYCkgJiZcbiAgICAgICAgICAgIGRyYWdnZWRTaGlwTGVuZ3RoID49IDJcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBjb25zdCBibG9jayA9IGVsZW1bMF07XG4gICAgICAgICAgICBjb25zdCBbcm93LCBjb2x1bW5dID0gZ2V0VUlDb29yZHMoYmxvY2spO1xuICAgICAgICAgICAgY29uc3Qgc3RhcnRpbmdCbG9jayA9IGdldFN0YXJ0aW5nQmxvY2soXG4gICAgICAgICAgICAgICAgcm93LFxuICAgICAgICAgICAgICAgIGNvbHVtbixcbiAgICAgICAgICAgICAgICBkcmFnZ2VkU2hpcERpcmVjdGlvblxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0YXJ0aW5nQmxvY2spO1xuICAgICAgICAgICAgaWYgKCFzdGFydGluZ0Jsb2NrKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05PVCBzdGFydGluZyBibG9jaycpO1xuICAgICAgICAgICAgICAgIHJlc3RvcmVPcGFjaXR5KGUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IFt4LCB5XSA9IGdldFVJQ29vcmRzKHN0YXJ0aW5nQmxvY2spO1xuICAgICAgICAgICAgY29uc3Qgb3JpZW50YXRpb24gPVxuICAgICAgICAgICAgICAgIGRyYWdnZWRTaGlwRGlyZWN0aW9uID09PSAncm93JyA/ICdob3Jpem9udGFsJyA6ICd2ZXJ0aWNhbCc7XG5cbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcChkcmFnZ2VkU2hpcExlbmd0aCwgb3JpZW50YXRpb24pO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBib2FyZEh1bWFuLnBsYWNlU2hpcChzaGlwLCB4IC0gMSwgeSAtIDEpOyAvLyB4LTEseS0xIGJlY2F1c2UgVUk6IDEsMiwuLi4gLT4gbG9naWM6MCwxLC4uLlxcXG4gICAgICAgICAgICAgICAgKytBcHBsaWNhdGlvbi5zaGlwc09mR3JpZDE7XG4gICAgICAgICAgICAgICAgcGFpbnRTaGlwT25HcmlkKFxuICAgICAgICAgICAgICAgICAgICBwYXJzZUludChzdGFydGluZ0Jsb2NrLmdldEF0dHJpYnV0ZSgnZGF0YS1udW1iZXInKSksXG4gICAgICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBjb25zdCB3aWR0aCA9XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5pbm5lcldpZHRoIHx8XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCB8fFxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHdpZHRoKTtcbiAgICAgICAgICAgICAgICBpZiAod2lkdGggPiA1NzYpIGRyYWdnZWRTaGlwLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgICAgICAgICBlbHNlIGRyYWdnZWRTaGlwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHJlc3RvcmVPcGFjaXR5KGUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHJlc3RvcmVPcGFjaXR5KGUpO1xuICAgIH0gY2F0Y2gge1xuICAgICAgICByZXN0b3JlT3BhY2l0eShlKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldFN0YXJ0aW5nQmxvY2socm93LCBjb2x1bW4sIGRpcmVjdGlvbikge1xuICAgIGlmIChkaXJlY3Rpb24gPT09ICdyb3cnKVxuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGAuZ3JpZFtkYXRhLWlkID0gJzEnXSAuYmxvY2tbZGF0YS1yb3cgPSAnJHtyb3d9J11bZGF0YS1jb2x1bW4gPSAnJHtcbiAgICAgICAgICAgICAgICBjb2x1bW4gLSBzaGlwQmxvY2tOdW1iZXJEcmFnZ2VkICsgMVxuICAgICAgICAgICAgfSddYFxuICAgICAgICApO1xuICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2NvbHVtbicpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgLmdyaWRbZGF0YS1pZCA9ICcxJ10gLmJsb2NrW2RhdGEtcm93ID0gJyR7XG4gICAgICAgICAgICAgICAgcm93IC0gc2hpcEJsb2NrTnVtYmVyRHJhZ2dlZCArIDFcbiAgICAgICAgICAgIH0nXVtkYXRhLWNvbHVtbiA9ICcke2NvbHVtbn0nXWBcbiAgICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGRpcmVjdGlvbiBzcGVjaWZpZWQnKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHBhaW50U2hpcE9uR3JpZChpbmRleCwgb3JpZW50YXRpb24pIHtcbiAgICBpZiAob3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJylcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkcmFnZ2VkU2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50QmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgIGAuZ3JpZFtkYXRhLWlkID0gJzEnXSAuYmxvY2tbZGF0YS1udW1iZXIgPSAnJHtpbmRleCsrfSddYFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGN1cnJlbnRCbG9jay5jbGFzc0xpc3QuYWRkKCdzaGlwLWJsb2NrLWluLWdyaWQnKTtcbiAgICAgICAgfVxuICAgIGVsc2UgaWYgKG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZHJhZ2dlZFNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICBgLmdyaWRbZGF0YS1pZCA9ICcxJ10gLmJsb2NrW2RhdGEtbnVtYmVyID0gJyR7aW5kZXh9J11gXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY3VycmVudEJsb2NrLmNsYXNzTGlzdC5hZGQoJ3NoaXAtYmxvY2staW4tZ3JpZCcpO1xuICAgICAgICAgICAgaW5kZXggKz0gMTA7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlc3RvcmVPcGFjaXR5KGUpIHtcbiAgICBpZiAoZHJhZ2dlZFNoaXAubWF0Y2hlcygnLnNoaXAnKSkgZHJhZ2dlZFNoaXAuc3R5bGUub3BhY2l0eSA9IDE7XG59XG5cbmZ1bmN0aW9uIGdldFVJQ29vcmRzKGJsb2NrKSB7XG4gICAgY29uc3QgeCA9IGJsb2NrLmdldEF0dHJpYnV0ZSgnZGF0YS1yb3cnKTtcbiAgICBjb25zdCB5ID0gYmxvY2suZ2V0QXR0cmlidXRlKCdkYXRhLWNvbHVtbicpO1xuICAgIHJldHVybiBbeCwgeV07XG59XG4iLCJsZXQgZHJhZyA9IGZhbHNlO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsZXRIdW1hblJvdGF0ZVNoaXBzKCkge1xuICAgIGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKGAuc2hpcC15YXJkW2RhdGEtaWQgPSAnMSddIC5zaGlwYClcbiAgICAgICAgLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICAgIC8vIGRpc3Rpbmd1aXNoIGIvdyBkcmFnIGFuZCBjbGlja1xuICAgICAgICAgICAgLy8gdGhlcmUgaXMgYSBtb3VzZW1vdmUgYmV0d2VlbiBtb3VzZWRvd24gYW5kIG1vdXNldXAgaW4gYSBkcmFnLFxuICAgICAgICAgICAgLy8gYnV0IG5vdCBpbiBhIGNsaWNrLlxuICAgICAgICAgICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoKSA9PiAoZHJhZyA9IGZhbHNlKSk7XG4gICAgICAgICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsICgpID0+IChkcmFnID0gdHJ1ZSkpO1xuICAgICAgICAgICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWRyYWcpIHJvdGF0ZVNoaXAoZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG59XG5cbmZ1bmN0aW9uIHJvdGF0ZVNoaXAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZygnY2xpY2snKTtcbiAgICBjb25zdCBzaGlwID0gZS50YXJnZXQucGFyZW50RWxlbWVudDsgLy8gYmVjYXVzZSB0YXJnZXQgd2lsbCBiZSBhIHNoaXAgYmxvY2sgZHVlIHRvIGV2ZW50IGJ1YmJsaW5nXG4gICAgY29uc3QgY3VycmVudERpcmVjdGlvbiA9IHNoaXAuc3R5bGUuZmxleERpcmVjdGlvbjtcbiAgICBzaGlwLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBjdXJyZW50RGlyZWN0aW9uID09PSAnY29sdW1uJyA/ICdyb3cnIDogJ2NvbHVtbic7XG59XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxuXFxuLyogRG9jdW1lbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4gKi9cXG5cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG59XFxuXFxuLyogU2VjdGlvbnNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxuICovXFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAqL1xcblxcbmhyIHtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnByZSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAqIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5pbWcge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCB7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7IC8qIDEgKi9cXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gKi9cXG5cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5maWVsZHNldCB7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5sZWdlbmQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXFxuICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gKi9cXG5cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcbiAqL1xcblxcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxuICovXFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICovXFxuXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5cXG5kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLyogTWlzY1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcbiAqL1xcblxcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcbiAqL1xcblxcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMkVBQTJFOztBQUUzRTsrRUFDK0U7O0FBRS9FOzs7RUFHRTs7QUFFRjtFQUNFLGlCQUFpQixFQUFFLE1BQU07RUFDekIsOEJBQThCLEVBQUUsTUFBTTtBQUN4Qzs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsU0FBUztBQUNYOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGO0VBQ0UsdUJBQXVCLEVBQUUsTUFBTTtFQUMvQixTQUFTLEVBQUUsTUFBTTtFQUNqQixpQkFBaUIsRUFBRSxNQUFNO0FBQzNCOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLGlDQUFpQyxFQUFFLE1BQU07RUFDekMsY0FBYyxFQUFFLE1BQU07QUFDeEI7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSxtQkFBbUIsRUFBRSxNQUFNO0VBQzNCLDBCQUEwQixFQUFFLE1BQU07RUFDbEMsaUNBQWlDLEVBQUUsTUFBTTtBQUMzQzs7QUFFQTs7RUFFRTs7QUFFRjs7RUFFRSxtQkFBbUI7QUFDckI7O0FBRUE7OztFQUdFOztBQUVGOzs7RUFHRSxpQ0FBaUMsRUFBRSxNQUFNO0VBQ3pDLGNBQWMsRUFBRSxNQUFNO0FBQ3hCOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7O0VBR0U7O0FBRUY7O0VBRUUsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGOzs7OztFQUtFLG9CQUFvQixFQUFFLE1BQU07RUFDNUIsZUFBZSxFQUFFLE1BQU07RUFDdkIsaUJBQWlCLEVBQUUsTUFBTTtFQUN6QixTQUFTLEVBQUUsTUFBTTtBQUNuQjs7QUFFQTs7O0VBR0U7O0FBRUY7UUFDUSxNQUFNO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBOzs7RUFHRTs7QUFFRjtTQUNTLE1BQU07RUFDYixvQkFBb0I7QUFDdEI7O0FBRUE7O0VBRUU7O0FBRUY7Ozs7RUFJRSwwQkFBMEI7QUFDNUI7O0FBRUE7O0VBRUU7O0FBRUY7Ozs7RUFJRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBOztFQUVFOztBQUVGOzs7O0VBSUUsOEJBQThCO0FBQ2hDOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBOzs7OztFQUtFOztBQUVGO0VBQ0Usc0JBQXNCLEVBQUUsTUFBTTtFQUM5QixjQUFjLEVBQUUsTUFBTTtFQUN0QixjQUFjLEVBQUUsTUFBTTtFQUN0QixlQUFlLEVBQUUsTUFBTTtFQUN2QixVQUFVLEVBQUUsTUFBTTtFQUNsQixtQkFBbUIsRUFBRSxNQUFNO0FBQzdCOztBQUVBOztFQUVFOztBQUVGO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7O0VBR0U7O0FBRUY7O0VBRUUsc0JBQXNCLEVBQUUsTUFBTTtFQUM5QixVQUFVLEVBQUUsTUFBTTtBQUNwQjs7QUFFQTs7RUFFRTs7QUFFRjs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsNkJBQTZCLEVBQUUsTUFBTTtFQUNyQyxvQkFBb0IsRUFBRSxNQUFNO0FBQzlCOztBQUVBOztFQUVFOztBQUVGO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLDBCQUEwQixFQUFFLE1BQU07RUFDbEMsYUFBYSxFQUFFLE1BQU07QUFDdkI7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxuXFxuLyogRG9jdW1lbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4gKi9cXG5cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG59XFxuXFxuLyogU2VjdGlvbnNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxuICovXFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAqL1xcblxcbmhyIHtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnByZSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAqIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5pbWcge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCB7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7IC8qIDEgKi9cXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gKi9cXG5cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5maWVsZHNldCB7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5sZWdlbmQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXFxuICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gKi9cXG5cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcbiAqL1xcblxcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxuICovXFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICovXFxuXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5cXG5kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLyogTWlzY1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcbiAqL1xcblxcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcbiAqL1xcblxcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1wcmltYXJ5LTE6ICMwMDE3MWY7XFxuICAgIC0tcHJpbWFyeS0yOiAjZmZmZmZmO1xcbiAgICAtLXNlY29uZGFyeS0xOiAjMDAzNDU5O1xcbiAgICAtLWFjY2VudC0xOiAjM2Y2YzUxO1xcbiAgICAtLWFjY2VudC0yOiAjMDBhOGU4O1xcbiAgICAvKiAtLWFjY2VudC0zOiAjMTdiZWJiOyAqL1xcbiAgICAvKiAtLWFjY2VudC0zOiAjMDI4OEU4OyAqL1xcbiAgICAtLWFjY2VudC0zOiByZ2IoMjExLCA1NCwgNTQpO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG4uY29udGFpbmVyIC5nYW1lLXRpdGxlIHtcXG4gICAgZmxleDogMCAwIDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA0MTAxNjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnJlbSB0cmFuc3BhcmVudCBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTEpO1xcbn1cXG5cXG4uY29udGFpbmVyIC5nYW1lLXRpdGxlIHNwYW4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYm9yZGVyOiAxcmVtIHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItbGVmdDogMnJlbSBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuLmNvbnRhaW5lciAuYm9hcmQge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDN2aDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uY29udGFpbmVyIC5ib2FyZCAudGl0bGUge1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktMSk7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZjA4MDg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgZmxleDogMCAwIDN2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMXJlbSBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmJvYXJkW2RhdGEtaWQ9JzInXSAudGl0bGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2YwODA4NDc7XFxufVxcblxcbi5jb250YWluZXIgLmJvYXJkIC5ncmlkIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgY2FsYygxMDAlIC8gMTApKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIGNhbGMoMTAwJSAvIDEwKSk7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAqL1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTEpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5jb250YWluZXIgLmJvYXJkIC5ibG9jayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC0yKTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktMSk7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAwLjJyZW0gc29saWQgdmFyKC0tcHJpbWFyeS0xKTtcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9hcmQgLmJsb2NrOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMzQ1OTljO1xcbn1cXG5cXG4uc2hpcC15YXJkLXdpZGdldCB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9hcmQgLnNoaXAteWFyZCB7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2FyZCAuc2hpcC15YXJkIC5zaGlwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9hcmQgLnNoaXAteWFyZCAuc2hpcCAuc2hpcC1ibG9jayB7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsb2NrLWNvbG9yKTsgKi9cXG4gICAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LTMpO1xcbiAgICBhc3BlY3QtcmF0aW86IDE7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS0xKTsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDAuMnJlbSBzb2xpZCB2YXIoLS1wcmltYXJ5LTEpO1xcbn1cXG5cXG4uc2hpcC1ibG9jay1pbi1ncmlkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LTMpICFpbXBvcnRhbnQ7XFxuICAgIGFzcGVjdC1yYXRpbzogMTtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrICFpbXBvcnRhbnQ7ICovXFxufVxcblxcbi5ib2FyZFtkYXRhLWlkPScyJ10gLnNoaXAtYmxvY2staW4tZ3JpZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC0yKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYm9hcmRbZGF0YS1pZD0nMiddIC5zaGlwLWJsb2NrLWluLWdyaWQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzNDU5OWMgIWltcG9ydGFudDtcXG59XFxuXFxuLmF0dGFja2VkLXNoaXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LTMpICFpbXBvcnRhbnQ7ICovXFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2NSwgNDIsIDQyLCAwLjMwOCkgIWltcG9ydGFudDtcXG59XFxuXFxuLmJvYXJkW2RhdGEtaWQ9JzInXSAuYXR0YWNrZWQtc2hpcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LTMpICFpbXBvcnRhbnQ7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTY1LCA0MiwgNDIsIDAuMzA4KSAhaW1wb3J0YW50O1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYmFkLWF0dGFjayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7ICovXFxufVxcblxcbi5iYWQtYXR0YWNrOmhvdmVyIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xcbiAgICAvKiAvLyBydWxlcyBoZXJlIGFwcGx5IHRvIGRldmljZXMgZnJvbSA5OTNweCB0byAxMjAwcHggKGluY2x1c2l2ZSkgKi9cXG4gICAgLmNvbnRhaW5lciAuYm9hcmQge1xcbiAgICAgICAgd2lkdGg6IDUwJTtcXG4gICAgfVxcblxcbiAgICAuY29udGFpbmVyIC5ib2FyZCAuZ3JpZCB7XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICB9XFxuXFxuICAgIC5jb250YWluZXIgLmJvYXJkIC50aXRsZSB7XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICB9XFxuXFxuICAgIC5jb250YWluZXIgLmJvYXJkIC5zaGlwLXlhcmQge1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcXG4gICAgLyogLy8gcnVsZXMgaGVyZSBhcHBseSB0byBkZXZpY2VzIGZyb20gNzY5cHggdG8gOTkycHggKGluY2x1c2l2ZSkgKi9cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAgIC8qIC8vIHJ1bGVzIGhlcmUgYXBwbHkgdG8gZGV2aWNlcyBmcm9tIDBweCB0byA3NjhweCAoaW5jbHVzaXZlKSAqL1xcbiAgICAuY29udGFpbmVyIC5ib2FyZCAuZ3JpZCB7XFxuICAgICAgICB3aWR0aDogOTUlO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICB9XFxuICAgIC5jb250YWluZXIgLmJvYXJkIC5zaGlwLXlhcmQge1xcbiAgICAgICAgd2lkdGg6IDk1JTtcXG4gICAgfVxcbiAgICAuY29udGFpbmVyIC5ib2FyZCAuYmxvY2sge1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICAgICAgYm9yZGVyOiAwLjE1cmVtIHNvbGlkIHZhcigtLXByaW1hcnktMSk7XFxuICAgIH1cXG5cXG4gICAgLmNvbnRhaW5lciAuYm9hcmQgLnNoaXAteWFyZCAuc2hpcCAuc2hpcC1ibG9jayB7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgICAgICBib3JkZXI6IDAuMTVyZW0gc29saWQgdmFyKC0tcHJpbWFyeS0xKTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpe1xcbiAgICAvKiAuY29udGFpbmVyIC5ib2FyZCAuYmxvY2sge1xcbiAgICAgICAgYm9yZGVyOiAwLjFyZW0gc29saWQgdmFyKC0tcHJpbWFyeS0xKTtcXG4gICAgfVxcblxcbiAgICAuY29udGFpbmVyIC5ib2FyZCAuc2hpcC15YXJkIC5zaGlwIC5zaGlwLWJsb2NrIHtcXG4gICAgICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkIHZhcigtLXByaW1hcnktMSk7XFxuICAgIH0gKi9cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XFxuICAgIC5jb250YWluZXIgLmJvYXJkIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgZ2FwOiAwLjVyZW07XFxuICAgIH1cXG5cXG4gICAgLmNvbnRhaW5lciAuYm9hcmQgLnRpdGxlIHtcXG4gICAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgIH1cXG4gICAgLmNvbnRhaW5lciAuYm9hcmQgLmdyaWQge1xcbiAgICAgICAgd2lkdGg6IDUwJTtcXG4gICAgfVxcblxcbiAgICAuY29udGFpbmVyIC5ib2FyZCAuc2hpcC15YXJkIHtcXG4gICAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAxcmVtIHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xcblxcbiAgICAuY29udGFpbmVyIC5ib2FyZCB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGdhcDogMC41cmVtO1xcbiAgICB9XFxuXFxuICAgIC5jb250YWluZXIgLmJvYXJkIC50aXRsZSB7XFxuICAgICAgICB3aWR0aDogNTUlO1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICB9XFxuICAgIC5jb250YWluZXIgLmJvYXJkIC5ncmlkIHtcXG4gICAgICAgIHdpZHRoOiA1NSU7XFxuICAgIH1cXG5cXG4gICAgLmNvbnRhaW5lciAuYm9hcmQgLnNoaXAteWFyZCB7XFxuICAgICAgICB3aWR0aDogNTUlO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXJlbSBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2NvbnRhaW5lci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixxQ0FBcUM7SUFDckMsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksY0FBYztJQUNkLDhCQUE4QjtJQUM5QixtQ0FBbUM7QUFDdkM7QUFDQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1Isa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSwwQ0FBMEM7SUFDMUMseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrREFBa0Q7SUFDbEQsK0NBQStDO0lBQy9DLDZCQUE2QjtJQUM3QixVQUFVO0lBQ1Ysa0NBQWtDO0lBQ2xDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxlQUFlO0lBQ2YsMENBQTBDO0lBQzFDLGtCQUFrQjtJQUNsQixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSwwQ0FBMEM7SUFDMUMsZUFBZTtJQUNmLGNBQWM7SUFDZCxpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLDBDQUEwQztJQUMxQyxrQkFBa0I7SUFDbEIscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksNENBQTRDO0lBQzVDLGVBQWU7SUFDZixjQUFjO0lBQ2Qsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0RBQWtEO0lBQ2xELGNBQWM7SUFDZCxxREFBcUQ7QUFDekQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2Qsa0RBQWtEO0lBQ2xELHFEQUFxRDtJQUNyRCwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixrQ0FBa0M7SUFDbEMsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksb0VBQW9FO0lBQ3BFO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7QUFDQTtJQUNJLG1FQUFtRTtBQUN2RTtBQUNBO0lBQ0ksaUVBQWlFO0lBQ2pFO1FBQ0ksVUFBVTtRQUNWLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsc0NBQXNDO0lBQzFDOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLHNDQUFzQztJQUMxQztBQUNKOztBQUVBO0lBQ0k7Ozs7OztPQU1HO0FBQ1A7O0FBRUE7SUFDSTtRQUNJLFdBQVc7UUFDWCxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsZUFBZTtRQUNmLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLFVBQVU7UUFDVixxQ0FBcUM7SUFDekM7QUFDSjs7QUFFQTs7SUFFSTtRQUNJLFdBQVc7UUFDWCxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsZUFBZTtRQUNmLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLFVBQVU7UUFDVixxQ0FBcUM7SUFDekM7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tcHJpbWFyeS0xOiAjMDAxNzFmO1xcbiAgICAtLXByaW1hcnktMjogI2ZmZmZmZjtcXG4gICAgLS1zZWNvbmRhcnktMTogIzAwMzQ1OTtcXG4gICAgLS1hY2NlbnQtMTogIzNmNmM1MTtcXG4gICAgLS1hY2NlbnQtMjogIzAwYThlODtcXG4gICAgLyogLS1hY2NlbnQtMzogIzE3YmViYjsgKi9cXG4gICAgLyogLS1hY2NlbnQtMzogIzAyODhFODsgKi9cXG4gICAgLS1hY2NlbnQtMzogcmdiKDIxMSwgNTQsIDU0KTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuLmNvbnRhaW5lciAuZ2FtZS10aXRsZSB7XFxuICAgIGZsZXg6IDAgMCAxMDAlO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNDEwMTY7XFxuICAgIGJvcmRlci1ib3R0b206IDJyZW0gdHJhbnNwYXJlbnQgc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS0xKTtcXG59XFxuXFxuLmNvbnRhaW5lciAuZ2FtZS10aXRsZSBzcGFuIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJvcmRlcjogMXJlbSBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLWxlZnQ6IDJyZW0gc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcbi5jb250YWluZXIgLmJvYXJkIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAzdmg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmNvbnRhaW5lciAuYm9hcmQgLnRpdGxlIHtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LTEpOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2YwODA4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIGZsZXg6IDAgMCAzdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IDFyZW0gc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5ib2FyZFtkYXRhLWlkPScyJ10gLnRpdGxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NmMDgwODQ3O1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2FyZCAuZ3JpZCB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIGNhbGMoMTAwJSAvIDEwKSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCBjYWxjKDEwMCUgLyAxMCkpO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgKi9cXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS0xKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2FyZCAuYmxvY2sge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtMik7XFxuICAgIGFzcGVjdC1yYXRpbzogMTtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LTEpOyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMC4ycmVtIHNvbGlkIHZhcigtLXByaW1hcnktMSk7XFxufVxcblxcbi5jb250YWluZXIgLmJvYXJkIC5ibG9jazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDM0NTk5YztcXG59XFxuXFxuLnNoaXAteWFyZC13aWRnZXQge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5jb250YWluZXIgLmJvYXJkIC5zaGlwLXlhcmQge1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9hcmQgLnNoaXAteWFyZCAuc2hpcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5jb250YWluZXIgLmJvYXJkIC5zaGlwLXlhcmQgLnNoaXAgLnNoaXAtYmxvY2sge1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibG9jay1jb2xvcik7ICovXFxuICAgIGFzcGVjdC1yYXRpbzogMTtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC0zKTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktMSk7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAwLjJyZW0gc29saWQgdmFyKC0tcHJpbWFyeS0xKTtcXG59XFxuXFxuLnNoaXAtYmxvY2staW4tZ3JpZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC0zKSAhaW1wb3J0YW50O1xcbiAgICBhc3BlY3QtcmF0aW86IDE7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBibGFjayAhaW1wb3J0YW50OyAqL1xcbn1cXG5cXG4uYm9hcmRbZGF0YS1pZD0nMiddIC5zaGlwLWJsb2NrLWluLWdyaWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtMikgIWltcG9ydGFudDtcXG59XFxuXFxuLmJvYXJkW2RhdGEtaWQ9JzInXSAuc2hpcC1ibG9jay1pbi1ncmlkOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMzQ1OTljICFpbXBvcnRhbnQ7XFxufVxcblxcbi5hdHRhY2tlZC1zaGlwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC0zKSAhaW1wb3J0YW50OyAqL1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjUsIDQyLCA0MiwgMC4zMDgpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5ib2FyZFtkYXRhLWlkPScyJ10gLmF0dGFja2VkLXNoaXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC0zKSAhaW1wb3J0YW50OyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2NSwgNDIsIDQyLCAwLjMwOCkgIWltcG9ydGFudDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLmJhZC1hdHRhY2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjayAhaW1wb3J0YW50OyAqL1xcbn1cXG5cXG4uYmFkLWF0dGFjazpob3ZlciB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXG4gICAgLyogLy8gcnVsZXMgaGVyZSBhcHBseSB0byBkZXZpY2VzIGZyb20gOTkzcHggdG8gMTIwMHB4IChpbmNsdXNpdmUpICovXFxuICAgIC5jb250YWluZXIgLmJvYXJkIHtcXG4gICAgICAgIHdpZHRoOiA1MCU7XFxuICAgIH1cXG5cXG4gICAgLmNvbnRhaW5lciAuYm9hcmQgLmdyaWQge1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgfVxcblxcbiAgICAuY29udGFpbmVyIC5ib2FyZCAudGl0bGUge1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgfVxcblxcbiAgICAuY29udGFpbmVyIC5ib2FyZCAuc2hpcC15YXJkIHtcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxuICAgIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XFxuICAgIC8qIC8vIHJ1bGVzIGhlcmUgYXBwbHkgdG8gZGV2aWNlcyBmcm9tIDc2OXB4IHRvIDk5MnB4IChpbmNsdXNpdmUpICovXFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICAvKiAvLyBydWxlcyBoZXJlIGFwcGx5IHRvIGRldmljZXMgZnJvbSAwcHggdG8gNzY4cHggKGluY2x1c2l2ZSkgKi9cXG4gICAgLmNvbnRhaW5lciAuYm9hcmQgLmdyaWQge1xcbiAgICAgICAgd2lkdGg6IDk1JTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgfVxcbiAgICAuY29udGFpbmVyIC5ib2FyZCAuc2hpcC15YXJkIHtcXG4gICAgICAgIHdpZHRoOiA5NSU7XFxuICAgIH1cXG4gICAgLmNvbnRhaW5lciAuYm9hcmQgLmJsb2NrIHtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgICAgIGJvcmRlcjogMC4xNXJlbSBzb2xpZCB2YXIoLS1wcmltYXJ5LTEpO1xcbiAgICB9XFxuXFxuICAgIC5jb250YWluZXIgLmJvYXJkIC5zaGlwLXlhcmQgLnNoaXAgLnNoaXAtYmxvY2sge1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICAgICAgYm9yZGVyOiAwLjE1cmVtIHNvbGlkIHZhcigtLXByaW1hcnktMSk7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KXtcXG4gICAgLyogLmNvbnRhaW5lciAuYm9hcmQgLmJsb2NrIHtcXG4gICAgICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkIHZhcigtLXByaW1hcnktMSk7XFxuICAgIH1cXG5cXG4gICAgLmNvbnRhaW5lciAuYm9hcmQgLnNoaXAteWFyZCAuc2hpcCAuc2hpcC1ibG9jayB7XFxuICAgICAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCB2YXIoLS1wcmltYXJ5LTEpO1xcbiAgICB9ICovXFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xcbiAgICAuY29udGFpbmVyIC5ib2FyZCB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGdhcDogMC41cmVtO1xcbiAgICB9XFxuXFxuICAgIC5jb250YWluZXIgLmJvYXJkIC50aXRsZSB7XFxuICAgICAgICB3aWR0aDogNTAlO1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICB9XFxuICAgIC5jb250YWluZXIgLmJvYXJkIC5ncmlkIHtcXG4gICAgICAgIHdpZHRoOiA1MCU7XFxuICAgIH1cXG5cXG4gICAgLmNvbnRhaW5lciAuYm9hcmQgLnNoaXAteWFyZCB7XFxuICAgICAgICB3aWR0aDogNTAlO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXJlbSBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcXG5cXG4gICAgLmNvbnRhaW5lciAuYm9hcmQge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBnYXA6IDAuNXJlbTtcXG4gICAgfVxcblxcbiAgICAuY29udGFpbmVyIC5ib2FyZCAudGl0bGUge1xcbiAgICAgICAgd2lkdGg6IDU1JTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgfVxcbiAgICAuY29udGFpbmVyIC5ib2FyZCAuZ3JpZCB7XFxuICAgICAgICB3aWR0aDogNTUlO1xcbiAgICB9XFxuXFxuICAgIC5jb250YWluZXIgLmJvYXJkIC5zaGlwLXlhcmQge1xcbiAgICAgICAgd2lkdGg6IDU1JTtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFyZW0gc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuLi9pbWFnZXMvY3Jvc3NoYWlyLnBuZ1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UnllJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tcHJpbWFyeS0xOiAjMDAxNzFmO1xcbiAgICAtLXByaW1hcnktMjogI2ZmZmZmZjtcXG4gICAgLS1zZWNvbmRhcnktMTogIzAwMzQ1OTtcXG4gICAgLS1hY2NlbnQtMTogIzNGNkM1MTtcXG4gICAgLS1hY2NlbnQtMjogIzAwYThlODtcXG4gICAgLS1mb250OiAnUnllJywgY3Vyc2l2ZTtcXG59XFxuXFxuKiB7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlOyAqL1xcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS0xKTtcXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktMik7XFxuICAgIGZvbnQtc2l6ZTogNjIuNSU7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcXG59XFxuXFxuXFxuXFxuXFxuLyogLmNvbnRhaW5lciAuYm9hcmRbZGF0YS1pZCA9ICcyJ117XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59ICovXFxuXFxuLmNvbnRhaW5lciAuYm9hcmQgLmdyaWRbZGF0YS1pZD0nMiddIC5ibG9jazpob3ZlciB7XFxuICAgIGN1cnNvcjogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSwgYXV0bztcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9hcmQgLmdyaWRbZGF0YS1pZD0nMiddIC5zaGlwLWJsb2NrLWluLWdyaWQ6aG92ZXIge1xcbiAgICBjdXJzb3I6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIiksIGF1dG87XFxufVxcblxcbi5jb250YWluZXIgLmJvYXJkIC5ncmlkW2RhdGEtaWQ9JzInXSAuYWktc2hpcDpob3ZlciB7XFxuICAgIGN1cnNvcjogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSwgYXV0bztcXG59XFxuXFxuXFxuXFxuXFxuXFxuW2RyYWdnYWJsZT0ndHJ1ZSddIHtcXG4gICAgY3Vyc29yOiBtb3ZlO1xcbn1cXG5cXG5cXG4uYmFkLWF0dGFjayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDIwMCU7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7ICovXFxufVxcblxcbi8qIFRFTVBPUkFSWSAqL1xcbi5ibG9jay10ZXh0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBzZXJpZjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxNTAlO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICAvKiBmb250LXNpemU6IDIwMCU7ICovXFxuICAgIC8qIGZvbnQtc2l6ZTogMS4ycmVtOyAqL1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtJQUNJLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxrQ0FBa0M7SUFDbEMsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQix3QkFBd0I7QUFDNUI7Ozs7O0FBS0E7O0dBRUc7O0FBRUg7SUFDSSxxREFBNEM7QUFDaEQ7O0FBRUE7SUFDSSxxREFBNEM7QUFDaEQ7O0FBRUE7SUFDSSxxREFBNEM7QUFDaEQ7Ozs7OztBQU1BO0lBQ0ksWUFBWTtBQUNoQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysd0NBQXdDO0FBQzVDOztBQUVBLGNBQWM7QUFDZDtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsVUFBVTtJQUNWLHFCQUFxQjtJQUNyQix1QkFBdUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnfm5vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcyc7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UnllJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290IHtcXG4gICAgLS1wcmltYXJ5LTE6ICMwMDE3MWY7XFxuICAgIC0tcHJpbWFyeS0yOiAjZmZmZmZmO1xcbiAgICAtLXNlY29uZGFyeS0xOiAjMDAzNDU5O1xcbiAgICAtLWFjY2VudC0xOiAjM0Y2QzUxO1xcbiAgICAtLWFjY2VudC0yOiAjMDBhOGU4O1xcbiAgICAtLWZvbnQ6ICdSeWUnLCBjdXJzaXZlO1xcbn1cXG5cXG4qIHtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgd2hpdGU7ICovXFxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTEpO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS0yKTtcXG4gICAgZm9udC1zaXplOiA2Mi41JTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xcbn1cXG5cXG5cXG5cXG5cXG4vKiAuY29udGFpbmVyIC5ib2FyZFtkYXRhLWlkID0gJzInXXtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn0gKi9cXG5cXG4uY29udGFpbmVyIC5ib2FyZCAuZ3JpZFtkYXRhLWlkPScyJ10gLmJsb2NrOmhvdmVyIHtcXG4gICAgY3Vyc29yOiB1cmwoJy4uL2ltYWdlcy9jcm9zc2hhaXIucG5nJyksIGF1dG87XFxufVxcblxcbi5jb250YWluZXIgLmJvYXJkIC5ncmlkW2RhdGEtaWQ9JzInXSAuc2hpcC1ibG9jay1pbi1ncmlkOmhvdmVyIHtcXG4gICAgY3Vyc29yOiB1cmwoJy4uL2ltYWdlcy9jcm9zc2hhaXIucG5nJyksIGF1dG87XFxufVxcblxcbi5jb250YWluZXIgLmJvYXJkIC5ncmlkW2RhdGEtaWQ9JzInXSAuYWktc2hpcDpob3ZlciB7XFxuICAgIGN1cnNvcjogdXJsKCcuLi9pbWFnZXMvY3Jvc3NoYWlyLnBuZycpLCBhdXRvO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5bZHJhZ2dhYmxlPSd0cnVlJ10ge1xcbiAgICBjdXJzb3I6IG1vdmU7XFxufVxcblxcblxcbi5iYWQtYXR0YWNrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjAwJTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDsgKi9cXG59XFxuXFxuLyogVEVNUE9SQVJZICovXFxuLmJsb2NrLXRleHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6IHNlcmlmO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE1MCU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIC8qIGZvbnQtc2l6ZTogMjAwJTsgKi9cXG4gICAgLyogZm9udC1zaXplOiAxLjJyZW07ICovXFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy5cbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCxcbiAgICBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgKTtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTtcbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29udGFpbmVyLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9jc3MvY29udGFpbmVyLmNzcyc7XG5pbXBvcnQgJy4vY3NzL2luZGV4LmNzcyc7XG5cbmltcG9ydCAnLi9tb2R1bGVzL0NvbnRyb2xsZXJzL0dhbWUnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==