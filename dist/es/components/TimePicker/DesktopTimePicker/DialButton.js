function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { colors } from "brown-university-styles";
import ClickAndHold from "../../utils/ClickAndHold";

/*
  inner components
*/
var Button = styled.button.withConfig({
  displayName: "DialButton__Button",
  componentId: "sc-1ry571d-0"
})(["background-color:transparent;border:1px solid ", ";border-radius:3px;color:", ";cursor:pointer;line-height:0.78;padding:9px 6px;#chevron-up,#chevron-down{fill:", ";}"], colors.lightGray, function (_ref) {
  var color = _ref.color;
  return colors[color];
}, function (_ref2) {
  var color = _ref2.color;
  return colors[color];
});

/*
  outer DialButton component
*/
export default function DialButton(_ref3) {
  var color = _ref3.color,
    ariaLabel = _ref3.ariaLabel,
    onClick = _ref3.onClick,
    children = _ref3.children;
  return /*#__PURE__*/React.createElement(ClickAndHold, {
    onClick: onClick
  }, function (clickAndHoldProps) {
    return /*#__PURE__*/React.createElement(Button, _extends({
      type: "button",
      color: color,
      "aria-label": ariaLabel
    }, clickAndHoldProps), children);
  });
}
DialButton.propTypes = {
  color: PropTypes.oneOf(["red", "brown", "emerald", "darkEmerald", "skyBlue", "navy", "idRed"]).isRequired,
  ariaLabel: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};