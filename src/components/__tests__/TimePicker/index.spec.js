/* eslint-disable jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */
import React from "react";
import { render } from "react-testing-library";
// import { triggerWindowResize, resetWindowSize } from "window-test-utils";
// import { breakpoints } from "brown-university-styles";
import TimePickerContainer from "../../utils/TimePickerContainer";
import TimePicker from "../../TimePicker";

const renderTimePicker = props => {
  const id = "single-date-picker-test";
  const rtlUtils = render(
    <>
      <label htmlFor={id}>Time</label>
      <TimePickerContainer id={id} {...props}>
        <TimePicker />
      </TimePickerContainer>
    </>
  );

  return rtlUtils;
};

describe("TimePicker", () => {
  it("renders", () => {
    const rtlUtils = renderTimePicker();
    rtlUtils.getByLabelText("Time");
  });
});
