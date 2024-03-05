import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { inputCSS } from "../../styles";

/*
  inner components
*/
var MobileInput = styled.input.withConfig({
  displayName: "MobileTimePicker__MobileInput",
  componentId: "sc-1dhrhjt-0"
})(["", " padding:8px;"], inputCSS);

/*
  outer MobileTimePicker component
*/
export default function MobileTimePicker(_ref) {
  var id = _ref.id,
    time = _ref.time,
    onTimeChange = _ref.onTimeChange,
    onFocusChange = _ref.onFocusChange;
  return /*#__PURE__*/React.createElement(MobileInput, {
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
}
MobileTimePicker.propTypes = {
  id: PropTypes.string.isRequired,
  time: PropTypes.string,
  onTimeChange: PropTypes.func.isRequired,
  onFocusChange: PropTypes.func.isRequired
};
MobileTimePicker.defaultProps = {
  time: null
};