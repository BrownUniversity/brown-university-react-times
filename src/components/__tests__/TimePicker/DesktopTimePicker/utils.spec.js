import {
  getInputIsDirty,
  getInputValueIsValid,
  transformInputValueToDialValues,
  deriveInputValue,
  transformTimeToDialValues,
  transformDialValuesToTime,
  getNextDialOption,
  getPreviousDialOption,
} from "../../../TimePicker/DesktopTimePicker/utils";
import { EMPTY_DIAL_VALUE, INVALID_TIME } from "../../../../constants";

describe("DesktopTimePicker utils", () => {
  describe("getInputIsDirty", () => {
    it("returns true when value is not null", () => {
      expect(getInputIsDirty("")).toBe(true);
      expect(getInputIsDirty("01:")).toBe(true);
      expect(getInputIsDirty("01:3O A")).toBe(true);
    });

    it("returns false when value is null", () => {
      expect(getInputIsDirty(null)).toBe(false);
    });
  });

  describe("getInputValueIsValid", () => {
    it("returns true for valid times", () => {
      expect(getInputValueIsValid("01:30 AM")).toBe(true);
      expect(getInputValueIsValid("01:30 am")).toBe(true);
      expect(getInputValueIsValid("1:30 AM")).toBe(true);
      expect(getInputValueIsValid("11:59 PM")).toBe(true);
      expect(getInputValueIsValid("11:59 pm")).toBe(true);
      expect(getInputValueIsValid("12:00 AM")).toBe(true);
      expect(getInputValueIsValid("12:00 PM")).toBe(true);
      expect(getInputValueIsValid("09:41am")).toBe(true);
      expect(getInputValueIsValid("09:41pm")).toBe(true);
    });

    it("returns false for invalid times", () => {
      expect(getInputValueIsValid("")).toBe(false);
      expect(getInputValueIsValid(":30 AM")).toBe(false);
      expect(getInputValueIsValid("0130 AM")).toBe(false);
      expect(getInputValueIsValid("01: AM")).toBe(false);
      expect(getInputValueIsValid("01:30")).toBe(false);
      expect(getInputValueIsValid("01 :30 PM")).toBe(false);
      expect(getInputValueIsValid("01: 30 PM")).toBe(false);
      expect(getInputValueIsValid("01 : 30 PM")).toBe(false);
      expect(getInputValueIsValid("0 1:30 PM")).toBe(false);
      expect(getInputValueIsValid("01:3 0 PM")).toBe(false);
      expect(getInputValueIsValid("01:30 P M")).toBe(false);
      expect(getInputValueIsValid("Ol:3o PM")).toBe(false);
      expect(getInputValueIsValid("13:00")).toBe(false);
      expect(getInputValueIsValid("23:59 PM")).toBe(false);
      expect(getInputValueIsValid("23:59 PM 11:59 PM")).toBe(false);
      expect(getInputValueIsValid(INVALID_TIME)).toBe(false);
    });
  });

  describe("transformInputValueToDialValues", () => {
    const expectedAM = ["09", "41", "AM"];
    const expectedPM = ["09", "41", "PM"];

    it("handles present space between mm and aa", () => {
      expect(transformInputValueToDialValues("09:41 am")).toEqual(expectedAM);
      expect(transformInputValueToDialValues("09:41 aM")).toEqual(expectedAM);
      expect(transformInputValueToDialValues("09:41 Am")).toEqual(expectedAM);
      expect(transformInputValueToDialValues("09:41 AM")).toEqual(expectedAM);
      expect(transformInputValueToDialValues("09:41 pm")).toEqual(expectedPM);
      expect(transformInputValueToDialValues("09:41 Pm")).toEqual(expectedPM);
      expect(transformInputValueToDialValues("09:41 pM")).toEqual(expectedPM);
      expect(transformInputValueToDialValues("09:41 PM")).toEqual(expectedPM);
    });

    it("handles absent space between mm and aa", () => {
      expect(transformInputValueToDialValues("09:41am")).toEqual(expectedAM);
      expect(transformInputValueToDialValues("09:41aM")).toEqual(expectedAM);
      expect(transformInputValueToDialValues("09:41Am")).toEqual(expectedAM);
      expect(transformInputValueToDialValues("09:41AM")).toEqual(expectedAM);
      expect(transformInputValueToDialValues("09:41pm")).toEqual(expectedPM);
      expect(transformInputValueToDialValues("09:41Pm")).toEqual(expectedPM);
      expect(transformInputValueToDialValues("09:41pM")).toEqual(expectedPM);
      expect(transformInputValueToDialValues("09:41PM")).toEqual(expectedPM);
    });
  });

  describe("deriveInputValue", () => {
    describe("when inputIsDirty equals true", () => {
      it("returns inputValue", () => {
        expect(
          deriveInputValue(true, "08:1", [
            EMPTY_DIAL_VALUE,
            EMPTY_DIAL_VALUE,
            EMPTY_DIAL_VALUE,
          ]),
        ).toBe("08:1");
      });
    });

    describe("when inputIsDirty equals false", () => {
      it("returns an empty string if dialValues are not displayed", () => {
        expect(
          deriveInputValue(false, "", [
            EMPTY_DIAL_VALUE,
            EMPTY_DIAL_VALUE,
            EMPTY_DIAL_VALUE,
          ]),
        ).toBe("");
      });

      it("returns dialValues in 'hh:mm aa' format if dialValues are displayed", () => {
        expect(deriveInputValue(false, "", ["08", "18", "AM"])).toBe(
          "08:18 AM",
        );
      });
    });
  });

  describe("transformTimeToDialValues", () => {
    it("handles missing time", () => {
      expect(transformTimeToDialValues(null)).toEqual([
        EMPTY_DIAL_VALUE,
        EMPTY_DIAL_VALUE,
        EMPTY_DIAL_VALUE,
      ]);
    });

    it("handles empty time", () => {
      expect(transformTimeToDialValues("")).toEqual([
        EMPTY_DIAL_VALUE,
        EMPTY_DIAL_VALUE,
        EMPTY_DIAL_VALUE,
      ]);
    });

    it("handles invalid time", () => {
      expect(transformTimeToDialValues(INVALID_TIME)).toEqual([
        EMPTY_DIAL_VALUE,
        EMPTY_DIAL_VALUE,
        EMPTY_DIAL_VALUE,
      ]);
    });

    it("handles AM time", () => {
      expect(transformTimeToDialValues("01:30")).toEqual(["01", "30", "AM"]);
    });

    it("handles PM time", () => {
      expect(transformTimeToDialValues("23:59")).toEqual(["11", "59", "PM"]);
    });

    it("handles midnignt", () => {
      expect(transformTimeToDialValues("00:00")).toEqual(["12", "00", "AM"]);
    });

    it("handles noon", () => {
      expect(transformTimeToDialValues("12:00")).toEqual(["12", "00", "PM"]);
    });
  });

  describe("transformDialValuesToTime", () => {
    it("handles missing hours value", () => {
      expect(transformDialValuesToTime(null, "20", "AM")).toEqual(null);
    });

    it("handles missing minutes value", () => {
      expect(transformDialValuesToTime("01", null, "AM")).toEqual(null);
    });

    it("handles missing meridiem value", () => {
      expect(transformDialValuesToTime("01", "30", null)).toEqual(null);
    });

    it("handles values for AM time", () => {
      expect(transformDialValuesToTime("01", "30", "AM")).toBe("01:30");
    });

    it("handles values PM time", () => {
      expect(transformDialValuesToTime("11", "59", "PM")).toBe("23:59");
    });

    it("handles values for midnignt", () => {
      expect(transformDialValuesToTime("12", "00", "AM")).toBe("00:00");
    });

    it("handles values for noon", () => {
      expect(transformDialValuesToTime("12", "00", "PM")).toBe("12:00");
    });
  });

  describe("getNextDialOption", () => {
    describe("when current is not last option", () => {
      it("returns next option in array", () => {
        expect(getNextDialOption([1, 2], 1)).toBe(2);
      });
    });

    describe("when current is last option", () => {
      it("returns first option in array", () => {
        expect(getNextDialOption([1, 2], 2)).toBe(1);
      });
    });
  });

  describe("getPreviousDialOption", () => {
    describe("when current is not first option", () => {
      it("returns previous option in array", () => {
        expect(getPreviousDialOption([1, 2], 2)).toBe(1);
      });
    });

    describe("when current is first option", () => {
      it("returns last option in array", () => {
        expect(getPreviousDialOption([1, 2], 1)).toBe(2);
      });
    });
  });
});
