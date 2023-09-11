import getYear_Month2 from "../getYear_Month2";

describe("getYearNumber_Month2", () => {
  it("should return year + 1 if month is 12", async () => {
    // Arrange
    const year = 2022;
    const month = 12;

    // Act
    const result = await getYear_Month2(year, month);

    // Assert
    expect(result).toBe(year + 1);
  });

  it("should return the same year if month is not 12", async () => {
    // Arrange
    const year = 2022;
    const month = 6;

    // Act
    const result = await getYear_Month2(year, month);

    // Assert
    expect(result).toBe(year);
  });
});
