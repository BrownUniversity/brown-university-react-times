export const getInputIsDirty = val => val !== null;

export const getInputValueIsValid = val =>
  !!val &&
  val.trim().length < 9 &&
  /\b((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/.test(val);

export const transformInputValueForOutput = val => {
  const cleanedVal = val
    .trim()
    .replace("am", "AM")
    .replace("aM", "AM")
    .replace("Am", "AM")
    .replace("pm", "PM")
    .replace("pM", "PM")
    .replace("Pm", "PM");

  if (cleanedVal.includes(" ")) {
    return [...cleanedVal.split(/:| /)];
  }

  return [...cleanedVal.replace(/[AP]/, " $&").split(/:| /)];
};

export const transformTimeIn = time => {
  if (!time) {
    return ["--", "--", "--"];
  }

  const [HH, mm] = time.split(":");
  const HHAsNum = Number(HH);
  const aa = HHAsNum < 12 ? "AM" : "PM";
  let hh;

  if (HHAsNum === 0) {
    hh = "12";
  } else if (HHAsNum > 12) {
    hh = String(HHAsNum - 12).padStart(2, "0");
  } else {
    hh = String(HHAsNum).padStart(2, "0");
  }

  return [hh, mm, aa];
};

export const transformTimeOut = (hh, mm, aa) => {
  if (!hh || !mm || !aa) {
    return null;
  }

  const hhAsNum = Number(hh);
  let HH;

  if (hhAsNum === 12 && aa === "AM") {
    HH = "00";
  } else if (hhAsNum < 12 && aa === "PM") {
    HH = String(hhAsNum + 12);
  } else {
    HH = hh.padStart(2, "0");
  }

  return `${HH}:${mm}`;
};

export const hhOptions = Array(12)
  .fill()
  .map((_, idx) => String(1 + idx).padStart(2, "0"));

export const mmOptions = Array(60)
  .fill()
  .map((_, idx) => String(0 + idx).padStart(2, "0"));

export const aaOptions = ["AM", "PM"];

export const getNextOption = (options, current) => {
  const currentIdx = options.indexOf(current);

  if (currentIdx < options.length - 1) {
    return options[currentIdx + 1];
  }

  return options[0];
};

export const getPreviousOption = (options, current) => {
  const currentIdx = options.indexOf(current);

  if (currentIdx !== 0) {
    return options[currentIdx - 1];
  }

  return options[options.length - 1];
};
