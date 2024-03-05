var _excluded = ["mobileBreakpoint"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import PropTypes from "prop-types";
import React from "react";
import { WindowSize } from "react-fns";
import { breakpoints } from "brown-university-styles";
import MobileTimePicker from "./MobileTimePicker";
import DesktopTimePicker from "./DesktopTimePicker";
export default function TimePicker(_ref) {
  var mobileBreakpoint = _ref.mobileBreakpoint,
    restProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(WindowSize, {
    render: function render(_ref2) {
      var width = _ref2.width;
      // `width` returns 0 on initial render (see `react-fns` issue 84)
      var currentWidth = width === 0 ? window.innerWidth : width;
      var renderMobile = currentWidth < mobileBreakpoint;
      if (renderMobile) {
        return /*#__PURE__*/React.createElement(MobileTimePicker, restProps);
      }
      return /*#__PURE__*/React.createElement(DesktopTimePicker, restProps);
    }
  });
}
TimePicker.propTypes = {
  mobileBreakpoint: PropTypes.number
};
TimePicker.defaultProps = {
  mobileBreakpoint: breakpoints.md
};