function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import PropTypes from "prop-types";
import React, { PureComponent } from "react";
import styled from "styled-components";
import { Manager, Reference, Popper } from "react-popper";
import Dial from "./Dial";
import { getInputIsDirty, getInputValueIsValid, transformInputValueToDialValues, deriveInputValue, transformTimeToDialValues, transformDialValuesToTime, hoursDialOptions, minutesDialOptions, meridiemDialOptions, getNextDialOption, getPreviousDialOption } from "./utils";
import debounce from "../../../utils/debounce";
import { DESKTOP_PLACEHOLDER, EMPTY_DIAL_VALUE, INVALID_TIME } from "../../../constants";
import { inputCSS } from "../../../styles";

/*
  inner components
*/
var DesktopInput = styled.input.withConfig({
  displayName: "DesktopTimePicker__DesktopInput",
  componentId: "sc-wn6wad-0"
})(["", " padding:10px;&:focus{outline:0;}"], inputCSS);
var PopperWrapper = styled.div.withConfig({
  displayName: "DesktopTimePicker__PopperWrapper",
  componentId: "sc-wn6wad-1"
})(["background-color:#fff;box-shadow:0 2px 6px rgba(0,0,0,0.05),0 0 0 1px rgba(0,0,0,0.07);border-radius:3px;padding:22px;z-index:1;&[data-placement*=\"bottom-start\"]{margin-top:20px;}&[data-placement*=\"top-start\"]{margin-bottom:20px;}"]);
var Fang = styled.div.withConfig({
  displayName: "DesktopTimePicker__Fang",
  componentId: "sc-wn6wad-2"
})(["border:8px solid transparent;position:absolute;&::before{border:8px solid transparent;border-width:9px;content:\"\";left:-9px;position:absolute;z-index:-1;}&[data-placement*=\"bottom-start\"]{border-bottom-color:#fff;border-top:none;margin-top:-8px;top:0;&::before{border-bottom-color:#dbdbdb;border-top:none;top:-1px;}}&[data-placement*=\"top-start\"]{bottom:0;border-bottom:none;border-top-color:#fff;margin-bottom:-8px;&::before{bottom:-1px;border-bottom:none;border-top-color:#dbdbdb;}}"]);
var ClockWrapper = styled.div.withConfig({
  displayName: "DesktopTimePicker__ClockWrapper",
  componentId: "sc-wn6wad-3"
})(["display:flex;justify-content:space-between;width:104px;"]);

/*
  outer DesktopTimePicker component
*/
var DesktopTimePicker = /*#__PURE__*/function (_PureComponent) {
  _inherits(DesktopTimePicker, _PureComponent);
  function DesktopTimePicker(props) {
    var _this;
    _classCallCheck(this, DesktopTimePicker);
    _this = _callSuper(this, DesktopTimePicker, [props]);
    _defineProperty(_assertThisInitialized(_this), "wrapper", /*#__PURE__*/React.createRef());
    _defineProperty(_assertThisInitialized(_this), "handleInputValueChange", function (e) {
      var inputValue = e.target.value;
      _this.setState({
        inputIsDirty: getInputIsDirty(inputValue),
        inputValue: inputValue
      });
      _this.handleInputValueValidation(inputValue);
      if (!_this.props.focused) {
        _this.handleFocusChange(true);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "handleInputValueValidation", debounce(function (value) {
      return _this.setState({
        inputValueIsValid: getInputValueIsValid(value)
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
        }

        // close clock on tab from last element
        if (!e.shiftKey && e.target.getAttribute("aria-label") === "Decrement meridiem") {
          _this.handleFocusChange(false);
        }
      }
    });
    _this.state = {
      inputIsDirty: false,
      inputValue: null,
      inputValueIsValid: false
    };
    _this.initialState = _this.state;
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
        this.props.onTimeChange(transformDialValuesToTime.apply(void 0, _toConsumableArray(transformInputValueToDialValues(inputValue))));
        this.handleInputValueReset();
      } else if (timeChanged && !["", INVALID_TIME].includes(this.props.time)) {
        // reset the input value when a valid time is set via the clock
        this.handleInputValueReset();
      } else if (inputValueChanged && inputIsDirty && !inputValueIsValid) {
        // trigger a time change when the input value becomes empty or invalid
        this.props.onTimeChange(inputValue === "" ? "" : INVALID_TIME);
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
      var _transformTimeToDialV = transformTimeToDialValues(time),
        _transformTimeToDialV2 = _slicedToArray(_transformTimeToDialV, 3),
        hh = _transformTimeToDialV2[0],
        mm = _transformTimeToDialV2[1],
        aa = _transformTimeToDialV2[2];
      var hoursDialValue = hh === EMPTY_DIAL_VALUE ? "12" : hh;
      var minutesDialValue = mm === EMPTY_DIAL_VALUE ? "00" : mm;
      var meridiemDialValue = aa === EMPTY_DIAL_VALUE ? "PM" : aa;
      var shouldShowDialValues = !inputIsDirty || inputValueIsValid;
      return /*#__PURE__*/React.createElement("div", {
        ref: this.wrapper
      }, /*#__PURE__*/React.createElement(Manager, null, /*#__PURE__*/React.createElement(Reference, null, function (_ref) {
        var ref = _ref.ref;
        return /*#__PURE__*/React.createElement(DesktopInput, {
          "aria-label": "hours:minutes meridiem",
          type: "text",
          placeholder: DESKTOP_PLACEHOLDER,
          ref: ref,
          id: id,
          value: deriveInputValue(inputIsDirty, inputValue, [hh, mm, aa]),
          onFocus: function onFocus() {
            return _this2.handleFocusChange(true);
          },
          onChange: _this2.handleInputValueChange
        });
      }), focused && /*#__PURE__*/React.createElement(Popper, {
        placement: "bottom-start"
      }, function (_ref2) {
        var ref = _ref2.ref,
          style = _ref2.style,
          placement = _ref2.placement;
        return /*#__PURE__*/React.createElement(PopperWrapper, {
          ref: ref,
          style: style,
          "data-placement": placement
        }, /*#__PURE__*/React.createElement(Fang, {
          "data-placement": placement
        }), /*#__PURE__*/React.createElement(ClockWrapper, {
          "aria-label": "Clock"
        }, /*#__PURE__*/React.createElement(Dial, {
          color: color,
          name: "hours",
          value: shouldShowDialValues ? hoursDialValue : EMPTY_DIAL_VALUE,
          increment: function increment() {
            return onTimeChange(transformDialValuesToTime(getNextDialOption(hoursDialOptions, hoursDialValue), minutesDialValue, meridiemDialValue));
          },
          decrement: function decrement() {
            return onTimeChange(transformDialValuesToTime(getPreviousDialOption(hoursDialOptions, hoursDialValue), minutesDialValue, meridiemDialValue));
          }
        }), /*#__PURE__*/React.createElement(Dial, {
          color: color,
          name: "minutes",
          value: shouldShowDialValues ? minutesDialValue : EMPTY_DIAL_VALUE,
          increment: function increment() {
            return onTimeChange(transformDialValuesToTime(hoursDialValue, getNextDialOption(minutesDialOptions, minutesDialValue), meridiemDialValue));
          },
          decrement: function decrement() {
            return onTimeChange(transformDialValuesToTime(hoursDialValue, getPreviousDialOption(minutesDialOptions, minutesDialValue), meridiemDialValue));
          }
        }), /*#__PURE__*/React.createElement(Dial, {
          color: color,
          name: "meridiem",
          value: shouldShowDialValues ? meridiemDialValue : EMPTY_DIAL_VALUE,
          increment: function increment() {
            return onTimeChange(transformDialValuesToTime(hoursDialValue, minutesDialValue, getNextDialOption(meridiemDialOptions, meridiemDialValue)));
          },
          decrement: function decrement() {
            return onTimeChange(transformDialValuesToTime(hoursDialValue, minutesDialValue, getPreviousDialOption(meridiemDialOptions, meridiemDialValue)));
          }
        })));
      })));
    }
  }]);
  return DesktopTimePicker;
}(PureComponent);
DesktopTimePicker.propTypes = {
  color: PropTypes.oneOf(["red", "brown", "emerald", "darkEmerald", "skyBlue", "navy", "idRed"]),
  id: PropTypes.string.isRequired,
  time: PropTypes.string,
  onTimeChange: PropTypes.func.isRequired,
  focused: PropTypes.bool.isRequired,
  onFocusChange: PropTypes.func.isRequired
};
DesktopTimePicker.defaultProps = {
  color: "red",
  time: null
};
export default DesktopTimePicker;