import { css } from "styled-components";
import { colors, typography, getRems } from "brown-university-styles"; // eslint-disable-next-line import/prefer-default-export

export var inputCSS = css(["box-sizing:border-box;color:", ";display:block;font-family:", ";font-size:", ";width:100%;"], colors.mediumGray, typography.sans, getRems(16));