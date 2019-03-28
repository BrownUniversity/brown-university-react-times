import {
  mungeTimeIn,
  mungeTimeOut,
  getNextOption,
  getPreviousOption
} from "../../../TimePicker/DesktopTimePicker/utils";

describe("DesktopTimePicker utils", () => {
  describe("mungeTimeIn", () => {
    it("should handle missing time", () => {
      expect(mungeTimeIn(null)).toEqual(["--", "--", "--"]);
    });

    it("should handle AM time", () => {
      expect(mungeTimeIn("01:30")).toEqual(["1", "30", "AM"]);
    });

    it("should handle PM time", () => {
      expect(mungeTimeIn("23:59")).toEqual(["11", "59", "PM"]);
    });

    it("should handle midnignt", () => {
      expect(mungeTimeIn("00:00")).toEqual(["12", "00", "AM"]);
    });

    it("should handle noon", () => {
      expect(mungeTimeIn("12:00")).toEqual(["12", "00", "PM"]);
    });
  });

  describe("mungeTimeOut", () => {
    it("should handle missing time", () => {
      expect(mungeTimeOut(null)).toEqual(null);
    });

    it("should handle AM time", () => {
      expect(mungeTimeOut("1", "30", "AM")).toEqual("01:30");
    });

    it("should handle PM time", () => {
      expect(mungeTimeOut("11", "59", "PM")).toEqual("23:59");
    });

    it("should handle midnignt", () => {
      expect(mungeTimeOut("12", "00", "AM")).toEqual("00:00");
    });

    it("should handle noon", () => {
      expect(mungeTimeOut("12", "00", "PM")).toEqual("12:00");
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
