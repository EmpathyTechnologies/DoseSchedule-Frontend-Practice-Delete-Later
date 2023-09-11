function getMonthLength_Month2(year: any, month: any) {
  let currentYear = year;
  let currentMonth = month;

  if (currentMonth === 11) {
    currentYear = year + 1;
    currentMonth = 0;
  } else currentMonth = month + 1;

  return new Date(currentYear, currentMonth, 0).getDate();
  // 0 gets the last day of the previous month, so add +1 to get the current month
}

export default getMonthLength_Month2;
