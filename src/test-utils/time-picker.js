import { fireEvent } from "@testing-library/react";
import { transformTimeToDialValues } from "../components/TimePicker/DesktopTimePicker/utils";

const timeFormat = "hh:mm A";

function makeSelection({ element: inputElement, time: nextSelectionTime }) {
  jest.useFakeTimers();
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
      jest.runAllTimers();
      return closeDesktopClock();
    }
    return undefined;
  }

  /*
    handle mobile time selection
  */
  if (isMobile) {
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
  jest.runAllTimers();
  closeDesktopClock();
  return undefined;
}

export default { timeFormat, makeSelection };
