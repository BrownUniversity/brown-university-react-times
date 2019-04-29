function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import { fireEvent } from "react-testing-library";
import { transformTimeToDialValues } from "../components/TimePicker/DesktopTimePicker/utils";
var timeFormat = "hh:mm A";

function makeSelection(_ref) {
  var inputElement = _ref.element,
      nextSelectionTime = _ref.time;
  jest.useFakeTimers();
  var isMobile = inputElement.type === "time";

  var closeDesktopClock = function closeDesktopClock() {
    // shift + tab from first element
    fireEvent.keyDown(inputElement, {
      shiftKey: true,
      keyCode: 9
    });
  };
  /*
    handle empty time selection
  */


  if (!nextSelectionTime) {
    fireEvent.change(inputElement, {
      target: {
        value: ""
      }
    });

    if (!isMobile) {
      return closeDesktopClock();
    }

    return undefined;
  }
  /*
    handle mobile time selection
  */


  if (isMobile) {
    return fireEvent.change(inputElement, {
      target: {
        value: nextSelectionTime
      }
    });
  }
  /*
    handle desktop time selection
  */


  var _transformTimeToDialV = transformTimeToDialValues(nextSelectionTime),
      _transformTimeToDialV2 = _slicedToArray(_transformTimeToDialV, 3),
      hh = _transformTimeToDialV2[0],
      mm = _transformTimeToDialV2[1],
      aa = _transformTimeToDialV2[2];

  fireEvent.change(inputElement, {
    target: {
      value: "".concat(hh, ":").concat(mm, " ").concat(aa)
    }
  });
  jest.runAllTimers();
  closeDesktopClock();
  return undefined;
}

export default {
  timeFormat: timeFormat,
  makeSelection: makeSelection
};