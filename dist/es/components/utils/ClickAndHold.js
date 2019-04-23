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

import PropTypes from "prop-types";
import { Component } from "react";
export var CLICK_AND_HOLD_MILLISECONDS = 125;

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
}(Component);

ClickAndHold.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired
};
export default ClickAndHold;