import {
  getInputIsDirty,
  getInputValueIsValid,
  transformInputValueForOutput,
  transformTimeIn,
  transformTimeOut,
  getNextOption,
  getPreviousOption
} from "../../../TimePicker/DesktopTimePicker/utils";

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
      expect(getInputValueIsValid("Invalid Date")).toBe(false);
    });
  });

  describe("transformInputValueForOutput", () => {
    it("handles present space between mm and aa", () => {
      expect(transformInputValueForOutput("09:41 AM")).toEqual([
        "09",
        "41",
        "AM"
      ]);
      expect(transformInputValueForOutput("09:41 am")).toEqual([
        "09",
        "41",
        "AM"
      ]);
      expect(transformInputValueForOutput("09:41 PM")).toEqual([
        "09",
        "41",
        "PM"
      ]);
      expect(transformInputValueForOutput("09:41 pm")).toEqual([
        "09",
        "41",
        "PM"
      ]);
    });

    it("handles absent space between mm and aa", () => {
      expect(transformInputValueForOutput("09:41AM")).toEqual([
        "09",
        "41",
        "AM"
      ]);
      expect(transformInputValueForOutput("09:41am")).toEqual([
        "09",
        "41",
        "AM"
      ]);
      expect(transformInputValueForOutput("09:41PM")).toEqual([
        "09",
        "41",
        "PM"
      ]);
      expect(transformInputValueForOutput("09:41pm")).toEqual([
        "09",
        "41",
        "PM"
      ]);
    });
  });

  describe("transformTimeIn", () => {
    it("should handle missing time", () => {
      expect(transformTimeIn(null)).toEqual(["--", "--", "--"]);
    });

    it("should handle AM time", () => {
      expect(transformTimeIn("01:30")).toEqual(["01", "30", "AM"]);
    });

    it("should handle PM time", () => {
      expect(transformTimeIn("23:59")).toEqual(["11", "59", "PM"]);
    });

    it("should handle midnignt", () => {
      expect(transformTimeIn("00:00")).toEqual(["12", "00", "AM"]);
    });

    it("should handle noon", () => {
      expect(transformTimeIn("12:00")).toEqual(["12", "00", "PM"]);
    });
  });

  describe("transformTimeOut", () => {
    it("should handle missing time", () => {
      expect(transformTimeOut(null)).toEqual(null);
    });

    it("should handle AM time", () => {
      expect(transformTimeOut("01", "30", "AM")).toBe("01:30");
    });

    it("should handle PM time", () => {
      expect(transformTimeOut("11", "59", "PM")).toBe("23:59");
    });

    it("should handle midnignt", () => {
      expect(transformTimeOut("12", "00", "AM")).toBe("00:00");
    });

    it("should handle noon", () => {
      expect(transformTimeOut("12", "00", "PM")).toBe("12:00");
    });
  });

  describe("getNextOption", () => {
    const options = [1, 2];

    describe("when current is not last option", () => {
      it("should return next option in array", () => {
        expect(getNextOption(options, 1)).toBe(2);
      });
    });

    describe("when current is last option", () => {
      it("should return first option in array", () => {
        expect(getNextOption(options, 2)).toBe(1);
      });
    });
  });

  describe("getPreviousOption", () => {
    const options = [1, 2];

    describe("when current is not first option", () => {
      it("should return previous option in array", () => {
        expect(getPreviousOption(options, 2)).toBe(1);
      });
    });

    describe("when current is first option", () => {
      it("should return last option in array", () => {
        expect(getPreviousOption(options, 1)).toBe(2);
      });
    });
  });
});
