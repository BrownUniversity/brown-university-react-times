import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { colors } from "brown-university-styles";
import ClickAndHold from "../../utils/ClickAndHold";

/*
  inner components
*/
const Button = styled.button`
  background-color: transparent;
  border: 1px solid ${colors.lightGray};
  border-radius: 3px;
  color: ${({ color }) => colors[color]};
  cursor: pointer;
  line-height: 0.78;
  padding: 9px 6px;

  #chevron-up,
  #chevron-down {
    fill: ${({ color }) => colors[color]};
  }
`;

/*
  outer DialButton component
*/
const Dial = ({ color, ariaLabel, onClick, children }) => (
  <ClickAndHold onClick={onClick}>
    {clickAndHoldProps => (
      <Button
        type="button"
        color={color}
        aria-label={ariaLabel}
        onClick={onClick}
        {...clickAndHoldProps}
      >
        {children}
      </Button>
    )}
  </ClickAndHold>
);

Dial.propTypes = {
  color: PropTypes.oneOf([
    "red",
    "brown",
    "emerald",
    "skyBlue",
    "navy",
    "idRed"
  ]).isRequired,
  ariaLabel: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default Dial;
