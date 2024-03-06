import React from "react";
import { breakpoints } from "brown-university-styles";
import { withKnobs, select, number } from "@storybook/addon-knobs";
import TimePickerContainer from "../src/components/utils/TimePickerContainer";
import TimePickerContainerWithValidation from "./components/TimePickerContainerWithValidation";
import { TimePicker } from "../src";

const getCommonProps = () => ({
  color: select("color", [
    "red",
    "brown",
    "emerald",
    "darkEmerald",
    "skyBlue",
    "navy",
    "idRed",
  ]),
  mobileBreakpoint: number("mobileBreakpoint", breakpoints.md),
});

const renderTimePicker = (additionalProps) => (
  <TimePickerContainer {...additionalProps} {...getCommonProps()}>
    <TimePicker />
  </TimePickerContainer>
);

export default {
  title: "TimePicker",
  decorators: [withKnobs],
};

export const Default = () => renderTimePicker();

Default.story = {
  name: "default",
};

export const WithInitialTime = () => renderTimePicker({ time: "09:41" });

WithInitialTime.story = {
  name: "with initial time",
};

export function WithValidation() {
  return (
    <TimePickerContainerWithValidation {...getCommonProps()}>
      <TimePicker />
    </TimePickerContainerWithValidation>
  );
}

WithValidation.story = {
  name: "with validation",
};
