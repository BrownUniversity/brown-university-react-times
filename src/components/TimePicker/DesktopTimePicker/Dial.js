import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { colors, typography } from "brown-university-styles";
import DialButton from "./DialButton";
import ChevronUpSVG from "../../../svg/chevron-up.svg";
import ChevronDownSVG from "../../../svg/chevron-down.svg";

/*
  inner components
*/
const Wrapper = styled.div`
  text-align: center;
`;

const Value = styled.div`
  color: ${colors.black};
  font-family: ${typography.sans};
  font-size: 14px;
  font-weight: bold;
  padding: 10px 0;
`;

/*
  outer Dial component
*/
const Dial = ({ color, name, value, increment, decrement }) => (
  <Wrapper>
    <DialButton
      color={color}
      ariaLabel={`Increment ${name}`}
      onClick={increment}
    >
      <ChevronUpSVG />
    </DialButton>
    <Value data-testid={`${name}-value`}>{value}</Value>
    <DialButton
      color={color}
      ariaLabel={`Decrement ${name}`}
      onClick={decrement}
    >
      <ChevronDownSVG />
    </DialButton>
  </Wrapper>
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
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
};

export default Dial;
