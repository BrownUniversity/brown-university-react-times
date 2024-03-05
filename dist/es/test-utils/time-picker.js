function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { fireEvent } from "@testing-library/react";
import { transformTimeToDialValues } from "../components/TimePicker/DesktopTimePicker/utils";
var timeFormat = "hh:mm A";
function makeSelection(_ref) {
  var inputElement = _ref.element,
    nextSelectionTime = _ref.time;
  // eslint-disable-next-line no-underscore-dangle
  var usingFakeTimers = setTimeout._isMockFunction;
  if (!usingFakeTimers) {
    jest.useFakeTimers();
  }
  function restoreTimerState() {
    jest.runAllTimers();
    if (!usingFakeTimers) {
      jest.useRealTimers();
    }
  }
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
  restoreTimerState();
  closeDesktopClock();
  return undefined;
}
export default {
  timeFormat: timeFormat,
  makeSelection: makeSelection
};