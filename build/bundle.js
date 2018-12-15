/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nmodule.exports = _createClass;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/createClass.js?");

/***/ }),

/***/ "./src/Audio.js":
/*!**********************!*\
  !*** ./src/Audio.js ***!
  \**********************/
/*! exports provided: Audio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Audio\", function() { return Audio; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar Audio =\n/*#__PURE__*/\nfunction () {\n  function Audio() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Audio);\n\n    this.audioElement = document.getElementById('zombiMusic');\n    this.audioElement.volume = 0.5;\n    this.audioIconUp = document.querySelector(\".fa-volume-up\");\n    this.audioIconMute = document.querySelector(\".fa-volume-mute\");\n    this.isPlaying = false;\n    this.init();\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Audio, [{\n    key: \"init\",\n    value: function init() {\n      this.audioIconUp.addEventListener('click', this.toggleMusic.bind(this));\n      this.audioIconMute.addEventListener('click', this.toggleMusic.bind(this));\n    }\n    /* play() {\r\n    \tthis.audioElement.play();\r\n    \tthis.changeIcon();\r\n    \tthis.isPlaying = true;\r\n    }\r\n    \n    stop() {\r\n    \tthis.audioElement.pause();\r\n    \tthis.changeIcon();\r\n    \tthis.isPlaying = false;\r\n    \t//audio.currentTime = 0.0;\r\n    } */\n\n    /* toggle() {\r\n    \tif (this.isPlaying) {\r\n    \t\tthis.stop();\r\n    \t} else {\r\n    \t\tthis.play();\r\n    \t}\r\n    } */\n\n  }, {\n    key: \"toggleMusic\",\n    value: function toggleMusic() {\n      if (this.isPlaying) {\n        this.audioElement.pause();\n        this.changeIcon();\n        this.isPlaying = false;\n      } else {\n        this.audioElement.play();\n        this.changeIcon();\n        this.isPlaying = true;\n      }\n    }\n  }, {\n    key: \"changeIcon\",\n    value: function changeIcon() {\n      this.audioIconUp.classList.toggle(\"not-displayed\");\n      this.audioIconMute.classList.toggle(\"not-displayed\");\n    }\n  }]);\n\n  return Audio;\n}();\n\n//# sourceURL=webpack:///./src/Audio.js?");

/***/ }),

/***/ "./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Game\", function() { return Game; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* harmony import */ var _Audio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Audio */ \"./src/Audio.js\");\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Menu */ \"./src/Menu.js\");\n\n\n\n\n\nvar Game =\n/*#__PURE__*/\nfunction () {\n  function Game() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Game);\n\n    this.audio = new _Audio__WEBPACK_IMPORTED_MODULE_3__[\"Audio\"]();\n    this.menu = new _Menu__WEBPACK_IMPORTED_MODULE_4__[\"Menu\"]();\n    this.playBtn = document.getElementById('play');\n    this.init();\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Game, [{\n    key: \"init\",\n    value: function init() {\n      //this.playBtn.addEventListener('click', this.start.bind(this));\n      this.renderFieldLayout(); //this.sunflower = new PLANT_DATA.sunflower_card_id();\n    }\n  }, {\n    key: \"renderFieldLayout\",\n    value: function renderFieldLayout() {\n      var container = document.querySelector('.grid');\n\n      for (var i = 0; i < _constants__WEBPACK_IMPORTED_MODULE_2__[\"SETTINGS\"].ROW_COUNT; i++) {\n        var rowDiv = document.createElement('div');\n        rowDiv.className = 'row';\n\n        for (var j = 0; j < _constants__WEBPACK_IMPORTED_MODULE_2__[\"SETTINGS\"].CELL_COUNT; j++) {\n          var cellDiv = document.createElement('div');\n          cellDiv.className = 'cell';\n          rowDiv.appendChild(cellDiv);\n          cellDiv.addEventListener('drop', this.drop.bind(this));\n          cellDiv.addEventListener('dragover', this.allowDrop.bind(this));\n        }\n\n        container.appendChild(rowDiv);\n      }\n    }\n  }, {\n    key: \"drop\",\n    value: function drop(ev) {\n      ev.preventDefault();\n      var data = ev.dataTransfer.getData(\"text\"); //ev.target.appendChild(document.getElementById(data));\n    }\n  }, {\n    key: \"allowDrop\",\n    value: function allowDrop(ev) {\n      ev.preventDefault();\n    }\n  }]);\n\n  return Game;\n}();\n\n//# sourceURL=webpack:///./src/Game.js?");

/***/ }),

/***/ "./src/Menu.js":
/*!*********************!*\
  !*** ./src/Menu.js ***!
  \*********************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Menu\", function() { return Menu; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\n\n\nvar Menu =\n/*#__PURE__*/\nfunction () {\n  function Menu() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Menu);\n\n    this.container = document.querySelector('.menu');\n    this.sunPointsDiv = document.querySelector('.sun-points');\n    this.wallnutCardDiv = document.getElementById('wallnut-card');\n    this.peaShooterCardDiv = document.getElementById('pea-shooter-card');\n    this.sunflowerCardDiv = document.getElementById('sunflower_card');\n    this.init();\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Menu, [{\n    key: \"init\",\n    value: function init() {\n      this.temp = document.getElementById('temp');\n      this.temp.addEventListener('drop', this.drop.bind(this)); ///////////////////////////\n\n      this.temp.addEventListener('dragover', this.allowDrop.bind(this)); ///////////////////////////\n\n      this.sunflowerCardDiv.addEventListener('dragstart', this.drag.bind(this));\n      this.sunPointsDiv.textContent = _constants__WEBPACK_IMPORTED_MODULE_2__[\"MENU\"].INITIAL_POINTS;\n    }\n  }, {\n    key: \"allowDrop\",\n    value: function allowDrop(ev) {\n      ev.preventDefault();\n    }\n  }, {\n    key: \"drag\",\n    value: function drag(ev) {\n      ev.dataTransfer.setData(\"text\", ev.target.id);\n    }\n  }, {\n    key: \"drop\",\n    value: function drop(ev) {\n      ev.preventDefault();\n      var data = ev.dataTransfer.getData(\"text\");\n      ev.target.appendChild(document.getElementById(data));\n    }\n  }]);\n\n  return Menu;\n}();\n\n//# sourceURL=webpack:///./src/Menu.js?");

/***/ }),

/***/ "./src/Sunflower.js":
/*!**************************!*\
  !*** ./src/Sunflower.js ***!
  \**************************/
/*! exports provided: Sunflower */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Sunflower\", function() { return Sunflower; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar Sunflower =\n/*#__PURE__*/\nfunction () {\n  function Sunflower(container) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Sunflower);\n\n    this.container = container;\n    this.init();\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Sunflower, [{\n    key: \"init\",\n    value: function init() {\n      console.log(\"SSSSSSS Sunflower\");\n    }\n  }]);\n\n  return Sunflower;\n}();\n\n//# sourceURL=webpack:///./src/Sunflower.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ \"./src/Game.js\");\n\nvar game = new _Game__WEBPACK_IMPORTED_MODULE_0__[\"Game\"]();\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: ZOMBIE_DATA, SETTINGS, MENU, PLANT_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ZOMBIE_DATA\", function() { return ZOMBIE_DATA; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SETTINGS\", function() { return SETTINGS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MENU\", function() { return MENU; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PLANT_DATA\", function() { return PLANT_DATA; });\n/* harmony import */ var _Sunflower__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sunflower */ \"./src/Sunflower.js\");\n\nvar ZOMBIE_DATA = {\n  MAX_HEALTH: 100,\n  HIT_DAMAGE: 10,\n\n  /* DELETE_TIMEOUT: 3500, */\n\n  /* IMAGES: ['ballon.gif', 'michael.gif', 'strong.gif', 'default.gif'],\r\n  IMAGES: [{\r\n  \tlive: 'michael.gif',\r\n  \tdie: 'michael-die.gif'\r\n  }], */\n  STEP: 1\n};\nvar SETTINGS = {\n  ROW_COUNT: 5,\n  CELL_COUNT: 8,\n  INTERVAL: 50\n};\nvar MENU = {\n  INITIAL_POINTS: 50,\n  SUNFLOWER_POINTS: 25,\n  PEA_SHOOTER_POINTS: 100,\n  WALLNUT_POINTS: 150\n};\nvar PLANT_DATA = {\n  sunflower_card: _Sunflower__WEBPACK_IMPORTED_MODULE_0__[\"Sunflower\"]\n};\n\n//# sourceURL=webpack:///./src/constants.js?");

/***/ }),

/***/ 0:
/*!**************************!*\
  !*** multi ./src/app.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/app.js */\"./src/app.js\");\n\n\n//# sourceURL=webpack:///multi_./src/app.js?");

/***/ })

/******/ });