import getMonth_Month1 from "../getMonth_Month1";

describe("getMonth_Month1", () => {
  it('should return "JANUARY" for input 1', () => {
    expect(getMonth_Month1(1)).toBe("JANUARY");
  });

  it('should return "FEBRUARY" for input 2', () => {
    expect(getMonth_Month1(2)).toBe("FEBRUARY");
  });

  it('should return "MARCH" for input 3', () => {
    expect(getMonth_Month1(3)).toBe("MARCH");
  });

  it('should return "DECEMBER" for input 12', () => {
    expect(getMonth_Month1(12)).toBe("DECEMBER");
  });

  it('should return "error in file getMonth_Month1" for invalid input', () => {
    const invalidInput = "invalid";
    expect(getMonth_Month1(invalidInput)).toBe("error in file getMonth_Month1");
  });
});
