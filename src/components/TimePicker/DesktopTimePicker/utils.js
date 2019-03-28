export const getInputIsDirty = val => val !== null;

export const getInputValueIsValid = val =>
  /\b((1[0-2]|0?[1-9]):([0-5][0-9]) ([AP][M]))/.test(val);

export const mungeTimeIn = time => {
  if (!time) {
    return ["--", "--", "--"];
  }

  const [HH, mm] = time.split(":");
  const HHAsNum = Number(HH);
  const A = HHAsNum < 12 ? "AM" : "PM";
  let hh;

  if (HHAsNum === 0) {
    hh = "12";
  } else if (HHAsNum > 12) {
    hh = String(HHAsNum - 12).padStart(2, "0");
  } else {
    hh = String(HHAsNum).padStart(2, "0");
  }

  return [hh, mm, A];
};

export const mungeTimeOut = (hh, mm, A) => {
  if (!hh || !mm || !A) {
    return null;
  }

  const hhAsNum = Number(hh);
  let HH;

  if (hhAsNum === 12 && A === "AM") {
    HH = "00";
  } else if (hhAsNum < 12 && A === "PM") {
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

export const AOptions = ["AM", "PM"];

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
