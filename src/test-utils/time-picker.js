import { fireEvent } from "@testing-library/react";
import { transformTimeToDialValues } from "../components/TimePicker/DesktopTimePicker/utils";

const timeFormat = "hh:mm A";

function makeSelection({ element: inputElement, time: nextSelectionTime }) {
  // eslint-disable-next-line no-underscore-dangle
  const usingFakeTimers = setTimeout._isMockFunction;
  if (!usingFakeTimers) {
    jest.useFakeTimers();
  }

  function restoreTimerState() {
    jest.runAllTimers();
    if (!usingFakeTimers) {
      jest.useRealTimers();
    }
  }

  const isMobile = inputElement.type === "time";
  const closeDesktopClock = () => {
    // shift + tab from first element
    fireEvent.keyDown(inputElement, { shiftKey: true, keyCode: 9 });
  };

  /*
    handle empty time selection
  */
  if (!nextSelectionTime) {
    fireEvent.change(inputElement, {
      target: { value: "" }
    });
    if (!isMobile) {
      restoreTimerState();
      return closeDesktopClock();
    }
    restoreTimerState();
    return undefined;
  }

  /*
    handle mobile time selection
  */
  if (isMobile) {
    restoreTimerState();
    return fireEvent.change(inputElement, {
      target: { value: nextSelectionTime }
    });
  }

  /*
    handle desktop time selection
  */
  const [hh, mm, aa] = transformTimeToDialValues(nextSelectionTime);
  fireEvent.change(inputElement, {
    target: {
      value: `${hh}:${mm} ${aa}`
    }
  });
  restoreTimerState();
  closeDesktopClock();
  return undefined;
}

export default { timeFormat, makeSelection };
