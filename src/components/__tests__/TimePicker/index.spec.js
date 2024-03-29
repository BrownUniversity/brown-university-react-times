/* eslint-disable jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */
import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import { triggerWindowResize, resetWindowSize } from "window-test-utils";
import { breakpoints } from "brown-university-styles";
import TimePickerContainer from "../../utils/TimePickerContainer";
import TimePicker from "../../TimePicker";
import timePickerTestUtils from "../../../test-utils/time-picker";
import {
  DESKTOP_PLACEHOLDER,
  EMPTY_DIAL_VALUE,
  INVALID_TIME,
} from "../../../constants";

const renderTimePicker = (props) => {
  const id = "time-picker-test";
  const rtlUtils = render(
    <>
      <label htmlFor={id}>Time</label>
      <TimePickerContainer id={id} {...props}>
        <TimePicker />
      </TimePickerContainer>
    </>,
  );

  return rtlUtils;
};

const validateDialValues = (rtlUtils, expectedValues) => {
  const { getByLabelText, getByTestId } = rtlUtils;
  expect(getByLabelText("Clock")).toBeInTheDocument(); // clock needs to be open
  expect(getByTestId("hours-value")).toHaveTextContent(expectedValues.hours);
  expect(getByTestId("minutes-value")).toHaveTextContent(
    expectedValues.minutes,
  );
  expect(getByTestId("meridiem-value")).toHaveTextContent(
    expectedValues.meridiem,
  );
};

jest.useFakeTimers();

const waitForDebounce = () => jest.runAllTimers();

describe("TimePicker", () => {
  describe("input-driven behavior", () => {
    const setupAndValidateInputChange = ({
      timePickerProps = null,
      nextInputValue,
      expectedInputValue = null,
      expectedDialValues,
    }) => {
      const rtlUtils = renderTimePicker(timePickerProps);
      const inputElement = rtlUtils.getByLabelText("Time");

      fireEvent.change(inputElement, {
        target: { value: nextInputValue },
      });
      waitForDebounce();

      expect(inputElement.value).toBe(expectedInputValue || nextInputValue);
      validateDialValues(rtlUtils, expectedDialValues);
    };

    describe("without initial time", () => {
      it("renders placeholder and defaults dial values to noon", () => {
        const rtlUtils = renderTimePicker();
        const inputElement = rtlUtils.getByLabelText("Time");

        inputElement.focus();

        expect(
          rtlUtils.getByPlaceholderText(DESKTOP_PLACEHOLDER),
        ).toBeInTheDocument();
        expect(inputElement.value).toBe("");
        validateDialValues(rtlUtils, {
          hours: "12",
          minutes: "00",
          meridiem: "PM",
        });
      });

      it("updates dial values when a valid time is set with a leading zero", () => {
        setupAndValidateInputChange({
          nextInputValue: "09:41 AM",
          expectedDialValues: {
            hours: "09",
            minutes: "41",
            meridiem: "AM",
          },
        });
      });

      it("updates dial values when a valid time is set without a leading zero", () => {
        setupAndValidateInputChange({
          nextInputValue: "9:41 AM",
          expectedInputValue: "09:41 AM",
          expectedDialValues: {
            hours: "09",
            minutes: "41",
            meridiem: "AM",
          },
        });
      });

      it("hides dial values when an invalid time is set", () => {
        setupAndValidateInputChange({
          nextInputValue: "09:4",
          expectedDialValues: {
            hours: EMPTY_DIAL_VALUE,
            minutes: EMPTY_DIAL_VALUE,
            meridiem: EMPTY_DIAL_VALUE,
          },
        });
      });
    });

    describe("with initial time", () => {
      it("renders time and sets dial values", () => {
        const rtlUtils = renderTimePicker({
          time: "08:18",
        });
        const inputElement = rtlUtils.getByLabelText("Time");

        inputElement.focus();

        expect(inputElement.value).toBe("08:18 AM");
        validateDialValues(rtlUtils, {
          hours: "08",
          minutes: "18",
          meridiem: "AM",
        });
      });

      it("updates dial values when updated with a valid time", () => {
        setupAndValidateInputChange({
          timePickerProps: { time: "08:18" },
          nextInputValue: "11:15 PM",
          expectedDialValues: {
            hours: "11",
            minutes: "15",
            meridiem: "PM",
          },
        });
      });

      it("hides dial values when updated with an invalid time", () => {
        setupAndValidateInputChange({
          timePickerProps: { time: "08:18" },
          nextInputValue: "08:18 P",
          expectedDialValues: {
            hours: EMPTY_DIAL_VALUE,
            minutes: EMPTY_DIAL_VALUE,
            meridiem: EMPTY_DIAL_VALUE,
          },
        });
      });
    });
  });

  describe("clock-driven behavior", () => {
    const setupAndValidateDialChange = ({
      timePickerProps = null,
      dialAriaLabelText,
      expectedInputValue,
      expectedDialValues,
    }) => {
      const rtlUtils = renderTimePicker(timePickerProps);
      const inputElement = rtlUtils.getByLabelText("Time");

      inputElement.focus();
      fireEvent.mouseUp(rtlUtils.getByLabelText(dialAriaLabelText));

      expect(inputElement.value).toBe(expectedInputValue);
      validateDialValues(rtlUtils, expectedDialValues);
    };

    describe("without initial time", () => {
      it("increments hours and updates input value", () => {
        setupAndValidateDialChange({
          dialAriaLabelText: "Increment hours",
          expectedInputValue: "01:00 PM",
          expectedDialValues: {
            hours: "01",
            minutes: "00",
            meridiem: "PM",
          },
        });
      });

      it("decrements hours and updates input value", () => {
        setupAndValidateDialChange({
          dialAriaLabelText: "Decrement hours",
          expectedInputValue: "11:00 PM",
          expectedDialValues: {
            hours: "11",
            minutes: "00",
            meridiem: "PM",
          },
        });
      });

      it("increments minutes and updates input value", () => {
        setupAndValidateDialChange({
          dialAriaLabelText: "Increment minutes",
          expectedInputValue: "12:01 PM",
          expectedDialValues: {
            hours: "12",
            minutes: "01",
            meridiem: "PM",
          },
        });
      });

      it("decrements minutes and updates input value", () => {
        setupAndValidateDialChange({
          dialAriaLabelText: "Decrement minutes",
          expectedInputValue: "12:59 PM",
          expectedDialValues: {
            hours: "12",
            minutes: "59",
            meridiem: "PM",
          },
        });
      });

      it("increments meridiem and updates input value", () => {
        setupAndValidateDialChange({
          dialAriaLabelText: "Increment meridiem",
          expectedInputValue: "12:00 AM",
          expectedDialValues: {
            hours: "12",
            minutes: "00",
            meridiem: "AM",
          },
        });
      });

      it("decrements meridiem and updates input value", () => {
        setupAndValidateDialChange({
          dialAriaLabelText: "Decrement meridiem",
          expectedInputValue: "12:00 AM",
          expectedDialValues: {
            hours: "12",
            minutes: "00",
            meridiem: "AM",
          },
        });
      });
    });

    describe("with initial time", () => {
      it("increments hours and updates input value", () => {
        setupAndValidateDialChange({
          timePickerProps: { time: "01:00" },
          dialAriaLabelText: "Increment hours",
          expectedInputValue: "02:00 AM",
          expectedDialValues: {
            hours: "02",
            minutes: "00",
            meridiem: "AM",
          },
        });
      });

      it("decrements hours and updates input value", () => {
        setupAndValidateDialChange({
          timePickerProps: { time: "01:00" },
          dialAriaLabelText: "Decrement hours",
          expectedInputValue: "12:00 AM",
          expectedDialValues: {
            hours: "12",
            minutes: "00",
            meridiem: "AM",
          },
        });
      });

      it("increments minutes and updates input value", () => {
        setupAndValidateDialChange({
          timePickerProps: { time: "12:59" },
          dialAriaLabelText: "Increment minutes",
          expectedInputValue: "12:00 PM",
          expectedDialValues: {
            hours: "12",
            minutes: "00",
            meridiem: "PM",
          },
        });
      });

      it("decrements minutes and updates input value", () => {
        setupAndValidateDialChange({
          timePickerProps: { time: "12:59" },
          dialAriaLabelText: "Decrement minutes",
          expectedInputValue: "12:58 PM",
          expectedDialValues: {
            hours: "12",
            minutes: "58",
            meridiem: "PM",
          },
        });
      });

      it("increments meridiem and updates input value", () => {
        setupAndValidateDialChange({
          timePickerProps: { time: "00:00" },
          dialAriaLabelText: "Increment meridiem",
          expectedInputValue: "12:00 PM",
          expectedDialValues: {
            hours: "12",
            minutes: "00",
            meridiem: "PM",
          },
        });
      });

      it("decrements meridiem and updates input value", () => {
        setupAndValidateDialChange({
          timePickerProps: { time: "00:00" },
          dialAriaLabelText: "Decrement meridiem",
          expectedInputValue: "12:00 PM",
          expectedDialValues: {
            hours: "12",
            minutes: "00",
            meridiem: "PM",
          },
        });
      });
    });
  });

  describe("invalid time handling", () => {
    it("triggers a time change and resets the input value when it becomes valid", () => {
      const rtlUtils = renderTimePicker();
      const inputElement = rtlUtils.getByLabelText("Time");

      inputElement.focus();
      fireEvent.change(inputElement, {
        target: { value: "08:18am" },
      });
      waitForDebounce();

      expect(inputElement.value).toBe("08:18 AM");
      validateDialValues(rtlUtils, {
        hours: "08",
        minutes: "18",
        meridiem: "AM",
      });
    });

    it("resets the input value when a valid time is set via the clock", () => {
      const rtlUtils = renderTimePicker();
      const inputElement = rtlUtils.getByLabelText("Time");

      inputElement.focus();
      fireEvent.change(inputElement, {
        target: { value: "" },
      });
      fireEvent.mouseUp(rtlUtils.getByLabelText("Increment minutes"));

      expect(inputElement.value).toBe("12:01 PM");
      validateDialValues(rtlUtils, {
        hours: "12",
        minutes: "01",
        meridiem: "PM",
      });
    });

    it("triggers a time change when the input value becomes empty", () => {
      const onTimeChange = jest.fn();
      const { getByLabelText } = renderTimePicker({
        time: "08:18",
        onTimeChange,
      });

      fireEvent.change(getByLabelText("Time"), {
        target: { value: "" },
      });

      expect(onTimeChange).toHaveBeenCalledTimes(1);
      expect(onTimeChange).toHaveBeenCalledWith("");
    });

    it("triggers a time change when the input value becomes invalid", () => {
      const onTimeChange = jest.fn();
      const { getByLabelText } = renderTimePicker({ onTimeChange });

      fireEvent.change(getByLabelText("Time"), {
        target: { value: "08:1" },
      });

      expect(onTimeChange).toHaveBeenCalledTimes(1);
      expect(onTimeChange).toHaveBeenCalledWith(INVALID_TIME);
    });
  });

  describe("focus management", () => {
    it("calls onFocusChange with `{ focused: true }` if input value changes and focused is false", () => {
      const onFocusChange = jest.fn();
      const { getByLabelText } = renderTimePicker({
        onFocusChange,
      });

      fireEvent.change(getByLabelText("Time"), {
        target: { value: "08:18" },
      });

      expect(onFocusChange).toHaveBeenCalledTimes(1);
      expect(onFocusChange).toHaveBeenCalledWith({ focused: true });
    });

    it("does not call onFocusChange if input value changes and focused is true", () => {
      const onFocusChange = jest.fn();
      const { getByLabelText } = renderTimePicker({
        focused: true,
        onFocusChange,
      });

      fireEvent.change(getByLabelText("Time"), {
        target: { value: "08:18" },
      });

      expect(onFocusChange).not.toHaveBeenCalled();
    });

    it("calls onFocusChange with `{ focused: false }` on click outside time picker if focused is true", () => {
      const onFocusChange = jest.fn();
      const { container } = renderTimePicker({
        focused: true,
        onFocusChange,
      });

      act(() => {
        container.click();
      });

      expect(onFocusChange).toHaveBeenCalledTimes(1);
      expect(onFocusChange).toHaveBeenCalledWith({ focused: false });
    });

    it("does not call onFocusChange on click outside time picker if focused is false", () => {
      const onFocusChange = jest.fn();
      const { container } = renderTimePicker({
        onFocusChange,
      });

      container.click();

      expect(onFocusChange).not.toHaveBeenCalled();
    });

    it("calls onFocusChange with `{ focused: false }` on shift + tab from first element", () => {
      const onFocusChange = jest.fn();
      const { getByLabelText } = renderTimePicker({
        onFocusChange,
      });

      fireEvent.keyDown(getByLabelText("hours:minutes meridiem"), {
        shiftKey: true,
        keyCode: 9,
      });

      expect(onFocusChange).toHaveBeenCalledTimes(1);
      expect(onFocusChange).toHaveBeenCalledWith({ focused: false });
    });

    it("calls onFocusChange with `{ focused: false }` on tab from last element", () => {
      const onFocusChange = jest.fn();
      const { getByLabelText } = renderTimePicker({
        onFocusChange,
      });

      getByLabelText("Time").focus();
      onFocusChange.mockReset();
      fireEvent.keyDown(getByLabelText("Decrement meridiem"), {
        keyCode: 9,
      });

      expect(onFocusChange).toHaveBeenCalledTimes(1);
      expect(onFocusChange).toHaveBeenCalledWith({
        focused: false,
      });
    });
  });

  describe("mobile", () => {
    beforeAll(() => {
      triggerWindowResize({ width: breakpoints.md - 1 });
    });

    afterAll(() => {
      resetWindowSize();
    });

    it("falls back to native time input", () => {
      const { getByLabelText, queryByLabelText } = renderTimePicker();
      const inputElement = getByLabelText("Time");
      expect(inputElement).toHaveAttribute("type", "time");
      inputElement.focus();
      expect(queryByLabelText("Clock")).not.toBeInTheDocument();
    });

    it("handles time change", () => {
      const { getByLabelText } = renderTimePicker();
      const inputElement = getByLabelText("Time");
      const nextValue = "09:41";

      fireEvent.change(inputElement, {
        target: { value: nextValue },
      });

      expect(inputElement.value).toBe(nextValue);
    });

    it("calls `onFocusChange` with `{ focused: false }` on blur", () => {
      const onFocusChange = jest.fn();
      const { getByLabelText } = renderTimePicker({ onFocusChange });

      fireEvent.blur(getByLabelText("Time"));

      expect(onFocusChange).toHaveBeenCalledTimes(1);
      expect(onFocusChange).toHaveBeenCalledWith({ focused: false });
    });
  });
});

describe("timePickerTestUtils", () => {
  it("handles empty selection", () => {
    const rtlUtils = renderTimePicker({ time: "08:18" });
    const element = rtlUtils.getByLabelText("Time");

    timePickerTestUtils.makeSelection({
      element,
      time: null,
    });

    expect(element.value).toBe("");
    element.focus();
    validateDialValues(rtlUtils, {
      hours: EMPTY_DIAL_VALUE,
      minutes: EMPTY_DIAL_VALUE,
      meridiem: EMPTY_DIAL_VALUE,
    });
  });

  it("handles time selection", () => {
    const rtlUtils = renderTimePicker();
    const element = rtlUtils.getByLabelText("Time");

    timePickerTestUtils.makeSelection({
      element,
      time: "08:18",
    });

    expect(element.value).toBe("08:18 AM");
    element.focus();
    validateDialValues(rtlUtils, {
      hours: "08",
      minutes: "18",
      meridiem: "AM",
    });
  });

  describe("mobile", () => {
    beforeAll(() => {
      triggerWindowResize({ width: breakpoints.md - 1 });
    });

    afterAll(() => {
      resetWindowSize();
    });

    it("handles empty selection", () => {
      const rtlUtils = renderTimePicker({ time: "08:18" });
      const element = rtlUtils.getByLabelText("Time");

      timePickerTestUtils.makeSelection({
        element,
        time: "",
      });

      expect(element.value).toBe("");
    });

    it("handles time selection", () => {
      const rtlUtils = renderTimePicker();
      const element = rtlUtils.getByLabelText("Time");
      const time = "08:18";

      timePickerTestUtils.makeSelection({
        element,
        time,
      });

      expect(element.value).toBe(time);
    });
  });
});
