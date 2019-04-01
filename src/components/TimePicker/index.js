import PropTypes from "prop-types";
import React from "react";
import { WindowSize } from "react-fns";
import { breakpoints } from "brown-university-styles";
import MobileTimePicker from "./MobileTimePicker";
import DesktopTimePicker from "./DesktopTimePicker";

const TimePicker = ({ mobileBreakpoint, ...restProps }) => (
  <WindowSize
    render={({ width }) => {
      // `width` returns 0 on initial render (see `react-fns` issue 84)
      const currentWidth = width === 0 ? window.innerWidth : width;
      const renderMobile = currentWidth < mobileBreakpoint;

      if (renderMobile) {
        return <MobileTimePicker {...restProps} />;
      }

      return <DesktopTimePicker {...restProps} />;
    }}
  />
);

TimePicker.propTypes = {
  mobileBreakpoint: PropTypes.number
};

TimePicker.defaultProps = {
  mobileBreakpoint: breakpoints.md
};

export default TimePicker;
