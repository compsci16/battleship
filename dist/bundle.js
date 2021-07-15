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
              title.textContent = '💥 💥 💥 WINNER FLEET 💥 💥 💥';
              title = document.querySelector(".board[data-id = '".concat(sum - boardNum, "'] .title"));
              title.textContent = '☠️ ☠️ ☠️ LOSER FLEET ☠️ ☠️ ☠️';
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
    grid.setAttribute('draggable', false);

    for (var i = 0; i < 100; i++) {
      var block = document.createElement('div');
      block.classList.add('block');
      block.setAttribute('data-column', i % 10 + 1);
      block.setAttribute('data-number', i + 1);
      block.setAttribute('data-row', Math.floor(i / 10 + 1));
      block.setAttribute('draggable', false);
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
      block.setAttribute('draggable', false);
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
var clientX, clientY; // Firefox doesn't recognize clienX and clientY in dragend event so use this hack

document.addEventListener('dragover', function (event) {
  event = event || window.event;
  clientX = event.clientX;
  clientY = event.clientY;
});
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
  e.dataTransfer.setData('text/plain', '');
  console.log('handle drag start'); // required by firefox

  if (!draggedShip.matches('.ship')) {
    console.log(draggedShip);
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
  e.stopPropagation();

  if (!draggedShip.matches('.ship')) {
    console.log('not matches');
    return;
  }

  console.log('in drag end');
  domManipulation(e, boardHuman);
  console.log('in drag end after dom');
}

function domManipulation(e, boardHuman) {
  try {
    console.log('in dom man');
    var elem = document.elementsFromPoint(clientX, clientY);
    console.log(elem[0]);
    console.log(draggedShip); // if it's a block in the right grid

    if (elem[0].matches(".grid[data-id = '1'] .block") && draggedShipLength >= 2) {
      console.log('matches block of grid 1');
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
    } else {
      console.log('in else of drag fail');
      restoreOpacity(e);
    }

    ;
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
  console.log('in restore opacity');
  console.log(draggedShip);
  draggedShip.style.opacity = 1;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRoSG9sZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NBcHBseURlc2NyaXB0b3JHZXQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQXBwbHlEZXNjcmlwdG9yU2V0LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc1ByaXZhdGVGaWVsZEdldC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NQcml2YXRlRmllbGRTZXQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbW9kdWxlcy9Db250cm9sbGVycy9BcHBsaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbW9kdWxlcy9Db250cm9sbGVycy9CbG9ja0NsaWNrLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9tb2R1bGVzL0NvbnRyb2xsZXJzL0dhbWUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL21vZHVsZXMvTW9kZWxzL0FJLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9tb2R1bGVzL01vZGVscy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL21vZHVsZXMvTW9kZWxzL0h1bnRQYXJpdHlBSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbW9kdWxlcy9Nb2RlbHMvSHVudFByb2JBSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbW9kdWxlcy9Nb2RlbHMvUGxheWVyLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9tb2R1bGVzL01vZGVscy9TaGlwLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9tb2R1bGVzL1ZpZXdzL1VJLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9tb2R1bGVzL1ZpZXdzL1VJZm9yQUlTaGlwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbW9kdWxlcy9WaWV3cy9jaGVja051bWJlck9mU2hpcHNPZkh1bWFuLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9tb2R1bGVzL1ZpZXdzL2RyYWdGdW5jdGlvbkZvckh1bWFuLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9tb2R1bGVzL1ZpZXdzL3JvdGF0ZVNoaXAuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvY3NzL2NvbnRhaW5lci5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2Nzcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2Nzcy9jb250YWluZXIuY3NzPzMzOGIiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2Nzcy9pbmRleC5jc3M/ZjdlYSIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiQXBwbGljYXRpb24iLCJudW1iZXJPZlNoaXBzIiwibGVuZ3Roc09mU2hpcHMiLCJzaGlwc09mR3JpZDEiLCJzaGlwc09mR3JpZDIiLCJwbGF5ZXIxIiwidW5kZWZpbmVkIiwicGxheWVyMiIsImN1cnJlbnRQbGF5ZXIiLCJ1cGRhdGVQbGF5ZXIiLCJzZXRCbG9ja0NsaWNrTGlzdGVuZXJzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImJsb2NrIiwiYWRkRXZlbnRMaXN0ZW5lciIsImJsb2NrQ2xpY2tIYW5kbGVyIiwiZSIsInRhcmdldCIsImdyaWROdW1iZXIiLCJwYXJzZUludCIsInBhcmVudEVsZW1lbnQiLCJnZXRBdHRyaWJ1dGUiLCJpc1ZhbGlkUGxheWVyQ2xpY2siLCJnZXRCbG9ja0Nvb3JkcyIsIngiLCJ5IiwibWF0Y2hlcyIsInNoaXBCbG9ja0NsaWNrSGFuZGxlciIsImdyaWRCbG9ja0NsaWNrSGFuZGxlciIsImNvbnNvbGUiLCJsb2ciLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZ3JpZEJsb2NrIiwiY2xhc3NMaXN0IiwiYWRkIiwidGV4dENvbnRlbnQiLCJzaGlwQmxvY2siLCJib2FyZEh1bWFuIiwiR2FtZWJvYXJkIiwiYm9hcmRBSSIsInNsZWVwIiwiZGVsYXkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJodW1hbiIsIlBsYXllciIsImFpIiwiSHVudFByb2JBSSIsInNldHVwIiwiZGlzcGxheUdhbWVJbnRlcmZhY2UiLCJsZXRIdW1hblJvdGF0ZVNoaXBzIiwibGV0SHVtYW5EcmFnU2hpcHMiLCJwbGFjZVNoaXBzIiwidXBkYXRlVUlXaXRoQUlTaGlwcyIsImFyZUFsbFNoaXBzUGxhY2VkIiwidGhlbiIsInN0YXJ0R2FtZSIsInVwZGF0ZUdhbWUiLCJpc0dhbWVPdmVyIiwiaGF2ZUFsbFN1bmsiLCJ3aG9Xb24iLCJoYXNXb24iLCJ3aW5uZXIiLCJzdW0iLCJib2FyZE51bSIsInRpdGxlIiwicXVlcnlTZWxlY3RvciIsImNsZWFudXAiLCJwbGF5IiwiQUkiLCJuYW1lIiwib3duQm9hcmQiLCJvcHBCb2FyZCIsImF0dGFja2VkQmxvY2tzIiwibGVuIiwiaW5kZXgiLCJpbmNsdWRlcyIsInB1c2giLCJzaXplIiwiZ3JpZCIsImF0dGFja2VkIiwiY2xpY2siLCJsZW5ndGgiLCJvcmllbnRhdGlvbiIsInNoaXAiLCJTaGlwIiwicGxhY2VTaGlwIiwibWluIiwibWF4IiwiTWF0aCIsImNlaWwiLCJmbG9vciIsInJhbmRvbSIsInNoaXBDb3VudCIsImlzVmFsaWRDb29yZCIsIkVycm9yIiwiaGl0IiwiaSIsImoiLCJpc1N1bmsiLCJtYXQiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJIdW50UGFyaXR5QUkiLCJyYW5kb21JbmRleCIsInNwbGljZSIsIndhc1N1Y2Nlc3NmdWxsQXR0YWNrIiwiU21hcnRlc3RBSSIsIm1heFgiLCJtYXhZIiwibWF0cml4IiwidGFibGUiLCJpbmRleE9mIiwicHJvYkRhdGEiLCJmbGFnIiwiayIsInJlY2VpdmVBdHRhY2siLCJoaXRJbmRpY2VzIiwiZGlzcGxheUdyaWRzIiwiZnJvbSIsInNldEF0dHJpYnV0ZSIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImRpc3BsYXlTaGlwcyIsImxlbmd0aHMiLCJhZGRTaGlwdG9VSSIsIm1vZGlmeVNoaXBXaWR0aCIsInN0eWxlIiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsInNoaXBZYXJkIiwieWFyZE51bWJlciIsIndpbmRvdyIsIm9ucmVzaXplIiwiZGlzcGxheSIsInJlamVjdCIsIndhaXRGb3JBbGxTaGlwc1RvQmVQbGFjZWQiLCJkcmFnZ2VkU2hpcCIsImRyYWdnZWRTaGlwTGVuZ3RoIiwic2hpcEJsb2NrTnVtYmVyRHJhZ2dlZCIsImRyYWdnZWRTaGlwRGlyZWN0aW9uIiwiY2xpZW50WCIsImNsaWVudFkiLCJldmVudCIsImhhbmRsZURyYWdTdGFydCIsImhhbmRsZURyYWdFbmQiLCJzdG9wUHJvcGFnYXRpb24iLCJkYXRhVHJhbnNmZXIiLCJzZXREYXRhIiwib3BhY2l0eSIsImNoaWxkRWxlbWVudENvdW50IiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImdldENvbXB1dGVkU3R5bGUiLCJmbGV4RGlyZWN0aW9uIiwiYmxvY2tXaWR0aCIsIm9mZnNldFgiLCJibG9ja0hlaWdodCIsImhlaWdodCIsIm9mZnNldFkiLCJyZXN0b3JlT3BhY2l0eSIsInByZXZlbnREZWZhdWx0IiwiZG9tTWFuaXB1bGF0aW9uIiwiZWxlbSIsImVsZW1lbnRzRnJvbVBvaW50IiwiZ2V0VUlDb29yZHMiLCJyb3ciLCJjb2x1bW4iLCJzdGFydGluZ0Jsb2NrIiwiZ2V0U3RhcnRpbmdCbG9jayIsInBhaW50U2hpcE9uR3JpZCIsImlubmVyV2lkdGgiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsImJvZHkiLCJ2aXNpYmlsaXR5IiwiZXJyIiwibWVzc2FnZSIsImRpcmVjdGlvbiIsImN1cnJlbnRCbG9jayIsImRyYWciLCJyb3RhdGVTaGlwIiwiY3VycmVudERpcmVjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmOztBQUVBLHdDQUF3QyxTQUFTO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNSZTtBQUNmO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7O0FDRmU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNsQ2U7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNOZTtBQUNmO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNWZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7OztBQ0plO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNObUU7QUFDUTtBQUM1RDtBQUNmLG1CQUFtQix3RUFBMkI7QUFDOUMsU0FBUyxvRUFBdUI7QUFDaEMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMbUU7QUFDUTtBQUM1RDtBQUNmLG1CQUFtQix3RUFBMkI7QUFDOUMsRUFBRSxvRUFBdUI7QUFDekI7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNkZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0xpRDtBQUNsQztBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsa0JBQWtCLDJEQUFjO0FBQ2hDLEM7Ozs7Ozs7Ozs7Ozs7OztBQ2RlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSwyQkFBMkIsK0JBQStCO0FBQzFEOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7OztBQzVCZTtBQUNmO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGb0Q7QUFDVztBQUNoRDtBQUNmLGVBQWUsc0VBQU87QUFDdEI7QUFDQTs7QUFFQSxTQUFTLGtFQUFxQjtBQUM5QixDOzs7Ozs7Ozs7Ozs7Ozs7QUNSZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BpRDtBQUNZO0FBQ1k7QUFDdEI7QUFDcEM7QUFDZixTQUFTLDJEQUFjLFNBQVMsaUVBQW9CLFlBQVksdUVBQTBCLFlBQVksNERBQWU7QUFDckgsQzs7Ozs7Ozs7Ozs7Ozs7O0FDTmU7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkcUQ7QUFDdEM7QUFDZjtBQUNBLG9DQUFvQyw2REFBZ0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0Esc0ZBQXNGLDZEQUFnQjtBQUN0RyxDOzs7Ozs7Ozs7O0FDUkEsZ0hBQStDOzs7Ozs7Ozs7Ozs7Ozs7O0FDQS9DLElBQU1BLFdBQVcsR0FBRztBQUNoQkMsZUFBYSxFQUFFLENBREM7QUFFaEJDLGdCQUFjLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixDQUZBO0FBR2hCQyxjQUFZLEVBQUUsQ0FIRTtBQUloQkMsY0FBWSxFQUFFLENBSkU7QUFLaEJDLFNBQU8sRUFBRUMsU0FMTztBQU1oQkMsU0FBTyxFQUFFRCxTQU5PO0FBT2hCRSxlQUFhLEVBQUVGLFNBUEM7QUFRaEJHLGNBQVksRUFBRSx3QkFBWTtBQUN0QixTQUFLRCxhQUFMLEdBQ0ksS0FBS0EsYUFBTCxLQUF1QixLQUFLSCxPQUE1QixHQUFzQyxLQUFLRSxPQUEzQyxHQUFxRCxLQUFLRixPQUQ5RDtBQUVIO0FBWGUsQ0FBcEI7QUFjQSxpRUFBZUwsV0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFFZSxTQUFTVSxzQkFBVCxHQUFrQztBQUM3Q0MsVUFBUSxDQUFDQyxnQkFBVCxDQUEwQixRQUExQixFQUFvQ0MsT0FBcEMsQ0FBNEMsVUFBQ0MsS0FBRCxFQUFXO0FBQ25EQSxTQUFLLENBQUNDLGdCQUFOLENBQXVCLE9BQXZCLEVBQWdDQyxpQkFBaEM7QUFDSCxHQUZEO0FBR0g7QUFFTSxTQUFTQSxpQkFBVCxDQUEyQkMsQ0FBM0IsRUFBOEI7QUFDakMsTUFBTUgsS0FBSyxHQUFHRyxDQUFDLENBQUNDLE1BQWhCO0FBRUEsTUFBTUMsVUFBVSxHQUFHQyxRQUFRLENBQUNOLEtBQUssQ0FBQ08sYUFBTixDQUFvQkMsWUFBcEIsQ0FBaUMsU0FBakMsQ0FBRCxDQUEzQjtBQUNBLE1BQUksQ0FBQ0Msa0JBQWtCLENBQUNKLFVBQUQsQ0FBdkIsRUFBcUMsT0FKSixDQUlZOztBQUM3Qyx3QkFBZUssY0FBYyxDQUFDVixLQUFELENBQTdCO0FBQUE7QUFBQSxNQUFPVyxDQUFQO0FBQUEsTUFBVUMsQ0FBVjs7QUFDQTFCLHdFQUFBLENBQWlDeUIsQ0FBQyxHQUFHLENBQXJDLEVBQXdDQyxDQUFDLEdBQUcsQ0FBNUM7O0FBQ0EsTUFBSVosS0FBSyxDQUFDYSxPQUFOLENBQWMscUJBQWQsQ0FBSixFQUEwQztBQUN0Q0MseUJBQXFCLENBQUNkLEtBQUQsQ0FBckI7QUFDSCxHQUZELE1BRU87QUFDSGUseUJBQXFCLENBQUNmLEtBQUQsQ0FBckI7QUFDQWdCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUFaO0FBQ0EvQixrRUFBQSxHQUhHLENBR3lCO0FBQy9COztBQUVEYyxPQUFLLENBQUNrQixtQkFBTixDQUEwQixPQUExQixFQUFtQ2hCLGlCQUFuQztBQUNIOztBQUVELFNBQVNPLGtCQUFULENBQTRCSixVQUE1QixFQUF3QztBQUNwQyxNQUFJQSxVQUFVLEtBQUssQ0FBZixJQUFvQm5CLCtEQUFBLEtBQThCQSx5REFBdEQsRUFDSSxPQUFPLElBQVAsQ0FESixLQUVLLElBQ0RtQixVQUFVLEtBQUssQ0FBZixJQUNBbkIsK0RBQUEsS0FBOEJBLHlEQUY3QixFQUlELE9BQU8sSUFBUDtBQUNKLFNBQU8sS0FBUDtBQUNIOztBQUVELFNBQVM2QixxQkFBVCxDQUErQkksU0FBL0IsRUFBMEM7QUFDdENBLFdBQVMsQ0FBQ0MsU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0IsWUFBeEI7QUFDQUYsV0FBUyxDQUFDRyxXQUFWO0FBQ0g7O0FBRUQsU0FBU1IscUJBQVQsQ0FBK0JTLFNBQS9CLEVBQTBDO0FBQ3RDQSxXQUFTLENBQUNILFNBQVYsQ0FBb0JDLEdBQXBCLENBQXdCLGVBQXhCO0FBQ0FFLFdBQVMsQ0FBQ0QsV0FBVixrQkFGc0MsQ0FHdEM7QUFDSDs7QUFFRCxTQUFTWixjQUFULENBQXdCVixLQUF4QixFQUErQjtBQUMzQixNQUFNVyxDQUFDLEdBQUdYLEtBQUssQ0FBQ1EsWUFBTixDQUFtQixVQUFuQixDQUFWO0FBQ0EsTUFBTUksQ0FBQyxHQUFHWixLQUFLLENBQUNRLFlBQU4sQ0FBbUIsYUFBbkIsQ0FBVjtBQUNBLFNBQU8sQ0FBQ0csQ0FBRCxFQUFJQyxDQUFKLENBQVA7QUFDSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BERDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTVksVUFBVSxHQUFHLElBQUlDLHNEQUFKLENBQWMsRUFBZCxDQUFuQjtBQUNBLElBQU1DLE9BQU8sR0FBRyxJQUFJRCxzREFBSixDQUFjLEVBQWQsQ0FBaEI7O0FBQ0EsSUFBTUUsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRDtBQUFBLFNBQVcsSUFBSUMsT0FBSixDQUFZLFVBQUFDLE9BQU8sRUFBSTtBQUM1Q0MsY0FBVSxDQUFDRCxPQUFELEVBQVVGLEtBQVYsQ0FBVjtBQUNELEdBRnNCLENBQVg7QUFBQSxDQUFkOztBQUdBLElBQU1JLEtBQUssR0FBRyxJQUFJQyxtREFBSixDQUFXLE9BQVgsRUFBb0JULFVBQXBCLEVBQWdDRSxPQUFoQyxDQUFkO0FBQ0EsSUFBTVEsRUFBRSxHQUFHLElBQUlDLHdEQUFKLENBQWUsSUFBZixFQUFxQlQsT0FBckIsRUFBOEJGLFVBQTlCLENBQVg7O1NBRWVZLEs7Ozs7O2lMQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSXBCLG1CQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO0FBQ0FvQiw4REFBb0I7QUFDcEJDLHVFQUFtQjtBQUNuQkMsZ0ZBQWlCLENBQUNmLFVBQUQsQ0FBakI7QUFDQVUsY0FBRSxDQUFDTSxVQUFIO0FBQ0FDLHdFQUFtQixDQUFDZixPQUFELENBQW5CO0FBTko7QUFBQSxtQkFPVWdCLHlFQUFpQixFQVAzQjs7QUFBQTtBQVFJeEQscUVBQUEsR0FBc0I4QyxLQUF0QjtBQUNBOUMscUVBQUEsR0FBc0JnRCxFQUF0QjtBQUNBaEQsMkVBQUEsR0FBNEI4QyxLQUE1QixDQVZKLENBVXVDOztBQVZ2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBWUFJLEtBQUssR0FBR08sSUFBUixDQUFhLFlBQU07QUFDZkMsV0FBUztBQUNaLENBRkQ7O0FBSUEsU0FBU0EsU0FBVCxHQUFxQjtBQUNqQjVCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaO0FBQ0FyQix1REFBc0I7QUFDdEJDLFVBQVEsQ0FBQ0ksZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUM0QyxVQUFuQztBQUNIOztBQUVELFNBQVNDLFVBQVQsR0FBc0I7QUFDbEIsU0FBT3RCLFVBQVUsQ0FBQ3VCLFdBQVgsTUFBNEJyQixPQUFPLENBQUNxQixXQUFSLEVBQW5DO0FBQ0g7O0FBRUQsU0FBU0MsTUFBVCxHQUFrQjtBQUNkLE1BQUloQixLQUFLLENBQUNpQixNQUFOLEVBQUosRUFBb0IsT0FBT2pCLEtBQVAsQ0FBcEIsS0FDSyxJQUFJRSxFQUFFLENBQUNlLE1BQUgsRUFBSixFQUFpQixPQUFPZixFQUFQLENBQWpCLEtBQ0EsT0FBTyxJQUFQO0FBQ1I7O1NBRWNXLFU7Ozs7O3NMQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNJLGdCQUFJQyxVQUFVLEVBQWQsRUFBa0I7QUFDZDlCLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaO0FBQ01pQyxvQkFGUSxHQUVDRixNQUFNLEVBRlA7QUFJVkcsaUJBSlUsR0FJSixDQUpJO0FBS2Qsa0JBQUlELE1BQU0sS0FBS2xCLEtBQWYsRUFBc0JvQixRQUFRLEdBQUcsQ0FBWCxDQUF0QixLQUNLQSxRQUFRLEdBQUcsQ0FBWDtBQUNEQyxtQkFQVSxHQU9GeEQsUUFBUSxDQUFDeUQsYUFBVCw2QkFDYUYsUUFEYixlQVBFO0FBVWRDLG1CQUFLLENBQUMvQixXQUFOLEdBQW9CLGdDQUFwQjtBQUNBK0IsbUJBQUssR0FBR3hELFFBQVEsQ0FBQ3lELGFBQVQsNkJBQ2lCSCxHQUFHLEdBQUVDLFFBRHRCLGVBQVI7QUFHQUMsbUJBQUssQ0FBQy9CLFdBQU4sR0FBb0IsK0JBQXBCO0FBQ0FpQyxxQkFBTztBQUNWOztBQWpCTDtBQUFBLG1CQWtCVTVCLEtBQUssRUFBRSxHQWxCakI7O0FBQUE7QUFtQkksZ0JBQUl6QywrREFBQSxLQUE4QmdELEVBQWxDLEVBQXNDO0FBQ2xDQSxnQkFBRSxDQUFDc0IsSUFBSDtBQUNIOztBQXJCTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBd0JBLFNBQVNELE9BQVQsR0FBbUI7QUFDZjFELFVBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsY0FBMUIsRUFBMENDLE9BQTFDLENBQWtELFVBQUNDLEtBQUQsRUFBVztBQUN6REEsU0FBSyxDQUFDa0IsbUJBQU4sQ0FBMEIsT0FBMUIsRUFBbUNoQiwyREFBbkM7QUFDSCxHQUZEO0FBR0FMLFVBQVEsQ0FBQ3FCLG1CQUFULENBQTZCLE9BQTdCLEVBQXNDMkIsVUFBdEM7QUFDSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEZEO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCWSxFOzs7OztBQUlqQixjQUFZQyxJQUFaLEVBQWtCQyxRQUFsQixFQUE0QkMsUUFBNUIsRUFBc0M7QUFBQTs7QUFBQTs7QUFDbEMsOEJBQU1GLElBQU4sRUFBWUMsUUFBWixFQUFzQkMsUUFBdEI7O0FBRGtDOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVsQyxVQUFLQyxjQUFMLEdBQXNCLEVBQXRCOztBQUNBLCtMQUFjLElBQWQ7O0FBQ0EsK0xBQWMsSUFBZDs7QUFDQSxzTUFBcUI7QUFBRSxTQUFHLFlBQUw7QUFBbUIsU0FBRztBQUF0QixLQUFyQjs7QUFMa0M7QUFNckM7Ozs7V0FFRCxzQkFBYTtBQUFBOztBQUNUM0UsMkZBQUEsQ0FBbUMsVUFBQzRFLEdBQUQ7QUFBQSxzQ0FBUyxNQUFULDBDQUFTLE1BQVQsRUFBOEJBLEdBQTlCO0FBQUEsT0FBbkM7QUFDSDs7O1dBY0QsZ0JBQU87QUFDSCxVQUFJbkQsQ0FBSixFQUFPQyxDQUFQLEVBQVVtRCxLQUFWOztBQUNBLFNBQUc7QUFBQTs7QUFBQSwyREFDVSxJQURWLDRDQUNVLElBRFY7O0FBQUE7O0FBQ0VwRCxTQURGO0FBQ0tDLFNBREw7QUFFQ0EsU0FBQyxrSEFBRyxJQUFILG9GQUFrQkEsQ0FBbkI7QUFDQUQsU0FBQyxrSEFBRyxJQUFILG9GQUFrQkEsQ0FBbkI7QUFDQW9ELGFBQUssR0FBR3BELENBQUMsR0FBRyxFQUFKLElBQVVDLENBQUMsR0FBRyxDQUFkLENBQVIsQ0FKRCxDQUkyQjtBQUM3QixPQUxELFFBS1MsS0FBS2lELGNBQUwsQ0FBb0JHLFFBQXBCLENBQTZCRCxLQUE3QixDQUxUOztBQU1BLFdBQUtGLGNBQUwsQ0FBb0JJLElBQXBCLENBQXlCRixLQUF6QjtBQUNBLFVBQU0vRCxLQUFLLEdBQUdILFFBQVEsQ0FBQ3lELGFBQVQsbURBRU4zQyxDQUFDLEdBQUcsQ0FGRSwrQkFHV0MsQ0FBQyxHQUFHLENBSGYsUUFBZDs7QUFNQSxVQUFJWixLQUFLLENBQUNhLE9BQU4sQ0FBYyxxQkFBZCxDQUFKLEVBQTBDO0FBQ3RDLFlBQ0lELENBQUMsR0FBRyxDQUFKLEdBQVEsS0FBS2dELFFBQUwsQ0FBY00sSUFBdEIsSUFDQSxDQUFDLEtBQUtOLFFBQUwsQ0FBY08sSUFBZCxDQUFtQnhELENBQW5CLEVBQXNCQyxDQUFDLEdBQUcsQ0FBMUIsRUFBNkJ3RCxRQUZsQyxFQUdFO0FBQ0UsNkdBQWN6RCxDQUFkOztBQUNBLDZHQUFjQyxDQUFDLEdBQUcsQ0FBbEI7QUFDSCxTQU5ELE1BTU8sSUFBSUEsQ0FBQyxHQUFHLENBQUosSUFBUyxDQUFULElBQWMsQ0FBQyxLQUFLZ0QsUUFBTCxDQUFjTyxJQUFkLENBQW1CeEQsQ0FBbkIsRUFBc0JDLENBQUMsR0FBRyxDQUExQixFQUE2QndELFFBQWhELEVBQTBEO0FBQzdELDZHQUFjekQsQ0FBZDs7QUFDQSw2R0FBY0MsQ0FBQyxHQUFHLENBQWxCO0FBQ0gsU0FITSxNQUdBO0FBQ0gsNkdBQWMsSUFBZDs7QUFDQSw2R0FBYyxJQUFkO0FBQ0g7QUFDSixPQWRELE1BY087QUFDSCwyR0FBYyxJQUFkOztBQUNBLDJHQUFjLElBQWQ7QUFDSDs7QUFDRFosV0FBSyxDQUFDcUUsS0FBTjtBQUNIOzs7O0VBOUQyQnBDLDRDOzswQkFnQlpxQyxNLEVBQVE7QUFDcEIsTUFBSUMsV0FBVyxHQUFHLGlJQUFtQixJQUFuQixzQ0FBbUIsSUFBbkIsRUFBc0MsQ0FBdEMsRUFBeUMsQ0FBekMsRUFBbEI7O0FBQ0EsTUFBTUMsSUFBSSxHQUFHLElBQUlDLDJDQUFKLENBQVNILE1BQVQsRUFBaUJDLFdBQWpCLENBQWI7O0FBQ0EsTUFBSTtBQUNBLHdEQUFlLElBQWYsNENBQWUsSUFBZjtBQUFBO0FBQUEsUUFBTzVELENBQVA7QUFBQSxRQUFVQyxDQUFWOztBQUNBLFNBQUsrQyxRQUFMLENBQWNlLFNBQWQsQ0FBd0JGLElBQXhCLEVBQThCN0QsQ0FBOUIsRUFBaUNDLENBQWpDO0FBQ0EsTUFBRTFCLDJFQUFGO0FBQ0gsR0FKRCxDQUlFLE9BQU9pQixDQUFQLEVBQVU7QUFDUiwrRUFBcUJtRSxNQUFyQjtBQUNIO0FBQ0o7OzZCQXNDa0I7QUFDZixNQUFNM0QsQ0FBQywwQkFBRyxJQUFILHNDQUFHLElBQUgsRUFBc0IsQ0FBdEIsRUFBeUIsRUFBekIsQ0FBUDs7QUFDQSxNQUFNQyxDQUFDLDBCQUFHLElBQUgsc0NBQUcsSUFBSCxFQUFzQixDQUF0QixFQUF5QixFQUF6QixDQUFQOztBQUNBLFNBQU8sQ0FBQ0QsQ0FBRCxFQUFJQyxDQUFKLENBQVA7QUFDSDs7d0JBRWErRCxHLEVBQUtDLEcsRUFBSztBQUNwQkQsS0FBRyxHQUFHRSxJQUFJLENBQUNDLElBQUwsQ0FBVUgsR0FBVixDQUFOO0FBQ0FDLEtBQUcsR0FBR0MsSUFBSSxDQUFDRSxLQUFMLENBQVdILEdBQVgsQ0FBTjtBQUNBLFNBQU9DLElBQUksQ0FBQ0UsS0FBTCxDQUFXRixJQUFJLENBQUNHLE1BQUwsTUFBaUJKLEdBQUcsR0FBR0QsR0FBdkIsSUFBOEJBLEdBQXpDLENBQVAsQ0FIb0IsQ0FHa0M7QUFDekQ7O2tCQUVPLENBQUU7OzBCQUVNLENBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNsRkRsRCxTO0FBQ2pCLHFCQUFZeUMsS0FBWixFQUFrQjtBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUNkLFNBQUtBLElBQUwsR0FBWUEsS0FBWjtBQUNBLFNBQUtDLElBQUwsMEJBQVksSUFBWixzQ0FBWSxJQUFaLEVBQStCRCxLQUEvQjtBQUNBLFNBQUtlLFNBQUwsR0FBaUIsQ0FBakI7QUFDSDs7Ozs7QUFjRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0ksdUJBQVVULElBQVYsRUFBZ0I3RCxDQUFoQixFQUFtQkMsQ0FBbkIsRUFBc0I7QUFDbEIsVUFBSSxLQUFLc0UsWUFBTCxDQUFrQlYsSUFBbEIsRUFBd0I3RCxDQUF4QixFQUEyQkMsQ0FBM0IsQ0FBSixFQUFtQztBQUMvQixZQUFJNEQsSUFBSSxDQUFDRCxXQUFMLEtBQXFCLFlBQXpCLEVBQ0ksaUZBQXdCQyxJQUF4QixFQUE4QjdELENBQTlCLEVBQWlDQyxDQUFqQyxFQURKLEtBRUssSUFBSTRELElBQUksQ0FBQ0QsV0FBTCxLQUFxQixVQUF6QixFQUNELDZFQUFzQkMsSUFBdEIsRUFBNEI3RCxDQUE1QixFQUErQkMsQ0FBL0IsRUFEQyxLQUVBLE1BQU0sSUFBSXVFLEtBQUosQ0FBVSxxQkFBVixDQUFOO0FBQ0wsYUFBS0YsU0FBTDtBQUNILE9BUEQsTUFPTztBQUNILGNBQU0sSUFBSUUsS0FBSixDQUFVLDhCQUFWLENBQU47QUFDSDtBQUNKOzs7V0FrQkQsc0JBQWFYLElBQWIsRUFBbUI3RCxDQUFuQixFQUFzQkMsQ0FBdEIsRUFBeUI7QUFDckIsVUFBSUQsQ0FBQyxHQUFHLENBQUosSUFBU0MsQ0FBQyxHQUFHLENBQWIsSUFBa0JBLENBQUMsR0FBRyxLQUFLc0QsSUFBM0IsSUFBbUN2RCxDQUFDLEdBQUcsS0FBS3VELElBQWhELEVBQXNELE9BQU8sS0FBUDtBQUN0RCxVQUFJTSxJQUFJLENBQUNGLE1BQUwsR0FBYyxLQUFLSixJQUF2QixFQUE2QixPQUFPLEtBQVA7QUFDN0IsVUFDS00sSUFBSSxDQUFDRCxXQUFMLEtBQXFCLFlBQXJCLDJCQUNHLElBREgsMEVBQ0csSUFESCxFQUN3Q0MsSUFEeEMsRUFDOEM3RCxDQUQ5QyxFQUNpREMsQ0FEakQsQ0FBRCxJQUVDNEQsSUFBSSxDQUFDRCxXQUFMLEtBQXFCLFVBQXJCLDJCQUNHLElBREgsc0VBQ0csSUFESCxFQUNzQ0MsSUFEdEMsRUFDNEM3RCxDQUQ1QyxFQUMrQ0MsQ0FEL0MsQ0FITCxFQU1JLE9BQU8sSUFBUDtBQUVKLGFBQU8sS0FBUDtBQUNIOzs7V0FrQkQsdUJBQWNELENBQWQsRUFBaUJDLENBQWpCLEVBQW9CO0FBQ2hCLFVBQUksQ0FBQyxLQUFLdUQsSUFBTCxDQUFVeEQsQ0FBVixFQUFhQyxDQUFiLEVBQWdCd0QsUUFBckIsRUFBK0IsS0FBS0QsSUFBTCxDQUFVeEQsQ0FBVixFQUFhQyxDQUFiLEVBQWdCd0QsUUFBaEIsR0FBMkIsSUFBM0IsQ0FBL0IsS0FDSyxNQUFNLElBQUllLEtBQUosQ0FBVSx3QkFBVixDQUFOO0FBQ0wsVUFBTVgsSUFBSSxHQUFHLEtBQUtMLElBQUwsQ0FBVXhELENBQVYsRUFBYUMsQ0FBYixFQUFnQjRELElBQTdCOztBQUNBLFVBQUlBLElBQUosRUFBVTtBQUNOQSxZQUFJLENBQUNZLEdBQUwsQ0FBUyxLQUFLakIsSUFBTCxDQUFVeEQsQ0FBVixFQUFhQyxDQUFiLEVBQWdCbUQsS0FBekI7QUFDSDtBQUNKOzs7V0FFRCw4QkFBcUJwRCxDQUFyQixFQUF3QkMsQ0FBeEIsRUFBMkI7QUFDdkIsVUFBSSxLQUFLdUQsSUFBTCxDQUFVeEQsQ0FBVixFQUFhQyxDQUFiLEVBQWdCLFVBQWhCLEtBQStCLEtBQUt1RCxJQUFMLENBQVV4RCxDQUFWLEVBQWFDLENBQWIsRUFBZ0IsTUFBaEIsQ0FBbkMsRUFBNEQsT0FBTyxJQUFQO0FBQzVELGFBQU8sS0FBUDtBQUNIOzs7V0FFRCx1QkFBYztBQUNWLFVBQUksS0FBS3FFLFNBQUwsS0FBbUIsQ0FBdkIsRUFBMEIsTUFBTSxJQUFJRSxLQUFKLENBQVUsVUFBVixDQUFOO0FBQzFCLFVBQU1oQixJQUFJLEdBQUcsS0FBS0EsSUFBbEI7O0FBQ0EsV0FBSyxJQUFJa0IsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2xCLElBQUksQ0FBQ0csTUFBekIsRUFBaUNlLENBQUMsRUFBbEMsRUFBc0M7QUFDbEMsYUFBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHbkIsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRRyxNQUE1QixFQUFvQ2dCLENBQUMsRUFBckMsRUFBeUM7QUFDckMsY0FBTWQsSUFBSSxHQUFHTCxJQUFJLENBQUNrQixDQUFELENBQUosQ0FBUUMsQ0FBUixFQUFXLE1BQVgsQ0FBYjs7QUFDQSxjQUFJZCxJQUFKLEVBQVU7QUFDTixnQkFBSSxDQUFDQSxJQUFJLENBQUNlLE1BQUwsRUFBTCxFQUFvQjtBQUNoQixxQkFBTyxLQUFQO0FBQ0gsYUFGRCxNQUVPO0FBQ0g7QUFDQTtBQUNBLGtCQUFJZixJQUFJLENBQUNELFdBQUwsS0FBcUIsWUFBekIsRUFBdUNlLENBQUMsSUFBSWQsSUFBSSxDQUFDRixNQUFWO0FBQzFDO0FBQ0o7QUFDSjtBQUNKOztBQUNELGFBQU8sSUFBUDtBQUNIOzs7Ozs7d0JBNUdhSixJLEVBQU07QUFDaEIsTUFBTXNCLEdBQUcsR0FBRyxJQUFJQyxLQUFKLENBQVV2QixJQUFWLENBQVo7O0FBQ0EsT0FBSyxJQUFJbUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR25CLElBQXBCLEVBQTBCbUIsQ0FBQyxFQUEzQixFQUErQjtBQUMzQjtBQUNBO0FBQ0FHLE9BQUcsQ0FBQ0gsQ0FBRCxDQUFILEdBQVMsSUFBSUksS0FBSixDQUFVdkIsSUFBVixFQUNKd0IsSUFESSxHQUVKQyxHQUZJLENBRUE7QUFBQSxhQUFPO0FBQUVuQixZQUFJLEVBQUUsSUFBUjtBQUFjSixnQkFBUSxFQUFFLEtBQXhCO0FBQStCTCxhQUFLLEVBQUUsQ0FBQztBQUF2QyxPQUFQO0FBQUEsS0FGQSxDQUFUO0FBR0g7O0FBQ0QsU0FBT3lCLEdBQVA7QUFDSDs7NkJBb0JrQmhCLEksRUFBTTdELEMsRUFBR0MsQyxFQUFHO0FBQzNCLE9BQUssSUFBSXlFLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdiLElBQUksQ0FBQ0YsTUFBekIsRUFBaUNlLENBQUMsRUFBbEMsRUFBc0M7QUFDbEMsU0FBS2xCLElBQUwsQ0FBVXhELENBQVYsRUFBYUMsQ0FBYixFQUFnQixNQUFoQixJQUEwQjRELElBQTFCO0FBQ0EsU0FBS0wsSUFBTCxDQUFVeEQsQ0FBVixFQUFhQyxDQUFiLEVBQWdCLE9BQWhCLElBQTJCeUUsQ0FBM0I7QUFDQXpFLEtBQUMsR0FIaUMsQ0FHN0I7QUFDUjtBQUNKOzsyQkFFZ0I0RCxJLEVBQU03RCxDLEVBQUdDLEMsRUFBRztBQUN6QixPQUFLLElBQUl5RSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHYixJQUFJLENBQUNGLE1BQXpCLEVBQWlDZSxDQUFDLEVBQWxDLEVBQXNDO0FBQ2xDLFNBQUtsQixJQUFMLENBQVV4RCxDQUFWLEVBQWFDLENBQWIsRUFBZ0IsTUFBaEIsSUFBMEI0RCxJQUExQjtBQUNBLFNBQUtMLElBQUwsQ0FBVXhELENBQVYsRUFBYUMsQ0FBYixFQUFnQixPQUFoQixJQUEyQnlFLENBQTNCO0FBQ0ExRSxLQUFDLEdBSGlDLENBRzdCO0FBQ1I7QUFDSjs7MENBZ0IrQjZELEksRUFBTTdELEMsRUFBR0MsQyxFQUFHO0FBQ3hDLE1BQUksS0FBS3NELElBQUwsR0FBWXRELENBQVosR0FBZ0I0RCxJQUFJLENBQUNGLE1BQXpCLEVBQWlDLE9BQU8sS0FBUDs7QUFDakMsT0FBSyxJQUFJZSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHYixJQUFJLENBQUNGLE1BQXpCLEVBQWlDZSxDQUFDLEVBQWxDLEVBQXNDO0FBQ2xDLFFBQUksS0FBS2xCLElBQUwsQ0FBVXhELENBQVYsRUFBYUMsQ0FBQyxHQUFHeUUsQ0FBakIsRUFBb0IsTUFBcEIsQ0FBSixFQUFpQyxPQUFPLEtBQVA7QUFDcEM7O0FBQ0QsU0FBTyxJQUFQO0FBQ0g7O3dDQUU2QmIsSSxFQUFNN0QsQyxFQUFHQyxDLEVBQUc7QUFDdEMsTUFBSSxLQUFLc0QsSUFBTCxHQUFZdkQsQ0FBWixHQUFnQjZELElBQUksQ0FBQ0YsTUFBekIsRUFBaUMsT0FBTyxLQUFQOztBQUNqQyxPQUFLLElBQUllLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdiLElBQUksQ0FBQ0YsTUFBekIsRUFBaUNlLENBQUMsRUFBbEMsRUFBc0M7QUFDbEMsUUFBSSxLQUFLbEIsSUFBTCxDQUFVeEQsQ0FBQyxHQUFHMEUsQ0FBZCxFQUFpQnpFLENBQWpCLEVBQW9CLE1BQXBCLENBQUosRUFBaUMsT0FBTyxLQUFQO0FBQ3BDOztBQUNELFNBQU8sSUFBUDtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRkw7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCZ0YsWTs7Ozs7QUFHakIsd0JBQVlsQyxJQUFaLEVBQWtCQyxRQUFsQixFQUE0QkMsUUFBNUIsRUFBc0M7QUFBQTs7QUFBQTs7QUFDbEMsOEJBQU1GLElBQU4sRUFBWUMsUUFBWixFQUFzQkMsUUFBdEI7O0FBRGtDOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVsQyxzTUFBcUI7QUFBRSxTQUFHLFlBQUw7QUFBbUIsU0FBRztBQUF0QixLQUFyQjs7QUFDQSxxTUFBb0IsRUFBcEI7O0FBSGtDO0FBSXJDOzs7O1dBRUQsc0JBQWE7QUFBQTs7QUFDVDFFLDJGQUFBLENBQW1DLFVBQUM0RSxHQUFEO0FBQUEsc0NBQVMsTUFBVCwwQ0FBUyxNQUFULEVBQThCQSxHQUE5QjtBQUFBLE9BQW5DO0FBQ0g7OztXQWNELGdCQUFPO0FBQ0gsVUFBSW5ELENBQUosRUFBT0MsQ0FBUCxFQUFVbUQsS0FBVjs7QUFDQSxVQUFJLHlHQUFrQk8sTUFBbEIsR0FBMkIsQ0FBL0IsRUFBa0M7QUFDOUIsWUFBSXVCLFdBQVcsMEJBQUcsSUFBSCxzQ0FBRyxJQUFILEVBQXNCLENBQXRCLEVBQXlCLHlHQUFrQnZCLE1BQTNDLENBQWY7O0FBRDhCLG1IQUVyQix5R0FBa0J3QixNQUFsQixDQUF5QkQsV0FBekIsRUFBc0MsQ0FBdEMsRUFBeUMsQ0FBekMsQ0FGcUI7O0FBRTdCbEYsU0FGNkI7QUFFMUJDLFNBRjBCO0FBR2pDLE9BSEQsTUFHTztBQUNILFdBQUc7QUFBQSw2REFDVSxJQURWLDRDQUNVLElBRFY7O0FBQUE7O0FBQ0VELFdBREY7QUFDS0MsV0FETDtBQUVGLFNBRkQsUUFHSSx3QkFBQyxJQUFELHNEQUFDLElBQUQsRUFBNEJELENBQTVCLEVBQStCQyxDQUEvQixLQUNBLHdCQUFDLElBQUQsa0NBQUMsSUFBRCxFQUFrQkQsQ0FBbEIsRUFBcUJDLENBQXJCLENBSko7QUFNSDs7QUFDRCxVQUFNWixLQUFLLEdBQUdILFFBQVEsQ0FBQ3lELGFBQVQsa0VBRVkzQyxDQUFDLEdBQUcsQ0FGaEIsK0JBRXNDQyxDQUFDLEdBQUcsQ0FGMUMsUUFBZDs7QUFLQSxVQUFJLEtBQUtnRCxRQUFMLENBQWNtQyxvQkFBZCxDQUFtQ3BGLENBQW5DLEVBQXNDQyxDQUF0QyxDQUFKLEVBQThDO0FBQzFDLG1DQUFJLElBQUosc0RBQUksSUFBSixFQUErQkQsQ0FBL0IsRUFBa0NDLENBQUMsR0FBRyxDQUF0QyxHQUEwQztBQUN0QyxtSEFBa0JxRCxJQUFsQixDQUF1QixDQUFDdEQsQ0FBRCxFQUFJQyxDQUFDLEdBQUcsQ0FBUixDQUF2QjtBQUNIOztBQUNELG1DQUFJLElBQUosc0RBQUksSUFBSixFQUErQkQsQ0FBL0IsRUFBa0NDLENBQUMsR0FBRyxDQUF0QyxHQUEwQztBQUN0QyxtSEFBa0JxRCxJQUFsQixDQUF1QixDQUFDdEQsQ0FBRCxFQUFJQyxDQUFDLEdBQUcsQ0FBUixDQUF2QjtBQUNIOztBQUNELG1DQUFJLElBQUosc0RBQUksSUFBSixFQUErQkQsQ0FBQyxHQUFHLENBQW5DLEVBQXNDQyxDQUF0QyxHQUEwQztBQUN0QyxtSEFBa0JxRCxJQUFsQixDQUF1QixDQUFDdEQsQ0FBQyxHQUFHLENBQUwsRUFBUUMsQ0FBUixDQUF2QjtBQUNIOztBQUNELG1DQUFJLElBQUosc0RBQUksSUFBSixFQUErQkQsQ0FBQyxHQUFHLENBQW5DLEVBQXNDQyxDQUF0QyxHQUEwQztBQUN0QyxtSEFBa0JxRCxJQUFsQixDQUF1QixDQUFDdEQsQ0FBQyxHQUFHLENBQUwsRUFBUUMsQ0FBUixDQUF2QjtBQUNIO0FBQ0o7O0FBQ0RaLFdBQUssQ0FBQ3FFLEtBQU47QUFDSDs7OztFQTFEcUNwQyw0Qzs7MEJBYXRCcUMsTSxFQUFRO0FBQ3BCLE1BQUlDLFdBQVcsR0FBRyxpSUFBbUIsSUFBbkIsc0NBQW1CLElBQW5CLEVBQXNDLENBQXRDLEVBQXlDLENBQXpDLEVBQWxCOztBQUNBLE1BQU1DLElBQUksR0FBRyxJQUFJQywyQ0FBSixDQUFTSCxNQUFULEVBQWlCQyxXQUFqQixDQUFiOztBQUNBLE1BQUk7QUFDQSx3REFBZSxJQUFmLDRDQUFlLElBQWY7QUFBQTtBQUFBLFFBQU81RCxDQUFQO0FBQUEsUUFBVUMsQ0FBVjs7QUFDQSxTQUFLK0MsUUFBTCxDQUFjZSxTQUFkLENBQXdCRixJQUF4QixFQUE4QjdELENBQTlCLEVBQWlDQyxDQUFqQztBQUNBLE1BQUUxQiwyRUFBRjtBQUNILEdBSkQsQ0FJRSxPQUFPaUIsQ0FBUCxFQUFVO0FBQ1IsK0VBQXFCbUUsTUFBckI7QUFDSDtBQUNKOzs2QkFxQ2tCO0FBQ2YsTUFBTTNELENBQUMsMEJBQUcsSUFBSCxzQ0FBRyxJQUFILEVBQXNCLENBQXRCLEVBQXlCLEVBQXpCLENBQVA7O0FBQ0EsTUFBTUMsQ0FBQywwQkFBRyxJQUFILHNDQUFHLElBQUgsRUFBc0IsQ0FBdEIsRUFBeUIsRUFBekIsQ0FBUDs7QUFDQSxTQUFPLENBQUNELENBQUQsRUFBSUMsQ0FBSixDQUFQO0FBQ0g7O3dCQUVhK0QsRyxFQUFLQyxHLEVBQUs7QUFDcEJELEtBQUcsR0FBR0UsSUFBSSxDQUFDQyxJQUFMLENBQVVILEdBQVYsQ0FBTjtBQUNBQyxLQUFHLEdBQUdDLElBQUksQ0FBQ0UsS0FBTCxDQUFXSCxHQUFYLENBQU47QUFDQSxTQUFPQyxJQUFJLENBQUNFLEtBQUwsQ0FBV0YsSUFBSSxDQUFDRyxNQUFMLE1BQWlCSixHQUFHLEdBQUdELEdBQXZCLElBQThCQSxHQUF6QyxDQUFQLENBSG9CLENBR2tDO0FBQ3pEOztnQ0FFcUJoRSxDLEVBQUdDLEMsRUFBRztBQUN4QixNQUFNc0QsSUFBSSxHQUFHLEtBQUtQLFFBQUwsQ0FBY08sSUFBM0I7QUFDQSxTQUNJdkQsQ0FBQyxHQUFHdUQsSUFBSixJQUNBdkQsQ0FBQyxJQUFJLENBREwsSUFFQUMsQ0FBQyxHQUFHc0QsSUFGSixJQUdBdEQsQ0FBQyxJQUFJLENBSEwsSUFJQSxDQUFDLEtBQUtnRCxRQUFMLENBQWNPLElBQWQsQ0FBbUJ4RCxDQUFuQixFQUFzQkMsQ0FBdEIsRUFBeUIsVUFBekIsQ0FMTDtBQU9IOztzQkFFV0QsQyxFQUFHQyxDLEVBQUc7QUFDZEQsR0FBQyxHQUFHQSxDQUFDLEdBQUcsQ0FBUjtBQUNBQyxHQUFDLEdBQUdBLENBQUMsR0FBRyxDQUFSO0FBQ0EsTUFBTW1ELEtBQUssR0FBRyxDQUFDcEQsQ0FBQyxHQUFHLENBQUwsSUFBVSxFQUFWLEdBQWVDLENBQTdCO0FBQ0EsU0FDS21ELEtBQUssR0FBRyxDQUFSLEtBQWMsQ0FBZCxJQUFtQnBELENBQUMsR0FBRyxDQUFKLEtBQVUsQ0FBOUIsSUFBcUNvRCxLQUFLLEdBQUcsQ0FBUixLQUFjLENBQWQsSUFBbUJwRCxDQUFDLEdBQUcsQ0FBSixLQUFVLENBRHRFO0FBR0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlGTDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQnFGLFU7Ozs7O0FBR047QUFFWCxzQkFBWXRDLElBQVosRUFBa0JDLFFBQWxCLEVBQTRCQyxRQUE1QixFQUFzQztBQUFBOztBQUFBOztBQUNsQyw4QkFBTUYsSUFBTixFQUFZQyxRQUFaLEVBQXNCQyxRQUF0Qjs7QUFEa0M7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRWxDLHNNQUFxQjtBQUFFLFNBQUcsWUFBTDtBQUFtQixTQUFHO0FBQXRCLEtBQXJCOztBQUNBLHFNQUFvQixFQUFwQjs7QUFDQSxpTUFBZ0IxRSxtRkFBQSxFQUFoQjs7QUFDQSxrTUFBaUI7QUFDYitHLFVBQUksRUFBRSxDQURPO0FBRWJDLFVBQUksRUFBRSxDQUZPO0FBR2JDLFlBQU0seVBBQXFCLEVBQXJCO0FBSE8sS0FBakI7O0FBTGtDO0FBVXJDOzs7O1dBRUQsc0JBQWE7QUFBQTs7QUFDVGpILDJGQUFBLENBQW1DLFVBQUM0RSxHQUFEO0FBQUEsc0NBQVMsTUFBVCwwQ0FBUyxNQUFULEVBQThCQSxHQUE5QjtBQUFBLE9BQW5DO0FBQ0g7OztXQWNELGdCQUFPO0FBQ0gsVUFBSW5ELENBQUosRUFBT0MsQ0FBUDs7QUFDQSxVQUFJLHlHQUFrQjBELE1BQWxCLEdBQTJCLENBQS9CLEVBQWtDO0FBQzlCLFlBQUl1QixXQUFXLDBCQUFHLElBQUgsc0NBQUcsSUFBSCxFQUFzQixDQUF0QixFQUF5Qix5R0FBa0J2QixNQUEzQyxDQUFmOztBQUQ4QixtSEFFckIseUdBQWtCd0IsTUFBbEIsQ0FBeUJELFdBQXpCLEVBQXNDLENBQXRDLEVBQXlDLENBQXpDLENBRnFCOztBQUU3QmxGLFNBRjZCO0FBRTFCQyxTQUYwQjtBQUdqQyxPQUhELE1BR087QUFDSDs7QUFDQUksZUFBTyxDQUFDb0YsS0FBUixDQUFjLHNHQUFlRCxNQUE3QjtBQUNBeEYsU0FBQyxHQUFHLHNHQUFlc0YsSUFBbkI7QUFDQXJGLFNBQUMsR0FBRyxzR0FBZXNGLElBQW5CO0FBQ0EsOEdBQWVDLE1BQWYsMEJBQXdCLElBQXhCLHNDQUF3QixJQUF4QixFQUEyQyxFQUEzQyxFQUxHLENBSzZDO0FBQ25EOztBQUNELFVBQU1uRyxLQUFLLEdBQUdILFFBQVEsQ0FBQ3lELGFBQVQsa0VBRVkzQyxDQUFDLEdBQUcsQ0FGaEIsK0JBRXNDQyxDQUFDLEdBQUcsQ0FGMUMsUUFBZDtBQUlBWixXQUFLLENBQUNxRSxLQUFOOztBQUNBLFVBQUksS0FBS1QsUUFBTCxDQUFjbUMsb0JBQWQsQ0FBbUNwRixDQUFuQyxFQUFzQ0MsQ0FBdEMsQ0FBSixFQUE4QztBQUMxQztBQUNBLFlBQUksS0FBS2dELFFBQUwsQ0FBY08sSUFBZCxDQUFtQnhELENBQW5CLEVBQXNCQyxDQUF0QixFQUF5QixNQUF6QixFQUFpQzJFLE1BQWpDLEVBQUosRUFBK0M7QUFDM0MsY0FBTWYsSUFBSSxHQUFHLEtBQUtaLFFBQUwsQ0FBY08sSUFBZCxDQUFtQnhELENBQW5CLEVBQXNCQyxDQUF0QixFQUF5QixNQUF6QixDQUFiO0FBQ0EsY0FBTTBELE1BQU0sR0FBR0UsSUFBSSxDQUFDRixNQUFwQjs7QUFDQSxjQUFNUCxLQUFLLEdBQUcscUdBQWNzQyxPQUFkLENBQXNCL0IsTUFBdEIsQ0FBZDs7QUFDQXRELGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxtQ0FBWixFQUFpRHFELE1BQWpEOztBQUNBLGNBQUlQLEtBQUssS0FBSyxDQUFDLENBQWYsRUFBa0I7QUFDZCxpSEFBYytCLE1BQWQsQ0FBcUIvQixLQUFyQixFQUE0QixDQUE1Qjs7QUFDQS9DLG1CQUFPLENBQUNDLEdBQVIsQ0FBWSw0QkFBWix1RkFBMEMsSUFBMUM7QUFDSDtBQUNKLFNBVEQsTUFTTztBQUNILHFDQUFJLElBQUosc0RBQUksSUFBSixFQUErQk4sQ0FBL0IsRUFBa0NDLENBQUMsR0FBRyxDQUF0QyxHQUEwQztBQUN0QyxxSEFBa0JxRCxJQUFsQixDQUF1QixDQUFDdEQsQ0FBRCxFQUFJQyxDQUFDLEdBQUcsQ0FBUixDQUF2QjtBQUNIOztBQUNELHFDQUFJLElBQUosc0RBQUksSUFBSixFQUErQkQsQ0FBL0IsRUFBa0NDLENBQUMsR0FBRyxDQUF0QyxHQUEwQztBQUN0QyxxSEFBa0JxRCxJQUFsQixDQUF1QixDQUFDdEQsQ0FBRCxFQUFJQyxDQUFDLEdBQUcsQ0FBUixDQUF2QjtBQUNIOztBQUNELHFDQUFJLElBQUosc0RBQUksSUFBSixFQUErQkQsQ0FBQyxHQUFHLENBQW5DLEVBQXNDQyxDQUF0QyxHQUEwQztBQUN0QyxxSEFBa0JxRCxJQUFsQixDQUF1QixDQUFDdEQsQ0FBQyxHQUFHLENBQUwsRUFBUUMsQ0FBUixDQUF2QjtBQUNIOztBQUNELHFDQUFJLElBQUosc0RBQUksSUFBSixFQUErQkQsQ0FBQyxHQUFHLENBQW5DLEVBQXNDQyxDQUF0QyxHQUEwQztBQUN0QyxxSEFBa0JxRCxJQUFsQixDQUF1QixDQUFDdEQsQ0FBQyxHQUFHLENBQUwsRUFBUUMsQ0FBUixDQUF2QjtBQUNIO0FBQ0o7QUFDSjtBQUNKOzs7O0VBNUVtQ3FCLDRDOzswQkFxQnBCcUMsTSxFQUFRO0FBQ3BCLE1BQUlDLFdBQVcsR0FBRyxpSUFBbUIsSUFBbkIsc0NBQW1CLElBQW5CLEVBQXNDLENBQXRDLEVBQXlDLENBQXpDLEVBQWxCOztBQUNBLE1BQU1DLElBQUksR0FBRyxJQUFJQywyQ0FBSixDQUFTSCxNQUFULEVBQWlCQyxXQUFqQixDQUFiOztBQUNBLE1BQUk7QUFDQSx1REFBZSxJQUFmLDRDQUFlLElBQWY7QUFBQTtBQUFBLFFBQU81RCxDQUFQO0FBQUEsUUFBVUMsQ0FBVjs7QUFDQSxTQUFLK0MsUUFBTCxDQUFjZSxTQUFkLENBQXdCRixJQUF4QixFQUE4QjdELENBQTlCLEVBQWlDQyxDQUFqQztBQUNBLE1BQUUxQiwyRUFBRjtBQUNILEdBSkQsQ0FJRSxPQUFPaUIsQ0FBUCxFQUFVO0FBQ1IsK0VBQXFCbUUsTUFBckI7QUFDSDtBQUNKOzs2QkErQ2tCO0FBQ2YsTUFBTTNELENBQUMsMEJBQUcsSUFBSCxzQ0FBRyxJQUFILEVBQXNCLENBQXRCLEVBQXlCLEVBQXpCLENBQVA7O0FBQ0EsTUFBTUMsQ0FBQywwQkFBRyxJQUFILHNDQUFHLElBQUgsRUFBc0IsQ0FBdEIsRUFBeUIsRUFBekIsQ0FBUDs7QUFDQSxTQUFPLENBQUNELENBQUQsRUFBSUMsQ0FBSixDQUFQO0FBQ0g7O3dCQUVhK0QsRyxFQUFLQyxHLEVBQUs7QUFDcEJELEtBQUcsR0FBR0UsSUFBSSxDQUFDQyxJQUFMLENBQVVILEdBQVYsQ0FBTjtBQUNBQyxLQUFHLEdBQUdDLElBQUksQ0FBQ0UsS0FBTCxDQUFXSCxHQUFYLENBQU47QUFDQSxTQUFPQyxJQUFJLENBQUNFLEtBQUwsQ0FBV0YsSUFBSSxDQUFDRyxNQUFMLE1BQWlCSixHQUFHLEdBQUdELEdBQXZCLElBQThCQSxHQUF6QyxDQUFQLENBSG9CLENBR2tDO0FBQ3pEOztnQ0FFcUJoRSxDLEVBQUdDLEMsRUFBRztBQUN4QixNQUFNc0QsSUFBSSxHQUFHLEtBQUtQLFFBQUwsQ0FBY08sSUFBM0I7QUFDQSxTQUNJdkQsQ0FBQyxHQUFHdUQsSUFBSixJQUNBdkQsQ0FBQyxJQUFJLENBREwsSUFFQUMsQ0FBQyxHQUFHc0QsSUFGSixJQUdBdEQsQ0FBQyxJQUFJLENBSEwsSUFJQSxDQUFDLEtBQUtnRCxRQUFMLENBQWNPLElBQWQsQ0FBbUJ4RCxDQUFuQixFQUFzQkMsQ0FBdEIsRUFBeUIsVUFBekIsQ0FMTDtBQU9IOzsyQ0FFZ0M7QUFBQTs7QUFDN0IsTUFBTTBGLFFBQVEsR0FBRyx5RkFBSCxZQUFkOztBQUNBLE1BQU1ILE1BQU0sR0FBR0csUUFBUSxDQUFDSCxNQUF4Qjs7QUFGNkIsNkJBR3BCZCxDQUhvQjtBQUFBLGlDQUloQkMsQ0FKZ0I7QUFLckI7QUFDQSxVQUFJLE1BQUksQ0FBQzFCLFFBQUwsQ0FBY08sSUFBZCxDQUFtQmtCLENBQW5CLEVBQXNCQyxDQUF0QixFQUF5QixVQUF6QixDQUFKLEVBQTBDO0FBQ3RDYSxjQUFNLENBQUNkLENBQUQsQ0FBTixDQUFVQyxDQUFWLElBQWUsQ0FBZjtBQUNBO0FBQ0g7O0FBQ0QsaUdBQUksV0FBSixDQUFjdkYsT0FBZCxDQUFzQixVQUFDdUUsTUFBRCxFQUFZO0FBQzlCO0FBQ0EsWUFBSWlDLElBQUksR0FBRyxJQUFYOztBQUNBLGFBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2xDLE1BQXBCLEVBQTRCa0MsQ0FBQyxFQUE3QixFQUFpQztBQUM3QjtBQUNBLGNBQ0ksd0JBQUMsTUFBRCxzQ0FBQyxNQUFELEVBQW9CbkIsQ0FBcEIsRUFBdUJDLENBQUMsR0FBR2tCLENBQTNCLEtBQ0MsTUFBSSxDQUFDNUMsUUFBTCxDQUFjTyxJQUFkLENBQW1Ca0IsQ0FBbkIsRUFBc0JDLENBQUMsR0FBR2tCLENBQTFCLEVBQTZCLFVBQTdCLEtBQ0csQ0FBQyxNQUFJLENBQUM1QyxRQUFMLENBQWNPLElBQWQsQ0FBbUJrQixDQUFuQixFQUFzQkMsQ0FBQyxHQUFHa0IsQ0FBMUIsRUFBNkIsTUFBN0IsQ0FGTCxJQUdDLE1BQUksQ0FBQzVDLFFBQUwsQ0FBY08sSUFBZCxDQUFtQmtCLENBQW5CLEVBQXNCQyxDQUFDLEdBQUdrQixDQUExQixFQUE2QixVQUE3QixLQUNHLE1BQUksQ0FBQzVDLFFBQUwsQ0FBY08sSUFBZCxDQUFtQmtCLENBQW5CLEVBQXNCQyxDQUFDLEdBQUdrQixDQUExQixFQUE2QixNQUE3QixFQUFxQ2pCLE1BQXJDLEVBTFIsRUFNRTtBQUNFZ0IsZ0JBQUksR0FBRyxLQUFQO0FBQ0E7QUFDSDtBQUNKOztBQUNELFlBQUlBLElBQUosRUFBVTtBQUNOLGVBQUssSUFBSUMsRUFBQyxHQUFHLENBQWIsRUFBZ0JBLEVBQUMsR0FBR2xDLE1BQXBCLEVBQTRCa0MsRUFBQyxFQUE3QixFQUFpQztBQUM3QixnQkFBSSxNQUFJLENBQUM1QyxRQUFMLENBQWNPLElBQWQsQ0FBbUJrQixDQUFuQixFQUFzQkMsQ0FBQyxHQUFHa0IsRUFBMUIsRUFBNkIsVUFBN0IsQ0FBSixFQUE4QztBQUMxQ0wsb0JBQU0sQ0FBQ2QsQ0FBRCxDQUFOLENBQVVDLENBQUMsR0FBR2tCLEVBQWQsSUFBbUIsQ0FBbkI7QUFDSCxhQUZELE1BRU87QUFDSEwsb0JBQU0sQ0FBQ2QsQ0FBRCxDQUFOLENBQVVDLENBQUMsR0FBR2tCLEVBQWQ7QUFDSDtBQUNKO0FBQ0osU0F4QjZCLENBMEI5Qjs7O0FBQ0FELFlBQUksR0FBRyxJQUFQOztBQUNBLGFBQUssSUFBSUMsR0FBQyxHQUFHLENBQWIsRUFBZ0JBLEdBQUMsR0FBR2xDLE1BQXBCLEVBQTRCa0MsR0FBQyxFQUE3QixFQUFpQztBQUM3QixjQUNJLHdCQUFDLE1BQUQsc0NBQUMsTUFBRCxFQUFvQm5CLENBQUMsR0FBR21CLEdBQXhCLEVBQTJCbEIsQ0FBM0IsS0FDQyxNQUFJLENBQUMxQixRQUFMLENBQWNPLElBQWQsQ0FBbUJrQixDQUFDLEdBQUdtQixHQUF2QixFQUEwQmxCLENBQTFCLEVBQTZCLFVBQTdCLEtBQ0csQ0FBQyxNQUFJLENBQUMxQixRQUFMLENBQWNPLElBQWQsQ0FBbUJrQixDQUFDLEdBQUdtQixHQUF2QixFQUEwQmxCLENBQTFCLEVBQTZCLE1BQTdCLENBRkwsSUFHQyxNQUFJLENBQUMxQixRQUFMLENBQWNPLElBQWQsQ0FBbUJrQixDQUFDLEdBQUdtQixHQUF2QixFQUEwQmxCLENBQTFCLEVBQTZCLFVBQTdCLEtBQ0csTUFBSSxDQUFDMUIsUUFBTCxDQUFjTyxJQUFkLENBQW1Ca0IsQ0FBQyxHQUFHbUIsR0FBdkIsRUFBMEJsQixDQUExQixFQUE2QixNQUE3QixFQUFxQ0MsTUFBckMsRUFMUixFQU1FO0FBQ0VnQixnQkFBSSxHQUFHLEtBQVA7QUFDQTtBQUNIO0FBQ0o7O0FBRUQsWUFBSUEsSUFBSixFQUFVO0FBQ04sZUFBSyxJQUFJQyxHQUFDLEdBQUcsQ0FBYixFQUFnQkEsR0FBQyxHQUFHbEMsTUFBcEIsRUFBNEJrQyxHQUFDLEVBQTdCLEVBQWlDO0FBQzdCLGdCQUFJLE1BQUksQ0FBQzVDLFFBQUwsQ0FBY08sSUFBZCxDQUFtQmtCLENBQUMsR0FBR21CLEdBQXZCLEVBQTBCbEIsQ0FBMUIsRUFBNkIsVUFBN0IsQ0FBSixFQUE4QztBQUMxQ2Esb0JBQU0sQ0FBQ2QsQ0FBQyxHQUFHbUIsR0FBTCxDQUFOLENBQWNsQixDQUFkLElBQW1CLENBQW5CO0FBQ0gsYUFGRCxNQUVPO0FBQ0hhLG9CQUFNLENBQUNkLENBQUMsR0FBR21CLEdBQUwsQ0FBTixDQUFjbEIsQ0FBZDtBQUNIO0FBQ0o7QUFDSjtBQUNKLE9BbEREOztBQW9EQSxVQUNJYSxNQUFNLENBQUNkLENBQUQsQ0FBTixDQUFVQyxDQUFWLElBQ0FhLE1BQU0sQ0FBQywyRkFBSSxZQUFKLENBQWVGLElBQWhCLENBQU4sQ0FBNEIsMkZBQUksWUFBSixDQUFlQyxJQUEzQyxDQUZKLEVBR0U7QUFDRSxtR0FBSSxZQUFKLENBQWVELElBQWYsR0FBc0JaLENBQXRCO0FBQ0EsbUdBQUksWUFBSixDQUFlYSxJQUFmLEdBQXNCWixDQUF0QjtBQUNIO0FBcEVvQjs7QUFJekIsU0FBSyxJQUFJQSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEVBQXBCLEVBQXdCQSxDQUFDLEVBQXpCLEVBQTZCO0FBQUEsd0JBQXBCQSxDQUFvQjs7QUFBQSwrQkFJckI7QUE2RFA7QUFyRXdCOztBQUc3QixPQUFLLElBQUlELENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsRUFBcEIsRUFBd0JBLENBQUMsRUFBekIsRUFBNkI7QUFBQSxVQUFwQkEsQ0FBb0I7QUFtRTVCO0FBQ0o7O3dCQUVhbkIsSSxFQUFNO0FBQ2hCLE1BQU1zQixHQUFHLEdBQUcsSUFBSUMsS0FBSixDQUFVdkIsSUFBVixDQUFaOztBQUNBLE9BQUssSUFBSW1CLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUduQixJQUFwQixFQUEwQm1CLENBQUMsRUFBM0IsRUFBK0I7QUFDM0JHLE9BQUcsQ0FBQ0gsQ0FBRCxDQUFILEdBQVMsSUFBSUksS0FBSixDQUFVdkIsSUFBVixFQUFnQndCLElBQWhCLENBQXFCLENBQXJCLENBQVQ7QUFDSDs7QUFDRCxTQUFPRixHQUFQO0FBQ0g7O3dCQUVhN0UsQyxFQUFHQyxDLEVBQUc7QUFDaEIsTUFBTXNELElBQUksR0FBRyxLQUFLUCxRQUFMLENBQWNPLElBQTNCO0FBQ0EsU0FBT3ZELENBQUMsR0FBR3VELElBQUosSUFBWXZELENBQUMsSUFBSSxDQUFqQixJQUFzQkMsQ0FBQyxHQUFHc0QsSUFBMUIsSUFBa0N0RCxDQUFDLElBQUksQ0FBOUM7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQzdMZ0JxQixNO0FBQ2pCLGtCQUFZeUIsSUFBWixFQUFrQkMsUUFBbEIsRUFBNEJDLFFBQTVCLEVBQXNDO0FBQUE7O0FBQ2xDLFFBQUksQ0FBQ0QsUUFBTCxFQUFlLE1BQU0scUJBQU47QUFDZixRQUFJLENBQUNDLFFBQUwsRUFBZSxNQUFNLDBCQUFOO0FBQ2YsU0FBS0QsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtGLElBQUwsR0FBWUEsSUFBWjtBQUNIOzs7O1dBRUQsZ0JBQU8vQyxDQUFQLEVBQVVDLENBQVYsRUFBYTtBQUNUSSxhQUFPLENBQUNDLEdBQVIsV0FBZSxLQUFLeUMsSUFBcEIsd0JBQXNDL0MsQ0FBdEMsZUFBNENDLENBQTVDO0FBQ0EsV0FBS2dELFFBQUwsQ0FBYzZDLGFBQWQsQ0FBNEI5RixDQUE1QixFQUErQkMsQ0FBL0I7QUFDSDs7O1dBRUQsa0JBQVM7QUFDTCxhQUFPLEtBQUtnRCxRQUFMLENBQWNiLFdBQWQsRUFBUDtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNoQmdCMEIsSTtBQUNuQixnQkFBWUgsTUFBWixFQUFnRDtBQUFBLFFBQTVCQyxXQUE0Qix1RUFBZCxZQUFjOztBQUFBOztBQUFBOztBQUM5QyxRQUFJRCxNQUFNLElBQUksQ0FBZCxFQUFpQixNQUFNLElBQUlhLEtBQUosQ0FBVSx3QkFBVixDQUFOO0FBQ2pCLFNBQUtiLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtvQyxVQUFMLEdBQWtCLEVBQWxCO0FBQ0EsU0FBS25DLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0Q7Ozs7V0FFRCxhQUFJUixLQUFKLEVBQVc7QUFDVCxVQUFJLHVFQUFtQkEsS0FBbkIsS0FBNkIsQ0FBQyxLQUFLMkMsVUFBTCxDQUFnQjFDLFFBQWhCLENBQXlCRCxLQUF6QixDQUFsQyxFQUNFLEtBQUsyQyxVQUFMLENBQWdCekMsSUFBaEIsQ0FBcUJGLEtBQXJCO0FBQ0g7OztXQUVELGtCQUFTO0FBQ1AsYUFBTyxLQUFLTyxNQUFMLEtBQWdCLEtBQUtvQyxVQUFMLENBQWdCcEMsTUFBdkM7QUFDRDs7Ozs7O3dCQUVhUCxLLEVBQU87QUFDbkIsU0FBT0EsS0FBSyxHQUFHLEtBQUtPLE1BQWIsSUFBdUJQLEtBQUssSUFBSSxDQUF2QztBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0NoQkg7O0FBQ0EsU0FBUzRDLFlBQVQsR0FBd0I7QUFDcEJsQixPQUFLLENBQUNtQixJQUFOLENBQVcvRyxRQUFRLENBQUNDLGdCQUFULENBQTBCLHlCQUExQixDQUFYLEVBQWlFNkYsR0FBakUsQ0FDSSxVQUFDeEIsSUFBRCxFQUFVO0FBQ05BLFFBQUksQ0FBQzBDLFlBQUwsQ0FBa0IsV0FBbEIsRUFBK0IsS0FBL0I7O0FBQ0EsU0FBSyxJQUFJeEIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxHQUFwQixFQUF5QkEsQ0FBQyxFQUExQixFQUE4QjtBQUMxQixVQUFNckYsS0FBSyxHQUFHSCxRQUFRLENBQUNpSCxhQUFULENBQXVCLEtBQXZCLENBQWQ7QUFDQTlHLFdBQUssQ0FBQ29CLFNBQU4sQ0FBZ0JDLEdBQWhCLENBQW9CLE9BQXBCO0FBQ0FyQixXQUFLLENBQUM2RyxZQUFOLENBQW1CLGFBQW5CLEVBQW1DeEIsQ0FBQyxHQUFHLEVBQUwsR0FBVyxDQUE3QztBQUNBckYsV0FBSyxDQUFDNkcsWUFBTixDQUFtQixhQUFuQixFQUFrQ3hCLENBQUMsR0FBRyxDQUF0QztBQUNBckYsV0FBSyxDQUFDNkcsWUFBTixDQUFtQixVQUFuQixFQUErQmhDLElBQUksQ0FBQ0UsS0FBTCxDQUFXTSxDQUFDLEdBQUcsRUFBSixHQUFTLENBQXBCLENBQS9CO0FBQ0FyRixXQUFLLENBQUM2RyxZQUFOLENBQW1CLFdBQW5CLEVBQWdDLEtBQWhDO0FBQ0ExQyxVQUFJLENBQUM0QyxXQUFMLENBQWlCL0csS0FBakI7QUFDSDtBQUNKLEdBWkw7QUFjSDs7QUFFRCxTQUFTZ0gsWUFBVCxDQUFzQkMsT0FBdEIsRUFBK0I7QUFDM0JBLFNBQU8sQ0FBQ2xILE9BQVIsQ0FBZ0IsVUFBQytELEdBQUQ7QUFBQSxXQUFTb0QsV0FBVyxDQUFDcEQsR0FBRCxDQUFwQjtBQUFBLEdBQWhCO0FBQ0g7O0FBRUQsU0FBU3FELGVBQVQsR0FBMkI7QUFDdkJuRyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaO0FBQ0FwQixVQUFRLENBQUNDLGdCQUFULENBQTBCLDBDQUExQixFQUFzRUMsT0FBdEUsQ0FBOEUsVUFBQ3dCLFNBQUQsRUFBZTtBQUN6RkEsYUFBUyxDQUFDNkYsS0FBVixDQUFnQkMsS0FBaEIsYUFDSXhILFFBQVEsQ0FBQ3lELGFBQVQsQ0FBdUIsY0FBdkIsRUFBdUNnRSxXQUQzQztBQUdILEdBSkQ7QUFLSCxDLENBRUQ7OztBQUNBLFNBQVNKLFdBQVQsQ0FBcUI1QyxNQUFyQixFQUE2QjtBQUN6Qm1CLE9BQUssQ0FBQ21CLElBQU4sQ0FBVy9HLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsWUFBMUIsQ0FBWCxFQUFvRDZGLEdBQXBELENBQXdELFVBQUM0QixRQUFELEVBQWM7QUFDbEUsUUFBTUMsVUFBVSxHQUFHRCxRQUFRLENBQUMvRyxZQUFULENBQXNCLFNBQXRCLENBQW5CO0FBQ0EsUUFBTWdFLElBQUksR0FBRzNFLFFBQVEsQ0FBQ2lILGFBQVQsQ0FBdUIsS0FBdkIsQ0FBYjtBQUNBdEMsUUFBSSxDQUFDcEQsU0FBTCxDQUFlQyxHQUFmLENBQW1CLE1BQW5CO0FBQ0FtRCxRQUFJLENBQUNxQyxZQUFMLENBQWtCLFdBQWxCLEVBQStCLElBQS9CO0FBQ0FyQyxRQUFJLENBQUNxQyxZQUFMLENBQWtCLFNBQWxCLEVBQTZCVyxVQUE3Qjs7QUFDQSxTQUFLLElBQUluQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHZixNQUFwQixFQUE0QmUsQ0FBQyxFQUE3QixFQUFpQztBQUM3QixVQUFNckYsS0FBSyxHQUFHSCxRQUFRLENBQUNpSCxhQUFULENBQXVCLEtBQXZCLENBQWQ7QUFDQTlHLFdBQUssQ0FBQ29CLFNBQU4sQ0FBZ0JDLEdBQWhCLENBQW9CLFlBQXBCO0FBQ0FyQixXQUFLLENBQUNvSCxLQUFOLENBQVlDLEtBQVosYUFDSXhILFFBQVEsQ0FBQ3lELGFBQVQsQ0FBdUIsY0FBdkIsRUFBdUNnRSxXQUQzQztBQUdBdEgsV0FBSyxDQUFDNkcsWUFBTixDQUFtQixXQUFuQixFQUFnQyxLQUFoQztBQUNBckMsVUFBSSxDQUFDdUMsV0FBTCxDQUFpQi9HLEtBQWpCO0FBQ0g7O0FBQ0R1SCxZQUFRLENBQUNSLFdBQVQsQ0FBcUJ2QyxJQUFyQjtBQUNILEdBaEJEO0FBaUJIOztBQUVjLFNBQVNuQyxvQkFBVCxHQUFnQztBQUMzQ3NFLGNBQVk7QUFDWkssY0FBWSxDQUFDOUgsNEVBQUQsQ0FBWjtBQUNBdUksUUFBTSxDQUFDQyxRQUFQLEdBQWtCUCxlQUFsQjtBQUNILEM7Ozs7Ozs7Ozs7Ozs7OztBQzNEYyxTQUFTMUUsbUJBQVQsQ0FBNkJmLE9BQTdCLEVBQXNDO0FBQ25EN0IsVUFBUSxDQUNMQyxnQkFESCxvQ0FFR0MsT0FGSCxDQUVXLFVBQUN5RSxJQUFELEVBQVU7QUFDakJBLFFBQUksQ0FBQzRDLEtBQUwsQ0FBV08sT0FBWCxHQUFxQixNQUFyQjtBQUNELEdBSkg7O0FBTUEsT0FBSyxJQUFJdEMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxFQUFwQixFQUF3QkEsQ0FBQyxFQUF6QixFQUE2QjtBQUMzQixTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsRUFBcEIsRUFBd0JBLENBQUMsRUFBekIsRUFBNkI7QUFDM0IsVUFBSTVELE9BQU8sQ0FBQ3lDLElBQVIsQ0FBYWtCLENBQWIsRUFBZ0JDLENBQWhCLEVBQW1CLE1BQW5CLENBQUosRUFBZ0M7QUFDOUIsWUFBTXRGLEtBQUssR0FBR0gsUUFBUSxDQUFDeUQsYUFBVCxnRUFFVStCLENBQUMsR0FBRyxDQUZkLCtCQUVvQ0MsQ0FBQyxHQUFHLENBRnhDLFFBQWQ7QUFJQXRGLGFBQUssQ0FBQ29CLFNBQU4sQ0FBZ0JDLEdBQWhCLENBQW9CLG9CQUFwQjtBQUNBckIsYUFBSyxDQUFDb0IsU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0IsU0FBcEI7QUFDRDtBQUNGO0FBQ0Y7QUFDRixDOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkJEO0FBRWUsU0FBU3FCLGlCQUFULEdBQTZCO0FBQ3hDLFNBQU8sSUFBSWIsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVThGLE1BQVYsRUFBcUI7QUFDcEMsS0FBQyxTQUFTQyx5QkFBVCxHQUFxQztBQUNsQyxVQUNJM0ksMEVBQUEsS0FBNkJBLDJFQUE3QixJQUNBQSwwRUFBQSxLQUE2QkEsMkVBRmpDLEVBSUksT0FBTzRDLE9BQU8sRUFBZDtBQUNKQyxnQkFBVSxDQUFDOEYseUJBQUQsRUFBNEIsSUFBNUIsQ0FBVjtBQUNILEtBUEQ7QUFRSCxHQVRNLENBQVA7QUFVSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkQ7QUFDQTtBQUVBLElBQUlDLFdBQUosRUFDSUMsaUJBREosRUFFSUMsc0JBRkosRUFHSUMsb0JBSEo7QUFLQSxJQUFJQyxPQUFKLEVBQWFDLE9BQWIsQyxDQUNBOztBQUNBdEksUUFBUSxDQUFDSSxnQkFBVCxDQUEwQixVQUExQixFQUFzQyxVQUFDbUksS0FBRCxFQUFXO0FBQzdDQSxPQUFLLEdBQUdBLEtBQUssSUFBSVgsTUFBTSxDQUFDVyxLQUF4QjtBQUNBRixTQUFPLEdBQUdFLEtBQUssQ0FBQ0YsT0FBaEI7QUFDQUMsU0FBTyxHQUFHQyxLQUFLLENBQUNELE9BQWhCO0FBQ0gsQ0FKRDtBQU1lLFNBQVM1RixpQkFBVCxDQUEyQmYsVUFBM0IsRUFBdUM7QUFDbEQzQixVQUFRLENBQ0hDLGdCQURMLENBQ3NCLGlDQUR0QixFQUVLQyxPQUZMLENBRWEsVUFBQ3lFLElBQUQsRUFBVTtBQUNmQSxRQUFJLENBQUN2RSxnQkFBTCxDQUFzQixXQUF0QixFQUFtQ29JLGVBQW5DO0FBQ0E3RCxRQUFJLENBQUN2RSxnQkFBTCxDQUFzQixTQUF0QixFQUFpQyxVQUFDRSxDQUFEO0FBQUEsYUFDN0JtSSxhQUFhLENBQUNuSSxDQUFELEVBQUlxQixVQUFKLENBRGdCO0FBQUEsS0FBakM7QUFHSCxHQVBMO0FBUUg7O0FBRUQsU0FBUzZHLGVBQVQsQ0FBeUJsSSxDQUF6QixFQUE0QjtBQUN4QkEsR0FBQyxDQUFDb0ksZUFBRjtBQUNBVCxhQUFXLEdBQUczSCxDQUFDLENBQUNDLE1BQWhCO0FBQ0FELEdBQUMsQ0FBQ3FJLFlBQUYsQ0FBZUMsT0FBZixDQUF1QixZQUF2QixFQUFxQyxFQUFyQztBQUNBekgsU0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQVosRUFKd0IsQ0FJVTs7QUFDbEMsTUFBSSxDQUFDNkcsV0FBVyxDQUFDakgsT0FBWixDQUFvQixPQUFwQixDQUFMLEVBQW1DO0FBQy9CRyxXQUFPLENBQUNDLEdBQVIsQ0FBWTZHLFdBQVo7QUFDQTlHLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVo7QUFDQTtBQUNIOztBQUNELE1BQUk7QUFDQSxTQUFLbUcsS0FBTCxDQUFXc0IsT0FBWCxHQUFxQixLQUFyQjtBQUVBWCxxQkFBaUIsR0FBR0QsV0FBVyxDQUFDYSxpQkFBaEM7QUFDQSxRQUFNQyxJQUFJLEdBQUdkLFdBQVcsQ0FBQ2UscUJBQVosRUFBYjtBQUNBWix3QkFBb0IsR0FDaEJSLE1BQU0sQ0FBQ3FCLGdCQUFQLENBQXdCaEIsV0FBeEIsRUFBcUNpQixhQUR6Qzs7QUFFQSxRQUFJZCxvQkFBb0IsS0FBSyxLQUE3QixFQUFvQztBQUNoQyxVQUFNZSxVQUFVLEdBQUdKLElBQUksQ0FBQ3ZCLEtBQUwsR0FBYVUsaUJBQWhDO0FBQ0FDLDRCQUFzQixHQUFHbkQsSUFBSSxDQUFDRSxLQUFMLENBQVc1RSxDQUFDLENBQUM4SSxPQUFGLEdBQVlELFVBQVosR0FBeUIsQ0FBcEMsQ0FBekI7QUFDSCxLQUhELE1BR08sSUFBSWYsb0JBQW9CLEtBQUssUUFBN0IsRUFBdUM7QUFDMUMsVUFBTWlCLFdBQVcsR0FBR04sSUFBSSxDQUFDTyxNQUFMLEdBQWNwQixpQkFBbEM7QUFDQUMsNEJBQXNCLEdBQUduRCxJQUFJLENBQUNFLEtBQUwsQ0FBVzVFLENBQUMsQ0FBQ2lKLE9BQUYsR0FBWUYsV0FBWixHQUEwQixDQUFyQyxDQUF6QjtBQUNIO0FBQ0osR0FkRCxDQWNFLGdCQUFNO0FBQ0pHLGtCQUFjLENBQUNsSixDQUFELENBQWQ7QUFDSDtBQUNKOztBQUVELFNBQVNtSSxhQUFULENBQXVCbkksQ0FBdkIsRUFBMEJxQixVQUExQixFQUFzQztBQUNsQ3JCLEdBQUMsQ0FBQ21KLGNBQUY7QUFDQW5KLEdBQUMsQ0FBQ29JLGVBQUY7O0FBQ0EsTUFBSSxDQUFDVCxXQUFXLENBQUNqSCxPQUFaLENBQW9CLE9BQXBCLENBQUwsRUFBbUM7QUFDL0JHLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVo7QUFDQTtBQUNIOztBQUNERCxTQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaO0FBQ0FzSSxpQkFBZSxDQUFDcEosQ0FBRCxFQUFJcUIsVUFBSixDQUFmO0FBQ0FSLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaO0FBQ0g7O0FBRUQsU0FBU3NJLGVBQVQsQ0FBeUJwSixDQUF6QixFQUE0QnFCLFVBQTVCLEVBQXdDO0FBQ3BDLE1BQUk7QUFDQVIsV0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWjtBQUNBLFFBQU11SSxJQUFJLEdBQUczSixRQUFRLENBQUM0SixpQkFBVCxDQUEyQnZCLE9BQTNCLEVBQW9DQyxPQUFwQyxDQUFiO0FBQ0FuSCxXQUFPLENBQUNDLEdBQVIsQ0FBWXVJLElBQUksQ0FBQyxDQUFELENBQWhCO0FBQ0F4SSxXQUFPLENBQUNDLEdBQVIsQ0FBWTZHLFdBQVosRUFKQSxDQUtBOztBQUNBLFFBQ0kwQixJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVEzSSxPQUFSLG1DQUNBa0gsaUJBQWlCLElBQUksQ0FGekIsRUFHRTtBQUNFL0csYUFBTyxDQUFDQyxHQUFSLENBQVkseUJBQVo7QUFDQSxVQUFNakIsS0FBSyxHQUFHd0osSUFBSSxDQUFDLENBQUQsQ0FBbEI7O0FBQ0EseUJBQXNCRSxXQUFXLENBQUMxSixLQUFELENBQWpDO0FBQUE7QUFBQSxVQUFPMkosR0FBUDtBQUFBLFVBQVlDLE1BQVo7O0FBQ0EsVUFBTUMsYUFBYSxHQUFHQyxnQkFBZ0IsQ0FDbENILEdBRGtDLEVBRWxDQyxNQUZrQyxFQUdsQzNCLG9CQUhrQyxDQUF0QztBQUtBakgsYUFBTyxDQUFDQyxHQUFSLENBQVk0SSxhQUFaOztBQUNBLFVBQUksQ0FBQ0EsYUFBTCxFQUFvQjtBQUNoQjdJLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaO0FBQ0FvSSxzQkFBYyxDQUFDbEosQ0FBRCxDQUFkO0FBQ0E7QUFDSDs7QUFDRCwwQkFBZXVKLFdBQVcsQ0FBQ0csYUFBRCxDQUExQjtBQUFBO0FBQUEsVUFBT2xKLENBQVA7QUFBQSxVQUFVQyxDQUFWOztBQUNBLFVBQU0yRCxXQUFXLEdBQ2IwRCxvQkFBb0IsS0FBSyxLQUF6QixHQUFpQyxZQUFqQyxHQUFnRCxVQURwRDtBQUdBLFVBQU16RCxJQUFJLEdBQUcsSUFBSUMsaURBQUosQ0FBU3NELGlCQUFULEVBQTRCeEQsV0FBNUIsQ0FBYjs7QUFDQSxVQUFJO0FBQ0EvQyxrQkFBVSxDQUFDa0QsU0FBWCxDQUFxQkYsSUFBckIsRUFBMkI3RCxDQUFDLEdBQUcsQ0FBL0IsRUFBa0NDLENBQUMsR0FBRyxDQUF0QyxFQURBLENBQzBDOztBQUMxQyxVQUFFMUIsMEVBQUY7QUFDQTZLLHVCQUFlLENBQ1h6SixRQUFRLENBQUN1SixhQUFhLENBQUNySixZQUFkLENBQTJCLGFBQTNCLENBQUQsQ0FERyxFQUVYK0QsV0FGVyxDQUFmO0FBSUEsWUFBTThDLEtBQUssR0FDUEksTUFBTSxDQUFDdUMsVUFBUCxJQUNBbkssUUFBUSxDQUFDb0ssZUFBVCxDQUF5QkMsV0FEekIsSUFFQXJLLFFBQVEsQ0FBQ3NLLElBQVQsQ0FBY0QsV0FIbEI7QUFJQWxKLGVBQU8sQ0FBQ0MsR0FBUixDQUFZb0csS0FBWjtBQUNBLFlBQUlBLEtBQUssR0FBRyxHQUFaLEVBQWlCUyxXQUFXLENBQUNWLEtBQVosQ0FBa0JnRCxVQUFsQixHQUErQixRQUEvQixDQUFqQixLQUNLdEMsV0FBVyxDQUFDVixLQUFaLENBQWtCTyxPQUFsQixHQUE0QixNQUE1QjtBQUNMO0FBQ0gsT0FmRCxDQWVFLE9BQU8wQyxHQUFQLEVBQVk7QUFDVnJKLGVBQU8sQ0FBQ0MsR0FBUixDQUFZb0osR0FBRyxDQUFDQyxPQUFoQjtBQUNBakIsc0JBQWMsQ0FBQ2xKLENBQUQsQ0FBZDtBQUNBO0FBQ0g7QUFDSixLQTNDRCxNQTJDTztBQUNIYSxhQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWjtBQUNBb0ksb0JBQWMsQ0FBQ2xKLENBQUQsQ0FBZDtBQUFrQjs7QUFBQTtBQUN6QixHQXBERCxDQW9ERSxpQkFBTTtBQUNKa0osa0JBQWMsQ0FBQ2xKLENBQUQsQ0FBZDtBQUNIO0FBQ0o7O0FBRUQsU0FBUzJKLGdCQUFULENBQTBCSCxHQUExQixFQUErQkMsTUFBL0IsRUFBdUNXLFNBQXZDLEVBQWtEO0FBQzlDLE1BQUlBLFNBQVMsS0FBSyxLQUFsQixFQUNJLE9BQU8xSyxRQUFRLENBQUN5RCxhQUFULG1EQUN3Q3FHLEdBRHhDLCtCQUVDQyxNQUFNLEdBQUc1QixzQkFBVCxHQUFrQyxDQUZuQyxRQUFQLENBREosS0FNSyxJQUFJdUMsU0FBUyxLQUFLLFFBQWxCLEVBQTRCO0FBQzdCLFdBQU8xSyxRQUFRLENBQUN5RCxhQUFULG1EQUVDcUcsR0FBRyxHQUFHM0Isc0JBQU4sR0FBK0IsQ0FGaEMsK0JBR2tCNEIsTUFIbEIsUUFBUDtBQUtILEdBTkksTUFNRTtBQUNILFVBQU0sSUFBSXpFLEtBQUosQ0FBVSx3QkFBVixDQUFOO0FBQ0g7QUFDSjs7QUFFRCxTQUFTNEUsZUFBVCxDQUF5QmhHLEtBQXpCLEVBQWdDUSxXQUFoQyxFQUE2QztBQUN6QyxNQUFJQSxXQUFXLEtBQUssWUFBcEIsRUFDSSxLQUFLLElBQUljLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcwQyxpQkFBcEIsRUFBdUMxQyxDQUFDLEVBQXhDLEVBQTRDO0FBQ3hDLFFBQU1tRixZQUFZLEdBQUczSyxRQUFRLENBQUN5RCxhQUFULHNEQUM2QlMsS0FBSyxFQURsQyxRQUFyQjtBQUdBeUcsZ0JBQVksQ0FBQ3BKLFNBQWIsQ0FBdUJDLEdBQXZCLENBQTJCLG9CQUEzQjtBQUNILEdBTkwsTUFPSyxJQUFJa0QsV0FBVyxLQUFLLFVBQXBCLEVBQWdDO0FBQ2pDLFNBQUssSUFBSWMsRUFBQyxHQUFHLENBQWIsRUFBZ0JBLEVBQUMsR0FBRzBDLGlCQUFwQixFQUF1QzFDLEVBQUMsRUFBeEMsRUFBNEM7QUFDeEMsVUFBTW1GLGFBQVksR0FBRzNLLFFBQVEsQ0FBQ3lELGFBQVQsc0RBQzZCUyxLQUQ3QixRQUFyQjs7QUFHQXlHLG1CQUFZLENBQUNwSixTQUFiLENBQXVCQyxHQUF2QixDQUEyQixvQkFBM0I7O0FBQ0EwQyxXQUFLLElBQUksRUFBVDtBQUNIO0FBQ0o7QUFDSjs7QUFFRCxTQUFTc0YsY0FBVCxDQUF3QmxKLENBQXhCLEVBQTJCO0FBQ3ZCYSxTQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWjtBQUNBRCxTQUFPLENBQUNDLEdBQVIsQ0FBWTZHLFdBQVo7QUFDQUEsYUFBVyxDQUFDVixLQUFaLENBQWtCc0IsT0FBbEIsR0FBNEIsQ0FBNUI7QUFDSDs7QUFFRCxTQUFTZ0IsV0FBVCxDQUFxQjFKLEtBQXJCLEVBQTRCO0FBQ3hCLE1BQU1XLENBQUMsR0FBR1gsS0FBSyxDQUFDUSxZQUFOLENBQW1CLFVBQW5CLENBQVY7QUFDQSxNQUFNSSxDQUFDLEdBQUdaLEtBQUssQ0FBQ1EsWUFBTixDQUFtQixhQUFuQixDQUFWO0FBQ0EsU0FBTyxDQUFDRyxDQUFELEVBQUlDLENBQUosQ0FBUDtBQUNILEM7Ozs7Ozs7Ozs7Ozs7OztBQzdLRCxJQUFJNkosSUFBSSxHQUFHLEtBQVg7QUFFZSxTQUFTbkksbUJBQVQsR0FBK0I7QUFDMUN6QyxVQUFRLENBQ0hDLGdCQURMLG9DQUVLQyxPQUZMLENBRWEsVUFBQ3lFLElBQUQsRUFBVTtBQUNmO0FBQ0E7QUFDQTtBQUNBQSxRQUFJLENBQUN2RSxnQkFBTCxDQUFzQixXQUF0QixFQUFtQztBQUFBLGFBQU93SyxJQUFJLEdBQUcsS0FBZDtBQUFBLEtBQW5DO0FBQ0FqRyxRQUFJLENBQUN2RSxnQkFBTCxDQUFzQixXQUF0QixFQUFtQztBQUFBLGFBQU93SyxJQUFJLEdBQUcsSUFBZDtBQUFBLEtBQW5DO0FBQ0FqRyxRQUFJLENBQUN2RSxnQkFBTCxDQUFzQixTQUF0QixFQUFpQyxVQUFDRSxDQUFELEVBQU87QUFDcEMsVUFBSSxDQUFDc0ssSUFBTCxFQUFXQyxVQUFVLENBQUN2SyxDQUFELENBQVY7QUFDZCxLQUZEO0FBR0gsR0FYTDtBQVlIOztBQUVELFNBQVN1SyxVQUFULENBQW9CdkssQ0FBcEIsRUFBdUI7QUFDbkJBLEdBQUMsQ0FBQ21KLGNBQUY7QUFDQXRJLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7QUFDQSxNQUFNdUQsSUFBSSxHQUFHckUsQ0FBQyxDQUFDQyxNQUFGLENBQVNHLGFBQXRCLENBSG1CLENBR2tCOztBQUNyQyxNQUFNb0ssZ0JBQWdCLEdBQUduRyxJQUFJLENBQUM0QyxLQUFMLENBQVcyQixhQUFwQztBQUNBdkUsTUFBSSxDQUFDNEMsS0FBTCxDQUFXMkIsYUFBWCxHQUEyQjRCLGdCQUFnQixLQUFLLFFBQXJCLEdBQWdDLEtBQWhDLEdBQXdDLFFBQW5FO0FBQ0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCRDtBQUN5RztBQUM3QjtBQUM1RSw4QkFBOEIsc0VBQTJCLENBQUMsMkZBQXFDO0FBQy9GO0FBQ0EsdVdBQXVXLHNCQUFzQiwyQ0FBMkMsV0FBVyw4SkFBOEosY0FBYyxHQUFHLHdFQUF3RSxtQkFBbUIsR0FBRyxzSkFBc0osbUJBQW1CLHFCQUFxQixHQUFHLG9OQUFvTiw0QkFBNEIsc0JBQXNCLDhCQUE4QixXQUFXLHVKQUF1SixzQ0FBc0MsMkJBQTJCLFdBQVcseUxBQXlMLGtDQUFrQyxHQUFHLDBKQUEwSix3QkFBd0IsdUNBQXVDLDhDQUE4QyxXQUFXLHlGQUF5Rix3QkFBd0IsR0FBRyxxS0FBcUssc0NBQXNDLDJCQUEyQixXQUFXLHNFQUFzRSxtQkFBbUIsR0FBRyxvSEFBb0gsbUJBQW1CLG1CQUFtQix1QkFBdUIsNkJBQTZCLEdBQUcsU0FBUyxvQkFBb0IsR0FBRyxTQUFTLGdCQUFnQixHQUFHLHFMQUFxTCx1QkFBdUIsR0FBRyw0UEFBNFAseUJBQXlCLDRCQUE0Qiw4QkFBOEIsc0JBQXNCLFdBQVcsK0ZBQStGLDhCQUE4QixHQUFHLG9LQUFvSyxpQ0FBaUMsR0FBRyx5SkFBeUosK0JBQStCLEdBQUcsK01BQStNLHVCQUF1QixlQUFlLEdBQUcsd01BQXdNLG1DQUFtQyxHQUFHLDhEQUE4RCxtQ0FBbUMsR0FBRyx3UUFBd1EsMkJBQTJCLDJCQUEyQiwyQkFBMkIsNEJBQTRCLHVCQUF1QixnQ0FBZ0MsV0FBVyxnR0FBZ0csNkJBQTZCLEdBQUcsK0VBQStFLG1CQUFtQixHQUFHLHdJQUF3SSwyQkFBMkIsdUJBQXVCLFdBQVcsd0xBQXdMLGlCQUFpQixHQUFHLHVJQUF1SSxrQ0FBa0MsaUNBQWlDLFdBQVcsMEhBQTBILDZCQUE2QixHQUFHLDZLQUE2SywrQkFBK0IsMEJBQTBCLFdBQVcsc0xBQXNMLG1CQUFtQixHQUFHLHFFQUFxRSx1QkFBdUIsR0FBRyw4SkFBOEosa0JBQWtCLEdBQUcsZ0VBQWdFLGtCQUFrQixHQUFHLFNBQVMsbUhBQW1ILE1BQU0sUUFBUSxRQUFRLE1BQU0sS0FBSyxzQkFBc0IsdUJBQXVCLE9BQU8sS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE9BQU8sT0FBTyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxRQUFRLFFBQVEsTUFBTSxLQUFLLHNCQUFzQixxQkFBcUIsdUJBQXVCLE9BQU8sT0FBTyxNQUFNLEtBQUssc0JBQXNCLHFCQUFxQixPQUFPLEtBQUssUUFBUSxPQUFPLE1BQU0sS0FBSyxZQUFZLE9BQU8sT0FBTyxNQUFNLEtBQUssc0JBQXNCLHVCQUF1Qix1QkFBdUIsT0FBTyxNQUFNLE1BQU0sTUFBTSxZQUFZLE9BQU8sT0FBTyxNQUFNLE9BQU8sc0JBQXNCLHFCQUFxQixPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsT0FBTyxPQUFPLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFFBQVEsUUFBUSxNQUFNLFNBQVMsc0JBQXNCLHFCQUFxQix1QkFBdUIscUJBQXFCLE9BQU8sT0FBTyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sT0FBTyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxNQUFNLFFBQVEsWUFBWSxPQUFPLE1BQU0sTUFBTSxRQUFRLFlBQVksV0FBVyxNQUFNLE1BQU0sTUFBTSxRQUFRLFlBQVksT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sU0FBUyxNQUFNLEtBQUssc0JBQXNCLHFCQUFxQixxQkFBcUIscUJBQXFCLHFCQUFxQix1QkFBdUIsT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxNQUFNLEtBQUssVUFBVSxPQUFPLE9BQU8sTUFBTSxNQUFNLHNCQUFzQixxQkFBcUIsT0FBTyxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sT0FBTyxNQUFNLEtBQUssc0JBQXNCLHVCQUF1QixPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxPQUFPLE1BQU0sS0FBSyxzQkFBc0IscUJBQXFCLE9BQU8sS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFVBQVUsT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLHNWQUFzVixzQkFBc0IsMkNBQTJDLFdBQVcsOEpBQThKLGNBQWMsR0FBRyx3RUFBd0UsbUJBQW1CLEdBQUcsc0pBQXNKLG1CQUFtQixxQkFBcUIsR0FBRyxvTkFBb04sNEJBQTRCLHNCQUFzQiw4QkFBOEIsV0FBVyx1SkFBdUosc0NBQXNDLDJCQUEyQixXQUFXLHlMQUF5TCxrQ0FBa0MsR0FBRywwSkFBMEosd0JBQXdCLHVDQUF1Qyw4Q0FBOEMsV0FBVyx5RkFBeUYsd0JBQXdCLEdBQUcscUtBQXFLLHNDQUFzQywyQkFBMkIsV0FBVyxzRUFBc0UsbUJBQW1CLEdBQUcsb0hBQW9ILG1CQUFtQixtQkFBbUIsdUJBQXVCLDZCQUE2QixHQUFHLFNBQVMsb0JBQW9CLEdBQUcsU0FBUyxnQkFBZ0IsR0FBRyxxTEFBcUwsdUJBQXVCLEdBQUcsNFBBQTRQLHlCQUF5Qiw0QkFBNEIsOEJBQThCLHNCQUFzQixXQUFXLCtGQUErRiw4QkFBOEIsR0FBRyxvS0FBb0ssaUNBQWlDLEdBQUcseUpBQXlKLCtCQUErQixHQUFHLCtNQUErTSx1QkFBdUIsZUFBZSxHQUFHLHdNQUF3TSxtQ0FBbUMsR0FBRyw4REFBOEQsbUNBQW1DLEdBQUcsd1FBQXdRLDJCQUEyQiwyQkFBMkIsMkJBQTJCLDRCQUE0Qix1QkFBdUIsZ0NBQWdDLFdBQVcsZ0dBQWdHLDZCQUE2QixHQUFHLCtFQUErRSxtQkFBbUIsR0FBRyx3SUFBd0ksMkJBQTJCLHVCQUF1QixXQUFXLHdMQUF3TCxpQkFBaUIsR0FBRyx1SUFBdUksa0NBQWtDLGlDQUFpQyxXQUFXLDBIQUEwSCw2QkFBNkIsR0FBRyw2S0FBNkssK0JBQStCLDBCQUEwQixXQUFXLHNMQUFzTCxtQkFBbUIsR0FBRyxxRUFBcUUsdUJBQXVCLEdBQUcsOEpBQThKLGtCQUFrQixHQUFHLGdFQUFnRSxrQkFBa0IsR0FBRyxxQkFBcUI7QUFDcHhkO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQ3lIO0FBQzdCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSxpREFBaUQsMkJBQTJCLDJCQUEyQiw2QkFBNkIsMEJBQTBCLDBCQUEwQiw2QkFBNkIsZ0NBQWdDLHNDQUFzQyxHQUFHLGdCQUFnQixvQkFBb0Isc0JBQXNCLEdBQUcsMEJBQTBCLHFCQUFxQixzQkFBc0Isb0JBQW9CLGdDQUFnQyw0Q0FBNEMscUNBQXFDLEdBQUcsaUNBQWlDLHFCQUFxQixxQ0FBcUMsMENBQTBDLEdBQUcscUJBQXFCLGlCQUFpQixvQkFBb0IsNkJBQTZCLDBCQUEwQixlQUFlLHlCQUF5QixHQUFHLDRCQUE0Qiw4Q0FBOEMsbUNBQW1DLHlCQUF5QixpQkFBaUIseUJBQXlCLHFCQUFxQixvQkFBb0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIscUNBQXFDLEdBQUcsZ0NBQWdDLGtDQUFrQyxHQUFHLDZCQUE2Qix5QkFBeUIsb0JBQW9CLHlEQUF5RCxzREFBc0QsaUNBQWlDLG9CQUFvQix5Q0FBeUMseUJBQXlCLEdBQUcsOEJBQThCLHdDQUF3QyxzQkFBc0IsOENBQThDLDRCQUE0Qiw0Q0FBNEMsR0FBRyxvQ0FBb0Msa0NBQWtDLEdBQUcsdUJBQXVCLHlCQUF5QixHQUFHLGtDQUFrQyxpQkFBaUIseUJBQXlCLG9CQUFvQixzQkFBc0IsOEJBQThCLGdCQUFnQixHQUFHLHdDQUF3QyxvQkFBb0IsR0FBRyxvREFBb0QsOENBQThDLHlCQUF5QixxQkFBcUIsd0NBQXdDLHNCQUFzQiw4Q0FBOEMsNEJBQTRCLDRDQUE0QyxHQUFHLHlCQUF5QixtREFBbUQsc0JBQXNCLHFCQUFxQiw0Q0FBNEMsTUFBTSw2Q0FBNkMsbURBQW1ELEdBQUcsbURBQW1ELDZDQUE2QyxHQUFHLG9CQUFvQixvQkFBb0IsOEJBQThCLDBCQUEwQixzREFBc0Qsd0JBQXdCLDREQUE0RCxHQUFHLHdDQUF3QyxvQkFBb0IsOEJBQThCLDBCQUEwQixxQkFBcUIsc0RBQXNELCtEQUErRCxzQ0FBc0MsR0FBRyxpQkFBaUIsb0JBQW9CLDhCQUE4QiwwQkFBMEIsa0JBQWtCLG1CQUFtQixtQkFBbUIseUNBQXlDLDRDQUE0QyxNQUFNLHVCQUF1QixzQ0FBc0MsR0FBRyxnQ0FBZ0Msb0dBQW9HLHFCQUFxQixPQUFPLGlDQUFpQyxxQkFBcUIsT0FBTyxrQ0FBa0MscUJBQXFCLE9BQU8sc0NBQXNDLHFCQUFxQixPQUFPLEdBQUcsNkJBQTZCLDZFQUE2RSw2QkFBNkIsdUdBQXVHLHFCQUFxQiw2QkFBNkIsT0FBTyxvQ0FBb0MscUJBQXFCLE9BQU8sZ0NBQWdDLDZCQUE2QixpREFBaUQsT0FBTyx3REFBd0QsNkJBQTZCLGlEQUFpRCxPQUFPLEdBQUcsOEJBQThCLG1DQUFtQyxnREFBZ0QsT0FBTyx3REFBd0QsZ0RBQWdELE9BQU8sTUFBTSwrQkFBK0IseUJBQXlCLHNCQUFzQixzQkFBc0IsT0FBTyxrQ0FBa0MscUJBQXFCLDBCQUEwQix1QkFBdUIsT0FBTywrQkFBK0IscUJBQXFCLE9BQU8sc0NBQXNDLHFCQUFxQixnREFBZ0QsT0FBTyxHQUFHLCtCQUErQiwyQkFBMkIsc0JBQXNCLHNCQUFzQixPQUFPLGtDQUFrQyxxQkFBcUIsMEJBQTBCLHVCQUF1QixPQUFPLCtCQUErQixxQkFBcUIsT0FBTyxzQ0FBc0MscUJBQXFCLGdEQUFnRCxPQUFPLEdBQUcsU0FBUyx3RkFBd0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxL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QUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsS0FBMEIsb0JBQW9CLENBQUU7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM3VCNEY7QUFDNUYsWUFBOEY7O0FBRTlGOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSwwR0FBRyxDQUFDLHVGQUFPOzs7O0FBSXhCLGlFQUFlLDhGQUFjLE1BQU0sRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWnlEO0FBQzVGLFlBQTBGOztBQUUxRjs7QUFFQTtBQUNBOztBQUVBLGFBQWEsMEdBQUcsQ0FBQyxtRkFBTzs7OztBQUl4QixpRUFBZSwwRkFBYyxNQUFNLEU7Ozs7Ozs7Ozs7O0FDWnRCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQix3QkFBd0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVuRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxxRUFBcUUscUJBQXFCLGFBQWE7O0FBRXZHOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsR0FBRzs7QUFFSDs7O0FBR0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQiw0QkFBNEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9CLDZCQUE2QjtBQUNqRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1UUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrQzs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59IiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzQXBwbHlEZXNjcmlwdG9yR2V0KHJlY2VpdmVyLCBkZXNjcmlwdG9yKSB7XG4gIGlmIChkZXNjcmlwdG9yLmdldCkge1xuICAgIHJldHVybiBkZXNjcmlwdG9yLmdldC5jYWxsKHJlY2VpdmVyKTtcbiAgfVxuXG4gIHJldHVybiBkZXNjcmlwdG9yLnZhbHVlO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0FwcGx5RGVzY3JpcHRvclNldChyZWNlaXZlciwgZGVzY3JpcHRvciwgdmFsdWUpIHtcbiAgaWYgKGRlc2NyaXB0b3Iuc2V0KSB7XG4gICAgZGVzY3JpcHRvci5zZXQuY2FsbChyZWNlaXZlciwgdmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIGlmICghZGVzY3JpcHRvci53cml0YWJsZSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBzZXQgcmVhZCBvbmx5IHByaXZhdGUgZmllbGRcIik7XG4gICAgfVxuXG4gICAgZGVzY3JpcHRvci52YWx1ZSA9IHZhbHVlO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yKHJlY2VpdmVyLCBwcml2YXRlTWFwLCBhY3Rpb24pIHtcbiAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIFwiICsgYWN0aW9uICsgXCIgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XG4gIH1cblxuICByZXR1cm4gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpO1xufSIsImltcG9ydCBjbGFzc0FwcGx5RGVzY3JpcHRvckdldCBmcm9tIFwiLi9jbGFzc0FwcGx5RGVzY3JpcHRvckdldC5qc1wiO1xuaW1wb3J0IGNsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvciBmcm9tIFwiLi9jbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgcHJpdmF0ZU1hcCkge1xuICB2YXIgZGVzY3JpcHRvciA9IGNsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvcihyZWNlaXZlciwgcHJpdmF0ZU1hcCwgXCJnZXRcIik7XG4gIHJldHVybiBjbGFzc0FwcGx5RGVzY3JpcHRvckdldChyZWNlaXZlciwgZGVzY3JpcHRvcik7XG59IiwiaW1wb3J0IGNsYXNzQXBwbHlEZXNjcmlwdG9yU2V0IGZyb20gXCIuL2NsYXNzQXBwbHlEZXNjcmlwdG9yU2V0LmpzXCI7XG5pbXBvcnQgY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yIGZyb20gXCIuL2NsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvci5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwLCB2YWx1ZSkge1xuICB2YXIgZGVzY3JpcHRvciA9IGNsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvcihyZWNlaXZlciwgcHJpdmF0ZU1hcCwgXCJzZXRcIik7XG4gIGNsYXNzQXBwbHlEZXNjcmlwdG9yU2V0KHJlY2VpdmVyLCBkZXNjcmlwdG9yLCB2YWx1ZSk7XG4gIHJldHVybiB2YWx1ZTtcbn0iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufSIsImltcG9ydCBzZXRQcm90b3R5cGVPZiBmcm9tIFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdO1xuXG4gIGlmIChfaSA9PSBudWxsKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuXG4gIHZhciBfcywgX2U7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiO1xuaW1wb3J0IGFzc2VydFRoaXNJbml0aWFsaXplZCBmcm9tIFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59IiwiaW1wb3J0IGFycmF5V2l0aEhvbGVzIGZyb20gXCIuL2FycmF5V2l0aEhvbGVzLmpzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5TGltaXQgZnJvbSBcIi4vaXRlcmFibGVUb0FycmF5TGltaXQuanNcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlUmVzdCBmcm9tIFwiLi9ub25JdGVyYWJsZVJlc3QuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufSIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsImNvbnN0IEFwcGxpY2F0aW9uID0ge1xuICAgIG51bWJlck9mU2hpcHM6IDUsXG4gICAgbGVuZ3Roc09mU2hpcHM6IFsyLCAzLCAzLCA0LCA1XSxcbiAgICBzaGlwc09mR3JpZDE6IDAsXG4gICAgc2hpcHNPZkdyaWQyOiAwLFxuICAgIHBsYXllcjE6IHVuZGVmaW5lZCxcbiAgICBwbGF5ZXIyOiB1bmRlZmluZWQsXG4gICAgY3VycmVudFBsYXllcjogdW5kZWZpbmVkLFxuICAgIHVwZGF0ZVBsYXllcjogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyID09PSB0aGlzLnBsYXllcjEgPyB0aGlzLnBsYXllcjIgOiB0aGlzLnBsYXllcjE7XG4gICAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcGxpY2F0aW9uO1xuIiwiaW1wb3J0IEFwcGxpY2F0aW9uIGZyb20gJy4vQXBwbGljYXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRCbG9ja0NsaWNrTGlzdGVuZXJzKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ibG9jaycpLmZvckVhY2goKGJsb2NrKSA9PiB7XG4gICAgICAgIGJsb2NrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYmxvY2tDbGlja0hhbmRsZXIpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmxvY2tDbGlja0hhbmRsZXIoZSkge1xuICAgIGNvbnN0IGJsb2NrID0gZS50YXJnZXQ7XG5cbiAgICBjb25zdCBncmlkTnVtYmVyID0gcGFyc2VJbnQoYmxvY2sucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XG4gICAgaWYgKCFpc1ZhbGlkUGxheWVyQ2xpY2soZ3JpZE51bWJlcikpIHJldHVybjsgLy8gaXMgdGhlIHJpZ2h0IHBsYXllciBhdHRhY2tpbmcgdGhlIHJpZ2h0IGdyaWQ/XG4gICAgY29uc3QgW3gsIHldID0gZ2V0QmxvY2tDb29yZHMoYmxvY2spO1xuICAgIEFwcGxpY2F0aW9uLmN1cnJlbnRQbGF5ZXIuYXR0YWNrKHggLSAxLCB5IC0gMSk7XG4gICAgaWYgKGJsb2NrLm1hdGNoZXMoJy5zaGlwLWJsb2NrLWluLWdyaWQnKSkge1xuICAgICAgICBzaGlwQmxvY2tDbGlja0hhbmRsZXIoYmxvY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGdyaWRCbG9ja0NsaWNrSGFuZGxlcihibG9jayk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdsZWZ0IGdyaWQgYmxvY2sgaGFuZGxlcicpO1xuICAgICAgICBBcHBsaWNhdGlvbi51cGRhdGVQbGF5ZXIoKTsgLy8gdXBkYXRlIHBsYXllciBvbmx5IHdoZW4gZ3JpZCBibG9jayBpcyBjbGlja2VkXG4gICAgfVxuXG4gICAgYmxvY2sucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBibG9ja0NsaWNrSGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRQbGF5ZXJDbGljayhncmlkTnVtYmVyKSB7XG4gICAgaWYgKGdyaWROdW1iZXIgPT09IDEgJiYgQXBwbGljYXRpb24uY3VycmVudFBsYXllciA9PT0gQXBwbGljYXRpb24ucGxheWVyMilcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgZWxzZSBpZiAoXG4gICAgICAgIGdyaWROdW1iZXIgPT09IDIgJiZcbiAgICAgICAgQXBwbGljYXRpb24uY3VycmVudFBsYXllciA9PT0gQXBwbGljYXRpb24ucGxheWVyMVxuICAgIClcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBncmlkQmxvY2tDbGlja0hhbmRsZXIoZ3JpZEJsb2NrKSB7XG4gICAgZ3JpZEJsb2NrLmNsYXNzTGlzdC5hZGQoJ2JhZC1hdHRhY2snKTtcbiAgICBncmlkQmxvY2sudGV4dENvbnRlbnQgPSBg4pig77iPYDtcbn1cblxuZnVuY3Rpb24gc2hpcEJsb2NrQ2xpY2tIYW5kbGVyKHNoaXBCbG9jaykge1xuICAgIHNoaXBCbG9jay5jbGFzc0xpc3QuYWRkKCdhdHRhY2tlZC1zaGlwJyk7XG4gICAgc2hpcEJsb2NrLnRleHRDb250ZW50ID0gYPCfkqVgO1xuICAgIC8vc2hpcEJsb2NrLnRleHRDb250ZW50ID0gYPCflKVgO1xufVxuXG5mdW5jdGlvbiBnZXRCbG9ja0Nvb3JkcyhibG9jaykge1xuICAgIGNvbnN0IHggPSBibG9jay5nZXRBdHRyaWJ1dGUoJ2RhdGEtcm93Jyk7XG4gICAgY29uc3QgeSA9IGJsb2NrLmdldEF0dHJpYnV0ZSgnZGF0YS1jb2x1bW4nKTtcbiAgICByZXR1cm4gW3gsIHldO1xufVxuIiwiaW1wb3J0ICcuL0FwcGxpY2F0aW9uJztcbmltcG9ydCBsZXRIdW1hbkRyYWdTaGlwcyBmcm9tICcuLi9WaWV3cy9kcmFnRnVuY3Rpb25Gb3JIdW1hbic7XG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4uL01vZGVscy9HYW1lYm9hcmQnO1xuaW1wb3J0IGRpc3BsYXlHYW1lSW50ZXJmYWNlIGZyb20gJy4uL1ZpZXdzL1VJJztcbmltcG9ydCBhcmVBbGxTaGlwc1BsYWNlZCBmcm9tICcuLi9WaWV3cy9jaGVja051bWJlck9mU2hpcHNPZkh1bWFuJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi4vTW9kZWxzL1BsYXllcic7XG5pbXBvcnQgdXBkYXRlVUlXaXRoQUlTaGlwcyBmcm9tICcuLi9WaWV3cy9VSWZvckFJU2hpcHMnO1xuaW1wb3J0IEFJIGZyb20gJy4uL01vZGVscy9BSSc7XG5pbXBvcnQgSHVudFBhcml0eUFJIGZyb20gJy4uL01vZGVscy9IdW50UGFyaXR5QUknO1xuaW1wb3J0IEh1bnRQcm9iQUkgZnJvbSAnLi4vTW9kZWxzL0h1bnRQcm9iQUknO1xuaW1wb3J0IHNldEJsb2NrQ2xpY2tMaXN0ZW5lcnMgZnJvbSAnLi9CbG9ja0NsaWNrJztcbmltcG9ydCBBcHBsaWNhdGlvbiBmcm9tICcuL0FwcGxpY2F0aW9uJztcbmltcG9ydCBsZXRIdW1hblJvdGF0ZVNoaXBzIGZyb20gJy4uL1ZpZXdzL3JvdGF0ZVNoaXAnO1xuaW1wb3J0IHsgYmxvY2tDbGlja0hhbmRsZXIgfSBmcm9tICcuL0Jsb2NrQ2xpY2snO1xuXG5jb25zdCBib2FyZEh1bWFuID0gbmV3IEdhbWVib2FyZCgxMCk7XG5jb25zdCBib2FyZEFJID0gbmV3IEdhbWVib2FyZCgxMCk7XG5jb25zdCBzbGVlcCA9IChkZWxheSkgPT4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgc2V0VGltZW91dChyZXNvbHZlLCBkZWxheSk7XG4gIH0pOyAgXG5jb25zdCBodW1hbiA9IG5ldyBQbGF5ZXIoJ2h1bWFuJywgYm9hcmRIdW1hbiwgYm9hcmRBSSk7XG5jb25zdCBhaSA9IG5ldyBIdW50UHJvYkFJKCdBSScsIGJvYXJkQUksIGJvYXJkSHVtYW4pO1xuXG5hc3luYyBmdW5jdGlvbiBzZXR1cCgpIHtcbiAgICBjb25zb2xlLmxvZygnU2V0dXAnKTtcbiAgICBkaXNwbGF5R2FtZUludGVyZmFjZSgpO1xuICAgIGxldEh1bWFuUm90YXRlU2hpcHMoKTtcbiAgICBsZXRIdW1hbkRyYWdTaGlwcyhib2FyZEh1bWFuKTtcbiAgICBhaS5wbGFjZVNoaXBzKCk7XG4gICAgdXBkYXRlVUlXaXRoQUlTaGlwcyhib2FyZEFJKTtcbiAgICBhd2FpdCBhcmVBbGxTaGlwc1BsYWNlZCgpO1xuICAgIEFwcGxpY2F0aW9uLnBsYXllcjEgPSBodW1hbjtcbiAgICBBcHBsaWNhdGlvbi5wbGF5ZXIyID0gYWk7XG4gICAgQXBwbGljYXRpb24uY3VycmVudFBsYXllciA9IGh1bWFuOyAvLyBodW1hbiBzdGFydHNcbn1cbnNldHVwKCkudGhlbigoKSA9PiB7XG4gICAgc3RhcnRHYW1lKCk7XG59KTtcblxuZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuICAgIGNvbnNvbGUubG9nKCdTVEFSVCBUSEUgR0FNRSEhIScpO1xuICAgIHNldEJsb2NrQ2xpY2tMaXN0ZW5lcnMoKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHVwZGF0ZUdhbWUpO1xufVxuXG5mdW5jdGlvbiBpc0dhbWVPdmVyKCkge1xuICAgIHJldHVybiBib2FyZEh1bWFuLmhhdmVBbGxTdW5rKCkgfHwgYm9hcmRBSS5oYXZlQWxsU3VuaygpO1xufVxuXG5mdW5jdGlvbiB3aG9Xb24oKSB7XG4gICAgaWYgKGh1bWFuLmhhc1dvbigpKSByZXR1cm4gaHVtYW47XG4gICAgZWxzZSBpZiAoYWkuaGFzV29uKCkpIHJldHVybiBhaTtcbiAgICBlbHNlIHJldHVybiBudWxsO1xufVxuXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVHYW1lKCkge1xuICAgIGlmIChpc0dhbWVPdmVyKCkpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0dhbWUgT3ZlcicpO1xuICAgICAgICBjb25zdCB3aW5uZXIgPSB3aG9Xb24oKTtcbiAgICAgICAgbGV0IGJvYXJkTnVtO1xuICAgICAgICBsZXQgc3VtID0gMzsgXG4gICAgICAgIGlmICh3aW5uZXIgPT09IGh1bWFuKSBib2FyZE51bSA9IDE7XG4gICAgICAgIGVsc2UgYm9hcmROdW0gPSAyO1xuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYC5ib2FyZFtkYXRhLWlkID0gJyR7Ym9hcmROdW19J10gLnRpdGxlYFxuICAgICAgICApO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9ICfwn5KlIPCfkqUg8J+SpSBXSU5ORVIgRkxFRVQg8J+SpSDwn5KlIPCfkqUnO1xuICAgICAgICB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgLmJvYXJkW2RhdGEtaWQgPSAnJHtzdW0gLWJvYXJkTnVtfSddIC50aXRsZWBcbiAgICAgICAgKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSAn4pig77iPIOKYoO+4jyDimKDvuI8gTE9TRVIgRkxFRVQg4pig77iPIOKYoO+4jyDimKDvuI8nO1xuICAgICAgICBjbGVhbnVwKCk7XG4gICAgfVxuICAgIGF3YWl0KHNsZWVwLCA1MDApO1xuICAgIGlmIChBcHBsaWNhdGlvbi5jdXJyZW50UGxheWVyID09PSBhaSkge1xuICAgICAgICBhaS5wbGF5KCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncmlkIC5ibG9jaycpLmZvckVhY2goKGJsb2NrKSA9PiB7XG4gICAgICAgIGJsb2NrLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYmxvY2tDbGlja0hhbmRsZXIpO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdXBkYXRlR2FtZSk7XG59XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyJztcbmltcG9ydCBTaGlwIGZyb20gJy4vU2hpcCc7XG5pbXBvcnQgQXBwbGljYXRpb24gZnJvbSAnLi4vQ29udHJvbGxlcnMvQXBwbGljYXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBSSBleHRlbmRzIFBsYXllciB7XG4gICAgI25leHRZO1xuICAgICNuZXh0WDtcbiAgICAjb3JpZW50YXRpb25zO1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIG93bkJvYXJkLCBvcHBCb2FyZCkge1xuICAgICAgICBzdXBlcihuYW1lLCBvd25Cb2FyZCwgb3BwQm9hcmQpO1xuICAgICAgICB0aGlzLmF0dGFja2VkQmxvY2tzID0gW107XG4gICAgICAgIHRoaXMuI25leHRZID0gbnVsbDtcbiAgICAgICAgdGhpcy4jbmV4dFggPSBudWxsO1xuICAgICAgICB0aGlzLiNvcmllbnRhdGlvbnMgPSB7IDA6ICdob3Jpem9udGFsJywgMTogJ3ZlcnRpY2FsJyB9O1xuICAgIH1cblxuICAgIHBsYWNlU2hpcHMoKSB7XG4gICAgICAgIEFwcGxpY2F0aW9uLmxlbmd0aHNPZlNoaXBzLmZvckVhY2goKGxlbikgPT4gdGhpcy4jYWRkU2hpcFRvQm9hcmQobGVuKSk7XG4gICAgfVxuXG4gICAgI2FkZFNoaXBUb0JvYXJkKGxlbmd0aCkge1xuICAgICAgICBsZXQgb3JpZW50YXRpb24gPSB0aGlzLiNvcmllbnRhdGlvbnNbdGhpcy4jZ2V0UmFuZG9tSW50KDAsIDIpXTtcbiAgICAgICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKGxlbmd0aCwgb3JpZW50YXRpb24pO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgW3gsIHldID0gdGhpcy4jZ2V0UmFuZG9tQ29vcmRzKCk7XG4gICAgICAgICAgICB0aGlzLm93bkJvYXJkLnBsYWNlU2hpcChzaGlwLCB4LCB5KTtcbiAgICAgICAgICAgICsrQXBwbGljYXRpb24uc2hpcHNPZkdyaWQyO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICB0aGlzLiNhZGRTaGlwVG9Cb2FyZChsZW5ndGgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGxheSgpIHtcbiAgICAgICAgbGV0IHgsIHksIGluZGV4O1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICBbeCwgeV0gPSB0aGlzLiNnZXRSYW5kb21Db29yZHMoKTtcbiAgICAgICAgICAgIHkgPSB0aGlzLiNuZXh0WSA/PyB5O1xuICAgICAgICAgICAgeCA9IHRoaXMuI25leHRYID8/IHg7XG4gICAgICAgICAgICBpbmRleCA9IHggKiAxMCArICh5ICsgMSk7IC8vIDAgZnJvbSAoMCwwKSBhYnN0cmFjdCAtPiAxIGZyb20gKDEsMSkgdWlcbiAgICAgICAgfSB3aGlsZSAodGhpcy5hdHRhY2tlZEJsb2Nrcy5pbmNsdWRlcyhpbmRleCkpO1xuICAgICAgICB0aGlzLmF0dGFja2VkQmxvY2tzLnB1c2goaW5kZXgpO1xuICAgICAgICBjb25zdCBibG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgLmdyaWRbZGF0YS1pZCA9ICcxJ10gLmJsb2NrW2RhdGEtcm93ID0gJyR7XG4gICAgICAgICAgICAgICAgeCArIDFcbiAgICAgICAgICAgIH0nXVtkYXRhLWNvbHVtbiA9ICcke3kgKyAxfSddYFxuICAgICAgICApO1xuXG4gICAgICAgIGlmIChibG9jay5tYXRjaGVzKCcuc2hpcC1ibG9jay1pbi1ncmlkJykpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICB5ICsgMSA8IHRoaXMub3BwQm9hcmQuc2l6ZSAmJlxuICAgICAgICAgICAgICAgICF0aGlzLm9wcEJvYXJkLmdyaWRbeF1beSArIDFdLmF0dGFja2VkXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB0aGlzLiNuZXh0WCA9IHg7XG4gICAgICAgICAgICAgICAgdGhpcy4jbmV4dFkgPSB5ICsgMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoeSAtIDEgPj0gMCAmJiAhdGhpcy5vcHBCb2FyZC5ncmlkW3hdW3kgLSAxXS5hdHRhY2tlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuI25leHRYID0geDtcbiAgICAgICAgICAgICAgICB0aGlzLiNuZXh0WSA9IHkgLSAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLiNuZXh0WCA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy4jbmV4dFkgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4jbmV4dFggPSBudWxsO1xuICAgICAgICAgICAgdGhpcy4jbmV4dFkgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGJsb2NrLmNsaWNrKCk7XG4gICAgfVxuXG4gICAgI2dldFJhbmRvbUNvb3JkcygpIHtcbiAgICAgICAgY29uc3QgeCA9IHRoaXMuI2dldFJhbmRvbUludCgwLCAxMCk7XG4gICAgICAgIGNvbnN0IHkgPSB0aGlzLiNnZXRSYW5kb21JbnQoMCwgMTApO1xuICAgICAgICByZXR1cm4gW3gsIHldO1xuICAgIH1cblxuICAgICNnZXRSYW5kb21JbnQobWluLCBtYXgpIHtcbiAgICAgICAgbWluID0gTWF0aC5jZWlsKG1pbik7XG4gICAgICAgIG1heCA9IE1hdGguZmxvb3IobWF4KTtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKTsgLy8gVGhlIG1heGltdW0gaXMgZXhjbHVzaXZlIGFuZCB0aGUgbWluaW11bSBpcyBpbmNsdXNpdmVcbiAgICB9XG5cbiAgICAjaHVudCgpIHt9XG5cbiAgICAjaXNWYWxpZEluZGV4KCkge31cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVib2FyZCB7XG4gICAgY29uc3RydWN0b3Ioc2l6ZSkge1xuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgICAgICB0aGlzLmdyaWQgPSB0aGlzLiNjcmVhdGVNYXRyaXgoc2l6ZSk7XG4gICAgICAgIHRoaXMuc2hpcENvdW50ID0gMDtcbiAgICB9XG5cbiAgICAjY3JlYXRlTWF0cml4KHNpemUpIHtcbiAgICAgICAgY29uc3QgbWF0ID0gbmV3IEFycmF5KHNpemUpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgLy8gc2hpcCAtIGZvciBzaGlwIG9iamVjdCBpZiBpdCBleGlzdHMsIGF0dGFja2VkIC0gaXNBdHRhY2tlZD8sXG4gICAgICAgICAgICAvLyBpbmRleCAtIHJlbGF0aXZlIHBsYWNlbWVudCBvZiBzaGlwIHRpbGUgd3J0IHdob2xlIHNoaXAsIGlmIGl0IGV4aXN0c1xuICAgICAgICAgICAgbWF0W2ldID0gbmV3IEFycmF5KHNpemUpXG4gICAgICAgICAgICAgICAgLmZpbGwoKVxuICAgICAgICAgICAgICAgIC5tYXAoKCkgPT4gKHsgc2hpcDogbnVsbCwgYXR0YWNrZWQ6IGZhbHNlLCBpbmRleDogLTEgfSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTaGlwfSBzaGlwIHRvIGJlIHBsYWNlZFxuICAgICAqIEBwYXJhbSB7aW50fSB4IHN0YXJ0aW5nIHggY29vcmRpbmF0ZSBvZiBzaGlwIHBsYWNlbWVudFxuICAgICAqIEBwYXJhbSB7aW50fSB5IHN0YXJ0aW5nIHkgY29vcmRpbmF0ZSBvZiBzaGlwIHBsYWNlbWVudFxuICAgICAqL1xuICAgIHBsYWNlU2hpcChzaGlwLCB4LCB5KSB7XG4gICAgICAgIGlmICh0aGlzLmlzVmFsaWRDb29yZChzaGlwLCB4LCB5KSkge1xuICAgICAgICAgICAgaWYgKHNoaXAub3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJylcbiAgICAgICAgICAgICAgICB0aGlzLiNwbGFjZUhvcml6b250YWxseShzaGlwLCB4LCB5KTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHNoaXAub3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpXG4gICAgICAgICAgICAgICAgdGhpcy4jcGxhY2VWZXJ0aWNhbGx5KHNoaXAsIHgsIHkpO1xuICAgICAgICAgICAgZWxzZSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgb3JpZW50YXRpb24nKTtcbiAgICAgICAgICAgIHRoaXMuc2hpcENvdW50Kys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgQ29vcmRpbmF0ZXMgcHJvdmlkZWQnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICNwbGFjZUhvcml6b250YWxseShzaGlwLCB4LCB5KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5ncmlkW3hdW3ldWydzaGlwJ10gPSBzaGlwO1xuICAgICAgICAgICAgdGhpcy5ncmlkW3hdW3ldWydpbmRleCddID0gaTtcbiAgICAgICAgICAgIHkrKzsgLy9tb3ZlIHRvIG5leHQgY29sdW1uIGZvciBuZXh0IHRpbGUgcGxhY2VtZW50XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAjcGxhY2VWZXJ0aWNhbGx5KHNoaXAsIHgsIHkpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmdyaWRbeF1beV1bJ3NoaXAnXSA9IHNoaXA7XG4gICAgICAgICAgICB0aGlzLmdyaWRbeF1beV1bJ2luZGV4J10gPSBpO1xuICAgICAgICAgICAgeCsrOyAvL21vdmUgdG8gbmV4dCByb3cgZm9yIG5leHQgdGlsZSBwbGFjZW1lbnRcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlzVmFsaWRDb29yZChzaGlwLCB4LCB5KSB7XG4gICAgICAgIGlmICh4IDwgMCB8fCB5IDwgMCB8fCB5ID4gdGhpcy5zaXplIHx8IHggPiB0aGlzLnNpemUpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKHNoaXAubGVuZ3RoID4gdGhpcy5zaXplKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIChzaGlwLm9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcgJiZcbiAgICAgICAgICAgICAgICB0aGlzLiNhcmVWYWxpZENvb3JkRm9ySG9yaXpvbnRhbFNoaXAoc2hpcCwgeCwgeSkpIHx8XG4gICAgICAgICAgICAoc2hpcC5vcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJyAmJlxuICAgICAgICAgICAgICAgIHRoaXMuI2FyZVZhbGlkQ29vcmRGb3JWZXJ0aWNhbFNoaXAoc2hpcCwgeCwgeSkpXG4gICAgICAgIClcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAjYXJlVmFsaWRDb29yZEZvckhvcml6b250YWxTaGlwKHNoaXAsIHgsIHkpIHtcbiAgICAgICAgaWYgKHRoaXMuc2l6ZSAtIHkgPCBzaGlwLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdyaWRbeF1beSArIGldWydzaGlwJ10pIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAjYXJlVmFsaWRDb29yZEZvclZlcnRpY2FsU2hpcChzaGlwLCB4LCB5KSB7XG4gICAgICAgIGlmICh0aGlzLnNpemUgLSB4IDwgc2hpcC5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ncmlkW3ggKyBpXVt5XVsnc2hpcCddKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmVjZWl2ZUF0dGFjayh4LCB5KSB7XG4gICAgICAgIGlmICghdGhpcy5ncmlkW3hdW3ldLmF0dGFja2VkKSB0aGlzLmdyaWRbeF1beV0uYXR0YWNrZWQgPSB0cnVlO1xuICAgICAgICBlbHNlIHRocm93IG5ldyBFcnJvcignQWxyZWFkeSBhdHRhY2tlZCBwb2ludCcpO1xuICAgICAgICBjb25zdCBzaGlwID0gdGhpcy5ncmlkW3hdW3ldLnNoaXA7XG4gICAgICAgIGlmIChzaGlwKSB7XG4gICAgICAgICAgICBzaGlwLmhpdCh0aGlzLmdyaWRbeF1beV0uaW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgd2FzU3VjY2Vzc2Z1bGxBdHRhY2soeCwgeSkge1xuICAgICAgICBpZiAodGhpcy5ncmlkW3hdW3ldWydhdHRhY2tlZCddICYmIHRoaXMuZ3JpZFt4XVt5XVsnc2hpcCddKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGhhdmVBbGxTdW5rKCkge1xuICAgICAgICBpZiAodGhpcy5zaGlwQ291bnQgPT09IDApIHRocm93IG5ldyBFcnJvcignTm8gc2hpcHMnKTtcbiAgICAgICAgY29uc3QgZ3JpZCA9IHRoaXMuZ3JpZDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBncmlkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdyaWRbMF0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzaGlwID0gZ3JpZFtpXVtqXVsnc2hpcCddO1xuICAgICAgICAgICAgICAgIGlmIChzaGlwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWlub3Igb3B0aW1pemF0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbW92ZSBhaGVhZCBieSBzaGlwJ3MgbGVuZ3RoIHRvIG5vdCBjaGVjayB0aGUgc2FtZSBob3Jpem9udGFsIHNoaXAgcmVwZWF0ZWRseVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNoaXAub3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykgaiArPSBzaGlwLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyJztcbmltcG9ydCBTaGlwIGZyb20gJy4vU2hpcCc7XG5pbXBvcnQgQXBwbGljYXRpb24gZnJvbSAnLi4vQ29udHJvbGxlcnMvQXBwbGljYXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdW50UGFyaXR5QUkgZXh0ZW5kcyBQbGF5ZXIge1xuICAgICNvcmllbnRhdGlvbnM7XG4gICAgI25leHRBdHRhY2tzO1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIG93bkJvYXJkLCBvcHBCb2FyZCkge1xuICAgICAgICBzdXBlcihuYW1lLCBvd25Cb2FyZCwgb3BwQm9hcmQpO1xuICAgICAgICB0aGlzLiNvcmllbnRhdGlvbnMgPSB7IDA6ICdob3Jpem9udGFsJywgMTogJ3ZlcnRpY2FsJyB9O1xuICAgICAgICB0aGlzLiNuZXh0QXR0YWNrcyA9IFtdO1xuICAgIH1cblxuICAgIHBsYWNlU2hpcHMoKSB7XG4gICAgICAgIEFwcGxpY2F0aW9uLmxlbmd0aHNPZlNoaXBzLmZvckVhY2goKGxlbikgPT4gdGhpcy4jYWRkU2hpcFRvQm9hcmQobGVuKSk7XG4gICAgfVxuXG4gICAgI2FkZFNoaXBUb0JvYXJkKGxlbmd0aCkge1xuICAgICAgICBsZXQgb3JpZW50YXRpb24gPSB0aGlzLiNvcmllbnRhdGlvbnNbdGhpcy4jZ2V0UmFuZG9tSW50KDAsIDIpXTtcbiAgICAgICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKGxlbmd0aCwgb3JpZW50YXRpb24pO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgW3gsIHldID0gdGhpcy4jZ2V0UmFuZG9tQ29vcmRzKCk7XG4gICAgICAgICAgICB0aGlzLm93bkJvYXJkLnBsYWNlU2hpcChzaGlwLCB4LCB5KTtcbiAgICAgICAgICAgICsrQXBwbGljYXRpb24uc2hpcHNPZkdyaWQyO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICB0aGlzLiNhZGRTaGlwVG9Cb2FyZChsZW5ndGgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGxheSgpIHtcbiAgICAgICAgbGV0IHgsIHksIGluZGV4O1xuICAgICAgICBpZiAodGhpcy4jbmV4dEF0dGFja3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IHJhbmRvbUluZGV4ID0gdGhpcy4jZ2V0UmFuZG9tSW50KDAsIHRoaXMuI25leHRBdHRhY2tzLmxlbmd0aCk7XG4gICAgICAgICAgICBbeCwgeV0gPSB0aGlzLiNuZXh0QXR0YWNrcy5zcGxpY2UocmFuZG9tSW5kZXgsIDEpWzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIFt4LCB5XSA9IHRoaXMuI2dldFJhbmRvbUNvb3JkcygpO1xuICAgICAgICAgICAgfSB3aGlsZSAoXG4gICAgICAgICAgICAgICAgIXRoaXMuI2lzVmFsaWRJbmRleFRvQXR0YWNrKHgsIHkpIHx8XG4gICAgICAgICAgICAgICAgIXRoaXMuI29iZXlQYXJpdHkoeCwgeSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYC5ncmlkW2RhdGEtaWQgPSAnMSddIFxuICAgICAgICAgICAgIC5ibG9ja1tkYXRhLXJvdyA9ICcke3ggKyAxfSddW2RhdGEtY29sdW1uID0gJyR7eSArIDF9J11gXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKHRoaXMub3BwQm9hcmQud2FzU3VjY2Vzc2Z1bGxBdHRhY2soeCwgeSkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLiNpc1ZhbGlkSW5kZXhUb0F0dGFjayh4LCB5ICsgMSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiNuZXh0QXR0YWNrcy5wdXNoKFt4LCB5ICsgMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuI2lzVmFsaWRJbmRleFRvQXR0YWNrKHgsIHkgLSAxKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuI25leHRBdHRhY2tzLnB1c2goW3gsIHkgLSAxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy4jaXNWYWxpZEluZGV4VG9BdHRhY2soeCArIDEsIHkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4jbmV4dEF0dGFja3MucHVzaChbeCArIDEsIHldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLiNpc1ZhbGlkSW5kZXhUb0F0dGFjayh4IC0gMSwgeSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiNuZXh0QXR0YWNrcy5wdXNoKFt4IC0gMSwgeV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJsb2NrLmNsaWNrKCk7XG4gICAgfVxuXG4gICAgI2dldFJhbmRvbUNvb3JkcygpIHtcbiAgICAgICAgY29uc3QgeCA9IHRoaXMuI2dldFJhbmRvbUludCgwLCAxMCk7XG4gICAgICAgIGNvbnN0IHkgPSB0aGlzLiNnZXRSYW5kb21JbnQoMCwgMTApO1xuICAgICAgICByZXR1cm4gW3gsIHldO1xuICAgIH1cblxuICAgICNnZXRSYW5kb21JbnQobWluLCBtYXgpIHtcbiAgICAgICAgbWluID0gTWF0aC5jZWlsKG1pbik7XG4gICAgICAgIG1heCA9IE1hdGguZmxvb3IobWF4KTtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKTsgLy8gVGhlIG1heGltdW0gaXMgZXhjbHVzaXZlIGFuZCB0aGUgbWluaW11bSBpcyBpbmNsdXNpdmVcbiAgICB9XG5cbiAgICAjaXNWYWxpZEluZGV4VG9BdHRhY2soeCwgeSkge1xuICAgICAgICBjb25zdCBzaXplID0gdGhpcy5vd25Cb2FyZC5zaXplO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgeCA8IHNpemUgJiZcbiAgICAgICAgICAgIHggPj0gMCAmJlxuICAgICAgICAgICAgeSA8IHNpemUgJiZcbiAgICAgICAgICAgIHkgPj0gMCAmJlxuICAgICAgICAgICAgIXRoaXMub3BwQm9hcmQuZ3JpZFt4XVt5XVsnYXR0YWNrZWQnXVxuICAgICAgICApO1xuICAgIH1cblxuICAgICNvYmV5UGFyaXR5KHgsIHkpIHtcbiAgICAgICAgeCA9IHggKyAxO1xuICAgICAgICB5ID0geSArIDE7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gKHggLSAxKSAqIDEwICsgeTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIChpbmRleCAlIDIgPT09IDAgJiYgeCAlIDIgIT09IDApIHx8IChpbmRleCAlIDIgIT09IDAgJiYgeCAlIDIgPT09IDApXG4gICAgICAgICk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllcic7XG5pbXBvcnQgU2hpcCBmcm9tICcuL1NoaXAnO1xuaW1wb3J0IEFwcGxpY2F0aW9uIGZyb20gJy4uL0NvbnRyb2xsZXJzL0FwcGxpY2F0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU21hcnRlc3RBSSBleHRlbmRzIFBsYXllciB7XG4gICAgI29yaWVudGF0aW9ucztcbiAgICAjbmV4dEF0dGFja3M7XG4gICAgI3Byb2JEYXRhOyAvLyBzdG9yZSBwcm9iYWJpbGl0eSBkYXRhXG4gICAgI2xlbmd0aHM7XG4gICAgY29uc3RydWN0b3IobmFtZSwgb3duQm9hcmQsIG9wcEJvYXJkKSB7XG4gICAgICAgIHN1cGVyKG5hbWUsIG93bkJvYXJkLCBvcHBCb2FyZCk7XG4gICAgICAgIHRoaXMuI29yaWVudGF0aW9ucyA9IHsgMDogJ2hvcml6b250YWwnLCAxOiAndmVydGljYWwnIH07XG4gICAgICAgIHRoaXMuI25leHRBdHRhY2tzID0gW107XG4gICAgICAgIHRoaXMuI2xlbmd0aHMgPSBBcHBsaWNhdGlvbi5sZW5ndGhzT2ZTaGlwcy5zbGljZSgpO1xuICAgICAgICB0aGlzLiNwcm9iRGF0YSA9IHtcbiAgICAgICAgICAgIG1heFg6IDAsXG4gICAgICAgICAgICBtYXhZOiAwLFxuICAgICAgICAgICAgbWF0cml4OiB0aGlzLiNjcmVhdGVNYXRyaXgoMTApLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHBsYWNlU2hpcHMoKSB7XG4gICAgICAgIEFwcGxpY2F0aW9uLmxlbmd0aHNPZlNoaXBzLmZvckVhY2goKGxlbikgPT4gdGhpcy4jYWRkU2hpcFRvQm9hcmQobGVuKSk7XG4gICAgfVxuXG4gICAgI2FkZFNoaXBUb0JvYXJkKGxlbmd0aCkge1xuICAgICAgICBsZXQgb3JpZW50YXRpb24gPSB0aGlzLiNvcmllbnRhdGlvbnNbdGhpcy4jZ2V0UmFuZG9tSW50KDAsIDIpXTtcbiAgICAgICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKGxlbmd0aCwgb3JpZW50YXRpb24pO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgW3gsIHldID0gdGhpcy4jZ2V0UmFuZG9tQ29vcmRzKCk7XG4gICAgICAgICAgICB0aGlzLm93bkJvYXJkLnBsYWNlU2hpcChzaGlwLCB4LCB5KTtcbiAgICAgICAgICAgICsrQXBwbGljYXRpb24uc2hpcHNPZkdyaWQyO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICB0aGlzLiNhZGRTaGlwVG9Cb2FyZChsZW5ndGgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGxheSgpIHtcbiAgICAgICAgbGV0IHgsIHk7XG4gICAgICAgIGlmICh0aGlzLiNuZXh0QXR0YWNrcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgcmFuZG9tSW5kZXggPSB0aGlzLiNnZXRSYW5kb21JbnQoMCwgdGhpcy4jbmV4dEF0dGFja3MubGVuZ3RoKTtcbiAgICAgICAgICAgIFt4LCB5XSA9IHRoaXMuI25leHRBdHRhY2tzLnNwbGljZShyYW5kb21JbmRleCwgMSlbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiN1cGRhdGVQcm9iYWJpbGl0eURpc3RyaWJ1dGlvbigpO1xuICAgICAgICAgICAgY29uc29sZS50YWJsZSh0aGlzLiNwcm9iRGF0YS5tYXRyaXgpO1xuICAgICAgICAgICAgeCA9IHRoaXMuI3Byb2JEYXRhLm1heFg7XG4gICAgICAgICAgICB5ID0gdGhpcy4jcHJvYkRhdGEubWF4WTtcbiAgICAgICAgICAgIHRoaXMuI3Byb2JEYXRhLm1hdHJpeCA9IHRoaXMuI2NyZWF0ZU1hdHJpeCgxMCk7IC8vIHJlc2V0IG1hdHJpeCBmb3IgbmV4dCB0aW1lO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGAuZ3JpZFtkYXRhLWlkID0gJzEnXSBcbiAgICAgICAgICAgICAuYmxvY2tbZGF0YS1yb3cgPSAnJHt4ICsgMX0nXVtkYXRhLWNvbHVtbiA9ICcke3kgKyAxfSddYFxuICAgICAgICApO1xuICAgICAgICBibG9jay5jbGljaygpO1xuICAgICAgICBpZiAodGhpcy5vcHBCb2FyZC53YXNTdWNjZXNzZnVsbEF0dGFjayh4LCB5KSkge1xuICAgICAgICAgICAgLy8gaWYgYXR0YWNrIHdhcyBzdWNjZXNzZnVsIGFuZCBhIHNoaXAgd2FzIGZvdW5kLCByZW1vdmUgdGhhdCBzaGlwIGZyb20gdGhlIGxpc3Qgb2Ygc2hpcHNcbiAgICAgICAgICAgIGlmICh0aGlzLm9wcEJvYXJkLmdyaWRbeF1beV1bJ3NoaXAnXS5pc1N1bmsoKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNoaXAgPSB0aGlzLm9wcEJvYXJkLmdyaWRbeF1beV1bJ3NoaXAnXTtcbiAgICAgICAgICAgICAgICBjb25zdCBsZW5ndGggPSBzaGlwLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuI2xlbmd0aHMuaW5kZXhPZihsZW5ndGgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcqKioqKlRPIFJFTU9WRSBTSElQIE9GIExFTkdUSCoqKionLCBsZW5ndGgpO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jbGVuZ3Rocy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm93IHJlbWFpbmluZyBsZW5naHRzIGFyZSAnLCB0aGlzLiNsZW5ndGhzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLiNpc1ZhbGlkSW5kZXhUb0F0dGFjayh4LCB5ICsgMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jbmV4dEF0dGFja3MucHVzaChbeCwgeSArIDFdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuI2lzVmFsaWRJbmRleFRvQXR0YWNrKHgsIHkgLSAxKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiNuZXh0QXR0YWNrcy5wdXNoKFt4LCB5IC0gMV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy4jaXNWYWxpZEluZGV4VG9BdHRhY2soeCArIDEsIHkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI25leHRBdHRhY2tzLnB1c2goW3ggKyAxLCB5XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLiNpc1ZhbGlkSW5kZXhUb0F0dGFjayh4IC0gMSwgeSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jbmV4dEF0dGFja3MucHVzaChbeCAtIDEsIHldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAjZ2V0UmFuZG9tQ29vcmRzKCkge1xuICAgICAgICBjb25zdCB4ID0gdGhpcy4jZ2V0UmFuZG9tSW50KDAsIDEwKTtcbiAgICAgICAgY29uc3QgeSA9IHRoaXMuI2dldFJhbmRvbUludCgwLCAxMCk7XG4gICAgICAgIHJldHVybiBbeCwgeV07XG4gICAgfVxuXG4gICAgI2dldFJhbmRvbUludChtaW4sIG1heCkge1xuICAgICAgICBtaW4gPSBNYXRoLmNlaWwobWluKTtcbiAgICAgICAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pOyAvLyBUaGUgbWF4aW11bSBpcyBleGNsdXNpdmUgYW5kIHRoZSBtaW5pbXVtIGlzIGluY2x1c2l2ZVxuICAgIH1cblxuICAgICNpc1ZhbGlkSW5kZXhUb0F0dGFjayh4LCB5KSB7XG4gICAgICAgIGNvbnN0IHNpemUgPSB0aGlzLm93bkJvYXJkLnNpemU7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICB4IDwgc2l6ZSAmJlxuICAgICAgICAgICAgeCA+PSAwICYmXG4gICAgICAgICAgICB5IDwgc2l6ZSAmJlxuICAgICAgICAgICAgeSA+PSAwICYmXG4gICAgICAgICAgICAhdGhpcy5vcHBCb2FyZC5ncmlkW3hdW3ldWydhdHRhY2tlZCddXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgI3VwZGF0ZVByb2JhYmlsaXR5RGlzdHJpYnV0aW9uKCkge1xuICAgICAgICBjb25zdCBwcm9iRGF0YSA9IHRoaXMuI3Byb2JEYXRhO1xuICAgICAgICBjb25zdCBtYXRyaXggPSBwcm9iRGF0YS5tYXRyaXg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIHBvaW50IHdhcyBhdHRhY2tlZCBhbmQgaGFkIGEgc2hpcCB3aGljaCBoYXMgYWxyZWFkeSBzdW5rLCB0aGVyZSdzIG5vIHBvaW50IG9mIGV2YWx1dGluZyBpdDtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHBCb2FyZC5ncmlkW2ldW2pdWydhdHRhY2tlZCddKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hdHJpeFtpXVtqXSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLiNsZW5ndGhzLmZvckVhY2goKGxlbmd0aCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBzaGlwIGNhbiBiZSBwbGFjZWQgYXQgdGhlIHBvc2l0aW9uIGhvcml6b250YWxseVxuICAgICAgICAgICAgICAgICAgICBsZXQgZmxhZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgbGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIGl0IGVuY291bnRlcnMgYW4gb3Zlcmxmb3dpbmcgYmxvY2sgb3IgYSBibG9jayB0aGF0IHdhcyBhdHRhY2tlZCBidXQgbm90IGEgc2hpcFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLiNpc1ZhbGlkSW5kZXgoaSwgaiArIGspIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMub3BwQm9hcmQuZ3JpZFtpXVtqICsga11bJ2F0dGFja2VkJ10gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMub3BwQm9hcmQuZ3JpZFtpXVtqICsga11bJ3NoaXAnXSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5vcHBCb2FyZC5ncmlkW2ldW2ogKyBrXVsnYXR0YWNrZWQnXSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wcEJvYXJkLmdyaWRbaV1baiArIGtdWydzaGlwJ10uaXNTdW5rKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGFnID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGZsYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgbGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vcHBCb2FyZC5ncmlkW2ldW2ogKyBrXVsnYXR0YWNrZWQnXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRyaXhbaV1baiArIGtdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRyaXhbaV1baiArIGtdKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgc2hpcCBjYW4gYmUgcGxhY2VkIGF0IHRoZSBwb3NpdGlvbiB2ZXJ0aWNhbGx5XG4gICAgICAgICAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuI2lzVmFsaWRJbmRleChpICsgaywgaikgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5vcHBCb2FyZC5ncmlkW2kgKyBrXVtqXVsnYXR0YWNrZWQnXSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5vcHBCb2FyZC5ncmlkW2kgKyBrXVtqXVsnc2hpcCddKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLm9wcEJvYXJkLmdyaWRbaSArIGtdW2pdWydhdHRhY2tlZCddICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3BwQm9hcmQuZ3JpZFtpICsga11bal1bJ3NoaXAnXS5pc1N1bmsoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYWcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChmbGFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3BwQm9hcmQuZ3JpZFtpICsga11bal1bJ2F0dGFja2VkJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0cml4W2kgKyBrXVtqXSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0cml4W2kgKyBrXVtqXSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBtYXRyaXhbaV1bal0gPlxuICAgICAgICAgICAgICAgICAgICBtYXRyaXhbdGhpcy4jcHJvYkRhdGEubWF4WF1bdGhpcy4jcHJvYkRhdGEubWF4WV1cbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jcHJvYkRhdGEubWF4WCA9IGk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI3Byb2JEYXRhLm1heFkgPSBqO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICNjcmVhdGVNYXRyaXgoc2l6ZSkge1xuICAgICAgICBjb25zdCBtYXQgPSBuZXcgQXJyYXkoc2l6ZSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICBtYXRbaV0gPSBuZXcgQXJyYXkoc2l6ZSkuZmlsbCgwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF0O1xuICAgIH1cblxuICAgICNpc1ZhbGlkSW5kZXgoeCwgeSkge1xuICAgICAgICBjb25zdCBzaXplID0gdGhpcy5vd25Cb2FyZC5zaXplO1xuICAgICAgICByZXR1cm4geCA8IHNpemUgJiYgeCA+PSAwICYmIHkgPCBzaXplICYmIHkgPj0gMDtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIG93bkJvYXJkLCBvcHBCb2FyZCkge1xuICAgICAgICBpZiAoIW93bkJvYXJkKSB0aHJvdyAnTm8gYm9hcmQgZm9yIHBsYXllcic7XG4gICAgICAgIGlmICghb3BwQm9hcmQpIHRocm93ICdObyBvcHBvbmVudCBib2FyZCBhY2Nlc3MnO1xuICAgICAgICB0aGlzLm93bkJvYXJkID0gb3duQm9hcmQ7XG4gICAgICAgIHRoaXMub3BwQm9hcmQgPSBvcHBCb2FyZDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9XG5cbiAgICBhdHRhY2soeCwgeSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLm5hbWV9IGF0dGFja2VkICgke3h9LCAke3l9KWApO1xuICAgICAgICB0aGlzLm9wcEJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgfVxuXG4gICAgaGFzV29uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHBCb2FyZC5oYXZlQWxsU3VuaygpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3RvcihsZW5ndGgsIG9yaWVudGF0aW9uID0gXCJob3Jpem9udGFsXCIpIHtcbiAgICBpZiAobGVuZ3RoIDw9IDApIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgbGVuZ3RoIG9mIHNoaXBcIik7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5oaXRJbmRpY2VzID0gW107XG4gICAgdGhpcy5vcmllbnRhdGlvbiA9IG9yaWVudGF0aW9uOyBcbiAgfVxuXG4gIGhpdChpbmRleCkge1xuICAgIGlmICh0aGlzLiNpc1ZhbGlkSW5kZXgoaW5kZXgpICYmICF0aGlzLmhpdEluZGljZXMuaW5jbHVkZXMoaW5kZXgpKVxuICAgICAgdGhpcy5oaXRJbmRpY2VzLnB1c2goaW5kZXgpO1xuICB9XG5cbiAgaXNTdW5rKCkge1xuICAgIHJldHVybiB0aGlzLmxlbmd0aCA9PT0gdGhpcy5oaXRJbmRpY2VzLmxlbmd0aDtcbiAgfVxuXG4gICNpc1ZhbGlkSW5kZXgoaW5kZXgpIHtcbiAgICByZXR1cm4gaW5kZXggPCB0aGlzLmxlbmd0aCAmJiBpbmRleCA+PSAwO1xuICB9XG59XG4iLCJpbXBvcnQgQXBwbGljYXRpb24gZnJvbSAnLi4vQ29udHJvbGxlcnMvQXBwbGljYXRpb24nO1xuXG5cbi8vIEFkZCAxMCoxMCBibG9ja3MgdG8gdGhlIGdyaWRcbmZ1bmN0aW9uIGRpc3BsYXlHcmlkcygpIHtcbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb250YWluZXIgLmJvYXJkIC5ncmlkJykpLm1hcChcbiAgICAgICAgKGdyaWQpID0+IHtcbiAgICAgICAgICAgIGdyaWQuc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCBmYWxzZSk7IFxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgYmxvY2suY2xhc3NMaXN0LmFkZCgnYmxvY2snKTtcbiAgICAgICAgICAgICAgICBibG9jay5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29sdW1uJywgKGkgJSAxMCkgKyAxKTtcbiAgICAgICAgICAgICAgICBibG9jay5zZXRBdHRyaWJ1dGUoJ2RhdGEtbnVtYmVyJywgaSArIDEpO1xuICAgICAgICAgICAgICAgIGJsb2NrLnNldEF0dHJpYnV0ZSgnZGF0YS1yb3cnLCBNYXRoLmZsb29yKGkgLyAxMCArIDEpKTtcbiAgICAgICAgICAgICAgICBibG9jay5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsIGZhbHNlKTsgXG4gICAgICAgICAgICAgICAgZ3JpZC5hcHBlbmRDaGlsZChibG9jayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICApO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5U2hpcHMobGVuZ3Rocykge1xuICAgIGxlbmd0aHMuZm9yRWFjaCgobGVuKSA9PiBhZGRTaGlwdG9VSShsZW4pKTtcbn1cblxuZnVuY3Rpb24gbW9kaWZ5U2hpcFdpZHRoKCkge1xuICAgIGNvbnNvbGUubG9nKCdyZXNpemluZyBzaGlwJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRhaW5lciAuYm9hcmQgLnNoaXAteWFyZCAuc2hpcC1ibG9jaycpLmZvckVhY2goKHNoaXBCbG9jaykgPT4ge1xuICAgICAgICBzaGlwQmxvY2suc3R5bGUud2lkdGggPSBgJHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkIC5ibG9jaycpLm9mZnNldFdpZHRoXG4gICAgICAgIH1weGA7XG4gICAgfSk7XG59XG5cbi8vIENyZWF0ZSByZWN0YW5ndWxhciBibG9ja3MgdG8gcmVwcmVzZW50IHNoaXBzXG5mdW5jdGlvbiBhZGRTaGlwdG9VSShsZW5ndGgpIHtcbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwLXlhcmQnKSkubWFwKChzaGlwWWFyZCkgPT4ge1xuICAgICAgICBjb25zdCB5YXJkTnVtYmVyID0gc2hpcFlhcmQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgICAgIGNvbnN0IHNoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICAgIHNoaXAuc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCB0cnVlKTtcbiAgICAgICAgc2hpcC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCB5YXJkTnVtYmVyKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgYmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGJsb2NrLmNsYXNzTGlzdC5hZGQoJ3NoaXAtYmxvY2snKTtcbiAgICAgICAgICAgIGJsb2NrLnN0eWxlLndpZHRoID0gYCR7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyaWQgLmJsb2NrJykub2Zmc2V0V2lkdGhcbiAgICAgICAgICAgIH1weGA7XG4gICAgICAgICAgICBibG9jay5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsIGZhbHNlKTsgXG4gICAgICAgICAgICBzaGlwLmFwcGVuZENoaWxkKGJsb2NrKTtcbiAgICAgICAgfVxuICAgICAgICBzaGlwWWFyZC5hcHBlbmRDaGlsZChzaGlwKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheUdhbWVJbnRlcmZhY2UoKSB7XG4gICAgZGlzcGxheUdyaWRzKCk7XG4gICAgZGlzcGxheVNoaXBzKEFwcGxpY2F0aW9uLmxlbmd0aHNPZlNoaXBzKTtcbiAgICB3aW5kb3cub25yZXNpemUgPSBtb2RpZnlTaGlwV2lkdGg7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVVSVdpdGhBSVNoaXBzKGJvYXJkQUkpIHtcbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvckFsbChgLnNoaXAteWFyZFtkYXRhLWlkID0gJzInXSAuc2hpcGApXG4gICAgLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIHNoaXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0pO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgaWYgKGJvYXJkQUkuZ3JpZFtpXVtqXVtcInNoaXBcIl0pIHtcbiAgICAgICAgY29uc3QgYmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGAuZ3JpZFtkYXRhLWlkID0gJzInXSBcbiAgICAgICAgICAgLmJsb2NrW2RhdGEtcm93ID0gJyR7aSArIDF9J11bZGF0YS1jb2x1bW4gPSAnJHtqICsgMX0nXWBcbiAgICAgICAgKTtcbiAgICAgICAgYmxvY2suY2xhc3NMaXN0LmFkZChcInNoaXAtYmxvY2staW4tZ3JpZFwiKTtcbiAgICAgICAgYmxvY2suY2xhc3NMaXN0LmFkZChcImFpLXNoaXBcIik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgQXBwbGljYXRpb24gZnJvbSAnLi4vQ29udHJvbGxlcnMvQXBwbGljYXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcmVBbGxTaGlwc1BsYWNlZCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAoZnVuY3Rpb24gd2FpdEZvckFsbFNoaXBzVG9CZVBsYWNlZCgpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBBcHBsaWNhdGlvbi5zaGlwc09mR3JpZDEgPT09IEFwcGxpY2F0aW9uLm51bWJlck9mU2hpcHMgJiZcbiAgICAgICAgICAgICAgICBBcHBsaWNhdGlvbi5zaGlwc09mR3JpZDIgPT09IEFwcGxpY2F0aW9uLm51bWJlck9mU2hpcHNcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xuICAgICAgICAgICAgc2V0VGltZW91dCh3YWl0Rm9yQWxsU2hpcHNUb0JlUGxhY2VkLCAyMDAwKTtcbiAgICAgICAgfSkoKTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCBTaGlwIGZyb20gJy4uL01vZGVscy9TaGlwJztcbmltcG9ydCBBcHBsaWNhdGlvbiBmcm9tICcuLi9Db250cm9sbGVycy9BcHBsaWNhdGlvbic7XG5cbmxldCBkcmFnZ2VkU2hpcCxcbiAgICBkcmFnZ2VkU2hpcExlbmd0aCxcbiAgICBzaGlwQmxvY2tOdW1iZXJEcmFnZ2VkLFxuICAgIGRyYWdnZWRTaGlwRGlyZWN0aW9uO1xuXG5sZXQgY2xpZW50WCwgY2xpZW50WTtcbi8vIEZpcmVmb3ggZG9lc24ndCByZWNvZ25pemUgY2xpZW5YIGFuZCBjbGllbnRZIGluIGRyYWdlbmQgZXZlbnQgc28gdXNlIHRoaXMgaGFja1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZXZlbnQpID0+IHtcbiAgICBldmVudCA9IGV2ZW50IHx8IHdpbmRvdy5ldmVudDtcbiAgICBjbGllbnRYID0gZXZlbnQuY2xpZW50WDtcbiAgICBjbGllbnRZID0gZXZlbnQuY2xpZW50WTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsZXRIdW1hbkRyYWdTaGlwcyhib2FyZEh1bWFuKSB7XG4gICAgZG9jdW1lbnRcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hpcC15YXJkW2RhdGEtaWQgPSAnMSddIC5zaGlwXCIpXG4gICAgICAgIC5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGhhbmRsZURyYWdTdGFydCk7XG4gICAgICAgICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCAoZSkgPT5cbiAgICAgICAgICAgICAgICBoYW5kbGVEcmFnRW5kKGUsIGJvYXJkSHVtYW4pXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlRHJhZ1N0YXJ0KGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGRyYWdnZWRTaGlwID0gZS50YXJnZXQ7XG4gICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsICcnKTtcbiAgICBjb25zb2xlLmxvZygnaGFuZGxlIGRyYWcgc3RhcnQnKTsgLy8gcmVxdWlyZWQgYnkgZmlyZWZveFxuICAgIGlmICghZHJhZ2dlZFNoaXAubWF0Y2hlcygnLnNoaXAnKSkge1xuICAgICAgICBjb25zb2xlLmxvZyhkcmFnZ2VkU2hpcCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdub3QgbWF0Y2hlcycpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIHRoaXMuc3R5bGUub3BhY2l0eSA9ICcwLjQnO1xuXG4gICAgICAgIGRyYWdnZWRTaGlwTGVuZ3RoID0gZHJhZ2dlZFNoaXAuY2hpbGRFbGVtZW50Q291bnQ7XG4gICAgICAgIGNvbnN0IHJlY3QgPSBkcmFnZ2VkU2hpcC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgZHJhZ2dlZFNoaXBEaXJlY3Rpb24gPVxuICAgICAgICAgICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUoZHJhZ2dlZFNoaXApLmZsZXhEaXJlY3Rpb247XG4gICAgICAgIGlmIChkcmFnZ2VkU2hpcERpcmVjdGlvbiA9PT0gJ3JvdycpIHtcbiAgICAgICAgICAgIGNvbnN0IGJsb2NrV2lkdGggPSByZWN0LndpZHRoIC8gZHJhZ2dlZFNoaXBMZW5ndGg7XG4gICAgICAgICAgICBzaGlwQmxvY2tOdW1iZXJEcmFnZ2VkID0gTWF0aC5mbG9vcihlLm9mZnNldFggLyBibG9ja1dpZHRoICsgMSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZHJhZ2dlZFNoaXBEaXJlY3Rpb24gPT09ICdjb2x1bW4nKSB7XG4gICAgICAgICAgICBjb25zdCBibG9ja0hlaWdodCA9IHJlY3QuaGVpZ2h0IC8gZHJhZ2dlZFNoaXBMZW5ndGg7XG4gICAgICAgICAgICBzaGlwQmxvY2tOdW1iZXJEcmFnZ2VkID0gTWF0aC5mbG9vcihlLm9mZnNldFkgLyBibG9ja0hlaWdodCArIDEpO1xuICAgICAgICB9XG4gICAgfSBjYXRjaCB7XG4gICAgICAgIHJlc3RvcmVPcGFjaXR5KGUpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlRHJhZ0VuZChlLCBib2FyZEh1bWFuKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKCFkcmFnZ2VkU2hpcC5tYXRjaGVzKCcuc2hpcCcpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdub3QgbWF0Y2hlcycpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdpbiBkcmFnIGVuZCcpO1xuICAgIGRvbU1hbmlwdWxhdGlvbihlLCBib2FyZEh1bWFuKTtcbiAgICBjb25zb2xlLmxvZygnaW4gZHJhZyBlbmQgYWZ0ZXIgZG9tJyk7XG59XG5cbmZ1bmN0aW9uIGRvbU1hbmlwdWxhdGlvbihlLCBib2FyZEh1bWFuKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2luIGRvbSBtYW4nKTtcbiAgICAgICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmVsZW1lbnRzRnJvbVBvaW50KGNsaWVudFgsIGNsaWVudFkpO1xuICAgICAgICBjb25zb2xlLmxvZyhlbGVtWzBdKTtcbiAgICAgICAgY29uc29sZS5sb2coZHJhZ2dlZFNoaXApO1xuICAgICAgICAvLyBpZiBpdCdzIGEgYmxvY2sgaW4gdGhlIHJpZ2h0IGdyaWRcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgZWxlbVswXS5tYXRjaGVzKGAuZ3JpZFtkYXRhLWlkID0gJzEnXSAuYmxvY2tgKSAmJlxuICAgICAgICAgICAgZHJhZ2dlZFNoaXBMZW5ndGggPj0gMlxuICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdtYXRjaGVzIGJsb2NrIG9mIGdyaWQgMScpO1xuICAgICAgICAgICAgY29uc3QgYmxvY2sgPSBlbGVtWzBdO1xuICAgICAgICAgICAgY29uc3QgW3JvdywgY29sdW1uXSA9IGdldFVJQ29vcmRzKGJsb2NrKTtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0aW5nQmxvY2sgPSBnZXRTdGFydGluZ0Jsb2NrKFxuICAgICAgICAgICAgICAgIHJvdyxcbiAgICAgICAgICAgICAgICBjb2x1bW4sXG4gICAgICAgICAgICAgICAgZHJhZ2dlZFNoaXBEaXJlY3Rpb25cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzdGFydGluZ0Jsb2NrKTtcbiAgICAgICAgICAgIGlmICghc3RhcnRpbmdCbG9jaykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdOT1Qgc3RhcnRpbmcgYmxvY2snKTtcbiAgICAgICAgICAgICAgICByZXN0b3JlT3BhY2l0eShlKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBbeCwgeV0gPSBnZXRVSUNvb3JkcyhzdGFydGluZ0Jsb2NrKTtcbiAgICAgICAgICAgIGNvbnN0IG9yaWVudGF0aW9uID1cbiAgICAgICAgICAgICAgICBkcmFnZ2VkU2hpcERpcmVjdGlvbiA9PT0gJ3JvdycgPyAnaG9yaXpvbnRhbCcgOiAndmVydGljYWwnO1xuXG4gICAgICAgICAgICBjb25zdCBzaGlwID0gbmV3IFNoaXAoZHJhZ2dlZFNoaXBMZW5ndGgsIG9yaWVudGF0aW9uKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgYm9hcmRIdW1hbi5wbGFjZVNoaXAoc2hpcCwgeCAtIDEsIHkgLSAxKTsgLy8geC0xLHktMSBiZWNhdXNlIFVJOiAxLDIsLi4uIC0+IGxvZ2ljOjAsMSwuLi5cXFxuICAgICAgICAgICAgICAgICsrQXBwbGljYXRpb24uc2hpcHNPZkdyaWQxO1xuICAgICAgICAgICAgICAgIHBhaW50U2hpcE9uR3JpZChcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoc3RhcnRpbmdCbG9jay5nZXRBdHRyaWJ1dGUoJ2RhdGEtbnVtYmVyJykpLFxuICAgICAgICAgICAgICAgICAgICBvcmllbnRhdGlvblxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2lkdGggPVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aCB8fFxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggfHxcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh3aWR0aCk7XG4gICAgICAgICAgICAgICAgaWYgKHdpZHRoID4gNTc2KSBkcmFnZ2VkU2hpcC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICAgICAgZWxzZSBkcmFnZ2VkU2hpcC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICByZXN0b3JlT3BhY2l0eShlKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaW4gZWxzZSBvZiBkcmFnIGZhaWwnKTtcbiAgICAgICAgICAgIHJlc3RvcmVPcGFjaXR5KGUpfTtcbiAgICB9IGNhdGNoIHtcbiAgICAgICAgcmVzdG9yZU9wYWNpdHkoZSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRTdGFydGluZ0Jsb2NrKHJvdywgY29sdW1uLCBkaXJlY3Rpb24pIHtcbiAgICBpZiAoZGlyZWN0aW9uID09PSAncm93JylcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgLmdyaWRbZGF0YS1pZCA9ICcxJ10gLmJsb2NrW2RhdGEtcm93ID0gJyR7cm93fSddW2RhdGEtY29sdW1uID0gJyR7XG4gICAgICAgICAgICAgICAgY29sdW1uIC0gc2hpcEJsb2NrTnVtYmVyRHJhZ2dlZCArIDFcbiAgICAgICAgICAgIH0nXWBcbiAgICAgICAgKTtcbiAgICBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdjb2x1bW4nKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYC5ncmlkW2RhdGEtaWQgPSAnMSddIC5ibG9ja1tkYXRhLXJvdyA9ICcke1xuICAgICAgICAgICAgICAgIHJvdyAtIHNoaXBCbG9ja051bWJlckRyYWdnZWQgKyAxXG4gICAgICAgICAgICB9J11bZGF0YS1jb2x1bW4gPSAnJHtjb2x1bW59J11gXG4gICAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBkaXJlY3Rpb24gc3BlY2lmaWVkJyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBwYWludFNoaXBPbkdyaWQoaW5kZXgsIG9yaWVudGF0aW9uKSB7XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZHJhZ2dlZFNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICBgLmdyaWRbZGF0YS1pZCA9ICcxJ10gLmJsb2NrW2RhdGEtbnVtYmVyID0gJyR7aW5kZXgrK30nXWBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjdXJyZW50QmxvY2suY2xhc3NMaXN0LmFkZCgnc2hpcC1ibG9jay1pbi1ncmlkJyk7XG4gICAgICAgIH1cbiAgICBlbHNlIGlmIChvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRyYWdnZWRTaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgYC5ncmlkW2RhdGEtaWQgPSAnMSddIC5ibG9ja1tkYXRhLW51bWJlciA9ICcke2luZGV4fSddYFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGN1cnJlbnRCbG9jay5jbGFzc0xpc3QuYWRkKCdzaGlwLWJsb2NrLWluLWdyaWQnKTtcbiAgICAgICAgICAgIGluZGV4ICs9IDEwO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZXN0b3JlT3BhY2l0eShlKSB7XG4gICAgY29uc29sZS5sb2coJ2luIHJlc3RvcmUgb3BhY2l0eScpO1xuICAgIGNvbnNvbGUubG9nKGRyYWdnZWRTaGlwKTtcbiAgICBkcmFnZ2VkU2hpcC5zdHlsZS5vcGFjaXR5ID0gMTtcbn1cblxuZnVuY3Rpb24gZ2V0VUlDb29yZHMoYmxvY2spIHtcbiAgICBjb25zdCB4ID0gYmxvY2suZ2V0QXR0cmlidXRlKCdkYXRhLXJvdycpO1xuICAgIGNvbnN0IHkgPSBibG9jay5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sdW1uJyk7XG4gICAgcmV0dXJuIFt4LCB5XTtcbn1cbiIsImxldCBkcmFnID0gZmFsc2U7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxldEh1bWFuUm90YXRlU2hpcHMoKSB7XG4gICAgZG9jdW1lbnRcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoYC5zaGlwLXlhcmRbZGF0YS1pZCA9ICcxJ10gLnNoaXBgKVxuICAgICAgICAuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICAgICAgLy8gZGlzdGluZ3Vpc2ggYi93IGRyYWcgYW5kIGNsaWNrXG4gICAgICAgICAgICAvLyB0aGVyZSBpcyBhIG1vdXNlbW92ZSBiZXR3ZWVuIG1vdXNlZG93biBhbmQgbW91c2V1cCBpbiBhIGRyYWcsXG4gICAgICAgICAgICAvLyBidXQgbm90IGluIGEgY2xpY2suXG4gICAgICAgICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICgpID0+IChkcmFnID0gZmFsc2UpKTtcbiAgICAgICAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKCkgPT4gKGRyYWcgPSB0cnVlKSk7XG4gICAgICAgICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghZHJhZykgcm90YXRlU2hpcChlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbn1cblxuZnVuY3Rpb24gcm90YXRlU2hpcChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKCdjbGljaycpO1xuICAgIGNvbnN0IHNoaXAgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50OyAvLyBiZWNhdXNlIHRhcmdldCB3aWxsIGJlIGEgc2hpcCBibG9jayBkdWUgdG8gZXZlbnQgYnViYmxpbmdcbiAgICBjb25zdCBjdXJyZW50RGlyZWN0aW9uID0gc2hpcC5zdHlsZS5mbGV4RGlyZWN0aW9uO1xuICAgIHNoaXAuc3R5bGUuZmxleERpcmVjdGlvbiA9IGN1cnJlbnREaXJlY3Rpb24gPT09ICdjb2x1bW4nID8gJ3JvdycgOiAnY29sdW1uJztcbn1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXG4gKi9cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICovXFxuXFxuaHIge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICogYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHsgLyogMSAqL1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmxlZ2VuZCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXG4gIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAqL1xcblxcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxuICovXFxuXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAqL1xcblxcbmRldGFpbHMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBNaXNjXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxuICovXFxuXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwyRUFBMkU7O0FBRTNFOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGO0VBQ0UsaUJBQWlCLEVBQUUsTUFBTTtFQUN6Qiw4QkFBOEIsRUFBRSxNQUFNO0FBQ3hDOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7RUFDRSx1QkFBdUIsRUFBRSxNQUFNO0VBQy9CLFNBQVMsRUFBRSxNQUFNO0VBQ2pCLGlCQUFpQixFQUFFLE1BQU07QUFDM0I7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsaUNBQWlDLEVBQUUsTUFBTTtFQUN6QyxjQUFjLEVBQUUsTUFBTTtBQUN4Qjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLG1CQUFtQixFQUFFLE1BQU07RUFDM0IsMEJBQTBCLEVBQUUsTUFBTTtFQUNsQyxpQ0FBaUMsRUFBRSxNQUFNO0FBQzNDOztBQUVBOztFQUVFOztBQUVGOztFQUVFLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0VBR0U7O0FBRUY7OztFQUdFLGlDQUFpQyxFQUFFLE1BQU07RUFDekMsY0FBYyxFQUFFLE1BQU07QUFDeEI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTs7QUFFRjs7RUFFRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7Ozs7O0VBS0Usb0JBQW9CLEVBQUUsTUFBTTtFQUM1QixlQUFlLEVBQUUsTUFBTTtFQUN2QixpQkFBaUIsRUFBRSxNQUFNO0VBQ3pCLFNBQVMsRUFBRSxNQUFNO0FBQ25COztBQUVBOzs7RUFHRTs7QUFFRjtRQUNRLE1BQU07RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7OztFQUdFOztBQUVGO1NBQ1MsTUFBTTtFQUNiLG9CQUFvQjtBQUN0Qjs7QUFFQTs7RUFFRTs7QUFFRjs7OztFQUlFLDBCQUEwQjtBQUM1Qjs7QUFFQTs7RUFFRTs7QUFFRjs7OztFQUlFLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7O0VBRUU7O0FBRUY7Ozs7RUFJRSw4QkFBOEI7QUFDaEM7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7Ozs7O0VBS0U7O0FBRUY7RUFDRSxzQkFBc0IsRUFBRSxNQUFNO0VBQzlCLGNBQWMsRUFBRSxNQUFNO0VBQ3RCLGNBQWMsRUFBRSxNQUFNO0VBQ3RCLGVBQWUsRUFBRSxNQUFNO0VBQ3ZCLFVBQVUsRUFBRSxNQUFNO0VBQ2xCLG1CQUFtQixFQUFFLE1BQU07QUFDN0I7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTs7QUFFRjs7RUFFRSxzQkFBc0IsRUFBRSxNQUFNO0VBQzlCLFVBQVUsRUFBRSxNQUFNO0FBQ3BCOztBQUVBOztFQUVFOztBQUVGOztFQUVFLFlBQVk7QUFDZDs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSw2QkFBNkIsRUFBRSxNQUFNO0VBQ3JDLG9CQUFvQixFQUFFLE1BQU07QUFDOUI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsMEJBQTBCLEVBQUUsTUFBTTtFQUNsQyxhQUFhLEVBQUUsTUFBTTtBQUN2Qjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsYUFBYTtBQUNmOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXG4gKi9cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICovXFxuXFxuaHIge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICogYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHsgLyogMSAqL1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmxlZ2VuZCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXG4gIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAqL1xcblxcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxuICovXFxuXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAqL1xcblxcbmRldGFpbHMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBNaXNjXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxuICovXFxuXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLXByaW1hcnktMTogIzAwMTcxZjtcXG4gICAgLS1wcmltYXJ5LTI6ICNmZmZmZmY7XFxuICAgIC0tc2Vjb25kYXJ5LTE6ICMwMDM0NTk7XFxuICAgIC0tYWNjZW50LTE6ICMzZjZjNTE7XFxuICAgIC0tYWNjZW50LTI6ICMwMGE4ZTg7XFxuICAgIC8qIC0tYWNjZW50LTM6ICMxN2JlYmI7ICovXFxuICAgIC8qIC0tYWNjZW50LTM6ICMwMjg4RTg7ICovXFxuICAgIC0tYWNjZW50LTM6IHJnYigyMTEsIDU0LCA1NCk7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbi5jb250YWluZXIgLmdhbWUtdGl0bGUge1xcbiAgICBmbGV4OiAwIDAgMTAwJTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQxMDE2O1xcbiAgICBib3JkZXItYm90dG9tOiAycmVtIHRyYW5zcGFyZW50IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktMSk7XFxufVxcblxcbi5jb250YWluZXIgLmdhbWUtdGl0bGUgc3BhbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBib3JkZXI6IDFyZW0gc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1sZWZ0OiAycmVtIHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG4uY29udGFpbmVyIC5ib2FyZCB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogM3ZoO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5jb250YWluZXIgLmJvYXJkIC50aXRsZSB7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS0xKTsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NmMDgwODtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBmbGV4OiAwIDAgM3ZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAxcmVtIHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uYm9hcmRbZGF0YS1pZD0nMiddIC50aXRsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZjA4MDg0NztcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9hcmQgLmdyaWQge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCBjYWxjKDEwMCUgLyAxMCkpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgY2FsYygxMDAlIC8gMTApKTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7ICovXFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktMSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9hcmQgLmJsb2NrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LTIpO1xcbiAgICBhc3BlY3QtcmF0aW86IDE7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS0xKTsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDAuMnJlbSBzb2xpZCB2YXIoLS1wcmltYXJ5LTEpO1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2FyZCAuYmxvY2s6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzNDU5OWM7XFxufVxcblxcbi5zaGlwLXlhcmQtd2lkZ2V0IHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2FyZCAuc2hpcC15YXJkIHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5jb250YWluZXIgLmJvYXJkIC5zaGlwLXlhcmQgLnNoaXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2FyZCAuc2hpcC15YXJkIC5zaGlwIC5zaGlwLWJsb2NrIHtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxvY2stY29sb3IpOyAqL1xcbiAgICBhc3BlY3QtcmF0aW86IDE7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtMyk7XFxuICAgIGFzcGVjdC1yYXRpbzogMTtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LTEpOyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMC4ycmVtIHNvbGlkIHZhcigtLXByaW1hcnktMSk7XFxufVxcblxcbi5zaGlwLWJsb2NrLWluLWdyaWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtMykgIWltcG9ydGFudDtcXG4gICAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgYmxhY2sgIWltcG9ydGFudDsgKi9cXG59XFxuXFxuLmJvYXJkW2RhdGEtaWQ9JzInXSAuc2hpcC1ibG9jay1pbi1ncmlkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LTIpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5ib2FyZFtkYXRhLWlkPScyJ10gLnNoaXAtYmxvY2staW4tZ3JpZDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDM0NTk5YyAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYXR0YWNrZWQtc2hpcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtMykgIWltcG9ydGFudDsgKi9cXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTY1LCA0MiwgNDIsIDAuMzA4KSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYm9hcmRbZGF0YS1pZD0nMiddIC5hdHRhY2tlZC1zaGlwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtMykgIWltcG9ydGFudDsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjUsIDQyLCA0MiwgMC4zMDgpICFpbXBvcnRhbnQ7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5iYWQtYXR0YWNrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDsgKi9cXG59XFxuXFxuLmJhZC1hdHRhY2s6aG92ZXIge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XFxuICAgIC8qIC8vIHJ1bGVzIGhlcmUgYXBwbHkgdG8gZGV2aWNlcyBmcm9tIDk5M3B4IHRvIDEyMDBweCAoaW5jbHVzaXZlKSAqL1xcbiAgICAuY29udGFpbmVyIC5ib2FyZCB7XFxuICAgICAgICB3aWR0aDogNTAlO1xcbiAgICB9XFxuXFxuICAgIC5jb250YWluZXIgLmJvYXJkIC5ncmlkIHtcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxuICAgIH1cXG5cXG4gICAgLmNvbnRhaW5lciAuYm9hcmQgLnRpdGxlIHtcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxuICAgIH1cXG5cXG4gICAgLmNvbnRhaW5lciAuYm9hcmQgLnNoaXAteWFyZCB7XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xcbiAgICAvKiAvLyBydWxlcyBoZXJlIGFwcGx5IHRvIGRldmljZXMgZnJvbSA3NjlweCB0byA5OTJweCAoaW5jbHVzaXZlKSAqL1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gICAgLyogLy8gcnVsZXMgaGVyZSBhcHBseSB0byBkZXZpY2VzIGZyb20gMHB4IHRvIDc2OHB4IChpbmNsdXNpdmUpICovXFxuICAgIC5jb250YWluZXIgLmJvYXJkIC5ncmlkIHtcXG4gICAgICAgIHdpZHRoOiA5NSU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIH1cXG4gICAgLmNvbnRhaW5lciAuYm9hcmQgLnNoaXAteWFyZCB7XFxuICAgICAgICB3aWR0aDogOTUlO1xcbiAgICB9XFxuICAgIC5jb250YWluZXIgLmJvYXJkIC5ibG9jayB7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgICAgICBib3JkZXI6IDAuMTVyZW0gc29saWQgdmFyKC0tcHJpbWFyeS0xKTtcXG4gICAgfVxcblxcbiAgICAuY29udGFpbmVyIC5ib2FyZCAuc2hpcC15YXJkIC5zaGlwIC5zaGlwLWJsb2NrIHtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgICAgIGJvcmRlcjogMC4xNXJlbSBzb2xpZCB2YXIoLS1wcmltYXJ5LTEpO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCl7XFxuICAgIC8qIC5jb250YWluZXIgLmJvYXJkIC5ibG9jayB7XFxuICAgICAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCB2YXIoLS1wcmltYXJ5LTEpO1xcbiAgICB9XFxuXFxuICAgIC5jb250YWluZXIgLmJvYXJkIC5zaGlwLXlhcmQgLnNoaXAgLnNoaXAtYmxvY2sge1xcbiAgICAgICAgYm9yZGVyOiAwLjFyZW0gc29saWQgdmFyKC0tcHJpbWFyeS0xKTtcXG4gICAgfSAqL1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcXG4gICAgLmNvbnRhaW5lciAuYm9hcmQge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBnYXA6IDAuNXJlbTtcXG4gICAgfVxcblxcbiAgICAuY29udGFpbmVyIC5ib2FyZCAudGl0bGUge1xcbiAgICAgICAgd2lkdGg6IDUwJTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgfVxcbiAgICAuY29udGFpbmVyIC5ib2FyZCAuZ3JpZCB7XFxuICAgICAgICB3aWR0aDogNTAlO1xcbiAgICB9XFxuXFxuICAgIC5jb250YWluZXIgLmJvYXJkIC5zaGlwLXlhcmQge1xcbiAgICAgICAgd2lkdGg6IDUwJTtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFyZW0gc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuXFxuICAgIC5jb250YWluZXIgLmJvYXJkIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgZ2FwOiAwLjVyZW07XFxuICAgIH1cXG5cXG4gICAgLmNvbnRhaW5lciAuYm9hcmQgLnRpdGxlIHtcXG4gICAgICAgIHdpZHRoOiA1NSU7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgIH1cXG4gICAgLmNvbnRhaW5lciAuYm9hcmQgLmdyaWQge1xcbiAgICAgICAgd2lkdGg6IDU1JTtcXG4gICAgfVxcblxcbiAgICAuY29udGFpbmVyIC5ib2FyZCAuc2hpcC15YXJkIHtcXG4gICAgICAgIHdpZHRoOiA1NSU7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAxcmVtIHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvY29udGFpbmVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLHFDQUFxQztJQUNyQyw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsOEJBQThCO0lBQzlCLG1DQUFtQztBQUN2QztBQUNBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLDBDQUEwQztJQUMxQyx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGFBQWE7SUFDYixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGtEQUFrRDtJQUNsRCwrQ0FBK0M7SUFDL0MsNkJBQTZCO0lBQzdCLFVBQVU7SUFDVixrQ0FBa0M7SUFDbEMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGVBQWU7SUFDZiwwQ0FBMEM7SUFDMUMsa0JBQWtCO0lBQ2xCLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDBDQUEwQztJQUMxQyxlQUFlO0lBQ2YsY0FBYztJQUNkLGlDQUFpQztJQUNqQyxlQUFlO0lBQ2YsMENBQTBDO0lBQzFDLGtCQUFrQjtJQUNsQixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSw0Q0FBNEM7SUFDNUMsZUFBZTtJQUNmLGNBQWM7SUFDZCx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrREFBa0Q7SUFDbEQsY0FBYztJQUNkLHFEQUFxRDtBQUN6RDs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxrREFBa0Q7SUFDbEQscURBQXFEO0lBQ3JELCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLGtDQUFrQztJQUNsQyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxvRUFBb0U7SUFDcEU7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7QUFDSjtBQUNBO0lBQ0ksbUVBQW1FO0FBQ3ZFO0FBQ0E7SUFDSSxpRUFBaUU7SUFDakU7UUFDSSxVQUFVO1FBQ1Ysa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixzQ0FBc0M7SUFDMUM7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsc0NBQXNDO0lBQzFDO0FBQ0o7O0FBRUE7SUFDSTs7Ozs7O09BTUc7QUFDUDs7QUFFQTtJQUNJO1FBQ0ksV0FBVztRQUNYLFdBQVc7SUFDZjs7SUFFQTtRQUNJLFVBQVU7UUFDVixlQUFlO1FBQ2YsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksVUFBVTtRQUNWLHFDQUFxQztJQUN6QztBQUNKOztBQUVBOztJQUVJO1FBQ0ksV0FBVztRQUNYLFdBQVc7SUFDZjs7SUFFQTtRQUNJLFVBQVU7UUFDVixlQUFlO1FBQ2YsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksVUFBVTtRQUNWLHFDQUFxQztJQUN6QztBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1wcmltYXJ5LTE6ICMwMDE3MWY7XFxuICAgIC0tcHJpbWFyeS0yOiAjZmZmZmZmO1xcbiAgICAtLXNlY29uZGFyeS0xOiAjMDAzNDU5O1xcbiAgICAtLWFjY2VudC0xOiAjM2Y2YzUxO1xcbiAgICAtLWFjY2VudC0yOiAjMDBhOGU4O1xcbiAgICAvKiAtLWFjY2VudC0zOiAjMTdiZWJiOyAqL1xcbiAgICAvKiAtLWFjY2VudC0zOiAjMDI4OEU4OyAqL1xcbiAgICAtLWFjY2VudC0zOiByZ2IoMjExLCA1NCwgNTQpO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG4uY29udGFpbmVyIC5nYW1lLXRpdGxlIHtcXG4gICAgZmxleDogMCAwIDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA0MTAxNjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnJlbSB0cmFuc3BhcmVudCBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTEpO1xcbn1cXG5cXG4uY29udGFpbmVyIC5nYW1lLXRpdGxlIHNwYW4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYm9yZGVyOiAxcmVtIHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItbGVmdDogMnJlbSBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuLmNvbnRhaW5lciAuYm9hcmQge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDN2aDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uY29udGFpbmVyIC5ib2FyZCAudGl0bGUge1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktMSk7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZjA4MDg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgZmxleDogMCAwIDN2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMXJlbSBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmJvYXJkW2RhdGEtaWQ9JzInXSAudGl0bGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2YwODA4NDc7XFxufVxcblxcbi5jb250YWluZXIgLmJvYXJkIC5ncmlkIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgY2FsYygxMDAlIC8gMTApKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIGNhbGMoMTAwJSAvIDEwKSk7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAqL1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTEpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5jb250YWluZXIgLmJvYXJkIC5ibG9jayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC0yKTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktMSk7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAwLjJyZW0gc29saWQgdmFyKC0tcHJpbWFyeS0xKTtcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9hcmQgLmJsb2NrOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMzQ1OTljO1xcbn1cXG5cXG4uc2hpcC15YXJkLXdpZGdldCB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9hcmQgLnNoaXAteWFyZCB7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2FyZCAuc2hpcC15YXJkIC5zaGlwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9hcmQgLnNoaXAteWFyZCAuc2hpcCAuc2hpcC1ibG9jayB7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsb2NrLWNvbG9yKTsgKi9cXG4gICAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LTMpO1xcbiAgICBhc3BlY3QtcmF0aW86IDE7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS0xKTsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDAuMnJlbSBzb2xpZCB2YXIoLS1wcmltYXJ5LTEpO1xcbn1cXG5cXG4uc2hpcC1ibG9jay1pbi1ncmlkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LTMpICFpbXBvcnRhbnQ7XFxuICAgIGFzcGVjdC1yYXRpbzogMTtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrICFpbXBvcnRhbnQ7ICovXFxufVxcblxcbi5ib2FyZFtkYXRhLWlkPScyJ10gLnNoaXAtYmxvY2staW4tZ3JpZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC0yKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYm9hcmRbZGF0YS1pZD0nMiddIC5zaGlwLWJsb2NrLWluLWdyaWQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzNDU5OWMgIWltcG9ydGFudDtcXG59XFxuXFxuLmF0dGFja2VkLXNoaXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LTMpICFpbXBvcnRhbnQ7ICovXFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2NSwgNDIsIDQyLCAwLjMwOCkgIWltcG9ydGFudDtcXG59XFxuXFxuLmJvYXJkW2RhdGEtaWQ9JzInXSAuYXR0YWNrZWQtc2hpcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LTMpICFpbXBvcnRhbnQ7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTY1LCA0MiwgNDIsIDAuMzA4KSAhaW1wb3J0YW50O1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYmFkLWF0dGFjayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7ICovXFxufVxcblxcbi5iYWQtYXR0YWNrOmhvdmVyIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xcbiAgICAvKiAvLyBydWxlcyBoZXJlIGFwcGx5IHRvIGRldmljZXMgZnJvbSA5OTNweCB0byAxMjAwcHggKGluY2x1c2l2ZSkgKi9cXG4gICAgLmNvbnRhaW5lciAuYm9hcmQge1xcbiAgICAgICAgd2lkdGg6IDUwJTtcXG4gICAgfVxcblxcbiAgICAuY29udGFpbmVyIC5ib2FyZCAuZ3JpZCB7XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICB9XFxuXFxuICAgIC5jb250YWluZXIgLmJvYXJkIC50aXRsZSB7XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICB9XFxuXFxuICAgIC5jb250YWluZXIgLmJvYXJkIC5zaGlwLXlhcmQge1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcXG4gICAgLyogLy8gcnVsZXMgaGVyZSBhcHBseSB0byBkZXZpY2VzIGZyb20gNzY5cHggdG8gOTkycHggKGluY2x1c2l2ZSkgKi9cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAgIC8qIC8vIHJ1bGVzIGhlcmUgYXBwbHkgdG8gZGV2aWNlcyBmcm9tIDBweCB0byA3NjhweCAoaW5jbHVzaXZlKSAqL1xcbiAgICAuY29udGFpbmVyIC5ib2FyZCAuZ3JpZCB7XFxuICAgICAgICB3aWR0aDogOTUlO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICB9XFxuICAgIC5jb250YWluZXIgLmJvYXJkIC5zaGlwLXlhcmQge1xcbiAgICAgICAgd2lkdGg6IDk1JTtcXG4gICAgfVxcbiAgICAuY29udGFpbmVyIC5ib2FyZCAuYmxvY2sge1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICAgICAgYm9yZGVyOiAwLjE1cmVtIHNvbGlkIHZhcigtLXByaW1hcnktMSk7XFxuICAgIH1cXG5cXG4gICAgLmNvbnRhaW5lciAuYm9hcmQgLnNoaXAteWFyZCAuc2hpcCAuc2hpcC1ibG9jayB7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgICAgICBib3JkZXI6IDAuMTVyZW0gc29saWQgdmFyKC0tcHJpbWFyeS0xKTtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpe1xcbiAgICAvKiAuY29udGFpbmVyIC5ib2FyZCAuYmxvY2sge1xcbiAgICAgICAgYm9yZGVyOiAwLjFyZW0gc29saWQgdmFyKC0tcHJpbWFyeS0xKTtcXG4gICAgfVxcblxcbiAgICAuY29udGFpbmVyIC5ib2FyZCAuc2hpcC15YXJkIC5zaGlwIC5zaGlwLWJsb2NrIHtcXG4gICAgICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkIHZhcigtLXByaW1hcnktMSk7XFxuICAgIH0gKi9cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XFxuICAgIC5jb250YWluZXIgLmJvYXJkIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgZ2FwOiAwLjVyZW07XFxuICAgIH1cXG5cXG4gICAgLmNvbnRhaW5lciAuYm9hcmQgLnRpdGxlIHtcXG4gICAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgIH1cXG4gICAgLmNvbnRhaW5lciAuYm9hcmQgLmdyaWQge1xcbiAgICAgICAgd2lkdGg6IDUwJTtcXG4gICAgfVxcblxcbiAgICAuY29udGFpbmVyIC5ib2FyZCAuc2hpcC15YXJkIHtcXG4gICAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAxcmVtIHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xcblxcbiAgICAuY29udGFpbmVyIC5ib2FyZCB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGdhcDogMC41cmVtO1xcbiAgICB9XFxuXFxuICAgIC5jb250YWluZXIgLmJvYXJkIC50aXRsZSB7XFxuICAgICAgICB3aWR0aDogNTUlO1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICB9XFxuICAgIC5jb250YWluZXIgLmJvYXJkIC5ncmlkIHtcXG4gICAgICAgIHdpZHRoOiA1NSU7XFxuICAgIH1cXG5cXG4gICAgLmNvbnRhaW5lciAuYm9hcmQgLnNoaXAteWFyZCB7XFxuICAgICAgICB3aWR0aDogNTUlO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXJlbSBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4uL2ltYWdlcy9jcm9zc2hhaXIucG5nXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SeWUmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1wcmltYXJ5LTE6ICMwMDE3MWY7XFxuICAgIC0tcHJpbWFyeS0yOiAjZmZmZmZmO1xcbiAgICAtLXNlY29uZGFyeS0xOiAjMDAzNDU5O1xcbiAgICAtLWFjY2VudC0xOiAjM0Y2QzUxO1xcbiAgICAtLWFjY2VudC0yOiAjMDBhOGU4O1xcbiAgICAtLWZvbnQ6ICdSeWUnLCBjdXJzaXZlO1xcbn1cXG5cXG4qIHtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgd2hpdGU7ICovXFxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTEpO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS0yKTtcXG4gICAgZm9udC1zaXplOiA2Mi41JTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xcbn1cXG5cXG5cXG5cXG5cXG4vKiAuY29udGFpbmVyIC5ib2FyZFtkYXRhLWlkID0gJzInXXtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn0gKi9cXG5cXG4uY29udGFpbmVyIC5ib2FyZCAuZ3JpZFtkYXRhLWlkPScyJ10gLmJsb2NrOmhvdmVyIHtcXG4gICAgY3Vyc29yOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpLCBhdXRvO1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2FyZCAuZ3JpZFtkYXRhLWlkPScyJ10gLnNoaXAtYmxvY2staW4tZ3JpZDpob3ZlciB7XFxuICAgIGN1cnNvcjogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSwgYXV0bztcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9hcmQgLmdyaWRbZGF0YS1pZD0nMiddIC5haS1zaGlwOmhvdmVyIHtcXG4gICAgY3Vyc29yOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpLCBhdXRvO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5bZHJhZ2dhYmxlPSd0cnVlJ10ge1xcbiAgICBjdXJzb3I6IG1vdmU7XFxufVxcblxcblxcbi5iYWQtYXR0YWNrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjAwJTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDsgKi9cXG59XFxuXFxuLyogVEVNUE9SQVJZICovXFxuLmJsb2NrLXRleHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6IHNlcmlmO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE1MCU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIC8qIGZvbnQtc2l6ZTogMjAwJTsgKi9cXG4gICAgLyogZm9udC1zaXplOiAxLjJyZW07ICovXFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0lBQ0ksb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0Isb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGtDQUFrQztJQUNsQyx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtBQUM1Qjs7Ozs7QUFLQTs7R0FFRzs7QUFFSDtJQUNJLHFEQUE0QztBQUNoRDs7QUFFQTtJQUNJLHFEQUE0QztBQUNoRDs7QUFFQTtJQUNJLHFEQUE0QztBQUNoRDs7Ozs7O0FBTUE7SUFDSSxZQUFZO0FBQ2hCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix3Q0FBd0M7QUFDNUM7O0FBRUEsY0FBYztBQUNkO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixVQUFVO0lBQ1YscUJBQXFCO0lBQ3JCLHVCQUF1QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICd+bm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzJztcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SeWUmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgICAtLXByaW1hcnktMTogIzAwMTcxZjtcXG4gICAgLS1wcmltYXJ5LTI6ICNmZmZmZmY7XFxuICAgIC0tc2Vjb25kYXJ5LTE6ICMwMDM0NTk7XFxuICAgIC0tYWNjZW50LTE6ICMzRjZDNTE7XFxuICAgIC0tYWNjZW50LTI6ICMwMGE4ZTg7XFxuICAgIC0tZm9udDogJ1J5ZScsIGN1cnNpdmU7XFxufVxcblxcbioge1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTsgKi9cXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktMSk7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LTIpO1xcbiAgICBmb250LXNpemU6IDYyLjUlO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XFxufVxcblxcblxcblxcblxcbi8qIC5jb250YWluZXIgLmJvYXJkW2RhdGEtaWQgPSAnMidde1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufSAqL1xcblxcbi5jb250YWluZXIgLmJvYXJkIC5ncmlkW2RhdGEtaWQ9JzInXSAuYmxvY2s6aG92ZXIge1xcbiAgICBjdXJzb3I6IHVybCgnLi4vaW1hZ2VzL2Nyb3NzaGFpci5wbmcnKSwgYXV0bztcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9hcmQgLmdyaWRbZGF0YS1pZD0nMiddIC5zaGlwLWJsb2NrLWluLWdyaWQ6aG92ZXIge1xcbiAgICBjdXJzb3I6IHVybCgnLi4vaW1hZ2VzL2Nyb3NzaGFpci5wbmcnKSwgYXV0bztcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9hcmQgLmdyaWRbZGF0YS1pZD0nMiddIC5haS1zaGlwOmhvdmVyIHtcXG4gICAgY3Vyc29yOiB1cmwoJy4uL2ltYWdlcy9jcm9zc2hhaXIucG5nJyksIGF1dG87XFxufVxcblxcblxcblxcblxcblxcbltkcmFnZ2FibGU9J3RydWUnXSB7XFxuICAgIGN1cnNvcjogbW92ZTtcXG59XFxuXFxuXFxuLmJhZC1hdHRhY2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMDAlO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjayAhaW1wb3J0YW50OyAqL1xcbn1cXG5cXG4vKiBURU1QT1JBUlkgKi9cXG4uYmxvY2stdGV4dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogc2VyaWY7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTUwJTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgLyogZm9udC1zaXplOiAyMDAlOyAqL1xcbiAgICAvKiBmb250LXNpemU6IDEuMnJlbTsgKi9cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKFxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIHRvU3RyaW5nVGFnU3ltYm9sLFxuICAgIFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICApO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb250YWluZXIuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL2Nzcy9jb250YWluZXIuY3NzJztcbmltcG9ydCAnLi9jc3MvaW5kZXguY3NzJztcblxuaW1wb3J0ICcuL21vZHVsZXMvQ29udHJvbGxlcnMvR2FtZSc7XG4iXSwic291cmNlUm9vdCI6IiJ9