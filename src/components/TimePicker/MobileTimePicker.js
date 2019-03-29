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
const MobileTimePicker = ({ id, time, onTimeChange }) => (
  <MobileInput
    type="time"
    id={id}
    value={time || ""}
    onChange={e => onTimeChange(e.target.value)}
  />
);

MobileTimePicker.propTypes = {
  id: PropTypes.string.isRequired,
  time: PropTypes.string,
  onTimeChange: PropTypes.func.isRequired
};

MobileTimePicker.defaultProps = {
  time: null
};

export default MobileTimePicker;
