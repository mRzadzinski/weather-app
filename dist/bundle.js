/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/background.jpg */ "./src/img/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@200;300&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: black;\n  color: white;\n  margin: 0;\n  font-family: 'Hanken Grotesk', sans-serif;\n  width: 100vw;\n  height: 100vh; }\n  body::before {\n    content: '';\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    bottom: 0px;\n    left: 0px;\n    margin: auto;\n    max-height: 1298px;\n    max-width: 2304px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center center;\n    opacity: 0.7; }\n\n.container {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 40px;\n  width: 100vw;\n  height: 100vh; }\n\n.form-control {\n  width: 300px;\n  height: 40px;\n  background-color: rgba(0, 0, 0, 0.5);\n  color: white;\n  font-size: 1.2rem;\n  font-weight: 200;\n  border: solid 1px rgba(255, 255, 255, 0.5); }\n  .form-control:focus {\n    background-color: rgba(0, 0, 0, 0.6);\n    color: white;\n    border-color: white;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075); }\n  .form-control::placeholder {\n    color: white;\n    opacity: 0.6; }\n\ni.fa-magnifying-glass {\n  position: relative;\n  top: 33px;\n  left: 270px;\n  z-index: 2;\n  color: white;\n  opacity: 0.7;\n  cursor: pointer; }\n\n.form-group {\n  margin: 0; }\n\n.info {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 100px; }\n\n.left,\n.right,\n.switch-container {\n  display: grid;\n  width: 270px;\n  height: 300px;\n  background-color: rgba(0, 0, 0, 0.5);\n  border: solid rgba(255, 255, 255, 0.4) 1px;\n  border-radius: 20px;\n  padding: 20px; }\n\n.left {\n  grid-template: 1fr 0.3fr 1fr / 1.2fr 1fr;\n  padding-bottom: 40px;\n  gap: 20px;\n  align-items: end;\n  word-wrap: break-word;\n  line-height: 35px; }\n\n.city,\n.overview,\n.temp {\n  opacity: 0.9; }\n\n.city {\n  grid-area: 1 / 1 / 2 / 3;\n  font-size: 30px;\n  opacity: 0.5; }\n\n.overview {\n  grid-area: 2 / 1 / 3 / 3;\n  font-size: 20px;\n  margin-top: -20px; }\n\n.temp {\n  grid-area: 3 / 1 / 4 / 2;\n  align-self: start;\n  font-size: 40px; }\n\n.weather-icon-container {\n  grid-area: 3 / 2 / 4 / 3;\n  align-self: start;\n  margin-top: -30px;\n  border-radius: 100%;\n  width: 95px;\n  height: 96px; }\n\n#weather-icon {\n  transform: scale(1.2); }\n\n.right {\n  grid-template: repeat(4, 1fr)/1fr 1.5fr;\n  align-items: center;\n  grid-template-areas: 'feels-title feels-value' 'hum-title hum-value' 'press-title press-value' 'wind-title wind-value'; }\n\n.feels-like.title {\n  grid-area: feels-title; }\n\n.feels-like.value {\n  grid-area: feels-value; }\n\n.humidity.title {\n  grid-area: hum-title; }\n\n.humidity.value {\n  grid-area: hum-value; }\n\n.pressure.title {\n  grid-area: press-title; }\n\n.pressure.value {\n  grid-area: press-value; }\n\n.wind-speed.title {\n  grid-area: wind-title; }\n\n.wind-speed.value {\n  grid-area: wind-value; }\n\n.title {\n  font-size: 13px;\n  opacity: 0.6; }\n\n.value {\n  font-size: 27px;\n  opacity: 0.8; }\n\n.switch-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 25px;\n  width: 200px;\n  height: 55px;\n  padding: 0; }\n\n.celsius,\n.fahrenheit {\n  font-size: 20px;\n  opacity: 0.9; }\n\n/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 25px; }\n\nlabel {\n  margin: 0; }\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0; }\n\n/* Toggle frame */\n.toggle {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(255, 255, 255, 0.7);\n  -webkit-transition: 0.4s;\n  transition: 0.4s; }\n\n/* Toggle ball */\n.toggle:before {\n  position: absolute;\n  content: '';\n  height: 18px;\n  width: 18px;\n  left: 4px;\n  bottom: 4px;\n  background-color: rgba(0, 0, 0, 0.7);\n  -webkit-transition: 0.4s;\n  transition: 0.4s; }\n\ninput:checked + .toggle {\n  background-color: rgba(255, 255, 255, 0.7); }\n\ninput:checked + .toggle:before {\n  -webkit-transform: translateX(24px);\n  -ms-transform: translateX(24px);\n  transform: translateX(24px); }\n\n/* Rounded sliders */\n.toggle.round {\n  border-radius: 34px; }\n\n.toggle.round:before {\n  border-radius: 50%; }\n", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@200;300&display=swap');\n\nbody {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tbackground-color: black;\n\tcolor: white;\n\tmargin: 0;\n\tfont-family: 'Hanken Grotesk', sans-serif;\n\n\twidth: 100vw;\n\theight: 100vh;\n\n\t&::before {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\ttop: 0px;\n\t\tright: 0px;\n\t\tbottom: 0px;\n\t\tleft: 0px;\n\t\tmargin: auto;\n\t\tmax-height: 1298px;\n\t\tmax-width: 2304px;\n\n\t\tbackground-image: url(./img/background.jpg);\n\t\tbackground-size: cover;\n\t\tbackground-repeat: no-repeat;\n\t\tbackground-position: center center;\n\t\topacity: 0.7;\n\t}\n}\n\n.container {\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 40px;\n\n\twidth: 100vw;\n\theight: 100vh;\n}\n\n// Override bootstrap input style\n.form-control {\n\twidth: 300px;\n\theight: 40px;\n\tbackground-color: rgba(black, 0.5);\n\tcolor: white;\n\tfont-size: 1.2rem;\n\tfont-weight: 200;\n\tborder: solid 1px rgba($color: white, $alpha: 0.5);\n\n\t&:focus {\n\t\tbackground-color: rgba(black, 0.6);\n\t\tcolor: white;\n\t\tborder-color: rgb(255, 255, 255);\n\t\tbox-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n\t}\n\n\t&::placeholder {\n\t\tcolor: white;\n\t\topacity: 0.6;\n\t}\n}\n\ni.fa-magnifying-glass {\n\tposition: relative;\n\ttop: 33px;\n\tleft: 270px;\n\tz-index: 2;\n\tcolor: white;\n\topacity: 0.7;\n\tcursor: pointer;\n}\n\n.form-group {\n\tmargin: 0;\n}\n\n.info {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 100px;\n}\n\n.left,\n.right,\n.switch-container {\n\tdisplay: grid;\n\twidth: 270px;\n\theight: 300px;\n\tbackground-color: rgba(black, 0.5);\n\tborder: solid rgba($color: white, $alpha: 0.4) 1px;\n\tborder-radius: 20px;\n\tpadding: 20px;\n}\n\n.left {\n\tgrid-template: 1fr 0.3fr 1fr / 1.2fr 1fr;\n\tpadding-bottom: 40px;\n\tgap: 20px;\n\talign-items: end;\n\tword-wrap: break-word;\n\tline-height: 35px;\n}\n\n.city,\n.overview,\n.temp {\n\topacity: 0.9;\n}\n\n.city {\n\tgrid-area: 1 / 1 / 2 / 3;\n\tfont-size: 30px;\n\topacity: 0.5;\n}\n\n.overview {\n\tgrid-area: 2 / 1 / 3 / 3;\n\tfont-size: 20px;\n\tmargin-top: -20px;\n}\n\n.temp {\n\tgrid-area: 3 / 1 / 4 / 2;\n\talign-self: start;\n\tfont-size: 40px;\n}\n\n.weather-icon-container {\n\tgrid-area: 3 / 2 / 4 / 3;\n\talign-self: start;\n\n\tmargin-top: -30px;\n\tborder-radius: 100%;\n\twidth: 95px;\n\theight: 96px;\n}\n\n#weather-icon {\n\ttransform: scale(1.2);\n}\n\n.right {\n\tgrid-template: repeat(4, 1fr) / 1fr 1.5fr;\n\talign-items: center;\n\n\tgrid-template-areas:\n\t\t'feels-title feels-value'\n\t\t'hum-title hum-value'\n\t\t'press-title press-value'\n\t\t'wind-title wind-value';\n}\n\n.feels-like.title {\n\tgrid-area: feels-title;\n}\n\n.feels-like.value {\n\tgrid-area: feels-value;\n}\n\n.humidity.title {\n\tgrid-area: hum-title;\n}\n\n.humidity.value {\n\tgrid-area: hum-value;\n}\n\n.pressure.title {\n\tgrid-area: press-title;\n}\n\n.pressure.value {\n\tgrid-area: press-value;\n}\n\n.wind-speed.title {\n\tgrid-area: wind-title;\n}\n\n.wind-speed.value {\n\tgrid-area: wind-value;\n}\n\n.title {\n\tfont-size: 13px;\n\topacity: 0.6;\n}\n\n.value {\n\tfont-size: 27px;\n\topacity: 0.8;\n}\n\n.switch-container {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 25px;\n\n\twidth: 200px;\n\theight: 55px;\n\tpadding: 0;\n}\n\n.celsius,\n.fahrenheit {\n\tfont-size: 20px;\n\topacity: 0.9;\n}\n\n// Copy switch from my Etch a sketch project\n/* The switch - the box around the slider */\n.switch {\n\tposition: relative;\n\tdisplay: inline-block;\n\twidth: 50px;\n\theight: 25px;\n}\n\nlabel {\n\tmargin: 0;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n\topacity: 0;\n\twidth: 0;\n\theight: 0;\n}\n\n/* Toggle frame */\n.toggle {\n\tposition: absolute;\n\tcursor: pointer;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tbackground-color: rgba($color: white, $alpha: 0.7);\n\t-webkit-transition: 0.4s;\n\ttransition: 0.4s;\n}\n\n/* Toggle ball */\n.toggle:before {\n\tposition: absolute;\n\tcontent: '';\n\theight: 18px;\n\twidth: 18px;\n\tleft: 4px;\n\tbottom: 4px;\n\tbackground-color: rgba(black, 0.7);\n\t-webkit-transition: 0.4s;\n\ttransition: 0.4s;\n}\n\ninput:checked + .toggle {\n\tbackground-color: rgba($color: white, $alpha: 0.7);\n}\n\ninput:checked + .toggle:before {\n\t-webkit-transform: translateX(24px);\n\t-ms-transform: translateX(24px);\n\ttransform: translateX(24px);\n}\n\n/* Rounded sliders */\n.toggle.round {\n\tborder-radius: 34px;\n}\n\n.toggle.round:before {\n\tborder-radius: 50%;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/img/background.jpg":
/*!********************************!*\
  !*** ./src/img/background.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "531b506cee46fdd5e29e.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");


// Api key: c2b8d97dd945c77049effafc8232d410
// link: https://api.openweathermap.org/data/2.5/weather?q=London&APPID=c2b8d97dd945c77049effafc8232d410

const cityInput = document.querySelector('input');
const searchIcon = document.querySelector('.fa-magnifying-glass');
const checkbox = document.querySelector('#checkbox');

const city = document.querySelector('.city');
const overview = document.querySelector('.overview');
const temp = document.querySelector('.temp');
const weatherIcon = document.querySelector('#weather-icon');

const feelsLike = document.querySelector('.feels-like.value');
const humidity = document.querySelector('.humidity.value');
const pressure = document.querySelector('.pressure.value');
const windSpeed = document.querySelector('.wind-speed.value');

const weatherData = {};
let units;

function getURL() {
	let inputValue = cityInput.value;

	if (!inputValue) {
		inputValue = 'los angeles';
	}

	if (checkbox.checked === false) {
		units = 'metric';
	} else if (checkbox.checked === true) {
		units = 'imperial';
	}

	let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=${units}&APPID=c2b8d97dd945c77049effafc8232d410`;
	return url;
}

function updateWeatherIcon() {
	weatherIcon.src = `https://openweathermap.org/img/wn/${weatherData.iconCode}@2x.png`;
}

async function getJSON() {
	try {
		let data = await fetch(getURL(), {
			mode: 'cors',
		});

		let json = await data.json();
		return json;
	} catch (err) {
		return console.error(err);
	}
}

async function extractJSON() {
	try {
		let result = await getJSON();

		if (result.cod !== 200) {
			// Capitalize first letter
			city.innerHTML =
				result.message.charAt(0).toUpperCase() + result.message.slice(1);
			overview.innerHTML = '';
			humidity.innerHTML = '';
			pressure.innerHTML = '';
			temp.innerHTML = '';
			feelsLike.innerHTML = '';
			windSpeed.innerHTML = '';

			return false;
		}

		// eslint-disable-next-line prefer-destructuring
		let description = result.weather['0'].description;

		weatherData.overview =
			// Capitalize first letter
			description.charAt(0).toUpperCase() + description.slice(1);
		weatherData.cityName = result.name;
		weatherData.temp = Math.round(result.main.temp);
		weatherData.feelsLike = Math.round(result.main.feels_like);
		weatherData.humidity = Math.round(result.main.humidity);
		weatherData.pressure = Math.round(result.main.pressure);
		weatherData.windSpeed = Math.round(result.wind.speed);
		weatherData.iconCode = result.weather['0'].icon;
	} catch (err) {
		console.log(err);
	}
	return true;
}

function populateHTML() {
	city.innerHTML = weatherData.cityName;
	overview.innerHTML = weatherData.overview;
	humidity.innerHTML = `${weatherData.humidity} %`;
	pressure.innerHTML = `${weatherData.pressure} hPa`;

	if (units === 'metric') {
		temp.innerHTML = `${weatherData.temp} °C`;
		feelsLike.innerHTML = `${weatherData.feelsLike} °C`;
		windSpeed.innerHTML = `${weatherData.windSpeed} m/s`;
	} else if (units === 'imperial') {
		temp.innerHTML = `${weatherData.temp} °F`;
		feelsLike.innerHTML = `${weatherData.feelsLike} °F`;
		windSpeed.innerHTML = `${weatherData.windSpeed} mph`;
	}
}

async function fetchAndPrint() {
	try {
		let successCheck = await extractJSON();
		if (successCheck === false) return;

		updateWeatherIcon();
		populateHTML();
	} catch (err) {
		console.log(err);
	}
}

document.addEventListener('DOMContentLoaded', () => fetchAndPrint());

document.addEventListener('keypress', (e) => {
	if (document.activeElement === cityInput && e.key === 'Enter') {
		fetchAndPrint();
	}
});

searchIcon.onclick = () => fetchAndPrint();
checkbox.onclick = () => fetchAndPrint();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixzQkFBc0I7QUFDL0MseUJBQXlCLHNCQUFzQjs7QUFFL0M7QUFDQSxzQkFBc0Isa0JBQWtCO0FBQ3hDLDJCQUEyQix1QkFBdUI7QUFDbEQsMkJBQTJCLHVCQUF1QjtBQUNsRCxHQUFHO0FBQ0gsc0JBQXNCLGtCQUFrQjtBQUN4QywyQkFBMkIsdUJBQXVCO0FBQ2xELDJCQUEyQix1QkFBdUI7QUFDbEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SGFua2VuK0dyb3Rlc2s6d2dodEAyMDA7MzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiAnSGFua2VuIEdyb3Rlc2snLCBzYW5zLXNlcmlmO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDsgfVxcbiAgYm9keTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwcHg7XFxuICAgIHJpZ2h0OiAwcHg7XFxuICAgIGJvdHRvbTogMHB4O1xcbiAgICBsZWZ0OiAwcHg7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgbWF4LWhlaWdodDogMTI5OHB4O1xcbiAgICBtYXgtd2lkdGg6IDIzMDRweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG4gICAgb3BhY2l0eTogMC43OyB9XFxuXFxuLmNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNDBweDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7IH1cXG5cXG4uZm9ybS1jb250cm9sIHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTsgfVxcbiAgLmZvcm0tY29udHJvbDpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA3NSk7IH1cXG4gIC5mb3JtLWNvbnRyb2w6OnBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBvcGFjaXR5OiAwLjY7IH1cXG5cXG5pLmZhLW1hZ25pZnlpbmctZ2xhc3Mge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAzM3B4O1xcbiAgbGVmdDogMjcwcHg7XFxuICB6LWluZGV4OiAyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgb3BhY2l0eTogMC43O1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLmZvcm0tZ3JvdXAge1xcbiAgbWFyZ2luOiAwOyB9XFxuXFxuLmluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTAwcHg7IH1cXG5cXG4ubGVmdCxcXG4ucmlnaHQsXFxuLnN3aXRjaC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHdpZHRoOiAyNzBweDtcXG4gIGhlaWdodDogMzAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBib3JkZXI6IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSAxcHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgcGFkZGluZzogMjBweDsgfVxcblxcbi5sZWZ0IHtcXG4gIGdyaWQtdGVtcGxhdGU6IDFmciAwLjNmciAxZnIgLyAxLjJmciAxZnI7XFxuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcXG4gIGdhcDogMjBweDtcXG4gIGFsaWduLWl0ZW1zOiBlbmQ7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICBsaW5lLWhlaWdodDogMzVweDsgfVxcblxcbi5jaXR5LFxcbi5vdmVydmlldyxcXG4udGVtcCB7XFxuICBvcGFjaXR5OiAwLjk7IH1cXG5cXG4uY2l0eSB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDM7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBvcGFjaXR5OiAwLjU7IH1cXG5cXG4ub3ZlcnZpZXcge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAzO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbWFyZ2luLXRvcDogLTIwcHg7IH1cXG5cXG4udGVtcCB7XFxuICBncmlkLWFyZWE6IDMgLyAxIC8gNCAvIDI7XFxuICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gIGZvbnQtc2l6ZTogNDBweDsgfVxcblxcbi53ZWF0aGVyLWljb24tY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogMyAvIDIgLyA0IC8gMztcXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgbWFyZ2luLXRvcDogLTMwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgd2lkdGg6IDk1cHg7XFxuICBoZWlnaHQ6IDk2cHg7IH1cXG5cXG4jd2VhdGhlci1pY29uIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTsgfVxcblxcbi5yaWdodCB7XFxuICBncmlkLXRlbXBsYXRlOiByZXBlYXQoNCwgMWZyKS8xZnIgMS41ZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2ZlZWxzLXRpdGxlIGZlZWxzLXZhbHVlJyAnaHVtLXRpdGxlIGh1bS12YWx1ZScgJ3ByZXNzLXRpdGxlIHByZXNzLXZhbHVlJyAnd2luZC10aXRsZSB3aW5kLXZhbHVlJzsgfVxcblxcbi5mZWVscy1saWtlLnRpdGxlIHtcXG4gIGdyaWQtYXJlYTogZmVlbHMtdGl0bGU7IH1cXG5cXG4uZmVlbHMtbGlrZS52YWx1ZSB7XFxuICBncmlkLWFyZWE6IGZlZWxzLXZhbHVlOyB9XFxuXFxuLmh1bWlkaXR5LnRpdGxlIHtcXG4gIGdyaWQtYXJlYTogaHVtLXRpdGxlOyB9XFxuXFxuLmh1bWlkaXR5LnZhbHVlIHtcXG4gIGdyaWQtYXJlYTogaHVtLXZhbHVlOyB9XFxuXFxuLnByZXNzdXJlLnRpdGxlIHtcXG4gIGdyaWQtYXJlYTogcHJlc3MtdGl0bGU7IH1cXG5cXG4ucHJlc3N1cmUudmFsdWUge1xcbiAgZ3JpZC1hcmVhOiBwcmVzcy12YWx1ZTsgfVxcblxcbi53aW5kLXNwZWVkLnRpdGxlIHtcXG4gIGdyaWQtYXJlYTogd2luZC10aXRsZTsgfVxcblxcbi53aW5kLXNwZWVkLnZhbHVlIHtcXG4gIGdyaWQtYXJlYTogd2luZC12YWx1ZTsgfVxcblxcbi50aXRsZSB7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBvcGFjaXR5OiAwLjY7IH1cXG5cXG4udmFsdWUge1xcbiAgZm9udC1zaXplOiAyN3B4O1xcbiAgb3BhY2l0eTogMC44OyB9XFxuXFxuLnN3aXRjaC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMjVweDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogNTVweDtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG4uY2Vsc2l1cyxcXG4uZmFocmVuaGVpdCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBvcGFjaXR5OiAwLjk7IH1cXG5cXG4vKiBUaGUgc3dpdGNoIC0gdGhlIGJveCBhcm91bmQgdGhlIHNsaWRlciAqL1xcbi5zd2l0Y2gge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDI1cHg7IH1cXG5cXG5sYWJlbCB7XFxuICBtYXJnaW46IDA7IH1cXG5cXG4vKiBIaWRlIGRlZmF1bHQgSFRNTCBjaGVja2JveCAqL1xcbi5zd2l0Y2ggaW5wdXQge1xcbiAgb3BhY2l0eTogMDtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwOyB9XFxuXFxuLyogVG9nZ2xlIGZyYW1lICovXFxuLnRvZ2dsZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XFxuICB0cmFuc2l0aW9uOiAwLjRzOyB9XFxuXFxuLyogVG9nZ2xlIGJhbGwgKi9cXG4udG9nZ2xlOmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiAnJztcXG4gIGhlaWdodDogMThweDtcXG4gIHdpZHRoOiAxOHB4O1xcbiAgbGVmdDogNHB4O1xcbiAgYm90dG9tOiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XFxuICB0cmFuc2l0aW9uOiAwLjRzOyB9XFxuXFxuaW5wdXQ6Y2hlY2tlZCArIC50b2dnbGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpOyB9XFxuXFxuaW5wdXQ6Y2hlY2tlZCArIC50b2dnbGU6YmVmb3JlIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI0cHgpO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNHB4KTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNHB4KTsgfVxcblxcbi8qIFJvdW5kZWQgc2xpZGVycyAqL1xcbi50b2dnbGUucm91bmQge1xcbiAgYm9yZGVyLXJhZGl1czogMzRweDsgfVxcblxcbi50b2dnbGUucm91bmQ6YmVmb3JlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0MsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixTQUFTO0VBQ1QseUNBQXlDO0VBRXpDLFlBQVk7RUFDWixhQUFhLEVBQUE7RUFWZDtJQWFFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7SUFDVixXQUFXO0lBQ1gsU0FBUztJQUNULFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBRWpCLHlEQUEyQztJQUMzQyxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLGtDQUFrQztJQUNsQyxZQUFZLEVBQUE7O0FBSWQ7RUFDQyxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFNBQVM7RUFFVCxZQUFZO0VBQ1osYUFBYSxFQUFBOztBQUlkO0VBQ0MsWUFBWTtFQUNaLFlBQVk7RUFDWixvQ0FBNEI7RUFDNUIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsMENBQW9DLEVBQUE7RUFQckM7SUFVRSxvQ0FBNEI7SUFDNUIsWUFBWTtJQUNaLG1CQUFnQztJQUNoQyxnREFBZ0QsRUFBQTtFQWJsRDtJQWlCRSxZQUFZO0lBQ1osWUFBWSxFQUFBOztBQUlkO0VBQ0Msa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsVUFBVTtFQUNWLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZSxFQUFBOztBQUdoQjtFQUNDLFNBQVMsRUFBQTs7QUFHVjtFQUNDLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFVBQVUsRUFBQTs7QUFHWDs7O0VBR0MsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0NBQTRCO0VBQzVCLDBDQUFrRDtFQUNsRCxtQkFBbUI7RUFDbkIsYUFBYSxFQUFBOztBQUdkO0VBQ0Msd0NBQXdDO0VBQ3hDLG9CQUFvQjtFQUNwQixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixpQkFBaUIsRUFBQTs7QUFHbEI7OztFQUdDLFlBQVksRUFBQTs7QUFHYjtFQUNDLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsWUFBWSxFQUFBOztBQUdiO0VBQ0Msd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixpQkFBaUIsRUFBQTs7QUFHbEI7RUFDQyx3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFHaEI7RUFDQyx3QkFBd0I7RUFDeEIsaUJBQWlCO0VBRWpCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHYjtFQUNDLHFCQUFxQixFQUFBOztBQUd0QjtFQUNDLHVDQUF5QztFQUN6QyxtQkFBbUI7RUFFbkIsc0hBSXdCLEVBQUE7O0FBR3pCO0VBQ0Msc0JBQXNCLEVBQUE7O0FBR3ZCO0VBQ0Msc0JBQXNCLEVBQUE7O0FBR3ZCO0VBQ0Msb0JBQW9CLEVBQUE7O0FBR3JCO0VBQ0Msb0JBQW9CLEVBQUE7O0FBR3JCO0VBQ0Msc0JBQXNCLEVBQUE7O0FBR3ZCO0VBQ0Msc0JBQXNCLEVBQUE7O0FBR3ZCO0VBQ0MscUJBQXFCLEVBQUE7O0FBR3RCO0VBQ0MscUJBQXFCLEVBQUE7O0FBR3RCO0VBQ0MsZUFBZTtFQUNmLFlBQVksRUFBQTs7QUFHYjtFQUNDLGVBQWU7RUFDZixZQUFZLEVBQUE7O0FBR2I7RUFDQyxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0VBRVQsWUFBWTtFQUNaLFlBQVk7RUFDWixVQUFVLEVBQUE7O0FBR1g7O0VBRUMsZUFBZTtFQUNmLFlBQVksRUFBQTs7QUFJYiwyQ0FBQTtBQUNBO0VBQ0Msa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdiO0VBQ0MsU0FBUyxFQUFBOztBQUdWLCtCQUFBO0FBQ0E7RUFDQyxVQUFVO0VBQ1YsUUFBUTtFQUNSLFNBQVMsRUFBQTs7QUFHVixpQkFBQTtBQUNBO0VBQ0Msa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1QsMENBQW9DO0VBQ3BDLHdCQUF3QjtFQUN4QixnQkFBZ0IsRUFBQTs7QUFHakIsZ0JBQUE7QUFDQTtFQUNDLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxTQUFTO0VBQ1QsV0FBVztFQUNYLG9DQUE0QjtFQUM1Qix3QkFBd0I7RUFDeEIsZ0JBQWdCLEVBQUE7O0FBR2pCO0VBQ0MsMENBQW9DLEVBQUE7O0FBR3JDO0VBQ0MsbUNBQW1DO0VBQ25DLCtCQUErQjtFQUMvQiwyQkFBMkIsRUFBQTs7QUFHNUIsb0JBQUE7QUFDQTtFQUNDLG1CQUFtQixFQUFBOztBQUdwQjtFQUNDLGtCQUFrQixFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUhhbmtlbitHcm90ZXNrOndnaHRAMjAwOzMwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG5ib2R5IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdG1hcmdpbjogMDtcXG5cXHRmb250LWZhbWlseTogJ0hhbmtlbiBHcm90ZXNrJywgc2Fucy1zZXJpZjtcXG5cXG5cXHR3aWR0aDogMTAwdnc7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXG5cXHQmOjpiZWZvcmUge1xcblxcdFxcdGNvbnRlbnQ6ICcnO1xcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRcXHR0b3A6IDBweDtcXG5cXHRcXHRyaWdodDogMHB4O1xcblxcdFxcdGJvdHRvbTogMHB4O1xcblxcdFxcdGxlZnQ6IDBweDtcXG5cXHRcXHRtYXJnaW46IGF1dG87XFxuXFx0XFx0bWF4LWhlaWdodDogMTI5OHB4O1xcblxcdFxcdG1heC13aWR0aDogMjMwNHB4O1xcblxcblxcdFxcdGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltZy9iYWNrZ3JvdW5kLmpwZyk7XFxuXFx0XFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG5cXHRcXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcblxcdFxcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxuXFx0XFx0b3BhY2l0eTogMC43O1xcblxcdH1cXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogNDBweDtcXG5cXG5cXHR3aWR0aDogMTAwdnc7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLy8gT3ZlcnJpZGUgYm9vdHN0cmFwIGlucHV0IHN0eWxlXFxuLmZvcm0tY29udHJvbCB7XFxuXFx0d2lkdGg6IDMwMHB4O1xcblxcdGhlaWdodDogNDBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKGJsYWNrLCAwLjUpO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRmb250LXNpemU6IDEuMnJlbTtcXG5cXHRmb250LXdlaWdodDogMjAwO1xcblxcdGJvcmRlcjogc29saWQgMXB4IHJnYmEoJGNvbG9yOiB3aGl0ZSwgJGFscGhhOiAwLjUpO1xcblxcblxcdCY6Zm9jdXMge1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoYmxhY2ssIDAuNik7XFxuXFx0XFx0Y29sb3I6IHdoaXRlO1xcblxcdFxcdGJvcmRlci1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcblxcdFxcdGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcXG5cXHR9XFxuXFxuXFx0Jjo6cGxhY2Vob2xkZXIge1xcblxcdFxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRcXHRvcGFjaXR5OiAwLjY7XFxuXFx0fVxcbn1cXG5cXG5pLmZhLW1hZ25pZnlpbmctZ2xhc3Mge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR0b3A6IDMzcHg7XFxuXFx0bGVmdDogMjcwcHg7XFxuXFx0ei1pbmRleDogMjtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0b3BhY2l0eTogMC43O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmZvcm0tZ3JvdXAge1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxuLmluZm8ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDEwMHB4O1xcbn1cXG5cXG4ubGVmdCxcXG4ucmlnaHQsXFxuLnN3aXRjaC1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0d2lkdGg6IDI3MHB4O1xcblxcdGhlaWdodDogMzAwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYShibGFjaywgMC41KTtcXG5cXHRib3JkZXI6IHNvbGlkIHJnYmEoJGNvbG9yOiB3aGl0ZSwgJGFscGhhOiAwLjQpIDFweDtcXG5cXHRib3JkZXItcmFkaXVzOiAyMHB4O1xcblxcdHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5sZWZ0IHtcXG5cXHRncmlkLXRlbXBsYXRlOiAxZnIgMC4zZnIgMWZyIC8gMS4yZnIgMWZyO1xcblxcdHBhZGRpbmctYm90dG9tOiA0MHB4O1xcblxcdGdhcDogMjBweDtcXG5cXHRhbGlnbi1pdGVtczogZW5kO1xcblxcdHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG5cXHRsaW5lLWhlaWdodDogMzVweDtcXG59XFxuXFxuLmNpdHksXFxuLm92ZXJ2aWV3LFxcbi50ZW1wIHtcXG5cXHRvcGFjaXR5OiAwLjk7XFxufVxcblxcbi5jaXR5IHtcXG5cXHRncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDM7XFxuXFx0Zm9udC1zaXplOiAzMHB4O1xcblxcdG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLm92ZXJ2aWV3IHtcXG5cXHRncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDM7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcblxcdG1hcmdpbi10b3A6IC0yMHB4O1xcbn1cXG5cXG4udGVtcCB7XFxuXFx0Z3JpZC1hcmVhOiAzIC8gMSAvIDQgLyAyO1xcblxcdGFsaWduLXNlbGY6IHN0YXJ0O1xcblxcdGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuLndlYXRoZXItaWNvbi1jb250YWluZXIge1xcblxcdGdyaWQtYXJlYTogMyAvIDIgLyA0IC8gMztcXG5cXHRhbGlnbi1zZWxmOiBzdGFydDtcXG5cXG5cXHRtYXJnaW4tdG9wOiAtMzBweDtcXG5cXHRib3JkZXItcmFkaXVzOiAxMDAlO1xcblxcdHdpZHRoOiA5NXB4O1xcblxcdGhlaWdodDogOTZweDtcXG59XFxuXFxuI3dlYXRoZXItaWNvbiB7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5cXG4ucmlnaHQge1xcblxcdGdyaWQtdGVtcGxhdGU6IHJlcGVhdCg0LCAxZnIpIC8gMWZyIDEuNWZyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuXFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczpcXG5cXHRcXHQnZmVlbHMtdGl0bGUgZmVlbHMtdmFsdWUnXFxuXFx0XFx0J2h1bS10aXRsZSBodW0tdmFsdWUnXFxuXFx0XFx0J3ByZXNzLXRpdGxlIHByZXNzLXZhbHVlJ1xcblxcdFxcdCd3aW5kLXRpdGxlIHdpbmQtdmFsdWUnO1xcbn1cXG5cXG4uZmVlbHMtbGlrZS50aXRsZSB7XFxuXFx0Z3JpZC1hcmVhOiBmZWVscy10aXRsZTtcXG59XFxuXFxuLmZlZWxzLWxpa2UudmFsdWUge1xcblxcdGdyaWQtYXJlYTogZmVlbHMtdmFsdWU7XFxufVxcblxcbi5odW1pZGl0eS50aXRsZSB7XFxuXFx0Z3JpZC1hcmVhOiBodW0tdGl0bGU7XFxufVxcblxcbi5odW1pZGl0eS52YWx1ZSB7XFxuXFx0Z3JpZC1hcmVhOiBodW0tdmFsdWU7XFxufVxcblxcbi5wcmVzc3VyZS50aXRsZSB7XFxuXFx0Z3JpZC1hcmVhOiBwcmVzcy10aXRsZTtcXG59XFxuXFxuLnByZXNzdXJlLnZhbHVlIHtcXG5cXHRncmlkLWFyZWE6IHByZXNzLXZhbHVlO1xcbn1cXG5cXG4ud2luZC1zcGVlZC50aXRsZSB7XFxuXFx0Z3JpZC1hcmVhOiB3aW5kLXRpdGxlO1xcbn1cXG5cXG4ud2luZC1zcGVlZC52YWx1ZSB7XFxuXFx0Z3JpZC1hcmVhOiB3aW5kLXZhbHVlO1xcbn1cXG5cXG4udGl0bGUge1xcblxcdGZvbnQtc2l6ZTogMTNweDtcXG5cXHRvcGFjaXR5OiAwLjY7XFxufVxcblxcbi52YWx1ZSB7XFxuXFx0Zm9udC1zaXplOiAyN3B4O1xcblxcdG9wYWNpdHk6IDAuODtcXG59XFxuXFxuLnN3aXRjaC1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDI1cHg7XFxuXFxuXFx0d2lkdGg6IDIwMHB4O1xcblxcdGhlaWdodDogNTVweDtcXG5cXHRwYWRkaW5nOiAwO1xcbn1cXG5cXG4uY2Vsc2l1cyxcXG4uZmFocmVuaGVpdCB7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcblxcdG9wYWNpdHk6IDAuOTtcXG59XFxuXFxuLy8gQ29weSBzd2l0Y2ggZnJvbSBteSBFdGNoIGEgc2tldGNoIHByb2plY3RcXG4vKiBUaGUgc3dpdGNoIC0gdGhlIGJveCBhcm91bmQgdGhlIHNsaWRlciAqL1xcbi5zd2l0Y2gge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0d2lkdGg6IDUwcHg7XFxuXFx0aGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG5sYWJlbCB7XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4vKiBIaWRlIGRlZmF1bHQgSFRNTCBjaGVja2JveCAqL1xcbi5zd2l0Y2ggaW5wdXQge1xcblxcdG9wYWNpdHk6IDA7XFxuXFx0d2lkdGg6IDA7XFxuXFx0aGVpZ2h0OiAwO1xcbn1cXG5cXG4vKiBUb2dnbGUgZnJhbWUgKi9cXG4udG9nZ2xlIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdHRvcDogMDtcXG5cXHRsZWZ0OiAwO1xcblxcdHJpZ2h0OiAwO1xcblxcdGJvdHRvbTogMDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogd2hpdGUsICRhbHBoYTogMC43KTtcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XFxuXFx0dHJhbnNpdGlvbjogMC40cztcXG59XFxuXFxuLyogVG9nZ2xlIGJhbGwgKi9cXG4udG9nZ2xlOmJlZm9yZSB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGhlaWdodDogMThweDtcXG5cXHR3aWR0aDogMThweDtcXG5cXHRsZWZ0OiA0cHg7XFxuXFx0Ym90dG9tOiA0cHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYShibGFjaywgMC43KTtcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XFxuXFx0dHJhbnNpdGlvbjogMC40cztcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCArIC50b2dnbGUge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiB3aGl0ZSwgJGFscGhhOiAwLjcpO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgLnRvZ2dsZTpiZWZvcmUge1xcblxcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI0cHgpO1xcblxcdC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjRweCk7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI0cHgpO1xcbn1cXG5cXG4vKiBSb3VuZGVkIHNsaWRlcnMgKi9cXG4udG9nZ2xlLnJvdW5kIHtcXG5cXHRib3JkZXItcmFkaXVzOiAzNHB4O1xcbn1cXG5cXG4udG9nZ2xlLnJvdW5kOmJlZm9yZSB7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5cbi8vIEFwaSBrZXk6IGMyYjhkOTdkZDk0NWM3NzA0OWVmZmFmYzgyMzJkNDEwXG4vLyBsaW5rOiBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPUxvbmRvbiZBUFBJRD1jMmI4ZDk3ZGQ5NDVjNzcwNDllZmZhZmM4MjMyZDQxMFxuXG5jb25zdCBjaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuY29uc3Qgc2VhcmNoSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYS1tYWduaWZ5aW5nLWdsYXNzJyk7XG5jb25zdCBjaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGVja2JveCcpO1xuXG5jb25zdCBjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHknKTtcbmNvbnN0IG92ZXJ2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJ2aWV3Jyk7XG5jb25zdCB0ZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXAnKTtcbmNvbnN0IHdlYXRoZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dlYXRoZXItaWNvbicpO1xuXG5jb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVlbHMtbGlrZS52YWx1ZScpO1xuY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHkudmFsdWUnKTtcbmNvbnN0IHByZXNzdXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZXNzdXJlLnZhbHVlJyk7XG5jb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZC1zcGVlZC52YWx1ZScpO1xuXG5jb25zdCB3ZWF0aGVyRGF0YSA9IHt9O1xubGV0IHVuaXRzO1xuXG5mdW5jdGlvbiBnZXRVUkwoKSB7XG5cdGxldCBpbnB1dFZhbHVlID0gY2l0eUlucHV0LnZhbHVlO1xuXG5cdGlmICghaW5wdXRWYWx1ZSkge1xuXHRcdGlucHV0VmFsdWUgPSAnbG9zIGFuZ2VsZXMnO1xuXHR9XG5cblx0aWYgKGNoZWNrYm94LmNoZWNrZWQgPT09IGZhbHNlKSB7XG5cdFx0dW5pdHMgPSAnbWV0cmljJztcblx0fSBlbHNlIGlmIChjaGVja2JveC5jaGVja2VkID09PSB0cnVlKSB7XG5cdFx0dW5pdHMgPSAnaW1wZXJpYWwnO1xuXHR9XG5cblx0bGV0IHVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7aW5wdXRWYWx1ZX0mdW5pdHM9JHt1bml0c30mQVBQSUQ9YzJiOGQ5N2RkOTQ1Yzc3MDQ5ZWZmYWZjODIzMmQ0MTBgO1xuXHRyZXR1cm4gdXJsO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVXZWF0aGVySWNvbigpIHtcblx0d2VhdGhlckljb24uc3JjID0gYGh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke3dlYXRoZXJEYXRhLmljb25Db2RlfUAyeC5wbmdgO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRKU09OKCkge1xuXHR0cnkge1xuXHRcdGxldCBkYXRhID0gYXdhaXQgZmV0Y2goZ2V0VVJMKCksIHtcblx0XHRcdG1vZGU6ICdjb3JzJyxcblx0XHR9KTtcblxuXHRcdGxldCBqc29uID0gYXdhaXQgZGF0YS5qc29uKCk7XG5cdFx0cmV0dXJuIGpzb247XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdHJldHVybiBjb25zb2xlLmVycm9yKGVycik7XG5cdH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZXh0cmFjdEpTT04oKSB7XG5cdHRyeSB7XG5cdFx0bGV0IHJlc3VsdCA9IGF3YWl0IGdldEpTT04oKTtcblxuXHRcdGlmIChyZXN1bHQuY29kICE9PSAyMDApIHtcblx0XHRcdC8vIENhcGl0YWxpemUgZmlyc3QgbGV0dGVyXG5cdFx0XHRjaXR5LmlubmVySFRNTCA9XG5cdFx0XHRcdHJlc3VsdC5tZXNzYWdlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcmVzdWx0Lm1lc3NhZ2Uuc2xpY2UoMSk7XG5cdFx0XHRvdmVydmlldy5pbm5lckhUTUwgPSAnJztcblx0XHRcdGh1bWlkaXR5LmlubmVySFRNTCA9ICcnO1xuXHRcdFx0cHJlc3N1cmUuaW5uZXJIVE1MID0gJyc7XG5cdFx0XHR0ZW1wLmlubmVySFRNTCA9ICcnO1xuXHRcdFx0ZmVlbHNMaWtlLmlubmVySFRNTCA9ICcnO1xuXHRcdFx0d2luZFNwZWVkLmlubmVySFRNTCA9ICcnO1xuXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cdFx0bGV0IGRlc2NyaXB0aW9uID0gcmVzdWx0LndlYXRoZXJbJzAnXS5kZXNjcmlwdGlvbjtcblxuXHRcdHdlYXRoZXJEYXRhLm92ZXJ2aWV3ID1cblx0XHRcdC8vIENhcGl0YWxpemUgZmlyc3QgbGV0dGVyXG5cdFx0XHRkZXNjcmlwdGlvbi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGRlc2NyaXB0aW9uLnNsaWNlKDEpO1xuXHRcdHdlYXRoZXJEYXRhLmNpdHlOYW1lID0gcmVzdWx0Lm5hbWU7XG5cdFx0d2VhdGhlckRhdGEudGVtcCA9IE1hdGgucm91bmQocmVzdWx0Lm1haW4udGVtcCk7XG5cdFx0d2VhdGhlckRhdGEuZmVlbHNMaWtlID0gTWF0aC5yb3VuZChyZXN1bHQubWFpbi5mZWVsc19saWtlKTtcblx0XHR3ZWF0aGVyRGF0YS5odW1pZGl0eSA9IE1hdGgucm91bmQocmVzdWx0Lm1haW4uaHVtaWRpdHkpO1xuXHRcdHdlYXRoZXJEYXRhLnByZXNzdXJlID0gTWF0aC5yb3VuZChyZXN1bHQubWFpbi5wcmVzc3VyZSk7XG5cdFx0d2VhdGhlckRhdGEud2luZFNwZWVkID0gTWF0aC5yb3VuZChyZXN1bHQud2luZC5zcGVlZCk7XG5cdFx0d2VhdGhlckRhdGEuaWNvbkNvZGUgPSByZXN1bHQud2VhdGhlclsnMCddLmljb247XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdGNvbnNvbGUubG9nKGVycik7XG5cdH1cblx0cmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlSFRNTCgpIHtcblx0Y2l0eS5pbm5lckhUTUwgPSB3ZWF0aGVyRGF0YS5jaXR5TmFtZTtcblx0b3ZlcnZpZXcuaW5uZXJIVE1MID0gd2VhdGhlckRhdGEub3ZlcnZpZXc7XG5cdGh1bWlkaXR5LmlubmVySFRNTCA9IGAke3dlYXRoZXJEYXRhLmh1bWlkaXR5fSAlYDtcblx0cHJlc3N1cmUuaW5uZXJIVE1MID0gYCR7d2VhdGhlckRhdGEucHJlc3N1cmV9IGhQYWA7XG5cblx0aWYgKHVuaXRzID09PSAnbWV0cmljJykge1xuXHRcdHRlbXAuaW5uZXJIVE1MID0gYCR7d2VhdGhlckRhdGEudGVtcH0gwrBDYDtcblx0XHRmZWVsc0xpa2UuaW5uZXJIVE1MID0gYCR7d2VhdGhlckRhdGEuZmVlbHNMaWtlfSDCsENgO1xuXHRcdHdpbmRTcGVlZC5pbm5lckhUTUwgPSBgJHt3ZWF0aGVyRGF0YS53aW5kU3BlZWR9IG0vc2A7XG5cdH0gZWxzZSBpZiAodW5pdHMgPT09ICdpbXBlcmlhbCcpIHtcblx0XHR0ZW1wLmlubmVySFRNTCA9IGAke3dlYXRoZXJEYXRhLnRlbXB9IMKwRmA7XG5cdFx0ZmVlbHNMaWtlLmlubmVySFRNTCA9IGAke3dlYXRoZXJEYXRhLmZlZWxzTGlrZX0gwrBGYDtcblx0XHR3aW5kU3BlZWQuaW5uZXJIVE1MID0gYCR7d2VhdGhlckRhdGEud2luZFNwZWVkfSBtcGhgO1xuXHR9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoQW5kUHJpbnQoKSB7XG5cdHRyeSB7XG5cdFx0bGV0IHN1Y2Nlc3NDaGVjayA9IGF3YWl0IGV4dHJhY3RKU09OKCk7XG5cdFx0aWYgKHN1Y2Nlc3NDaGVjayA9PT0gZmFsc2UpIHJldHVybjtcblxuXHRcdHVwZGF0ZVdlYXRoZXJJY29uKCk7XG5cdFx0cG9wdWxhdGVIVE1MKCk7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdGNvbnNvbGUubG9nKGVycik7XG5cdH1cbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IGZldGNoQW5kUHJpbnQoKSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtcblx0aWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGNpdHlJbnB1dCAmJiBlLmtleSA9PT0gJ0VudGVyJykge1xuXHRcdGZldGNoQW5kUHJpbnQoKTtcblx0fVxufSk7XG5cbnNlYXJjaEljb24ub25jbGljayA9ICgpID0+IGZldGNoQW5kUHJpbnQoKTtcbmNoZWNrYm94Lm9uY2xpY2sgPSAoKSA9PiBmZXRjaEFuZFByaW50KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=