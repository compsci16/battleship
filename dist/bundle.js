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
  document.querySelectorAll('.ship-block').forEach(function (shipBlock) {
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
        draggedShip.style.visibility = 'hidden';
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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --primary-1: #00171f;\n    --primary-2: #ffffff;\n    --secondary-1: #003459;\n    --accent-1: #3f6c51;\n    --accent-2: #00a8e8;\n    /* --accent-3: #17bebb; */\n    /* --accent-3: #0288E8; */\n    --accent-3: rgb(211, 54, 54);\n}\n\n.container {\n    display: flex;\n    flex-wrap: wrap;\n}\n.container .game-title {\n    flex: 0 0 100%;\n    font-size: 2rem;\n    display: flex;\n    background-color: #041016;\n    border-bottom: 2rem transparent solid;\n    border-color: var(--primary-1);\n}\n\n.container .game-title span {\n    display: block;\n    border: 1rem solid transparent;\n    border-left: 2rem solid transparent;\n}\n.container .board {\n    width: 50%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 3vh;\n    position: relative;\n}\n.container .board .title {\n    /* background-color: var(--secondary-1); */\n    background-color: #cf0808;\n    text-align: center;\n    width: 70%;\n    border-radius: 5px;\n    font-size: 2em;\n    flex: 0 0 3vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 1rem solid transparent;\n}\n\n.board[data-id='2'] .title {\n    background-color: #cf080847;\n}\n\n.container .board .grid {\n    align-self: center;\n    display: grid;\n    grid-template-columns: repeat(10, calc(100% / 10));\n    grid-template-rows: repeat(10, calc(100% / 10));\n    /* background-color: white; */\n    width: 70%;\n    background-color: var(--primary-1);\n    border-radius: 5px;\n}\n\n.container .board .block {\n    background-color: var(--accent-2);\n    aspect-ratio: 1;\n    /* border: 1px solid var(--secondary-1); */\n    border-radius: 5px;\n    border: 0.2rem solid var(--primary-1);\n}\n\n.container .board .block:hover {\n    background-color: #0034599c;\n}\n\n.ship-yard-widget {\n    align-self: center;\n}\n\n.container .board .ship-yard {\n    width: 70%;\n    align-self: center;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: flex-start;\n    gap: 10px;\n}\n\n.container .board .ship-yard .ship-yard-title {\n    text-transform: uppercase;\n    font-size: 1.2rem;\n    transform: rotate(270deg);\n}\n\n.container .board .ship-yard .ship {\n    display: flex;\n}\n\n.container .board .ship-yard .ship .ship-block {\n    /* background-color: var(--block-color); */\n    aspect-ratio: 1;\n    flex: 0 0 auto;\n    background-color: var(--accent-3);\n    aspect-ratio: 1;\n    /* border: 1px solid var(--secondary-1); */\n    border-radius: 5px;\n    border: 0.2rem solid var(--primary-1);\n}\n\n.ship-block-in-grid {\n    background-color: var(--accent-3) !important;\n    aspect-ratio: 1;\n    flex: 0 0 auto;\n    /* border: 2px solid black !important; */\n}\n\n.board[data-id='2'] .ship-block-in-grid {\n    background-color: var(--accent-2) !important;\n}\n\n.board[data-id='2'] .ship-block-in-grid:hover {\n    background-color: #0034599c !important;\n}\n\n.attacked-ship {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    /* background-color: var(--accent-3) !important; */\n    font-size: 2em;\n    background-color: rgba(165, 42, 42, 0.308) !important;\n}\n\n.board[data-id='2'] .attacked-ship {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 2em;\n    /* background-color: var(--accent-3) !important; */\n    background-color: rgba(165, 42, 42, 0.308) !important;\n    pointer-events: none !important;\n}\n\n.bad-attack {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    color: black;\n    background-color: black !important;\n    /* background-color: black !important; */\n}\n\n.bad-attack:hover {\n    pointer-events: none !important;\n}\n", "",{"version":3,"sources":["webpack://./src/css/container.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,oBAAoB;IACpB,sBAAsB;IACtB,mBAAmB;IACnB,mBAAmB;IACnB,yBAAyB;IACzB,yBAAyB;IACzB,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,eAAe;AACnB;AACA;IACI,cAAc;IACd,eAAe;IACf,aAAa;IACb,yBAAyB;IACzB,qCAAqC;IACrC,8BAA8B;AAClC;;AAEA;IACI,cAAc;IACd,8BAA8B;IAC9B,mCAAmC;AACvC;AACA;IACI,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,QAAQ;IACR,kBAAkB;AACtB;AACA;IACI,0CAA0C;IAC1C,yBAAyB;IACzB,kBAAkB;IAClB,UAAU;IACV,kBAAkB;IAClB,cAAc;IACd,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,kDAAkD;IAClD,+CAA+C;IAC/C,6BAA6B;IAC7B,UAAU;IACV,kCAAkC;IAClC,kBAAkB;AACtB;;AAEA;IACI,iCAAiC;IACjC,eAAe;IACf,0CAA0C;IAC1C,kBAAkB;IAClB,qCAAqC;AACzC;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,UAAU;IACV,kBAAkB;IAClB,aAAa;IACb,eAAe;IACf,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,yBAAyB;IACzB,iBAAiB;IACjB,yBAAyB;AAC7B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,0CAA0C;IAC1C,eAAe;IACf,cAAc;IACd,iCAAiC;IACjC,eAAe;IACf,0CAA0C;IAC1C,kBAAkB;IAClB,qCAAqC;AACzC;;AAEA;IACI,4CAA4C;IAC5C,eAAe;IACf,cAAc;IACd,wCAAwC;AAC5C;;AAEA;IACI,4CAA4C;AAChD;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kDAAkD;IAClD,cAAc;IACd,qDAAqD;AACzD;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,cAAc;IACd,kDAAkD;IAClD,qDAAqD;IACrD,+BAA+B;AACnC;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,kCAAkC;IAClC,wCAAwC;AAC5C;;AAEA;IACI,+BAA+B;AACnC","sourcesContent":[":root {\n    --primary-1: #00171f;\n    --primary-2: #ffffff;\n    --secondary-1: #003459;\n    --accent-1: #3f6c51;\n    --accent-2: #00a8e8;\n    /* --accent-3: #17bebb; */\n    /* --accent-3: #0288E8; */\n    --accent-3: rgb(211, 54, 54);\n}\n\n.container {\n    display: flex;\n    flex-wrap: wrap;\n}\n.container .game-title {\n    flex: 0 0 100%;\n    font-size: 2rem;\n    display: flex;\n    background-color: #041016;\n    border-bottom: 2rem transparent solid;\n    border-color: var(--primary-1);\n}\n\n.container .game-title span {\n    display: block;\n    border: 1rem solid transparent;\n    border-left: 2rem solid transparent;\n}\n.container .board {\n    width: 50%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 3vh;\n    position: relative;\n}\n.container .board .title {\n    /* background-color: var(--secondary-1); */\n    background-color: #cf0808;\n    text-align: center;\n    width: 70%;\n    border-radius: 5px;\n    font-size: 2em;\n    flex: 0 0 3vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 1rem solid transparent;\n}\n\n.board[data-id='2'] .title {\n    background-color: #cf080847;\n}\n\n.container .board .grid {\n    align-self: center;\n    display: grid;\n    grid-template-columns: repeat(10, calc(100% / 10));\n    grid-template-rows: repeat(10, calc(100% / 10));\n    /* background-color: white; */\n    width: 70%;\n    background-color: var(--primary-1);\n    border-radius: 5px;\n}\n\n.container .board .block {\n    background-color: var(--accent-2);\n    aspect-ratio: 1;\n    /* border: 1px solid var(--secondary-1); */\n    border-radius: 5px;\n    border: 0.2rem solid var(--primary-1);\n}\n\n.container .board .block:hover {\n    background-color: #0034599c;\n}\n\n.ship-yard-widget {\n    align-self: center;\n}\n\n.container .board .ship-yard {\n    width: 70%;\n    align-self: center;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: flex-start;\n    gap: 10px;\n}\n\n.container .board .ship-yard .ship-yard-title {\n    text-transform: uppercase;\n    font-size: 1.2rem;\n    transform: rotate(270deg);\n}\n\n.container .board .ship-yard .ship {\n    display: flex;\n}\n\n.container .board .ship-yard .ship .ship-block {\n    /* background-color: var(--block-color); */\n    aspect-ratio: 1;\n    flex: 0 0 auto;\n    background-color: var(--accent-3);\n    aspect-ratio: 1;\n    /* border: 1px solid var(--secondary-1); */\n    border-radius: 5px;\n    border: 0.2rem solid var(--primary-1);\n}\n\n.ship-block-in-grid {\n    background-color: var(--accent-3) !important;\n    aspect-ratio: 1;\n    flex: 0 0 auto;\n    /* border: 2px solid black !important; */\n}\n\n.board[data-id='2'] .ship-block-in-grid {\n    background-color: var(--accent-2) !important;\n}\n\n.board[data-id='2'] .ship-block-in-grid:hover {\n    background-color: #0034599c !important;\n}\n\n.attacked-ship {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    /* background-color: var(--accent-3) !important; */\n    font-size: 2em;\n    background-color: rgba(165, 42, 42, 0.308) !important;\n}\n\n.board[data-id='2'] .attacked-ship {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 2em;\n    /* background-color: var(--accent-3) !important; */\n    background-color: rgba(165, 42, 42, 0.308) !important;\n    pointer-events: none !important;\n}\n\n.bad-attack {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    color: black;\n    background-color: black !important;\n    /* background-color: black !important; */\n}\n\n.bad-attack:hover {\n    pointer-events: none !important;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRoSG9sZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NBcHBseURlc2NyaXB0b3JHZXQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQXBwbHlEZXNjcmlwdG9yU2V0LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc1ByaXZhdGVGaWVsZEdldC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NQcml2YXRlRmllbGRTZXQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbW9kdWxlcy9Db250cm9sbGVycy9BcHBsaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbW9kdWxlcy9Db250cm9sbGVycy9CbG9ja0NsaWNrLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9tb2R1bGVzL0NvbnRyb2xsZXJzL0dhbWUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL21vZHVsZXMvTW9kZWxzL0FJLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9tb2R1bGVzL01vZGVscy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL21vZHVsZXMvTW9kZWxzL0h1bnRQYXJpdHlBSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbW9kdWxlcy9Nb2RlbHMvSHVudFByb2JBSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbW9kdWxlcy9Nb2RlbHMvUGxheWVyLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9tb2R1bGVzL01vZGVscy9TaGlwLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9tb2R1bGVzL1ZpZXdzL1VJLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9tb2R1bGVzL1ZpZXdzL1VJZm9yQUlTaGlwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbW9kdWxlcy9WaWV3cy9jaGVja051bWJlck9mU2hpcHNPZkh1bWFuLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9tb2R1bGVzL1ZpZXdzL2RyYWdGdW5jdGlvbkZvckh1bWFuLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9tb2R1bGVzL1ZpZXdzL3JvdGF0ZVNoaXAuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvY3NzL2NvbnRhaW5lci5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2Nzcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2Nzcy9jb250YWluZXIuY3NzPzMzOGIiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2Nzcy9pbmRleC5jc3M/ZjdlYSIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiQXBwbGljYXRpb24iLCJudW1iZXJPZlNoaXBzIiwibGVuZ3Roc09mU2hpcHMiLCJzaGlwc09mR3JpZDEiLCJzaGlwc09mR3JpZDIiLCJwbGF5ZXIxIiwidW5kZWZpbmVkIiwicGxheWVyMiIsImN1cnJlbnRQbGF5ZXIiLCJ1cGRhdGVQbGF5ZXIiLCJzZXRCbG9ja0NsaWNrTGlzdGVuZXJzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImJsb2NrIiwiYWRkRXZlbnRMaXN0ZW5lciIsImJsb2NrQ2xpY2tIYW5kbGVyIiwiZSIsInRhcmdldCIsImdyaWROdW1iZXIiLCJwYXJzZUludCIsInBhcmVudEVsZW1lbnQiLCJnZXRBdHRyaWJ1dGUiLCJpc1ZhbGlkUGxheWVyQ2xpY2siLCJnZXRCbG9ja0Nvb3JkcyIsIngiLCJ5IiwibWF0Y2hlcyIsInNoaXBCbG9ja0NsaWNrSGFuZGxlciIsImdyaWRCbG9ja0NsaWNrSGFuZGxlciIsImNvbnNvbGUiLCJsb2ciLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZ3JpZEJsb2NrIiwiY2xhc3NMaXN0IiwiYWRkIiwidGV4dENvbnRlbnQiLCJzaGlwQmxvY2siLCJib2FyZEh1bWFuIiwiR2FtZWJvYXJkIiwiYm9hcmRBSSIsInNsZWVwIiwiZGVsYXkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJodW1hbiIsIlBsYXllciIsImFpIiwiSHVudFByb2JBSSIsInNldHVwIiwiZGlzcGxheUdhbWVJbnRlcmZhY2UiLCJsZXRIdW1hblJvdGF0ZVNoaXBzIiwibGV0SHVtYW5EcmFnU2hpcHMiLCJwbGFjZVNoaXBzIiwidXBkYXRlVUlXaXRoQUlTaGlwcyIsImFyZUFsbFNoaXBzUGxhY2VkIiwidGhlbiIsInN0YXJ0R2FtZSIsInVwZGF0ZUdhbWUiLCJpc0dhbWVPdmVyIiwiaGF2ZUFsbFN1bmsiLCJ3aG9Xb24iLCJoYXNXb24iLCJ3aW5uZXIiLCJzdW0iLCJib2FyZE51bSIsInRpdGxlIiwicXVlcnlTZWxlY3RvciIsImNsZWFudXAiLCJwbGF5IiwiQUkiLCJuYW1lIiwib3duQm9hcmQiLCJvcHBCb2FyZCIsImF0dGFja2VkQmxvY2tzIiwibGVuIiwiaW5kZXgiLCJpbmNsdWRlcyIsInB1c2giLCJzaXplIiwiZ3JpZCIsImF0dGFja2VkIiwiY2xpY2siLCJsZW5ndGgiLCJvcmllbnRhdGlvbiIsInNoaXAiLCJTaGlwIiwicGxhY2VTaGlwIiwibWluIiwibWF4IiwiTWF0aCIsImNlaWwiLCJmbG9vciIsInJhbmRvbSIsInNoaXBDb3VudCIsImlzVmFsaWRDb29yZCIsIkVycm9yIiwiaGl0IiwiaSIsImoiLCJpc1N1bmsiLCJtYXQiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJIdW50UGFyaXR5QUkiLCJyYW5kb21JbmRleCIsInNwbGljZSIsIndhc1N1Y2Nlc3NmdWxsQXR0YWNrIiwiU21hcnRlc3RBSSIsIm1heFgiLCJtYXhZIiwibWF0cml4IiwidGFibGUiLCJpbmRleE9mIiwicHJvYkRhdGEiLCJmbGFnIiwiayIsInJlY2VpdmVBdHRhY2siLCJoaXRJbmRpY2VzIiwiZGlzcGxheUdyaWRzIiwiZnJvbSIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsImRpc3BsYXlTaGlwcyIsImxlbmd0aHMiLCJhZGRTaGlwdG9VSSIsIm1vZGlmeVNoaXBXaWR0aCIsInN0eWxlIiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsInNoaXBZYXJkIiwieWFyZE51bWJlciIsIndpbmRvdyIsIm9ucmVzaXplIiwiZGlzcGxheSIsInJlamVjdCIsIndhaXRGb3JBbGxTaGlwc1RvQmVQbGFjZWQiLCJkcmFnZ2VkU2hpcCIsImRyYWdnZWRTaGlwTGVuZ3RoIiwic2hpcEJsb2NrTnVtYmVyRHJhZ2dlZCIsImRyYWdnZWRTaGlwRGlyZWN0aW9uIiwiaGFuZGxlRHJhZ1N0YXJ0IiwiaGFuZGxlRHJhZ0VuZCIsInN0b3BQcm9wYWdhdGlvbiIsIm9wYWNpdHkiLCJjaGlsZEVsZW1lbnRDb3VudCIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJnZXRDb21wdXRlZFN0eWxlIiwiZmxleERpcmVjdGlvbiIsImJsb2NrV2lkdGgiLCJvZmZzZXRYIiwiYmxvY2tIZWlnaHQiLCJoZWlnaHQiLCJvZmZzZXRZIiwicmVzdG9yZU9wYWNpdHkiLCJwcmV2ZW50RGVmYXVsdCIsImVsZW0iLCJlbGVtZW50c0Zyb21Qb2ludCIsImNsaWVudFgiLCJjbGllbnRZIiwiZ2V0VUlDb29yZHMiLCJyb3ciLCJjb2x1bW4iLCJzdGFydGluZ0Jsb2NrIiwiZ2V0U3RhcnRpbmdCbG9jayIsInBhaW50U2hpcE9uR3JpZCIsInZpc2liaWxpdHkiLCJlcnIiLCJtZXNzYWdlIiwiZGlyZWN0aW9uIiwiY3VycmVudEJsb2NrIiwiZHJhZyIsInJvdGF0ZVNoaXAiLCJjdXJyZW50RGlyZWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7O0FBRUEsd0NBQXdDLFNBQVM7QUFDakQ7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7OztBQ1JlO0FBQ2Y7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNGZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7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QU0sS0FBSyxzQkFBc0IscUJBQXFCLHVCQUF1QixPQUFPLE9BQU8sTUFBTSxLQUFLLHNCQUFzQixxQkFBcUIsT0FBTyxLQUFLLFFBQVEsT0FBTyxNQUFNLEtBQUssWUFBWSxPQUFPLE9BQU8sTUFBTSxLQUFLLHNCQUFzQix1QkFBdUIsdUJBQXVCLE9BQU8sTUFBTSxNQUFNLE1BQU0sWUFBWSxPQUFPLE9BQU8sTUFBTSxPQUFPLHNCQUFzQixxQkFBcUIsT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLE9BQU8sT0FBTyxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssUUFBUSxPQUFPLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxRQUFRLFFBQVEsTUFBTSxTQUFTLHNCQUFzQixxQkFBcUIsdUJBQXVCLHFCQUFxQixPQUFPLE9BQU8sTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLE9BQU8sTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sTUFBTSxRQUFRLFlBQVksT0FBTyxNQUFNLE1BQU0sUUFBUSxZQUFZLFdBQVcsTUFBTSxNQUFNLE1BQU0sUUFBUSxZQUFZLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLFNBQVMsTUFBTSxLQUFLLHNCQUFzQixxQkFBcUIscUJBQXFCLHFCQUFxQixxQkFBcUIsdUJBQXVCLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsT0FBTyxPQUFPLE1BQU0sTUFBTSxzQkFBc0IscUJBQXFCLE9BQU8sTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE9BQU8sTUFBTSxLQUFLLHNCQUFzQix1QkFBdUIsT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sT0FBTyxNQUFNLEtBQUssc0JBQXNCLHFCQUFxQixPQUFPLEtBQUssUUFBUSxPQUFPLE1BQU0sS0FBSyxVQUFVLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssUUFBUSxPQUFPLE1BQU0s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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FB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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsNEJBQTRCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG9CQUFvQiw2QkFBNkI7QUFDakQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNVFBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7V0FDQSxDQUFDLEk7Ozs7O1dDUEQsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esa0M7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufSIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0FwcGx5RGVzY3JpcHRvckdldChyZWNlaXZlciwgZGVzY3JpcHRvcikge1xuICBpZiAoZGVzY3JpcHRvci5nZXQpIHtcbiAgICByZXR1cm4gZGVzY3JpcHRvci5nZXQuY2FsbChyZWNlaXZlcik7XG4gIH1cblxuICByZXR1cm4gZGVzY3JpcHRvci52YWx1ZTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NBcHBseURlc2NyaXB0b3JTZXQocmVjZWl2ZXIsIGRlc2NyaXB0b3IsIHZhbHVlKSB7XG4gIGlmIChkZXNjcmlwdG9yLnNldCkge1xuICAgIGRlc2NyaXB0b3Iuc2V0LmNhbGwocmVjZWl2ZXIsIHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWRlc2NyaXB0b3Iud3JpdGFibGUpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gc2V0IHJlYWQgb25seSBwcml2YXRlIGZpZWxkXCIpO1xuICAgIH1cblxuICAgIGRlc2NyaXB0b3IudmFsdWUgPSB2YWx1ZTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvcihyZWNlaXZlciwgcHJpdmF0ZU1hcCwgYWN0aW9uKSB7XG4gIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBcIiArIGFjdGlvbiArIFwiIHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xuICB9XG5cbiAgcmV0dXJuIHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTtcbn0iLCJpbXBvcnQgY2xhc3NBcHBseURlc2NyaXB0b3JHZXQgZnJvbSBcIi4vY2xhc3NBcHBseURlc2NyaXB0b3JHZXQuanNcIjtcbmltcG9ydCBjbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IgZnJvbSBcIi4vY2xhc3NFeHRyYWN0RmllbGREZXNjcmlwdG9yLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBjbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IocmVjZWl2ZXIsIHByaXZhdGVNYXAsIFwiZ2V0XCIpO1xuICByZXR1cm4gY2xhc3NBcHBseURlc2NyaXB0b3JHZXQocmVjZWl2ZXIsIGRlc2NyaXB0b3IpO1xufSIsImltcG9ydCBjbGFzc0FwcGx5RGVzY3JpcHRvclNldCBmcm9tIFwiLi9jbGFzc0FwcGx5RGVzY3JpcHRvclNldC5qc1wiO1xuaW1wb3J0IGNsYXNzRXh0cmFjdEZpZWxkRGVzY3JpcHRvciBmcm9tIFwiLi9jbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBjbGFzc0V4dHJhY3RGaWVsZERlc2NyaXB0b3IocmVjZWl2ZXIsIHByaXZhdGVNYXAsIFwic2V0XCIpO1xuICBjbGFzc0FwcGx5RGVzY3JpcHRvclNldChyZWNlaXZlciwgZGVzY3JpcHRvciwgdmFsdWUpO1xuICByZXR1cm4gdmFsdWU7XG59IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn0iLCJpbXBvcnQgc2V0UHJvdG90eXBlT2YgZnJvbSBcIi4vc2V0UHJvdG90eXBlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTtcblxuICBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcblxuICB2YXIgX3MsIF9lO1xuXG4gIHRyeSB7XG4gICAgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIjtcbmltcG9ydCBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSBcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufSIsImltcG9ydCBhcnJheVdpdGhIb2xlcyBmcm9tIFwiLi9hcnJheVdpdGhIb2xlcy5qc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheUxpbWl0IGZyb20gXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzXCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCBub25JdGVyYWJsZVJlc3QgZnJvbSBcIi4vbm9uSXRlcmFibGVSZXN0LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCJjb25zdCBBcHBsaWNhdGlvbiA9IHtcbiAgICBudW1iZXJPZlNoaXBzOiA1LFxuICAgIGxlbmd0aHNPZlNoaXBzOiBbMiwgMywgMywgNCwgNV0sXG4gICAgc2hpcHNPZkdyaWQxOiAwLFxuICAgIHNoaXBzT2ZHcmlkMjogMCxcbiAgICBwbGF5ZXIxOiB1bmRlZmluZWQsXG4gICAgcGxheWVyMjogdW5kZWZpbmVkLFxuICAgIGN1cnJlbnRQbGF5ZXI6IHVuZGVmaW5lZCxcbiAgICB1cGRhdGVQbGF5ZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyID1cbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYXllciA9PT0gdGhpcy5wbGF5ZXIxID8gdGhpcy5wbGF5ZXIyIDogdGhpcy5wbGF5ZXIxO1xuICAgIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHBsaWNhdGlvbjtcbiIsImltcG9ydCBBcHBsaWNhdGlvbiBmcm9tICcuL0FwcGxpY2F0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0QmxvY2tDbGlja0xpc3RlbmVycygpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmxvY2snKS5mb3JFYWNoKChibG9jaykgPT4ge1xuICAgICAgICBibG9jay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGJsb2NrQ2xpY2tIYW5kbGVyKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJsb2NrQ2xpY2tIYW5kbGVyKGUpIHtcbiAgICBjb25zdCBibG9jayA9IGUudGFyZ2V0O1xuXG4gICAgY29uc3QgZ3JpZE51bWJlciA9IHBhcnNlSW50KGJsb2NrLnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xuICAgIGlmICghaXNWYWxpZFBsYXllckNsaWNrKGdyaWROdW1iZXIpKSByZXR1cm47IC8vIGlzIHRoZSByaWdodCBwbGF5ZXIgYXR0YWNraW5nIHRoZSByaWdodCBncmlkP1xuICAgIGNvbnN0IFt4LCB5XSA9IGdldEJsb2NrQ29vcmRzKGJsb2NrKTtcbiAgICBBcHBsaWNhdGlvbi5jdXJyZW50UGxheWVyLmF0dGFjayh4IC0gMSwgeSAtIDEpO1xuICAgIGlmIChibG9jay5tYXRjaGVzKCcuc2hpcC1ibG9jay1pbi1ncmlkJykpIHtcbiAgICAgICAgc2hpcEJsb2NrQ2xpY2tIYW5kbGVyKGJsb2NrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBncmlkQmxvY2tDbGlja0hhbmRsZXIoYmxvY2spO1xuICAgICAgICBjb25zb2xlLmxvZygnbGVmdCBncmlkIGJsb2NrIGhhbmRsZXInKTtcbiAgICAgICAgQXBwbGljYXRpb24udXBkYXRlUGxheWVyKCk7IC8vIHVwZGF0ZSBwbGF5ZXIgb25seSB3aGVuIGdyaWQgYmxvY2sgaXMgY2xpY2tlZFxuICAgIH1cblxuICAgIGJsb2NrLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYmxvY2tDbGlja0hhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkUGxheWVyQ2xpY2soZ3JpZE51bWJlcikge1xuICAgIGlmIChncmlkTnVtYmVyID09PSAxICYmIEFwcGxpY2F0aW9uLmN1cnJlbnRQbGF5ZXIgPT09IEFwcGxpY2F0aW9uLnBsYXllcjIpXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIGVsc2UgaWYgKFxuICAgICAgICBncmlkTnVtYmVyID09PSAyICYmXG4gICAgICAgIEFwcGxpY2F0aW9uLmN1cnJlbnRQbGF5ZXIgPT09IEFwcGxpY2F0aW9uLnBsYXllcjFcbiAgICApXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ3JpZEJsb2NrQ2xpY2tIYW5kbGVyKGdyaWRCbG9jaykge1xuICAgIGdyaWRCbG9jay5jbGFzc0xpc3QuYWRkKCdiYWQtYXR0YWNrJyk7XG4gICAgZ3JpZEJsb2NrLnRleHRDb250ZW50ID0gYOKYoO+4j2A7XG59XG5cbmZ1bmN0aW9uIHNoaXBCbG9ja0NsaWNrSGFuZGxlcihzaGlwQmxvY2spIHtcbiAgICBzaGlwQmxvY2suY2xhc3NMaXN0LmFkZCgnYXR0YWNrZWQtc2hpcCcpO1xuICAgIHNoaXBCbG9jay50ZXh0Q29udGVudCA9IGDwn5KlYDtcbiAgICAvL3NoaXBCbG9jay50ZXh0Q29udGVudCA9IGDwn5SlYDtcbn1cblxuZnVuY3Rpb24gZ2V0QmxvY2tDb29yZHMoYmxvY2spIHtcbiAgICBjb25zdCB4ID0gYmxvY2suZ2V0QXR0cmlidXRlKCdkYXRhLXJvdycpO1xuICAgIGNvbnN0IHkgPSBibG9jay5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sdW1uJyk7XG4gICAgcmV0dXJuIFt4LCB5XTtcbn1cbiIsImltcG9ydCAnLi9BcHBsaWNhdGlvbic7XG5pbXBvcnQgbGV0SHVtYW5EcmFnU2hpcHMgZnJvbSAnLi4vVmlld3MvZHJhZ0Z1bmN0aW9uRm9ySHVtYW4nO1xuaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuLi9Nb2RlbHMvR2FtZWJvYXJkJztcbmltcG9ydCBkaXNwbGF5R2FtZUludGVyZmFjZSBmcm9tICcuLi9WaWV3cy9VSSc7XG5pbXBvcnQgYXJlQWxsU2hpcHNQbGFjZWQgZnJvbSAnLi4vVmlld3MvY2hlY2tOdW1iZXJPZlNoaXBzT2ZIdW1hbic7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4uL01vZGVscy9QbGF5ZXInO1xuaW1wb3J0IHVwZGF0ZVVJV2l0aEFJU2hpcHMgZnJvbSAnLi4vVmlld3MvVUlmb3JBSVNoaXBzJztcbmltcG9ydCBBSSBmcm9tICcuLi9Nb2RlbHMvQUknO1xuaW1wb3J0IEh1bnRQYXJpdHlBSSBmcm9tICcuLi9Nb2RlbHMvSHVudFBhcml0eUFJJztcbmltcG9ydCBIdW50UHJvYkFJIGZyb20gJy4uL01vZGVscy9IdW50UHJvYkFJJztcbmltcG9ydCBzZXRCbG9ja0NsaWNrTGlzdGVuZXJzIGZyb20gJy4vQmxvY2tDbGljayc7XG5pbXBvcnQgQXBwbGljYXRpb24gZnJvbSAnLi9BcHBsaWNhdGlvbic7XG5pbXBvcnQgbGV0SHVtYW5Sb3RhdGVTaGlwcyBmcm9tICcuLi9WaWV3cy9yb3RhdGVTaGlwJztcbmltcG9ydCB7IGJsb2NrQ2xpY2tIYW5kbGVyIH0gZnJvbSAnLi9CbG9ja0NsaWNrJztcblxuY29uc3QgYm9hcmRIdW1hbiA9IG5ldyBHYW1lYm9hcmQoMTApO1xuY29uc3QgYm9hcmRBSSA9IG5ldyBHYW1lYm9hcmQoMTApO1xuY29uc3Qgc2xlZXAgPSAoZGVsYXkpID0+IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgZGVsYXkpO1xuICB9KTsgIFxuY29uc3QgaHVtYW4gPSBuZXcgUGxheWVyKCdodW1hbicsIGJvYXJkSHVtYW4sIGJvYXJkQUkpO1xuY29uc3QgYWkgPSBuZXcgSHVudFByb2JBSSgnQUknLCBib2FyZEFJLCBib2FyZEh1bWFuKTtcblxuYXN5bmMgZnVuY3Rpb24gc2V0dXAoKSB7XG4gICAgY29uc29sZS5sb2coJ1NldHVwJyk7XG4gICAgZGlzcGxheUdhbWVJbnRlcmZhY2UoKTtcbiAgICBsZXRIdW1hblJvdGF0ZVNoaXBzKCk7XG4gICAgbGV0SHVtYW5EcmFnU2hpcHMoYm9hcmRIdW1hbik7XG4gICAgYWkucGxhY2VTaGlwcygpO1xuICAgIHVwZGF0ZVVJV2l0aEFJU2hpcHMoYm9hcmRBSSk7XG4gICAgYXdhaXQgYXJlQWxsU2hpcHNQbGFjZWQoKTtcbiAgICBBcHBsaWNhdGlvbi5wbGF5ZXIxID0gaHVtYW47XG4gICAgQXBwbGljYXRpb24ucGxheWVyMiA9IGFpO1xuICAgIEFwcGxpY2F0aW9uLmN1cnJlbnRQbGF5ZXIgPSBodW1hbjsgLy8gaHVtYW4gc3RhcnRzXG59XG5zZXR1cCgpLnRoZW4oKCkgPT4ge1xuICAgIHN0YXJ0R2FtZSgpO1xufSk7XG5cbmZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcbiAgICBjb25zb2xlLmxvZygnU1RBUlQgVEhFIEdBTUUhISEnKTtcbiAgICBzZXRCbG9ja0NsaWNrTGlzdGVuZXJzKCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB1cGRhdGVHYW1lKTtcbn1cblxuZnVuY3Rpb24gaXNHYW1lT3ZlcigpIHtcbiAgICByZXR1cm4gYm9hcmRIdW1hbi5oYXZlQWxsU3VuaygpIHx8IGJvYXJkQUkuaGF2ZUFsbFN1bmsoKTtcbn1cblxuZnVuY3Rpb24gd2hvV29uKCkge1xuICAgIGlmIChodW1hbi5oYXNXb24oKSkgcmV0dXJuIGh1bWFuO1xuICAgIGVsc2UgaWYgKGFpLmhhc1dvbigpKSByZXR1cm4gYWk7XG4gICAgZWxzZSByZXR1cm4gbnVsbDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gdXBkYXRlR2FtZSgpIHtcbiAgICBpZiAoaXNHYW1lT3ZlcigpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdHYW1lIE92ZXInKTtcbiAgICAgICAgY29uc3Qgd2lubmVyID0gd2hvV29uKCk7XG4gICAgICAgIGxldCBib2FyZE51bTtcbiAgICAgICAgbGV0IHN1bSA9IDM7IFxuICAgICAgICBpZiAod2lubmVyID09PSBodW1hbikgYm9hcmROdW0gPSAxO1xuICAgICAgICBlbHNlIGJvYXJkTnVtID0gMjtcbiAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGAuYm9hcmRbZGF0YS1pZCA9ICcke2JvYXJkTnVtfSddIC50aXRsZWBcbiAgICAgICAgKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSAnV0lOTkVSIEZMRUVUJztcbiAgICAgICAgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYC5ib2FyZFtkYXRhLWlkID0gJyR7c3VtIC1ib2FyZE51bX0nXSAudGl0bGVgXG4gICAgICAgICk7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ0xPU0VSIEZMRUVUJztcbiAgICAgICAgY2xlYW51cCgpO1xuICAgIH1cbiAgICBhd2FpdChzbGVlcCwgNTAwKTtcbiAgICBpZiAoQXBwbGljYXRpb24uY3VycmVudFBsYXllciA9PT0gYWkpIHtcbiAgICAgICAgYWkucGxheSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JpZCAuYmxvY2snKS5mb3JFYWNoKChibG9jaykgPT4ge1xuICAgICAgICBibG9jay5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGJsb2NrQ2xpY2tIYW5kbGVyKTtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHVwZGF0ZUdhbWUpO1xufVxuIiwiaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllcic7XG5pbXBvcnQgU2hpcCBmcm9tICcuL1NoaXAnO1xuaW1wb3J0IEFwcGxpY2F0aW9uIGZyb20gJy4uL0NvbnRyb2xsZXJzL0FwcGxpY2F0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQUkgZXh0ZW5kcyBQbGF5ZXIge1xuICAgICNuZXh0WTtcbiAgICAjbmV4dFg7XG4gICAgI29yaWVudGF0aW9ucztcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBvd25Cb2FyZCwgb3BwQm9hcmQpIHtcbiAgICAgICAgc3VwZXIobmFtZSwgb3duQm9hcmQsIG9wcEJvYXJkKTtcbiAgICAgICAgdGhpcy5hdHRhY2tlZEJsb2NrcyA9IFtdO1xuICAgICAgICB0aGlzLiNuZXh0WSA9IG51bGw7XG4gICAgICAgIHRoaXMuI25leHRYID0gbnVsbDtcbiAgICAgICAgdGhpcy4jb3JpZW50YXRpb25zID0geyAwOiAnaG9yaXpvbnRhbCcsIDE6ICd2ZXJ0aWNhbCcgfTtcbiAgICB9XG5cbiAgICBwbGFjZVNoaXBzKCkge1xuICAgICAgICBBcHBsaWNhdGlvbi5sZW5ndGhzT2ZTaGlwcy5mb3JFYWNoKChsZW4pID0+IHRoaXMuI2FkZFNoaXBUb0JvYXJkKGxlbikpO1xuICAgIH1cblxuICAgICNhZGRTaGlwVG9Cb2FyZChsZW5ndGgpIHtcbiAgICAgICAgbGV0IG9yaWVudGF0aW9uID0gdGhpcy4jb3JpZW50YXRpb25zW3RoaXMuI2dldFJhbmRvbUludCgwLCAyKV07XG4gICAgICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcChsZW5ndGgsIG9yaWVudGF0aW9uKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IFt4LCB5XSA9IHRoaXMuI2dldFJhbmRvbUNvb3JkcygpO1xuICAgICAgICAgICAgdGhpcy5vd25Cb2FyZC5wbGFjZVNoaXAoc2hpcCwgeCwgeSk7XG4gICAgICAgICAgICArK0FwcGxpY2F0aW9uLnNoaXBzT2ZHcmlkMjtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdGhpcy4jYWRkU2hpcFRvQm9hcmQobGVuZ3RoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBsYXkoKSB7XG4gICAgICAgIGxldCB4LCB5LCBpbmRleDtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgW3gsIHldID0gdGhpcy4jZ2V0UmFuZG9tQ29vcmRzKCk7XG4gICAgICAgICAgICB5ID0gdGhpcy4jbmV4dFkgPz8geTtcbiAgICAgICAgICAgIHggPSB0aGlzLiNuZXh0WCA/PyB4O1xuICAgICAgICAgICAgaW5kZXggPSB4ICogMTAgKyAoeSArIDEpOyAvLyAwIGZyb20gKDAsMCkgYWJzdHJhY3QgLT4gMSBmcm9tICgxLDEpIHVpXG4gICAgICAgIH0gd2hpbGUgKHRoaXMuYXR0YWNrZWRCbG9ja3MuaW5jbHVkZXMoaW5kZXgpKTtcbiAgICAgICAgdGhpcy5hdHRhY2tlZEJsb2Nrcy5wdXNoKGluZGV4KTtcbiAgICAgICAgY29uc3QgYmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYC5ncmlkW2RhdGEtaWQgPSAnMSddIC5ibG9ja1tkYXRhLXJvdyA9ICcke1xuICAgICAgICAgICAgICAgIHggKyAxXG4gICAgICAgICAgICB9J11bZGF0YS1jb2x1bW4gPSAnJHt5ICsgMX0nXWBcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoYmxvY2subWF0Y2hlcygnLnNoaXAtYmxvY2staW4tZ3JpZCcpKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgeSArIDEgPCB0aGlzLm9wcEJvYXJkLnNpemUgJiZcbiAgICAgICAgICAgICAgICAhdGhpcy5vcHBCb2FyZC5ncmlkW3hdW3kgKyAxXS5hdHRhY2tlZFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4jbmV4dFggPSB4O1xuICAgICAgICAgICAgICAgIHRoaXMuI25leHRZID0geSArIDE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHkgLSAxID49IDAgJiYgIXRoaXMub3BwQm9hcmQuZ3JpZFt4XVt5IC0gMV0uYXR0YWNrZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiNuZXh0WCA9IHg7XG4gICAgICAgICAgICAgICAgdGhpcy4jbmV4dFkgPSB5IC0gMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy4jbmV4dFggPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuI25leHRZID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuI25leHRYID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuI25leHRZID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBibG9jay5jbGljaygpO1xuICAgIH1cblxuICAgICNnZXRSYW5kb21Db29yZHMoKSB7XG4gICAgICAgIGNvbnN0IHggPSB0aGlzLiNnZXRSYW5kb21JbnQoMCwgMTApO1xuICAgICAgICBjb25zdCB5ID0gdGhpcy4jZ2V0UmFuZG9tSW50KDAsIDEwKTtcbiAgICAgICAgcmV0dXJuIFt4LCB5XTtcbiAgICB9XG5cbiAgICAjZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XG4gICAgICAgIG1pbiA9IE1hdGguY2VpbChtaW4pO1xuICAgICAgICBtYXggPSBNYXRoLmZsb29yKG1heCk7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbik7IC8vIFRoZSBtYXhpbXVtIGlzIGV4Y2x1c2l2ZSBhbmQgdGhlIG1pbmltdW0gaXMgaW5jbHVzaXZlXG4gICAgfVxuXG4gICAgI2h1bnQoKSB7fVxuXG4gICAgI2lzVmFsaWRJbmRleCgpIHt9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lYm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKHNpemUpIHtcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICAgICAgdGhpcy5ncmlkID0gdGhpcy4jY3JlYXRlTWF0cml4KHNpemUpO1xuICAgICAgICB0aGlzLnNoaXBDb3VudCA9IDA7XG4gICAgfVxuXG4gICAgI2NyZWF0ZU1hdHJpeChzaXplKSB7XG4gICAgICAgIGNvbnN0IG1hdCA9IG5ldyBBcnJheShzaXplKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgICAgIC8vIHNoaXAgLSBmb3Igc2hpcCBvYmplY3QgaWYgaXQgZXhpc3RzLCBhdHRhY2tlZCAtIGlzQXR0YWNrZWQ/LFxuICAgICAgICAgICAgLy8gaW5kZXggLSByZWxhdGl2ZSBwbGFjZW1lbnQgb2Ygc2hpcCB0aWxlIHdydCB3aG9sZSBzaGlwLCBpZiBpdCBleGlzdHNcbiAgICAgICAgICAgIG1hdFtpXSA9IG5ldyBBcnJheShzaXplKVxuICAgICAgICAgICAgICAgIC5maWxsKClcbiAgICAgICAgICAgICAgICAubWFwKCgpID0+ICh7IHNoaXA6IG51bGwsIGF0dGFja2VkOiBmYWxzZSwgaW5kZXg6IC0xIH0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U2hpcH0gc2hpcCB0byBiZSBwbGFjZWRcbiAgICAgKiBAcGFyYW0ge2ludH0geCBzdGFydGluZyB4IGNvb3JkaW5hdGUgb2Ygc2hpcCBwbGFjZW1lbnRcbiAgICAgKiBAcGFyYW0ge2ludH0geSBzdGFydGluZyB5IGNvb3JkaW5hdGUgb2Ygc2hpcCBwbGFjZW1lbnRcbiAgICAgKi9cbiAgICBwbGFjZVNoaXAoc2hpcCwgeCwgeSkge1xuICAgICAgICBpZiAodGhpcy5pc1ZhbGlkQ29vcmQoc2hpcCwgeCwgeSkpIHtcbiAgICAgICAgICAgIGlmIChzaGlwLm9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpXG4gICAgICAgICAgICAgICAgdGhpcy4jcGxhY2VIb3Jpem9udGFsbHkoc2hpcCwgeCwgeSk7XG4gICAgICAgICAgICBlbHNlIGlmIChzaGlwLm9yaWVudGF0aW9uID09PSAndmVydGljYWwnKVxuICAgICAgICAgICAgICAgIHRoaXMuI3BsYWNlVmVydGljYWxseShzaGlwLCB4LCB5KTtcbiAgICAgICAgICAgIGVsc2UgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIG9yaWVudGF0aW9uJyk7XG4gICAgICAgICAgICB0aGlzLnNoaXBDb3VudCsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIENvb3JkaW5hdGVzIHByb3ZpZGVkJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAjcGxhY2VIb3Jpem9udGFsbHkoc2hpcCwgeCwgeSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZ3JpZFt4XVt5XVsnc2hpcCddID0gc2hpcDtcbiAgICAgICAgICAgIHRoaXMuZ3JpZFt4XVt5XVsnaW5kZXgnXSA9IGk7XG4gICAgICAgICAgICB5Kys7IC8vbW92ZSB0byBuZXh0IGNvbHVtbiBmb3IgbmV4dCB0aWxlIHBsYWNlbWVudFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgI3BsYWNlVmVydGljYWxseShzaGlwLCB4LCB5KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5ncmlkW3hdW3ldWydzaGlwJ10gPSBzaGlwO1xuICAgICAgICAgICAgdGhpcy5ncmlkW3hdW3ldWydpbmRleCddID0gaTtcbiAgICAgICAgICAgIHgrKzsgLy9tb3ZlIHRvIG5leHQgcm93IGZvciBuZXh0IHRpbGUgcGxhY2VtZW50XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc1ZhbGlkQ29vcmQoc2hpcCwgeCwgeSkge1xuICAgICAgICBpZiAoeCA8IDAgfHwgeSA8IDAgfHwgeSA+IHRoaXMuc2l6ZSB8fCB4ID4gdGhpcy5zaXplKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChzaGlwLmxlbmd0aCA+IHRoaXMuc2l6ZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAoc2hpcC5vcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnICYmXG4gICAgICAgICAgICAgICAgdGhpcy4jYXJlVmFsaWRDb29yZEZvckhvcml6b250YWxTaGlwKHNoaXAsIHgsIHkpKSB8fFxuICAgICAgICAgICAgKHNoaXAub3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcgJiZcbiAgICAgICAgICAgICAgICB0aGlzLiNhcmVWYWxpZENvb3JkRm9yVmVydGljYWxTaGlwKHNoaXAsIHgsIHkpKVxuICAgICAgICApXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgI2FyZVZhbGlkQ29vcmRGb3JIb3Jpem9udGFsU2hpcChzaGlwLCB4LCB5KSB7XG4gICAgICAgIGlmICh0aGlzLnNpemUgLSB5IDwgc2hpcC5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ncmlkW3hdW3kgKyBpXVsnc2hpcCddKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgI2FyZVZhbGlkQ29vcmRGb3JWZXJ0aWNhbFNoaXAoc2hpcCwgeCwgeSkge1xuICAgICAgICBpZiAodGhpcy5zaXplIC0geCA8IHNoaXAubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ3JpZFt4ICsgaV1beV1bJ3NoaXAnXSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJlY2VpdmVBdHRhY2soeCwgeSkge1xuICAgICAgICBpZiAoIXRoaXMuZ3JpZFt4XVt5XS5hdHRhY2tlZCkgdGhpcy5ncmlkW3hdW3ldLmF0dGFja2VkID0gdHJ1ZTtcbiAgICAgICAgZWxzZSB0aHJvdyBuZXcgRXJyb3IoJ0FscmVhZHkgYXR0YWNrZWQgcG9pbnQnKTtcbiAgICAgICAgY29uc3Qgc2hpcCA9IHRoaXMuZ3JpZFt4XVt5XS5zaGlwO1xuICAgICAgICBpZiAoc2hpcCkge1xuICAgICAgICAgICAgc2hpcC5oaXQodGhpcy5ncmlkW3hdW3ldLmluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHdhc1N1Y2Nlc3NmdWxsQXR0YWNrKHgsIHkpIHtcbiAgICAgICAgaWYgKHRoaXMuZ3JpZFt4XVt5XVsnYXR0YWNrZWQnXSAmJiB0aGlzLmdyaWRbeF1beV1bJ3NoaXAnXSkgcmV0dXJuIHRydWU7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBoYXZlQWxsU3VuaygpIHtcbiAgICAgICAgaWYgKHRoaXMuc2hpcENvdW50ID09PSAwKSB0aHJvdyBuZXcgRXJyb3IoJ05vIHNoaXBzJyk7XG4gICAgICAgIGNvbnN0IGdyaWQgPSB0aGlzLmdyaWQ7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ3JpZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBncmlkWzBdLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hpcCA9IGdyaWRbaV1bal1bJ3NoaXAnXTtcbiAgICAgICAgICAgICAgICBpZiAoc2hpcCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1pbm9yIG9wdGltaXphdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1vdmUgYWhlYWQgYnkgc2hpcCdzIGxlbmd0aCB0byBub3QgY2hlY2sgdGhlIHNhbWUgaG9yaXpvbnRhbCBzaGlwIHJlcGVhdGVkbHlcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGlwLm9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIGogKz0gc2hpcC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuIiwiaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllcic7XG5pbXBvcnQgU2hpcCBmcm9tICcuL1NoaXAnO1xuaW1wb3J0IEFwcGxpY2F0aW9uIGZyb20gJy4uL0NvbnRyb2xsZXJzL0FwcGxpY2F0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSHVudFBhcml0eUFJIGV4dGVuZHMgUGxheWVyIHtcbiAgICAjb3JpZW50YXRpb25zO1xuICAgICNuZXh0QXR0YWNrcztcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBvd25Cb2FyZCwgb3BwQm9hcmQpIHtcbiAgICAgICAgc3VwZXIobmFtZSwgb3duQm9hcmQsIG9wcEJvYXJkKTtcbiAgICAgICAgdGhpcy4jb3JpZW50YXRpb25zID0geyAwOiAnaG9yaXpvbnRhbCcsIDE6ICd2ZXJ0aWNhbCcgfTtcbiAgICAgICAgdGhpcy4jbmV4dEF0dGFja3MgPSBbXTtcbiAgICB9XG5cbiAgICBwbGFjZVNoaXBzKCkge1xuICAgICAgICBBcHBsaWNhdGlvbi5sZW5ndGhzT2ZTaGlwcy5mb3JFYWNoKChsZW4pID0+IHRoaXMuI2FkZFNoaXBUb0JvYXJkKGxlbikpO1xuICAgIH1cblxuICAgICNhZGRTaGlwVG9Cb2FyZChsZW5ndGgpIHtcbiAgICAgICAgbGV0IG9yaWVudGF0aW9uID0gdGhpcy4jb3JpZW50YXRpb25zW3RoaXMuI2dldFJhbmRvbUludCgwLCAyKV07XG4gICAgICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcChsZW5ndGgsIG9yaWVudGF0aW9uKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IFt4LCB5XSA9IHRoaXMuI2dldFJhbmRvbUNvb3JkcygpO1xuICAgICAgICAgICAgdGhpcy5vd25Cb2FyZC5wbGFjZVNoaXAoc2hpcCwgeCwgeSk7XG4gICAgICAgICAgICArK0FwcGxpY2F0aW9uLnNoaXBzT2ZHcmlkMjtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdGhpcy4jYWRkU2hpcFRvQm9hcmQobGVuZ3RoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBsYXkoKSB7XG4gICAgICAgIGxldCB4LCB5LCBpbmRleDtcbiAgICAgICAgaWYgKHRoaXMuI25leHRBdHRhY2tzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCByYW5kb21JbmRleCA9IHRoaXMuI2dldFJhbmRvbUludCgwLCB0aGlzLiNuZXh0QXR0YWNrcy5sZW5ndGgpO1xuICAgICAgICAgICAgW3gsIHldID0gdGhpcy4jbmV4dEF0dGFja3Muc3BsaWNlKHJhbmRvbUluZGV4LCAxKVswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICBbeCwgeV0gPSB0aGlzLiNnZXRSYW5kb21Db29yZHMoKTtcbiAgICAgICAgICAgIH0gd2hpbGUgKFxuICAgICAgICAgICAgICAgICF0aGlzLiNpc1ZhbGlkSW5kZXhUb0F0dGFjayh4LCB5KSB8fFxuICAgICAgICAgICAgICAgICF0aGlzLiNvYmV5UGFyaXR5KHgsIHkpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGAuZ3JpZFtkYXRhLWlkID0gJzEnXSBcbiAgICAgICAgICAgICAuYmxvY2tbZGF0YS1yb3cgPSAnJHt4ICsgMX0nXVtkYXRhLWNvbHVtbiA9ICcke3kgKyAxfSddYFxuICAgICAgICApO1xuXG4gICAgICAgIGlmICh0aGlzLm9wcEJvYXJkLndhc1N1Y2Nlc3NmdWxsQXR0YWNrKHgsIHkpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy4jaXNWYWxpZEluZGV4VG9BdHRhY2soeCwgeSArIDEpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4jbmV4dEF0dGFja3MucHVzaChbeCwgeSArIDFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLiNpc1ZhbGlkSW5kZXhUb0F0dGFjayh4LCB5IC0gMSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiNuZXh0QXR0YWNrcy5wdXNoKFt4LCB5IC0gMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuI2lzVmFsaWRJbmRleFRvQXR0YWNrKHggKyAxLCB5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuI25leHRBdHRhY2tzLnB1c2goW3ggKyAxLCB5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy4jaXNWYWxpZEluZGV4VG9BdHRhY2soeCAtIDEsIHkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4jbmV4dEF0dGFja3MucHVzaChbeCAtIDEsIHldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBibG9jay5jbGljaygpO1xuICAgIH1cblxuICAgICNnZXRSYW5kb21Db29yZHMoKSB7XG4gICAgICAgIGNvbnN0IHggPSB0aGlzLiNnZXRSYW5kb21JbnQoMCwgMTApO1xuICAgICAgICBjb25zdCB5ID0gdGhpcy4jZ2V0UmFuZG9tSW50KDAsIDEwKTtcbiAgICAgICAgcmV0dXJuIFt4LCB5XTtcbiAgICB9XG5cbiAgICAjZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XG4gICAgICAgIG1pbiA9IE1hdGguY2VpbChtaW4pO1xuICAgICAgICBtYXggPSBNYXRoLmZsb29yKG1heCk7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbik7IC8vIFRoZSBtYXhpbXVtIGlzIGV4Y2x1c2l2ZSBhbmQgdGhlIG1pbmltdW0gaXMgaW5jbHVzaXZlXG4gICAgfVxuXG4gICAgI2lzVmFsaWRJbmRleFRvQXR0YWNrKHgsIHkpIHtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IHRoaXMub3duQm9hcmQuc2l6ZTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIHggPCBzaXplICYmXG4gICAgICAgICAgICB4ID49IDAgJiZcbiAgICAgICAgICAgIHkgPCBzaXplICYmXG4gICAgICAgICAgICB5ID49IDAgJiZcbiAgICAgICAgICAgICF0aGlzLm9wcEJvYXJkLmdyaWRbeF1beV1bJ2F0dGFja2VkJ11cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAjb2JleVBhcml0eSh4LCB5KSB7XG4gICAgICAgIHggPSB4ICsgMTtcbiAgICAgICAgeSA9IHkgKyAxO1xuICAgICAgICBjb25zdCBpbmRleCA9ICh4IC0gMSkgKiAxMCArIHk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAoaW5kZXggJSAyID09PSAwICYmIHggJSAyICE9PSAwKSB8fCAoaW5kZXggJSAyICE9PSAwICYmIHggJSAyID09PSAwKVxuICAgICAgICApO1xuICAgIH1cbn1cbiIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXInO1xuaW1wb3J0IFNoaXAgZnJvbSAnLi9TaGlwJztcbmltcG9ydCBBcHBsaWNhdGlvbiBmcm9tICcuLi9Db250cm9sbGVycy9BcHBsaWNhdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNtYXJ0ZXN0QUkgZXh0ZW5kcyBQbGF5ZXIge1xuICAgICNvcmllbnRhdGlvbnM7XG4gICAgI25leHRBdHRhY2tzO1xuICAgICNwcm9iRGF0YTsgLy8gc3RvcmUgcHJvYmFiaWxpdHkgZGF0YVxuICAgICNsZW5ndGhzO1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIG93bkJvYXJkLCBvcHBCb2FyZCkge1xuICAgICAgICBzdXBlcihuYW1lLCBvd25Cb2FyZCwgb3BwQm9hcmQpO1xuICAgICAgICB0aGlzLiNvcmllbnRhdGlvbnMgPSB7IDA6ICdob3Jpem9udGFsJywgMTogJ3ZlcnRpY2FsJyB9O1xuICAgICAgICB0aGlzLiNuZXh0QXR0YWNrcyA9IFtdO1xuICAgICAgICB0aGlzLiNsZW5ndGhzID0gQXBwbGljYXRpb24ubGVuZ3Roc09mU2hpcHMuc2xpY2UoKTtcbiAgICAgICAgdGhpcy4jcHJvYkRhdGEgPSB7XG4gICAgICAgICAgICBtYXhYOiAwLFxuICAgICAgICAgICAgbWF4WTogMCxcbiAgICAgICAgICAgIG1hdHJpeDogdGhpcy4jY3JlYXRlTWF0cml4KDEwKSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwbGFjZVNoaXBzKCkge1xuICAgICAgICBBcHBsaWNhdGlvbi5sZW5ndGhzT2ZTaGlwcy5mb3JFYWNoKChsZW4pID0+IHRoaXMuI2FkZFNoaXBUb0JvYXJkKGxlbikpO1xuICAgIH1cblxuICAgICNhZGRTaGlwVG9Cb2FyZChsZW5ndGgpIHtcbiAgICAgICAgbGV0IG9yaWVudGF0aW9uID0gdGhpcy4jb3JpZW50YXRpb25zW3RoaXMuI2dldFJhbmRvbUludCgwLCAyKV07XG4gICAgICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcChsZW5ndGgsIG9yaWVudGF0aW9uKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IFt4LCB5XSA9IHRoaXMuI2dldFJhbmRvbUNvb3JkcygpO1xuICAgICAgICAgICAgdGhpcy5vd25Cb2FyZC5wbGFjZVNoaXAoc2hpcCwgeCwgeSk7XG4gICAgICAgICAgICArK0FwcGxpY2F0aW9uLnNoaXBzT2ZHcmlkMjtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdGhpcy4jYWRkU2hpcFRvQm9hcmQobGVuZ3RoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBsYXkoKSB7XG4gICAgICAgIGxldCB4LCB5O1xuICAgICAgICBpZiAodGhpcy4jbmV4dEF0dGFja3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IHJhbmRvbUluZGV4ID0gdGhpcy4jZ2V0UmFuZG9tSW50KDAsIHRoaXMuI25leHRBdHRhY2tzLmxlbmd0aCk7XG4gICAgICAgICAgICBbeCwgeV0gPSB0aGlzLiNuZXh0QXR0YWNrcy5zcGxpY2UocmFuZG9tSW5kZXgsIDEpWzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4jdXBkYXRlUHJvYmFiaWxpdHlEaXN0cmlidXRpb24oKTtcbiAgICAgICAgICAgIGNvbnNvbGUudGFibGUodGhpcy4jcHJvYkRhdGEubWF0cml4KTtcbiAgICAgICAgICAgIHggPSB0aGlzLiNwcm9iRGF0YS5tYXhYO1xuICAgICAgICAgICAgeSA9IHRoaXMuI3Byb2JEYXRhLm1heFk7XG4gICAgICAgICAgICB0aGlzLiNwcm9iRGF0YS5tYXRyaXggPSB0aGlzLiNjcmVhdGVNYXRyaXgoMTApOyAvLyByZXNldCBtYXRyaXggZm9yIG5leHQgdGltZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBibG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgLmdyaWRbZGF0YS1pZCA9ICcxJ10gXG4gICAgICAgICAgICAgLmJsb2NrW2RhdGEtcm93ID0gJyR7eCArIDF9J11bZGF0YS1jb2x1bW4gPSAnJHt5ICsgMX0nXWBcbiAgICAgICAgKTtcbiAgICAgICAgYmxvY2suY2xpY2soKTtcbiAgICAgICAgaWYgKHRoaXMub3BwQm9hcmQud2FzU3VjY2Vzc2Z1bGxBdHRhY2soeCwgeSkpIHtcbiAgICAgICAgICAgIC8vIGlmIGF0dGFjayB3YXMgc3VjY2Vzc2Z1bCBhbmQgYSBzaGlwIHdhcyBmb3VuZCwgcmVtb3ZlIHRoYXQgc2hpcCBmcm9tIHRoZSBsaXN0IG9mIHNoaXBzXG4gICAgICAgICAgICBpZiAodGhpcy5vcHBCb2FyZC5ncmlkW3hdW3ldWydzaGlwJ10uaXNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzaGlwID0gdGhpcy5vcHBCb2FyZC5ncmlkW3hdW3ldWydzaGlwJ107XG4gICAgICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gc2hpcC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLiNsZW5ndGhzLmluZGV4T2YobGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnKioqKipUTyBSRU1PVkUgU0hJUCBPRiBMRU5HVEgqKioqJywgbGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI2xlbmd0aHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vdyByZW1haW5pbmcgbGVuZ2h0cyBhcmUgJywgdGhpcy4jbGVuZ3Rocyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy4jaXNWYWxpZEluZGV4VG9BdHRhY2soeCwgeSArIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI25leHRBdHRhY2tzLnB1c2goW3gsIHkgKyAxXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLiNpc1ZhbGlkSW5kZXhUb0F0dGFjayh4LCB5IC0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jbmV4dEF0dGFja3MucHVzaChbeCwgeSAtIDFdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuI2lzVmFsaWRJbmRleFRvQXR0YWNrKHggKyAxLCB5KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiNuZXh0QXR0YWNrcy5wdXNoKFt4ICsgMSwgeV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy4jaXNWYWxpZEluZGV4VG9BdHRhY2soeCAtIDEsIHkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI25leHRBdHRhY2tzLnB1c2goW3ggLSAxLCB5XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgI2dldFJhbmRvbUNvb3JkcygpIHtcbiAgICAgICAgY29uc3QgeCA9IHRoaXMuI2dldFJhbmRvbUludCgwLCAxMCk7XG4gICAgICAgIGNvbnN0IHkgPSB0aGlzLiNnZXRSYW5kb21JbnQoMCwgMTApO1xuICAgICAgICByZXR1cm4gW3gsIHldO1xuICAgIH1cblxuICAgICNnZXRSYW5kb21JbnQobWluLCBtYXgpIHtcbiAgICAgICAgbWluID0gTWF0aC5jZWlsKG1pbik7XG4gICAgICAgIG1heCA9IE1hdGguZmxvb3IobWF4KTtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKTsgLy8gVGhlIG1heGltdW0gaXMgZXhjbHVzaXZlIGFuZCB0aGUgbWluaW11bSBpcyBpbmNsdXNpdmVcbiAgICB9XG5cbiAgICAjaXNWYWxpZEluZGV4VG9BdHRhY2soeCwgeSkge1xuICAgICAgICBjb25zdCBzaXplID0gdGhpcy5vd25Cb2FyZC5zaXplO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgeCA8IHNpemUgJiZcbiAgICAgICAgICAgIHggPj0gMCAmJlxuICAgICAgICAgICAgeSA8IHNpemUgJiZcbiAgICAgICAgICAgIHkgPj0gMCAmJlxuICAgICAgICAgICAgIXRoaXMub3BwQm9hcmQuZ3JpZFt4XVt5XVsnYXR0YWNrZWQnXVxuICAgICAgICApO1xuICAgIH1cblxuICAgICN1cGRhdGVQcm9iYWJpbGl0eURpc3RyaWJ1dGlvbigpIHtcbiAgICAgICAgY29uc3QgcHJvYkRhdGEgPSB0aGlzLiNwcm9iRGF0YTtcbiAgICAgICAgY29uc3QgbWF0cml4ID0gcHJvYkRhdGEubWF0cml4O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBwb2ludCB3YXMgYXR0YWNrZWQgYW5kIGhhZCBhIHNoaXAgd2hpY2ggaGFzIGFscmVhZHkgc3VuaywgdGhlcmUncyBubyBwb2ludCBvZiBldmFsdXRpbmcgaXQ7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub3BwQm9hcmQuZ3JpZFtpXVtqXVsnYXR0YWNrZWQnXSkge1xuICAgICAgICAgICAgICAgICAgICBtYXRyaXhbaV1bal0gPSAwO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy4jbGVuZ3Rocy5mb3JFYWNoKChsZW5ndGgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgc2hpcCBjYW4gYmUgcGxhY2VkIGF0IHRoZSBwb3NpdGlvbiBob3Jpem9udGFsbHlcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZsYWcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiBpdCBlbmNvdW50ZXJzIGFuIG92ZXJsZm93aW5nIGJsb2NrIG9yIGEgYmxvY2sgdGhhdCB3YXMgYXR0YWNrZWQgYnV0IG5vdCBhIHNoaXBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy4jaXNWYWxpZEluZGV4KGksIGogKyBrKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLm9wcEJvYXJkLmdyaWRbaV1baiArIGtdWydhdHRhY2tlZCddICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLm9wcEJvYXJkLmdyaWRbaV1baiArIGtdWydzaGlwJ10pIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMub3BwQm9hcmQuZ3JpZFtpXVtqICsga11bJ2F0dGFja2VkJ10gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHBCb2FyZC5ncmlkW2ldW2ogKyBrXVsnc2hpcCddLmlzU3VuaygpKVxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxhZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChmbGFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3BwQm9hcmQuZ3JpZFtpXVtqICsga11bJ2F0dGFja2VkJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0cml4W2ldW2ogKyBrXSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0cml4W2ldW2ogKyBrXSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHNoaXAgY2FuIGJlIHBsYWNlZCBhdCB0aGUgcG9zaXRpb24gdmVydGljYWxseVxuICAgICAgICAgICAgICAgICAgICBmbGFnID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBsZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLiNpc1ZhbGlkSW5kZXgoaSArIGssIGopIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMub3BwQm9hcmQuZ3JpZFtpICsga11bal1bJ2F0dGFja2VkJ10gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMub3BwQm9hcmQuZ3JpZFtpICsga11bal1bJ3NoaXAnXSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5vcHBCb2FyZC5ncmlkW2kgKyBrXVtqXVsnYXR0YWNrZWQnXSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wcEJvYXJkLmdyaWRbaSArIGtdW2pdWydzaGlwJ10uaXNTdW5rKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGFnID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoZmxhZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBsZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wcEJvYXJkLmdyaWRbaSArIGtdW2pdWydhdHRhY2tlZCddKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdHJpeFtpICsga11bal0gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdHJpeFtpICsga11bal0rKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgbWF0cml4W2ldW2pdID5cbiAgICAgICAgICAgICAgICAgICAgbWF0cml4W3RoaXMuI3Byb2JEYXRhLm1heFhdW3RoaXMuI3Byb2JEYXRhLm1heFldXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI3Byb2JEYXRhLm1heFggPSBpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiNwcm9iRGF0YS5tYXhZID0gajtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAjY3JlYXRlTWF0cml4KHNpemUpIHtcbiAgICAgICAgY29uc3QgbWF0ID0gbmV3IEFycmF5KHNpemUpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgbWF0W2ldID0gbmV3IEFycmF5KHNpemUpLmZpbGwoMCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1hdDtcbiAgICB9XG5cbiAgICAjaXNWYWxpZEluZGV4KHgsIHkpIHtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IHRoaXMub3duQm9hcmQuc2l6ZTtcbiAgICAgICAgcmV0dXJuIHggPCBzaXplICYmIHggPj0gMCAmJiB5IDwgc2l6ZSAmJiB5ID49IDA7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBvd25Cb2FyZCwgb3BwQm9hcmQpIHtcbiAgICAgICAgaWYgKCFvd25Cb2FyZCkgdGhyb3cgJ05vIGJvYXJkIGZvciBwbGF5ZXInO1xuICAgICAgICBpZiAoIW9wcEJvYXJkKSB0aHJvdyAnTm8gb3Bwb25lbnQgYm9hcmQgYWNjZXNzJztcbiAgICAgICAgdGhpcy5vd25Cb2FyZCA9IG93bkJvYXJkO1xuICAgICAgICB0aGlzLm9wcEJvYXJkID0gb3BwQm9hcmQ7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxuXG4gICAgYXR0YWNrKHgsIHkpIHtcbiAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5uYW1lfSBhdHRhY2tlZCAoJHt4fSwgJHt5fSlgKTtcbiAgICAgICAgdGhpcy5vcHBCb2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgIH1cblxuICAgIGhhc1dvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3BwQm9hcmQuaGF2ZUFsbFN1bmsoKTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobGVuZ3RoLCBvcmllbnRhdGlvbiA9IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgaWYgKGxlbmd0aCA8PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGxlbmd0aCBvZiBzaGlwXCIpO1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMuaGl0SW5kaWNlcyA9IFtdO1xuICAgIHRoaXMub3JpZW50YXRpb24gPSBvcmllbnRhdGlvbjsgXG4gIH1cblxuICBoaXQoaW5kZXgpIHtcbiAgICBpZiAodGhpcy4jaXNWYWxpZEluZGV4KGluZGV4KSAmJiAhdGhpcy5oaXRJbmRpY2VzLmluY2x1ZGVzKGluZGV4KSlcbiAgICAgIHRoaXMuaGl0SW5kaWNlcy5wdXNoKGluZGV4KTtcbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICByZXR1cm4gdGhpcy5sZW5ndGggPT09IHRoaXMuaGl0SW5kaWNlcy5sZW5ndGg7XG4gIH1cblxuICAjaXNWYWxpZEluZGV4KGluZGV4KSB7XG4gICAgcmV0dXJuIGluZGV4IDwgdGhpcy5sZW5ndGggJiYgaW5kZXggPj0gMDtcbiAgfVxufVxuIiwiaW1wb3J0IEFwcGxpY2F0aW9uIGZyb20gJy4uL0NvbnRyb2xsZXJzL0FwcGxpY2F0aW9uJztcblxuXG4vLyBBZGQgMTAqMTAgYmxvY2tzIHRvIHRoZSBncmlkXG5mdW5jdGlvbiBkaXNwbGF5R3JpZHMoKSB7XG4gICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29udGFpbmVyIC5ib2FyZCAuZ3JpZCcpKS5tYXAoXG4gICAgICAgIChncmlkKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBibG9jay5jbGFzc0xpc3QuYWRkKCdibG9jaycpO1xuICAgICAgICAgICAgICAgIGJsb2NrLnNldEF0dHJpYnV0ZSgnZGF0YS1jb2x1bW4nLCAoaSAlIDEwKSArIDEpO1xuICAgICAgICAgICAgICAgIGJsb2NrLnNldEF0dHJpYnV0ZSgnZGF0YS1udW1iZXInLCBpICsgMSk7XG4gICAgICAgICAgICAgICAgYmxvY2suc2V0QXR0cmlidXRlKCdkYXRhLXJvdycsIE1hdGguZmxvb3IoaSAvIDEwICsgMSkpO1xuICAgICAgICAgICAgICAgIGdyaWQuYXBwZW5kQ2hpbGQoYmxvY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVNoaXBzKGxlbmd0aHMpIHtcbiAgICBsZW5ndGhzLmZvckVhY2goKGxlbikgPT4gYWRkU2hpcHRvVUkobGVuKSk7XG59XG5cbmZ1bmN0aW9uIG1vZGlmeVNoaXBXaWR0aCgpIHtcbiAgICBjb25zb2xlLmxvZygncmVzaXppbmcgc2hpcCcpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwLWJsb2NrJykuZm9yRWFjaCgoc2hpcEJsb2NrKSA9PiB7XG4gICAgICAgIHNoaXBCbG9jay5zdHlsZS53aWR0aCA9IGAke1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyaWQgLmJsb2NrJykub2Zmc2V0V2lkdGhcbiAgICAgICAgfXB4YDtcbiAgICB9KTtcbn1cblxuLy8gQ3JlYXRlIHJlY3Rhbmd1bGFyIGJsb2NrcyB0byByZXByZXNlbnQgc2hpcHNcbmZ1bmN0aW9uIGFkZFNoaXB0b1VJKGxlbmd0aCkge1xuICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAteWFyZCcpKS5tYXAoKHNoaXBZYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IHlhcmROdW1iZXIgPSBzaGlwWWFyZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICAgICAgY29uc3Qgc2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzaGlwLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICAgICAgc2hpcC5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsIHRydWUpO1xuICAgICAgICBzaGlwLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIHlhcmROdW1iZXIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBibG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgYmxvY2suY2xhc3NMaXN0LmFkZCgnc2hpcC1ibG9jaycpO1xuICAgICAgICAgICAgYmxvY2suc3R5bGUud2lkdGggPSBgJHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JpZCAuYmxvY2snKS5vZmZzZXRXaWR0aFxuICAgICAgICAgICAgfXB4YDtcbiAgICAgICAgICAgIHNoaXAuYXBwZW5kQ2hpbGQoYmxvY2spO1xuICAgICAgICB9XG4gICAgICAgIHNoaXBZYXJkLmFwcGVuZENoaWxkKHNoaXApO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5R2FtZUludGVyZmFjZSgpIHtcbiAgICBkaXNwbGF5R3JpZHMoKTtcbiAgICBkaXNwbGF5U2hpcHMoQXBwbGljYXRpb24ubGVuZ3Roc09mU2hpcHMpO1xuICAgIHdpbmRvdy5vbnJlc2l6ZSA9IG1vZGlmeVNoaXBXaWR0aDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZVVJV2l0aEFJU2hpcHMoYm9hcmRBSSkge1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yQWxsKGAuc2hpcC15YXJkW2RhdGEtaWQgPSAnMiddIC5zaGlwYClcbiAgICAuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgc2hpcC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICBpZiAoYm9hcmRBSS5ncmlkW2ldW2pdW1wic2hpcFwiXSkge1xuICAgICAgICBjb25zdCBibG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYC5ncmlkW2RhdGEtaWQgPSAnMiddIFxuICAgICAgICAgICAuYmxvY2tbZGF0YS1yb3cgPSAnJHtpICsgMX0nXVtkYXRhLWNvbHVtbiA9ICcke2ogKyAxfSddYFxuICAgICAgICApO1xuICAgICAgICBibG9jay5jbGFzc0xpc3QuYWRkKFwic2hpcC1ibG9jay1pbi1ncmlkXCIpO1xuICAgICAgICBibG9jay5jbGFzc0xpc3QuYWRkKFwiYWktc2hpcFwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBBcHBsaWNhdGlvbiBmcm9tICcuLi9Db250cm9sbGVycy9BcHBsaWNhdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFyZUFsbFNoaXBzUGxhY2VkKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIChmdW5jdGlvbiB3YWl0Rm9yQWxsU2hpcHNUb0JlUGxhY2VkKCkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIEFwcGxpY2F0aW9uLnNoaXBzT2ZHcmlkMSA9PT0gQXBwbGljYXRpb24ubnVtYmVyT2ZTaGlwcyAmJlxuICAgICAgICAgICAgICAgIEFwcGxpY2F0aW9uLnNoaXBzT2ZHcmlkMiA9PT0gQXBwbGljYXRpb24ubnVtYmVyT2ZTaGlwc1xuICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHdhaXRGb3JBbGxTaGlwc1RvQmVQbGFjZWQsIDIwMDApO1xuICAgICAgICB9KSgpO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IFNoaXAgZnJvbSAnLi4vTW9kZWxzL1NoaXAnO1xuaW1wb3J0IEFwcGxpY2F0aW9uIGZyb20gJy4uL0NvbnRyb2xsZXJzL0FwcGxpY2F0aW9uJztcblxubGV0IGRyYWdnZWRTaGlwLFxuICAgIGRyYWdnZWRTaGlwTGVuZ3RoLFxuICAgIHNoaXBCbG9ja051bWJlckRyYWdnZWQsXG4gICAgZHJhZ2dlZFNoaXBEaXJlY3Rpb247XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxldEh1bWFuRHJhZ1NoaXBzKGJvYXJkSHVtYW4pIHtcbiAgICBkb2N1bWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5zaGlwLXlhcmRbZGF0YS1pZCA9ICcxJ10gLnNoaXBcIilcbiAgICAgICAgLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgaGFuZGxlRHJhZ1N0YXJ0KTtcbiAgICAgICAgICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIChlKSA9PlxuICAgICAgICAgICAgICAgIGhhbmRsZURyYWdFbmQoZSwgYm9hcmRIdW1hbilcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVEcmFnU3RhcnQoZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZHJhZ2dlZFNoaXAgPSBlLnRhcmdldDtcbiAgICBpZiAoIWRyYWdnZWRTaGlwLm1hdGNoZXMoJy5zaGlwJykpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ25vdCBtYXRjaGVzJyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgdGhpcy5zdHlsZS5vcGFjaXR5ID0gJzAuNCc7XG4gICAgICAgIFxuICAgICAgICBkcmFnZ2VkU2hpcExlbmd0aCA9IGRyYWdnZWRTaGlwLmNoaWxkRWxlbWVudENvdW50O1xuICAgICAgICBjb25zdCByZWN0ID0gZHJhZ2dlZFNoaXAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGRyYWdnZWRTaGlwRGlyZWN0aW9uID1cbiAgICAgICAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRyYWdnZWRTaGlwKS5mbGV4RGlyZWN0aW9uO1xuICAgICAgICBpZiAoZHJhZ2dlZFNoaXBEaXJlY3Rpb24gPT09ICdyb3cnKSB7XG4gICAgICAgICAgICBjb25zdCBibG9ja1dpZHRoID0gcmVjdC53aWR0aCAvIGRyYWdnZWRTaGlwTGVuZ3RoO1xuICAgICAgICAgICAgc2hpcEJsb2NrTnVtYmVyRHJhZ2dlZCA9IE1hdGguZmxvb3IoZS5vZmZzZXRYIC8gYmxvY2tXaWR0aCArIDEpO1xuICAgICAgICB9IGVsc2UgaWYgKGRyYWdnZWRTaGlwRGlyZWN0aW9uID09PSAnY29sdW1uJykge1xuICAgICAgICAgICAgY29uc3QgYmxvY2tIZWlnaHQgPSByZWN0LmhlaWdodCAvIGRyYWdnZWRTaGlwTGVuZ3RoO1xuICAgICAgICAgICAgc2hpcEJsb2NrTnVtYmVyRHJhZ2dlZCA9IE1hdGguZmxvb3IoZS5vZmZzZXRZIC8gYmxvY2tIZWlnaHQgKyAxKTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2gge1xuICAgICAgICByZXN0b3JlT3BhY2l0eShlKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZURyYWdFbmQoZSwgYm9hcmRIdW1hbikge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIC8vIGlmICghZHJhZ2dlZFNoaXAubWF0Y2hlcygnLnNoaXAnKSkge1xuICAgIC8vICAgICBjb25zb2xlLmxvZygnbm90IG1hdGNoZXMnKTtcbiAgICAvLyAgICAgcmVzdG9yZU9wYWNpdHkoZSk7XG4gICAgLy8gICAgIHJldHVybjtcbiAgICAvLyB9XG4gICAgLy8gb24gd2hpY2ggZWxlbWVudCBkb2VzIGRyYWcgZW5kIG9uIHNjcmVlbiAtIHJldHVybnMgYW4gYXJyYXkgd2l0aCBwYXJlbnRzIGluY2x1ZGVkXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmVsZW1lbnRzRnJvbVBvaW50KGUuY2xpZW50WCwgZS5jbGllbnRZKTtcbiAgICAgICAgLy8gaWYgaXQncyBhIGJsb2NrIGluIHRoZSByaWdodCBncmlkXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGVsZW1bMF0ubWF0Y2hlcyhgLmdyaWRbZGF0YS1pZCA9ICcxJ10gLmJsb2NrYCkgJiZcbiAgICAgICAgICAgIGRyYWdnZWRTaGlwTGVuZ3RoID49IDJcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBjb25zdCBibG9jayA9IGVsZW1bMF07XG4gICAgICAgICAgICBjb25zdCBbcm93LCBjb2x1bW5dID0gZ2V0VUlDb29yZHMoYmxvY2spO1xuICAgICAgICAgICAgY29uc3Qgc3RhcnRpbmdCbG9jayA9IGdldFN0YXJ0aW5nQmxvY2soXG4gICAgICAgICAgICAgICAgcm93LFxuICAgICAgICAgICAgICAgIGNvbHVtbixcbiAgICAgICAgICAgICAgICBkcmFnZ2VkU2hpcERpcmVjdGlvblxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0YXJ0aW5nQmxvY2spO1xuICAgICAgICAgICAgaWYgKCFzdGFydGluZ0Jsb2NrKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05PVCBzdGFydGluZyBibG9jaycpO1xuICAgICAgICAgICAgICAgIHJlc3RvcmVPcGFjaXR5KGUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IFt4LCB5XSA9IGdldFVJQ29vcmRzKHN0YXJ0aW5nQmxvY2spO1xuICAgICAgICAgICAgY29uc3Qgb3JpZW50YXRpb24gPVxuICAgICAgICAgICAgICAgIGRyYWdnZWRTaGlwRGlyZWN0aW9uID09PSAncm93JyA/ICdob3Jpem9udGFsJyA6ICd2ZXJ0aWNhbCc7XG5cbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcChkcmFnZ2VkU2hpcExlbmd0aCwgb3JpZW50YXRpb24pO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBib2FyZEh1bWFuLnBsYWNlU2hpcChzaGlwLCB4IC0gMSwgeSAtIDEpOyAvLyB4LTEseS0xIGJlY2F1c2UgVUk6IDEsMiwuLi4gLT4gbG9naWM6MCwxLC4uLlxcXG4gICAgICAgICAgICAgICAgKytBcHBsaWNhdGlvbi5zaGlwc09mR3JpZDE7XG4gICAgICAgICAgICAgICAgcGFpbnRTaGlwT25HcmlkKFxuICAgICAgICAgICAgICAgICAgICBwYXJzZUludChzdGFydGluZ0Jsb2NrLmdldEF0dHJpYnV0ZSgnZGF0YS1udW1iZXInKSksXG4gICAgICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBkcmFnZ2VkU2hpcC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHJlc3RvcmVPcGFjaXR5KGUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHJlc3RvcmVPcGFjaXR5KGUpO1xuICAgIH0gY2F0Y2gge1xuICAgICAgICByZXN0b3JlT3BhY2l0eShlKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldFN0YXJ0aW5nQmxvY2socm93LCBjb2x1bW4sIGRpcmVjdGlvbikge1xuICAgIGlmIChkaXJlY3Rpb24gPT09ICdyb3cnKVxuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGAuZ3JpZFtkYXRhLWlkID0gJzEnXSAuYmxvY2tbZGF0YS1yb3cgPSAnJHtyb3d9J11bZGF0YS1jb2x1bW4gPSAnJHtcbiAgICAgICAgICAgICAgICBjb2x1bW4gLSBzaGlwQmxvY2tOdW1iZXJEcmFnZ2VkICsgMVxuICAgICAgICAgICAgfSddYFxuICAgICAgICApO1xuICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2NvbHVtbicpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgLmdyaWRbZGF0YS1pZCA9ICcxJ10gLmJsb2NrW2RhdGEtcm93ID0gJyR7XG4gICAgICAgICAgICAgICAgcm93IC0gc2hpcEJsb2NrTnVtYmVyRHJhZ2dlZCArIDFcbiAgICAgICAgICAgIH0nXVtkYXRhLWNvbHVtbiA9ICcke2NvbHVtbn0nXWBcbiAgICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGRpcmVjdGlvbiBzcGVjaWZpZWQnKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHBhaW50U2hpcE9uR3JpZChpbmRleCwgb3JpZW50YXRpb24pIHtcbiAgICBpZiAob3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJylcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkcmFnZ2VkU2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50QmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgIGAuZ3JpZFtkYXRhLWlkID0gJzEnXSAuYmxvY2tbZGF0YS1udW1iZXIgPSAnJHtpbmRleCsrfSddYFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGN1cnJlbnRCbG9jay5jbGFzc0xpc3QuYWRkKCdzaGlwLWJsb2NrLWluLWdyaWQnKTtcbiAgICAgICAgfVxuICAgIGVsc2UgaWYgKG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZHJhZ2dlZFNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICBgLmdyaWRbZGF0YS1pZCA9ICcxJ10gLmJsb2NrW2RhdGEtbnVtYmVyID0gJyR7aW5kZXh9J11gXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY3VycmVudEJsb2NrLmNsYXNzTGlzdC5hZGQoJ3NoaXAtYmxvY2staW4tZ3JpZCcpO1xuICAgICAgICAgICAgaW5kZXggKz0gMTA7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlc3RvcmVPcGFjaXR5KGUpIHtcbiAgICBpZiAoZHJhZ2dlZFNoaXAubWF0Y2hlcygnLnNoaXAnKSkgZHJhZ2dlZFNoaXAuc3R5bGUub3BhY2l0eSA9IDE7XG59XG5cbmZ1bmN0aW9uIGdldFVJQ29vcmRzKGJsb2NrKSB7XG4gICAgY29uc3QgeCA9IGJsb2NrLmdldEF0dHJpYnV0ZSgnZGF0YS1yb3cnKTtcbiAgICBjb25zdCB5ID0gYmxvY2suZ2V0QXR0cmlidXRlKCdkYXRhLWNvbHVtbicpO1xuICAgIHJldHVybiBbeCwgeV07XG59XG4iLCJsZXQgZHJhZyA9IGZhbHNlO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsZXRIdW1hblJvdGF0ZVNoaXBzKCkge1xuICAgIGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKGAuc2hpcC15YXJkW2RhdGEtaWQgPSAnMSddIC5zaGlwYClcbiAgICAgICAgLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgICAgIC8vIGRpc3Rpbmd1aXNoIGIvdyBkcmFnIGFuZCBjbGlja1xuICAgICAgICAgICAgLy8gdGhlcmUgaXMgYSBtb3VzZW1vdmUgYmV0d2VlbiBtb3VzZWRvd24gYW5kIG1vdXNldXAgaW4gYSBkcmFnLFxuICAgICAgICAgICAgLy8gYnV0IG5vdCBpbiBhIGNsaWNrLlxuICAgICAgICAgICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoKSA9PiAoZHJhZyA9IGZhbHNlKSk7XG4gICAgICAgICAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsICgpID0+IChkcmFnID0gdHJ1ZSkpO1xuICAgICAgICAgICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWRyYWcpIHJvdGF0ZVNoaXAoZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG59XG5cbmZ1bmN0aW9uIHJvdGF0ZVNoaXAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZygnY2xpY2snKTtcbiAgICBjb25zdCBzaGlwID0gZS50YXJnZXQucGFyZW50RWxlbWVudDsgLy8gYmVjYXVzZSB0YXJnZXQgd2lsbCBiZSBhIHNoaXAgYmxvY2sgZHVlIHRvIGV2ZW50IGJ1YmJsaW5nXG4gICAgY29uc3QgY3VycmVudERpcmVjdGlvbiA9IHNoaXAuc3R5bGUuZmxleERpcmVjdGlvbjtcbiAgICBzaGlwLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBjdXJyZW50RGlyZWN0aW9uID09PSAnY29sdW1uJyA/ICdyb3cnIDogJ2NvbHVtbic7XG59XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxuXFxuLyogRG9jdW1lbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4gKi9cXG5cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG59XFxuXFxuLyogU2VjdGlvbnNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxuICovXFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAqL1xcblxcbmhyIHtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnByZSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAqIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5pbWcge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCB7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7IC8qIDEgKi9cXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gKi9cXG5cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5maWVsZHNldCB7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5sZWdlbmQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXFxuICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gKi9cXG5cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcbiAqL1xcblxcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxuICovXFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICovXFxuXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5cXG5kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLyogTWlzY1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcbiAqL1xcblxcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcbiAqL1xcblxcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMkVBQTJFOztBQUUzRTsrRUFDK0U7O0FBRS9FOzs7RUFHRTs7QUFFRjtFQUNFLGlCQUFpQixFQUFFLE1BQU07RUFDekIsOEJBQThCLEVBQUUsTUFBTTtBQUN4Qzs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsU0FBUztBQUNYOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGO0VBQ0UsdUJBQXVCLEVBQUUsTUFBTTtFQUMvQixTQUFTLEVBQUUsTUFBTTtFQUNqQixpQkFBaUIsRUFBRSxNQUFNO0FBQzNCOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLGlDQUFpQyxFQUFFLE1BQU07RUFDekMsY0FBYyxFQUFFLE1BQU07QUFDeEI7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSxtQkFBbUIsRUFBRSxNQUFNO0VBQzNCLDBCQUEwQixFQUFFLE1BQU07RUFDbEMsaUNBQWlDLEVBQUUsTUFBTTtBQUMzQzs7QUFFQTs7RUFFRTs7QUFFRjs7RUFFRSxtQkFBbUI7QUFDckI7O0FBRUE7OztFQUdFOztBQUVGOzs7RUFHRSxpQ0FBaUMsRUFBRSxNQUFNO0VBQ3pDLGNBQWMsRUFBRSxNQUFNO0FBQ3hCOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7O0VBR0U7O0FBRUY7O0VBRUUsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGOzs7OztFQUtFLG9CQUFvQixFQUFFLE1BQU07RUFDNUIsZUFBZSxFQUFFLE1BQU07RUFDdkIsaUJBQWlCLEVBQUUsTUFBTTtFQUN6QixTQUFTLEVBQUUsTUFBTTtBQUNuQjs7QUFFQTs7O0VBR0U7O0FBRUY7UUFDUSxNQUFNO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBOzs7RUFHRTs7QUFFRjtTQUNTLE1BQU07RUFDYixvQkFBb0I7QUFDdEI7O0FBRUE7O0VBRUU7O0FBRUY7Ozs7RUFJRSwwQkFBMEI7QUFDNUI7O0FBRUE7O0VBRUU7O0FBRUY7Ozs7RUFJRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBOztFQUVFOztBQUVGOzs7O0VBSUUsOEJBQThCO0FBQ2hDOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBOzs7OztFQUtFOztBQUVGO0VBQ0Usc0JBQXNCLEVBQUUsTUFBTTtFQUM5QixjQUFjLEVBQUUsTUFBTTtFQUN0QixjQUFjLEVBQUUsTUFBTTtFQUN0QixlQUFlLEVBQUUsTUFBTTtFQUN2QixVQUFVLEVBQUUsTUFBTTtFQUNsQixtQkFBbUIsRUFBRSxNQUFNO0FBQzdCOztBQUVBOztFQUVFOztBQUVGO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7O0VBR0U7O0FBRUY7O0VBRUUsc0JBQXNCLEVBQUUsTUFBTTtFQUM5QixVQUFVLEVBQUUsTUFBTTtBQUNwQjs7QUFFQTs7RUFFRTs7QUFFRjs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsNkJBQTZCLEVBQUUsTUFBTTtFQUNyQyxvQkFBb0IsRUFBRSxNQUFNO0FBQzlCOztBQUVBOztFQUVFOztBQUVGO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLDBCQUEwQixFQUFFLE1BQU07RUFDbEMsYUFBYSxFQUFFLE1BQU07QUFDdkI7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxuXFxuLyogRG9jdW1lbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4gKi9cXG5cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG59XFxuXFxuLyogU2VjdGlvbnNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxuICovXFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAqL1xcblxcbmhyIHtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnByZSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAqIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5pbWcge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCB7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7IC8qIDEgKi9cXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gKi9cXG5cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5maWVsZHNldCB7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5sZWdlbmQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXFxuICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gKi9cXG5cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcbiAqL1xcblxcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxuICovXFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICovXFxuXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5cXG5kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLyogTWlzY1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcbiAqL1xcblxcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcbiAqL1xcblxcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1wcmltYXJ5LTE6ICMwMDE3MWY7XFxuICAgIC0tcHJpbWFyeS0yOiAjZmZmZmZmO1xcbiAgICAtLXNlY29uZGFyeS0xOiAjMDAzNDU5O1xcbiAgICAtLWFjY2VudC0xOiAjM2Y2YzUxO1xcbiAgICAtLWFjY2VudC0yOiAjMDBhOGU4O1xcbiAgICAvKiAtLWFjY2VudC0zOiAjMTdiZWJiOyAqL1xcbiAgICAvKiAtLWFjY2VudC0zOiAjMDI4OEU4OyAqL1xcbiAgICAtLWFjY2VudC0zOiByZ2IoMjExLCA1NCwgNTQpO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG4uY29udGFpbmVyIC5nYW1lLXRpdGxlIHtcXG4gICAgZmxleDogMCAwIDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA0MTAxNjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnJlbSB0cmFuc3BhcmVudCBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTEpO1xcbn1cXG5cXG4uY29udGFpbmVyIC5nYW1lLXRpdGxlIHNwYW4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYm9yZGVyOiAxcmVtIHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItbGVmdDogMnJlbSBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuLmNvbnRhaW5lciAuYm9hcmQge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDN2aDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uY29udGFpbmVyIC5ib2FyZCAudGl0bGUge1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktMSk7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZjA4MDg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgZmxleDogMCAwIDN2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMXJlbSBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmJvYXJkW2RhdGEtaWQ9JzInXSAudGl0bGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2YwODA4NDc7XFxufVxcblxcbi5jb250YWluZXIgLmJvYXJkIC5ncmlkIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgY2FsYygxMDAlIC8gMTApKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIGNhbGMoMTAwJSAvIDEwKSk7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAqL1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTEpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5jb250YWluZXIgLmJvYXJkIC5ibG9jayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC0yKTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktMSk7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAwLjJyZW0gc29saWQgdmFyKC0tcHJpbWFyeS0xKTtcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9hcmQgLmJsb2NrOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMzQ1OTljO1xcbn1cXG5cXG4uc2hpcC15YXJkLXdpZGdldCB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9hcmQgLnNoaXAteWFyZCB7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2FyZCAuc2hpcC15YXJkIC5zaGlwLXlhcmQtdGl0bGUge1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9hcmQgLnNoaXAteWFyZCAuc2hpcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5jb250YWluZXIgLmJvYXJkIC5zaGlwLXlhcmQgLnNoaXAgLnNoaXAtYmxvY2sge1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibG9jay1jb2xvcik7ICovXFxuICAgIGFzcGVjdC1yYXRpbzogMTtcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC0zKTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktMSk7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAwLjJyZW0gc29saWQgdmFyKC0tcHJpbWFyeS0xKTtcXG59XFxuXFxuLnNoaXAtYmxvY2staW4tZ3JpZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC0zKSAhaW1wb3J0YW50O1xcbiAgICBhc3BlY3QtcmF0aW86IDE7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBibGFjayAhaW1wb3J0YW50OyAqL1xcbn1cXG5cXG4uYm9hcmRbZGF0YS1pZD0nMiddIC5zaGlwLWJsb2NrLWluLWdyaWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtMikgIWltcG9ydGFudDtcXG59XFxuXFxuLmJvYXJkW2RhdGEtaWQ9JzInXSAuc2hpcC1ibG9jay1pbi1ncmlkOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMzQ1OTljICFpbXBvcnRhbnQ7XFxufVxcblxcbi5hdHRhY2tlZC1zaGlwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC0zKSAhaW1wb3J0YW50OyAqL1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjUsIDQyLCA0MiwgMC4zMDgpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5ib2FyZFtkYXRhLWlkPScyJ10gLmF0dGFja2VkLXNoaXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC0zKSAhaW1wb3J0YW50OyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2NSwgNDIsIDQyLCAwLjMwOCkgIWltcG9ydGFudDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLmJhZC1hdHRhY2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjayAhaW1wb3J0YW50OyAqL1xcbn1cXG5cXG4uYmFkLWF0dGFjazpob3ZlciB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvY29udGFpbmVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLHFDQUFxQztJQUNyQyw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsOEJBQThCO0lBQzlCLG1DQUFtQztBQUN2QztBQUNBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLDBDQUEwQztJQUMxQyx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGFBQWE7SUFDYixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGtEQUFrRDtJQUNsRCwrQ0FBK0M7SUFDL0MsNkJBQTZCO0lBQzdCLFVBQVU7SUFDVixrQ0FBa0M7SUFDbEMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLGVBQWU7SUFDZiwwQ0FBMEM7SUFDMUMsa0JBQWtCO0lBQ2xCLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsU0FBUztBQUNiOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksMENBQTBDO0lBQzFDLGVBQWU7SUFDZixjQUFjO0lBQ2QsaUNBQWlDO0lBQ2pDLGVBQWU7SUFDZiwwQ0FBMEM7SUFDMUMsa0JBQWtCO0lBQ2xCLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLDRDQUE0QztJQUM1QyxlQUFlO0lBQ2YsY0FBYztJQUNkLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtEQUFrRDtJQUNsRCxjQUFjO0lBQ2QscURBQXFEO0FBQ3pEOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGtEQUFrRDtJQUNsRCxxREFBcUQ7SUFDckQsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osa0NBQWtDO0lBQ2xDLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tcHJpbWFyeS0xOiAjMDAxNzFmO1xcbiAgICAtLXByaW1hcnktMjogI2ZmZmZmZjtcXG4gICAgLS1zZWNvbmRhcnktMTogIzAwMzQ1OTtcXG4gICAgLS1hY2NlbnQtMTogIzNmNmM1MTtcXG4gICAgLS1hY2NlbnQtMjogIzAwYThlODtcXG4gICAgLyogLS1hY2NlbnQtMzogIzE3YmViYjsgKi9cXG4gICAgLyogLS1hY2NlbnQtMzogIzAyODhFODsgKi9cXG4gICAgLS1hY2NlbnQtMzogcmdiKDIxMSwgNTQsIDU0KTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuLmNvbnRhaW5lciAuZ2FtZS10aXRsZSB7XFxuICAgIGZsZXg6IDAgMCAxMDAlO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNDEwMTY7XFxuICAgIGJvcmRlci1ib3R0b206IDJyZW0gdHJhbnNwYXJlbnQgc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS0xKTtcXG59XFxuXFxuLmNvbnRhaW5lciAuZ2FtZS10aXRsZSBzcGFuIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJvcmRlcjogMXJlbSBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLWxlZnQ6IDJyZW0gc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcbi5jb250YWluZXIgLmJvYXJkIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAzdmg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmNvbnRhaW5lciAuYm9hcmQgLnRpdGxlIHtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LTEpOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2YwODA4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIGZsZXg6IDAgMCAzdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IDFyZW0gc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5ib2FyZFtkYXRhLWlkPScyJ10gLnRpdGxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NmMDgwODQ3O1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2FyZCAuZ3JpZCB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIGNhbGMoMTAwJSAvIDEwKSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCBjYWxjKDEwMCUgLyAxMCkpO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgKi9cXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS0xKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2FyZCAuYmxvY2sge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtMik7XFxuICAgIGFzcGVjdC1yYXRpbzogMTtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LTEpOyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMC4ycmVtIHNvbGlkIHZhcigtLXByaW1hcnktMSk7XFxufVxcblxcbi5jb250YWluZXIgLmJvYXJkIC5ibG9jazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDM0NTk5YztcXG59XFxuXFxuLnNoaXAteWFyZC13aWRnZXQge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5jb250YWluZXIgLmJvYXJkIC5zaGlwLXlhcmQge1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9hcmQgLnNoaXAteWFyZCAuc2hpcC15YXJkLXRpdGxlIHtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XFxufVxcblxcbi5jb250YWluZXIgLmJvYXJkIC5zaGlwLXlhcmQgLnNoaXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2FyZCAuc2hpcC15YXJkIC5zaGlwIC5zaGlwLWJsb2NrIHtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxvY2stY29sb3IpOyAqL1xcbiAgICBhc3BlY3QtcmF0aW86IDE7XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtMyk7XFxuICAgIGFzcGVjdC1yYXRpbzogMTtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LTEpOyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMC4ycmVtIHNvbGlkIHZhcigtLXByaW1hcnktMSk7XFxufVxcblxcbi5zaGlwLWJsb2NrLWluLWdyaWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtMykgIWltcG9ydGFudDtcXG4gICAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgICBmbGV4OiAwIDAgYXV0bztcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgYmxhY2sgIWltcG9ydGFudDsgKi9cXG59XFxuXFxuLmJvYXJkW2RhdGEtaWQ9JzInXSAuc2hpcC1ibG9jay1pbi1ncmlkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LTIpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5ib2FyZFtkYXRhLWlkPScyJ10gLnNoaXAtYmxvY2staW4tZ3JpZDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDM0NTk5YyAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYXR0YWNrZWQtc2hpcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtMykgIWltcG9ydGFudDsgKi9cXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTY1LCA0MiwgNDIsIDAuMzA4KSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYm9hcmRbZGF0YS1pZD0nMiddIC5hdHRhY2tlZC1zaGlwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtMykgIWltcG9ydGFudDsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjUsIDQyLCA0MiwgMC4zMDgpICFpbXBvcnRhbnQ7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5iYWQtYXR0YWNrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDsgKi9cXG59XFxuXFxuLmJhZC1hdHRhY2s6aG92ZXIge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3NcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4uL2ltYWdlcy9jcm9zc2hhaXIucG5nXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SeWUmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1wcmltYXJ5LTE6ICMwMDE3MWY7XFxuICAgIC0tcHJpbWFyeS0yOiAjZmZmZmZmO1xcbiAgICAtLXNlY29uZGFyeS0xOiAjMDAzNDU5O1xcbiAgICAtLWFjY2VudC0xOiAjM0Y2QzUxO1xcbiAgICAtLWFjY2VudC0yOiAjMDBhOGU4O1xcbiAgICAtLWZvbnQ6ICdSeWUnLCBjdXJzaXZlO1xcbn1cXG5cXG4qIHtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgd2hpdGU7ICovXFxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTEpO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS0yKTtcXG4gICAgZm9udC1zaXplOiA2Mi41JTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpO1xcbn1cXG5cXG5cXG5cXG5cXG4vKiAuY29udGFpbmVyIC5ib2FyZFtkYXRhLWlkID0gJzInXXtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn0gKi9cXG5cXG4uY29udGFpbmVyIC5ib2FyZCAuZ3JpZFtkYXRhLWlkPScyJ10gLmJsb2NrOmhvdmVyIHtcXG4gICAgY3Vyc29yOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpLCBhdXRvO1xcbn1cXG5cXG4uY29udGFpbmVyIC5ib2FyZCAuZ3JpZFtkYXRhLWlkPScyJ10gLnNoaXAtYmxvY2staW4tZ3JpZDpob3ZlciB7XFxuICAgIGN1cnNvcjogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSwgYXV0bztcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9hcmQgLmdyaWRbZGF0YS1pZD0nMiddIC5haS1zaGlwOmhvdmVyIHtcXG4gICAgY3Vyc29yOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpLCBhdXRvO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5bZHJhZ2dhYmxlPSd0cnVlJ10ge1xcbiAgICBjdXJzb3I6IG1vdmU7XFxufVxcblxcblxcbi5iYWQtYXR0YWNrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjAwJTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDsgKi9cXG59XFxuXFxuLyogVEVNUE9SQVJZICovXFxuLmJsb2NrLXRleHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6IHNlcmlmO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE1MCU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIC8qIGZvbnQtc2l6ZTogMjAwJTsgKi9cXG4gICAgLyogZm9udC1zaXplOiAxLjJyZW07ICovXFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0lBQ0ksb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0Isb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGtDQUFrQztJQUNsQyx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtBQUM1Qjs7Ozs7QUFLQTs7R0FFRzs7QUFFSDtJQUNJLHFEQUE0QztBQUNoRDs7QUFFQTtJQUNJLHFEQUE0QztBQUNoRDs7QUFFQTtJQUNJLHFEQUE0QztBQUNoRDs7Ozs7O0FBTUE7SUFDSSxZQUFZO0FBQ2hCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix3Q0FBd0M7QUFDNUM7O0FBRUEsY0FBYztBQUNkO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixVQUFVO0lBQ1YscUJBQXFCO0lBQ3JCLHVCQUF1QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICd+bm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzJztcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SeWUmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgICAtLXByaW1hcnktMTogIzAwMTcxZjtcXG4gICAgLS1wcmltYXJ5LTI6ICNmZmZmZmY7XFxuICAgIC0tc2Vjb25kYXJ5LTE6ICMwMDM0NTk7XFxuICAgIC0tYWNjZW50LTE6ICMzRjZDNTE7XFxuICAgIC0tYWNjZW50LTI6ICMwMGE4ZTg7XFxuICAgIC0tZm9udDogJ1J5ZScsIGN1cnNpdmU7XFxufVxcblxcbioge1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTsgKi9cXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XFxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktMSk7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LTIpO1xcbiAgICBmb250LXNpemU6IDYyLjUlO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XFxufVxcblxcblxcblxcblxcbi8qIC5jb250YWluZXIgLmJvYXJkW2RhdGEtaWQgPSAnMidde1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufSAqL1xcblxcbi5jb250YWluZXIgLmJvYXJkIC5ncmlkW2RhdGEtaWQ9JzInXSAuYmxvY2s6aG92ZXIge1xcbiAgICBjdXJzb3I6IHVybCgnLi4vaW1hZ2VzL2Nyb3NzaGFpci5wbmcnKSwgYXV0bztcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9hcmQgLmdyaWRbZGF0YS1pZD0nMiddIC5zaGlwLWJsb2NrLWluLWdyaWQ6aG92ZXIge1xcbiAgICBjdXJzb3I6IHVybCgnLi4vaW1hZ2VzL2Nyb3NzaGFpci5wbmcnKSwgYXV0bztcXG59XFxuXFxuLmNvbnRhaW5lciAuYm9hcmQgLmdyaWRbZGF0YS1pZD0nMiddIC5haS1zaGlwOmhvdmVyIHtcXG4gICAgY3Vyc29yOiB1cmwoJy4uL2ltYWdlcy9jcm9zc2hhaXIucG5nJyksIGF1dG87XFxufVxcblxcblxcblxcblxcblxcbltkcmFnZ2FibGU9J3RydWUnXSB7XFxuICAgIGN1cnNvcjogbW92ZTtcXG59XFxuXFxuXFxuLmJhZC1hdHRhY2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyMDAlO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjayAhaW1wb3J0YW50OyAqL1xcbn1cXG5cXG4vKiBURU1QT1JBUlkgKi9cXG4uYmxvY2stdGV4dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogc2VyaWY7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTUwJTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgLyogZm9udC1zaXplOiAyMDAlOyAqL1xcbiAgICAvKiBmb250LXNpemU6IDEuMnJlbTsgKi9cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKFxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIHRvU3RyaW5nVGFnU3ltYm9sLFxuICAgIFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICApO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb250YWluZXIuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL2Nzcy9jb250YWluZXIuY3NzJztcbmltcG9ydCAnLi9jc3MvaW5kZXguY3NzJztcblxuaW1wb3J0ICcuL21vZHVsZXMvQ29udHJvbGxlcnMvR2FtZSc7XG4iXSwic291cmNlUm9vdCI6IiJ9