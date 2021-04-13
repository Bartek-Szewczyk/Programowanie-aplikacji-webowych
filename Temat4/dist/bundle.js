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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  color: red;\\n}\\n\\n.gameIcon {\\n  width: 50px;\\n}\\n\\n.cell {\\n  position: relative;\\n  border: 2px solid black;\\n  width: 50px;\\n  height: 50px;\\n  justify-content: center;\\n  text-align: center;\\n}\\n\\n.img {\\n  position: relative;\\n  width: 30px;\\n}\\n\\n.container {\\n  width: 100%;\\n  height: 100vh;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n#tictactoe {\\n  margin-left: 45%;\\n}\\n\\n#winner {\\n  position: fixed;\\n  z-index: 100;\\n  background-color: rgba(0, 0, 0, 0.8);\\n  width: 100%;\\n  height: 100%;\\n  justify-content: center;\\n  text-align: center;\\n}\\n\\n#win {\\n  margin-top: 20%;\\n  font-size: 50px;\\n  color: white;\\n}\\n\\n.nonevisible {\\n  display: none;\\n}\\n\\n.visible {\\n  display: block;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack:///./src/styles/styles.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar games_enum_1 = __webpack_require__(/*! ./games.enum */ \"./src/games.enum.ts\");\r\nvar gameFactory_1 = __webpack_require__(/*! ./gameFactory */ \"./src/gameFactory.ts\");\r\n__webpack_require__(/*! ./styles/styles.scss */ \"./src/styles/styles.scss\");\r\nvar App = /** @class */ (function () {\r\n    function App(gamesFactory) {\r\n        this.gamesFactory = gameFactory;\r\n        this.initMenu();\r\n    }\r\n    App.prototype.initMenu = function () {\r\n        var menuContainer = (document.createElement('div')); // kontener menu dostępnych gier\r\n        var gameContainer = (document.createElement('div')); // kontener główny ekranu z grą\r\n        var list = document.createElement('ul'); // lista pozycji w menu dostępnych gier\r\n        var _loop_1 = function (gameKind) {\r\n            if (isNaN(Number(gameKind))) {\r\n                return \"continue\";\r\n            }\r\n            var game = gameFactory.getGame(Number(gameKind));\r\n            var item = document.createElement('li');\r\n            var img = document.createElement('img');\r\n            img.src = game.iconSrc;\r\n            img.classList.add('gameIcon');\r\n            item.appendChild(img);\r\n            item.appendChild(document.createTextNode(game.name));\r\n            item.addEventListener('click', function () {\r\n                gameContainer.innerHTML = \"\";\r\n                gameContainer.appendChild(game.getGameElement());\r\n            });\r\n            list.appendChild(item);\r\n        };\r\n        // TODO: Zaimplementuj wzorzec fabryki/metody fabrykującej, tak aby na podstawie konkretnej wartości z enum zwrócić obiekt gry. Z tego obiektu można następnie pobrać nazwę gry i dodać do menu oraz metodę zwracającą samą grę i po kliknięciu w wybrany element listy wywoływać ją, aby doklejać zawartość do gameContainer. Aby wyświetlić menu należy napisać pętlę, któta przeiteruje po wszystkich wartościach enum'a\r\n        for (var _i = 0, _a = Object.keys(games_enum_1.Games); _i < _a.length; _i++) {\r\n            var gameKind = _a[_i];\r\n            _loop_1(gameKind);\r\n        }\r\n        menuContainer.appendChild(list);\r\n        document.body.appendChild(menuContainer);\r\n        document.body.appendChild(gameContainer);\r\n    };\r\n    return App;\r\n}());\r\nvar gameFactory = new gameFactory_1.GamesFactory();\r\nvar app = new App(gameFactory);\r\n\n\n//# sourceURL=webpack:///./src/app.ts?");

/***/ }),

/***/ "./src/battleships/battleships.ts":
/*!****************************************!*\
  !*** ./src/battleships/battleships.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.BattleShips = void 0;\r\nvar BattleShips = /** @class */ (function () {\r\n    function BattleShips() {\r\n        this.name = \"Statki\";\r\n        this.iconSrc = \"../Media/tictactoe.png\";\r\n    }\r\n    BattleShips.prototype.getGameElement = function () {\r\n        var div = document.createElement('div');\r\n        div.appendChild(document.createTextNode(\"Hello BattleShips\"));\r\n        return div;\r\n    };\r\n    return BattleShips;\r\n}());\r\nexports.BattleShips = BattleShips;\r\n\n\n//# sourceURL=webpack:///./src/battleships/battleships.ts?");

/***/ }),

/***/ "./src/gameFactory.ts":
/*!****************************!*\
  !*** ./src/gameFactory.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.GamesFactory = void 0;\r\nvar tictactoe_1 = __webpack_require__(/*! ./tictactoe/tictactoe */ \"./src/tictactoe/tictactoe.ts\");\r\nvar battleships_1 = __webpack_require__(/*! ./battleships/battleships */ \"./src/battleships/battleships.ts\");\r\nvar games_enum_1 = __webpack_require__(/*! ./games.enum */ \"./src/games.enum.ts\");\r\nvar GamesFactory = /** @class */ (function () {\r\n    function GamesFactory() {\r\n    }\r\n    GamesFactory.prototype.getGame = function (game) {\r\n        switch (game) {\r\n            case games_enum_1.Games.TicTacToe:\r\n                return new tictactoe_1.TicTacToe();\r\n            case games_enum_1.Games.BattleShips:\r\n                return new battleships_1.BattleShips();\r\n            default:\r\n                throw new Error(\"Invalid Game\");\r\n        }\r\n    };\r\n    return GamesFactory;\r\n}());\r\nexports.GamesFactory = GamesFactory;\r\n\n\n//# sourceURL=webpack:///./src/gameFactory.ts?");

/***/ }),

/***/ "./src/games.enum.ts":
/*!***************************!*\
  !*** ./src/games.enum.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Games = void 0;\r\nvar Games;\r\n(function (Games) {\r\n    Games[Games[\"TicTacToe\"] = 1] = \"TicTacToe\";\r\n    Games[Games[\"BattleShips\"] = 2] = \"BattleShips\";\r\n})(Games = exports.Games || (exports.Games = {}));\r\n\n\n//# sourceURL=webpack:///./src/games.enum.ts?");

/***/ }),

/***/ "./src/tictactoe/Board.ts":
/*!********************************!*\
  !*** ./src/tictactoe/Board.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Board = void 0;\r\nvar Cell_1 = __webpack_require__(/*! ./Cell */ \"./src/tictactoe/Cell.ts\");\r\nvar Check_1 = __webpack_require__(/*! ./Check */ \"./src/tictactoe/Check.ts\");\r\nvar Board = /** @class */ (function () {\r\n    function Board(size, tablee) {\r\n        var _this = this;\r\n        this.cells = new Array(size);\r\n        this.currentSymbol = 1;\r\n        var table = tablee;\r\n        console.log(table);\r\n        //<HTMLTableElement>document.getElementById(\"tictactoe\");\r\n        var i = 0;\r\n        for (var r = 0; r < size; r++) {\r\n            var row = table.insertRow(r);\r\n            var _loop_1 = function (c) {\r\n                var cell = row.insertCell(c);\r\n                cell.className = 'cell';\r\n                var newCell = new Cell_1.Cell(cell);\r\n                this_1.cells[i] = newCell;\r\n                cell.addEventListener(\"click\", function () { return _this.makeMove(newCell); }, false);\r\n                i++;\r\n            };\r\n            var this_1 = this;\r\n            for (var c = 0; c < size; c++) {\r\n                _loop_1(c);\r\n            }\r\n        }\r\n        this.current(this.currentSymbol);\r\n    }\r\n    Board.prototype.makeMove = function (cell) {\r\n        if (cell.cellValue == 0) {\r\n            cell.setCellValue(this.currentSymbol);\r\n            if (this.currentSymbol == 1) {\r\n                this.currentSymbol = -1;\r\n            }\r\n            else if (this.currentSymbol == -1) {\r\n                this.currentSymbol = 1;\r\n            }\r\n        }\r\n        new Check_1.Check(this.cells);\r\n        this.current(this.currentSymbol);\r\n    };\r\n    ;\r\n    Board.prototype.current = function (currentSymbol) {\r\n        var cr = document.getElementById('current');\r\n        var ximg = new Image();\r\n        var oimg = document.createElement(\"img\");\r\n        ximg.src = \"../Media/x.png\";\r\n        oimg.src = \"../Media/O.png\";\r\n        ximg.classList.add(\"img\");\r\n        oimg.classList.add(\"img\");\r\n        cr.innerHTML = \"Ruch: \";\r\n        if (currentSymbol == 1) {\r\n            cr.appendChild(ximg);\r\n        }\r\n        else if (currentSymbol == -1) {\r\n            cr.appendChild(oimg);\r\n        }\r\n    };\r\n    return Board;\r\n}());\r\nexports.Board = Board;\r\n\n\n//# sourceURL=webpack:///./src/tictactoe/Board.ts?");

/***/ }),

/***/ "./src/tictactoe/Cell.ts":
/*!*******************************!*\
  !*** ./src/tictactoe/Cell.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Cell = void 0;\r\nvar Cell = /** @class */ (function () {\r\n    function Cell(cell) {\r\n        this.htmlElement = cell;\r\n        this.cellValue = 0;\r\n    }\r\n    Cell.prototype.setCellValue = function (value) {\r\n        // TODO: napisz samemu metodę, która ustawia w tabeli kółko i krzyżyk. Możesz przyjąć, że kółko to wartość -1, krzyżyk to wartość 1, a 0 (zero) oznacza pole nieustawione.\r\n        var ximg = new Image();\r\n        var oimg = document.createElement(\"img\");\r\n        ximg.src = \"../Media/x.png\";\r\n        oimg.src = \"../Media/O.png\";\r\n        ximg.classList.add(\"img\");\r\n        oimg.classList.add(\"img\");\r\n        if (value == 1 && this.cellValue == 0) {\r\n            this.cellValue = 1;\r\n            this.htmlElement.appendChild(ximg);\r\n        }\r\n        else if (value == -1 && this.cellValue == 0) {\r\n            this.cellValue = -1;\r\n            this.htmlElement.appendChild(oimg);\r\n        }\r\n    };\r\n    return Cell;\r\n}());\r\nexports.Cell = Cell;\r\n\n\n//# sourceURL=webpack:///./src/tictactoe/Cell.ts?");

/***/ }),

/***/ "./src/tictactoe/Check.ts":
/*!********************************!*\
  !*** ./src/tictactoe/Check.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Check = void 0;\r\nvar Win_1 = __webpack_require__(/*! ./Win */ \"./src/tictactoe/Win.ts\");\r\nvar Check = /** @class */ (function () {\r\n    function Check(cells) {\r\n        var newCell = new Array();\r\n        for (var i = 0; i < Math.sqrt(cells.length); i++) {\r\n            newCell[i] = [];\r\n        }\r\n        var c = 0;\r\n        for (var i = 0; i < Math.sqrt(cells.length); i++) {\r\n            for (var j = 0; j < Math.sqrt(cells.length); j++) {\r\n                var el = cells[c];\r\n                newCell[j][i] = el;\r\n                c++;\r\n            }\r\n        }\r\n        var pl = 0;\r\n        for (var i = 0; i < cells.length; i++) {\r\n            var element = cells[i];\r\n            if (element.cellValue == 1 || element.cellValue == -1) {\r\n                pl++;\r\n            }\r\n            if (pl == cells.length) {\r\n                new Win_1.Win(0);\r\n            }\r\n        }\r\n        for (var i = 0; i < newCell.length; i++) {\r\n            var sX_1 = 0, sO_1 = 0;\r\n            for (var j = 0; j < newCell.length; j++) {\r\n                var el = newCell[i][j];\r\n                if (el.cellValue == -1) {\r\n                    sO_1++;\r\n                }\r\n                else if (el.cellValue == 1) {\r\n                    sX_1++;\r\n                }\r\n                if (sX_1 == newCell.length) {\r\n                    new Win_1.Win(1);\r\n                }\r\n                else if (sO_1 == newCell.length) {\r\n                    new Win_1.Win(-1);\r\n                }\r\n            }\r\n        }\r\n        for (var i = 0; i < newCell.length; i++) {\r\n            var sX_2 = 0, sO_2 = 0;\r\n            for (var j = 0; j < newCell.length; j++) {\r\n                var el = newCell[j][i];\r\n                if (el.cellValue == -1) {\r\n                    sO_2++;\r\n                }\r\n                else if (el.cellValue == 1) {\r\n                    sX_2++;\r\n                }\r\n                if (sX_2 == newCell.length) {\r\n                    new Win_1.Win(1);\r\n                }\r\n                else if (sO_2 == newCell.length) {\r\n                    new Win_1.Win(-1);\r\n                }\r\n            }\r\n        }\r\n        var sX = 0, sO = 0;\r\n        for (var i = 0; i < newCell.length; i++) {\r\n            var el = newCell[i][i];\r\n            if (el.cellValue == -1) {\r\n                sO++;\r\n            }\r\n            else if (el.cellValue == 1) {\r\n                sX++;\r\n            }\r\n            if (sX == newCell.length) {\r\n                new Win_1.Win(1);\r\n            }\r\n            else if (sO == newCell.length) {\r\n                new Win_1.Win(-1);\r\n            }\r\n        }\r\n        var spX = 0, spO = 0;\r\n        var lp = newCell.length - 1;\r\n        for (var i = 0; i < newCell.length; i++) {\r\n            var el = newCell[i][lp];\r\n            if (el.cellValue == -1) {\r\n                spO++;\r\n            }\r\n            else if (el.cellValue == 1) {\r\n                spX++;\r\n            }\r\n            if (spX == newCell.length) {\r\n                new Win_1.Win(1);\r\n            }\r\n            else if (spO == newCell.length) {\r\n                new Win_1.Win(-1);\r\n            }\r\n            lp--;\r\n            continue;\r\n        }\r\n        // if(cells[0].cellValue != 0 && cells[0].cellValue == cells[1].cellValue && cells[1].cellValue== cells[2].cellValue){\r\n        //     console.log(`Wygrywa ${cells[0].cellValue}`);\r\n        // }\r\n        // else  if(cells[3].cellValue != 0 && cells[3].cellValue == cells[4].cellValue && cells[4].cellValue== cells[5].cellValue){\r\n        //     console.log(`Wygrywa ${cells[3].cellValue}`);\r\n        // }\r\n        // else  if(cells[6].cellValue != 0 && cells[6].cellValue == cells[7].cellValue && cells[7].cellValue== cells[8].cellValue){\r\n        //     console.log(`Wygrywa ${cells[6].cellValue}`);\r\n        // }\r\n        // else if(cells[0].cellValue != 0 && cells[0].cellValue == cells[3].cellValue && cells[3].cellValue== cells[6].cellValue){\r\n        //     console.log(`Wygrywa ${cells[0].cellValue}`);\r\n        // }\r\n        // else if(cells[1].cellValue != 0 && cells[1].cellValue == cells[4].cellValue && cells[4].cellValue== cells[7].cellValue){\r\n        //     console.log(`Wygrywa ${cells[1].cellValue}`);\r\n        // }\r\n        // else if(cells[2].cellValue != 0 && cells[2].cellValue == cells[5].cellValue && cells[5].cellValue== cells[8].cellValue){\r\n        //     console.log(`Wygrywa ${cells[2].cellValue}`);\r\n        // }\r\n        // else if(cells[0].cellValue != 0 && cells[0].cellValue == cells[4].cellValue && cells[4].cellValue== cells[8].cellValue){\r\n        //     console.log(`Wygrywa ${cells[0].cellValue}`);\r\n        // }\r\n        // else  if(cells[2].cellValue != 0 && cells[2].cellValue == cells[4].cellValue && cells[4].cellValue== cells[6].cellValue){\r\n        //     console.log(`Wygrywa ${cells[2].cellValue}`);\r\n        // }\r\n    }\r\n    return Check;\r\n}());\r\nexports.Check = Check;\r\n\n\n//# sourceURL=webpack:///./src/tictactoe/Check.ts?");

/***/ }),

/***/ "./src/tictactoe/Win.ts":
/*!******************************!*\
  !*** ./src/tictactoe/Win.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Win = void 0;\r\nvar Win = /** @class */ (function () {\r\n    function Win(value) {\r\n        var win = document.getElementById(\"win\");\r\n        var winDiv = document.getElementById(\"winner\");\r\n        winDiv.classList.add('visible');\r\n        console.log(winDiv);\r\n        var ximg = new Image();\r\n        var oimg = document.createElement(\"img\");\r\n        ximg.src = \"../Media/x.png\";\r\n        oimg.src = \"../Media/O.png\";\r\n        ximg.classList.add(\"img\");\r\n        oimg.classList.add(\"img\");\r\n        win.innerHTML = \"Wygrał: \";\r\n        if (value == 1) {\r\n            this.wygrany = \"Krzyżyk\";\r\n            win.appendChild(ximg);\r\n        }\r\n        else if (value == -1) {\r\n            this.wygrany = \"Kółko\";\r\n            win.appendChild(oimg);\r\n        }\r\n        else {\r\n            this.wygrany = \"remis\";\r\n            win.innerHTML = \"Remis\";\r\n        }\r\n        console.log(\"Wygra\\u0142: \" + this.wygrany);\r\n    }\r\n    return Win;\r\n}());\r\nexports.Win = Win;\r\n\n\n//# sourceURL=webpack:///./src/tictactoe/Win.ts?");

/***/ }),

/***/ "./src/tictactoe/tictactoe.ts":
/*!************************************!*\
  !*** ./src/tictactoe/tictactoe.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.TicTacToe = void 0;\r\nvar Board_1 = __webpack_require__(/*! ./Board */ \"./src/tictactoe/Board.ts\");\r\nvar TicTacToe = /** @class */ (function () {\r\n    function TicTacToe() {\r\n        this.name = \"Kółko i krzyżyk\";\r\n        this.iconSrc = \"../Media/tictactoe.png \";\r\n    }\r\n    TicTacToe.prototype.getGameElement = function () {\r\n        var _this = this;\r\n        var div = document.createElement('div');\r\n        var table = document.createElement('table');\r\n        table.id = \"tictactoe\";\r\n        var rozmPlanszy = document.createElement('label');\r\n        rozmPlanszy.innerHTML = \"Rozmiar Planszy: \";\r\n        var input = document.createElement('input');\r\n        input.type = \"number\";\r\n        input.value = \"3\";\r\n        input.min = \"3\";\r\n        input.max = \"20\";\r\n        input.id = \"num\";\r\n        var btn = document.createElement('button');\r\n        btn.innerHTML = \"Graj\";\r\n        var current = document.createElement('h2');\r\n        current.id = \"current\";\r\n        var win = document.createElement(\"h2\");\r\n        win.id = \"win\";\r\n        win.innerHTML = \"winner\";\r\n        var winDiv = document.createElement(\"div\");\r\n        winDiv.id = \"winner\";\r\n        winDiv.classList.add('nonevisible');\r\n        var restart = document.createElement('button');\r\n        restart.innerHTML = \"Koniec Gry\";\r\n        restart.addEventListener(\"click\", function () {\r\n            window.location.reload();\r\n        });\r\n        winDiv.appendChild(win);\r\n        winDiv.appendChild(restart);\r\n        div.appendChild(winDiv);\r\n        div.appendChild(current);\r\n        div.appendChild(rozmPlanszy);\r\n        div.appendChild(input);\r\n        div.appendChild(btn);\r\n        div.appendChild(table);\r\n        var num;\r\n        btn === null || btn === void 0 ? void 0 : btn.addEventListener(\"click\", function () {\r\n            table.innerHTML = \" \";\r\n            num = parseInt(input.value);\r\n            console.log(num);\r\n            _this.play(num, table);\r\n        });\r\n        return div;\r\n    };\r\n    TicTacToe.prototype.play = function (num, table) {\r\n        console.log(\"play\");\r\n        new Board_1.Board(num, table);\r\n    };\r\n    return TicTacToe;\r\n}());\r\nexports.TicTacToe = TicTacToe;\r\n\n\n//# sourceURL=webpack:///./src/tictactoe/tictactoe.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;