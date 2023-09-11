import getCurrentDate from "../getCurrentDate";

describe("getCurrentDate", () => {
  // Test case 1: Check if the returned date is in the correct format (YYYY-MM-DD)
  it("returns a date in the YYYY-MM-DD format", () => {
    const currentDate = getCurrentDate();
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    expect(datePattern.test(currentDate)).toBe(true);
  });

  // Test case 2: Check if the returned date is a valid date
  it("returns a valid date", () => {
    const currentDate = getCurrentDate();
    const parsedDate = new Date(currentDate);
    expect(parsedDate.toString()).not.toBe("Invalid Date");
  });

  // Test case 3: Check if the year, month, and day components are correct
  it("returns the current year, month, and day", () => {
    const currentDate = getCurrentDate();
    const year = new Date().getFullYear().toString();
    const month = (new Date().getMonth() + 1).toString().padStart(2, "0");
    const day = new Date().getDate().toString().padStart(2, "0");

    const expectedDate = `${year}-${month}-${day}`;
    expect(currentDate).toBe(expectedDate);
  });
});
