export const getInputValueIsValid = val => {
  // "hh:mm A" format
  return /\b((1[0-2]|0?[1-9]):([0-5][0-9]) ([AaPp][Mm]))/.test(val);
};

export const mungeTimeIn = time => {
  if (!time) {
    return ["--", "--", "--"];
  }

  const [HH, mm] = time.split(":");
  const HHAsNum = Number(HH);
  const A = HHAsNum < 12 ? "AM" : "PM";
  let h;

  if (HHAsNum === 0) {
    h = "12";
  } else if (HHAsNum > 12) {
    h = String(HHAsNum - 12);
  } else {
    h = String(HHAsNum);
  }

  return [h, mm, A];
};

export const mungeTimeOut = (h, mm, A) => {
  if (!h || !mm || !A) {
    return null;
  }

  const hAsNum = Number(h);
  let HH;

  if (hAsNum === 12 && A === "AM") {
    HH = "00";
  } else if (hAsNum < 12 && A === "PM") {
    HH = String(hAsNum + 12);
  } else {
    HH = h.padStart(2, "0");
  }

  return `${HH}:${mm}`;
};

export const hOptions = Array(12)
  .fill()
  .map((_, idx) => String(1 + idx));

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
