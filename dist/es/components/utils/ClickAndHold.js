function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
import { Component } from "react";
export var CLICK_AND_HOLD_MILLISECONDS = 125;
var ClickAndHold = /*#__PURE__*/function (_Component) {
  _inherits(ClickAndHold, _Component);
  function ClickAndHold(props) {
    var _this;
    _classCallCheck(this, ClickAndHold);
    _this = _callSuper(this, ClickAndHold, [props]);
    _defineProperty(_assertThisInitialized(_this), "buttonPressTimeout", null);
    _defineProperty(_assertThisInitialized(_this), "onClickInterval", null);
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
    _this.state = {
      onClickCallCount: 0
    };
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
}(Component);
ClickAndHold.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired
};
export default ClickAndHold;