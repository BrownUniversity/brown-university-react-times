import React from "react";
import { breakpoints } from "brown-university-styles";
import { storiesOf } from "@storybook/react";
import { withKnobs, select, number } from "@storybook/addon-knobs";
import TimePickerContainer from "../src/components/utils/TimePickerContainer";
import TimePickerWithValidation from "./components/TimePickerWithValidation";
import { TimePicker } from "../src";

const getCommonProps = () => ({
  color: select("color", [
    "red",
    "brown",
    "emerald",
    "skyBlue",
    "navy",
    "idRed"
  ]),
  mobileBreakpoint: number("mobileBreakpoint", breakpoints.md)
});

const renderTimePicker = additionalProps => (
  <TimePickerContainer {...additionalProps} {...getCommonProps()}>
    <TimePicker />
  </TimePickerContainer>
);

storiesOf("TimePicker", module)
  .addDecorator(withKnobs)
  .add("default", () => renderTimePicker())
  .add("with initial time", () => renderTimePicker({ time: "09:41" }))
  .add("with validation", () => (
    <TimePickerWithValidation {...getCommonProps()} />
  ));
