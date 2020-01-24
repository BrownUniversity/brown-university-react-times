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
  componentId: "wn6wad-0"
})(["", " padding:10px;&:focus{outline:0;}"], inputCSS);
var PopperWrapper = styled.div.withConfig({
  displayName: "DesktopTimePicker__PopperWrapper",
  componentId: "wn6wad-1"
})(["background-color:#fff;box-shadow:0 2px 6px rgba(0,0,0,0.05),0 0 0 1px rgba(0,0,0,0.07);border-radius:3px;padding:22px;z-index:1;&[data-placement*=\"bottom-start\"]{margin-top:20px;}&[data-placement*=\"top-start\"]{margin-bottom:20px;}"]);
var Fang = styled.div.withConfig({
  displayName: "DesktopTimePicker__Fang",
  componentId: "wn6wad-2"
})(["border:8px solid transparent;position:absolute;&::before{border:8px solid transparent;border-width:9px;content:\"\";left:-9px;position:absolute;z-index:-1;}&[data-placement*=\"bottom-start\"]{border-bottom-color:#fff;border-top:none;margin-top:-8px;top:0;&::before{border-bottom-color:#dbdbdb;border-top:none;top:-1px;}}&[data-placement*=\"top-start\"]{bottom:0;border-bottom:none;border-top-color:#fff;margin-bottom:-8px;&::before{bottom:-1px;border-bottom:none;border-top-color:#dbdbdb;}}"]);
var ClockWrapper = styled.div.withConfig({
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

    _defineProperty(_assertThisInitialized(_this), "wrapper", React.createRef());

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
      return React.createElement("div", {
        ref: this.wrapper
      }, React.createElement(Manager, null, React.createElement(Reference, null, function (_ref) {
        var ref = _ref.ref;
        return React.createElement(DesktopInput, {
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
      }), focused && React.createElement(Popper, {
        placement: "bottom-start"
      }, function (_ref2) {
        var ref = _ref2.ref,
            style = _ref2.style,
            placement = _ref2.placement;
        return React.createElement(PopperWrapper, {
          ref: ref,
          style: style,
          "data-placement": placement
        }, React.createElement(Fang, {
          "data-placement": placement
        }), React.createElement(ClockWrapper, {
          "aria-label": "Clock"
        }, React.createElement(Dial, {
          color: color,
          name: "hours",
          value: shouldShowDialValues ? hoursDialValue : EMPTY_DIAL_VALUE,
          increment: function increment() {
            return onTimeChange(transformDialValuesToTime(getNextDialOption(hoursDialOptions, hoursDialValue), minutesDialValue, meridiemDialValue));
          },
          decrement: function decrement() {
            return onTimeChange(transformDialValuesToTime(getPreviousDialOption(hoursDialOptions, hoursDialValue), minutesDialValue, meridiemDialValue));
          }
        }), React.createElement(Dial, {
          color: color,
          name: "minutes",
          value: shouldShowDialValues ? minutesDialValue : EMPTY_DIAL_VALUE,
          increment: function increment() {
            return onTimeChange(transformDialValuesToTime(hoursDialValue, getNextDialOption(minutesDialOptions, minutesDialValue), meridiemDialValue));
          },
          decrement: function decrement() {
            return onTimeChange(transformDialValuesToTime(hoursDialValue, getPreviousDialOption(minutesDialOptions, minutesDialValue), meridiemDialValue));
          }
        }), React.createElement(Dial, {
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