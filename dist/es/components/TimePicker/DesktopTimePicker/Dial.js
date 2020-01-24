import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { colors, typography } from "brown-university-styles";
import DialButton from "./DialButton";

var ChevronUpSVG = function ChevronUpSVG(props) {
  return React.createElement("svg", props, React.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fillRule: "evenodd"
  }, React.createElement("path", {
    d: "M4.429 10.642V2.785a.714.714 0 1 0-1.429 0v8.572a.712.712 0 0 0 .714.714h8.572a.714.714 0 0 0 0-1.429H4.429z",
    transform: "scale(1 -1) rotate(-45 -9.571 1.207)",
    id: "chevron-up",
    fill: "#98A4AE"
  })));
};

ChevronUpSVG.defaultProps = {
  focusable: "false",
  width: "14",
  height: "8",
  viewBox: "0 0 14 8"
};

var ChevronDownSVG = function ChevronDownSVG(props) {
  return React.createElement("svg", props, React.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("path", {
    d: "M309.429 294.642v-7.857a.714.714 0 0 0-1.429 0v8.572a.712.712 0 0 0 .714.714h8.572a.714.714 0 0 0 0-1.429h-7.857z",
    transform: "scale(-1 1) rotate(-45 -197.061 532.345)",
    id: "chevron-down",
    fill: "#98A4AE"
  })));
};

ChevronDownSVG.defaultProps = {
  focusable: "false",
  width: "14",
  height: "8",
  viewBox: "0 0 14 8"
};
/*
  inner components
*/

var Wrapper = styled.div.withConfig({
  displayName: "Dial__Wrapper",
  componentId: "sc-6o91f6-0"
})(["text-align:center;"]);
var Value = styled.div.withConfig({
  displayName: "Dial__Value",
  componentId: "sc-6o91f6-1"
})(["color:", ";font-family:", ";font-size:14px;font-weight:bold;padding:10px 0;"], colors.black, typography.sans);
/*
  outer Dial component
*/

var Dial = function Dial(_ref) {
  var color = _ref.color,
      name = _ref.name,
      value = _ref.value,
      increment = _ref.increment,
      decrement = _ref.decrement;
  return React.createElement(Wrapper, null, React.createElement(DialButton, {
    color: color,
    ariaLabel: "Increment ".concat(name),
    onClick: increment
  }, React.createElement(ChevronUpSVG, null)), React.createElement(Value, {
    "data-testid": "".concat(name, "-value")
  }, value), React.createElement(DialButton, {
    color: color,
    ariaLabel: "Decrement ".concat(name),
    onClick: decrement
  }, React.createElement(ChevronDownSVG, null)));
};

Dial.propTypes = {
  color: PropTypes.oneOf(["red", "brown", "emerald", "darkEmerald", "skyBlue", "navy", "idRed"]).isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
};
export default Dial;