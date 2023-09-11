import getMonthLength_Month2 from "../getMonthLength_Month2";

describe("getMonthLength_Month2", () => {
  it("should return 28 for February 2022", () => {
    expect(getMonthLength_Month2(2022, 1)).toBe(28);
  });

  it("should return 31 for January 2023", () => {
    expect(getMonthLength_Month2(2023, 0)).toBe(31);
  });

  it("should return 30 for November 2022", () => {
    expect(getMonthLength_Month2(2022, 10)).toBe(30);
  });

  it("should return 31 for December 2022", () => {
    expect(getMonthLength_Month2(2022, 11)).toBe(31);
  });

  it("should return 31 for January 2024", () => {
    expect(getMonthLength_Month2(2024, 0)).toBe(31);
  });

  it("should return 30 for August 2022", () => {
    expect(getMonthLength_Month2(2022, 7)).toBe(31);
  });
});
