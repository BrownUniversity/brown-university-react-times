import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DialButton from "../../../TimePicker/DesktopTimePicker/DialButton";
import { CLICK_AND_HOLD_MILLISECONDS } from "../../../utils/ClickAndHold";

jest.useFakeTimers();

const renderDialButton = ({ onClick }) => {
  const rtlUtils = render(
    <DialButton color="red" ariaLabel="Click me" onClick={onClick}>
      Click Me
    </DialButton>
  );

  const mouseClickAndHoldFor = milliseconds => {
    const buttonElement = rtlUtils.getByText("Click Me");
    fireEvent.mouseDown(buttonElement);
    jest.advanceTimersByTime(milliseconds);
    fireEvent.mouseUp(buttonElement);
  };

  return { mouseClickAndHoldFor, ...rtlUtils };
};

describe("DesktopTimePicker > DialButton", () => {
  describe("mouse events", () => {
    describe("when button is clicked but not held", () => {
      it("should call onClick handler once", () => {
        const onClick = jest.fn();
        const { mouseClickAndHoldFor } = renderDialButton({ onClick });
        mouseClickAndHoldFor(0);
        expect(onClick).toHaveBeenCalledTimes(1);
      });
    });

    describe("when button is clicked and held", () => {
      describe("and timeout is not met", () => {
        it("should call onClick handler once", () => {
          const onClick = jest.fn();
          const { mouseClickAndHoldFor } = renderDialButton({ onClick });
          mouseClickAndHoldFor(CLICK_AND_HOLD_MILLISECONDS - 1);
          expect(onClick).toHaveBeenCalledTimes(1);
        });
      });

      describe("and timeout is met", () => {
        it("should call onClick handler once", () => {
          const onClick = jest.fn();
          const { mouseClickAndHoldFor } = renderDialButton({ onClick });
          mouseClickAndHoldFor(CLICK_AND_HOLD_MILLISECONDS);
          expect(onClick).toHaveBeenCalledTimes(1);
        });
      });

      describe("and timeout is exceeded", () => {
        it("should call onClick handler repeatedly", () => {
          const onClick = jest.fn();
          const { mouseClickAndHoldFor } = renderDialButton({ onClick });
          mouseClickAndHoldFor(CLICK_AND_HOLD_MILLISECONDS * 4);
          expect(onClick).toHaveBeenCalledTimes(3);
        });
      });
    });
  });

  describe("keyboard events ", () => {
    const enterKey = { key: "Enter", code: 13, charCode: 13 };
    const spaceKey = { key: " ", code: 32, charCode: 32 };

    it("should call onClick handler on enter key press", () => {
      const onClick = jest.fn();
      const { getByText } = renderDialButton({ onClick });
      fireEvent.keyPress(getByText("Click Me"), enterKey);
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it("should call onClick handler on space key press", () => {
      const onClick = jest.fn();
      const { getByText } = renderDialButton({ onClick });
      fireEvent.keyPress(getByText("Click Me"), spaceKey);
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });
});
