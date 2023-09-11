// import getYear_Month2 from "../YES_getYear_Month2";
import getMonthLength_Month1 from "../getMonthLength_Month1";

// import getMonthLength_Month1 from './getMonthLength_Month1';

describe("getMonthLength_Month1", () => {
  test("February in a non-leap year should return 28", () => {
    expect(getMonthLength_Month1(2023, 2)).toBe(28);
  });

  test("February in a leap year should return 29", () => {
    expect(getMonthLength_Month1(2024, 2)).toBe(29);
  });

  test("January should return 31", () => {
    expect(getMonthLength_Month1(2023, 1)).toBe(31);
  });

  test("December should return 31", () => {
    expect(getMonthLength_Month1(2023, 12)).toBe(31);
  });
});
