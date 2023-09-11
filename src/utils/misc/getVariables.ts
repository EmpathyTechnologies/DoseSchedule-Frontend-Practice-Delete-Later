import getBaseVariables from "../get/getBaseVariables";
import getMonth_Month1 from "../get/getMonth_Month1";
import getMonth_Month2 from "../get/getMonth_Month2";
import getWeekdayDay1_Month1 from "../get/getWeekdayDay1_Month1";
import getWeekdayDay1_Month2 from "../get/getWeekdayDay1_Month2";
import getMonthLength_Month1 from "../get/getMonthLength_Month1";
import getMonthLength_Month2 from "../get/getMonthLength_Month2";
import getYearNumber_Month2 from "../get/getYear_Month2";
import getCellNumbers from "../get/getCellNumbers";
import getCellText from "../get/getCellText";

const getVariables = async (today: any, residualRenalFunction: any, createdBy: string) => {
  if (today != null) {
    const localToday = new Date(today);
    const year = localToday.getFullYear();
    const month = localToday.getMonth() + 1;
    const date = localToday.getDate();

    const baseVariables = await getBaseVariables();
    const name_month1 = await getMonth_Month1(month);
    const name_month2 = await getMonth_Month2(month);
    const year_month1 = year;
    const year_month2 = await getYearNumber_Month2(year, month);
    const weekdayDay1_month1 = await getWeekdayDay1_Month1(year, month);
    const weekdayDay1_month2 = await getWeekdayDay1_Month2(year, month);
    const monthLength_month1 = await getMonthLength_Month1(year, month);
    const monthLength_month2 = await getMonthLength_Month2(year, month);
    const cellNumbers = await getCellNumbers(year, month);
    const cellText = await getCellText(residualRenalFunction, year, month, date);

    return {
      today,
      baseVariables,
      month1Name: name_month1,
      month2Name: name_month2,
      month1YearNumber: year_month1,
      month2YearNumber: year_month2,
      month1Day1Weekday: weekdayDay1_month1,
      month2Day1Weekday: weekdayDay1_month2,
      month1DaysCount: monthLength_month1,
      month2DaysCount: monthLength_month2,
      cellNumbers,
      cellText,
    };
  }

  return {
    today,
    baseVariables: null,
    month1Name: null,
    month2Name: null,
    month1YearNumber: null,
    month2YearNumber: null,
    month1Day1Weekday: null,
    month2Day1Weekday: null,
    month1DaysCount: null,
    month2DaysCount: null,
    cellNumbers: [],
    cellText: [],
  };
};

export default getVariables;
