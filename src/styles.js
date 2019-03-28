import { css } from "styled-components";
import { colors, typography, getRems } from "brown-university-styles";

// eslint-disable-next-line import/prefer-default-export
export const inputCSS = css`
  box-sizing: border-box;
  color: ${colors.mediumGray};
  display: block;
  font-family: ${typography.sans};
  font-size: ${getRems(16)};
  width: 100%;
`;
