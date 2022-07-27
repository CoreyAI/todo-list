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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  --color-header: blue;\\n}\\n\\n#container {\\n  position: fixed;\\n  top: 0%;\\n  left: 0%;\\n  width: 100vw;\\n  height: 100vh;\\n  display: grid;\\n  grid-template-rows: 3rem 1fr 2rem;\\n  grid-template-columns: 200px 6fr;\\n  grid-template-areas: \\n    \\\"header header\\\"\\n    \\\"nav content\\\"\\n    \\\"footer footer\\\";\\n}\\n\\n#header {\\n  grid-area: header;\\n  background-color: var(--color-header);\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n#nav {\\n  grid-area: nav;\\n  background-color: green;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n#nav.hidden {\\n  display: none;\\n}\\n\\n#content-container {\\n  grid-area: content;\\n  background-color: yellow;\\n  padding: 10px;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n#content-container.extend {\\n  grid-column-start: nav;\\n  grid-column-end: content;\\n}\\n\\n#footer {\\n  grid-area: footer;\\n  background-color: red;\\n}\\n\\n#menu-icon {\\n  color: white;\\n  position: absolute;\\n  left: 20px;\\n  width: 2rem;\\n  border: 1px solid var(--color-header);\\n}\\n\\n#menu-icon:hover {\\n  border: 1px solid white;\\n  border-radius: 10px;\\n}\\n\\n#menu-icon:active {\\n  color: var(--color-header);\\n  border: none;\\n}\\n\\n.logo {\\n  color: white;\\n  font-size: 2rem;\\n}\\n\\n#nav>div {\\n  display: flex;\\n  align-items: center;\\n  gap: 1rem;\\n}\\n\\n.nav-main-choices {\\n  padding: 0.5rem 1rem;\\n}\\n\\n.nav-icons {\\n  height: 2rem\\n}\\n\\n#nav>#nav-projects {\\n  padding-bottom: 0rem;\\n}\\n\\n#nav>#nav-add-projects {\\n  padding-top: 0rem;\\n}\\n\\n.nav-projects {\\n  padding-left: 2.5rem;\\n}\\n\\n.nav-projects#nav-added-projects {\\n  display: flex;\\n  flex-direction: column;\\n  gap: initial;\\n}\\n\\n#nav>#nav-add-projects>*, .nav-projects#nav-added-projects {\\nfont-size: 0.8rem;\\n}\\n\\n#nav-projects-icon {\\n  height: 1.2rem;\\n}\\n\\n.nav-main-choices:hover, .nav-added-projects:hover, #nav-add-projects:hover {\\n  background-color: grey;\\n}\\n\\n.nav-added-projects {\\n  display: flex;\\n  flex-direction: row;\\n  gap: 2rem;\\n  justify-items: end;\\n  align-self: end;\\n  padding-right: 1rem;\\n  padding-left: inherit;\\n}\\n\\n#task-project-title {\\n  display: flex;\\n  justify-content: center;\\n  padding: 1rem 0rem;\\n  border: 2px solid black;\\n  border-radius: 40px;\\n  font-size: 2rem;\\n  margin-bottom: 2rem;\\n}\\n\\n.task {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  border: 1px solid black;\\n  border-radius: 25px;\\n  margin-bottom: 0.5rem;\\n}\\n\\n#task-title-description {\\n  display: flex;\\n  flex-direction: column;\\n  padding-left: 1rem;\\n}\\n\\n#task-title {\\n  font-size: 1.5rem;\\n}\\n\\n#task-date-options {\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  padding-right: 1rem;\\n  gap: 0.5rem;\\n}\\n\\n.task-svg>svg {\\n  height: 1.5rem;\\n  border: 1px solid transparent;\\n  padding: 0.05rem;\\n}\\n\\n#task-create-button {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n}\\n\\n#task-create-button-text {\\n  padding: 0rem 0.5rem 0rem 0.5rem;\\n  border: 1px solid transparent;\\n}\\n\\n#task-create-button-text:hover, .task-svg>svg:hover {\\n  border: 1px solid black;\\n  border-radius: 10px;\\n}\\n\\n#task-create-button-text:active, .task-svg>svg:active {\\n  background-color: lightgrey;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ui\": () => (/* binding */ ui)\n/* harmony export */ });\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db */ \"./src/db.js\");\n\n\nconst ui = (() =>{\n\n  const container = document.getElementById(\"container\");\n  const header = document.getElementById(\"header\");\n  const nav = document.getElementById(\"nav\");\n  const content = document.getElementById(\"content-container\");\n  const footer = document.getElementById(\"footer\");\n\n  const appendChild = (eParent, eChild) => {\n    if (eParent == null) {\n      eParent.appendChild(eChild);\n    } else {\n      eParent.appendChild(eChild);\n    }\n  }\n\n  const setInnerHTML = (object, input) => {\n    object.innerHTML += input;\n  }\n\n  const headerMenuIcon = () => {\n    const e = `\n      <svg viewBox=\"0 0 24 24\" id=\"menu-icon\">\n        <path fill=\"currentColor\" d=\"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z\" />\n      </svg>\n    `\n    return e;\n  }\n\n  const headerLogo = () => {\n    const e = `\n      <div class=\"logo\">Test Logo Text</div>\n    `\n    return e;\n  }\n\n  const start = () => {\n    setInnerHTML(header, headerMenuIcon());\n    setInnerHTML(header, headerLogo());\n    setInnerHTML(nav, navChoices());\n  }\n\n  const menuToggle = () => {\n    if (nav.className == \"active\") {\n      nav.className = \"hidden\";\n      content.className = \"extend\";\n    } else {\n      nav.className = \"active\";\n      content.className = \"normal\";\n    }\n  }\n\n  const navChoices = () => {\n    const e = `\n      <div class=\"nav-main-choices\" id=\"nav-inbox\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" class=\"nav-icons\">\n          <path fill=\"#000000\" d=\"M19,15H15A3,3 0 0,1 12,18A3,3 0 0,1 9,15H5V5H19M19,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z\" />\n        </svg>\n        <div class=\"nav-label\">Inbox</div>\n      </div>\n      <div class=\"nav-main-choices\" id=\"nav-today\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" class=\"nav-icons\">\n          <path fill=\"#000000\" d=\"M7,10H12V15H7M19,19H5V8H19M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z\" />\n        </svg>\n        <div class=\"nav-label\">Today</div>\n      </div>\n      <div class=\"nav-main-choices\" id=\"nav-projects\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" class=\"nav-icons\">\n          <path fill=\"#000000\" d=\"M3,3H9V7H3V3M15,10H21V14H15V10M15,17H21V21H15V17M13,13H7V18H13V20H7L5,20V9H7V11H13V13Z\" />\n        </svg>\n        <div class=\"nav-label\">Projects</div>\n      </div>\n      <div class=\"nav-projects\" id=\"nav-added-projects\"></div>\n      <div class=\"nav-projects\" id=\"nav-add-projects\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" id=\"nav-projects-icon\">\n          <path fill=\"#000000\" d=\"M18 11H15V14H13V11H10V9H13V6H15V9H18M20 4V16H8V4H20M20 2H8C6.9 2 6 2.9 6 4V16C6 17.11 6.9 18 8 18H20C21.11 18 22 17.11 22 16V4C22 2.9 21.11 2 20 2M4 6H2V20C2 21.11 2.9 22 4 22H18V20H4V6Z\" />\n        </svg>\n        <div class=\"nav-label\">Add Project</div>\n      </div>         \n    `\n    return e;\n  }\n\n  const navProjectToggle = () => {\n    const projectList = document.getElementsByClassName(\"nav-projects\");\n    for (let i = 0; i < projectList.length; i++) {\n      if (projectList[i].getAttribute(\"style\")) {\n        projectList[i].removeAttribute(\"style\");\n      } else {\n        projectList[i].setAttribute(\"style\", \"display:none\");\n      }\n    }\n  }\n\n  const navAddProject = (name) => {\n    const addedProjects = document.getElementById(\"nav-added-projects\");\n    const projectElement = document.createElement(\"div\");\n    projectElement.setAttribute(\"class\", \"nav-added-projects\");\n    projectElement.innerHTML = `\n      <div class=\"project-name\">${name}</div>\n      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" class=\"project-delete\" id=\"nav-projects-icon\">\n        <path fill=\"#000000\" d=\"M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7,13H17V11H7\" />\n      </svg>\n    `;\n    addedProjects.appendChild(projectElement);\n  }\n\n  const navAddProjectDataBase = (dbProject) => {\n    for (let i = 0; i < dbProject.length; i++) {\n      navAddProject(dbProject[i].name);\n    }\n  }\n\n  const navAddProjectPrompt = () => {\n    const container = document.getElementById(\"nav-add-projects\");\n    container.setAttribute(\"id\", \"nav-project-prompt-container\");\n    container.innerHTML = `\n      <div id=\"nav-project-prompt\">\n        <form action=\"#\">\n          <label for=\"project-name\">\n            <input type=\"text\" name=\"project-name\" id=\"project-name\" placeholder=\"Project Name\" required/>\n          </label>\n          <button type=\"submit\">Create</button>\n          <button type=\"reset\">Cancel</button>\n        </form>\n      </div>\n    `;\n  }\n\n  const navAddProjectButton = () => {\n    const container = document.getElementById(\"nav-project-prompt-container\");\n    container.setAttribute(\"id\", \"nav-add-projects\");\n    container.innerHTML = `\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" id=\"nav-projects-icon\">\n      <path fill=\"#000000\" d=\"M18 11H15V14H13V11H10V9H13V6H15V9H18M20 4V16H8V4H20M20 2H8C6.9 2 6 2.9 6 4V16C6 17.11 6.9 18 8 18H20C21.11 18 22 17.11 22 16V4C22 2.9 21.11 2 20 2M4 6H2V20C2 21.11 2.9 22 4 22H18V20H4V6Z\" />\n    </svg>\n    <div class=\"nav-label\">Add Project</div>\n    `\n  }\n\n  // TODO: Link this function with dbProject.\n  const navRemoveProject = (element) => {\n    element.remove();\n    // db.dbProject.splice()\n  }\n\n  return {start, menuToggle, navProjectToggle, navAddProject, navRemoveProject, navAddProjectPrompt, navAddProjectButton, navAddProjectDataBase};\n\n})();\n\n\n\n//# sourceURL=webpack://todo-list/./src/UI.js?");

/***/ }),

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showProject\": () => (/* binding */ showProject)\n/* harmony export */ });\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db */ \"./src/db.js\");\n// import { project, task, dbProject } from \"./db\";\n\n\nconst contentContainer = document.getElementById(\"content-container\");\n\nconst resetContentContainer = () => {\n  contentContainer.innerHTML = \"\";\n}\n\nconst taskTemplate = (task) => {\n  const taskContainer = document.createElement(\"div\");\n  taskContainer.setAttribute(\"class\", \"task\");\n\n  const taskTitleDescriptionContainer = document.createElement(\"div\");\n  taskTitleDescriptionContainer.setAttribute(\"id\", \"task-title-description\");\n\n  const taskTitle = document.createElement(\"div\");\n  taskTitle.setAttribute(\"id\", \"task-title\");\n  taskTitle.innerHTML = task.title;\n  taskTitleDescriptionContainer.appendChild(taskTitle);\n\n  const taskDescription = document.createElement(\"div\");\n  taskDescription.setAttribute(\"id\", \"task-description\");\n  taskDescription.innerHTML = task.description;\n  taskTitleDescriptionContainer.appendChild(taskDescription);\n\n  const taskDateOptionsContainer = document.createElement(\"div\");\n  taskDateOptionsContainer.setAttribute(\"id\", \"task-date-options\");\n\n  const taskDueDate = document.createElement(\"div\");\n  taskDueDate.setAttribute(\"id\", \"task-due-date\");\n  taskDueDate.innerHTML = task.dueDate;\n  taskDateOptionsContainer.appendChild(taskDueDate);\n\n  const taskEdit = document.createElement(\"div\");\n  taskEdit.setAttribute(\"class\", \"task-svg\");\n  taskEdit.setAttribute(\"id\", \"task-edit\");\n  taskEdit.innerHTML = `\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\n      <path fill=\"#000000\" d=\"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z\" />\n    </svg>\n  `;\n  taskDateOptionsContainer.appendChild(taskEdit);\n\n  const taskDelete = document.createElement(\"div\");\n  taskDelete.setAttribute(\"class\", \"task-svg\");\n  taskDelete.setAttribute(\"id\", \"task-delete\");\n  taskDelete.innerHTML = `\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\n      <path fill=\"#000000\" d=\"M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z\" />\n    </svg>\n  `;\n  taskDateOptionsContainer.appendChild(taskDelete);\n\n  taskContainer.appendChild(taskTitleDescriptionContainer);\n  taskContainer.appendChild(taskDateOptionsContainer);\n\n  contentContainer.appendChild(taskContainer);\n}\n\nconst projectTitle = (projectObject) => {\n  const titleContainer = document.createElement(\"div\");\n  titleContainer.setAttribute(\"id\", \"task-project-title\");\n\n  const projectTitle = projectObject.name;\n  titleContainer.innerText = projectTitle;\n\n  contentContainer.appendChild(titleContainer);\n}\n\n// BUG: project.getTasks() will render error if project has no tasks.\nconst showProject = (projectName) => {\n  const project = getProject(projectName);\n  const tasks = project.getTasks();\n\n  console.log(\"tasks: \", tasks);\n\n  resetContentContainer();\n  projectTitle(project);\n  for (let i = 0; i < tasks.length; i++) {\n    taskTemplate(tasks[i]);\n  }\n  addTaskButton();\n}\n\nconst showInbox = (projectName) => {\n\n}\n\nconst showToday = () => {\n\n}\n\nconst getProject = (projectName) => {\n  let tempProject;\n  for (let i = 0; i < _db__WEBPACK_IMPORTED_MODULE_0__.dbProject.length; i++) {\n    let dbProject = _db__WEBPACK_IMPORTED_MODULE_0__.dbProject[i].name;\n    if (projectName == dbProject) {\n      tempProject = _db__WEBPACK_IMPORTED_MODULE_0__.dbProject[i];\n      break;\n    }\n  }\n\n  if (tempProject) {\n    return tempProject;\n  } else {\n    console.log(\"'content.getProject'couldn't find project\");\n  }\n}\n\nconst addTaskButton = () => {\n  let buttonContainer = document.createElement(\"div\");\n  buttonContainer.setAttribute(\"id\", \"task-create-button\");\n\n  let buttonText = document.createElement(\"div\");\n  buttonText.setAttribute(\"id\", \"task-create-button-text\");\n  buttonText.innerText = \"Add Task\";\n\n  buttonContainer.appendChild(buttonText);\n\n  contentContainer.appendChild(buttonContainer);\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/content.js?");

/***/ }),

/***/ "./src/db.js":
/*!*******************!*\
  !*** ./src/db.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dbProject\": () => (/* binding */ dbProject),\n/* harmony export */   \"project\": () => (/* binding */ project),\n/* harmony export */   \"task\": () => (/* binding */ task)\n/* harmony export */ });\nconst project = (name) => {\n  const taskList = [];\n  const getTasks = () => {\n    return taskList;\n  }\n  const setTask = (task) => {\n    taskList.push(task);\n  }\n  const removeTask = (taskName) => {\n    const taskIndex = taskList.indexOf(taskName);\n    taskList.splice(taskIndex, 1);\n  }\n  return {name, getTasks, setTask, removeTask};\n}\n\nconst task = (title, description, dueDate, priority) => {\n  const status = false;\n  const getStatus = () => {\n    return status;\n  }\n  const setStatus = () => {\n    if (status == false) {\n      status = true;\n    } else {\n      status = false;\n    }\n  }\n  return {title, description, dueDate, priority, getStatus, setStatus};\n}\n\n// Temporary location for storing projects\nlet dbProject = [];\n\n\n\n//# sourceURL=webpack://todo-list/./src/db.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./db */ \"./src/db.js\");\n/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content */ \"./src/content.js\");\n\n\n\n\n\n_UI__WEBPACK_IMPORTED_MODULE_1__.ui.start();\n\ndocument.querySelector(\"#menu-icon\").addEventListener(\"click\", _UI__WEBPACK_IMPORTED_MODULE_1__.ui.menuToggle);\n\ndocument.querySelector(\"#nav-projects\").addEventListener(\"click\", _UI__WEBPACK_IMPORTED_MODULE_1__.ui.navProjectToggle);\n\n// TODO: Replace generic project id counter with object property\n//       Refactor querySelector to include \"Menu\" and \"Today\", then\n//       create listener function to sort out each of the 3 nav choices.\nlet iProject = 0\nconst addProjectContainer = document.querySelector(\"#nav-add-projects\")\naddProjectContainer.addEventListener(\"click\", projectForm);\n\nfunction projectForm () {\n  _UI__WEBPACK_IMPORTED_MODULE_1__.ui.navAddProjectPrompt();\n  addProjectContainer.removeEventListener(\"click\", projectForm);\n  projectFormScan();\n  projectListScan();\n}\n\nfunction projectFormScan() {\n  const projectFormContainer = document.querySelector(\"form\");\n  projectFormContainer.addEventListener(\"submit\", function(e) {\n    e.preventDefault();\n    const projectName = this['project-name'].value;\n    _UI__WEBPACK_IMPORTED_MODULE_1__.ui.navAddProject(projectName);\n    _UI__WEBPACK_IMPORTED_MODULE_1__.ui.navAddProjectButton();\n    addProjectContainer.addEventListener(\"click\", projectForm);\n    projectListScan();\n  })\n  projectFormContainer.addEventListener(\"reset\", function(e) {\n    _UI__WEBPACK_IMPORTED_MODULE_1__.ui.navAddProjectButton();\n    addProjectContainer.addEventListener(\"click\", projectForm);\n  });\n}\n\nfunction projectListScan() {\n  let projects = document.querySelectorAll(\".nav-added-projects\");\n  projects.forEach(addedProject => {\n    addedProject.addEventListener(\"click\", projectListEvent);\n  });\n}\n\n// TODO: Add project object logic to decision tree\nfunction projectListEvent(e) {\n  if (e.target.tagName == \"DIV\") {\n    console.log(\"div\");\n    const projectName = e.target.innerText;\n    // content.showProjectContent(projectName)\n    _content__WEBPACK_IMPORTED_MODULE_3__.showProject(projectName);\n  } else if (e.target.tagName == \"svg\") {\n    // const index = e.path[1].id;\n    const element = e.path[1];\n    _UI__WEBPACK_IMPORTED_MODULE_1__.ui.navRemoveProject(element);\n  } else if (e.target.tagName == \"path\") {\n    const element = e.path[2];\n    _UI__WEBPACK_IMPORTED_MODULE_1__.ui.navRemoveProject(element)\n  } else {\n    console.log(e.target.tagName);\n  }\n  projectListScan();\n}\n\nfunction addTestProject() {\n  const project1 = (0,_db__WEBPACK_IMPORTED_MODULE_2__.project)(\"Test Project\");\n  _db__WEBPACK_IMPORTED_MODULE_2__.dbProject.push(project1);\n  const task1 = (0,_db__WEBPACK_IMPORTED_MODULE_2__.task)(\"test task\", \"test description\", \"any date\", \"medium\");\n  project1.setTask(task1);\n  console.log(\"adding project db to nav\");\n  _UI__WEBPACK_IMPORTED_MODULE_1__.ui.navAddProjectDataBase(_db__WEBPACK_IMPORTED_MODULE_2__.dbProject);\n  projectListScan();\n}\n\naddTestProject();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;