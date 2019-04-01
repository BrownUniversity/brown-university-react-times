import { fireEvent } from "react-testing-library";
import { transformTimeToDialValues } from "../components/TimePicker/DesktopTimePicker/utils";

function makeSelection({ element: inputElement, time: nextSelectionTime }) {
  /*
    handle empty time selection
  */
  if (!nextSelectionTime) {
    return fireEvent.change(inputElement, {
      target: { value: "" }
    });
  }

  /*
    handle mobile time selection
  */
  if (inputElement.type === "time") {
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

  // close time picker via shift + tab from first element
  fireEvent.keyDown(inputElement, { shiftKey: true, keyCode: 9 });
}

export default { makeSelection };
