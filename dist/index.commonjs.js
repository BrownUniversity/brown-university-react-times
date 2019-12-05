/*! brown-university-react-times v1.0.2 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("prop-types"), require("react"), require("react-fns"), require("brown-university-styles"), require("styled-components"), require("react-popper"), require("@testing-library/react"));
	else if(typeof define === 'function' && define.amd)
		define(["prop-types", "react", "react-fns", "brown-university-styles", "styled-components", "react-popper", "@testing-library/react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("prop-types"), require("react"), require("react-fns"), require("brown-university-styles"), require("styled-components"), require("react-popper"), require("@testing-library/react")) : factory(root["prop-types"], root["react"], root["react-fns"], root["brown-university-styles"], root["styled-components"], root["react-popper"], root["@testing-library/react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__5__, __WEBPACK_EXTERNAL_MODULE__7__, __WEBPACK_EXTERNAL_MODULE__10__, __WEBPACK_EXTERNAL_MODULE__20__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_TimePicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimePicker", function() { return _components_TimePicker__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _test_utils_time_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timePickerTestUtils", function() { return _test_utils_time_picker__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var react_fns__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_fns__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var brown_university_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var brown_university_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(brown_university_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _MobileTimePicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _DesktopTimePicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var TimePicker = function TimePicker(_ref) {
  var mobileBreakpoint = _ref.mobileBreakpoint,
      restProps = _objectWithoutProperties(_ref, ["mobileBreakpoint"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_fns__WEBPACK_IMPORTED_MODULE_2__["WindowSize"], {
    render: function render(_ref2) {
      var width = _ref2.width;
      // `width` returns 0 on initial render (see `react-fns` issue 84)
      var currentWidth = width === 0 ? window.innerWidth : width;
      var renderMobile = currentWidth < mobileBreakpoint;

      if (renderMobile) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MobileTimePicker__WEBPACK_IMPORTED_MODULE_4__["default"], restProps);
      }

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_DesktopTimePicker__WEBPACK_IMPORTED_MODULE_5__["default"], restProps);
    }
  });
};

TimePicker.propTypes = {
  mobileBreakpoint: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
};
TimePicker.defaultProps = {
  mobileBreakpoint: brown_university_styles__WEBPACK_IMPORTED_MODULE_3__["breakpoints"].md
};
/* harmony default export */ __webpack_exports__["default"] = (TimePicker);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__5__;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);




/*
  inner components
*/

var MobileInput = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.input.withConfig({
  displayName: "MobileTimePicker__MobileInput",
  componentId: "sc-1dhrhjt-0"
})(["", " padding:8px;"], _styles__WEBPACK_IMPORTED_MODULE_3__["inputCSS"]);
/*
  outer MobileTimePicker component
*/

var MobileTimePicker = function MobileTimePicker(_ref) {
  var id = _ref.id,
      time = _ref.time,
      onTimeChange = _ref.onTimeChange,
      onFocusChange = _ref.onFocusChange;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MobileInput, {
    type: "time",
    id: id,
    value: time || "",
    onChange: function onChange(e) {
      return onTimeChange(e.target.value);
    },
    onBlur: function onBlur() {
      return onFocusChange({
        focused: false
      });
    }
  });
};

MobileTimePicker.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  time: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  onTimeChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  onFocusChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
};
MobileTimePicker.defaultProps = {
  time: null
};
/* harmony default export */ __webpack_exports__["default"] = (MobileTimePicker);

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__7__;

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputCSS", function() { return inputCSS; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var brown_university_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var brown_university_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(brown_university_styles__WEBPACK_IMPORTED_MODULE_1__);

 // eslint-disable-next-line import/prefer-default-export

var inputCSS = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["box-sizing:border-box;color:", ";display:block;font-family:", ";font-size:", ";width:100%;"], brown_university_styles__WEBPACK_IMPORTED_MODULE_1__["colors"].mediumGray, brown_university_styles__WEBPACK_IMPORTED_MODULE_1__["typography"].sans, Object(brown_university_styles__WEBPACK_IMPORTED_MODULE_1__["getRems"])(16));

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var react_popper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_popper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Dial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16);
/* harmony import */ var _utils_debounce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










/*
  inner components
*/

var DesktopInput = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.input.withConfig({
  displayName: "DesktopTimePicker__DesktopInput",
  componentId: "wn6wad-0"
})(["", " padding:10px;&:focus{outline:0;}"], _styles__WEBPACK_IMPORTED_MODULE_8__["inputCSS"]);
var PopperWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "DesktopTimePicker__PopperWrapper",
  componentId: "wn6wad-1"
})(["background-color:#fff;box-shadow:0 2px 6px rgba(0,0,0,0.05),0 0 0 1px rgba(0,0,0,0.07);border-radius:3px;padding:22px;z-index:1;&[data-placement*=\"bottom-start\"]{margin-top:20px;}&[data-placement*=\"top-start\"]{margin-bottom:20px;}"]);
var Fang = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "DesktopTimePicker__Fang",
  componentId: "wn6wad-2"
})(["border:8px solid transparent;position:absolute;&::before{border:8px solid transparent;border-width:9px;content:\"\";left:-9px;position:absolute;z-index:-1;}&[data-placement*=\"bottom-start\"]{border-bottom-color:#fff;border-top:none;margin-top:-8px;top:0;&::before{border-bottom-color:#dbdbdb;border-top:none;top:-1px;}}&[data-placement*=\"top-start\"]{bottom:0;border-bottom:none;border-top-color:#fff;margin-bottom:-8px;&::before{bottom:-1px;border-bottom:none;border-top-color:#dbdbdb;}}"]);
var ClockWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "DesktopTimePicker__ClockWrapper",
  componentId: "wn6wad-3"
})(["display:flex;justify-content:space-between;width:104px;"]);
/*
  outer DesktopTimePicker component
*/

var DesktopTimePicker =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(DesktopTimePicker, _PureComponent);

  function DesktopTimePicker() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DesktopTimePicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DesktopTimePicker)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      inputIsDirty: false,
      inputValue: null,
      inputValueIsValid: false
    });

    _defineProperty(_assertThisInitialized(_this), "initialState", _this.state);

    _defineProperty(_assertThisInitialized(_this), "wrapper", react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef());

    _defineProperty(_assertThisInitialized(_this), "handleInputValueChange", function (e) {
      var inputValue = e.target.value;

      _this.setState({
        inputIsDirty: Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getInputIsDirty"])(inputValue),
        inputValue: inputValue
      });

      _this.handleInputValueValidation(inputValue);

      if (!_this.props.focused) {
        _this.handleFocusChange(true);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputValueValidation", Object(_utils_debounce__WEBPACK_IMPORTED_MODULE_6__["default"])(function (value) {
      return _this.setState({
        inputValueIsValid: Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getInputValueIsValid"])(value)
      });
    }, 250));

    _defineProperty(_assertThisInitialized(_this), "handleInputValueReset", function () {
      _this.setState(_this.initialState);
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocusChange", function (focused) {
      _this.props.onFocusChange({
        focused: focused
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (e) {
      // click outside of time picker
      if (!_this.wrapper.current.contains(e.target)) {
        if (_this.props.focused) {
          // close clock if time picker has focused
          _this.handleFocusChange(false);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeydown", function (e) {
      // tab key
      if (_this.wrapper.current && e.keyCode === 9) {
        // close clock on shift + tab from first element
        if (e.shiftKey && e.target.getAttribute("aria-label") === "hours:minutes meridiem") {
          _this.handleFocusChange(false);
        } // close clock on tab from last element


        if (!e.shiftKey && e.target.getAttribute("aria-label") === "Decrement meridiem") {
          _this.handleFocusChange(false);
        }
      }
    });

    return _this;
  }

  _createClass(DesktopTimePicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener("click", this.handleClick);
      document.addEventListener("keydown", this.handleKeydown);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var timeChanged = prevProps.time !== this.props.time;
      var inputValueChanged = prevState.inputValue !== this.state.inputValue;
      var _this$state = this.state,
          inputIsDirty = _this$state.inputIsDirty,
          inputValue = _this$state.inputValue,
          inputValueIsValid = _this$state.inputValueIsValid;

      if (inputValueIsValid) {
        // trigger a time change and reset the input value when it becomes valid
        this.props.onTimeChange(_utils__WEBPACK_IMPORTED_MODULE_5__["transformDialValuesToTime"].apply(void 0, _toConsumableArray(Object(_utils__WEBPACK_IMPORTED_MODULE_5__["transformInputValueToDialValues"])(inputValue))));
        this.handleInputValueReset();
      } else if (timeChanged && !["", _constants__WEBPACK_IMPORTED_MODULE_7__["INVALID_TIME"]].includes(this.props.time)) {
        // reset the input value when a valid time is set via the clock
        this.handleInputValueReset();
      } else if (inputValueChanged && inputIsDirty && !inputValueIsValid) {
        // trigger a time change when the input value becomes empty or invalid
        this.props.onTimeChange(inputValue === "" ? "" : _constants__WEBPACK_IMPORTED_MODULE_7__["INVALID_TIME"]);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener("click", this.handleClick);
      document.removeEventListener("keyDown", this.handleKeydown);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          color = _this$props.color,
          id = _this$props.id,
          time = _this$props.time,
          onTimeChange = _this$props.onTimeChange,
          focused = _this$props.focused;
      var _this$state2 = this.state,
          inputIsDirty = _this$state2.inputIsDirty,
          inputValue = _this$state2.inputValue,
          inputValueIsValid = _this$state2.inputValueIsValid;

      var _transformTimeToDialV = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["transformTimeToDialValues"])(time),
          _transformTimeToDialV2 = _slicedToArray(_transformTimeToDialV, 3),
          hh = _transformTimeToDialV2[0],
          mm = _transformTimeToDialV2[1],
          aa = _transformTimeToDialV2[2];

      var hoursDialValue = hh === _constants__WEBPACK_IMPORTED_MODULE_7__["EMPTY_DIAL_VALUE"] ? "12" : hh;
      var minutesDialValue = mm === _constants__WEBPACK_IMPORTED_MODULE_7__["EMPTY_DIAL_VALUE"] ? "00" : mm;
      var meridiemDialValue = aa === _constants__WEBPACK_IMPORTED_MODULE_7__["EMPTY_DIAL_VALUE"] ? "PM" : aa;
      var shouldShowDialValues = !inputIsDirty || inputValueIsValid;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        ref: this.wrapper
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_popper__WEBPACK_IMPORTED_MODULE_3__["Manager"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_popper__WEBPACK_IMPORTED_MODULE_3__["Reference"], null, function (_ref) {
        var ref = _ref.ref;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DesktopInput, {
          "aria-label": "hours:minutes meridiem",
          type: "text",
          placeholder: _constants__WEBPACK_IMPORTED_MODULE_7__["DESKTOP_PLACEHOLDER"],
          ref: ref,
          id: id,
          value: Object(_utils__WEBPACK_IMPORTED_MODULE_5__["deriveInputValue"])(inputIsDirty, inputValue, [hh, mm, aa]),
          onFocus: function onFocus() {
            return _this2.handleFocusChange(true);
          },
          onChange: _this2.handleInputValueChange
        });
      }), focused && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_popper__WEBPACK_IMPORTED_MODULE_3__["Popper"], {
        placement: "bottom-start"
      }, function (_ref2) {
        var ref = _ref2.ref,
            style = _ref2.style,
            placement = _ref2.placement;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PopperWrapper, {
          ref: ref,
          style: style,
          "data-placement": placement
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Fang, {
          "data-placement": placement
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ClockWrapper, {
          "aria-label": "Clock"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Dial__WEBPACK_IMPORTED_MODULE_4__["default"], {
          color: color,
          name: "hours",
          value: shouldShowDialValues ? hoursDialValue : _constants__WEBPACK_IMPORTED_MODULE_7__["EMPTY_DIAL_VALUE"],
          increment: function increment() {
            return onTimeChange(Object(_utils__WEBPACK_IMPORTED_MODULE_5__["transformDialValuesToTime"])(Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getNextDialOption"])(_utils__WEBPACK_IMPORTED_MODULE_5__["hoursDialOptions"], hoursDialValue), minutesDialValue, meridiemDialValue));
          },
          decrement: function decrement() {
            return onTimeChange(Object(_utils__WEBPACK_IMPORTED_MODULE_5__["transformDialValuesToTime"])(Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getPreviousDialOption"])(_utils__WEBPACK_IMPORTED_MODULE_5__["hoursDialOptions"], hoursDialValue), minutesDialValue, meridiemDialValue));
          }
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Dial__WEBPACK_IMPORTED_MODULE_4__["default"], {
          color: color,
          name: "minutes",
          value: shouldShowDialValues ? minutesDialValue : _constants__WEBPACK_IMPORTED_MODULE_7__["EMPTY_DIAL_VALUE"],
          increment: function increment() {
            return onTimeChange(Object(_utils__WEBPACK_IMPORTED_MODULE_5__["transformDialValuesToTime"])(hoursDialValue, Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getNextDialOption"])(_utils__WEBPACK_IMPORTED_MODULE_5__["minutesDialOptions"], minutesDialValue), meridiemDialValue));
          },
          decrement: function decrement() {
            return onTimeChange(Object(_utils__WEBPACK_IMPORTED_MODULE_5__["transformDialValuesToTime"])(hoursDialValue, Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getPreviousDialOption"])(_utils__WEBPACK_IMPORTED_MODULE_5__["minutesDialOptions"], minutesDialValue), meridiemDialValue));
          }
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Dial__WEBPACK_IMPORTED_MODULE_4__["default"], {
          color: color,
          name: "meridiem",
          value: shouldShowDialValues ? meridiemDialValue : _constants__WEBPACK_IMPORTED_MODULE_7__["EMPTY_DIAL_VALUE"],
          increment: function increment() {
            return onTimeChange(Object(_utils__WEBPACK_IMPORTED_MODULE_5__["transformDialValuesToTime"])(hoursDialValue, minutesDialValue, Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getNextDialOption"])(_utils__WEBPACK_IMPORTED_MODULE_5__["meridiemDialOptions"], meridiemDialValue)));
          },
          decrement: function decrement() {
            return onTimeChange(Object(_utils__WEBPACK_IMPORTED_MODULE_5__["transformDialValuesToTime"])(hoursDialValue, minutesDialValue, Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getPreviousDialOption"])(_utils__WEBPACK_IMPORTED_MODULE_5__["meridiemDialOptions"], meridiemDialValue)));
          }
        })));
      })));
    }
  }]);

  return DesktopTimePicker;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);

DesktopTimePicker.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(["red", "brown", "emerald", "skyBlue", "navy", "idRed"]),
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  time: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  onTimeChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  focused: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool.isRequired,
  onFocusChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
};
DesktopTimePicker.defaultProps = {
  color: "red",
  time: null
};
/* harmony default export */ __webpack_exports__["default"] = (DesktopTimePicker);

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__10__;

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var brown_university_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var brown_university_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(brown_university_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _DialButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var _svg_chevron_up_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14);
/* harmony import */ var _svg_chevron_down_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15);







/*
  inner components
*/

var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Dial__Wrapper",
  componentId: "sc-6o91f6-0"
})(["text-align:center;"]);
var Value = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Dial__Value",
  componentId: "sc-6o91f6-1"
})(["color:", ";font-family:", ";font-size:14px;font-weight:bold;padding:10px 0;"], brown_university_styles__WEBPACK_IMPORTED_MODULE_3__["colors"].black, brown_university_styles__WEBPACK_IMPORTED_MODULE_3__["typography"].sans);
/*
  outer Dial component
*/

var Dial = function Dial(_ref) {
  var color = _ref.color,
      name = _ref.name,
      value = _ref.value,
      increment = _ref.increment,
      decrement = _ref.decrement;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Wrapper, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_DialButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: color,
    ariaLabel: "Increment ".concat(name),
    onClick: increment
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_svg_chevron_up_svg__WEBPACK_IMPORTED_MODULE_5__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Value, {
    "data-testid": "".concat(name, "-value")
  }, value), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_DialButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: color,
    ariaLabel: "Decrement ".concat(name),
    onClick: decrement
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_svg_chevron_down_svg__WEBPACK_IMPORTED_MODULE_6__["default"], null)));
};

Dial.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(["red", "brown", "emerald", "skyBlue", "navy", "idRed"]).isRequired,
  name: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  increment: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  decrement: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Dial);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var brown_university_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var brown_university_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(brown_university_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_ClickAndHold__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






/*
  inner components
*/

var Button = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button.withConfig({
  displayName: "DialButton__Button",
  componentId: "sc-1ry571d-0"
})(["background-color:transparent;border:1px solid ", ";border-radius:3px;color:", ";cursor:pointer;line-height:0.78;padding:9px 6px;#chevron-up,#chevron-down{fill:", ";}"], brown_university_styles__WEBPACK_IMPORTED_MODULE_3__["colors"].lightGray, function (_ref) {
  var color = _ref.color;
  return brown_university_styles__WEBPACK_IMPORTED_MODULE_3__["colors"][color];
}, function (_ref2) {
  var color = _ref2.color;
  return brown_university_styles__WEBPACK_IMPORTED_MODULE_3__["colors"][color];
});
/*
  outer DialButton component
*/

var DialButton = function DialButton(_ref3) {
  var color = _ref3.color,
      ariaLabel = _ref3.ariaLabel,
      onClick = _ref3.onClick,
      children = _ref3.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_utils_ClickAndHold__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: onClick
  }, function (clickAndHoldProps) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Button, _extends({
      type: "button",
      color: color,
      "aria-label": ariaLabel
    }, clickAndHoldProps), children);
  });
};

DialButton.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(["red", "brown", "emerald", "skyBlue", "navy", "idRed"]).isRequired,
  ariaLabel: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (DialButton);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLICK_AND_HOLD_MILLISECONDS", function() { return CLICK_AND_HOLD_MILLISECONDS; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var CLICK_AND_HOLD_MILLISECONDS = 125;

var ClickAndHold =
/*#__PURE__*/
function (_Component) {
  _inherits(ClickAndHold, _Component);

  function ClickAndHold() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ClickAndHold);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ClickAndHold)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "buttonPressTimeout", null);

    _defineProperty(_assertThisInitialized(_this), "onClickInterval", null);

    _defineProperty(_assertThisInitialized(_this), "state", {
      onClickCallCount: 0
    });

    _defineProperty(_assertThisInitialized(_this), "handleButtonPress", function () {
      _this.buttonPressTimeout = setTimeout(_this.handleOnClickIntervalStart, CLICK_AND_HOLD_MILLISECONDS);
    });

    _defineProperty(_assertThisInitialized(_this), "handleButtonRelease", function (_ref) {
      var clicked = _ref.clicked;
      clearTimeout(_this.buttonPressTimeout);

      if (clicked && _this.state.onClickCallCount < 1) {
        _this.props.onClick();
      }

      _this.handleOnClickIntervalEnd();
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnClickIntervalStart", function () {
      _this.onClickInterval = setInterval(function () {
        _this.props.onClick();

        _this.setState(function (prevState) {
          return {
            onClickCallCount: prevState.onClickCallCount + 1
          };
        });
      }, CLICK_AND_HOLD_MILLISECONDS);
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnClickIntervalEnd", function () {
      clearInterval(_this.onClickInterval);

      _this.setState({
        onClickCallCount: 0
      });
    });

    return _this;
  }

  _createClass(ClickAndHold, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return this.props.children({
        onMouseDown: this.handleButtonPress,
        onMouseUp: function onMouseUp() {
          return _this2.handleButtonRelease({
            clicked: true
          });
        },
        onMouseLeave: function onMouseLeave() {
          return _this2.handleButtonRelease({
            clicked: false
          });
        },
        onKeyPress: function onKeyPress(e) {
          if ([" ", "Enter"].includes(e.key)) {
            _this2.handleButtonRelease({
              clicked: true
            });
          }
        }
      });
    }
  }]);

  return ClickAndHold;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

ClickAndHold.propTypes = {
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ClickAndHold);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ __webpack_exports__["default"] = (({
  styles = {},
  ...props
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
  focusable: "false",
  width: "14",
  height: "8"
}, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  stroke: "none",
  strokeWidth: "1",
  fillRule: "evenodd"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M4.429 10.642V2.785a.714.714 0 1 0-1.429 0v8.572a.712.712 0 0 0 .714.714h8.572a.714.714 0 0 0 0-1.429H4.429z",
  transform: "scale(1 -1) rotate(-45 -9.571 1.207)",
  id: "chevron-up",
  fill: "#98A4AE"
}))));

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ __webpack_exports__["default"] = (({
  styles = {},
  ...props
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
  focusable: "false",
  width: "14",
  height: "8"
}, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  stroke: "none",
  strokeWidth: "1",
  fill: "none",
  fillRule: "evenodd"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M309.429 294.642v-7.857a.714.714 0 0 0-1.429 0v8.572a.712.712 0 0 0 .714.714h8.572a.714.714 0 0 0 0-1.429h-7.857z",
  transform: "scale(-1 1) rotate(-45 -197.061 532.345)",
  id: "chevron-down",
  fill: "#98A4AE"
}))));

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInputIsDirty", function() { return getInputIsDirty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInputValueIsValid", function() { return getInputValueIsValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformInputValueToDialValues", function() { return transformInputValueToDialValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deriveInputValue", function() { return deriveInputValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformTimeToDialValues", function() { return transformTimeToDialValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformDialValuesToTime", function() { return transformDialValuesToTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hoursDialOptions", function() { return hoursDialOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minutesDialOptions", function() { return minutesDialOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meridiemDialOptions", function() { return meridiemDialOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextDialOption", function() { return getNextDialOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreviousDialOption", function() { return getPreviousDialOption; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }


/*
  input
*/

var getInputIsDirty = function getInputIsDirty(val) {
  return val !== null;
};
var getInputValueIsValid = function getInputValueIsValid(val) {
  return !!val && val.trim().length < 9 && /\b((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/.test(val);
};
var transformInputValueToDialValues = function transformInputValueToDialValues(val) {
  var cleanedVal = val.trim().replace("am", "AM").replace("aM", "AM").replace("Am", "AM").replace("pm", "PM").replace("pM", "PM").replace("Pm", "PM");

  if (cleanedVal.includes(" ")) {
    return _toConsumableArray(cleanedVal.split(/:| /));
  }

  return _toConsumableArray(cleanedVal.replace(/[AP]/, " $&").split(/:| /));
};
var deriveInputValue = function deriveInputValue(inputIsDirty, inputValue, dialValues) {
  if (inputIsDirty) {
    return inputValue;
  }

  var _dialValues = _slicedToArray(dialValues, 3),
      hh = _dialValues[0],
      mm = _dialValues[1],
      aa = _dialValues[2];

  if (hh === _constants__WEBPACK_IMPORTED_MODULE_0__["EMPTY_DIAL_VALUE"] && mm === _constants__WEBPACK_IMPORTED_MODULE_0__["EMPTY_DIAL_VALUE"] && aa === _constants__WEBPACK_IMPORTED_MODULE_0__["EMPTY_DIAL_VALUE"]) {
    return "";
  }

  return "".concat(hh, ":").concat(mm, " ").concat(aa);
};
/*
  dials
*/

var transformTimeToDialValues = function transformTimeToDialValues(time) {
  if (!time || time === "" || time === _constants__WEBPACK_IMPORTED_MODULE_0__["INVALID_TIME"]) {
    return [_constants__WEBPACK_IMPORTED_MODULE_0__["EMPTY_DIAL_VALUE"], _constants__WEBPACK_IMPORTED_MODULE_0__["EMPTY_DIAL_VALUE"], _constants__WEBPACK_IMPORTED_MODULE_0__["EMPTY_DIAL_VALUE"]];
  }

  var _time$split = time.split(":"),
      _time$split2 = _slicedToArray(_time$split, 2),
      HH = _time$split2[0],
      mm = _time$split2[1];

  var HHAsNum = Number(HH);
  var aa = HHAsNum < 12 ? "AM" : "PM";
  var hh;

  if (HHAsNum === 0) {
    hh = "12";
  } else if (HHAsNum > 12) {
    hh = String(HHAsNum - 12).padStart(2, "0");
  } else {
    hh = String(HHAsNum).padStart(2, "0");
  }

  return [hh, mm, aa];
};
var transformDialValuesToTime = function transformDialValuesToTime(hh, mm, aa) {
  if (!hh || !mm || !aa) {
    return null;
  }

  var hhAsNum = Number(hh);
  var HH;

  if (hhAsNum === 12 && aa === "AM") {
    HH = "00";
  } else if (hhAsNum < 12 && aa === "PM") {
    HH = String(hhAsNum + 12);
  } else {
    HH = hh.padStart(2, "0");
  }

  return "".concat(HH, ":").concat(mm);
};
var hoursDialOptions = Array(12).fill().map(function (_, idx) {
  return String(1 + idx).padStart(2, "0");
});
var minutesDialOptions = Array(60).fill().map(function (_, idx) {
  return String(0 + idx).padStart(2, "0");
});
var meridiemDialOptions = ["AM", "PM"];
var getNextDialOption = function getNextDialOption(options, current) {
  var currentIdx = options.indexOf(current);

  if (currentIdx < options.length - 1) {
    return options[currentIdx + 1];
  }

  return options[0];
};
var getPreviousDialOption = function getPreviousDialOption(options, current) {
  var currentIdx = options.indexOf(current);

  if (currentIdx !== 0) {
    return options[currentIdx - 1];
  }

  return options[options.length - 1];
};

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DESKTOP_PLACEHOLDER", function() { return DESKTOP_PLACEHOLDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMPTY_DIAL_VALUE", function() { return EMPTY_DIAL_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INVALID_TIME", function() { return INVALID_TIME; });
var DESKTOP_PLACEHOLDER = "--:-- --";
var EMPTY_DIAL_VALUE = "--";
var INVALID_TIME = "Invalid Time";

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
        args = arguments;

    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (debounce);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_library_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _testing_library_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_testing_library_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TimePicker_DesktopTimePicker_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var timeFormat = "hh:mm A";

function makeSelection(_ref) {
  var inputElement = _ref.element,
      nextSelectionTime = _ref.time;
  // eslint-disable-next-line no-underscore-dangle
  var usingFakeTimers = setTimeout._isMockFunction;

  if (!usingFakeTimers) {
    jest.useFakeTimers();
  }

  function restoreTimerState() {
    jest.runAllTimers();

    if (!usingFakeTimers) {
      jest.useRealTimers();
    }
  }

  var isMobile = inputElement.type === "time";

  var closeDesktopClock = function closeDesktopClock() {
    // shift + tab from first element
    _testing_library_react__WEBPACK_IMPORTED_MODULE_0__["fireEvent"].keyDown(inputElement, {
      shiftKey: true,
      keyCode: 9
    });
  };
  /*
    handle empty time selection
  */


  if (!nextSelectionTime) {
    _testing_library_react__WEBPACK_IMPORTED_MODULE_0__["fireEvent"].change(inputElement, {
      target: {
        value: ""
      }
    });

    if (!isMobile) {
      restoreTimerState();
      return closeDesktopClock();
    }

    restoreTimerState();
    return undefined;
  }
  /*
    handle mobile time selection
  */


  if (isMobile) {
    restoreTimerState();
    return _testing_library_react__WEBPACK_IMPORTED_MODULE_0__["fireEvent"].change(inputElement, {
      target: {
        value: nextSelectionTime
      }
    });
  }
  /*
    handle desktop time selection
  */


  var _transformTimeToDialV = Object(_components_TimePicker_DesktopTimePicker_utils__WEBPACK_IMPORTED_MODULE_1__["transformTimeToDialValues"])(nextSelectionTime),
      _transformTimeToDialV2 = _slicedToArray(_transformTimeToDialV, 3),
      hh = _transformTimeToDialV2[0],
      mm = _transformTimeToDialV2[1],
      aa = _transformTimeToDialV2[2];

  _testing_library_react__WEBPACK_IMPORTED_MODULE_0__["fireEvent"].change(inputElement, {
    target: {
      value: "".concat(hh, ":").concat(mm, " ").concat(aa)
    }
  });
  restoreTimerState();
  closeDesktopClock();
  return undefined;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  timeFormat: timeFormat,
  makeSelection: makeSelection
});

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__20__;

/***/ })
/******/ ]);
});