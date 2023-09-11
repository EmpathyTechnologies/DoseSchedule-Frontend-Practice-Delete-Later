async function getWeekdayDay1_Month1(year: any, month: any) {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const firstDayOfCurrentMonth = new Date(year, month - 1, 1);
  const dayIndex = firstDayOfCurrentMonth.getDay();
  const dayOfWeek = daysOfWeek[dayIndex];
  return dayOfWeek;
}

export default getWeekdayDay1_Month1;
