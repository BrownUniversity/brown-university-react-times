import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { inputCSS } from "../../styles";

/*
  inner components
*/
const MobileInput = styled.input`
  ${inputCSS}
  padding: 8px;
`;

/*
  outer MobileTimePicker component
*/
export default function MobileTimePicker({
  id,
  time,
  onTimeChange,
  onFocusChange,
}) {
  return (
    <MobileInput
      type="time"
      id={id}
      value={time || ""}
      onChange={(e) => onTimeChange(e.target.value)}
      onBlur={() => onFocusChange({ focused: false })}
    />
  );
}

MobileTimePicker.propTypes = {
  id: PropTypes.string.isRequired,
  time: PropTypes.string,
  onTimeChange: PropTypes.func.isRequired,
  onFocusChange: PropTypes.func.isRequired,
};

MobileTimePicker.defaultProps = {
  time: null,
};
