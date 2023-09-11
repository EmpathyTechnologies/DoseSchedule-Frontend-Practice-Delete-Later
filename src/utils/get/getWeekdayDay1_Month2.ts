async function getWeekdayDay1_Month2(year: any, month: any) {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let year_month2 = year;
  let month2 = month + 1;

  if (month2 === 13) {
    month2 = 1;
    year_month2 = year_month2 + 1;
  }

  const firstDayOfCurrentMonth = new Date(year_month2, month2 - 1, 1);
  // the paramater is on a 1-12 month schedule, whereas new Date() uses a 0-11 month schedule.  That is why there is a -1 in the above code.
  const dayIndex = firstDayOfCurrentMonth.getDay();
  const dayOfWeek = daysOfWeek[dayIndex];
  return dayOfWeek;
}

export default getWeekdayDay1_Month2;
