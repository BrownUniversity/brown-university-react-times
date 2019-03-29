/* eslint-disable jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */
import React from "react";
import { render, fireEvent, within } from "react-testing-library";
import { triggerWindowResize, resetWindowSize } from "window-test-utils";
import { breakpoints } from "brown-university-styles";
import TimePickerContainer from "../../utils/TimePickerContainer";
import TimePicker from "../../TimePicker";

const renderTimePicker = props => {
  const id = "time-picker-test";
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

const validateClockDialValues = (rtlUtils, expectedValues) => {
  const clockElement = rtlUtils.getByLabelText("Clock");
  const { getByText } = within(clockElement);
  expectedValues.forEach(val => expect(getByText(val)));
};

describe("TimePicker", () => {
  describe("input-driven behavior", () => {
    const setupAndValidateInputChange = ({
      timePickerProps = null,
      nextInputValue,
      expectedClockDialValues
    }) => {
      const rtlUtils = renderTimePicker(timePickerProps);
      const inputElement = rtlUtils.getByLabelText("Time");

      fireEvent.change(inputElement, {
        target: { value: nextInputValue }
      });

      expect(inputElement.value).toBe(nextInputValue);
      validateClockDialValues(rtlUtils, expectedClockDialValues);
    };

    describe("without initial time", () => {
      it("renders placeholder and defaults clock values to noon", () => {
        const rtlUtils = renderTimePicker();
        const inputElement = rtlUtils.getByLabelText("Time");

        inputElement.focus();

        expect(inputElement.value).toBe("--:-- --");
        validateClockDialValues(rtlUtils, ["12", "00", "PM"]);
      });

      it("updates clock values when a valid time is set", () => {
        setupAndValidateInputChange({
          nextInputValue: "09:41 AM",
          expectedClockDialValues: ["09", "41", "AM"]
        });
      });

      it("hides clock values when an invalid time is set", () => {
        setupAndValidateInputChange({
          nextInputValue: "09:4",
          expectedClockDialValues: ["--", "--", "--"]
        });
      });
    });

    describe("with initial time", () => {
      it("renders date and sets clock values", () => {
        const rtlUtils = renderTimePicker({
          time: "08:18"
        });
        const inputElement = rtlUtils.getByLabelText("Time");

        inputElement.focus();

        expect(inputElement.value).toBe("08:18 AM");
        validateClockDialValues(rtlUtils, ["08", "18", "AM"]);
      });

      it("updates clock values accordingly when updated with a valid time", async () => {
        setupAndValidateInputChange({
          timePickerProps: { time: "08:18" },
          nextInputValue: "09:41 PM",
          expectedClockDialValues: ["09", "41", "PM"]
        });
      });

      it("hides clock values when updated with an invalid time", () => {
        setupAndValidateInputChange({
          timePickerProps: { time: "08:18" },
          nextInputValue: "08:18 P",
          expectedClockDialValues: ["--", "--", "--"]
        });
      });
    });
  });

  describe("clock-driven behavior", () => {
    const setupAndValidateClockDialChange = ({
      timePickerProps = null,
      dialAriaLabelText,
      expectedInputValue,
      expectedClockDialValues
    }) => {
      const rtlUtils = renderTimePicker(timePickerProps);
      const inputElement = rtlUtils.getByLabelText("Time");

      inputElement.focus();
      fireEvent.click(rtlUtils.getByLabelText(dialAriaLabelText));

      expect(inputElement.value).toBe(expectedInputValue);
      validateClockDialValues(rtlUtils, expectedClockDialValues);
    };

    describe("without initial time", () => {
      it("increments hours and updates input value", () => {
        setupAndValidateClockDialChange({
          dialAriaLabelText: "Increment hours",
          expectedInputValue: "01:00 PM",
          expectedClockDialValues: ["01", "00", "PM"]
        });
      });

      it("decrements hours and updates input value", () => {
        setupAndValidateClockDialChange({
          dialAriaLabelText: "Decrement hours",
          expectedInputValue: "11:00 PM",
          expectedClockDialValues: ["11", "00", "PM"]
        });
      });

      it("increments minutes and updates input value", () => {
        setupAndValidateClockDialChange({
          dialAriaLabelText: "Increment minutes",
          expectedInputValue: "12:01 PM",
          expectedClockDialValues: ["12", "01", "PM"]
        });
      });

      it("decrements minutes and updates input value", () => {
        setupAndValidateClockDialChange({
          dialAriaLabelText: "Decrement minutes",
          expectedInputValue: "12:59 PM",
          expectedClockDialValues: ["12", "59", "PM"]
        });
      });

      it("increments meridiem and updates input value", () => {
        setupAndValidateClockDialChange({
          dialAriaLabelText: "Increment meridiem",
          expectedInputValue: "12:00 AM",
          expectedClockDialValues: ["12", "00", "AM"]
        });
      });

      it("decrements meridiem and updates input value", () => {
        setupAndValidateClockDialChange({
          dialAriaLabelText: "Decrement meridiem",
          expectedInputValue: "12:00 AM",
          expectedClockDialValues: ["12", "00", "AM"]
        });
      });
    });

    describe("with initial time", () => {
      it("increments hours and updates input value", () => {
        setupAndValidateClockDialChange({
          timePickerProps: { time: "01:00" },
          dialAriaLabelText: "Increment hours",
          expectedInputValue: "02:00 AM",
          expectedClockDialValues: ["02", "00", "AM"]
        });
      });

      it("decrements hours and updates input value", () => {
        setupAndValidateClockDialChange({
          timePickerProps: { time: "01:00" },
          dialAriaLabelText: "Decrement hours",
          expectedInputValue: "12:00 AM",
          expectedClockDialValues: ["12", "00", "AM"]
        });
      });

      it("increments minutes and updates input value", () => {
        setupAndValidateClockDialChange({
          timePickerProps: { time: "12:59" },
          dialAriaLabelText: "Increment minutes",
          expectedInputValue: "12:00 PM",
          expectedClockDialValues: ["12", "00", "PM"]
        });
      });

      it("decrements minutes and updates input value", () => {
        setupAndValidateClockDialChange({
          timePickerProps: { time: "12:59" },
          dialAriaLabelText: "Decrement minutes",
          expectedInputValue: "12:58 PM",
          expectedClockDialValues: ["12", "58", "PM"]
        });
      });

      it("increments meridiem and updates input value", () => {
        setupAndValidateClockDialChange({
          timePickerProps: { time: "00:00" },
          dialAriaLabelText: "Increment meridiem",
          expectedInputValue: "12:00 PM",
          expectedClockDialValues: ["12", "00", "PM"]
        });
      });

      it("decrements meridiem and updates input value", () => {
        setupAndValidateClockDialChange({
          timePickerProps: { time: "00:00" },
          dialAriaLabelText: "Decrement meridiem",
          expectedInputValue: "12:00 PM",
          expectedClockDialValues: ["12", "00", "PM"]
        });
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
      const { getByLabelText } = renderTimePicker();
      expect(getByLabelText("Time")).toHaveAttribute("type", "time");
    });

    it("handles time change", () => {
      const { getByLabelText } = renderTimePicker();
      const inputElement = getByLabelText("Time");
      const nextValue = "09:41";

      fireEvent.change(inputElement, {
        target: { value: nextValue }
      });

      expect(inputElement.value).toBe(nextValue);
    });
  });
});
