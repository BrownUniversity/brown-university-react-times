function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

import { INVALID_TIME } from "../../../constants";
/*
  input
*/

export var getInputIsDirty = function getInputIsDirty(val) {
  return val !== null;
};
export var getInputValueIsValid = function getInputValueIsValid(val) {
  return !!val && val.trim().length < 9 && /\b((1[0-2]|0[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/.test(val);
};
export var transformInputValueToDialValues = function transformInputValueToDialValues(val) {
  var cleanedVal = val.trim().replace("am", "AM").replace("aM", "AM").replace("Am", "AM").replace("pm", "PM").replace("pM", "PM").replace("Pm", "PM");

  if (cleanedVal.includes(" ")) {
    return _toConsumableArray(cleanedVal.split(/:| /));
  }

  return _toConsumableArray(cleanedVal.replace(/[AP]/, " $&").split(/:| /));
};
export var deriveInputValue = function deriveInputValue(inputIsDirty, inputValue, dialValues) {
  if (inputIsDirty) {
    return inputValue;
  }

  var _dialValues = _slicedToArray(dialValues, 3),
      hh = _dialValues[0],
      mm = _dialValues[1],
      aa = _dialValues[2];

  if (hh === "--" && mm === "--" && aa === "--") {
    return "";
  }

  return "".concat(hh, ":").concat(mm, " ").concat(aa);
};
/*
  dials
*/

export var transformTimeToDialValues = function transformTimeToDialValues(time) {
  if (!time || time === "" || time === INVALID_TIME) {
    return ["--", "--", "--"];
  }

  var _time$split = time.split(":"),
      _time$split2 = _slicedToArray(_time$split, 2),
      HH = _time$split2[0],
      mm = _time$split2[1];

  var HHAsNum = Number(HH);
  var aa = HHAsNum < 12 ? "AM" : "PM";
  var hh;

  if (HHAsNum === 0) {
    hh = "12";
  } else if (HHAsNum > 12) {
    hh = String(HHAsNum - 12).padStart(2, "0");
  } else {
    hh = String(HHAsNum).padStart(2, "0");
  }

  return [hh, mm, aa];
};
export var transformDialValuesToTime = function transformDialValuesToTime(hh, mm, aa) {
  if (!hh || !mm || !aa) {
    return null;
  }

  var hhAsNum = Number(hh);
  var HH;

  if (hhAsNum === 12 && aa === "AM") {
    HH = "00";
  } else if (hhAsNum < 12 && aa === "PM") {
    HH = String(hhAsNum + 12);
  } else {
    HH = hh.padStart(2, "0");
  }

  return "".concat(HH, ":").concat(mm);
};
export var hoursDialOptions = Array(12).fill().map(function (_, idx) {
  return String(1 + idx).padStart(2, "0");
});
export var minutesDialOptions = Array(60).fill().map(function (_, idx) {
  return String(0 + idx).padStart(2, "0");
});
export var meridiemDialOptions = ["AM", "PM"];
export var getNextDialOption = function getNextDialOption(options, current) {
  var currentIdx = options.indexOf(current);

  if (currentIdx < options.length - 1) {
    return options[currentIdx + 1];
  }

  return options[0];
};
export var getPreviousDialOption = function getPreviousDialOption(options, current) {
  var currentIdx = options.indexOf(current);

  if (currentIdx !== 0) {
    return options[currentIdx - 1];
  }

  return options[options.length - 1];
};