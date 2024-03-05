function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
import { EMPTY_DIAL_VALUE, INVALID_TIME } from "../../../constants";

/*
  input
*/
export var getInputIsDirty = function getInputIsDirty(val) {
  return val !== null;
};
export var getInputValueIsValid = function getInputValueIsValid(val) {
  return !!val && val.trim().length < 9 && /\b((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/.test(val);
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
  if (hh === EMPTY_DIAL_VALUE && mm === EMPTY_DIAL_VALUE && aa === EMPTY_DIAL_VALUE) {
    return "";
  }
  return "".concat(hh, ":").concat(mm, " ").concat(aa);
};

/*
  dials
*/
export var transformTimeToDialValues = function transformTimeToDialValues(time) {
  if (!time || time === "" || time === INVALID_TIME) {
    return [EMPTY_DIAL_VALUE, EMPTY_DIAL_VALUE, EMPTY_DIAL_VALUE];
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