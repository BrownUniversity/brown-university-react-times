import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { colors, typography } from "brown-university-styles";
import ChevronUpSVG from "../../../svg/chevron-up.svg";
import ChevronDownSVG from "../../../svg/chevron-down.svg";

const Wrapper = styled.div`
  text-align: center;
`;

const Button = styled.button`
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

const Value = styled.div`
  color: ${colors.black};
  font-family: ${typography.sans};
  font-size: 14px;
  font-weight: bold;
  padding: 10px 0;
`;

const Dial = ({ color, value, increment, decrement }) => (
  <Wrapper>
    <Button color={color} type="button" onClick={increment}>
      <ChevronUpSVG />
    </Button>
    <Value>{value}</Value>
    <Button color={color} type="button" onClick={decrement}>
      <ChevronDownSVG />
    </Button>
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
  value: PropTypes.string.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
};

export default Dial;
