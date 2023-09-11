function getMonthLength_Month1(year: any, month: any) {
  return new Date(year, month, 0).getDate();
  // 0 gets the last day of the previous month, so add +1 to get the current month
}

export default getMonthLength_Month1;
